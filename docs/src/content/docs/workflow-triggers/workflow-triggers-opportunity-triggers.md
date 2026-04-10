---
title: "Workflow Triggers: Opportunity Triggers"
description: "This article will delve into two essential workflow triggers: \"Opportunity Created\" and \"Opportunity Changed\"."
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/DU013Y24stqRKBpvoPWE"
sourceId: "DU013Y24stqRKBpvoPWE"
category: "Workflow Triggers"
---

This article will delve into two essential workflow triggers: "Opportunity Created" and "Opportunity Changed".

## The Significance of Opportunity Triggers

Every business that uses a CRM system heavily relies on opportunities. These represent potential sales or deals that the company can close. Therefore, tracking and managing these opportunities effectively is crucial. With the introduction of opportunity-specific triggers, businesses can now initiate specific automated actions every time an opportunity is created or modified. This not only enhances productivity but also ensures that no potential deal slips through the cracks.

## "Opportunity Created" Trigger

### Usage Cases:


As the name suggests, the "Opportunity Created" trigger activates the moment a new opportunity is added to the system. This can be immensely useful in several scenarios:

**Instant Notification:** Every time a new opportunity is created, relevant team members can receive instant notifications. This ensures prompt action and reduces the response time.

**Automatic Assignments:** Based on certain conditions, such as the type of opportunity or its potential value, the system can automatically assign it to the appropriate team or member.**Initiating Follow-up Actions:** As soon as an opportunity is created, the system can schedule follow-up emails or calls, ensuring that potential clients are engaged from the get-go.

**Real-Time Updates:** Opportunity triggers help keep the system up-to-date by automating changes in real-time. Whether the opportunity progresses through stages or is reassigned to different team members, all changes are immediately reflected without manual input.


**Step-by-step setup:**


**Navigate to Workflows**: Navigate to Automation on the left > Workflows on the top and create a new workflow or edit an existing one

