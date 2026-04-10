---
title: "Workflow Trigger: Task Reminder"
description: "Workflow Trigger: Task Reminder"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/33kgdqpPfQ7nHHJHKZMP"
sourceId: "33kgdqpPfQ7nHHJHKZMP"
category: "Workflow Triggers"
---

**Workflow Trigger: Task Reminder**

In this article, you will learn how to set up the workflow trigger task reminder and the purpose of each filter.

## **How to use this trigger?**

The task reminder trigger is used to send a reminder to your users whenever a task is due. You can use it for other purposes as well. It will trigger based on the due date set for the task.

If you want to send a reminder 1 day before the task is due, you can add this trigger with the filter ‘before no. of days’ and set it to ‘1’. And then add an internal notification action to send an email to the assigned user.

## **Steps to add the trigger to your workflow**

### **Step 1:** Start a new workflow or edit an existing one

-   Navigate to Automation > Workflows and start a new workflow or edit an existing one

![](<https://assets2.modalsupport.net/1762381307485-Captura de pantalla 2025-11-05 172137.png>)

### **Step 2:** Creating and Editing the Trigger

-   Click “**Add New Trigger**”
-   Select the “**Task Reminder**” button in the **Contact** section of the Workflow Triggers Menu or use the search feature. Once selected, the Trigger setup menu will appear.

![](<https://assets2.modalsupport.net/1762381615219-Captura de pantalla 2025-11-05 172646.png>)

**Please Note:** You can change the workflow builder display name using the textbox below the **Workflow Trigger Name**. This will only affect the display name within the workflow builder and has no other impact on the content or functionality of this Workflow Trigger.

![](<https://assets2.modalsupport.net/1762381640196-Captura de pantalla 2025-11-05 172711.png>)

-   Press **\+ Add filters** to expand the **Filters** section of the Trigger setup menu

![](<https://assets2.modalsupport.net/1762381662055-Captura de pantalla 2025-11-05 172733.png>)

-   You can filter by **Standard Fields**; meaning any task you have previously assigned this user will populate here

![](<https://assets2.modalsupport.net/1762381729493-Captura de pantalla 2025-11-05 172842.png>)

-   **Standard Fields**:  
    **After No. of days:** this means after a specific amount of day(s) from the due date you will receive a reminder (**Example See Below:** 7 days after the task a reminder will be sent)

![](<https://assets2.modalsupport.net/1762381749292-Captura de pantalla 2025-11-05 172901.png>)

-   **Before No. of days:** this means before a specific amount of days(s) from the due date you will receive a reminder (**Example See Below:** 7 days before the task a reminder will be sent)

![](<https://assets2.modalsupport.net/1762381865960-Captura de pantalla 2025-11-05 173055.png>)

-   Press **Save Trigger** in the bottom right corner of the Trigger setup menu

![](<https://assets2.modalsupport.net/1762381883274-Captura de pantalla 2025-11-05 173116.png>)

### **Step 3:** Set up applicable Workflow Action(s). We have multiple articles available to explain the setup of each Workflow action. Feel free to review our articles for more information on setting these up.

-   If your Workflow is ready to be enabled, make sure the toggle switch under **Save** is set to **Publish**

![](<https://assets2.modalsupport.net/1762381907454-Captura de pantalla 2025-11-05 173138.png>)

-   Be sure to test your Workflow to ensure it is correct by using the **Test Workflow** button next to the **Publish** toggle switch. 

Your workflow is now ready to go with the Task Added Workflow Trigger.

**Pro Tips**

Test Before Enabling – Use the Test Workflow feature to ensure reminders are sent as expected before making the workflow live.

Combine Multiple Filters – Use "Before No. of Days" and "After No. of Days" together to create a multi-stage reminder system (e.g., 3 days before and 1 day after a task is due).

Standardize Reminder Timings – Keep a consistent schedule for reminders (e.g., always at 9 AM) to improve visibility and response rates.

Avoid Reminder Spam – Ensure workflows don’t send excessive notifications by limiting triggers per task to avoid overwhelming users.

Use Task Categories – If different teams have different workflows, segment your tasks using categories and create separate reminder workflows per team.

### FAQs




**Question:** What is the Task Reminder Workflow Trigger?
**Answer:** The Task Reminder Workflow Trigger is used to send reminders to users when a task is approaching its due date or has passed its due date. This helps ensure tasks are completed on time by notifying users ahead of the deadline.




**Question:** How do I set up the Task Reminder Trigger in a workflow?
**Answer:

1.  **Start Workflow**:
    -   Create a new workflow or edit an existing one.
2.  **Add Trigger**:
    -   Click “Add New Trigger.”
    -   Select “Task Reminder” from the Contact section or use the search feature.
3.  **Configure Trigger**:
    -   Optionally, rename the trigger using the Workflow Trigger Name textbox.
    -   Click “+ Add filters” to set up your reminders:
        -   **After No. of days**: Set a reminder for a specific number of days after the task’s due date.
        -   **Before No. of days**: Set a reminder for a specific number of days before the task’s due date.
4.  **Save Trigger**:
    -   Click “Save Trigger” in the bottom right corner.




**Question:** What does the "Before No. of days" filter do?
**Answer:** The "Before No. of days" filter sends a reminder a specified number of days before the task’s due date. For example, setting this filter to 1 day will send a reminder 1 day before the task is due.




**Question:** What does the "After No. of days" filter do?
**Answer:** The "After No. of days" filter sends a reminder a specified number of days after the task’s due date. For example, setting this filter to 7 days will send a reminder 7 days after the task was due.




**Question:** Can I use the Task Reminder Trigger to send reminders for past-due tasks?
**Answer:** Yes, by setting the "After No. of days" filter, you can configure reminders for tasks that have already passed their due date.


**Question:  How can I avoid sending too many notifications?
**Answer:** Limit the number of reminders per task and avoid overlapping workflows to prevent excessive notifications.




**Question:** Should I test my Task Reminder Workflow before enabling it?
**Answer:** Absolutely. Use the Test Workflow feature to ensure reminders are sent as expected before publishing the workflow live.




**Question:** Can I create a multi-stage reminder system for a single task?

**Answer:** Yes. By combining the **"Before No. of Days"** and **"After No. of Days"** filters (or using multiple triggers), you can create a system that reminds a user both before a deadline (e.g., 3 days prior) and after a deadline (e.g., 1 day late).




**Question:** If I set a reminder for "0 days before," when does the notification go out?
**Answer:** A "0 days before" filter triggers the reminder on the **actual due date** of the task. This is the best setting for "Last Minute" or "Day-Of" alerts to ensure the task stays top-of-mind as the deadline hits.