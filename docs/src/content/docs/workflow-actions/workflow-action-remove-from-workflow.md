---
title: "Workflow Action: Remove From Workflow"
description: "The Remove Workflows Action enables users to automatically remove contacts from one or multiple workflows. This article will give you an overview of how to…"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/6nykdEDJmcwVustqVSqz"
sourceId: "6nykdEDJmcwVustqVSqz"
category: "Workflow Actions"
---

The Remove Workflows Action enables users to automatically remove contacts from one or multiple workflows. This article will give you an overview of how to create a workflow using the _Remove From Workflow_ Workflow Action.  


**Key FeaturesSmart List Cleanup:** The system automatically removes people from automated sequences when they are no longer needed, saving you the hassle of doing it yourself.

**Better Experience for Clients:** Your customers won't feel annoyed or spammed by unnecessary alerts. They only get the updates that actually matter to them, which keeps them happy.

**More Time for You:** Since the system handles the "unsubscribing" part of the workflow for you, you don't have to spend hours checking lists manually. You can focus on growing your business instead.

**Right Message, Right Time:** This keeps your messages helpful and relevant. It stops people from getting outdated info or repetitive emails that don't match their current situation.

**Step 1:** Start a new workflow or edit an existing one

![](<https://assets2.modalsupport.net/1765451760177-unnamed - 2025-12-11T191553.622.png>)

**Step 2:** Set up applicable Workflow Trigger(s). We have multiple articles available to explain the setup of each of the Workflow Triggers. Feel free to review our articles on these for more information on setting these up.

**_Pro Tip:_** You can use any Workflow Triggers to trigger the _Remove From Workflow_ Workflow Action or you can leave this workflow without any triggers.

**Step 3:** Setting up the _Remove From Workflow_ Workflow Action

-   Click on the “+” symbol below the trigger to add an action.

![](<https://assets2.modalsupport.net/1765451778932-unnamed - 2025-12-11T191614.696.png>)

-   Under Actions, select **Remove From Workflow** in the **Internal Tools** section of the Actions Menu or use the search feature. Upon selection, the Action setup menu will appear

![](<https://assets2.modalsupport.net/1765451820717-unnamed - 2025-12-11T191649.451.png>)

-   (_Optional_) You can change the workflow builder display name of this action using the textbox below **Action Name**. |  

    -   **Note:** This will only affect the display name within the workflow builder and has no other impact on the content or functionality of this Workflow Action.

-   Select any of these four options:

-   **Current Workflow**: Remove the user from the workflow they are currently in.
-   **Another Workflow**: Select and remove the user from another specific workflow.
-   **All Except Current Workflow**: Remove the user from all workflows except the current one.
-   **All Workflows**: Remove the user from all active workflows.

![](<https://assets2.modalsupport.net/1765451846816-unnamed - 2025-12-11T191721.360.png>)

-   Press **Save** in the bottom right corner of the Action setup menu

![](<https://assets2.modalsupport.net/1765451867737-unnamed - 2025-12-11T191741.665.png>)

**Step 4:** Press **Save** in the top right corner of your browser to save the workflow

-   If your Workflow is ready to be enabled, make sure the toggle switch under **Save** is set to **Publish**
-   Be sure to test your Workflow to make sure it is set up correctly using the **Test Workflow** button next to the **Publish** toggle switch. 
    -   For an in-depth overview of Workflow Testing see our article, “Using the Testing Features in Workflows”

![](<https://assets2.modalsupport.net/1765451891999-unnamed - 2025-12-11T191807.130.png>)

Now your Workflow is set up and ready to go with the _Remove From Workflow_ Action!

**Example: Marketing Campaign Cleanup**

![](<https://assets2.modalsupport.net/1765451911897-unnamed - 2025-12-11T191826.255.png>)

**Scenario:** A business wants to ensure that once a contact completes a specific action, they are removed from the ongoing marketing campaign workflow to avoid redundant communication.

**Action Setup:**

-   **Action:** Remove from Workflow
-   **Name:** Remove from Marketing Campaign Workflow
-   **Workflow Selection:** Another Workflow
-   **Specified Workflow:** New Workflow: 1701182462789 (e.g., ongoing marketing campaign)

**Workflow Actions:**

1.  **Trigger:** The contact completes a purchase or subscribes to a service.
2.  **Action:** Automatically remove the contact from the marketing campaign workflow to stop sending promotional emails.

**Outcome:** This automation helps maintain a clean and relevant communication strategy by ensuring that contacts who have completed certain actions are not bombarded with unnecessary marketing emails, improving customer satisfaction and engagement.

**Execution Logs for Workflow Removal:**

This feature ensures that when a user is not part of a workflow they are meant to be removed from, this action is reflected in the execution logs as skipped.

![](<https://assets2.modalsupport.net/1765451933004-unnamed - 2025-12-11T191848.321.png>)

### FAQs: Remove From Workflow Action




**Question:** What does the Remove From Workflow action do?
**Answer:** This action removes a contact from either the current workflow they are in or another specified workflow. It helps in managing a contact's engagement across different workflows.




**Question:** How do I choose between removing a contact from the current workflow or another workflow?
**Answer:** Select **Current Workflow** if you want the contact to be removed from the workflow they are currently engaged in. Choose **Another Workflow** if you want to remove them from a different workflow, and specify which one in the dropdown menu.




**Question:** Can I use this action to remove a contact from multiple workflows?
**Answer:** No, each Remove From Workflow action can only target one workflow at a time. To remove a contact from multiple workflows, add separate Remove From Workflow actions for each workflow.




**Question:** Do I need to use a trigger for this action to work?
**Answer:** No, a trigger is not required for the Remove From Workflow action to function. You can set it up to run automatically or manually as needed.




**Question:** What happens to a contact after they are removed from a workflow?
**Answer:** Once removed, the contact will no longer proceed through the actions or steps defined in that workflow. Any ongoing tasks or communications for that workflow will be stopped for the contact.




**Question:** How can I test if the Remove From Workflow action is working properly?
**Answer:** Use the **Test Workflow** button to simulate the workflow and ensure the action functions as intended. Check the contact’s enrollment history and execution logs for verification.




**Question:** Can I change the display name of the "Remove From Workflow" action in the workflow builder?

**Answer:** Yes, you can change the display name of the "Remove From Workflow" action within the workflow builder by using the textbox under Action Name in the action setup menu. This only affects the display name within the workflow builder and does not impact the functionality of the action.




**Question:** What happens if I try to remove a contact from a workflow they are not currently enrolled in?

**Answer:** The action will be reflected in the execution logs as "skipped." This ensures you have a record that the system attempted the removal but found the contact was not part of that specific workflow.




**Question:** Does "Remove from All Workflows" also remove them from the one they are currently in?

**Answer:** Yes. If you select **"All Workflows,"** the system will stop every single automation the contact is currently moving through, including the one that triggered the removal. If you want them to stay in the _current_ process but stop everything else, use the **"All Except Current Workflow"** option.