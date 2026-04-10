---
title: "Planning Center Calendar API Guide"
description: "Reference for building integrations with the Planning Center Calendar product."
---

# Planning Center Calendar API Guide

Reference for building integrations with the Planning Center Calendar product.

---

## Overview

The Calendar API manages events, event instances, resources, tags, and tag groups within a PC organization. It uses the same OAuth and JSON:API patterns as other PC products, but is accessed through a separate scope and base path.

**Base Path:** `https://api.planningcenteronline.com/calendar/v2`

**Required OAuth Scope:** `calendar`

---

## Authentication

Calendar uses a separate OAuth scope from People. You can either:
- Include `calendar` in the scopes of your main app: `scope=people calendar`
- Create a separate developer app with just `scope=calendar`

See [planning-center-oauth.md](./planning-center-oauth.md) for the full OAuth flow.

### Environment Variables (Separate App)

```env
PLANNING_CENTER_CALENDAR_CLIENT_ID=<from developer app>
PLANNING_CENTER_CALENDAR_CLIENT_SECRET=<from developer app>
PLANNING_CENTER_CALENDAR_REDIRECT_URI=https://yourapp.com/callback/planning-center-calendar
```

If using the same app for both People and Calendar, you can fall back to the People credentials:

```typescript
const clientId = process.env.PLANNING_CENTER_CALENDAR_CLIENT_ID
  ?? process.env.PLANNING_CENTER_CLIENT_ID;
```

---

## Key Endpoints

### Organization

```
GET /calendar/v2
```

Returns the org's Calendar data including ID and name. Useful for verifying the connection after OAuth.

### Events

```
GET  /calendar/v2/events                                     → List all events
GET  /calendar/v2/events/:id                                 → Get a single event
GET  /calendar/v2/events/:id?include=owner,tags              → Include related data
GET  /calendar/v2/events/:id/event_instances                 → Event instances (occurrences)
GET  /calendar/v2/events/:id/event_resource_requests         → Resource requests for an event
GET  /calendar/v2/tags/:tagId/events                         → Events with a specific tag
```

### Event Instances

Events can have multiple instances (recurring events). Each instance has its own start/end time.

```
GET /calendar/v2/events/:id/event_instances?per_page=100
```

**Response:**

```json
{
  "data": [
    {
      "type": "EventInstance",
      "id": "216717700",
      "attributes": {
        "starts_at": "2024-06-15T10:00:00Z",
        "ends_at": "2024-06-15T12:00:00Z",
        "all_day_event": false,
        "created_at": "2024-01-01T00:00:00Z",
        "updated_at": "2024-01-01T00:00:00Z"
      }
    }
  ]
}
```

### Tag Groups & Tags

Tags in Calendar are organized into Tag Groups. You create a tag group first, then tags within it.

```
GET  /calendar/v2/tag_groups                                 → List tag groups
GET  /calendar/v2/tag_groups?where[name]=MyGroup             → Find by name
POST /calendar/v2/tag_groups                                 → Create tag group
DELETE /calendar/v2/tag_groups/:id                           → Delete tag group

POST /calendar/v2/tag_groups/:id/tags                        → Create tag in group
```

**Create a Tag Group:**

```json
POST /calendar/v2/tag_groups
{
  "data": {
    "type": "TagGroup",
    "attributes": { "name": "My Tag Group" }
  }
}
```

**Create a Tag:**

```json
POST /calendar/v2/tag_groups/:groupId/tags
{
  "data": {
    "type": "Tag",
    "attributes": {
      "name": "Invoice Sent",
      "color": "#FF5733"
    }
  }
}
```

### Managing Event Tags

To add/remove tags on an event, you PATCH the event's tag relationships. PC Calendar uses a **replace-all** pattern — you send the complete list of tag IDs.

```json
PATCH /calendar/v2/events/:eventId
{
  "data": {
    "attributes": {},
    "relationships": {
      "tags": {
        "data": [
          { "id": "tag-id-1" },
          { "id": "tag-id-2" }
        ]
      }
    }
  }
}
```

**To add a tag:** Fetch current tags, append the new one, send the full list.
**To remove a tag:** Fetch current tags, filter it out, send the remaining list.
**To swap tags:** Fetch current tags, remove old, add new, send the list.

```typescript
// Add a tag
async addEventTag(eventId: string, tagId: string) {
  const currentTagIds = await this.getEventTagIds(eventId);
  if (!currentTagIds.includes(tagId)) {
    currentTagIds.push(tagId);
  }
  await this.setEventTags(eventId, currentTagIds);
}

// Swap tags (e.g. "Invoice Sent" → "Paid")
async swapEventTag(eventId: string, removeTagId: string, addTagId: string) {
  const tagIds = await this.getEventTagIds(eventId);
  const filtered = tagIds.filter(id => id !== removeTagId);
  if (!filtered.includes(addTagId)) {
    filtered.push(addTagId);
  }
  await this.setEventTags(eventId, filtered);
}
```

