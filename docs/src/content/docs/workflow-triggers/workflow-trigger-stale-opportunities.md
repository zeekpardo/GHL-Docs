---
title: "Workflow Trigger: Stale Opportunities"
description: "The Stale Opportunities Workflow Trigger is a powerful tool that allows you to automate workflows for contacts who have been in the “open” opportunity status…"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/bM4yrBZkMCynhI1qL5eW"
sourceId: "bM4yrBZkMCynhI1qL5eW"
category: "Workflow Triggers"
---

The **Stale Opportunities Workflow Trigger** is a powerful tool that allows you to automate workflows for contacts who have been in the “open” opportunity status for a specified number of days. This feature enables you to streamline follow-up actions, update opportunity statuses, and enhance your sales processes based on your specific requirements.

Contacts with the "open" opportunity status for longer than the defined duration will be automatically added to the workflow, helping you maintain engagement and manage stale opportunities effectively.

### **Prerequisites**

Before setting up a workflow with the **Stale Opportunities Workflow Trigger**, ensure that you have **Opportunities** and **Pipelines** configured in your account. If you need assistance, refer to the following articles:

-   Opportunities Overview
-   How to Create and Edit Pipelines

### **Key Benefits of Using the Stale Opportunities Workflow Trigger**

1.  **Proactive Pipeline Management:** Automatically detect and address stalled opportunities, ensuring your sales pipeline remains active and progresses smoothly.
2.  **Faster Response Times:** Send automated reminders to sales reps, encouraging them to re-engage with potential customers before opportunities are lost.
3.  **Improved Visibility:** Alert managers or team leads about neglected opportunities, allowing them to step in and take corrective action.
4.  **Customizable Workflows:** Adjust triggers and actions based on factors like pipeline stage, inactivity duration, and team roles, ensuring precise and targeted follow-ups.
5.  **Reduced Manual Effort:** Eliminate the need for manual tracking of stagnant opportunities and automate follow-ups, freeing up valuable time for your team.

**How to Access**

### **Step 1:** Start a new workflow or edit an existing one

-   Navigate to Automation on the left > Workflows on the top and create a new workflow or edit an existing one

![](https://assets2.modalsupport.net/1764175994952-image6.png)

### **Step 2:** Creating and Editing the Trigger

-   Click “Add New Workflow Trigger”

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdmRWAu2uNubht4ncMkT34GBMGkm3MGDc2aSvtBRIcEx3q0Icri7IbUNvDtwddTEswQoSXyGaGaHklM86uXFtBchNNyP-ocI987Hjc1qCeFu1lTGDtZI4mWg7HmvSFsQW2uubvnpA?key=vGF-znyRoHm2le-lRcQc6w)

-   Select **Stale Opportunities** in the **Opportunities** section of the Workflow Triggers Menu or use the search feature. Once selected, the Trigger setup menu will appear

