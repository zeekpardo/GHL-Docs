---
title: "Email Deliverability 101"
description: "Email deliverability is the cornerstone of any successful email marketing strategy. Ensuring that your emails land in your recipients' inboxes rather than…"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/oImLWwHGT26Syxfnmo7e"
sourceId: "oImLWwHGT26Syxfnmo7e"
category: "Email & SMTP"
---

Email deliverability is the cornerstone of any successful email marketing strategy. Ensuring that your emails land in your recipients' inboxes rather than being flagged as spam, is crucial for maintaining communication with your audience and maximizing your marketing efforts. This article will walk you through the basics of email deliverability, highlight key practices, and provide you with actionable steps to improve your email performance.

## **How to Improve Your Email Deliverability**

### **Step 1: Set Up SPF, DKIM, and DMARC Records**

Improved email deliverability requires that you set up these email authentication methods for your domain:

-   All senders: SPF or DKIM
-   Bulk senders: SPF, DKIM, and DMARC
-   **SPF (Sender Policy Framework):** Add an SPF record to your DNS to specify which mail servers are allowed to send emails on behalf of your domain.  
    **How to get:** Log into your email service provider (e.g., Mailgun, SendGrid, Google Workspace, etc.) and navigate to the domain settings or email authentication section. They typically provide an SPF record that you need to add to your DNS settings.  
    **How to Add:** Once you have the SPF record from your email service provider, log into your domain hosting provider (e.g., GoDaddy, Cloudflare, Namecheap), access the DNS settings, and add a new TXT record with the provided SPF value.
-   **DKIM (DomainKeys Identified Mail):** Add a DKIM record to your DNS to provide a digital signature that verifies your emails' authenticity.  
    **How to get:** Similar to SPF, DKIM records are provided by your email service provider. Look for the DKIM settings in your account dashboard, where you'll find the DKIM key that needs to be added to your DNS.  
    **How to Add:** Copy the DKIM record provided by your email service provider and add it as a TXT record in your DNS settings on your domain hosting provider.
-   **DMARC (Domain-based Message Authentication, Reporting & Conformance):** Implement a DMARC policy to instruct email providers on how to handle emails that fail SPF or DKIM checks.  
    **How to get it:** Go to the Support site of the email services that you are using and search for the DMARC record there. You can create a DMARC record by specifying the policy you want to enforce (e.g., none, quarantine, or reject).  
    You may consult with your email service provider about which policy to enforce, but generally, none is recommended.  
    **How to Add:** Once you have your DMARC record configured, add it as a TXT record in your DNS settings.  
    To learn more about setting up DMARC records, see our article “**How to Set Up DMARC Records for Email”**

### **Step 2: Verify Your Domain**

-   Use tools like Google Postmaster Tools or Microsoft’s domain verification process to verify your domain. This step is crucial for building trust with email providers.
-   If you’re hosting the DNS records of the domain on any provider, you can verify if the DNS records are correctly set up. Then go to the Settings tab > Email services > Dedicated domain and verify the records there.

### **Step 3: Implement One-Click Unsubscribe**

-   Ensure that your email service provider supports one-click unsubscribe functionality. This can be set up through your email marketing platform’s settings.

### **Step 4: Maintain an Engaged Email List**

-   Regularly review your email list to remove inactive subscribers.
-   Focus on delivering content that is relevant and valuable to your audience to maintain high engagement rates.

### **Step 5: Monitor Your Email Performance**

-   Use tools like Google Postmaster to track your domain’s reputation, spam rate, and other important metrics. Adjust your strategies based on the data to continuously improve your deliverability.

## Key Factors Influencing Email Deliverability:

-   **Safety:** Mailbox providers assess whether the message is safe and free from harmful content.
-   **Relevance:** The message should be wanted by most subscribers and specific to the recipient.
-   **Consistency:** Maintain a steady sending pattern. Avoid sudden changes in volume or frequency, and ensure that your domains are recognizable and active.
    -   **Volume:** Gradually grow your subscriber list; avoid large spikes in subscribers.
    -   **Frequency:** Send at least one email per month to maintain reputation, but avoid over-sending to prevent being marked as spam. Allow subscribers to choose their preferred frequency.
-   **Content:**
    -   **Avoid Spam Triggers:** Use conversational, human-like language without sounding overly promotional or urgent. Avoid misleading subject lines.
    -   **Use Direct Links:** Refrain from using link shorteners to prevent being flagged by spam filters.
    -   **Balanced Text-to-Image Ratio:** Ensure your message is effective even if images don't load.
    -   **Encourage Engagement:** Foster authentic engagement by inviting subscribers to interact with your emails.

### **Pro Tips**

-   **Use a Dedicated Subdomain:** Set up a dedicated subdomain specifically for email marketing to protect your primary domain's reputation.
-   **Test Emails Before Sending:** Use email testing tools to check for issues that might cause your emails to be flagged as spam.
-   **Stay Compliant:** Regularly update your practices to stay compliant with the latest email marketing regulations and provider guidelines.

### **FAQs**  


**Question:  What are SPF, DKIM, and DMARC, and why are they important?
**Answer:** SPF, DKIM, and DMARC are security protocols that authenticate your emails, ensuring they are recognized as legitimate by email providers. They help prevent your emails from being marked as spam and protect your domain from being used for phishing or other malicious activities.




**Question:** How do I verify my domain for email sending?
**Answer:** Domain verification can typically be done through your email service provider's settings. For example, Google Postmaster Tools and Microsoft’s domain verification process provide instructions on how to add verification records to your DNS.




**Question:** Why is a one-click unsubscribe important?
**Answer:** A one-click unsubscribe option is crucial for maintaining compliance with email marketing regulations and reducing the likelihood of your emails being marked as spam, which can damage your sender reputation.




**Question:** How often should I clean my email list?
**Answer:** It's recommended to clean your email list at least every three to six months to remove inactive subscribers and focus on engaging with those who are interested in your content.




**Question:** What can I do if my emails are still going to spam?
**Answer:** If your emails are still going to spam, review your SPF, DKIM, and DMARC settings, ensure your content is relevant, and avoid spammy language. Also, monitor your domain’s reputation using tools like Google Postmaster and make necessary adjustments.  



**Question:** How does sending frequency affect email deliverability?
**Answer:  Sending frequency plays a significant role in email deliverability. Maintaining a steady sending pattern helps build trust with email providers. Avoid sudden spikes in volume or frequency, as this may trigger spam filters. Additionally, sending too frequently can overwhelm subscribers and result in high unsubscribe rates or spam complaints. It's best to send emails at a frequency that aligns with your subscribers’ preferences, whether that's weekly, bi-weekly, or monthly.




**Question:** How can I encourage better subscriber engagement?
**Answer:** Send content that is relevant, personalized, and conversational. Ask for authentic responses, include interactive elements, and avoid using misleading or spam-like subject lines.




**Question:** Why are "Link Shorteners" like bit.ly discouraged in emails?

**Answer:** Spammers and phishers frequently use link shorteners to hide malicious URLs. Because of this, spam filters are highly sensitive to them. It is always safer to use your full, transparent URL or a descriptive "hyperlink" (e.g., \[Click Here to Join\]) rather than a shortened string of characters.




**Question:** What is the difference between requirements for regular senders vs. bulk senders?

**Answer:** While all senders should ideally have both, the minimum requirement for standard senders is either **SPF or DKIM**. However, **bulk senders** are now strictly required to have all three: **SPF, DKIM, and DMARC** to ensure deliverability.