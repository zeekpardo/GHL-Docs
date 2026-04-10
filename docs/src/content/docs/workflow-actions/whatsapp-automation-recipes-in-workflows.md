---
title: "WhatsApp Automation Recipes in Workflows"
description: "WhatsApp Automation Recipes in Workflows"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/q8vT9tko9134RlZcydo8"
sourceId: "q8vT9tko9134RlZcydo8"
category: "Workflow Actions"
---

**WhatsApp Automation Recipes in Workflows**

This guide outlines how to integrate WhatsApp messaging into workflows, track delivery statuses, and manage conditions based on those statuses. You'll learn how to set up workflows to ensure that customers receive timely follow-ups through alternative channels like SMS or email if a WhatsApp message fails to deliver. By using these workflows, you can enhance communication efficiency and keep your customers engaged.

Prerequisites for Using WhatsApp in Workflows:

-   WhatsApp must be subscribed to and enabled in your location account.
-   WhatsApp message templates must be created before sending a message in a workflow and setting up conditions based on the delivery status.

The two workflow recipes covered in this article are:

1.  **WhatsApp Delivery Status Recipe** – This recipe helps set up workflows to track and act upon WhatsApp message delivery statuses, such as message sent, failed, or unsuccessful.
2.  **Missed Call WhatsApp Back Recipe** – This recipe ensures that missed calls are followed up with a WhatsApp message, enhancing customer engagement even if their call wasn’t answered.

Key Highlights:

-   Failover Mechanism: Automatically send SMS or email to customers when a WhatsApp message fails to deliver, ensuring no communication is missed.
-   Optimized Deliverability: Enhance the effectiveness and reliability of your communications by leveraging multiple channels.
-   Recipe for WhatsApp Delivery Status: Use the WhatsApp Delivery Status recipe to get started with workflows.

How to Set Up the Workflow:

1\. Setting Up a Recipe Workflow:

-   Navigate to Automation > Workflows
-   Click on + Create Workflow in the top right corner.
-   Select Recipe.

