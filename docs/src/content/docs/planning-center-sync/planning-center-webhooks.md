---
title: "Planning Center Webhooks Guide"
description: "Reference for implementing webhook subscriptions and handling webhook payloads from Planning Center."
---

# Planning Center Webhooks Guide

Reference for implementing webhook subscriptions and handling webhook payloads from Planning Center.

---

## How PC Webhooks Work

- Webhooks are **per-organization, per-OAuth-token** — creating a subscription with Org A's token means only Org A's events fire to that URL
- Each subscription covers **one event type** and **one URL**
- Subscriptions are created via the **Webhooks API** using the org's OAuth access token
- PC retries failed deliveries up to **16 times** with exponential backoff
- After prolonged failure (~5 days), the subscription is **automatically deactivated**
- You can reactivate deactivated subscriptions via PATCH

---

## Webhook API

### Base Endpoint

```
https://api.planningcenteronline.com/webhooks/v2/subscriptions
```

**IMPORTANT**: The path is `/webhooks/v2/subscriptions`, **NOT** `/webhooks/v2/webhook_subscriptions`. The latter returns 404.

### Create a Subscription

One subscription = one event type. To listen for 8 events, create 8 subscriptions.

```
POST /webhooks/v2/subscriptions
Authorization: Bearer ORG_ACCESS_TOKEN
Content-Type: application/json

{
  "data": {
    "type": "WebhookSubscription",
    "attributes": {
      "name": "people.v2.events.person.created",
      "url": "https://yourapp.com/webhooks/planning-center/ORG_ID",
      "active": true
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "type": "WebhookSubscription",
    "id": "123456",
    "attributes": {
      "name": "people.v2.events.person.created",
      "url": "https://yourapp.com/webhooks/planning-center/ORG_ID",
      "active": true,
      "authenticity_secret": "abc123secret..."
    }
  }
}
```

The `authenticity_secret` is returned on creation — store it for HMAC signature verification.

### List Subscriptions

```
GET /webhooks/v2/subscriptions
Authorization: Bearer ORG_ACCESS_TOKEN
```

Returns all subscriptions for that org. Use this to check for existing subscriptions before creating duplicates.

### Update a Subscription (Reactivate)

```
PATCH /webhooks/v2/subscriptions/:id
Authorization: Bearer ORG_ACCESS_TOKEN
Content-Type: application/json

{
  "data": {
    "type": "WebhookSubscription",
    "id": "123456",
    "attributes": {
      "active": true
    }
  }
}
```

### Delete a Subscription

```
DELETE /webhooks/v2/subscriptions/:id
Authorization: Bearer ORG_ACCESS_TOKEN
```

---

## Recommended Subscription Pattern

When a user connects via OAuth, create subscriptions programmatically:

```
1. Exchange OAuth code → get access token
2. GET /webhooks/v2/subscriptions → list existing
3. For each event you need:
   a. Does a subscription with this URL + event name exist?
   b. YES, but inactive → PATCH to reactivate
   c. YES, and active → skip (reuse)
   d. NO → POST to create new
4. Store webhook status in your database
```

This is **idempotent** — reconnecting the same org won't create duplicates. On disconnect, list subscriptions and DELETE only the ones matching your URL.

---

## Available Event Types

### People Events

```
people.v2.events.person.created
people.v2.events.person.updated
people.v2.events.person.destroyed
people.v2.events.email.created
people.v2.events.email.updated
people.v2.events.email.destroyed
people.v2.events.phone_number.created
people.v2.events.phone_number.updated
people.v2.events.phone_number.destroyed
```

### List Events

```
people.v2.events.list.created
people.v2.events.list.updated
people.v2.events.list.destroyed
people.v2.events.list.refreshed
people.v2.events.list_result.created
people.v2.events.list_result.destroyed
```

### Workflow Events

```
people.v2.events.workflow.created
people.v2.events.workflow.updated
people.v2.events.workflow_card.created
people.v2.events.workflow_card.updated
people.v2.events.workflow_card.destroyed
people.v2.events.workflow_card_activity.created
people.v2.events.workflow_step.created
people.v2.events.workflow_step.updated
```

Only subscribe to the events you actually handle — fewer subscriptions = less noise.

---

## Webhook Payload Structure

This is the **#1 gotcha** with PC webhooks. The payload is **double-nested** — you must parse twice.

### What PC Sends to Your URL

```json
{
  "data": [
    {
      "type": "EventDelivery",
      "id": "delivery-id-123",
      "attributes": {
        "name": "people.v2.events.person.created",
        "payload": "{\"data\":{\"type\":\"Person\",\"id\":\"12345\",\"attributes\":{\"first_name\":\"John\"}}}"
      },
      "relationships": {
        "organization": {
          "data": {
            "id": "pc-org-id-456",
            "type": "Organization"
          }
        }
      }
    }
  ]
}
```

