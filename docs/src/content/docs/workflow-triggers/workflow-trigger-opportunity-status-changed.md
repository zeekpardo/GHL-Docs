---
title: "Workflow Trigger: Opportunity Status Changed"
description: "The Opportunity Status Changed Workflow Trigger can be used to trigger a workflow whenever a contact who is listed within one of your Pipelines is transferred…"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/X9FEOP7RJmXmTthnD8Ir"
sourceId: "X9FEOP7RJmXmTthnD8Ir"
category: "Workflow Triggers"
---

The Opportunity Status Changed Workflow Trigger can be used to trigger a workflow whenever a contact who is listed within one of your Pipelines is transferred from one opportunity status to another. In this event, the contact for whom the opportunity status was changed will then be added to this workflow. This article will overview of how to set up a workflow using the Opportunity Status Changed Workflow Trigger

## Key Benefits of Opportunity Status Changed Trigger

-   Automated Notifications: Instantly alert relevant team members about opportunity status updates, improving internal communication.
-   Improved Workflow Efficiency: Reduce manual intervention by automating routine actions triggered by status changes.
-   Enhanced Data Accuracy: Automatically update account’s records to ensure consistent and up-to-date tracking of opportunities.
-   Customizable Filters: Use filters like “Moved From Status” or “In Pipeline” to create highly targeted workflows tailored to your business needs.
-   Streamlined Sales Processes: Enable faster transitions between opportunity stages, ensuring timely invoicing, follow-ups, or handoffs.

**How does this trigger work?**

### Step 1: Start a new workflow or edit an existing one

-   Navigate to Automation on the left > Workflows on the top and create a new workflow or edit an existing one

![](<https://assets2.modalsupport.net/1763409567631-Captura de pantalla 2025-11-17 145918.png>)

### **Step 2:** Creating and Editing the Trigger

-   Click **“Add New Workflow Trigger”**

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdjkGdbyJUEvb8QB1gqHW3orHoIgoLKJnozuBlIYN5RKHHGB6VgmtR5aEN-M3UoIzG58KcP8blg8_YjowGAmqbbovmHD1gaT_5I6Y7kA685hPZ5AQYKNDLoeFSPx9Of_Ly83xLEmp95ToaVg532Shy1Qvqi?key=2FdkpZZDk5c5AsiJl2WvwQ)

-   Select **Opportunity Status Changed** in the **Opportunities** section of the Workflow Triggers Menu or use the search feature. Once selected, the Trigger setup menu will appear

![](<https://assets2.modalsupport.net/1763409599651-Captura de pantalla 2025-11-17 145951.png>)

-   (_Optional_) You can change this trigger's workflow builder display name of this trigger using the textbox below **Workflow Trigger Name**. Note that this will only affect the display name within the workflow builder and has no other impact on the content or functionality of this Workflow Trigger.

-   Press **\+ Add filters** to expand the **Filters** section of the Trigger setup menu which will display several filter parameters
    -   The **Has Tag** filter parameter will only allow contacts who have the selected tag assigned to them to be added to this workflow. No other contacts may be added

-   **In-pipeline** will only allow opportunity status changes within the selected pipeline to trigger this workflow
    -   If you select this filter parameter, you can then create another filter parameter called **Pipeline stage** which will allow you to select from the stages in the above-selected pipeline. Only opportunity changes that occur within the pipeline stage you select will be able to trigger this workflow

-   The **Moved from/to status** filter parameters will let you specify which opportunity status changes will trigger this workflow
    -   **Moved from status** - When a contact’s opportunity status changes _from_ the selected status in this parameter _to_ any other status, then this workflow may be triggered
    -   **Moved to status** - When a contact’s opportunity status changes _to_ the selected status _from_ any other status then this workflow may be triggered
    -   If both of these filters are assigned to this trigger, then this workflow will be triggered only by opportunity status changes that move _from_ the selected  “Moved from” status _to_ the selected “Moved to” status.

-   You can also filter by **Custom Fields** which will only allow contacts who meet certain **Custom Value** criteria to be added to this workflow. Such values are based on what you would have set up elsewhere in your contacts/account.
-   The **Lost Reason filter**, when applied to the Opportunity Status Changed workflow trigger, enables users to pinpoint specific reasons for lost opportunities. This allows for targeted follow-up strategies, problem-solving precision, and focused resource allocation, ultimately enhancing sales strategies and customer relationships.  
    **![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeKRvuk8YLWOy4S9Cv5ZlfhzMOVzyOUE1YGjjnhmfW8elqMPbyof6ucLhKTbXwVcjJjylaftYgTnSCmTduQzu9weJK3GaT3678pUapxeS1_t9qYs7C1jLSSuCg108jyiDlv_pmCGJLTc-a4MZ7AVbImom_h?key=2FdkpZZDk5c5AsiJl2WvwQ)**

**![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXc988UYSamCZhPvtSy8wn8YzFAHRHnJtiTrvlm41Bn3cChoPJ9FVs45lAbsvqVDe4A7ZMkSQDSB94Sz9Y1PV67NoNlXtA-7X1lkP1oUy2y_fCsB_-Hu5fBC0H705ubsJa4-HF9dk2Ax4hJf6kn21vmkSklE?key=2FdkpZZDk5c5AsiJl2WvwQ)**

-   Press **Save Trigger** in the bottom right corner of the Trigger setup menu

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXevmH9Ig8CEAoyYWZv6VRUUX65YfbGy6H9TEzSOVr0I2CFBdmVc3lGSYeSiQKal_faXe8S07rvOdZSrzqyvmka3kf-aOAoa2RDZxHy_Qf5Yd4c2ge5iwlVjzeQC_-X6kcflZXPD5dVd6jMQJOTsAZYjBtD7?key=2FdkpZZDk5c5AsiJl2WvwQ)

