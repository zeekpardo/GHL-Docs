---
title: "Workflow Trigger: Opportunity Created"
description: "Workflow Trigger: Opportunity Created"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/yLUguH2QPrWr1iUPK2Yy"
sourceId: "yLUguH2QPrWr1iUPK2Yy"
category: "Workflow Triggers"
---

**Workflow Trigger: Opportunity Created**

The Opportunity Created trigger helps businesses automate workflows when a new opportunity is introduced into their system. By leveraging this trigger, businesses can simplify processes such as task assignments, follow-up notifications, and status updates based on the characteristics of the newly created sales opportunity. Whether you’re managing a sales pipeline or tracking potential deals, this trigger enhances efficiency and ensures important actions are taken at the right time.

## How to Use the Opportunity-Created Workflow Trigger

### Step 1: Start a new workflow or edit an existing one

-   Navigate to Automation > Workflows section within platform and either create a new workflow or select an existing one to edit.

![](<https://assets2.modalsupport.net/1766058838782-unnamed - 2025-12-18T195346.010.png>)

### Step 2: Creating and Editing the Trigger

-   Click on "Add New Workflow Trigger" to initiate the trigger setup process.
-   Select "Opportunity Created" from the available triggers in the menu.

![](<https://assets2.modalsupport.net/1766058856401-unnamed - 2025-12-18T195410.684.png>)

-   Optionally, choose a meaningful name for the trigger that reflects its purpose. For example, "High Value Lead Opportunity Created."

**Set Filters:**

-   **Assigned To:** Filter based on the user the opportunity is assigned to. This ensures the right team member is notified or tasked with follow-up.
-   **Has Tag:** Filter Opportunities based on specific tags.
-   **In Pipeline:** Select a specific pipeline to track opportunities. This allows for focused automation based on pipeline stages.
-   **Lead Value:** Set the trigger to activate based on the monetary value of the opportunity, ensuring that high-value leads are prioritized.
-   **Lost Reason:** The reason provided for marking an opportunity as lost.
-   **Status:** The current status of the opportunity (New, Open, etc)

![](<https://assets2.modalsupport.net/1766058885711-unnamed - 2025-12-18T195438.976.png>)

-   **Add Multiple Filters:** If needed, apply additional filters to further refine the conditions under which the trigger will activate.

-   Save the trigger to finalize the setup.

### Step 3: Set up applicable Workflow Action(s)

-   After setting up the trigger, define the actions that should be automated based on the opportunity-created event.
-   These could include sending notifications, assigning tasks, or updating opportunity statuses.
-   Configure each action according to your specific requirements to streamline follow-up processes or resource allocation.

**_NOTE: We have multiple articles available to explain the setup of each of the Workflow Actions. Feel free to review our articles for more information on setting these up._**

### Step 4: Save and Test the Workflow

-   Press "Save" in the top right corner of your browser to save the workflow.
-   If ready, enable the workflow by setting the toggle switch to "Publish."

Test the workflow using the "Test Workflow" button to ensure it is set up correctly and functioning as intended.  

![](<https://assets2.modalsupport.net/1766058914319-unnamed - 2025-12-18T195508.087.png>)

-   **_NOTE: For an in-depth overview of Workflow Testing see our article, “Using the Testing Features in Workflows”_**


Benefits:

-   Targeted Follow-Up: 
-   Create personalized follow-up strategies based on specific reasons for opportunity loss, increasing re-engagement success.
-   Problem-Solving Precision:
-   Pinpointing reasons for lost opportunities enables targeted solutions, enhancing sales strategies.
-   Focused Resource Allocation:
-   Allocating resources to primary loss factors optimizes efficiency, fueling strategic growth.

**Example Use Case**

**Scenario:** You want to ensure that the sales manager is notified when a new opportunity with a lead value greater than $10,000 is created in the system.

-   **Trigger:** Opportunity Created
-   **Filter:** Lead Value greater than $10,000
-   **Action:** Notify the sales manager

This setup ensures that significant opportunities are flagged and acted upon promptly, helping the sales manager stay informed and responsive.

### Frequently Asked Questions (FAQs)




**Question:** What triggers the Opportunity Created workflow?
**Answer:** The workflow is triggered when a new opportunity is created in the system.  




**Question:** Can I filter opportunities by lead value?
**Answer:** Yes, you can filter opportunities based on their monetary value to focus on high-value leads.  




**Question:** What actions can I set up with this trigger?
**Answer:** You can set up actions like notifying team members, assigning tasks, or updating the status of an opportunity.  




**Question:** Can I filter opportunities by pipeline stage?
**Answer:** Yes, the Opportunity Created trigger allows you to filter opportunities by specific pipeline stages.  




**Question:** Is it possible to filter by the user assigned to an opportunity?
**Answer:** Yes, you can filter opportunities by the user assigned to ensure the right team members are notified or tasked with follow-up.




**Question:** If I import 100 opportunities at once, will the workflow trigger 100 times?

**Answer:** Yes. If you have a published workflow with this trigger, every newly imported opportunity that meets your filter criteria will start the workflow. We recommend keeping the workflow in "Draft" mode during large imports unless you want all automation (like emails/notifications) to fire immediately.




**Question:** Can I trigger a workflow based on the specific reason an opportunity was lost?

**Answer:** Yes. By using the "Lost Reason" filter, you can trigger specific automations or follow-up strategies tailored to why a deal didn't close, allowing for more precise problem-solving and re-engagement.