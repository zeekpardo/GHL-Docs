---
title: "How To Add a 3rd Party Email/SMTP Account"
description: "How To Add a 3rd Party Email/SMTP Account"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/hKB4Yvkyq0v7nldkdKi9"
sourceId: "hKB4Yvkyq0v7nldkdKi9"
category: "Email & SMTP"
---

**How To Add a 3rd Party Email/SMTP Account**

SMTP ("Simple Mail Transfer Protocol") is the method of communication for emails, which allows you to use the email service within . Setting up your Email/SMTP provider will allow you to send out workflows and more. We recommend using , but you may want to use another provider such as Gmail, Outlook, or other. Follow these steps to get your SMTP setup:

## **Navigation**

### **Step 1: Adding the 3rd Party**

-   Navigate to Settings > Email Services.
-   Click Add Service

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeckFf-7DyAjbqYQ71sYqtBLOlhq0HiQjpPLx9gF97hec3wAoYtBwAJcBvK7yA-EFtDAG5eljo6EoU5gi8LlVCtHB5tEJ5mmZbNs2-Hft79h5B-lP9-aZfoD20YoSnOC-5orYNdfA?key=-0qpbasefyNfsdtHMc1KqQ)

-   Choose **Other**
-   Fill out items in the pop-up

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXft2enTissFR-dVfOlQP7UaOfLDmGmUL6WUIrN01SU5Vny2vj_NcQ2wiuhbVzhJxASWco1eXOwY9Cn4DRm6MCFfLHS_IJ8LZGGzOZeuf-EdUWSoz0q22nF5c9FUXi22BeSNmq_9ujNAjct1SKwBRr1nsRJG?key=-0qpbasefyNfsdtHMc1KqQ)

-   Use the following link to determine the SMTP Provider and SMTP Port Number specific to your integrating service. Use outbound options (not inbound): [https://www.arclab.com/en/kb/email/list-of-smtp-and-imap-servers-mailserver-list.html](https://www.arclab.com/en/kb/email/list-of-smtp-and-imap-servers-mailserver-list.html)

-   Save. 

**Troubleshooting Tip:** Ensure you approve any verification emails sent to your inbox as attempts to integrate with your email platform. If you are receiving an error message, this is often the cause. 

**NOTE:** If you're using Gmail, Yahoo, or Outlook as your SMTP provider, please be advised that you may experience some emails being flagged as spam or not being sent out at all.

-   If your SMTP provider is set to "TestEmail@**Gmail**.com" and in your workflow configuration, you try to use a _different_ _Gmail_ account like "SampleEmail@Gmail.com", Gmail will often flag it as spam.

-   If your SMTP provider is set to "TestEmail@**Outlook**.com" or "TestEmail@**Yahoo**.com" and in your workflow configuration, you try to use a **Gmail** account, Yahoo and Outlook will often prevent the email from even sending.
-   If you are going to use Gmail, Outlook, or Yahoo as your SMTP provider, use the same email address for your workflows so you don't experience issues.
-   Some providers limit the number of emails that can be sent daily. For example, current Gmail limitations allow for about 150 maximum emails daily.

## **FAQ’s**




**Question:** Are there any sending limits when using Gmail as an SMTP provider?
**Answer:** Yes, Gmail has sending limits, typically allowing up to 150 emails per day. Exceeding these limits can result in emails not being sent or flagged as spam. Be mindful of these limits to avoid disruptions.  




**Question:** Can I use different email addresses in my workflows if I’m using Gmail, Outlook, or Yahoo as my SMTP provider?
**Answer:** No, it is recommended that you use the same email address for both your SMTP provider and workflows. Using different email addresses can lead to emails being flagged as spam or blocked entirely by these providers.  




**Question:** How can I find my email service's correct SMTP provider and port number?  
**Answer:** You can find the correct SMTP provider and port number for your email service by visiting the link provided: [Arclab SMTP Server List](https://www.arclab.com/en/kb/email/list-of-smtp-and-imap-servers-mailserver-list.html). Make sure to select the outbound options for SMTP settings.  




**Question:** Does receive email statistics from all SMTP providers?
**Answer:** No, only Mailgun reports statistics back to . Other SMTP providers do not report some or all email statistics, which may limit your ability to track email performance directly within .  




**Question:** What should I do if my emails are not sent out when using Outlook or Yahoo?
**Answer:** Ensure that your SMTP provider email address matches the email used in your workflows. If you use different addresses, Outlook and Yahoo may block the emails from being sent. Adjust your configuration to use the same address for both.  




**Question:** Why is recommended as the preferred SMTP provider?
**Answer:** This is recommended because it directly provides email statistics into the platform, offering better performance tracking and fewer issues with email deliverability compared to other providers.




**Question:** What should I do if I reach the daily sending limit on my SMTP provider?
**Answer:** If you reach the daily sending limit on your SMTP provider, you should pause your workflows and wait until the limit resets. Alternatively, consider upgrading your SMTP provider’s plan to increase your sending limits.  



**Question:** Why are my emails going to spam?
**Answer:** Common causes include:

-   Mismatch between SMTP and workflow email addresses.
-   Lack of proper domain authentication (SPF/DKIM).
-   Sending too many emails in a short time.  
    Ensure consistent sender details and follow best practices for email reputation.




**Question:** What should I do if emails are not sent via Outlook or Yahoo?
**Answer:** Ensure the email address used in your workflow matches your SMTP provider’s email. Outlook and Yahoo may block emails sent from mismatched addresses.  




**Question:** Can using a different email address than the SMTP provider's cause my emails to be flagged as spam or blocked?
**Answer:** Yes, if you use a different email address in your workflow than the one set up as your SMTP provider, your emails may be flagged as spam or even blocked entirely by providers like Gmail, Outlook, or Yahoo. Always use the same email address in both your SMTP setup and workflows to avoid this issue.  



**Question:** Can I use a different SMTP provider other than Gmail, Yahoo, or Outlook?  
**Answer:** Yes, you can use other SMTP providers such as Mailgun, which is recommended for better email performance tracking and fewer deliverability issues.




**Question:** If I reach my daily limit of 150 emails, will the remaining emails be sent tomorrow?  
**Answer:** No. Most third-party SMTP providers will simply fail the delivery attempt once the limit is reached. You would need to manually identify which emails failed and resend them once your limit resets, which is why a dedicated business email provider is recommended for growth.




**Question:** What should I do if I see an error message while trying to connect my email service?

**Answer:** First, check your inbox for any verification emails from your email platform. You must manually approve these verification requests to allow to integrate with your provider; failing to do so is the most common cause of integration errors.




**Question:** What should I do if I receive an error message while connecting my email service?

**Answer:** First, check your inbox for any verification or security alerts from your email provider. Most services require you to manually approve the connection to before they will allow emails to be sent. Failing to confirm these security prompts is the most common cause of integration errors.