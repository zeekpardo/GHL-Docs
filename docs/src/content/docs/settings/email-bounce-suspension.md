---
title: "Email Bounce Suspension"
description: "Email Bounce Suspension"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/OmclFH0yNlsCjKkwrf1O"
sourceId: "OmclFH0yNlsCjKkwrf1O"
category: "Settings"
---

**Email Bounce Suspension**

Email sending will be suspended for having a high hard bounce rate. Email providers and anti-spam networks monitor bounce rates for every email you send and use that information to suspend email sending for your accounts with high bounce rates. If your account has a high bounce rate this will impact your deliverability.

In this article, you will learn about

1.  Bounces
2.  Causes of an account suspension
3.  How to fix the hard bounce

## **What Are Bounces?**

A bounce occurs when an email is not delivered or rejected by the recipient's email provider.

There are two types of bounces:

**Hard** bounces occur when an email address does not exist.

**Soft** bounces are temporary failures that include reasons such as the recipient server being down or the mailbox being full.

## **Causes of an Account Suspension**

We have thresholds in place to monitor bounce rates and if a Bounce rate exceeds the industry threshold which is below 5%, email sending may be suspended. 

A high bounce rate indicates that the account is sending emails to contacts that are invalid emails. This may also mean that external spam filters are refusing to deliver emails due to bad sending behavior in the past. A good bounce rate is typically in the range of 0 - 3%.

During the email-sending suspension, only email-sending will be disabled all other features will be working.

**How long will email sending be blocked?**

A temporary block of 24 hours will be enforced. Users can quickly resume sending by enabling email validation. If this happens for the third time in seven days, email sending will be blocked permanently until the email validation feature is enabled.

### **How to Fix the Hard Bounce and Activate the Account?**

When email sending has been suspended, you will receive an email to the account email address to take the below steps:

Please review recent campaigns, workflows, and/or bulk messages sent from the account mentioned and make relevant changes.

1.  Stop all workflows, campaigns, triggers, and/or bulk actions to contacts who have yet to explicitly opt to receive email from the account.
2.  Validate all contact emails to ensure you only send emails to real/working/active emails.
3.  Please respond to the email as soon as possible with the proof of opt-in, opt-in forms/funnels, and examples of unsubscribe tags in your recently sent email.

Once you complete the email validation and respond to the email with the proof, our Support Team will follow up with you to help activate the account.

### **How to Prevent Future Account Suspension:**

You should be able to send emails 24 hours after the resolution of this non-compliance email. 

Learn more about email statistics in the help library for further clarification on this matter.

### **Email Best Practices:**

### **1\. Email Validation**

Since we are not showing any reporting on which contacts are bounced. If those contacts were uploaded from previous options, we highly recommend **validating all existing contacts** before sending them. 

Reach out to your accounts team about enabling re-validation for 90 days.

The bounce emails will be marked as invalid emails, so you don't need to tag them as invalid emails will not be picked in the campaign/bulk/workflow.

### **2\. Set Up Your Dedicated Domai**n

Please review the articles in our help library for further details on dedicated sending domains

###   

### **3\. Configure the Sender Email That Matches the Dedicated Domain You Set Up**

Please review our articles “Masking Sender Emails - From Name & Address” and “Email Authentication - DMARC”

Example: If you set up replies.yourcompany.com, you can send from [sender\_name@company.com](mailto:sender_name@company.com)

### **4\. Schedule the Emails in Little Batches**

Please review the article in the help library for further details on Bulk Action delivery options

### **5\. Set Up Double Opt-In**

Please review the articles in the help library for further details.

**Note:** To set up double opt-in for future setup, please include a checkbox to ensure the lead gives consent when filling out the form if that's where the leads opt-in:   

You can set up a checkbox like this:

By providing your name and contact information, you are expressly consenting to receive communications from COMPANY\_NAME or one of their licensed agents, which may include phone calls (including to any wireless number that you provide), including automatic telephone dialing systems or by artificial/pre-recorded messages text message and/or emails for the purpose of marketing insurance products and services including health, medicare, and life insurance plans. By providing your information, you understand that your consent is not a condition of the purchase of any product or services, and carrier messaging and data rates may apply. You may revoke this consent at any time by calling us at 1-800-000-000 or emailing us at EMAIL\_HERE to be placed on our do-not-call list.

###   

### **6\. Set Up Unsubscribe Links**

Please review the articles in the help library about unsubscribe links.

**FAQ:**




**Question:** What is a hard bounce?

**Answer:** A hard bounce occurs when an email is returned because the recipient's email address is invalid or does not exist.




**Question:** How long is the email sending suspended if my account exceeds the bounce rate threshold?
**Answer:** The email sending will be temporarily suspended for 12 hours. If it happens three times within seven days, the suspension becomes permanent until email validation is enabled.




**Question:** How can I reactivate my account after email suspension?
**Answer:** To reactivate, review recent campaigns, stop all workflows and bulk actions, validate email contacts, and respond with proof of opt-in. Once completed, the Support Team will assist in reactivating the account.




**Question:** How can I prevent my account from being suspended again?
**Answer:** You can prevent future suspensions by validating email lists, setting up a dedicated sending domain, using double opt-ins, and sending emails in small batches.




**Question:** What is a good bounce rate for email campaigns?
**Answer:** A good bounce rate is typically between 0 - 3%, and any rate above 5% may lead to a suspension of email sending.




**Question:** How do I resume email sending faster?
**Answer:** Enable email validation and remove invalid contacts. Support can assist reactivation once you also provide **opt-in proof**, unsubscribe examples, and compliance details.




**Question:** Can I just delete the contacts that bounced to fix the problem?

**Answer:** While removing them helps, the system automatically marks bounced emails as "Invalid." This means they won't be emailed again even if they stay in your list. To truly fix the problem, you should validate your _entire_ list to catch bad emails _before_ you hit "send" next time.  




**Question:** How can I use "Batching" to protect my sender reputation?
**Answer:** Instead of sending to thousands of contacts at once, use "Bulk Action" delivery options to send emails in smaller batches. This prevents spikes in traffic that look like spam to email providers and helps keep your bounce rate manageable.  




**Question:** If my email sending is suspended, will I still be able to use the other features in my account?

**Answer:** Yes. During an email-sending suspension, only the ability to send emails is disabled. All other features within your account will remain fully functional while you work to resolve the bounce rate issue.