### **Step 3:** Set up applicable Workflow Action(s). We have multiple articles available to explain the setup of each of the Workflow Actions. Feel free to review our articles on these for more information on setting these up.

**_Pro Tip:_** You can use any Workflow Actions to be triggered by the _Opportunity Status Changed_ trigger or you can leave this workflow without any actions.

### **Step 4:** Press **Save** in the top right corner of your browser to save the workflow

-   If your Workflow is ready to be enabled, make sure the toggle switch under **Save** is set to **Publish**
-   Be sure to test your Workflow to make sure it is set up correctly using the **Test Workflow** button next to the **Publish** toggle switch. 
    -   For an in-depth overview of Workflow Testing see our article, “Using the Testing Features in Workflows”

![](<https://assets2.modalsupport.net/1763409690849-Captura de pantalla 2025-11-17 150103.png>)

Now your workflow is set up and ready to go with the _Opportunity Status Changed_ Workflow Trigger.

### Use Cases for Opportunity Status Changed Trigger

#### Sales Milestone Notifications

**Scenario:** A sales opportunity progresses from “Negotiation” to “Closed Won.”

**Trigger Setup:**

-   **Trigger:** Opportunity Status Changed
-   **Filters:**
    -   **Assigned To:** John Doe
    -   **Moved From Status:** Negotiation
    -   **Moved To Status:** Closed Won

**Outcome:** The workflow sends a congratulatory email to the salesperson, notifies the finance team to initiate invoicing, and updates with the "Closed Won" status.

#### Lost Opportunity Follow-Up

**Scenario:** A sales opportunity moves from “Open” to “Lost.”

**Trigger Setup:**

-   **Trigger:** Opportunity Status Changed
-   **Filters:**
    -   **Has Tag:** “High Priority”
    -   **Moved To Status:** Lost

**Outcome:** The workflow sends a follow-up email to the prospect asking for feedback and notifies the account manager of further evaluation.

#### Pipeline Transition Alerts

**Scenario:** An opportunity advances to the “In Review” stage in the “Enterprise Deals” pipeline.

**Trigger Setup:**

-   **Trigger:** Opportunity Status Changed
-   **Filters:**
    -   **In Pipeline:** Enterprise Deals
    -   **Pipeline Stage:** In Review

**Outcome:** The workflow notifies the sales manager and assigns a task to the review team to assess the opportunity.

#### Lead Requalification Workflow

**Scenario:** A dormant lead is re-engaged and moves from “Lost” to “Reopened.”

**Trigger Setup:**

-   **Trigger:** Opportunity Status Changed
-   **Filters:**
    -   **Moved From Status:** Lost
    -   **Moved To Status:** Reopened

**Outcome:** The workflow assigns the lead to a salesperson and updates their priority status.

#### Marketing Campaign Success Tracking

**Scenario:** Opportunities from a specific marketing campaign move from “Open” to “Closed Won.”

**Trigger Setup:**

-   **Trigger:** Opportunity Status Changed
-   **Filters:**
    -   **Has Tag:** Campaign-X
    -   **Moved To Status:** Closed Won

**Outcome:** The workflow generates a report on campaign performance and notifies the marketing team.

### FAQs




**Question:** What is the Opportunity Status Changed Workflow Trigger?

**Answer:** The Opportunity Status Changed Workflow Trigger activates whenever a contact’s opportunity status within one of your pipelines changes from one status to another. This trigger allows you to automate workflows based on changes in opportunity status.




**Question:** How do I start setting up a workflow with this trigger?
**Answer: 

-   **Start Workflow:** Begin by creating a new workflow or editing an existing one.
-   **Add Trigger:** Click “Add New Workflow Trigger” in the workflow editor.
-   **Select Trigger:** Choose "Opportunity Status Changed" from the Opportunities section or use the search feature to find it.
-   **Configure Trigger:** Set up the trigger by selecting relevant filters and options.




**Question:** Can I rename the Opportunity Status Changed trigger?

**Answer:** Yes, you can change the display name of the trigger using the textbox labeled "Workflow Trigger Name." This only affects how the trigger is displayed within the workflow builder and does not impact its functionality.




**Question:** What filters can I apply to the Opportunity Status Changed trigger?
**Answer: 

-   **Has Tag:** Only contacts with the selected tag will be included.
-   **In Pipeline:** Limits the trigger to opportunity status changes within the selected pipeline.
-   **Pipeline Stage:** Further refines the trigger to specific stages within the pipeline.
-   **Moved from/to Status:** Specifies which status changes will trigger the workflow.
-   **Custom Fields:** Allows filtering based on custom field values.
-   **Lost Reason:** Enables targeting based on specific reasons for lost opportunities.




**Question:** How do I set up the Moved from/to Status filters?
**Answer: 

-   **Moved from Status:** Configure this to trigger the workflow when a contact’s status changes from the selected status.
-   **Moved to Status:** Configure this to trigger the workflow when a contact’s status changes to the selected status.
-   **Both Filters:** If both filters are applied, the workflow will trigger only if the status changes from the “Moved from” status to the “Moved to” status.




**Question:** What should I do after setting up the trigger?
**Answer: 

-   **Set Up Actions:** Configure the actions you want to follow the trigger. Refer to our articles on Workflow Actions for detailed setup instructions.
-   **Save Workflow:** Click "Save" in the top right corner of your browser.
-   **Publish Workflow:** Ensure the toggle switch under Save is set to Publish to enable the workflow.




**Question:** How can I test the workflow to ensure it’s set up correctly?

**Answer:** Use the “Test Workflow” button next to the Publish toggle switch to simulate the workflow and verify its functionality. For more details on testing workflows, refer to the article “Using the Testing Features in Workflows.”




**Question:** What if I don’t want any actions to follow the Opportunity Status Changed trigger?

**Answer:** You can set up the trigger without adding any actions if you prefer. The workflow will still be activated based on the status changes, but no additional actions will be executed.




**Question:** How can I refine the filter criteria for the Opportunity Status Changed trigger?
**Answer: 

-   **Adjust Filters:** Modify the selected filters based on your needs, such as updating the pipeline stage or custom fields.
-   **Save Changes:** Ensure that any changes to the filters are saved by pressing "Save Trigger."




**Question:** Can I apply multiple filters simultaneously?

**Answer:** Yes, you can apply multiple filters at the same time to refine which opportunity status changes will trigger the workflow. For example, you can use a combination of tags, pipeline stages, and status filters.




**Question:** If I have multiple opportunities for one contact, which one triggers the workflow?
**Answer:** The workflow will trigger for the specific opportunity card that underwent the status change. All "Data Tags" used in the workflow (like Opportunity Value) will pull from that specific card, ensuring accuracy even if the contact has multiple deals in progress.




**Question:** If I change the status via a "Bulk Action" in the Opportunity board, will it still trigger the workflow?

**Answer:** **Yes.** Whether you manually drag the card to the "Won" bucket, use a bulk action, or another workflow changes the status, this trigger will detect the change and execute your automation.




**Question:** If I delete an opportunity, does that count as a "Status Change"?

**Answer:** No. Deletion is a different event. This trigger only looks for status _transitions_ (e.g., Open → Won). If you want to track deleted deals, you would need to check the **Audit Logs**.