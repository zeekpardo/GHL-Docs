---
title: "How to Set Up DMARC Records for Email"
description: "DMARC, an acronym for Domain-based Message Authentication Reporting and Conformance, is a robust technical tool designed to enhance email security. It…"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/QIPnQ98DZ8dz8hzV88X6"
sourceId: "QIPnQ98DZ8dz8hzV88X6"
category: "Email & SMTP"
---

## **Setting Up and Understanding DMARC Records**

### **What is DMARC?**

DMARC, an acronym for Domain-based Message Authentication Reporting and Conformance, is a robust technical tool designed to enhance email security. It combines the authentication methods of SPF (Sender Policy Framework) and DKIM (DomainKeys Identified Mail) to verify the authenticity of emails. DMARC is a free-to-use protocol to prevent email fraud, particularly phishing attacks. It empowers domain owners to dictate how unauthorized use of their email domains should be handled through policies outlined in the DMARC record (p=).

### **What is a DMARC Record?**

A DMARC record, housed in a TXT-type DNS entry named \_dmarc, outlines policies and preferences for email servers. It's composed of tags assigned with values separated by semicolons, specifying various parameters.

### **Understanding DMARC Policies (p=):**

-   P=NONE: Monitors email traffic without taking further actions.
-   P=QUARANTINE: Sends unauthorized emails to the recipient's spam folder.
-   P=REJECT: Rejects unauthorized emails outright, preventing delivery.

## **How to Set Up a DMARC Record:**

### **Set Up a Custom Sending Domain for Your Sub-account:**

Before configuring DMARC, ensure you've established a Dedicated Sending domain in your sub-account if applicable.  

If you’re using the LeadConnector email service:  
Navigate to the settings tab > Email Service > Dedicated Domain & IP Address, and click "Add New Domain." Follow the provided steps to set up your dedicated sending domain.

### **Access Your DNS Settings:**

Access the DNS settings for the domain you intend to set up DMARC for. This is typically accessible through your domain registrar or DNS hosting provider's dashboard—Eg, GoDaddy, Cloudflare, etc.

### **Create a DMARC Record:**

**Record Type:** TXT

**Name:** \_dmarc.yourdomain.com (Replace 'yourdomain.com' with your actual domain name.)

**Value:** v=DMARC1; p=none;

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfOjxnFMbDwjFmtTpav7peMAVt7n6LSpFzRAnbOs4SBYrD3ZwZJwp6qc6k7BwB7jEvsMrKU6hMGxJ4AWMERVhz48zW9lDWwVpwzcyMfQrIG9N9KA4b_hhN_ZDsXc3u_56Wx4OQtgQ0BvIErF3vZY9nPLOu1?key=jlx41KDI5N5xKPNTN7h4yA)

**Note:** If your email/sending domain is email.domain.com, then your dmarc record ‘Name’ will be ‘_dmarc.email’. If your email domain is domain.com, then your dmarc record Name will be ‘_dmarc’ (it’s the same as \_dmarc.domain.com and you don’t need to add the complete domain name under the ‘Name’ field while creating the record)

### **Key tags used in a DMARC record:**

#### **v (DMARC Version):**

**Default: DMARC1**

**Translation:** Denotes the DMARC protocol version. Must always be set as "DMARC1". If missing or incorrect, the entire DMARC record is ignored.

#### **p (Policy):**

**Default:** none

**Translation:** Specifies the action for emails failing DMARC checks.

-   **none:** Collects feedback without impacting existing flows.
-   **quarantine:** Treats suspicious emails, often directed to the spam folder.
-   **reject:** Rejects all failing emails outright.

#### **adkim (DKIM Alignment Mode):**

**Default:** r

**Translation:** Specifies the alignment mode for DKIM signatures.

-   "r" (Relaxed Mode): Allows DKIM domains sharing a common Organizational Domain to pass.
-   "s" (Strict Mode): Requires an exact match between DKIM and email header-From domains.

#### **aspf (SPF Alignment Mode):**

