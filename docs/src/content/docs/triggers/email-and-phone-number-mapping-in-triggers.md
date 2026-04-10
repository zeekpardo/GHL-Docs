---
title: "Email and Phone Number Mapping In Triggers"
description: "Important Note: “Triggers” in Automation is a deprecated feature and has been moved inside Workflows. If you want to learn more about how to properly set up…"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/nIbWYucwboYT59suck13"
sourceId: "nIbWYucwboYT59suck13"
category: "Triggers"
---

**Important Note:** “**Triggers**” in Automation is a deprecated feature and has been moved inside Workflows. If you want to learn more about how to properly set up the “Update Contact Field” in Workflows, please check out our article “Workflow Action: Update Contact Field”


This tutorial walks you through how to map email addresses and phone numbers from customer replies using triggers. When customers respond to your SMS or email campaigns with lengthy messages, this feature ensures that only the email address or phone number is captured and mapped to the appropriate contact field. By filtering out unnecessary text and focusing solely on the contact details, this trigger functionality helps you maintain accurate and organized information for better communication with your contacts.

Step 1: Create Your Trigger

-   Navigate to triggers, and you’ll set something up like this.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfgNkXcsEm2BtjYUxd71R8xQmt6X7mdHmjUN6SxJGqgxg4iXvYOSdV0r2nLcM-80ekF3tPM92z2YQtsnaRyUugAWUJegnzwZ807rIlNK0Ap6TfDzZmJrMdLWGKDcoschgnZwksRYViW_cBjCpAZA4prIQ?key=YoG_IKhGDHgU36lxRUz4QQ)

-   Define the filters however you'd like.
    -   **NOTE:** You may want to define the filter specifically for a particular campaign so this doesn’t always fire off. Customize this to your needs.
-   For Part 1, set up the event to trigger automation as **Customer Replied.** This will trigger the rule.
-   For Part 2, the action on the right-hand side set it up to map the email and/or phone number from the message body into the appropriate field in their contact record with the two defined filters "Email" and "Phone" with {{ message.body }} typed in (no spaces.)

**Step 2: How to Apply This Trigger**

You can customize this trigger using various filters to suit your business needs. Set filters based on campaign type, reply channel, or specific contact tags.

**For example**, if you want to gather email addresses from leads you only have phone numbers for, you might set up an SMS campaign with a message like:

-   “Hey, it's me! I want to send you a free download. What’s your email address?”

When a contact replies with a message like:

-   “Thanks! It’s sally.test@gmail.com” or “It’s sally.test@gmail.com. I look forward to the download!”

The trigger will capture only the email address (sally.test@gmail.com) and add it to the contact’s record.  
This feature is highly flexible and can be tailored to different use cases, ensuring that you gather and map essential contact details effectively.

### **FAQ:** 

1.  **What happens if a customer responds with a long message containing their contact details?**
    -   The trigger is designed to identify and extract only the relevant email address or phone number from a customer's reply. Any additional text is filtered out to avoid cluttering the contact’s record with unnecessary information.
2.  **Can I use this feature for both email and SMS campaigns?**
    -   Yes, this trigger works for both email and SMS campaigns. You can customize it based on the type of communication you’re sending and the details you want to capture.
3.  **How do I ensure the trigger only applies to specific campaigns?**
    -   You can define filters based on campaign type, reply channel, or even specific tags associated with the contact’s record. This allows you to target the trigger precisely, so it only runs for the intended campaigns.
4.  **What if I need to capture both an email address and a phone number in the same message?**
    -   The trigger allows you to map both email and phone fields simultaneously. The automation will extract the relevant data and place it in the correct fields within the contact’s record.
5.  **Is this feature available in the latest workflow updates?**
    -   Yes, this feature has been integrated into Workflows. To learn more about how to set up this action within Workflows, check out our article on “Workflow Action: Update Contact Field.”