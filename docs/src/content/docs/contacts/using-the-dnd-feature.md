---
title: "Using the DND Feature"
description: "The DND (Do Not Disturb) feature will prevent contacts from receiving certain communications, without removing them as a contact entirely."
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/rUs6w92sCw1r10YnDbwp"
sourceId: "rUs6w92sCw1r10YnDbwp"
category: "Contacts"
---

The DND (Do Not Disturb) feature will prevent contacts from receiving certain communications, without removing them as a contact entirely. 

This allows you to maintain contact records while also respecting their communication preferences. 

You may have contacts who unsubscribe from emails or SMS communications, but you still want to keep their information in your records. Or, perhaps a Contact informs you they want to receive emails but not SMS communications, or vice versa. You can manually enable/disable DND for specific communication channels, or all communication channels in .

This feature also may prevent your emails and SMS communications from being flagged or marked as spam by a provider (as you are giving them the option to “Unsubscribe” rather than them having to report your messages as spam). This can help ensure a smooth process for your future communications coming from .

## Enabling or disabling DND for a Contact Record:

-   Navigate to a Contact Record.
-   Scroll down the “Contact” panel on the left.
-   Under “DND,” you’ll see checkboxes for DND all channels, or individual channels for aspects of you may use to communicate with contacts - from Email, SMS, FB messenger, WhatsApp, and more.

![](https://assets2.modalsupport.net/1767621341890-image9.jpg)

-   You can select DND For Inbound Calls and SMS to block a number, for instances, where you may get spam calls or texts and need to block a contact’s number.
-   Check the appropriate box(es) to enable the DND as you wish
-   Save the contact record  

    Enable DND for Unsubscribed Contacts:

Automatically prevent messages from being sent to contacts who have unsubscribed from your communication. This ensures respect for their preferences and helps avoid unwanted messages.  

## Pro Tips for Using the DND Feature: The DND feature can be automated in several ways.

-   You can create and use an unsubscribe link (check out our tutorial on unsubscribe links) to include in emails or SMS communications.

![](<https://assets2.modalsupport.net/1761735141355-unnamed \(1\).jpg>)

-   You can set keyword triggers for a reply channel to enable the DND: for example, if someone replies “Stop” or “Opt Out” to a Facebook Messenger message, SMS, or a GMB message, they can be placed under DND status.
-   You can automate Workflow events based on a trigger of the DND status being enabled or disabled.

![](https://assets2.modalsupport.net/1765306325263-image2.png)

**_NOTE:_** If a contact record unsubscribes to a communication from , it will default to enable the DND for all channels (i.e. if they unsubscribe from email, they will be unsubscribed from everything.) If they let you know they still do want to receive messages on certain platforms, you can manually update their DND statuses for each channel, using the checkboxes, to re-enable communication in a certain channel.

## DND Split:                       

DND preferences can be set across individual communication channels. This allows users to tailor their communication strategy more precisely, respecting the preferences of their contacts while maintaining engagement through preferred channels.

Existing DND Settings: For contacts with DND previously enabled, will continue to honor those settings. Similarly, for contacts without DND, the system will proceed as usual.  

**DND Statuses:**

**DND 'On':** No automated or manual outbound and inbound messages are permitted. This is a change from the previous policy, where manual outbound messages were allowed even when DND was on.

**DND 'Off':** All automated and manual messages continue to function as usual.

**DND 'Partial':** This is a new status indicating that some channels are unavailable for outbound and inbound messaging, providing more granular control over communication preferences.  

**Affected Integration Channels**

This impacts various channels once integrated with , such as SMS, Calls & Voicemail, Emails, Inbound Calls and SMS, etc. If these integrations exist and are functional, they will be listed as channels within . Users can enable or disable these channels independently or altogether.

![](https://assets2.modalsupport.net/1767621405649-image6.jpg)

**Email DND**

**Auto-Enable DND:** DND for emails will automatically activate if certain criteria are met, such as ISP email permanent failures (bounce, generic, suppress-complaint, suppress-unsubscribe, suppress-bounce) or if a recipient unsubscribes or marks the email as spam.

**Removing Email DND:** Users can disable the DND from within the contact's record for all reasons except when marked as spam. To remove a contact from the suppression list, users should reach out to their ISP provider, remove the email from the suppression list, validate the email, and then disable DND in .

**SMS DND**

**Enabling SMS DND:** DND for SMS will be enabled if a customer uses opt-out keywords (e.g., STOP, UNSUBSCRIBE) or if specific error codes from The Phone System are received, indicating issues like user inactivity or carrier filtering.

**Types of SMS DND:** There are two types of DND for SMS: **temporary** (for error codes 30003, 30005, 30006) and **permanent** (for error code 30004 or opt-out keywords).

![](https://assets2.modalsupport.net/1761735240993-unnamed.png)

**Removing SMS DND:** Temporary DND can be updated within the contact record. **Permanent DND cannot be directly updated**; it requires the contact to reply with START or for the agency to provide opt-in evidence to support for removal.

### FAQ's  





**Question:** Can I manually adjust DND settings for individual communication channels?
**Answer:** Yes, you can manually enable or disable DND for specific channels, such as Email, SMS, Facebook Messenger, WhatsApp, and more, directly within the contact record in .




**Question:** What happens if a contact unsubscribes from one communication channel?
**Answer:** If a contact unsubscribes from any communication channel, will default to enabling DND for all channels. You can manually adjust these settings to re-enable communication on specific channels if the contact still wishes to receive messages through them.




**Question:** How is DND for SMS enabled, and can it be removed?
**Answer:** DND for SMS is enabled if a contact uses opt-out keywords like "STOP" or if certain error codes are received. Temporary SMS DND can be updated within the contact record, but permanent DND requires the contact to reply with "START" or for the agency to provide opt-in evidence to support for removal.




**Question:** How does DND impact outbound communications when it is set to 'On,' 'Off,' or 'Partial'?
**Answer:**DND 'On':** No automated or manual outbound messages are allowed.

**DND 'Off':** All automated and manual messages function normally.

**DND 'Partial':** Some channels are restricted for outbound messaging, providing more control over communication preferences.




**Question:** Why is the DND feature useful?
**Answer:** DND helps you maintain compliance with communication preferences, reduce spam reports, protect your sender reputation, and ensure smoother email/SMS deliverability.




**Question:** What is the difference between "Temporary" and "Permanent" SMS DND, and how are they handled?
**Answer:** **Temporary SMS DND** is triggered by specific error codes (30003, 30005, 30006) and can be manually updated/removed within the contact record. **Permanent SMS DND** is triggered by opt-out keywords (like STOP) or error code 30004; it cannot be manually switched off in the record and requires the contact to text "START" or the agency to provide opt-in evidence to support for removal.