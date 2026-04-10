---
title: "Whatsapp Workflow Integration"
description: "In this article, you'll learn how to effectively use WhatsApp triggers and actions within your system."
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/qUIGasvfQeVNn6BjS0WU"
sourceId: "qUIGasvfQeVNn6BjS0WU"
category: "Workflow Triggers"
---

In this article, you'll learn how to effectively use WhatsApp triggers and actions within your system.

### Prerequisite for using WhatsApp under Workflows

To initiate business conversations, ensure that you have an approved template ready for use. See the article “**How to Create a WhatsApp Template”**

Go to Automations > Workflows > Create Workflow > Start from Scratch

![](<https://assets2.modalsupport.net/1761909284749-unnamed \(39\).png>)

#### WhatsApp Inbound Message Trigger

Use the' Customer Replied' trigger to set up a trigger for inbound WhatsApp messages. This trigger allows you to configure a filter where the **‘Reply Channel’** is set to WhatsApp. This setup lets you automatically initiate actions when a customer replies through WhatsApp.

![](<https://assets2.modalsupport.net/1761909306227-unnamed \(40\).png>)

Users will also have the ability to configure an Outbound message using the action 'Send WhatsApp Message.' 

**Please note: Using the WhatsApp Number filter, you can configure a specific WhatsApp number for these triggers. This allows you to choose a specific number from a dropdown list of all WhatsApp numbers associated with the system. If no number is selected, the workflow will default to all WhatsApp numbers.**

This feature offers three options:

-   **Free Text:** Select 'None—Manual Text' from the dropdown menu to enter custom text that will be used to respond to the customer.
-   Select From Number: Choose which phone number to send messages from when you have multiple numbers connected. This is essential for managing communications across different channels or departments. 

![](<https://assets2.modalsupport.net/1761909352928-unnamed \(41\).png>)

-   **Approved Template:** Choose from a list of pre-approved templates, which can then be sent to the customer.

**Select Save Action > Publish > Save to make the work flow live**

![](<https://assets2.modalsupport.net/1761909381023-unnamed \(42\).png>)

**Note:** You can enable the 'WAIT FOR WHATSAPP MESSAGE DELIVERY STATUS' option to hold the contact at this step until the delivery status is returned from Meta. Follow these steps to take action based on the delivery status:

![](<https://assets2.modalsupport.net/1761909406308-unnamed \(43\).png>)

Enable the 'WAIT FOR WHATSAPP MESSAGE DELIVERY STATUS' option in the action.

WAIT FOR > Contact Reply > REPLY TO > WhatsApp and Save Action

![](<https://assets2.modalsupport.net/1761909428607-unnamed \(44\).png>)

**Use the delivery status to filter contacts:**

1.  Add an If/Else action.
2.  Use the Contact Details > Valid WhatsApp filter to take appropriate actions based on the delivery status.

You can also review the article "Using WhatsApp Delivery Status in Workflows" in the help library to learn more about it.

Select the **+** button > ACTION NAME: **WhatsApp** \> SELECT WHATSAPP TEMPLATE : **None - Manual Text** 

Note: You can send free text messages at NO EXTRA COST since a Free Entry Point Conversation will have been initiated after the customer responds to you.

![](<https://assets2.modalsupport.net/1761909463512-unnamed \(45\).png>)

Save the Action and publish the Automation and click Save

![](<https://assets2.modalsupport.net/1761909489247-unnamed \(46\).png>)

## How to configure Do Not Disturb (DND) for WhatsApp

Based on specific customer actions (e.g., sending "STOP"), you can set DND status for all communication channels or exclusively for WhatsApp. This ensures customer preferences are respected and helps manage communication channels more efficiently.

-   Create a new Workflow from scratch and choose **Customer Replied** as the Workflow Trigger.

![](<https://assets2.modalsupport.net/1761909523426-unnamed \(47\).png>)

-   Select **Add filters >** Reply channel **> WhatsApp** and Contains phase **> STOP** and **Save Trigger**

![](<https://assets2.modalsupport.net/1761909734867-unnamed \(48\).png>)

-   Click on the **\+ button**  to choose action **> Search DND > Select Enable/Disable DND.**

![](<https://assets2.modalsupport.net/1761909762175-unnamed \(49\).png>)

-   Select **Enable DND for specific channels > Channels: WhatsApp > Save Action**
-   Note: You can enable DND for all Channels by selecting Enable DND for all channels

![](<https://assets2.modalsupport.net/1761909791832-unnamed \(50\).png>)

The integration of WhatsApp with internal notifications in workflows and internal communication allows teams to receive updates directly through WhatsApp. This streamlines communication and ensures faster response times, promoting a more efficient workflow. 

-   Simply add an "Internal Notification" action to your workflow, select WhatsApp as the notification type, choose the appropriate user type and template, and save the settings.

![](<https://assets2.modalsupport.net/1761909841146-unnamed \(51\).png>)

### **FAQs**




**Question:** Does the Do Not Disturb (DND) setting affect other communication channels or just WhatsApp?
**Answer:** You can configure DND to apply to all channels or just WhatsApp. This gives you control over whether you want to prevent the customer from receiving communications across all methods or just on the particular channel where they requested to be left alone.  




**Question:** What's the difference between "None - Manual Text" and selecting a template when sending WhatsApp messages in workflows?
**Answer:** "None - Manual Text" lets you write a free-form message within the 24-hour window. Selecting a template is for sending pre-approved messages, which is useful for starting conversations outside of the 24-hour window or for specific marketing or support purposes.  




**Question:** Can I create workflows that combine WhatsApp with other channels like SMS or Email?
**Answer:** Yes! workflows are flexible, allowing you to combine WhatsApp with other communication channels to create comprehensive automation sequences.




**Question:** Can I use WhatsApp workflow automation to send messages outside the 24-hour window?
**Answer:** Yes, you can use approved WhatsApp templates after the initial 24-hour window for outreach or follow-up messages. Keep in mind that these template-based messages will incur additional charges.  




**Question:** What happens if a customer replies with something other than what I've configured for the 'Wait for WhatsApp Reply' step?
**Answer:** The workflow will continue to wait until they send a reply that matches what you've set up. If you want to handle unexpected responses, consider adding additional branches to your workflow with alternative conditions.  


**Question:What does enabling the ‘WAIT FOR WHATSAPP MESSAGE DELIVERY STATUS’ option do?
**Answer:** It pauses the workflow until Meta returns the WhatsApp message's delivery status, allowing you to act based on that status.  


**Question:How can I take action based on the WhatsApp delivery status?
**Answer:** Enable the delivery status option, add an **If/Else** action, and use the **Contact Details > Valid WhatsApp** filter to define actions based on the delivery status.  


**Question:Can I trigger workflows based on a specific WhatsApp number?
**Answer:** You can use the **WhatsApp number** filter in the **Customer Replied** trigger to select a specific number from a dropdown menu. The workflow will apply to all numbers by default if no number is selected.  


**Question:How do I limit the workflow to replies from WhatsApp only?
**Answer:** You can limit it by adding the **Reply Channel** filter and selecting **WhatsApp**. This ensures that only replies via WhatsApp will trigger the workflow.  


**Question:What happens if I don’t select a WhatsApp number?
**Answer:** If you don’t choose a specific WhatsApp number, the workflow will trigger replies received from any WhatsApp number linked to the system.  


**Question:Can I configure workflows to use a specific WhatsApp number?
**Answer:** Yes, you can configure workflows to trigger based on a specific WhatsApp number by using the WhatsApp Number filter. This allows you to choose a specific WhatsApp number from a dropdown list of all numbers associated with your system. If no number is selected, the workflow will apply to all WhatsApp numbers linked to your account.




**Question:** Can I receive internal team updates through WhatsApp within a workflow?

**Answer:** Yes. You can use the "Internal Notification" action within your workflow to send updates directly to your team via WhatsApp. You simply select WhatsApp as the notification type, choose the user type, and select a template to ensure your team receives real-time information.




**Question:** Why did my "Send WhatsApp Message" action fail even though the number is valid?

**Answer:** Outside of a 24-hour window (the time since the customer last messaged you), Meta **prohibits** manual/free-text messages. In these cases, you _must_ use an "Approved Template." If your workflow tries to send "Manual Text" after the window has closed, the message will fail.