**Default:** r

**Translation:** Similar to adkim but for SPF authentication.

-   "r" (Relaxed Mode): Allows SPF domains sharing a common Organizational Domain to pass.
-   "s" (Strict Mode): Requires an exact match between SPF and email header-From domains.

#### **sp (Sub-domain Policy):**

**Default: p=** value

**Translation:** Allows explicit publishing of a policy for sub-domains under this DMARC record.

#### **fo (Forensic Reporting Options):**

**Default:** 0

**Translation:** Determines conditions for generating forensic reports.

-   "0": Generates reports if all underlying authentication mechanisms fail to produce a DMARC pass result.
-   "1": Generates reports if any mechanisms fail.
-   "d": Generates reports if DKIM signature fails.
-   "s": Generates reports if SPF fails.

#### **ruf (URI for Forensic Reports):**

**Default:** none

**Translation:** Specifies where to send Forensic reports (URIs in the form of "mailto:address@example.org").

#### **rua (URI for XML Feedback):**

**Default:** none

**Translation:** Specifies where to send XML feedback reports (URIs in the form of "mailto:address@example.org").

#### **RF (Reporting Format for Forensic Reports):**

**Default: afrf**

**Translation:** Determines the reporting format for individual Forensic reports.

#### **pct (Percentage):**

**Default: 100**

**Translation:** Specifies the percentage of email failures for which the policy should be applied. The policy must be "quarantine" or "reject" for the percentage tag to be applied.

#### **ri (Reporting Interval):**

**Default:** 86400

**Translation**: Sets the frequency of receiving aggregate XML reports.

## **Publish the Record:**

Once the DMARC record is created, publish it by adding it to your domain's DNS settings. This is typically done through your domain registrar or DNS hosting provider's dashboard.

## **Monitor DMARC Reports:**

After setting up the DMARC record, you'll receive aggregate and forensic reports at the email addresses specified in the record. These reports offer insights into how your domain's email is authenticated and delivered.

By following these steps and configuring your DMARC policy, you can enhance your email security and protect your domain from fraudulent activities such as phishing. Regularly monitoring DMARC reports allows you to fine-tune your settings for optimal email authentication and delivery.

## FAQs




**Question:** What is DMARC, and why is it important for email security?
**Answer:** DMARC (Domain-based Message Authentication Reporting and Conformance) is a protocol designed to enhance email security by combining SPF (Sender Policy Framework) and DKIM (DomainKeys Identified Mail) to verify the authenticity of emails. It helps prevent email fraud, particularly phishing attacks, by allowing domain owners to dictate how unauthorized use of their email domains should be handled.




**Question:** What are the key DMARC policies, and how do they work?
**Answer:** DMARC policies determine how to handle emails that fail authentication checks:

-   **p=none:** Monitors email traffic without taking any action.
-   **p=quarantine:** Sends unauthorized emails to the recipient's spam folder.
-   **p=reject:** Blocks unauthorized emails outright, preventing their delivery.




**Question:** How do I set up a DMARC record for my domain?
**Answer:** To set up a DMARC record:

-   Access your DNS settings through your domain registrar or DNS hosting provider.
-   Create a TXT record with the Name dmarc.yourdomain.com and the Value v=DMARC1; p=none;.
-   Adjust other tags as needed based on your requirements, such as alignment modes, reporting options, and policies.




**Question:** What are the key tags used in a DMARC record, and what do they mean?
**Answer:** Key tags in a DMARC record include:

-   **v (Version):** Specifies the DMARC version, always set to "DMARC1".
-   **p (Policy):** Defines the action for emails failing DMARC checks (none, quarantine, or reject).
-   **adkim (DKIM Alignment Mode):** Sets DKIM signature alignment mode (r for relaxed, s for strict).
-   **aspf (SPF Alignment Mode):** Sets SPF alignment mode (r for relaxed, s for strict).
-   **sp (Sub-domain Policy):** Defines a policy for sub-domains.
-   **fo (Forensic Reporting Options):** Specifies conditions for forensic reporting.
-   **ruf (URI for Forensic Reports):** Provides the address to send forensic reports.
-   **rua (URI for XML Feedback):** Specifies the address to receive aggregate XML feedback reports.
-   **pct (Percentage):** Defines the percentage of email failures for which the policy is applied.
-   **ri (Reporting Interval):** Sets the interval for receiving aggregate reports.