![](<https://assets2.modalsupport.net/1764266006976-Captura de pantalla 2025-11-27 125321.png>)

-   Choose the WhatsApp Delivery Status recipe.

![](<https://assets2.modalsupport.net/1764266131198-Captura de pantalla 2025-11-27 125525.png>)

-   Modify the trigger, WhatsApp action, and condition branches as needed.

![](https://assets2.modalsupport.net/1766074664958-image4.jpg)

2\. Setting Up a Workflow from Scratch:

-   Navigate to the Automation tab.
-   Click on + Create Workflow in the top right corner.
-   Select + Start From Scratch.
-   Choose WhatsApp Action and select the template you want to send.

![](https://assets2.modalsupport.net/1773333200133-image4.png)

-   Enable the toggle WAIT FOR Whatsapp MESSAGE DELIVERY STATUS and save the action.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdDzasuOhGlj1w2JuycL8_DU1Z4av317WEcKwO1uySzRvJXJbvITkb1S3cFkl1xiqiGdzmK6MmvSdyT270doWqGgusVPbgxFeSYpy3iqrGbNGNhZdwesAY4BVcJnWLTfDZYe6hMBkh662x--eDeywD2Eg4t?key=LTe2gPgRnwXddqgC_dObsw)

-   Add an If/Else action.
-   Select Contact Details > Valid WhatsApp and add conditions for True and False.

![](https://assets2.modalsupport.net/1766074759526-image7.jpg)

-   Add a failover to SMS/Email for False and None branches.

![](<https://assets2.modalsupport.net/1764266226515-Captura de pantalla 2025-11-27 125700.png>)

### **Recipe: Creating Missed Call WhatsApp Back Workflow**

This is particularly useful for maintaining customer engagement by ensuring that your customers feel acknowledged even if their call wasn’t answered.

### **Step-by-Step Guide**

#### **Create a New Workflow:**

1.  Select **Create New Workflow**.
2.  Choose the **Missed Call WhatsApp Back** recipe.

![](<https://assets2.modalsupport.net/1764266251018-Captura de pantalla 2025-11-27 125725.png>)

#### **Configure the Trigger:**

1.  Set the trigger as **Call Stages**.
2.  Filter by **Call Direction** as incoming and **Call Status** as busy, canceled, voicemail, or no answer.

![](https://assets2.modalsupport.net/1766074829831-image11.jpg)

#### **Add a Delay:**

1.  Add a slight delay to avoid the message appearing as an automated bot response.
2.  Click the plus sign, type **Wait**, and select **Time Delay**. Set the desired delay duration.

![](https://assets2.modalsupport.net/1766074869818-image2.jpg)

#### **Assign Tasks and Send Messages:**

1.  Assign the task to a user within the system.
2.  Set up the WhatsApp message action, selecting the appropriate template.
3.  Enable the **Wait for WhatsApp message delivery status** option.

![](<https://assets2.modalsupport.net/1764266775998-Captura de pantalla 2025-11-27 130608.png>)

#### **Handle Delivery Status Outcomes:**

1.  **Message Sent**: Ends the workflow.
2.  **Message Failed**: Sends an SMS and internal notification.
3.  **Message Unsuccessful**: Sends an SMS and internal notification.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXc-gQ16dYET6a4BFOebN4xmvjDtaVTzqOL_iBg55rvMw2_fPQ-pzoPOfIgZbTvNv7QCZ-XM8DdN-atO5UoFxVK7oQyJG6TQfT8OhJqr8LZZF_a4mme85gepnG-0K6xuOfq8HkZnax2Vef-pEp-ZMwB56iHr?key=LTe2gPgRnwXddqgC_dObsw)

### **Ensuring Prompt Responses**

Adding internal notifications ensures that your team is alerted to missed calls, allowing for quick follow-ups. This responsiveness can significantly improve your chances of closing deals.

## FAQs:




**Question:** Can I use this workflow for outgoing calls that were missed?  
**Answer:** No, this workflow is designed specifically for incoming calls that were missed, as specified in the trigger configuration.




**Question:** What should be the typical duration for the delay to avoid messages looking automated?
**Answer:** The delay duration can vary, but a common practice is to set it between 1 to 5 minutes to ensure it appears more natural and less like an automated response.




**Question:** How do I select the appropriate WhatsApp message template?
**Answer:** When setting up the WhatsApp message action, you can choose from the pre-configured templates available in your system. Make sure the template is approved by Meta for use on WhatsApp.




**Question:** What happens if the WhatsApp message template is not approved?
**Answer:** If the template is not approved, the message will not be sent. Ensure that all templates used are compliant with WhatsApp's policies.




**Question:** Can I customize the internal notifications sent to my team?
**Answer:** Yes, internal notifications can be customized to include relevant details about the missed call, making it easier for your team to follow up promptly.




**Question:** What is the difference between 'Message Failed' and 'Message Unsuccessful' statuses?
**Answer:

\- **Message Failed:** This status indicates that the WhatsApp message could not be sent due to an error, prompting an SMS and internal notification.

\- **Message Unsuccessful:** This status indicates that the message was sent but not delivered, also triggering an SMS and internal notification.




**Question:** Can I adjust the workflow to send a different message if the WhatsApp delivery fails?
**Answer:** Yes, you can configure the workflow to send an alternative message via SMS and notify your team if the WhatsApp message fails or is not delivered.




**Question:** How do I connect my WhatsApp account to enable this workflow?
**Answer:** Ensure your WhatsApp account is properly integrated with the system. You can do this by navigating to Settings (bottom left) → WhatsApp.




**Question:** Is there a limit to the number of scheduled messages I can have for the same contact?
**Answer:** While the system can handle multiple scheduled messages for the same contact, it's best to avoid overwhelming the recipient with too many messages in a short period.




**Question:** Can I view and manage all my scheduled messages in one place?
**Answer:** Yes, you can view and manage all scheduled messages in the conversation thread within the Conversations tab in .




**Question:** How can I use the WhatsApp delivery status in my workflows?
**Answer:** You can use if/else conditions based on Valid WhatsApp status to determine the next steps in your workflow. This enables more dynamic and responsive communication strategies.




**Question:** What is the purpose of the toggle for holding contacts in the workflow?
**Answer:** The toggle holds the contact in the workflow until the delivery status is received from Meta, ensuring the workflow waits for the delivery status before proceeding to the next step.




**Question:** Does the "Missed Call WhatsApp Back" work after business hours?
**Answer:** Yes, the workflow will trigger whenever a missed call is detected. However, you can add an **"If/Else - Business Hours"** condition before the WhatsApp action to send a different message (e.g., "We are currently closed, but we'll get back to you first thing tomorrow!") during off-hours.