---
title: "List Unsubscribe Headers"
description: "Pro Tips for the List-Unsubscribe Header"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/E69knjy17493QWxgWzKh"
sourceId: "E69knjy17493QWxgWzKh"
category: "Email & SMTP"
---

## **What is the List-Unsubscribe Header?**

-   **Definition**: The list-unsubscribe header is an extra feature in some emails that provides an easy way for recipients to unsubscribe from a mailing list.
-   **Functionality**: Major email providers like Gmail and Outlook can display this option, allowing users to opt-out without searching for an unsubscribe link within the email itself.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdsvaJ_y_uuFjBO8c6365b5IGoiCX-a8NGqX6ve_j4QTzlBh16c327Ekz6zn8yiP3EwfegFgUtQTnhhVABOPSDEU-3OYqRLWIqINbvzGaw_mFYCtGoCVd20hh5CfMgP7zHH62np8Cx7wVK1JmxNvv1vEI4?key=QUajQlT2niJWPZfBTwJ37A)

## **Benefits for Email Deliverability**

-   **Best Practice**: Including this header is a recommended practice for improving email deliverability.
-   **Reduced Complaints**: It offers recipients a simple and safe way to unsubscribe, which can help decrease the number of spam complaints and protect the sender's reputation.

## **Can It Be Disabled?**

-   **No**: This feature is part of an industry standard and cannot be turned off.

## **Why Might You Not See the Unsubscribe Option?**

-   **Reputation-Based**: The unsubscribe option only appears for senders who have a strong reputation.
-   **Spam Prevention**: Email providers do not show this option for messages from suspected spammers, as they can't be trusted to remove you from their lists.
-   **Trust Building**: Initially, only a select group of trusted senders will have this feature, but the aim is to expand it over time to include more legitimate emails.

**Pro Tips for the List-Unsubscribe Header**

Ensure a Strong Sender Reputation

-   The unsubscribe option only appears for reputable senders. Maintain low spam complaint rates, high engagement, and proper authentication (SPF, DKIM, DMARC) to qualify.

Use a Visible Unsubscribe Link in the Email Body

-   Even though the list unsubscribe header exists, always include a clear unsubscribe link in the email footer. This reinforces trust and prevents recipients from marking emails as spam.

Monitor Unsubscribe Rates to Improve Engagement

-   High unsubscribe rates indicate that your content isn’t relevant to recipients. Analyze email frequency, audience segmentation, and message quality to improve engagement.

Avoid Spammy Practices to Keep the Unsubscribe Option Active

-   Sending unsolicited emails, excessive promotional content, or misleading subject lines can lower your sender reputation and remove the list-unsubscribe option from your emails.

Ensure Compliance with Email Regulations

-   Many countries require clear unsubscribe options in marketing emails (e.g., CAN-SPAM, GDPR). The list-unsubscribe header helps meet these legal requirements while improving deliverability.

Use a One-Click Unsubscribe Process

-   Avoid making users go through multiple steps to unsubscribe (e.g., logging in or filling out forms). A simple, immediate opt-out improves user experience and reduces spam complaints.

Test Your List-Unsubscribe Header Across Email Providers

-   Different email clients (Gmail, Outlook, Yahoo) may handle the list unsubscribe header differently. Test your emails to ensure they appear properly and function as expected.

Segment & Re-Engage Before Losing Subscribers

-   Instead of losing subscribers immediately, offer a preference center where they can choose to receive fewer emails instead of opting out completely.

Keep Unsubscribe Requests Honored Promptly

-   Delays in processing unsubscribes can lead to frustrated recipients marking emails as spam, damaging your email reputation.

### **FAQ**




**Question:** Why list-unsubscribe header is good for email deliverability?  
**Answer:** This feature is a deliverability best practice! It helps reduce complaints by giving subscribers a quick method to safely unsubscribe without negatively impacting your sending reputation. It is an additional, preferred option that recipients can use – rather than report spam or an abuse complaint.




**Question:** Can this be disabled?  
**Answer:** No, this cannot be disabled, as this is an RFC/industry standard.




**Question:** Why am I not getting the unsubscribe option in the email header?  
**Answer:** The unsubscribe option is only shown for senders with a high reputation. This only works for some senders right now. We're actively encouraging senders to support auto-unsubscribe — we think 100% should. We won't provide the unsubscribe option on messages from spammers: we can't trust that they'll actually unsubscribe you, and they might even send you more spam.  

So you'll only see the unsubscribe option for senders that we're pretty sure are not spammers and will actually honor your unsubscribe request. We're being pretty conservative about which senders to trust in the beginning; over time, we hope to offer the ability to unsubscribe from more emails.




**Question:** Can I use the list-unsubscribe header to retain subscribers?
**Answer:** Yes. You can offer a preference center where users reduce email frequency instead of fully unsubscribing. This can help maintain engagement while respecting recipient choices.




**Question:** Does using the List-Unsubscribe header ensure compliance with email regulations?
**Answer:  It helps meet standards like CAN-SPAM and GDPR by providing an easy opt-out, but you should still include an unsubscribe link in the email body to fully comply.  




**Question:** Why can't I see this button on my own test emails?
**Answer:** There are two common reasons. First, your **sender reputation** might not be "trusted" enough by Google or Yahoo yet (this takes time and consistent sending). Second, if you have emailed yourself many times and never marked your own mail as spam, the provider might not feel the need to show you the "easy" unsubscribe button.




**Question:** Does the "List-Unsubscribe" button count as a click in my email statistics?

**Answer:** No. Most email providers handle the list-unsubscribe header as a system-level command. When a user clicks it, the email provider sends a "silent" request back to our system to unsubscribe the contact. While it will show up as an **Unsubscribe** in your stats, it usually does not register as a standard "Link Click."




**Question:** What are the three technical authentication protocols I need to maintain to help qualify for the "trusted" status required to see the unsubscribe header?
**Answer:** To build the strong sender reputation necessary for the header to appear, you must ensure your emails are properly authenticated using **SPF**, **DKIM**, and **DMARC**. Maintaining these, along with high engagement and low spam complaints, tells email providers your mail is legitimate.