---
title: "GoHighLevel Webhooks Guide"
description: "Reference for handling webhook events from GoHighLevel (GHL)."
---

# GoHighLevel Webhooks Guide

Reference for handling webhook events from GoHighLevel (GHL).

---

## How GHL Webhooks Work

GHL webhooks operate at two levels:

1. **Marketplace App Webhooks (Global)**: Configured in the GHL Marketplace app settings. A single URL receives events for ALL sub-accounts (locations) that install your app. Events include `locationId` in the payload so you can route them.

2. **Sub-Account Webhooks (Per-Location)**: Configured manually inside each GHL sub-account under Settings > Webhooks. Only fires for that specific sub-account's events.

For marketplace apps, use the **global** webhook approach — it's automatic when a sub-account installs your app.

---

## Webhook Configuration

### Marketplace App Webhooks

1. In your marketplace app settings, set the **Webhook URL**
2. Select which event types to subscribe to
3. When a sub-account installs your app, GHL automatically starts sending that location's events to your URL

**Key gotcha**: After changing the webhook URL or events in your marketplace app config, sub-accounts may need to **reinstall** the app for changes to take effect.

### Webhook URL Patterns

**Global handler** (recommended for marketplace apps):
```
https://yourapp.com/api/webhooks/gohighlevel
```

Resolves the org by matching `payload.locationId` against stored connections.

**Org-scoped handler** (alternative):
```
https://yourapp.com/api/webhooks/gohighlevel/:organizationId
```

Uses the org ID from the URL path.

---

## Webhook Payload Structure