### Resources

Resources represent rooms, equipment, or other bookable items.

```
POST /calendar/v2/resources                                  → Create a resource
GET  /calendar/v2/resources/:id                              → Get a resource
DELETE /calendar/v2/resources/:id                             → Delete a resource
```

**Create a Resource:**

```json
POST /calendar/v2/resources
{
  "data": {
    "type": "Resource",
    "attributes": {
      "name": "Main Sanctuary",
      "quantity": 100,
      "description": "Primary worship space"
    }
  }
}
```

### Resource Questions & Answers

Resources can have questions that event creators answer when requesting the resource.

```
POST /calendar/v2/resources/:id/resource_questions           → Create a question
GET  /calendar/v2/event_resource_requests/:id/answers        → Get answers
```

**Create a Question:**

```json
POST /calendar/v2/resources/:resourceId/resource_questions
{
  "data": {
    "type": "ResourceQuestion",
    "attributes": {
      "question": "What is the expected attendance?",
      "kind": "text"
    }
  }
}
```

Question `kind` values: `"text"`, `"dropdown"`, `"boolean"`

For dropdowns, include `"choices": ["Option A", "Option B"]`.

### People (Calendar-Scoped)

```
GET /calendar/v2/people/:id
```

Returns a Calendar-scoped person with `contact_data` including email addresses. Different from the People API — this only has Calendar-relevant fields.

---

## Data Types Reference

### Event

```typescript
{
  id: string;
  type: "Event";
  attributes: {
    name: string;
    description?: string | null;
    starts_at?: string | null;
    ends_at?: string | null;
    created_at: string;
    updated_at: string;
  };
  relationships?: {
    owner?: { data: { type: string; id: string } | null };
    tags?: { data: Array<{ type: string; id: string }> };
  };
}
```

### EventInstance

```typescript
{
  id: string;
  type: "EventInstance";
  attributes: {
    starts_at: string;
    ends_at: string;
    all_day_event: boolean;
    created_at: string;
    updated_at: string;
  };
}
```

### Tag / TagGroup

```typescript
// TagGroup
{
  id: string;
  type: "TagGroup";
  attributes: { name: string; created_at: string; updated_at: string };
}

// Tag
{
  id: string;
  type: "Tag";
  attributes: {
    name: string;
    color?: string | null;
    created_at: string;
    updated_at: string;
  };
  relationships?: {
    tag_group?: { data: { type: string; id: string } };
  };
}
```

### Resource

```typescript
{
  id: string;
  type: "Resource";
  attributes: {
    name: string;
    description?: string | null;
    kind?: string;
    created_at: string;
    updated_at: string;
  };
}
```

### API Response Wrapper

```typescript
{
  data: T;                    // Single resource or array
  included?: unknown[];       // Sideloaded related resources
  meta?: {
    total_count?: number;
    count?: number;
  };
  links?: {
    self?: string;
    next?: string;            // For pagination
    prev?: string;
  };
}
```

---

## Pagination

Same pattern as other PC APIs:

```
GET /calendar/v2/events?per_page=100&offset=0
GET /calendar/v2/events?per_page=100&offset=100
```

Check `links.next` or `data.length < per_page` to know when to stop.

---

## Rate Limiting

Same as all PC APIs — rate limits are per-token. For bulk operations:
- Add 1 second delay between calls
- Handle 429 responses with exponential backoff
- Use `per_page=100` to minimize total requests

---

## Gotchas

### Tag management is replace-all
You can't add/remove individual tags on an event. You must send the complete list of tag IDs in the PATCH. Always fetch current tags first, modify the list, then send it back.

### Event vs. EventInstance
An `Event` is the definition (name, description, tags). An `EventInstance` is a specific occurrence with start/end times. For recurring events, there's one Event and many EventInstances.

### Calendar People are different from People API
`/calendar/v2/people/:id` returns a different shape than `/people/v2/people/:id`. Calendar people have `contact_data` with nested email addresses; People API people have separate email/phone relationships.

### Calendar scope is separate
A token with only `people` scope **cannot** access `/calendar/v2` endpoints. You need the `calendar` scope, either as part of a multi-scope app or via a separate developer app.

### Resource questions require the resource to exist first
You can't create questions during resource creation. Create the resource, get its ID, then create questions on it.