![](https://assets2.modalsupport.net/1764176009693-image3.png)

-   (_Optional_) You can change the workflow builder display name of this trigger using the textbox below **Workflow Trigger Name**. Note that this will only affect the display name within the workflow builder and has no other impact on the content or functionality of this Workflow Trigger.
-   Press **\+ Add filters** to expand the **Filters** section of the Trigger setup menu. There are multiple options available to customize this trigger. Note that the **Duration in Days** filter is REQUIRED for this trigger to function.

![](https://assets2.modalsupport.net/1764176035531-image2.png)

-   The **lost reason filter**, when incorporated into the Stale Opportunities Workflow Trigger, enables users to identify specific reasons for lost opportunities when contacts remain in the "open" status for a set number of days. This allows for targeted follow-up actions, problem-solving precision, and focused resource allocation, enhancing the effectiveness of sales strategies and improving overall performance

![](https://assets2.modalsupport.net/1764176131273-image7.png)

-   (_Required_) **Duration in Days** allows you to select the number of days that a contact can be assigned the “open” opportunity status before being determined to be “stale” and thus added to this workflow. 
    -   This trigger is non-retroactive. This means that if upon creating this workflow, you have a contact who has been assigned the open status for longer than your set duration in days, then the trigger will not necessarily fire for them.
        -   Ex: If you select 30 days, and upon publishing this workflow you have a contact who has had the “open” status for 33 days, then the trigger will not fire.
        -   Ex: If you select 30 days, and upon publishing this workflow you have a contact who has had the “open” status for 28 days, then in two days the trigger will fire.
    -   This trigger will fire in multiples of the set duration in days.
        -   Ex: If you select 30 days, then this trigger will fire for a contact who has been in the “open” status for 30 days, 60 days, 90 days, etc.
        -   _Note_: Because of this, it is recommended to add an action to this workflow that will change the contact’s opportunity status from “open” to “abandoned” so that they won’t be run through this workflow multiple times.

-   **In pipeline** will limit this workflow to only apply to stale contacts that are within one of your selected pipelines. If you add this filter parameter, you will then have the option to create a separate filter parameter called **Pipeline stage**.
    -   **The pipeline stage** will limit this workflow to only apply to stale contacts that are within a specified stage of the above-specified pipeline.
-   **Has Tag** and **Doesn’t Have Tag** will both limit which contacts can be added to this workflow based on their tags
    -   **Has Tag** will only allow contacts who have a selected tag to be added to this workflow
    -   **Doesn’t Have Tag** will allow all contacts to be added to this workflow EXCEPT for ones that have the selected tag
    -   _Note_: You can add both of these filter parameters to one trigger, but they operate either redundantly or cancel each other out, so it is recommended to use only one.

**_Please Note:_** _You can also filter by_ **_Custom Fields_** _which will allow you to only allow contacts to be added to this workflow who meet selected custom value criteria which you can set up elsewhere in your account._

-   Press **Save Trigger** in the bottom right corner of the Trigger setup menu

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcq__7zgmUDQ61mgD5VjY0U03vY6pErwrSvL0tEyCBXbMEbT_pkgO9U8vPDz5Gz8wq-g0U0hUYMd7bC7B_T6WVA6BZwy4vX275_7j1VKNzHJZ0PnTFRnCal5SAI09TKmflsNOasaA?key=vGF-znyRoHm2le-lRcQc6w)

### **Step 3:** Set up applicable Workflow Action(s). We have multiple articles available to explain the setup of each of the Workflow Actions. Feel free to review our articles on these for more information on setting these up.

**_Pro Tip:_** You can use any Workflow Actions to be triggered by the _Stale Opportunities_ trigger or you can leave this workflow without any actions.

### **Step 4:** Press **Save** in the top right corner of your browser to save the workflow

-   If your Workflow is ready to be enabled, make sure the toggle switch under **Save** is set to **Publish**
-   Be sure to test your Workflow to ensure it is set up correctly using the **Test Workflow** button next to the **Publish** toggle switch. 
    -   For an in-depth overview of Workflow Testing see our article, “Using the Testing Features in Workflows”

![](https://assets2.modalsupport.net/1764176169212-image5.png)

Now, your workflow is set up and ready to go with the _Stale Opportunities_ Workflow Trigger.

## Example: Notify team members when an opportunity gets stale

![](https://assets2.modalsupport.net/1764176206036-image1.png)

**Trigger Setup:**

Workflow Trigger: Stale Opportunities

Workflow Trigger Name: Stale Opportunities Follow-Up

Filters:

Duration in days: 2

In pipeline: Test Pipeline

Pipeline stage: aaa

Action for Stale Opportunity:

Email Action Name: Reminder Email to Sales Rep

From Name: Your Company

From Email: yourcompany@example.com

Subject: "Reminder: Stale Opportunity Needs Attention"

### **Use Cases for the Stale Opportunities Trigger**

-   **Re-engage Stalled Deals:** If opportunities in the "Negotiation" stage remain idle for more than 5 days, send automated follow-up emails to rekindle conversations with the prospect.
-   **Sales Rep Accountability:** Automatically alert a sales rep when one of their opportunities becomes stagnant, encouraging them to take prompt action and re-engage.
-   **Manager Notifications:** Notify sales managers when high-value opportunities go stale, allowing them to intervene and offer guidance or support to the sales rep.
-   **Pipeline Maintenance:** Automatically move stale opportunities to a “Review Required” stage, prompting the team to assess the opportunity and determine the next steps.

### **FAQ's**




**Question:** What is the Stale Opportunities Workflow Trigger?  
**Answer:** The Stale Opportunities Workflow Trigger is used to automate follow-up actions or status changes for contacts that have remained in the "open" opportunity status for a set number of days.




**Question:** What is required to use this trigger?  
**Answer:** You must have Opportunities and Pipelines already set up in your account. For help, refer to the articles "Opportunities Overview" and "How to Create and Edit Pipelines."




**Question:** How does the Duration in Days filter work?
**Answer:** The Duration in Days filter specifies how long a contact must stay in the "open" status before being considered "stale." This is a required field for the trigger to function.




**Question:** Is this trigger retroactive?  
**Answer:** No, the trigger is non-retroactive.

-   Example: If a contact has had the "open" status for 33 days and your workflow is set to trigger at 30 days, the trigger will not fire for them.
-   However, if the contact has had the "open" status for 28 days, the trigger will fire after two more days.




**Question:** Does the trigger repeat?
**Answer:** Yes, the trigger fires in multiples of the specified duration.

-   Example: If the duration is set to 30 days, the trigger will fire at 30, 60, 90 days, etc., unless the opportunity status changes.




**Question:** How can I prevent the trigger from firing multiple times for the same contact?  
**Answer:** It is recommended to include a workflow action that changes the contact’s opportunity status from “open” to “abandoned” or another status. This prevents the contact from repeatedly going through the workflow.




**Question:** Can I limit this trigger to specific pipelines or stages?
**Answer:** Yes, you can:

-   Use the **In Pipeline** filter to limit the workflow to certain pipelines.
-   Use the **Pipeline Stage** filter to limit it further to specific stages within the selected pipeline.




**Question:** Can I filter by tags?
**Answer:** Yes, you can use the following filters:

-   **Has Tag**: Only contacts with the selected tag will be added to the workflow.
-   **Doesn’t Have Tag**: Contacts with the selected tag will be excluded from the workflow.




**Question:** Can I filter by custom fields?
**Answer:** Yes, you can use custom fields to filter contacts based on specific criteria that you’ve set up elsewhere in your account.




**Question:** Does this trigger apply to multiple opportunities for the same contact?
**Answer:** Yes. If a contact has multiple open opportunities, the trigger evaluates each opportunity individually based on its own “open” duration and filter criteria.




**Question:** Will the trigger fire if I manually move an opportunity back to an earlier stage?

**Answer:** The trigger calculates the duration based on the total time the opportunity has been in the **"Open"** status within that specific pipeline/stage. If you move it to a different stage, the "Pipeline Stage" filter will reset the criteria for that new stage.




**Question:** Does the "Duration in Days" count total days in the Pipeline or just the current Stage?

**Answer:** This depends on your filters. If you only filter by **In Pipeline**, the trigger counts the total consecutive days the opportunity has remained "Open" anywhere in that pipeline. If you add a **Pipeline Stage** filter, the clock starts specifically when the opportunity enters that stage.