Key structure:
- **`data`**: Array of `EventDelivery` objects (typically one)
- **`data[0].attributes.name`**: The event type
- **`data[0].attributes.payload`**: The actual event data as a **JSON string** — you MUST `JSON.parse()` this
- **`data[0].relationships.organization.data.id`**: The PC organization ID

### After Parsing `attributes.payload`

```json
{
  "data": {
    "type": "Person",
    "id": "12345",
    "attributes": {
      "first_name": "John",
      "last_name": "Doe",
      "created_at": "2024-01-15T10:30:00Z"
    },
    "relationships": {
      "emails": {
        "data": [{ "type": "Email", "id": "67890" }]
      },
      "organization": {
        "data": { "type": "Organization", "id": "pc-org-id-456" }
      }
    }
  }
}
```

### Parsing Code

```typescript
// Step 1: Parse the outer wrapper
const outerPayload = JSON.parse(rawBody);
const webhookData = outerPayload.data?.[0];
const eventName = webhookData?.attributes?.name;

// Step 2: Extract the PC org ID from the OUTER wrapper
const pcOrgId = webhookData?.relationships?.organization?.data?.id;

// Step 3: Parse the INNER payload (the actual event data)
const innerPayloadStr = webhookData?.attributes?.payload;
const payload = innerPayloadStr ? JSON.parse(innerPayloadStr) : null;

// Step 4: Access the resource
const resourceId = payload?.data?.id;
const attributes = payload?.data?.attributes;
const relationships = payload?.data?.relationships;
```

---

## Webhook Headers

| Header | Description |
|--------|-------------|
| `x-pco-webhooks-name` | Event name (e.g. `people.v2.events.person.created`) |
| `x-pco-webhooks-authenticity` | HMAC-SHA256 signature for verification |
| `Content-Type` | `application/json` |

---

## Signature Verification

If you stored the `authenticity_secret` from subscription creation:

```typescript
import { createHmac, timingSafeEqual } from "node:crypto";

function verifyPcWebhookSignature(
  rawBody: string,
  signature: string,
  secret: string,
): boolean {
  const expected = createHmac("sha256", secret)
    .update(rawBody)
    .digest("base64");

  const expectedBuf = Buffer.from(expected, "utf8");
  const receivedBuf = Buffer.from(signature, "utf8");

  return (
    expectedBuf.length === receivedBuf.length &&
    timingSafeEqual(expectedBuf, receivedBuf)
  );
}
```

---

## Multi-Tenant Architecture

For apps where multiple orgs connect:

### Option A — Org ID in URL Path (Recommended)

Each org gets its own webhook URL during OAuth connect:

```
https://yourapp.com/api/webhooks/planning-center/{orgId}
```

Handler reads the org ID from the URL. Since each subscription is created with that org's token, PC only sends that org's events to that URL.

### Option B — Resolve Org from Payload

Single webhook URL for all orgs:

```
https://yourapp.com/api/webhooks/planning-center
```

Resolve the org by looking up `webhookData.relationships.organization.data.id` in your database (matching on the stored `pcOrganizationId`).

---

## Best Practices

1. **Always return 200** — even on processing errors. Otherwise PC retries up to 16 times, flooding your endpoint.
2. **Process asynchronously** — acknowledge immediately (return 200), process in a background job queue.
3. **Implement idempotency** — you may receive the same event multiple times. Deduplicate by hashing event type + resource ID + org ID.
4. **Disable during bulk sync** — if running an initial full sync, skip webhook processing to avoid conflicts. Re-enable after.
5. **Handle out-of-order delivery** — events may not arrive chronologically. Fetch fresh data from the API when needed rather than relying solely on payload data.
6. **Log unknown events gracefully** — PC may add new event types. Don't error on unrecognized events; log and return 200.

---

## Gotchas

| Gotcha | Detail |
|--------|--------|
| **Double-nested payload** | `attributes.payload` is a JSON **string**, not an object. Must `JSON.parse()` it. |
| **Wrong endpoint** | Use `/webhooks/v2/subscriptions`, NOT `/webhooks/v2/webhook_subscriptions` |
| **One subscription = one event** | Each subscription covers one event type. 8 events = 8 subscriptions to create. |
| **Email/phone person ID** | For `email.*` and `phone_number.*` events, the person is in `relationships.person.data.id`, not `data.id` (that's the email/phone ID) |
| **Org ID location** | The PC org ID is in the **outer** wrapper at `data[0].relationships.organization.data.id`, not inside the parsed inner payload |
| **Deactivation** | PC deactivates subscriptions after ~5 days of failed deliveries. Check and reactivate on reconnect. |
