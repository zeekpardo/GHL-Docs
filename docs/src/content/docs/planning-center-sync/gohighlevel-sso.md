---
title: "GoHighLevel SSO & Embedded Iframe Guide"
description: "Reference for implementing GHL's Single Sign-On (SSO) for embedding your app inside the GHL interface as a custom page/tab."
---

# GoHighLevel SSO & Embedded Iframe Guide

Reference for implementing GHL's Single Sign-On (SSO) for embedding your app inside the GHL interface as a custom page/tab.

---

## Overview

GHL allows marketplace apps to embed custom pages inside the GHL dashboard as iframes. When a user navigates to your app's tab, GHL sends an encrypted SSO payload via `postMessage` containing the user's identity and active sub-account (location).

Your app decrypts this payload, creates a session (JWT), and renders content inside the iframe.

---

## SSO Flow

```
1. User clicks your app's tab inside GHL dashboard
2. GHL loads your app URL in an iframe
3. GHL sends a postMessage to the iframe with encrypted SSO data
4. Your app listens for the message, sends encrypted data to your backend
5. Backend decrypts using the shared SSO secret
6. Backend creates a JWT session and sets a cookie (SameSite=None, Secure)
7. Frontend uses the JWT for subsequent API calls
```

---

## Marketplace App Configuration

In your marketplace app settings:
- Set the **Custom Page URL** (the URL GHL will embed in the iframe)
- Copy the **SSO Key** (shared secret for encryption)

### Environment Variables

```env
GHL_SSO_SHARED_SECRET=<SSO key from marketplace app settings>
GHL_EMBEDDED_JWT_SECRET=<random 32+ character string you generate>
```

---

## Decrypting the SSO Payload

GHL encrypts the SSO data using `CryptoJS.AES.encrypt` with the shared secret. This produces OpenSSL-compatible ciphertext:

- Format: Base64 of `"Salted__" + 8-byte salt + ciphertext`
- Key derivation: EVP_BytesToKey with MD5 (produces 32-byte key + 16-byte IV)
- Cipher: AES-256-CBC

### Decryption Code (Node.js)

```typescript
import { createHash, createDecipheriv } from "node:crypto";

function decryptGhlSsoPayload(encryptedData: string, secret: string): GhlSsoPayload {
  const rawBuffer = Buffer.from(encryptedData, "base64");

  // Verify OpenSSL "Salted__" prefix
  const prefix = rawBuffer.subarray(0, 8).toString("utf8");
  if (prefix !== "Salted__") {
    throw new Error("Invalid GHL SSO payload: missing Salted__ prefix");
  }

  const salt = rawBuffer.subarray(8, 16);
  const ciphertext = rawBuffer.subarray(16);

  // EVP_BytesToKey: derive 32-byte key + 16-byte IV using MD5
  const passphrase = Buffer.from(secret, "utf8");
  const keyIv = evpBytesToKey(passphrase, salt, 32, 16);
  const key = keyIv.subarray(0, 32);
  const iv = keyIv.subarray(32, 48);

  const decipher = createDecipheriv("aes-256-cbc", key, iv);
  const decrypted = Buffer.concat([decipher.update(ciphertext), decipher.final()]);

  return JSON.parse(decrypted.toString("utf8"));
}

function evpBytesToKey(
  passphrase: Buffer,
  salt: Buffer,
  keyLen: number,
  ivLen: number,
): Buffer {
  const totalLen = keyLen + ivLen;
  const result: Buffer[] = [];
  let totalBytes = 0;
  let prev = Buffer.alloc(0);

  while (totalBytes < totalLen) {
    const hash = createHash("md5");
    hash.update(prev);
    hash.update(passphrase);
    hash.update(salt);
    prev = hash.digest();
    result.push(prev);
    totalBytes += prev.length;
  }

  return Buffer.concat(result).subarray(0, totalLen);
}
```

### Decrypted Payload Shape

```typescript
interface GhlSsoPayload {
  activeLocation: string;  // locationId (sub-account)
  userId: string;          // GHL user ID
  email: string;           // User's email
  companyId: string;       // GHL company/agency ID
  role: string;            // User's role (e.g. "admin")
  userName: string;        // User's display name
}
```

---

## Session Management

After decrypting the SSO payload, create a JWT for your app:

```typescript
import { SignJWT, jwtVerify } from "jose";

const secret = new TextEncoder().encode(process.env.GHL_EMBEDDED_JWT_SECRET);

// Create JWT
async function createEmbeddedToken(payload: GhlSsoPayload, organizationId: string) {
  return new SignJWT({
    locationId: payload.activeLocation,
    userId: payload.userId,
    email: payload.email,
    organizationId,
  })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("4h")
    .sign(secret);
}

// Verify JWT
async function verifyEmbeddedToken(token: string) {
  const { payload } = await jwtVerify(token, secret);
  return payload;
}
```

