---
title: "Troubleshooting Guide: Setting Up SMTP Providers"
description: "Setting up an SMTP provider can greatly improve your email deliverability and ensure that emails sent from your system are processed through a reliable and…"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/G32lu3wA22l3amaCXYlt"
sourceId: "G32lu3wA22l3amaCXYlt"
category: "Troubleshooting"
---

Setting up an SMTP provider can greatly improve your email deliverability and ensure that emails sent from your system are processed through a reliable and trusted email service. However, issues can arise during the integration process. This guide will walk you through common issues and solutions related to SMTP provider setup, helping you troubleshoot and resolve any problems with your email configurations

### FAQ: Troubleshooting SMTP Provider Setup

#### Question: How do I set up a Google/Gmail account as my SMTP provider?


**Answer:Setting up Gmail or Google Workspace (formerly G Suite) as your SMTP provider requires specific configurations to ensure emails are sent securely and efficiently.

**How to fix it:**

1\. Navigate to **Settings > Email Services > Add New Service**.

![](<https://assets2.modalsupport.net/1765453235423-unnamed - 2025-12-11T194029.704.png>)

2\. Select **Google/Gmail** from the available providers.

![](<https://assets2.modalsupport.net/1765453252684-unnamed - 2025-12-11T194048.169.png>)

3\. Follow the on-screen instructions to **authenticate** and link your Gmail account.

4\. Test the SMTP connection to ensure it's working correctly by sending a test email.

**Fix**: If you encounter issues, ensure that **2-step verification** is disabled and that you have entered the correct **SMTP server address** and **port** for Gmail.

#### Question: Why does my SMTP integration show an "Authentication Unsuccessful" error with Microsoft Office 365, even with 2-step verification off?


**Answer:This issue arises due to changes in **Microsoft’s security** for third-party applications. Even with 2-step verification off, Microsoft now requires **SMTP Authentication** to be enabled for third-party email services.

**How to fix it:**

1.  Log into your **Microsoft Office 365** account.
2.  Go to the **Security & Privacy** section and enable **SMTP Authentication** for third-party apps.
3.  In the email service configuration, ensure that the correct **SMTP server address** and **port number** are used.
4.  Test the SMTP connection by sending a test email.

**Fix**: After enabling SMTP authentication, your integration should work without errors. If the issue persists, contact **Outlook support** for further troubleshooting.

#### Question: My Amazon SES SMTP integration is not sending emails. What should I check?


**Answer:Amazon SES requires correct **IAM credentials** and proper **DNS configuration** for email delivery. If emails are not being sent, it could be due to missing or incorrect settings.

**How to fix it:**

1.  Ensure that you are using the **correct SMTP server address** for Amazon SES.
2.  Check that **port 465** is used, as specified in the SES settings.
3.  Verify that your **IAM Username & Password** are correct and properly stored, as they are required for authentication.
4.  If your SES account is in **sandbox mode**, request **production access** through the SES console.
5.  Test the SMTP connection to confirm the setup is working.

**Fix**: Ensure all credentials are accurate and that you have **production access** if necessary. Check SES logs for additional error details.

#### Question: Why can’t I use my free email address (like Gmail) as the SMTP provider?


**Answer:Free email services like Gmail often have **limitations** when used for SMTP integrations, especially when sending a high volume of emails. These services may block or restrict your account if they detect suspicious or mass emailing activity.

**How to fix it:**

1.  Use a **professional email address** or a **dedicated sending domain** to avoid restrictions.
2.  Ensure that your email provider allows for **SMTP relay** and check the **daily email sending limits**.
3.  If you continue using Gmail, ensure that you follow **best practices** like setting up **SPF, DKIM, and DMARC records** to ensure email deliverability.

**Fix**: For better reliability, consider using **dedicated email services** like **Mailgun** or **SendGrid** for higher email volume.

#### Question: My emails haven’t been delivered since setting up SMTP. What could be causing this?


**Answer:If your emails are not being delivered after setting up your SMTP provider, the issue could lie with **DNS settings**, **incorrect email configurations**, or **sending limits** imposed by your email provider.

**How to fix it:**

1.  **Check DNS Records**:  

    -   Verify that your **SPF, DKIM, and DMARC** records are set up correctly in your domain’s DNS settings.
2.  **Test SMTP Settings**:  

    -   Ensure that the **SMTP server address** and **port number** are configured correctly for your chosen provider.
3.  **Verify Sending Limits**:  

    -   Some email providers have **daily sending limits** (e.g., Gmail). Ensure that you haven’t exceeded the limit.
4.  **Check Email Content**:  

    -   Review the content of your email to ensure it isn’t being flagged as **spam** due to certain keywords or attachments.

**Fix**: Make sure all DNS records are properly configured, SMTP settings are correct, and you're within sending limits. If the issue persists, contact **support** for assistance.




**Question:** What ports should I use for different SMTP providers?
**Answer:Different providers use specific ports for secure email delivery:

-   **Gmail/Google Workspace:** 465 (SSL) or 587 (TLS)
-   **Microsoft Outlook/Office 365:** 587 (TLS)
-   **Amazon SES:** 465 (SSL)
-   **Mailgun or SendGrid:** 587 (TLS)  

    **Fix:** Always use the correct port based on your provider’s security protocol to avoid connection errors.




**Question:** How can I test if my SMTP integration is working correctly?

**Answer:Send a test email from the SMTP settings page. If it’s delivered successfully, the configuration is correct.

**Tip:** If the test fails, recheck credentials, ports, and DNS records.




**Question:** I’ve entered all my credentials correctly, but I still get a "Connection Timed Out" error. What is wrong?

**Answer:** A "Connection Timed Out" error usually means your server or local network is being prevented from reaching the SMTP provider's server. This is often caused by a firewall or your hosting provider blocking the specific ports required for email (like 25, 465, or 587).

**How to fix it:**

1.  **Check Port 25:** Many cloud hosting providers (like DigitalOcean, AWS, or Google Cloud) block outbound traffic on Port 25 by default to prevent spam. Switch to Port **587** or **465**.
2.  **Whitelist IP Addresses:** If you are behind a strict corporate firewall, you may need to whitelist the IP addresses of your SMTP provider.
3.  **Check Local Security Software:** Ensure that any antivirus or local firewall software on your server isn't intercepting outbound SMTP traffic.
4.  **Verify Server Connectivity:** Use a command-line tool like telnet or nc to see if your server can actually "talk" to the SMTP host (e.g., telnet smtp.gmail.com 587).

**Fix:** If the connection times out, try switching between Port 587 (TLS) and Port 465 (SSL). If neither works, contact your network administrator or hosting provider to confirm that outbound mail traffic is allowed.




**Question:** Does using a custom SMTP affect my "Unsubscribe" links?

**Answer:** No. Your system will still generate and manage the unsubscribe links. However, using a custom SMTP ensures that the "From" address matches your domain, which builds trust with your recipients and reduces the likelihood of them clicking the "Report Spam" button.