![](https://assets2.modalsupport.net/1766072521349-image1.png)

**Select 'Opportunity Created' Trigger:** Find and click on 'Opportunity Created.' This trigger runs when a new opportunity is added.

![](https://assets2.modalsupport.net/1763476611776-2.png)

**Add Filters (Optional):**

After selecting the trigger, you have the option to add filters to specify further when the workflow should run.

![](https://assets2.modalsupport.net/1763476657267-3.png)

For instance, if you want the workflow to run only for opportunities assigned to a particular user, you can use the 'Assigned to' filter.

Other filter options include 'Has Tag', 'In Pipeline', 'Lead Value', and 'Status'. You can also add Filters for Opportunity or Contact Custom fields.  

**Set Actions:** Define what actions should be taken once this trigger is activated. This could range from sending an email, updating a record, or any other available action.


**Save Workflow:** Once you're satisfied with the setup, save the workflow.

![](https://assets2.modalsupport.net/1763476700695-4.png)

## "Opportunity Changed" Trigger

### Usage Cases:  


The "Opportunity Changed" trigger, on the other hand, comes into play when there's a modification in an existing opportunity. This is especially handy to keep track of the progression of an opportunity or if there are any alterations in its details:

**Status Updates:** If the status of an opportunity changes, say from "New" to "In Progress", specific actions like sending out an update email can be initiated.

**Reassignment:** If the details of an opportunity change, making it more suitable for another team or member, the system can automatically reassign it.

**Data Integrity:** Any time there's a modification in the opportunity, the system can perform a check to ensure data consistency and accuracy.

###   
Step-by-step setup:


**Navigate to Workflows**: Navigate to Automation on the left > Workflows on the top and create a new workflow or edit an existing one.

![](https://assets2.modalsupport.net/1766072596848-image1.png)

**Select 'Opportunity Changed' Trigger:** Find and click on 'Opportunity Changed.' This trigger will run when any existing opportunity changes.

![](https://assets2.modalsupport.net/1766072630989-image5.png)

**Add Filters (Optional):**

After selecting the trigger, you have the option to add filters to further specify when the workflow should run.

![](https://assets2.modalsupport.net/1763476832725-7.png)

For instance, if you want the workflow to run only for opportunities assigned to a particular user, you can use the 'Assigned to' filter.

Other filter options include 'Has Tag', 'In Pipeline', 'Lead Value', and 'Status'. You can also add Filters for Opportunity or Contact Custom fields.  


**Set Actions:** Define the actions that should be taken when this trigger is activated.

**Save Workflow:** Ensure you save the workflow after setting it up.

## FAQs




**Question:** What are the "Opportunity Created" and "Opportunity Changed" triggers in workflows?
**Answer:** These triggers are used to automate actions within whenever a new opportunity is created ("Opportunity Created") or when changes occur to an existing opportunity ("Opportunity Changed"). They help streamline processes and ensure timely follow-ups and notifications.




**Question:** Why are opportunity-specific triggers important for businesses?
**Answer:** Opportunity-specific triggers allow businesses to automate responses and actions based on the creation or modification of opportunities, which are critical for tracking potential sales or deals. This automation enhances productivity and ensures that opportunities are managed effectively without missing any potential deals.




**Question:** How do I set up an "Opportunity Created" trigger?
**Answer:** To set up an "Opportunity Created" trigger, navigate to Automation> Workflow, create a new workflow from scratch, and select 'Opportunity Created.' You can then add optional filters, set the actions to be triggered, and save the workflow.




**Question:** What actions can be automated using the "Opportunity Created" trigger?
**Answer:** Actions that can be automated include sending instant notifications to relevant team members, automatically assigning opportunities based on conditions, and initiating follow-up actions such as scheduling emails or calls.




**Question:** Can I filter when the "Opportunity Created" trigger should activate?
**Answer:** Yes, you can add filters to specify when the workflow should run. Filters include 'Assigned to,' 'Has Tag,' 'In Pipeline,' 'Lead Value,' 'Status,' and other custom fields for opportunities or contacts.




**Question:** How do I set up an "Opportunity Changed" trigger?
**Answer:** To set up an "Opportunity Changed" trigger, go to Automation> Workflow, create a new workflow from scratch, and select 'Opportunity Changed.' You can add filters, define the actions, and save the workflow to automate responses to changes in existing opportunities.




**Question:** What are some use cases for the "Opportunity Changed" trigger?
**Answer:** Use cases include automating status updates when an opportunity's status changes, reassigning opportunities to more suitable teams or members based on changes, and performing checks for data integrity when modifications occur.




**Question:** Can I use filters with the "Opportunity Changed" trigger?

**Answer:** Yes, similar to the "Opportunity Created" trigger, you can add filters to the "Opportunity Changed" trigger to specify conditions such as which opportunities should trigger the workflow based on criteria like 'Assigned to,' 'Has Tag,' 'In Pipeline,' 'Lead Value,' and 'Status.'




**Question:** What kind of actions can be set up with the "Opportunity Changed" trigger?
**Answer:** Actions that can be set up include sending update emails, reassigning opportunities to different team members, updating records, or any other actions available within .




**Question:** Is it necessary to save the workflow after setting up triggers?
**Answer:** Yes, after configuring the triggers, adding filters, and defining actions, it’s important to save the workflow to ensure that the automation functions correctly.




**Question:** Can I set up multiple actions for a single trigger in a workflow?
**Answer:** Yes, you can set up multiple actions for a single trigger within a workflow. For example, you can notify team members, update opportunity details, and schedule follow-up tasks all within the same workflow.




**Question:** If I move an opportunity from one Pipeline Stage to another, which trigger should I use?

**Answer:** You should use the **"Opportunity Changed"** trigger. Moving a deal between stages is considered a modification of the existing record. To make the workflow specific to a certain stage, add a filter for "Pipeline Stage" and select the stage the opportunity is moving _into_.




**Question:** If I delete an opportunity, does it fire the "Opportunity Changed" trigger?

**Answer:** No. Deletion is not considered a "change" in the context of this trigger. These triggers are designed to manage the active progression of deals through your pipeline.