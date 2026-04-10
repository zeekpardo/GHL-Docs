---
title: "Workflow Guide: Notification for Tasks"
description: "Workflow Guide: Notification for Tasks"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/Ox01l9Qpy9CHEWw6Le1g"
sourceId: "Ox01l9Qpy9CHEWw6Le1g"
category: "Workflow Guides"
---

**Workflow Guide: Notification for Tasks**

If you would like to notify your users by email when a task is assigned to them, you can set up a workflow to do so automatically. This article will show you how to set up that workflow.

## Navigation

### Step 1: Start a new workflow

-   Navigate to Automation > Workflows, click on **\+ Create Workflow,** and choose **Start from Scratch**

![](https://assets2.modalsupport.net/1763048587501-1.png)

### Step 2: Setting up the Workflow Trigger

-   Under Workflow Triggers, select “Task Added” in the “Contact” section of the Workflow Triggers Menu
-   If you want to filter this trigger so that it will only apply to certain pre-defined groups of contacts or specific individual contacts, you can configure these filters in the “Task Added” menu pictured here.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeNFMRfFJUM1RS5ejaXo2lGzezcT79ZEPj-aCi7xYEcTWcyfZEIl3MzJmz7ynpQ_Rv2K3lA8CTQ5QjiKrgts76L9aZUcayzw9f6OJU3hsBLjfzzPn3446fidR0nZLCTrN-0_Kau8XXefhrjqm001jAMSKrC?key=mlWTmd7mMQ4xE0W6tLUP5w)

-   Click “Save Trigger” in the bottom right of your screen

### Step 3: Setting up the Email Notification action

-   Under Actions, select “Send Internal Notification” in the “CRM” section of the Actions Menu
-   In the “Send Internal Notification” menu, select “Email” under “Type of Notification”
    -   Once selected, several email setup customization options will appear below

![](https://assets2.modalsupport.net/1765984355047-image.png)

-   Fill out the email customization options based on what you want your users to receive
-   You can use custom values for Tasks in the internal notification.
    -   Be sure to scroll down in the menu and fill out all relevant information
-   Once your email action is set up how you want it, select “Save Action” in the bottom right of the screen

![](https://assets2.modalsupport.net/1763048638423-2.png)

### Step 4: Select “Save” in the top right corner of your screen

Your workflow is now set up to send an email notification to your users when they are assigned a new task

## Pro Tip:

You can utilize custom fields to personalize the emails you send to your users. These custom fields can be found in the “Custom Values” dropdown menu above the email body text box in the Internal Notification setup menu. For a more detailed overview of how to set up Internal Notifications actions, see our article “How to Set Up Email/SMS Notification When An Action Occurs Using Workflows”

## FAQs




**Question:** What customization options are available when setting up the email notification?
**Answer:** When setting up the email notification, you can customize various aspects such as the email subject, body content, and recipient details. You can also utilize custom fields from the “Custom Values” dropdown to personalize the emails, ensuring they are relevant and engaging for the users.




**Question:** Where can I find custom fields to personalize my email notifications?
**Answer:** Custom fields can be found in the “Custom Values” dropdown menu above the email body text box within the Internal Notification setup menu. These fields allow you to insert personalized details into your emails, making them more specific to each user.




**Question:** How do I save my workflow after setting up the trigger and action?
**Answer:** After setting up the trigger and the email notification action, click “Save” in the top right corner of your screen. This will save the entire workflow, ensuring it functions as intended whenever a task is assigned.


**Question:  What is the purpose of the “Send Internal Notification” action in this workflow?
**Answer:** The “Send Internal Notification” action is used to automatically notify users via email when a task is assigned to them. This action ensures that users are informed promptly and can take necessary actions regarding their tasks.




**Question:** Can I use this workflow to send notifications through other channels besides email?
**Answer:** While this setup focuses on sending email notifications, you can also set up other types of notifications, such as SMS, by selecting the appropriate options under “Type of Notification” in the “Send Internal Notification” menu. Refer to additional guides for setting up other notification types.  




**Question:** Can I make this notification only fire for specific team members?

**Answer:** Yes. In the "Task Added" trigger menu, you can use **Filters** to specify that the workflow should only run for certain pre-defined groups of contacts or individual contacts.




**Question:** Does this workflow trigger if I create a task via a Bulk Action?

**Answer:** **Yes.** As long as the workflow is **published**, any task added to a contact record whether manually, via bulk action, or through another automation will trigger this notification.




**Question:** How can I make sure the email tells the user_what_the task actually is?

**Answer:** In the **Send Internal Notification** body, you should use **Custom Values**. Click the "tag" icon and navigate to **Task > Title** and **Task > Description**. This ensures the user can see exactly what needs to be done directly from their inbox without having to log into the platform first.