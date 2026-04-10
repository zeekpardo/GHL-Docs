---
title: "Loop Lockouts"
description: "Sometimes you may have a loop created in accidentally when two actions are set to feed into one another or feed back into itself repeatedly. This creates an…"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/OxFCdxNlhD0AizD6N7v1"
sourceId: "OxFCdxNlhD0AizD6N7v1"
category: "Workflow Triggers"
---

Sometimes you may have a loop created in accidentally when two actions are set to feed into one another or feed back into itself repeatedly. This creates an infinite loop of actions which can slow down and create issues. Most of the time this is something done unintentionally, so now we have enabled to catch this and enable a Loop Lock to prevent the issue from occurring.

**Limitations:**

Campaigns, Triggers, and Workflows will automatically be “Loop Locked” when they reach 50 starts/action executions for the same contact in less than 30 minutes. For example, if you have one contact record added to the same Campaign or Workflow 50 times in 29 minutes, the Loop Lock will be automatically enabled. You’ll see an error code that looks something like this at the top of your screen:

**Troubleshooting Guide for Loop Lock:**

**Identify the Source of the Loop:**

-   Navigate to Automation > Workflows and access the Workflow.

![](https://assets2.modalsupport.net/1763580989944-image1.jpg)

-   Access execution logs to determine the trigger causing the loop.
-   Examine the details of the 'Add to workflow' execution to pinpoint the source of the loop.

**Resolving the Issue:**

-   Once the trigger/source causing the loop is identified, take corrective action to prevent recurrence.
-   Remove the source or rectify the trigger to eliminate the loop.

**Implement Corrective Measures:**

-   After addressing the trigger/source issue, consider cloning the workflow or creating a new one with identical details.
-   If the problem persists despite corrective actions, seek assistance from support channels.

By following these steps, you can effectively troubleshoot and resolve loop lock issues in your workflow.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcxPK1DafSLOR-wTXqyAxtZhJLPpXGtBYj_exf3Z2NqBFNoDWiimk9xpL75hFevWnAL8Ah5wuXV1IfvAGoIq05MVkXFNLb6pwuus0ncnMbFKbRLK7IYhwZ78rxGmzBWXH3-f27oGPzoksyHRMj1qRziGIyM?key=LG039r620qdN_EflQCN99A)




**Question:** How to get your locked workflow/campaign unlocked?

**Answer:** If you receive a Loop error, **contact Support** and we can review the Campaign, Trigger, or Workflow to assist you with unlocking it and resolving the Loop.




**Question:** What is a Loop Lock in ?

**Answer:** A Loop Lock is a feature designed to prevent infinite loops of actions within Campaigns, Triggers, or Workflows. It is triggered automatically when a contact undergoes the same action 50 times within a 30-minute period, preventing excessive system load and potential performance issues.




**Question:** What causes a Loop Lock to be activated?

**Answer:** A Loop Lock is activated when a contact record is added to the same Campaign or Workflow 50 times in less than 30 minutes. This typically results from unintended loops where actions feed into one another or back into themselves repeatedly.




**Question:** How can I identify if a Loop Lock has occurred?

**Answer:** You will see an error code at the top of your screen indicating a Loop Lock. This error suggests that the system has detected excessive action executions and has automatically enabled the Loop Lock.




**Question:** What steps should I take to identify the source of the loop?
**Answer: 

-   Navigate to the problematic workflow in .
-   Access the execution logs to review the triggers and actions involved.
-   Look for repeated 'Add to workflow' executions or similar entries to determine the trigger causing the loop.




**Question:** How do I resolve a Loop Lock issue?
**Answer: 

-   After identifying the trigger or source of the loop, correct the configuration by removing or adjusting the problematic trigger or action.
-   Ensure that the workflow does not contain any conflicting or repetitive actions that could cause a loop.




**Question:** What should I do after resolving the loop issue?  
Answer:** 

-   Consider cloning the problematic workflow or creating a new one with the same details to ensure the issue does not recur.
-   If the problem persists, seek assistance from support channels for further investigation and resolution.




**Question:** How can I get a locked workflow or campaign unlocked?

**Answer:** If you encounter a Loop Lock error, contact Support. Provide details about the affected Campaign, Trigger, or Workflow so that the support team can review and assist with unlocking it and resolving the loop.




**Question:** Are there any limitations to the Loop Lock feature?

**Answer:** Yes, the Loop Lock is automatically enabled when a Campaign, Trigger, or Workflow reaches 50 starts/action executions for the same contact within a 30-minute window. This is to prevent excessive load and performance issues.




**Question:** How can I prevent Loop Locks in the future?
**Answer: 

-   Carefully review your workflows to ensure there are no unintentional loops or conflicting actions.
-   Implement proper checks and balances to avoid scenarios where actions continuously feed into each other.
-   Regularly audit and test workflows to identify potential issues before they affect system performance.




**Question:** What related topics should I be aware of?

**Answer:** Review our article on Race Conditions in Workflows (Unexpected Behavior) for additional insights related to workflow behavior and conflict resolution.




**Question:** Can the Loop Lock feature be manually adjusted or disabled?

**Answer:** No, the Loop Lock feature is designed to automatically activate to prevent system issues. It cannot be manually adjusted or disabled, but you can work with Support to resolve any issues caused by it.




**Question:** Where can I find more information or seek help if needed?

**Answer:** For detailed troubleshooting and additional support, refer to the support articles in our knowledge base or contact Support for personalized assistance.




**Question:** Does the Loop Lock affect all contacts in the workflow or campaign?

**Answer:** No, the Loop Lock is applied individually to each contact. If a single contact triggers the loop, only that contact will be locked, and no other contacts in the workflow or campaign will be affected.




**Question:** Are there related workflow issues I should be aware of?

**Answer:** Yes. Check our article on Race Conditions in Workflows (Unexpected Behavior) to understand other workflow conflicts that can affect performance.




**Question:** Can I set my own loop limits (e.g., lock after 10 tries)?
**Answer:** No. The 50-action limit is a hardcoded system safety feature designed to balance user flexibility with server performance. It is set high enough to allow for complex, legitimate automations while being low enough to catch errors before they cause deliverability issues with your email or SMS provider.




**Question:** If I have fixed the trigger causing a loop but the workflow is still locked, what is the recommended next step?
**Answer:** After you have identified and addressed the trigger or source issue, the best course of action is to **clone the workflow** or create a new one with identical details. This ensures you can move forward with a fresh, functioning automation while the original issue is being reviewed.