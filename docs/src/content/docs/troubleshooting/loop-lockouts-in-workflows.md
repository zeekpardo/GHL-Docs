---
title: "Loop Lockouts in Workflows"
description: "Loops occur when two Triggers either feed into each other or one Trigger feeds back into itself, creating an infinite loop of actions. Loops are detrimental…"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/FiqRtcQhJlDDXByww64H"
sourceId: "FiqRtcQhJlDDXByww64H"
category: "Troubleshooting"
---

Loops occur when two Triggers either feed into each other or one Trigger feeds back into itself, creating an infinite loop of actions. Loops are detrimental to app performance because they commandeer server resources, causing a slowdown for all users, which is why the system now looks for potential loops and locks the Triggers that may cause them.

Workflows, Triggers, and Campaigns will be Loop Locked when they hit 50 Starts/Executions for the same Contact in less than 30 minutes. 

Example: Trigger fires 50 times for the same Contact in less than 30 minutes, or a Contact gets added to a Workflow/Campaign 50 times in less than 30 minutes.

If you receive a Loop error, please contact Support so that we can review the Trigger with you, fix what would cause a loop, and unlock the Trigger.

This can also occur when there are multiple workflows without a filter involved.

![](https://assets2.modalsupport.net/1762200930887-image1.png)

### FAQs




**Question:** What is a loop in Workflows, Triggers, or Campaigns?
**Answer:** A loop occurs when two automations trigger each other repeatedly or when a single automation keeps triggering itself. This creates an endless cycle of executions for the same contact.




**Question:** Why are loops a problem?
**Answer:** Loops use excessive server resources and can slow down the system for everyone. Because of this, the platform automatically detects potential loops and locks the automation before it causes performance issues.




**Question:** When does the system apply a Loop Lock?
**Answer:** A Workflow, Trigger, or Campaign will be loop locked if it starts or executes **50 times for the same contact within 30 minutes**. This includes a contact being re-added repeatedly to the same automation.




**Question:** What does “Loop Locked” mean?
**Answer:** It means the system has temporarily disabled the automation to prevent further repetitive actions that could lead to performance problems.




**Question:** What should I do if I receive a Loop error?
**Answer:** Contact Support. They will help you locate the cause of the loop, correct the logic, and safely unlock the Trigger or Workflow.




**Question:** How can I see which contact caused the loop?

**Answer:** You can check your **Workflow History** or **Execution Logs**. Look for a single contact name that appears dozens of times in a very short window. This will help you identify exactly which data change or action started the cycle.




**Question:** What is a "bi-directional" loop?

**Answer:** This occurs when two separate workflows are set to trigger based on each other’s updates. For example, if **Workflow A** updates a contact field which then triggers **Workflow B**, and **Workflow B** updates a field that triggers **Workflow A** again, they will feed into each other indefinitely.




**Question:** Does a "Loop Lock" disable the workflow for all contacts or just the one that caused the error?

**Answer:** A Loop Lock is a safety shut-off that disables the entire workflow or trigger for **all** contacts. This is because a logical error in the automation will likely repeat with other users, so the system halts the process completely until the underlying logic is corrected.