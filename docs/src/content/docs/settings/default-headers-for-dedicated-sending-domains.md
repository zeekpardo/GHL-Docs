---
title: "Default Headers for Dedicated Sending Domains"
description: "In this article, we will discuss how to set up default \"From Name\" and \"From Email\" headers for dedicated domains under your account, specifically for Account…"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/U5yPRacIynemNHjod715"
sourceId: "U5yPRacIynemNHjod715"
category: "Settings"
---

In this article, we will discuss how to set up default "From Name" and "From Email" headers for dedicated domains under your account, specifically for Account created domains. These configurations are crucial for ensuring your email communications maintain a professional and consistent identity across all communications.

### **Key Features and Benefits:**

1.  **Customizable Email Headers**: This feature allows you to set specific default headers for email addresses tied to your dedicated domains, enhancing brand consistency.
2.  **Automatic Fallback Mechanism**: If custom headers are not provided, the system will apply default headers, ensuring that emails are still sent properly.
3.  **Improved Email Deliverability**: Ensuring the correct headers are set up helps improve email deliverability and reduces the chances of emails being flagged as spam.

### **How to Set Up Default Headers:**

Follow the simple steps below to configure default email headers for your account-created domains:

**1\. Access Account Settings**: Begin by navigating to the Account Settings (located in the bottom left) in your account dashboard.

**2\. Email Service Configuration**: Go to the "Email Services" section and click on "SMTP Service."

**3\. Set Up Dedicated Domain**: Choose the "Dedicated Domain and IP" option to proceed.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdH1tRmk2Sea3ZK_rucJMyI4jMuLspGubgb_bf4zNdaADO8lC5gUm82i7oNUzTyRmqf5iGTdEguZH1hVdZVw2N-d1hSa6_kfgsVE9jE-1QCQGoz6UQBda98GWW9lgqnz0xWzjBT?key=m0hQTzyLjnzp4TIievrXwzNM)

**4\. Set Headers**: Under the dedicated domain section, you will find an option to configure the "From Name" and "From Email" headers. This is where you can input your default email sender information.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfCe-3feeYASMvT25RtdexbvgzDNefPn97xm90SNipNof9C9IKe57a54GgRPhrXgZ-TvShv_07K5xzDZohTMh_IvPcY43Lw4s1tSAmKFG-sPbA2suocuPsmdH6AkW8Nwdw314qrhQ?key=m0hQTzyLjnzp4TIievrXwzNM)

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXf0RkCGj84yHmNApffUgNXbUUG6u9L0RpZ59QnoLuHM2r5BTWX7gNOSB_35QvzpTGhR2db3BdMivOnI0W9xe2o2VBGIQqkofNUwY9nPZh87wsdkd-Tw9q2vieVpFxy9NiR5tpfV?key=m0hQTzyLjnzp4TIievrXwzNM)

### **Fallback Header Activation:**

1.  **DMARC Failure Activation**: A fallback header applies only when there is a failure in the DMARC alignment (based on SPF/DKIM logic). This ensures that the fallback header is only triggered under these conditions, preserving your custom header settings when they are available.
2.  **Trigger When No Custom Header is Provided**: If users fail to specify a custom "From Name" or "From Email" and DMARC alignment fails, the system will automatically apply the fallback header. This guarantees that emails will still be sent properly, even in the absence of custom configurations.

### **Pro Tips:**

-   **Consistency Is Key**: Always ensure that your custom "From Name" and "From Email" reflect your company's branding. Consistent branding across your email communications will help increase recognition and trust with recipients.
-   **DMARC Settings**: It’s important to regularly check and maintain your DMARC settings to ensure that your emails continue to pass the necessary authentication checks, minimizing the risk of being flagged as spam.
-   **Monitor Fallbacks**: If the fallback header is being triggered frequently, consider adjusting your email settings or ensuring that the correct headers are specified for your emails.

### **FAQ's:**




**Question:** What happens if I don’t set a custom "From Name" or "From Email"?

**Answer:** If no custom headers are provided, the system will apply the fallback header automatically if DMARC alignment fails. This ensures your emails are still sent with a valid sender identity.




**Question:** What does DMARC failure mean?

**Answer:** DMARC failure occurs when the authentication checks for SPF (Sender Policy Framework) or DKIM (DomainKeys Identified Mail) do not align properly with the domain from which the email is being sent, potentially causing the email to be flagged as spam.


**Question:  How do I know if my DMARC settings are correct?

**Answer:** Regularly check your domain’s DNS settings and run tests to ensure that your SPF and DKIM configurations are correct. If DMARC fails, review the logs and adjust your settings as necessary.




**Question:** Will using the fallback header affect my email deliverability?

**Answer:** Using the fallback header in case of DMARC failure should not significantly impact your email deliverability, as it ensures emails are sent even when there is a configuration issue. However, it's recommended to address any underlying DMARC issues to avoid reliance on fallback headers.




**Question:** How often should I review my header and DMARC setup?

**Answer:** It’s recommended to review settings quarterly, or whenever you change DNS, email providers, or sending infrastructure, to ensure ongoing compliance and deliverability.




**Question:** Do I need a Dedicated Domain to use custom headers?

**Answer:** Yes. Custom default headers apply only to account-created **dedicated domains**. Shared domains cannot be customized this way and may rely heavily on fallback behavior.




**Question:** How can I ensure consistent branding across emails?
**Answer:** Always set a custom "From Name" and "From Email" that reflect your brand. Regularly monitor DMARC and fallback triggers to maintain consistent sender identity.




**Question:** How can I ensure consistent branding across emails?

**Answer:** Always set a custom "From Name" and "From Email" that reflect your brand. Regularly monitor DMARC and fallback triggers to maintain consistent sender identity.