**Question:** What should I do if my email/sending domain is in a sub-domain format?
**Answer:** If your email domain is in a sub-domain format (e.g., email.domain.com), your DMARC record Name should be '\_dmarc.email'. For top-level domains like domain.com, the Name should be '\_dmarc'.




**Question:** How do I monitor DMARC reports, and why is it important?
**Answer:** After publishing your DMARC record, you will start receiving aggregate and forensic reports at the specified email addresses in your record. These reports provide insights into how your domain’s emails are authenticated and delivered, helping you fine-tune your settings to improve email security and delivery.




**Question:** What is the purpose of the 'pct' tag in a DMARC record?
**Answer:** The 'pct' tag specifies the percentage of email failures for which the policy (quarantine or reject) should be applied. For example, a pct=50 means the policy will apply to 50% of the emails that fail DMARC checks.




**Question:** Can I change the DMARC policy from 'none' to 'quarantine' or 'reject' later?
**Answer:** Yes, you can start with a p=none policy to monitor email traffic without enforcement. Once you have reviewed the reports and are confident in your email authentication setup, you can change the policy to 'quarantine' or 'reject' to enforce stricter security measures.




**Question:** What do the 'adkim' and 'aspf' tags mean in DMARC, and how do they differ?
**Answer:** Both 'adkim' and 'aspf' tags specify the alignment mode for DKIM and SPF, respectively.

-   **'r' (Relaxed Mode):** Allows domains with a common Organizational Domain to pass.
-   **'s' (Strict Mode):** Requires an exact match between the DKIM/SPF domain and the email header-From domain. 'adkim' applies to DKIM alignment, while 'aspf' applies to SPF alignment.




**Question:** How do I publish a DMARC record?
**Answer:** To publish a DMARC record, add the DMARC TXT record to your domain's DNS settings through your domain registrar or DNS hosting provider’s dashboard. Make sure to test and monitor your setup with the initial 'none' policy to ensure proper configuration before moving to more stringent policies like 'quarantine' or 'reject'.




**Question:** How can I adjust my DMARC policy over time as I monitor reports?
**Answer:** As you monitor your DMARC reports and gain insights into how your domain's emails are authenticated, you can adjust your DMARC policy to improve email security. Initially, you might use a p=none policy to gather data without affecting email flow. Once you're confident that your authentication mechanisms are functioning correctly, you can change the policy to p=quarantine to move suspicious emails to the spam folder, or p=reject to block them entirely. Always ensure to review your reports before making these changes to avoid unintended consequences.




**Question:** How do I handle DMARC for a sub-domain?
**Answer:** If your sending domain is a sub-domain (e.g., email.domain.com), your DMARC record Name should be \_dmarc.email. For top-level domains like domain.com, it should be \_dmarc.




**Question:** Does DMARC protect me from receiving spam?
**Answer:** No. DMARC is designed to protect **your reputation**. It prevents _other people_ from pretending to be you. It’s a shield for your brand name, ensuring that when a customer sees an email from your domain, they know it’s actually from you.




**Question:** Can I have more than one DMARC record on a single domain?

**Answer:** **No.** You must only have one DMARC record per domain/sub-domain. If a receiving server finds multiple DMARC records, it will likely ignore all of them, leaving your domain unprotected. If you need to change your policy, edit your existing record rather than creating a new one.




**Question:** Do I need to set up anything else before I can configure a DMARC record?

**Answer:** Yes. DMARC is a "conformance" tool, meaning it relies on existing protocols. You must ensure you have established a **Dedicated Sending Domain** (which involves setting up SPF and DKIM) before DMARC can function