---
title: "GoHighLevel OAuth & API Guide"
description: "Reference for implementing OAuth 2.0 authentication and using the GoHighLevel (GHL) API."
---

# GoHighLevel OAuth & API Guide

Reference for implementing OAuth 2.0 authentication and using the GoHighLevel (GHL) API.

---

## Marketplace App Setup

1. Go to the [GHL Marketplace](https://marketplace.gohighlevel.com/) and create a new app
2. Configure:
   - **App name**: Your integration name
   - **Redirect URI**: Where users return after authorizing (e.g. `https://yourapp.com/callback/gohighlevel`)
   - **Scopes**: Select which GHL APIs your app needs access to
   - **Webhook URL**: For marketplace-level webhooks (global, not per-location)
   - **SSO Key**: For embedded iframe SSO (if building a custom page inside GHL)
3. You'll receive a **Client ID** and **Client Secret**

### Environment Variables

```env
GOHIGHLEVEL_CLIENT_ID=<from marketplace app>
GOHIGHLEVEL_CLIENT_SECRET=<from marketplace app>
GOHIGHLEVEL_REDIRECT_URI=https://yourapp.com/callback/gohighlevel
```

---

## OAuth 2.0 Flow

GHL uses OAuth 2.0 Authorization Code flow with a **location chooser**.

### Step 1: Redirect User to Authorize

```
GET https://marketplace.gohighlevel.com/oauth/chooselocation
  ?response_type=code
  &client_id=YOUR_CLIENT_ID
  &redirect_uri=YOUR_REDIRECT_URI
  &scope=contacts.readonly contacts.write locations.readonly
  &state=OPTIONAL_STATE_VALUE
```

**IMPORTANT**: The authorize URL domain is `marketplace.gohighlevel.com`, NOT `marketplace.leadconnectorhq.com`. The LeadConnector domain is the white-label version and may not show the subaccount picker correctly.

The user sees a location/subaccount picker and selects which location to connect.

### Available Scopes

```
contacts.readonly
contacts.write
locations.readonly
locations/customFields.readonly
locations/customFields.write
opportunities.readonly
opportunities.write
invoices.readonly
invoices.write
documents_contracts_template/list.readonly
documents_contracts_template/sendLink.write
```

Space-separated in the `scope` parameter.

### Step 2: Exchange Code for Tokens

After the user authorizes, GHL redirects to your `redirect_uri` with a `code` query param.

```
POST https://services.leadconnectorhq.com/oauth/token
Content-Type: application/x-www-form-urlencoded

grant_type=authorization_code
&code=AUTHORIZATION_CODE
&client_id=YOUR_CLIENT_ID
&client_secret=YOUR_CLIENT_SECRET
&redirect_uri=YOUR_REDIRECT_URI
&user_type=Location
```

**IMPORTANT**: The token URL is `services.leadconnectorhq.com` (different from the authorize URL domain). The `user_type=Location` parameter is required.

**Response:**

```json
{
  "access_token": "abc123...",
  "token_type": "Bearer",
  "expires_in": 86400,
  "refresh_token": "def456...",
  "scope": "contacts.readonly contacts.write ...",
  "locationId": "l5Gz4BMLKmeP2XBdSZWp",
  "companyId": "abc123...",
  "userId": "user123..."
}
```

Key differences from PC:
- `expires_in` is typically 24 hours (86400 seconds)
- Response includes `locationId` — the GHL sub-account (location) the user connected
- Store the `locationId` — you'll need it for all API calls and webhook matching
- Store both tokens **encrypted**

### Step 3: Refresh Tokens

```
POST https://services.leadconnectorhq.com/oauth/token
Content-Type: application/x-www-form-urlencoded

grant_type=refresh_token
&refresh_token=STORED_REFRESH_TOKEN
&client_id=YOUR_CLIENT_ID
&client_secret=YOUR_CLIENT_SECRET
&user_type=Location
```

Always include `user_type=Location`. Always store the new `refresh_token`.

---

## Token Refresh Strategy

Same principles as PC, but with a longer expiry window (24h vs 2h):

1. Store `tokenExpiresAt` in your database
2. Before API calls, check if token expires within 15 minutes
3. If expiring soon: refresh first, store new tokens, then proceed
4. If refresh fails: mark connection as `needsReconnect`

### Critical Details

- Refresh tokens are single-use — the old one is invalidated after refresh
- Use distributed locks in multi-process environments to prevent race conditions
- GHL tokens last ~24 hours (longer than PC's 2 hours)

---

## API Basics

### Base URL

```
https://services.leadconnectorhq.com
```

All API paths are relative to this base.

### Required Headers

```
Authorization: Bearer YOUR_ACCESS_TOKEN
Content-Type: application/json
Version: 2021-07-28
```

**IMPORTANT**: The `Version` header is **required** on all API calls. Without it, you may get unexpected responses or errors.

### Response Format

GHL uses its own response format (not JSON:API). Responses vary by endpoint:

**Single resource:**
```json
{
  "contact": { "id": "abc123", "firstName": "John", ... }
}
```

**List of resources:**
```json
{
  "contacts": [ ... ],
  "meta": {
    "total": 500,
    "count": 100,
    "currentPage": 1,
    "nextPage": 2,
    "startAfterId": "abc123"
  }
}
```

The wrapper key varies by resource type (`contact`, `contacts`, `pipelines`, `opportunity`, `users`, etc.).

### Pagination

GHL uses cursor-based pagination with `startAfterId`:

```
GET /contacts/?locationId=LOC_ID&limit=100
GET /contacts/?locationId=LOC_ID&limit=100&startAfterId=LAST_CONTACT_ID
```

Check `meta.startAfterId` — if null, you've reached the end.

### Rate Limiting

GHL enforces rate limits. Implement:
- A delay between API calls (500ms recommended)
- Retry on 429 with exponential backoff (start at 5.5s, double each retry)
- Max `limit` per page is `100`

---

## Key Endpoints

### Contacts

```
GET    /contacts/:id                              → Get a contact
GET    /contacts/?locationId=LOC&query=SEARCH     → Search contacts
POST   /contacts/                                 → Create a contact
PUT    /contacts/:id                              → Update a contact
POST   /contacts/upsert                           → Create or update by email/phone
POST   /contacts/:id/tags                         → Add tags (idempotent)
```

**Create Contact:**
```json
POST /contacts/
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "phone": "+15551234567",
  "locationId": "LOC_ID",
  "tags": ["church-member"],
  "source": "Planning Center Sync",
  "customFields": [
    { "id": "FIELD_ID", "value": "custom value" }
  ]
}
```

**Upsert Contact** (matches by email or phone):
```json
POST /contacts/upsert
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "locationId": "LOC_ID",
  "source": "Planning Center Sync"
}
```

### Contact Name Fields

The list endpoint (`GET /contacts/`) returns `firstName` and `lastName` separately. The `name` field may or may not be populated. Always use:

```typescript
const firstName = contact.firstName || (contact.name ?? "").split(" ")[0] || "";
const lastName = contact.lastName || (contact.name ?? "").split(" ").slice(1).join(" ") || "";
```

### Contact Source & Attribution

Contacts have two source fields:
- `source`: Top-level string (e.g. "Planning Center Sync", "MinistryFlow Calendar Pay"). Only set during creation.
- `attributionSource`: Object with `sessionSource`, `medium`, `url`, `campaign`, etc. Only available on the **individual** contact endpoint (`GET /contacts/:id`), NOT on the list endpoint.

### Custom Fields

```
GET  /locations/:locationId/customFields          → List all custom fields
POST /locations/:locationId/customFields          → Create a custom field
```

**Create Custom Field:**
```json
POST /locations/:locationId/customFields
{
  "name": "Planning Center Person ID",
  "dataType": "TEXT",
  "model": "contact"
}
```

Custom fields are referenced by their `id` in contact create/update payloads, but by `fieldKey` (e.g. `contact.planning_center_person_id`) when searching.

### Tags

Tags on contacts are plain strings (not IDs). To add tags:

```json
POST /contacts/:contactId/tags
{ "tags": ["tag1", "tag2"] }
```

This endpoint is idempotent — it won't duplicate existing tags.

To remove a tag, you must update the contact with the full tag list minus the tag:

```json
PUT /contacts/:contactId
{ "tags": ["tag1"] }  // tag2 is removed
```

### Pipelines & Opportunities

```
GET    /opportunities/pipelines?locationId=LOC    → List pipelines (includes stages)
POST   /opportunities/                            → Create opportunity
PUT    /opportunities/:id                         → Update opportunity
DELETE /opportunities/:id                         → Delete opportunity
GET    /opportunities/search?location_id=LOC&pipeline_id=PIP&contact_id=CON → Search
```

**Create Opportunity:**
```json
POST /opportunities/
{
  "pipelineId": "PIPELINE_ID",
  "pipelineStageId": "STAGE_ID",
  "contactId": "CONTACT_ID",
  "locationId": "LOC_ID",
  "name": "John Doe - Membership",
  "status": "open"
}
```

### Invoices

```
POST /invoices/                                   → Create invoice
GET  /invoices/:id?altId=LOC&altType=location     → Get invoice
POST /invoices/:id/send                           → Send invoice
```

**Create Invoice:**
```json
POST /invoices/
{
  "altId": "LOC_ID",
  "altType": "location",
  "name": "Event Registration",
  "contactId": "CONTACT_ID",
  "dueDate": "2024-07-01",
  "issueDate": "2024-06-15",
  "currency": "USD",
  "items": [
    { "name": "Registration Fee", "amount": 5000, "quantity": 1 }
  ]
}
```

Note: `amount` is in **cents** (5000 = $50.00).

### Documents / Proposals

```
GET  /proposals/templates?locationId=LOC          → List document templates
POST /proposals/templates/send                    → Send a template to a contact
GET  /proposals/document/:id                      → Get document status
```

### Users

```
GET /users/?locationId=LOC                        → List location users
GET /users/search?companyId=LOC&locationId=LOC    → Search users
```

### Location

```
GET /locations/:locationId                        → Get location details
```

---

## Data Types Reference

### Contact

```typescript
{
  id: string;
  firstName?: string;
  lastName?: string;
  name?: string;
  email?: string;
  phone?: string;
  locationId: string;
  tags?: string[];
  customFields?: Array<{ id: string; value: string | string[] }>;
  dateOfBirth?: string | null;
  gender?: string | null;
  source?: string | null;
  attributionSource?: {
    sessionSource?: string | null;
    medium?: string | null;
    url?: string | null;
    campaign?: string | null;
  } | null;
  createdAt?: string;
  updatedAt?: string;
}
```

### Pipeline & Opportunity

```typescript
// Pipeline
{
  id: string;
  name: string;
  stages: Array<{ id: string; name: string; position: number }>;
  locationId: string;
}

// Opportunity
{
  id: string;
  name: string;
  pipelineId: string;
  pipelineStageId: string;
  contactId: string;
  status: string;  // "open", "won", "lost", "abandoned"
  locationId: string;
}
```

### Token Response

```typescript
{
  access_token: string;
  token_type: string;
  expires_in: number;        // seconds (typically 86400 = 24h)
  refresh_token: string;
  scope: string;
  locationId?: string;       // The connected sub-account
  companyId?: string;
  userId?: string;
}
```

---

## Gotchas

| Gotcha | Detail |
|--------|--------|
| **Authorize vs Token URL** | Authorize: `marketplace.gohighlevel.com`. Token: `services.leadconnectorhq.com`. Different domains! |
| **`user_type=Location`** | Required on both token exchange and refresh. Without it, the token may not have location-level access. |
| **`Version` header** | Required on all API calls. Use `2021-07-28`. |
| **`name` vs `firstName`/`lastName`** | List endpoint may only populate `firstName`/`lastName` separately. Don't rely on `name` being set. |
| **`attributionSource` only on GET by ID** | The contact list endpoint does NOT return `attributionSource`. Must fetch individual contact for source filtering. |
| **Invoice `amount` in cents** | Invoice line item amounts are in cents, not dollars. |
| **Tag removal** | No dedicated "remove tag" endpoint. Update the contact with the full tag list minus the tag you want to remove. |
| **Custom field search** | Use `fieldKey` (e.g. `contact.planning_center_person_id`) for searching, but `id` for setting values. |
| **`locationId` everywhere** | Almost every endpoint requires `locationId` as a query param or in the body. Store it during OAuth connect. |

---

## Quick Reference

| What | URL/Value |
|------|-----------|
| OAuth Authorize | `https://marketplace.gohighlevel.com/oauth/chooselocation` |
| Token Exchange/Refresh | `https://services.leadconnectorhq.com/oauth/token` |
| API Base | `https://services.leadconnectorhq.com` |
| API Version Header | `2021-07-28` |
| Marketplace | `https://marketplace.gohighlevel.com/` |
| Token Expiry | ~24 hours (86400 seconds) |
| Max per page | 100 |
