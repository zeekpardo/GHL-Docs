---
title: "Pausing and Resuming Workflows"
description: "In this article, you will learn how to pause and resume this workflow."
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/PgnncW7ZSK4lRxfodz69"
sourceId: "PgnncW7ZSK4lRxfodz69"
category: "Workflow"
---

In this article, you will learn how to pause and resume this workflow. 

Workflows can be paused and resumed anytime by switching back and forth from _published_ to _draft_ mode. Pausing a workflow will temporarily stop the actions from firing off until it is republished.

You may want to pause a workflow if it is malfunctioning or needs an update and you need some time to work on it. 

### Option 1: Pause or Resume a Workflow from the Workflow Menu

-   You can place any published workflow into _draft_ mode from the workflow menu and pause it by clicking on the menu dots. You can resume any workflow by _publishing_ it again in the same way.

![](<https://assets2.modalsupport.net/1765556927339-unnamed - 2025-12-13T002836.538.png>)

### Option 2: Pause or Resume from the Workflow Settings

-   You can also do this from within a workflow by clicking into the workflow, toggling on and off the _draft/publish_ toggle, and saving the flow.

![](<https://assets2.modalsupport.net/1765556947051-unnamed - 2025-12-13T002900.178.png>)

**Please Note:** If your contact is halfway through the workflow in a wait step, only the changes below the contacts' current position will be implemented.  Once the contact goes through the remaining steps, they will be removed from it.

### Changes in Location Transfer Behavior

Several changes have been implemented for location transfers:

-   Contacts will stay in their current workflow.
-   Workflows, campaigns, and triggers will not be drafted.
-   The enrolled data in workflows will remain unchanged.

### **FAQs**




**Question:** How do I pause a workflow?
**Answer:** You can pause a workflow by either switching it to draft mode from the Workflow Menu or from within the Workflow Settings. In both cases, toggle the status from "Published" to "Draft" to pause it.




**Question:** What happens to contacts currently in a paused workflow?
**Answer:** If a contact is in a wait step when the workflow is paused, they will continue from their current position when the workflow is resumed. Any changes made will only apply to steps they haven't reached yet.




**Question:** Can I resume a workflow after pausing it?
**Answer:** Yes, you can resume a workflow by publishing it again. You can do this from either the Workflow Menu or within the Workflow Settings by toggling the draft/publish switch.




**Question:** Will changes in workflow steps apply to contacts who are already in the middle of the workflow?
**Answer:** No, changes will only apply to steps below the contact's current position. The contact will proceed through the remaining steps without being affected by any new updates above their current step.




**Question:** What happens to workflows during a location transfer?
**Answer:** During a location transfer, contacts will remain in their current workflows, and no workflows, campaigns, or triggers will be drafted. The enrolled data will stay intact, ensuring smooth transitions without disrupting active workflows.




**Question:** Are there any limitations to pausing and resuming workflows?
**Answer:** The main limitation is that updates or changes will not affect contacts who are already in progress above their current step. This ensures workflow continuity but may require manual adjustments if you want past steps to change retrospectively.




**Question:** Why would I need to pause a workflow?

**Answer:** You might want to pause a workflow if it is malfunctioning or if it requires updates and you need time to make those changes without the actions firing off in the meantime.




**Question:** Does pausing a workflow stop emails that are already scheduled to go out?
**Answer:** Yes. If the workflow is in **Draft** mode, no outgoing actions (Emails, SMS, etc.) will be executed. The system essentially "freezes" the automation for everyone currently inside it.




**Question:** What happens to a contact after they complete the steps that were below their current position?

**Answer:** Once the contact goes through the remaining steps available to them at their current position, they will be removed from the workflow.