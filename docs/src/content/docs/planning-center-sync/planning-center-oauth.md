---
title: "Planning Center OAuth Guide"
description: "Reference for implementing OAuth 2.0 authentication with Planning Center."
---

# Planning Center OAuth Guide

Reference for implementing OAuth 2.0 authentication with Planning Center.

---

## Developer App Setup

1. Go to [https://api.planningcenteronline.com/oauth/applications](https://api.planningcenteronline.com/oauth/applications)
2. Create a new **OAuth** application (not Personal Access Token)
3. Configure:
   - **App name**: Your integration name
   - **Redirect URI(s)**: Where users return after authorizing
   - **Scopes**: Which PC products your app needs access to
4. You'll receive a **Client ID** and **Client Secret**

### One App Per Scope vs. Multiple Scopes

You can either:
- **One app, multiple scopes**: Request `scope=people calendar` — the user grants access to both products at once. Simpler but couples the permissions.
- **Separate apps per scope**: Create one developer app for People, another for Calendar, etc. Each has its own Client ID/Secret and redirect URI. This lets users connect each product independently, and you can have different connection states per product.

MinistryFlow uses separate apps (one for People sync, one for Calendar features) because they serve different features and users may want one without the other.

### Environment Variables

```env
# People app
PLANNING_CENTER_CLIENT_ID=<from developer app>
PLANNING_CENTER_CLIENT_SECRET=<from developer app>
PLANNING_CENTER_REDIRECT_URI=https://yourapp.com/callback/planning-center

# Calendar app (if separate)
PLANNING_CENTER_CALENDAR_CLIENT_ID=<from developer app>
PLANNING_CENTER_CALENDAR_CLIENT_SECRET=<from developer app>
PLANNING_CENTER_CALENDAR_REDIRECT_URI=https://yourapp.com/callback/planning-center-calendar
```

---

## OAuth 2.0 Flow

PC uses the standard **Authorization Code** grant.

### Step 1: Redirect User to Authorize

```
GET https://api.planningcenteronline.com/oauth/authorize
  ?response_type=code
  &client_id=YOUR_CLIENT_ID
  &redirect_uri=YOUR_REDIRECT_URI
  &scope=people
  &state=OPTIONAL_STATE_VALUE
```

**Available scopes**: `people`, `calendar`, `giving`, `groups`, `check_ins`, `services`, `registrations`

Multiple scopes can be space-separated: `scope=people calendar`

The `state` parameter passes through the flow — useful for carrying context like an organization ID.

### Step 2: Exchange Code for Tokens

After the user authorizes, PC redirects to your `redirect_uri` with a `code` query param.

```
POST https://api.planningcenteronline.com/oauth/token
Content-Type: application/x-www-form-urlencoded

grant_type=authorization_code
&code=AUTHORIZATION_CODE
&client_id=YOUR_CLIENT_ID
&client_secret=YOUR_CLIENT_SECRET
&redirect_uri=YOUR_REDIRECT_URI
```

**Response:**

```json
{
  "access_token": "abc123...",
  "refresh_token": "def456...",
  "token_type": "Bearer",
  "scope": "people",
  "created_at": 1709337600,
  "expires_in": 7200
}
```

- `expires_in` is in seconds (typically 2 hours / 7200s)
- Store both tokens **encrypted** in your database
- The access token is scoped to the **organization** the user selected during authorization

### Step 3: Get the Organization ID

After getting tokens, immediately fetch the org identity:

```
GET https://api.planningcenteronline.com/people/v2/me
Authorization: Bearer ACCESS_TOKEN
```

Store the returned `data.id` as `pcOrganizationId` — you'll need this to match webhook payloads to your internal org records.

---

## Token Refresh

PC access tokens expire (typically 2 hours). Refresh them **proactively** before they expire.

```
POST https://api.planningcenteronline.com/oauth/token
Content-Type: application/x-www-form-urlencoded

grant_type=refresh_token
&refresh_token=STORED_REFRESH_TOKEN
&client_id=YOUR_CLIENT_ID
&client_secret=YOUR_CLIENT_SECRET
```

Returns a new token pair. **Always store the new `refresh_token`** — the old one is invalidated immediately.

### Refresh Strategy

1. Store `tokenExpiresAt` timestamp in your database
2. Before each API call, check if token expires within 5 minutes
3. If expiring soon: refresh first, store new tokens, then make the API call
4. If refresh fails with `invalid_grant`: mark connection as `needsReconnect` and notify the user

### Critical Details

- Refresh tokens are **single-use** — using one twice will fail
- **Race conditions**: If multiple processes try to refresh the same token simultaneously, only the first succeeds. Use a distributed lock (e.g. Redis) in multi-process environments.
- Always store the **new** refresh token from every successful refresh response
- If you lose the refresh token (crash between refresh and DB write), the user must re-authenticate via OAuth

### Code Pattern

```typescript
async function ensureFreshToken(connection) {
  const buffer = 5 * 60 * 1000; // 5 minutes
  const now = Date.now();

  if (connection.tokenExpiresAt && connection.tokenExpiresAt.getTime() - now > buffer) {
    return decrypt(connection.accessToken); // Still valid
  }

  const response = await fetch("https://api.planningcenteronline.com/oauth/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: decrypt(connection.refreshToken),
      client_id: process.env.PLANNING_CENTER_CLIENT_ID,
      client_secret: process.env.PLANNING_CENTER_CLIENT_SECRET,
    }),
  });

  if (!response.ok) {
    const text = await response.text();
    if (text.includes("invalid_grant")) {
      await markNeedsReconnect(connection.organizationId);
      throw new Error("PC token expired — reconnection required");
    }
    throw new Error(`PC token refresh failed: ${response.status}`);
  }

  const tokens = await response.json();

  await updateConnection(connection.organizationId, {
    accessToken: encrypt(tokens.access_token),
    refreshToken: encrypt(tokens.refresh_token),
    tokenExpiresAt: new Date(Date.now() + tokens.expires_in * 1000),
  });

  return tokens.access_token;
}
```

---

## API Basics

### Base URL

```
https://api.planningcenteronline.com
```

### Product API Paths

| Product | Base Path |
|---------|-----------|
| People | `/people/v2` |
| Calendar | `/calendar/v2` |
| Giving | `/giving/v2` |
| Groups | `/groups/v2` |
| Check-Ins | `/check-ins/v2` |
| Services | `/services/v2` |
| Webhooks | `/webhooks/v2` |

### Authentication Header

```
Authorization: Bearer YOUR_ACCESS_TOKEN
```

### JSON:API Format

PC uses the [JSON:API](https://jsonapi.org/) specification. All responses follow:

```json
{
  "data": {
    "type": "Person",
    "id": "12345",
    "attributes": { "first_name": "John", "last_name": "Doe" },
    "relationships": {
      "emails": { "data": [{ "type": "Email", "id": "67890" }] }
    }
  },
  "included": [
    { "type": "Email", "id": "67890", "attributes": { "address": "john@example.com" } }
  ],
  "meta": { "total_count": 1 }
}
```

List endpoints return `data` as an array with pagination in `meta.next.offset`.

### Pagination

```
GET /people/v2/people?per_page=100&offset=0
GET /people/v2/people?per_page=100&offset=100
```

Max `per_page` is `100`.

### Including Related Resources

```
GET /people/v2/people/12345?include=emails,phone_numbers
```

Sideloaded data appears in the `included` array.

### Rate Limiting

- Add a delay between API calls (1s recommended for bulk operations)
- Retry 429 responses with exponential backoff
- Rate limits are per-token

### Tokens Are Org-Scoped

An access token from Org A cannot access Org B's data. Each organization that authenticates gets its own token pair. Store and manage tokens per-organization.

---

## Quick Reference

| What | URL |
|------|-----|
| OAuth Authorize | `https://api.planningcenteronline.com/oauth/authorize` |
| Token Exchange/Refresh | `https://api.planningcenteronline.com/oauth/token` |
| API Base | `https://api.planningcenteronline.com` |
| Developer Apps | `https://api.planningcenteronline.com/oauth/applications` |
| Developer Docs | `https://developer.planning.center/docs/` |
| Token Expiry | ~2 hours (7200 seconds) |
| Max per_page | 100 |