Set the JWT as a cookie with `SameSite=None; Secure` (required for cross-origin iframe).

---

## Dual Auth Pattern

For APIs that need to work in both the main app (Better Auth session) and the embedded iframe (JWT), implement a dual auth procedure:

```typescript
// Try Better Auth session first, fall back to embedded JWT
async function resolveAuth(request) {
  // Try session cookie (main app)
  const session = await getSession(request);
  if (session) {
    return { type: "session", user: session.user, organizationId: ... };
  }

  // Try embedded JWT (iframe)
  const token = request.headers["x-embedded-token"]
    || request.cookies["embedded-token"];
  if (token) {
    const payload = await verifyEmbeddedToken(token);
    return { type: "embedded", ...payload };
  }

  throw new Error("Unauthorized");
}
```

---

## CSP Headers

Your app must allow being loaded in an iframe from GHL domains. Set these headers on all embedded routes:

```
Content-Security-Policy: frame-ancestors *
X-Frame-Options: ALLOWALL
```

**IMPORTANT**: Use `frame-ancestors *` (not a specific domain list). GHL has whitelabel domains (e.g. `app.minflow.co`, `app.yourwhitelabel.com`) that won't match `*.gohighlevel.com`. Wildcard is the only reliable option.

---

## OAuth in Embedded Context

OAuth flows (e.g. connecting to Planning Center) can't redirect inside an iframe. Use a **popup** pattern:

```typescript
// In the iframe:
function openOAuthPopup(authUrl: string) {
  const popup = window.open(authUrl, "oauth", "width=600,height=700");

  // Listen for completion
  window.addEventListener("message", (event) => {
    if (event.data === "OAUTH_CALLBACK_COMPLETE") {
      popup?.close();
      // Refresh the connection status
    }
  });
}

// In the OAuth callback page (popup):
function notifyParent() {
  window.opener?.postMessage("OAUTH_CALLBACK_COMPLETE", "*");
  window.close();
}
```

---

## Frontend Architecture

### SSO Handshake (Client-Side)

```typescript
// Listen for GHL's postMessage with SSO data
useEffect(() => {
  function handleMessage(event: MessageEvent) {
    const data = event.data;
    if (typeof data === "string" && data.length > 50) {
      // Likely SSO payload — send to backend for decryption
      fetch("/api/ghl-sso/decrypt", {
        method: "POST",
        body: JSON.stringify({ encryptedData: data }),
        credentials: "include",
      }).then(/* store JWT, set context */);
    }
  }

  window.addEventListener("message", handleMessage);
  return () => window.removeEventListener("message", handleMessage);
}, []);
```

### Organization Context

After SSO, you know the `locationId`. Look up which internal organization matches this location and provide it via context:

```typescript
const EmbeddedOrganizationProvider = ({ children }) => {
  const [org, setOrg] = useState(null);

  useEffect(() => {
    // SSO handshake gives us locationId
    // API call to resolve locationId → organizationId
    // Set org context
  }, []);

  return <OrgContext.Provider value={org}>{children}</OrgContext.Provider>;
};
```

---

## Route Structure

Separate embedded routes from your main app:

```
/embedded                    → Main embedded page (settings/dashboard)
/embedded/lists              → Feature pages
/embedded/workflows
/embedded/callback/*         → OAuth callbacks (loaded in popup, not iframe)
```

The embedded layout:
- No navigation sidebar (GHL provides navigation)
- No auth pages (SSO handles authentication)
- Minimal chrome — your content fills the iframe

---

## Gotchas

| Gotcha | Detail |
|--------|--------|
| **`frame-ancestors *`** | Must use wildcard. GHL whitelabel domains are unpredictable. |
| **`SameSite=None; Secure`** | Required for cookies in cross-origin iframes. Must use HTTPS. |
| **CryptoJS format** | GHL uses CryptoJS, which produces OpenSSL-compatible format. You need EVP_BytesToKey for key derivation — standard `crypto.scryptSync` won't work. |
| **OAuth popups** | Can't do OAuth redirects inside an iframe. Use `window.open()` and `postMessage` for callbacks. |
| **SSO secret ≠ org ID** | The SSO secret from marketplace settings is for decryption. Don't confuse it with the org/location ID. |
| **JWT expiry** | Use a reasonable expiry (4h). The embedded session doesn't have the same long-lived session as the main app. |
| **Reinstall after changes** | Changing the custom page URL or SSO key in marketplace settings may require sub-accounts to reinstall. |
