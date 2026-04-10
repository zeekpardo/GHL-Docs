---
title: "Workflow Action: Create Appointment Note"
description: "In the ever-evolving landscape of business management, maintaining meticulous records of appointments is crucial. This article introduces a robust tool…"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/P23i8qkXUiTrnr8KLGZ9"
sourceId: "P23i8qkXUiTrnr8KLGZ9"
category: "Workflow Actions"
---

In the ever-evolving landscape of business management, maintaining meticulous records of appointments is crucial. This article introduces a robust tool designed to enhance the efficiency and accuracy of appointment documentation the Create Appointment Note workflow action. This feature is an invaluable asset for any user looking to streamline their appointment management process through automation.

**Key Points to Keep in Mind**When using Inbound Webhooks, make sure the webhook payload contains both the appointmentId and body for smooth operation.

Note that the body field has a character limit of 5000.

**Key Features and Benefits**

-   **Automated Note Creation:** Automatically adds notes to appointments, eliminating the need for manual entry and reducing the likelihood of errors.
-   **Support for Multiple Triggers:** Integrates seamlessly with appointment-based triggers such as Appointment Status updates or Customer Appointments, as well as Inbound Webhook Triggers.
-   **Flexible Note Input:** Offers the flexibility to input custom notes manually or incorporate dynamic content directly from webhook data, allowing for personalized and context-specific notes.
-   **Enhanced Record-Keeping:** Improves organizational efficiency by ensuring that all appointment notes are consistently and accurately logged, aiding in better customer management and follow-up.

**How to Use the Create Appointment Note Workflow Action**

**1\. Create a Workflow:**

-   Navigate to the Automation section and select 'Create New Workflow'.

![](https://assets2.modalsupport.net/1763651737453-1.png)

**2\. Add a Trigger:**

-   Choose either an appointment-based trigger or an Inbound Webhook Trigger depending on your needs.

![](https://assets2.modalsupport.net/1766070443414-image3.png)

**3\. Add the Action:**

-   Select 'Create Appointment Note' from the list of available actions and provide a name for the action.

![](https://assets2.modalsupport.net/1766070509886-image2.png)

**4\. Configure Inputs:**

-   For workflows using an Inbound Webhook, input the appointment and the note content (body). 
-   Additionally, if using an Inbound Webhook trigger:

1\. Appointment ID: Add the appointment ID using this custom value: {{inboundWebhookRequest.appointmentId}}

2\. Note Body: Use the following custom value to add the note content: {{inboundWebhookRequest.body}}

-   For appointment-based triggers, simply input the note content; the system automatically links it to the relevant appointment without needing an appointment ID.

**Pro Tips**

-   **Utilize Dynamic Content:** To make your notes as informative as possible, use dynamic placeholders within your notes that pull in data from the appointment or customer profile. This could include details like the appointment date, service type, or any special instructions.
-   **Regularly Update Workflow Triggers:** As your business processes evolve, revisit and adjust your triggers to ensure they continue to meet your operational needs, maximizing the utility of the Create Appointment Note action.

**FAQ**




**Question:** How do I access the Create Appointment Note action?
**Answer:** You can access this action by going to the Automation section of your management platform and creating or modifying a workflow.




**Question:** Can I use custom data within my appointment notes?
**Answer:** Yes, you can include custom data or dynamic content from the appointment or related customer interactions within your notes.




**Question:** What happens if an appointment is rescheduled?
**Answer:** If the appointment-based trigger includes status changes, notes will be updated or added as per the workflow configuration to reflect changes like rescheduling.




**Question:** Is there a limit to the number of notes I can add to a single appointment?
**Answer:** Generally, there is no set limit to the number of notes; however, it's advisable to check with your platform's specific capabilities or limits.




**Question:** Can I edit or delete a note once it's created through a workflow?
**Answer:** While automated notes are added to appointments based on workflow actions, they can typically be edited or deleted manually if your platform allows such modifications.  




**Question:** Is there a character limit for the notes created through this workflow?
**Answer:** Yes. The "body" field of the appointment note has a maximum limit of **5000 characters**. If you are pulling data from a webhook, ensure the incoming content does not exceed this limit to avoid truncation.




**Question:** What specific information must my Inbound Webhook contain for the automated notes to work correctly?
**Answer:** To ensure a smooth operation when using Inbound Webhooks, your webhook payload must contain both the **appointment Id** and the **body**. Without these two pieces of data, the system won't be able to identify which appointment to update or what content to include in the note.