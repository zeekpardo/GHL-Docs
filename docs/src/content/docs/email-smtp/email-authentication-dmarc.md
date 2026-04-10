---
title: "Email Authentication - DMARC"
description: "DMARC is a validation system for incoming emails. It checks that the domain of the From email address matches the domain the message is actually being sent…"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/BTgAbE9jWckGjaeIaOp9"
sourceId: "BTgAbE9jWckGjaeIaOp9"
category: "Email & SMTP"
---

DMARC is a validation system for incoming emails. It checks that the domain of the From email address matches the domain the message is actually being sent through. If the domains don’t match, the email fails the DMARC check.

## **Covered in this article:**

What is DMARC

How to fix the email failed from DMARC

## **What is DMARC?**

DMARC stands for domain-based message authentication, reporting, and conformance. It is a protocol that uses SPF and DKIM to determine the authenticity of an email, allowing domain owners to protect their domains from unauthorized use.

DMARC provides instructions to receiving servers about how to handle incoming mail. To get delivered, messages need to pass DKIM and SPF alignment checks according to the requirements set by the DMARC policy. Messages that do not pass DMARC checks can be rejected, reported back to the domain owner, or placed in the spam folder.

Implementing a DMARC policy on your domain can help protect you from spoofing, limiting your brand’s and recipients' exposure to potentially fraudulent and harmful messages.

## **How to Fix the Email Failed From DMARC?**

email system has two types of sending domains.

### **1\. Shared sending domain:** 

When you use email systems, all your emails will be sent through shared domains mg.msgsndr.net and mg.msgsndr.org

**_Note: DMARC is not required to send emails from the shared domains on the email system._** 

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXd3dF-5p-vzrC_5TmCqYSP0nKyJR-3sRdfCX7jVAS4Z2cKH21tvlmfwxEB6qBpt3FRKsHKb031f3FkRIoZfThhne_5HCr7o45KcUC_KBjWvv8PsoprPYUNE_W7K_B6CBSjwR2bzoj01sBdoLe-bLQXhJvJ3?key=rKxWIvh18OieBHJZy9M5Rw)

The error message says:

"The domain in your from address (kate@test.com) has a p=reject DMARC policy. Most inbox providers will reject your messages without a dedicated sending domain configured, resulting in elevated bounces. To avoid elevated bounces, use company emails."

Your actual DMARC record is: v=DMARC1; p=reject"

**_Note: To fix the issue, Temporarily change your DMARC record with your DNS to have a p=none policy_**

The DMARC error message above has a p=reject or p=quarantine. This will prevent emails that fail DMARC to be sent to the Inbox folder. To make sure messages are delivered even if DMARC fails, you will want to change the policy in your DMARC to p=none with your DNS provider. Moving to a more relaxed policy is not recommended so this change should be temporary.

### **2\. Dedicated sending domain**

In order to be DMARC compliant, you need to connect a dedicated sending domain to your account that matches the domain in your sender email address (i.e. your from address). For example, if you send an email using kate@test.com as the from-address and test.com is protected by DMARC, your account will need to use a dedicated sending domain like mg.test.com to meet DMARC requirements.

For more information, see our article, “**How to Set Up DMARC Records for Email”**

### **Pro Tips**

1.  **Use Dedicated Domains for Compliance**: To avoid DMARC-related issues, always use a dedicated sending domain that matches your email's "From" address. This ensures compliance with DMARC policies and reduces the risk of emails being rejected or marked as spam.
2.  **Monitor DMARC Reports:** Regularly review DMARC reports to identify and address any authentication issues. This can help you proactively manage and resolve problems related to email deliverability.
3.  **Implement Gradual Policy Changes:** When adjusting DMARC policies, use a gradual approach. Start with p=none to monitor and analyze how emails are being processed before moving to stricter policies like p=quarantine or p=reject.
4.  **Coordinate with DNS Providers:** Ensure that your DNS provider is updated with the correct DMARC settings. Changes to DMARC records can take some time to propagate, so plan adjustments well in advance of critical email campaigns.

### FAQ




**Question:** What is DMARC and why is it important?
**Answer:** DMARC (Domain-based Message Authentication, Reporting, and Conformance) is a protocol that helps prevent email spoofing by ensuring that emails align with SPF and DKIM standards. It is important to protect your domain from unauthorized use and improve email deliverability.




**Question:** What should I do if my emails are failing DMARC checks?
**Answer:** If your emails are failing DMARC checks, you may need to adjust your DMARC policy. Temporarily set the policy to p=none to monitor issues without affecting email delivery. Ensure you have a dedicated sending domain that aligns with your email’s "From" address.




**Question:** How do I fix the DMARC error message about ap=rejectpolicy?
**Answer:** To fix a DMARC error with a **p=reject** policy, temporarily change your DMARC record to **p=none** with your DNS provider. This will prevent your emails from being rejected and allow you to troubleshoot and resolve alignment issues.




**Question:** How can I set up a dedicated sending domain to meet DMARC requirements?
**Answer:** To set up a dedicated sending domain, configure your email system to use a domain that matches your "From" address. For example, if your email address is kate@test.com, use a subdomain like mg.test.com for sending emails. This helps meet DMARC requirements and improves deliverability.




**Question:** Where can I find more information on setting up DMARC records?
**Answer:** For detailed instructions on setting up DMARC records, refer to your email system's documentation or consult articles like “**How to Set Up DMARC Records for Email**” for step-by-step guidance.


**Question:What does DMARC do for my emails?**
**Answer:** DMARC helps verify that emails sent from your domain are legitimate. It prevents spoofing and ensures that your messages reach recipients’ inboxes rather than being rejected or marked as spam.




**Question:** What happens when an email fails DMARC under strict policies?
**Answer:** Depending on the domain policy, the email may be rejected, sent to spam, or quarantined, and delivery bounce rates will increase.




**Question:** I don't know who my "DNS Provider" is. How do I fix this?
**Answer:** Your DNS provider is usually where you bought your website name (like GoDaddy, Cloudflare, or Namecheap). To fix a DMARC error, you or your webmaster will need to log in to that account to update your TXT records.




**Question:** What does it mean to "relax" a DMARC policy?

**Answer:** Moving from a strict policy like p=reject (which blocks non-aligned mail) or p=quarantine (which sends it to spam) to p=none (which simply monitors) is considered "relaxing" your policy. This is recommended only as a **temporary** measure to troubleshoot delivery issues while you set up your dedicated domain.




**Question:** Do I need to configure DMARC if I am only using the shared sending domains?
**Answer:** No, DMARC is not a requirement if you are sending emails through the shared domains (such as mg.msgsndr.net or mg.msgsndr.org). DMARC compliance issues typically only arise when your "From" address domain has a strict policy that conflicts with the sender domain, or when you are moving toward a dedicated sending setup.