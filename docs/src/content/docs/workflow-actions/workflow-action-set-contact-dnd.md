---
title: "Workflow Action: Set Contact DND"
description: "Workflow Action: Set Contact DND"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/DUCjM3InZcgnEXPXZsjK"
sourceId: "DUCjM3InZcgnEXPXZsjK"
category: "Workflow Actions"
---

**Workflow Action: Set Contact DND**

In this article, we'll delve into the Set Contact DND action, which enables users to mark a contact as DND (Do Not Disturb). This feature is particularly useful in scenarios where contacts have indicated disinterest or opted out of communications.

### What is Set Contact DND?

The Set Contact DND action allows users to designate a contact as Do Not Disturb. This designation instructs the system to refrain from sending further messages to the specified contact. Common use cases for employing this action include instances where a contact has explicitly opted out of communications, their email address has bounced, or they have submitted an unsubscribe request.

### Requirements:

-   A workflow set up with appropriate triggers and action steps.

### How to Use:

1.  Identify Workflow Scope: Determine the workflow where you want to employ the Set Contact DND action. Ensure it aligns with scenarios such as opt-outs or bounce-backs.

![](<https://assets2.modalsupport.net/1765890487537-unnamed - 2025-12-16T210756.841.png>)

2\. Integrate Set Contact DND Action: Add the Set Contact DND action to your workflow. This action will enable you to mark contacts as Do Not Disturb.

**Note: Inbound DND can currently be toggled on or off for all channels, with support limited to call and SMS channels at this time.**

![](https://assets2.modalsupport.net/1775757654217-image2.jpg)

3\. Select DND Preferences: Within the Set Contact DND action, choose whether to activate DND for all communication channels or specific ones. Tailor your selection based on your contact's preferences and your communication strategy.  

![](<https://assets2.modalsupport.net/1765890559457-unnamed - 2025-12-16T210911.641.png>)

4\. Contact DND (Do Not Disturb) for WhatsApp:  
**Enable DND for Unsubscribed Contacts Including WhatsApp contacts:** Automatically prevent messages from being sent to contacts who have unsubscribed from your communication. This ensures respect for their preferences and helps avoid unwanted messages.  

![](<https://assets2.modalsupport.net/1765890622058-unnamed - 2025-12-16T211015.761.png>)

5\. Publish and Save: Once your workflow setup is complete, publish the changes and save them to ensure they take effect. Test the article after completion.

![](<https://assets2.modalsupport.net/1765890647009-unnamed - 2025-12-16T211039.926.png>)

**_NOTE: For an in-depth overview of Workflow Testing see our article, “Using the Testing Features in Workflows”_**

### FAQ’s




**Question:** What is the Set Contact DND action and why should I use it?
**Answer:** The Set Contact DND (Do Not Disturb) action allows users to mark a contact as not to receive further communications. This feature is essential for respecting contacts' preferences and maintaining compliance with communication regulations. It's typically used in scenarios where a contact has opted out, their email has bounced, or they have unsubscribed from messages.

#### Question: What are the requirements for using the Set Contact DND action?  
Answer:

To use the Set Contact DND action, you need:

-   A workflow set up within your platform.
-   Appropriate trigger and action steps are configured to handle scenarios such as opt-outs, bounce-backs, or unsubscribe requests.

#### Question: How do I integrate the Set Contact DND action into a workflow?  
Answer:

1.  **Identify Workflow Scope:**
    -   Determine the workflow where you want to use the Set Contact DND action. Ensure that it fits scenarios like handling opt-outs or managing bounce-backs.
2.  **Add the Action:**
    -   Add the Set Contact DND action to your chosen workflow. This action will mark contacts as Do Not Disturb.
3.  **Select DND Preferences:**
    -   Within the Set Contact DND action settings, choose whether to apply DND to all communication channels or only specific ones. This customization helps tailor the action to your contact's preferences and your communication strategy.
4.  **For WhatsApp Contacts:**
    -   If applicable, enable DND for WhatsApp contacts who have unsubscribed. This ensures they are not sent messages via WhatsApp, respecting their communication preferences.




**Question:** Can I apply DND to just one specific channel, like SMS, while still sending emails?

**Answer:** Yes. Within the action settings, you can choose to activate DND for **specific channels** instead of "All Channels." This allows you to tailor your strategy based on the specific type of opt-out the contact requested.




**Question:** Where can I see a list of every contact currently on DND?

**Answer:** Navigate to **Contacts > Smart Lists**. Use the **More Filters** button and search for **DND**. You can filter by "DND is enabled" to see your entire suppressed list. This is useful for auditing your list of health.