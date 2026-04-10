---
title: "Workflow trigger: Task Added"
description: "Workflow Trigger: Task Added"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/p6LyCg5tfvIr0fSbGtUm"
sourceId: "p6LyCg5tfvIr0fSbGtUm"
category: "Workflow Triggers"
---

Workflow Trigger: Task Added

In this article, you will learn how to set up the Workflow trigger: Task Added, and how it functions.

## **How does this trigger work?**

When a new task is added to a user from your team, this trigger will run, and the contact will be added to this workflow.  

For example, if you have a team member John, who is assigned to a lead Kate. Now you want to add Kate to a workflow whenever John gets a task assigned that is related to Kate, you will add the Task Added trigger and specify the assigned user John using the additional filters.

## **How to add this trigger to a workflow?**

### **Step 1:** Start a new workflow or edit an existing one

-   Navigate to Automation on the left > Workflows on the top and create a new workflow or edit an existing one.

![](https://assets2.modalsupport.net/1762535157448-image.png)

### **Step 2:** Creating and Editing the Trigger

-   Click “**Add New Trigger**”

![](https://assets2.modalsupport.net/1775252809101-image2.png)

-   Select the “**Task Added**” button in the **Contact** section of the Workflow Triggers Menu or use the search feature. Once selected, the Trigger setup menu will appear.

**Please Note:** _You can change the workflow builder display name by using the textbox below the_ **Workflow Trigger Name**_. This will only affect the display name within the workflow builder and has no other impact on the content or functionality of this Workflow Trigger._

_![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfvsFH7sKbfgucKIyVG8V41EICXmwIJIWLcv5z5hTMbB__Su8uyKj3xlNqc7Ghf6wdm1R2QwmMaLN-594-_vth9ZMouhg-y1VzYfSx-F62_dti41u2j7pPogix7Lw6CUpiFCUUQU-vto7WM9SxIdc3KOiU?key=ORPlBCsKw3DLRSzRfOJL4w)_

-   Press **\+ “Add filters”** to expand the **Filters** section of the Trigger setup menu.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdgp0bVURBrwtcZz5kIapNq4GKRq6U9UGG1F81lUTNRyicZz_rw8foG0hMr2gtnNCpD_fid6UeoawYntJFDlSt4tdQTcRFdSR5uQyO0EUHQiPkieMKt8AYbgivHyD2mOVNUUJ1RSrGHEoV1J_tRcu3bxzIn?key=ORPlBCsKw3DLRSzRfOJL4w)

-   “**Assigned User**” will filter for only specific users assigned to the contact
-   **Custom Fields:** These are the custom fields that you have created specifically for the contact; in the user's **Settings > Custom Fields** option

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcVq_tCY2yD3-iQZQ29Mk0nXxjewekGdf316hrAxui08EHvomOXtlOyKX5jue0UbNHRwqAMnIBp6R_YuYpXtj25xP6hAVfRAvO4Z6NZdNO0eKJkr6wRNnkHvnW_ps2BO__0knlVl1bHe0BkJlYv1OvG6u8Q?key=ORPlBCsKw3DLRSzRfOJL4w)

-   Press **Save Trigger** in the bottom right corner of the Trigger setup menu.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXe_mr5545o3wPp_TemJrggR78G-RAJ2RlFxDQIeGp2k_aAXpge5WLcMpTVasJpPg8_q-1EVfblW863hUBkKcjNxvyKhfiKFoV3tW_NMaLvpIQ50HXltUoZbO9byT2E2fGONjID2j-P327YXi73nM8epL-om?key=ORPlBCsKw3DLRSzRfOJL4w)

### **Step 3:** Set up applicable Workflow Action(s). We have multiple articles available to explain the setup of each Workflow action. Feel free to review our articles for more information on setting these up.

-   If your Workflow is ready to be enabled, make sure the toggle switch is under **Save**. Now it is set to **Publish**

![](https://assets2.modalsupport.net/1767970353155-image2.png)

-   Be sure to test your Workflow to ensure it’s set up correctly using the **Test Workflow** button next to the **Publish** toggle switch. 
    -   For an in-depth overview of Workflow Testing, see our article, “Using the Testing Features in Workflow.s”

Your workflow is now ready to go with the Task Added Workflow Trigger.

**Use cases:**

### **1\. Task Assignment Notification to Team Members**

-   **Scenario:** You want to notify team members when a new task is assigned to them.
-   **How it works:** When a task is added and assigned to a specific team member, this trigger sends an email or in-app notification to the team member about the new task.
-   **Use Case Example:** A task is assigned to John in the system, and an email notification is sent to John to alert him about the new task.

### **2\. Adding Contacts to Workflow Based on Task Assignment**

-   **Scenario:** Automatically adding a contact to a workflow when a team member is assigned a task related to that contact.
-   **How it works:** When a task related to a contact (e.g., a lead) is assigned to a team member, the workflow adds the contact to an automated workflow.
-   **Use Case Example:** If John is assigned a task related to lead Kate, Kate is automatically added to the workflow for further engagement.

### **3\. Filtering Tasks by Specific Users**

-   **Scenario:** You need to assign a workflow to only certain users based on who the task is assigned to.
-   **How it works:** By using filters such as "Assigned User," the trigger ensures that only tasks assigned to a specific user (e.g., John) activate the workflow.
-   **Use Case Example:** You only want tasks assigned to John to trigger workflows related to specific clients, ensuring the correct team member is notified or added to the appropriate workflow.

### FAQs




**Question:** What is the Task Added Workflow Trigger?
**Answer:** The Task Added Workflow Trigger activates a workflow when a new task is assigned to a user on your team, adding the associated contact to the workflow.




**Question:** How do I add the Task Added trigger to a workflow?
**Answer: 

-   Start a new workflow or edit an existing one.
-   Click “Add New Trigger.”
-   Select “Task Added” from the Contact section or search for it.
-   Configure the trigger as needed.




**Question:** What filters can I apply to the Task Added trigger?
**Answer: 

-   **Assigned User:** Filter tasks based on the user assigned.
-   **Custom Fields:** Use custom fields to apply additional criteria to the contact.




**Question:** Can I rename the Task Added trigger?
**Answer:** Yes, you can rename the trigger using the text box under Workflow Trigger Name. This name will only affect how it is displayed in the workflow builder.




**Question:** How do I save and publish the workflow?
**Answer: 

-   Click “Save” to store your changes.
-   Set the toggle switch under “Save” to “Publish” to activate the workflow.




**Question:** How can I test the workflow before publishing?
**Answer: 

-   Use the “Test Workflow” button next to the Publish toggle switch to ensure the workflow operates as expected.
-   Refer to our article, “Using the Testing Features in Workflows,” for detailed instructions on testing.




**Question:** Can this trigger handle multiple tasks assigned to the same user?

**Answer:** Yes, each task assigned to a user can trigger the workflow independently, allowing automation for multiple contacts or tasks.  




**Question:** Does changing the "Workflow Trigger Name" change how the trigger works?

**Answer:** No. Changing the display name in the text box only affects how the trigger is labeled within the workflow builder; it has no impact on the content or functionality of the trigger itself.




**Question:** Will this trigger if I import tasks in bulk via a CSV?
**Answer:** Yes, provided that you have "Allow Triggers" enabled during the import process. If this is turned off, the tasks will be created silently without entering the workflow.