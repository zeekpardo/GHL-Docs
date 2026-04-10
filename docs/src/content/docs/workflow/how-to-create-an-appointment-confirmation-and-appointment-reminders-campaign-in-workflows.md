---
title: "How To Create An Appointment Confirmation And Appointment Reminders Campaign in Workflows"
description: "Appointment confirmation and reminder campaigns can be created within your Workflows to confirm appointments and nurture the leads with reminders up until the…"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/KQ0OhuelDfjp6Af6m55p"
sourceId: "KQ0OhuelDfjp6Af6m55p"
category: "Workflow"
---

Appointment confirmation and reminder campaigns can be created within your Workflows to confirm appointments and nurture the leads with reminders up until the appointment time. Follow these steps to get started:

### Step 1: Create the Appointment Confirmation Workflow 

-   Navigate to Automation > Workflows
-   Click on “Create Workflow”
-   Select “Start from scratch”

![](<https://assets2.modalsupport.net/1763039216430-unnamed - 2025-11-13T210619.329.png>)

-   The window will open up the Workflow Builder.

### Step 2: Customize the Workflow 

-   Within the builder, select a Workflow trigger as “Appointment Status” and add additional filters as shown below:
    -   Filter for the calendar that you would like this workflow to trigger for
    -   Filter for the appointment status, we recommend using confirmed

![](<https://assets2.modalsupport.net/1763039235689-unnamed - 2025-11-13T210710.055.png>)

-   Add in a “Send Email” or “Send SMS” action to add a confirmation which will be sent to the lead/client, once the appointment has been confirmed.
-   Then, create the subsequent event(s)/ Actions, which will be your reminder(s). You can create as many as you’d like.

![](<https://assets2.modalsupport.net/1763039453996-unnamed - 2025-11-13T211047.146.png>)

-   Using Wait steps before every action, you can set specific timeframes for the reminder(s) to go out.
-   Once you’re done making all your customizations and adding your actions, make sure to save the Workflow, and also ensure the Workflow is published. 

![](<https://assets2.modalsupport.net/1763039476487-unnamed - 2025-11-13T211109.163.png>)

### Pro Tips:

-   To ensure that a lead continues to get reminders, even if they reply to the workflow email/sms, ensure that you toggle _off_ the “Stop on response” in Workflow Settings.
-   This is necessary for a reminder campaign because even if a lead responds to confirm the appointment, it doesn’t necessarily mean that you will want to stop sending them the subsequent reminders. If a lead responds “Looking forward to it!” or “See you then!”, you wouldn’t want them to miss out on the subsequent reminders.

![](<https://assets2.modalsupport.net/1763039497748-unnamed - 2025-11-13T211128.682.png>)

### **FAQ’s** 




**Question:** How do I create an appointment confirmation and reminder campaign within my workflows?
**Answer:** To create an appointment confirmation and reminder campaign, follow these steps:

1.  **Create the Appointment Confirmation Workflow:**
    -   Go to **Automations** > **Workflows**.
    -   Click on **“Create a Workflow”**.
    -   Select **“Start from scratch”** and click on **“Create Workflow”**. This will open the Workflow Builder.
2.  **Customize the Workflow:**
    -   In the Workflow Builder, choose **“Appointment Status”** as the Workflow trigger.
    -   Add filters for:
        -   The calendar you want this workflow to trigger for.
        -   The appointment status (we recommend using “Confirmed”).
    -   Add a **“Send Email”** or **“Send SMS”** action to confirm the appointment, which will be sent to the lead/client once the appointment is confirmed.
    -   Create additional events/actions for reminders. You can set up as many reminders as needed.
    -   Use **Wait** steps before each action to set specific timeframes for when the reminders should be sent.
3.  **Save and Publish:**
    -   Once you have customized the workflow and added all necessary actions, ensure to **save** the workflow and **publish** it.




**Question:** What if I want to stop sending reminders after a lead confirms the appointment?  
**Answer:** If you want to stop sending reminders once the lead has confirmed the appointment, ensure that the **“Stop on response”** option is toggled on in the Workflow Settings. This setting will stop further reminders if the lead responds to the confirmation message.




**Question:** How can I adjust the timing for my reminders in the workflow?
**Answer:** You can adjust the timing for reminders by setting **Wait** steps before each action in your workflow.




**Question:** What happens if someone books an appointment only 2 hours before the start time?
**Answer:** The system is smart enough to skip any "Wait" steps that have already passed. For example, if you have a "24-hour reminder" but the lead books 2 hours before the meeting, the system will skip the 24-hour reminder and move them straight to the next applicable step, such as a "1-hour reminder."




**Question:** How do I ensure my workflow is active and ready to process new bookings?

**Answer:** After you have finished customizing your triggers and actions, you must both **Save** the workflow and set it to **Published**. If it remains in "Draft" mode, appointments will not trigger the automation.




**Question:** How can I make sure that a lead continues to receive scheduled reminders even if they text or email me back?
**Answer:** To prevent the workflow from stopping when a lead interacts with your messages, you must go into the **Workflow Settings** and toggle off the **“Stop on response”** feature. This ensures that even if a lead replies with a message like "See you then!", they will still receive the subsequent reminders you have scheduled leading up to the appointment time.