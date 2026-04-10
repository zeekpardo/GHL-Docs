---
title: "2-way Email Sync for Outlook"
description: "With Outlook 2-way sync, you can use your personal Outlook account with to send and receive emails."
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/LJdtrhC04Gg8FY7R62UN"
sourceId: "LJdtrhC04Gg8FY7R62UN"
category: "Email & SMTP"
---

With Outlook 2-way sync, you can use your personal Outlook account with to send and receive emails. 

**Please Note:** You would need to send an email to a contact from to initiate the sync between both platforms. The first outbound email needs to be initiated from to establish the sync

All subsequent messages in the email thread (initiated from ) will be in sync. Outbound emails sent from your email will start reflecting in and vice versa.

## Setting Up

### Step 1: Navigate to Settings>Profile

-   Navigate to Settings (located on the bottom left) > My Profile on the left-side menu > Email (2-way sync)
-   Click on Outlook using the radio button
-   Select “Connect” 

![](<https://assets2.modalsupport.net/1768473395766-unnamed - 2026-01-15T183629.664.png>)

### Step 2: Sign in to Outlook and grant associated permissions. 

![](<https://assets2.modalsupport.net/1768473409146-unnamed - 2026-01-15T183646.288.png>)

![](<https://assets2.modalsupport.net/1768473417610-unnamed - 2026-01-15T183653.068.png>)

**Update Email:** This helps users change their connected email ID to another one without disconnecting the previous connection.

![](<https://assets2.modalsupport.net/1768473451066-unnamed - 2026-01-15T183726.995.png>)

## How Two-way sync works with individual emails, bulk emails, and workflows

Outlook 2-way sync is a user-level provider.

How the sender domain mapping works for different types of emails:

-   Individual Email: On connecting a personal email account (Outlook), the Outlook email ID will be considered as the sending domain for the emails sent by the user for individual emails.

-   Bulk Email: If the user enters their email ID (after setting up the two-way sync) under the “From Field,” the user's email ID will be considered the sender domain for the bulk emails. If the field is blank, the account level provider will be considered the sending domain.

-   Bulk Email: If the user enters an email ID different from their Outlook email, it will consider the account-level provider as the sender domain.

-   Workflow & Automation: Emails will continue to go from account-level providers.

**_Please Note:_**  _An email thread initiated from your email will not sync with ._

**Email Sync for Outlook :**

Emails will now sync differently with your account when connecting your personal Outlook email ID for 2-way sync. Previously, all emails with contacts would automatically sync to , including those involving system users who are also contacts, which could result in personal emails being visible to admins and users with contact access. Now, emails will only sync if they involve contacts who are not system users, ensuring better privacy and more relevant data synchronization.

This enhances privacy by ensuring that personal emails between system users do not sync to , maintaining the confidentiality of internal communications.

To use this email sync feature, simply connect your personal Outlook email to with 2-way sync. Emails will now only sync if they include at least one contact who is not a system user. Ensure your email settings are updated to take advantage of this improved functionality.

**_Please Note:_** _If the sync is disconnected, the subsequent messages in the thread will stop syncing. This will also stop syncing new outbound emails sent from ._

**_Please Note:_** _Attachments of up to 3 MB size work across this sync; any attachments larger than this size will cause the message to not sync over._

**Congratulations! You can now use your personal Outlook email account within for sending and receiving emails.**

###   

### Inbound Email Issues with Gmail/Outlook 2-Way Sync

**Logging Attachments from New Emails:**

-   **Issue:** When contacts sent new emails, the attachments included in those emails were not recorded in .
-   **Solution:** This issue has been resolved. Now, when a contact sends a new email, any attachments up to 25MB will be properly logged in , ensuring all important documents are captured and accessible. 

**Logging Attachments from Reply Emails:**

-   **Issue:** If a contact replied to an existing email thread, only attachments smaller than 5MB were being logged in . Larger attachments were not captured, which could result in missing important information.
-   **Solution:** This problem has been fixed. Now, attachments up to 25MB included in reply emails will be logged in , making sure that all relevant information from ongoing conversations is recorded seamlessly. 

### Outbound Email Issues with Gmail/Outlook 2-Way Sync

**Recording Attachments from Sent Emails:**

-   **Issue:** When users sent emails with attachments larger than 5MB from their inboxes (outside of ), those attachments were not being logged in . This meant that important outgoing documents were not being tracked.
-   **Solution:** This issue has been addressed. Now, when users send emails from their inboxes, any attachments up to 25MB will be fully supported and accurately logged in , ensuring that all outbound communications are properly recorded and accessible.

### FAQs




**Question:** What happens if the two-way sync is disconnected?
**Answer:** **I**f the sync is disconnected, subsequent messages in the thread will stop syncing, and new outbound emails sent from will no longer sync with Outlook.




**Question:** Can I use a different email ID for bulk emails after setting up a two-way sync?
**Answer:** Yes, if you enter a different email ID in the "From Field" for bulk emails, the account-level provider will be considered the sending domain.




**Question:** Are there limitations for email attachments with two-way sync?
**Answer:** Yes, attachments up to 25MB are supported for incoming and outgoing emails. Attachments exceeding this size will not sync to .




**Question:** Will personal emails between system users sync with ?
**Answer:** No, emails will only sync if they include at least one contact who is not a system user, ensuring better privacy and avoiding irrelevant synchronization.




**Question:** What happens if an email thread is initiated from my email (Outlook)?
**Answer:** If the email thread is initiated from your Outlook email (rather than from ), the thread will **not** sync with . Only email threads initiated from will continue to sync with Outlook.  




**Question:** How can I update my connected Outlook email ID after setting up the two-way sync?  
**Answer:** You can update your connected email ID by navigating to Settings > Profile > Email (2-way sync). Then, select the "Update Email" option, which allows you to change your connected email address without disconnecting the previous connection.**  

Question: What is the very first step I must take to establish the sync between and my Outlook account?  
**Answer:** To initiate the sync, you must send the first outbound email to a contact from within . Email threads initiated from your external Outlook inbox will not sync with the platform. 




**Question:** What happens if I send a 30MB file from Outlook?

**Answer:** The maximum sync limit is **25MB**, the email text will likely sync, but the attachment will be excluded. For large files, we recommend using a "Shareable Link" (Google Drive, OneDrive, or Dropbox) inside the email body instead of a direct attachment.




**Question:** I sent an email with a 10MB file from my Outlook inbox; will it show up in the platform?

**Answer:** Yes. While the limit was previously lower, the system now supports logging attachments up to **25MB** for both new emails and replies, as well as those sent directly from your external inbox.