GHL sends a flat JSON object (much simpler than PC's double-nested structure):

### Contact Events

```json
{
  "type": "ContactCreate",
  "locationId": "l5Gz4BMLKmeP2XBdSZWp",
  "id": "contact-id-123",
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "phone": "+15551234567",
  "source": "direct"
}
```

### Opportunity Events

```json
{
  "type": "OpportunityCreate",
  "locationId": "l5Gz4BMLKmeP2XBdSZWp",
  "id": "opportunity-id-123",
  "contactId": "contact-id-456",
  "pipelineId": "pipeline-id-789",
  "pipelineStageId": "stage-id-012"
}
```

### Invoice Events

```json
{
  "type": "InvoicePaid",
  "locationId": "l5Gz4BMLKmeP2XBdSZWp",
  "_id": "invoice-id-123",
  "invoiceId": "invoice-id-123",
  "status": "paid",
  "contactId": "contact-id-456"
}
```

### Document Events

```json
{
  "type": "DocumentSigned",
  "locationId": "l5Gz4BMLKmeP2XBdSZWp",
  "documentId": "doc-id-123",
  "id": "doc-id-123"
}
```

---

## Event Types

### Contact Events

| Event Type | Description |
|------------|-------------|
| `ContactCreate` | New contact created |
| `ContactUpdate` | Existing contact modified |
| `ContactDelete` | Contact deleted |

### Opportunity Events

| Event Type | Description |
|------------|-------------|
| `OpportunityCreate` | New opportunity created in a pipeline |
| `OpportunityStageUpdate` | Opportunity moved to a different pipeline stage |
| `OpportunityDelete` | Opportunity deleted |

### Invoice Events

| Event Type | Description |
|------------|-------------|
| `InvoiceCreate` | New invoice created |
| `InvoiceSent` | Invoice sent to contact |
| `InvoicePaid` | Invoice fully paid |
| `InvoicePartiallyPaid` | Invoice partially paid |
| `InvoiceUpdate` | Invoice updated (generic — check `status` field) |
| `InvoiceStatusUpdate` | Invoice status changed (generic — check `status` field) |
| `InvoiceVoid` | Invoice voided |
| `InvoiceDelete` | Invoice deleted |

### Document Events

| Event Type | Description |
|------------|-------------|
| `DocumentSigned` | Document/contract signed by contact |
| `DocumentStatusUpdate` | Document status changed |

---

## Org Resolution

### Global Webhook Handler

For marketplace apps, the webhook URL is the same for all sub-accounts. Resolve the org from `locationId`:

```typescript
const payload = await request.json();

if (!payload.locationId) {
  return response(400, { error: "Missing locationId" });
}

// Look up which internal org has this GHL locationId
const connection = await db.goHighLevelConnection.findFirst({
  where: { locationId: payload.locationId },
});

if (!connection) {
  return response(200); // Unknown location, acknowledge and ignore
}

await processEvent(connection.organizationId, payload);
return response(200);
```

### Org-Scoped Handler

If using per-org webhook URLs, the org ID comes from the URL path:

```typescript
const organizationId = request.params.organizationId;
const connection = await db.goHighLevelConnection.findUnique({
  where: { organizationId },
});

// Verify locationId matches
if (payload.locationId && payload.locationId !== connection.locationId) {
  return response(200); // Mismatch, ignore
}
```

---

## Deduplication

GHL may send the same webhook event multiple times. Implement deduplication:

```typescript
// Hash: type + id + locationId
const key = sha256(`ghl:${payload.type}:${payload.id}:${payload.locationId}`);

if (recentlyProcessed.has(key)) {
  return; // Skip duplicate
}

recentlyProcessed.set(key, Date.now() + TTL);
```

Use an in-memory Map with TTL (24 hours) or a Redis set for distributed deduplication.

---

## Loop Prevention

When syncing bidirectionally (e.g. GHL contacts ↔ PC people), you must prevent infinite loops.

### Source-Based Loop Prevention

When creating contacts in GHL from PC sync, set `source: "Planning Center Sync"`. Then in the webhook handler:

```typescript
if (payload.source === "Planning Center Sync") {
  // Skip — this contact was created by our own sync
  return;
}
```

**Limitation**: The webhook payload's `source` field is only reliably set for contacts your app created. For contacts created by users or other integrations, `source` may be null.

### Timestamp-Based Loop Prevention

For opportunity/workflow sync, track the last sync direction and timestamp:

```typescript
const syncMap = await getSyncMap(opportunityId);
if (
  syncMap &&
  syncMap.lastSyncDirection === "pc-to-ghl" &&
  Date.now() - syncMap.lastSyncAt.getTime() < 30_000 // 30 second window
) {
  // Skip — this was triggered by our own PC→GHL sync
  return;
}
```

---

## Source Filtering

GHL contacts have attribution data that helps determine where they came from:

- `source`: Top-level field, set during creation (e.g. "direct", "Social media", null)
- `attributionSource.sessionSource`: Where the lead session originated (e.g. "Social media", "Direct traffic")
- `attributionSource.medium`: Specific channel (e.g. "Facebook", "Instagram")

**IMPORTANT**: The webhook payload only includes the top-level `source` field. To get `attributionSource`, you must fetch the full contact via the API (`GET /contacts/:id`). This is why source filtering should happen in a background worker, not in the webhook handler.

---

## Invoice Status Resolution

GHL sometimes sends generic `InvoiceUpdate` instead of specific events like `InvoicePaid`. Always check the `status` field in the payload:

```typescript
const status = payload.status?.toLowerCase();

if (payload.type === "InvoicePaid" || status === "paid") {
  // Paid
} else if (payload.type === "InvoiceSent" || status === "sent") {
  // Sent
} else if (payload.type === "InvoiceVoid" || status === "void") {
  // Voided
}
```

The `status` field values: `"paid"`, `"partially-paid"`, `"sent"`, `"void"`, `"deleted"`, `"draft"`.

---

## Invoice ID Fields

GHL is inconsistent with invoice ID field names across events:

```typescript
const invoiceId = payload._id ?? payload.invoiceId ?? payload.id;
```

Always check all three fields. Different event types use different field names.

---

## Best Practices

1. **Always return 200** — even on errors. GHL will retry failed deliveries.
2. **Process asynchronously** — acknowledge the webhook immediately, enqueue a background job for actual processing.
3. **Verify locationId** — for org-scoped handlers, verify the payload's `locationId` matches your stored connection to prevent cross-tenant issues.
4. **Skip during initial sync** — if running a full initial sync, skip webhook processing to avoid conflicts. Use a `firstSyncInProgress` flag.
5. **Fetch full contact for filtering** — webhook payloads have limited data. Fetch the full contact via API when you need `attributionSource` or custom fields.
6. **Handle unknown event types** — log them and return 200. GHL may add new types.
7. **Add delays for new contacts** — when handling `ContactCreate`, add a brief delay (5-10 seconds) before fetching the contact via API. Custom field values may not propagate immediately.

---

## Gotchas

| Gotcha | Detail |
|--------|--------|
| **Invoice ID field names** | Different events use `_id`, `invoiceId`, or `id`. Check all three. |
| **`InvoiceUpdate` is generic** | GHL sends `InvoiceUpdate` for paid invoices instead of `InvoicePaid`. Always check `payload.status`. |
| **Webhook URL changes** | After changing webhook config in marketplace app, sub-accounts may need to reinstall the app. |
| **`source` field limitations** | Only set for contacts your app created. Most user-created contacts have `source: null`. |
| **`attributionSource` missing from webhooks** | Only available via `GET /contacts/:id`, not in webhook payload. |
| **Custom field propagation delay** | Custom fields set during contact creation may take a few seconds to appear via the API. Add a delay before fetching. |
| **No webhook signature** | GHL webhooks do not include HMAC signatures for verification (unlike PC). Validate by checking `locationId` against stored connections. |
| **Marketplace app reinstall** | Changing webhook events or URL in app settings requires sub-accounts to reinstall for changes to take effect. |
