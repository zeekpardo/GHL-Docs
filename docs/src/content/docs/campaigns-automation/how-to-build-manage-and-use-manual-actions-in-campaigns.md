---
title: "How To Build, Manage and Use Manual Actions in Campaigns"
description: "Note: The triggers feature has now been deprecated. Please, check our article, “Workflow Action: Add Task” to learn how to do this on Workflows."
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/Byo211xIWjQUerX3O5Ts"
sourceId: "Byo211xIWjQUerX3O5Ts"
category: "Campaigns (Automation)"
---

**Note: The triggers feature has now been deprecated. Please, check our article, “Workflow Action: Add Task” to learn how to do this on Workflows.**

Manual Actions are tasks added to in the form of a queue. They become available in a user’s account and are marked as complete once the user manually completes a task. To create and manage manual actions, follow the steps below.

## **Navigations**

### Step 1: Create a Campaign

-   Navigate to Campaigns
-   Click **\+ Create Campaign**

**![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXc-OpJdcOvOvOGd8dEH1bvwkWfTPDK4_a2FYdWGJ5l-ADmqirL5C_hK6sSnQNEHRH30ZE83FhR6znJF-WDqYsX3iAis_FT8sHSGi8tCp1ND6b5vGTMhH-8dQUXCMk8y_kHnOi_a4yK6ZGvEyC9vmPMtJxk?key=uHFp99a9SCosWrYi8vQQBg)**

-   Type in a Campaign Name.
-   Choose a folder where the campaign will be added from the dropdown.
    -   **_NOTE_:** You may also edit an existing campaign instead of creating a new one.

### Step 2: Set up the Campaign Configuration

-   Select Campaign Configuration to add information such as:
    -   Window - Configure when the Campaign will run
    -   Users - Assign users to the campaign
    -   Next campaign - The campaign that is next in the pipeline
    -   From address - Shows from address 
    -   Lead Value - $ value of lead
    -   Tags - Tags assigned to the campaign
    -   Multiple Allow - Allows campaign visitors to visit the same or next campaign in the pipeline multiple times
    -   Stop on Response - Stops all subsequent events in the case a lead responds to the campaign
    -   Event Start Date - Choose when the campaign will begin
-   **Save** to confirm your changes**.**

### Step 3: Add an Event

-   Click on **\+ Add Event**

**![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcnIqguqVcETZR3bZ_6FJqMLH4QXeMnKe4pKa8d1-XAcnUm-YO-Huxfpqi-LZLfM7Fjo9lns-A7fP03mn3JHrJrWkGAPySAhrKyh8Ndw1K0dt7BEAPCSCV2ihXZr97i3N9H4z6iblw8bpl7oZ_-SyYo6jTJ?key=uHFp99a9SCosWrYi8vQQBg)**

**![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfBzD4TyPnx1iHUEe90xcppBM1yqzYj6cwpBifB4IWXwNq6FUJlkd7fhvSHHkxTchcyfY-90WDGLHM_VJQVWUt8Y8zcemJBu_YWO6jaII_WFsNhGVEQ0nOz9C7T7jEzRuhDLwdR6-7bE1LtLBxhn4SnOfIo?key=uHFp99a9SCosWrYi8vQQBg)**

-   Click on **Manual SMS** or **Manual Call** for an event.
-   For a **Manual SMS:**
    -   Type SMS name
    -   Select template if needed
    -   Custom Values - Select values from the drop-down to be added to your SMS message
    -   Trigger Links - Provide links to triggers created in your account
    -   In the text box, you may type out the SMS you want to be sent out
    -   Custom Time - Toggle **Custom time** to on if you'd like the SMS to be sent out at a specific day and time
    -   Attach file - Files such as logos can be added here
    -   Add File Through URL - Add link here
-   You can test your message by entering a number and clicking on **Send Test.**
-   Click **Save** once you have the desired manual SMS



-   For a **Manual Call:**
-   This Adds manual call as a task for selected users after the user is added to the campaign
-   The task is marked as complete after the task is executed.
-   Save any changes you make to the campaign, and switch it from **Draft** to **Published** mode, in order for it to run.

### Step 4: Accessing and Completing the Tasks/Manual Actions.

-   Once Contacts are added to the campaign(s) with manual SMS or call events, the tasks will be generated and formed into a queue you can access in .
-   Navigate to **Contacts** >**Manual Actions**.
-   Here you will see a list of your pending tasks/actions. 
    -   They can be sorted by **Campaign** or **Assignee** (if you have multiple users). Once executed, the tasks can be marked complete.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcBW-wY2dzvoxCXsLOgAKZPnuLqXDGWU-uU1Fy_lKcAwxEUlpG2_zHw8-_pSbXe3JQU1TkN7SxnQcGOZVyjiPC7mxzRqyD-Vwq85DTrgXTcQWuPBKzIAbY1_QQxNX_VrHUofTO8yTG9BBZtFKAYQdobWza1?key=uHFp99a9SCosWrYi8vQQBg)



## **FAQ**

**1\. How do I access and complete manual action tasks in ?**Once contacts are added to a campaign with manual SMS or call events, the tasks will appear in the manual actions queue. To access:

1.  Go to _Contacts > Manual Actions_.
2.  Here, you’ll see a list of pending tasks/actions.
3.  Tasks can be sorted by campaign or assignee and marked complete once executed.

**2\. What happens when I enable "Stop on Response" in a campaign?**Enabling "Stop on Response" will halt all subsequent events in the campaign if a lead responds, ensuring that further actions are not triggered unnecessarily after a response is received.

**3\. Can I test my manual SMS before sending it out?**Yes, you can test your SMS by entering a phone number in the _Send Test_ field before saving the manual SMS event.

**4\. What is the benefit of using custom values in manual SMS messages?**Custom values allow you to dynamically personalize SMS messages by automatically pulling in relevant data such as contact names, phone numbers, or other details. This makes your communication more effective without manual entry.

**5\. How do I publish my campaign once it’s ready?**After configuring and setting up the events, switch the campaign from _Draft_ to _Published_ mode. Only published campaigns will run and trigger the manual actions.

**6\. Can I assign manual actions to specific users?**Yes, when setting up the campaign, you can assign specific users to manage the manual actions. The tasks can later be sorted by the assignee in the manual actions queue for easier management.