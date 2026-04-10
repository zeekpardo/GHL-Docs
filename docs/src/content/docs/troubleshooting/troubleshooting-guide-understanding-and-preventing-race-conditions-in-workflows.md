---
title: "Troubleshooting Guide: Understanding and Preventing Race Conditions in Workflows"
description: "A race condition occurs when two or more workflow actions execute simultaneously, leading to conflicts in execution order. This can result in some actions…"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/crxrKW90KjVwMLFAuhN0"
sourceId: "crxrKW90KjVwMLFAuhN0"
category: "Troubleshooting"
---

A race condition occurs when two or more workflow actions execute simultaneously, leading to conflicts in execution order. This can result in some actions appearing as successfully executed in logs but not applying to the contact record. Below is a structured troubleshooting guide to help diagnose and resolve race conditions in workflows.

## Common Issue: Workflow Actions Not Applying as Expected

## Question: How do I know if a race condition is affecting my workflow?

#### 
**Answer:** Symptoms:

-   A tag, note, or status update appears in the workflow execution logs but is missing from the actual contact record.
-   Actions that depend on previous steps do not trigger correctly.
-   Data updates seem inconsistent or missing when workflows execute multiple actions at the same time.

#### How to Check:

1- Open the workflow execution logs.

2- Locate the timestamp of the affected action.

![](<https://assets2.modalsupport.net/1763760602263-Captura de pantalla 2025-11-21 162954.png>)

3- If multiple actions (e.g., "Add to Workflow" and "Add Tag") have executed at the exact same second, a race condition is likely causing the issue.




**Question:** What causes a race condition in workflows?  
**Answer:** A race condition occurs when two or more dependent actions attempt to execute at the same time. The system processes them in a non-deterministic order, which can result in:

-   One action overwriting another before completion.
-   Actions failing due to dependencies not being fully executed.
-   Delayed application of tags, notes, or updates.

For example:

-   A workflow triggers two actions, "Add Tag" and "Send Email," at the exact same second.

![](<https://assets2.modalsupport.net/1763760630822-Captura de pantalla 2025-11-21 163023.png>)

-   The email is sent, but the tag does not apply because another process modified the contact record simultaneously.




**Question:** How can I prevent race conditions in my workflow?  
**Answer:** Solution: Implement a "Wait" Step

To avoid simultaneous execution, introduce a short delay between critical actions.

### Step-by-Step Fix:

**1- Identify Conflict Points**

-   Review workflow execution logs for actions that fire at the same time.
-   Focus on actions that modify the same contact record (e.g., adding tags, updating fields, assigning users).

**2- Insert a "Wait" Action**

-   Go to your workflow editor.

Click on **Add Action** and select **"Wait"**.

![](<https://assets2.modalsupport.net/1763760678922-Captura de pantalla 2025-11-21 163108.png>)

-   Set the wait time to **1 minute** before the next critical action.

**3- Test the Workflow Execution**

-   Run a test workflow with sample contacts.
-   Check if the actions now execute in the correct order without missing updates.

**4- Optimize for Performance**

-   If a 1-minute wait is too long, try reducing it to **30 seconds** while ensuring sequential execution.
-   If actions involve external services (e.g., webhooks or API calls), consider adding longer delays.




**Question:** Are there other methods to prevent race conditions?  
**Answer:** Apart from using a wait action, consider these best practices:

**Use Conditional Branching:** Instead of triggering multiple actions at the same time, separate them into conditional branches based on logic.

![](https://assets2.modalsupport.net/1770904654666-image3.png)

-   **Sequence Actions Logically:** Ensure actions that depend on each other are structured in a linear order rather than executing concurrently.
-   **Limit External API Calls:** When using webhooks or API integrations, implement retry mechanisms or use delays to ensure data syncs correctly.




**Question:** How do I verify if the issue is fully resolved?  
**Answer:** Verification Checklist

**Check execution logs** – Ensure actions now have distinct timestamps.  
**Monitor affected workflows** – Run test scenarios with sample contacts.  
**Confirm data consistency** – Verify that tags, updates, and modifications reflect correctly in the contact record.  
**Ensure no overlapping triggers** – Review triggers and schedules to prevent simultaneous execution.




**Question:** How long should I set wait times to prevent race conditions?
**Answer:** Start with 30–60 seconds for critical actions. For actions involving external integrations, longer delays may be needed to ensure sequential execution. Test and optimize as necessary.




**Question:** Can I use "Internal Notifications" to find race conditions?
**Answer:** Yes. If you receive an internal notification saying a lead has reached a certain stage, but you look at the contact and they are missing the correct tag or status, you have likely found a conflict point. Check the timestamps in the execution logs immediately.




**Question:** Is a 1-minute "Wait" step the only way to fix simultaneous execution?

**Answer:** While a 1-minute wait is the standard fix, you can optimize for performance by reducing the delay to **30 seconds** if you need faster processing. Alternatively, you can use **Conditional Branching** to force the system into a linear path or re-sequence actions so that dependent steps are logically separated rather than concurrent.