---
title: "Bounce Classification Codes and Definitions"
description: "Email Bounce Classification is a powerful tool designed to help businesses monitor, classify, and resolve email delivery issues. By identifying the causes of…"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/VkPYZiTwGpMQzE95C3qn"
sourceId: "VkPYZiTwGpMQzE95C3qn"
category: "Email & SMTP"
---

Email Bounce Classification is a powerful tool designed to help businesses monitor, classify, and resolve email delivery issues. By identifying the causes of bounced emails, it empowers users to optimize their email campaigns for better deliverability. This article will guide you through the key features, benefits, and steps to effectively use the Email Bounce Classification feature to ensure emails reach your recipients' inboxes.

**Key Features and Benefits:**

-   **Bounce Summary Overview:** This feature provides detailed metrics on total permanent bounces, bounce rate, ESP/ISP blocks, and delivery rates, allowing you to assess email performance.
-   **Detailed Bounce Classification:** Breaks down bounces by the email service provider (e.g., Gmail, Google Workspace, Apple), bounce category (Mailbox Full, DMARC, Sender Reputation, Internal Errors, etc.), and status/error codes, offering precise insights into delivery failures.
-   **ESP/ISP Block Tracking:** Tracks blocks by email providers like Outlook or Google Workspace due to policy violations or spam-related issues, helping users take action with external troubleshooting links.
-   **Advanced Filters:** Refine reports using filters like sending domain, email service provider, email type, or sending IP to drill down on specific issues.
-   **Actionable Troubleshooting:** Provides direct links and guidance to resolve bounce issues like blacklist problems or misconfigured DNS records, improving email deliverability.

**How to Use the Email Bounce Classification Feature:**

**Access the Dashboard:**Navigate to Settings > email services module within . Look for the "Bounce Classification" section to access a comprehensive overview of your email bounces.

![](<https://assets2.modalsupport.net/1764005741014-Captura de pantalla 2025-11-24 123534.png>)

**Review Metrics:** Examine key metrics such as total permanent bounces, delivery rates, and bounce rates to understand your overall email performance.

**Use Filters:** Refine your report using advanced filters, such as selecting specific sending domains, email service providers, or error types to narrow down the exact causes of delivery issues.

![](<https://assets2.modalsupport.net/1764005764734-Captura de pantalla 2025-11-24 123557.png>)

**Analyze Bounce Details:** Delve into specific bounce classifications, reviewing error codes, status codes, and categories like DMARC failures or mailbox-related issues. Each category will include a definition and potential resolution tips.

**Resolve Issues:** Follow the actionable guidance provided with each bounce reason. For instance, if there is a DNS issue, the system will link you to resources for correcting SPF/DKIM/DMARC records or for resolving blacklist problems.

**Monitor Blocks:** Pay attention to ESP/ISP blocks by providers like Outlook or Gmail, and use the links provided to troubleshoot and unblock IPs or domains if necessary.

Below is a detailed breakdown of these codes, covering the causes of the issues and practical solutions to resolve them effectively. Use this guide to quickly identify and fix any delivery problems you may encounter.

## **Blocked**

**Category**  

**Code**  

**Enhanced Code**  

**Definition**  

Blocked  

554  

5.2.3  

Your email was blocked because there's a policy or rule in place that's preventing the email from being delivered. This could be related to mailbox quotas, email size limits, or specific policies configured by the organization  

**DMARC**  
The message failed DMARC authentication because the "From" header does not align with the domains verified by SPF/DKIM.

**Resolution Tips:**

-   Ensure the "From" address aligns with the sending domain.
-   Confirm that SPF and DKIM are properly set up for the sending domain.

**Category**  

**Code**  

**Enhanced Code**  

**Definition**  

DMARC  

509  

5.7.509  

The message was rejected by the recipient'semail provider because it did not pass the DMARC. Ensure that the "From" header domain matches or aligns with the SPF/DKIM-validated domains.  

DMARC  

550  

5.0.0  

The message was rejected by the recipient's email provider because it did not pass the DMARC. Ensure that the "From" header domain matches or aligns with the SPF/DKIM-validated domains.  

DMARC  

550  

5.7.20  

The message was rejected by the recipient's email provider because it did not pass the DMARC. Ensure that the "From" header domain matches or aligns with the SPF/DKIM-validated domains.  

DMARC  

550  

5.7.26  

The message was rejected by the recipient's email provider because it did not pass the DMARC. Ensure that the "From" header domain matches or aligns with the SPF/DKIM-validated domains.  

DMARC  

550  

5.7.5  

The message was rejected by the recipient's email provider because it did not pass the DMARC. Ensure that the "From" header domain matches or aligns with the SPF/DKIM-validated domains.  

DMARC  

550  

5.7.5  

The message was rejected by the recipient's email provider because it did not pass the DMARC. Ensure that the "From" header domain matches or aligns with the SPF/DKIM-validated domains.  

DMARC  

550  

5.7.509  

The message was rejected by the recipient's email provider because it did not pass the DMARC. Ensure that the "From" header domain matches or aligns with the SPF/DKIM-validated domains.  

DMARC  

550  

5.7.6  

The message was rejected by the recipient's email provider because it did not pass the DMARC. Ensure that the "From" header domain matches or aligns with the SPF/DKIM-validated domains.  

DMARC  

550  

5.7.8  

The message was rejected by the recipient's email provider because it did not pass the DMARC. Ensure that the "From" header domain matches or aligns with the SPF/DKIM-validated domains.  

DMARC  

550  

5.7.9  

The message was rejected by the recipient's email provider because it did not pass the DMARC. Ensure that the "From" header domain matches or aligns with the SPF/DKIM-validated domains.  

DMARC  

550  

Missing  

The message was rejected by the recipient's email provider because it did not pass the DMARC. Ensure that the "From" header domain matches or aligns with the SPF/DKIM-validated domains.  

DMARC  

553  

\-  

The message was rejected by the recipient's email provider because it did not pass the DMARC. Ensure that the "From" header domain matches or aligns with the SPF/DKIM-validated domains.  

DMARC  

554  

5.0.0  

The message was rejected by the recipient's email provider because it did not pass the DMARC. Ensure that the "From" header domain matches or aligns with the SPF/DKIM-validated domains.  

DMARC  

554  

5.7.5  

The message was rejected by the recipient's email provider because it did not pass the DMARC. Ensure that the "From" header domain matches or aligns with the SPF/DKIM-validated domains.  

DMARC  

555  

5.7.5  

The message was rejected by the recipient's email provider because it did not pass the DMARC. Ensure that the "From" header domain matches or aligns with the SPF/DKIM-validated domains.

**Invalid Address**This means you tried to send a message to a non-existent email address. The recipient may have entered an incorrect address or made a typo.

**Resolution Tips:**

-   Use Email Validation to verify email addresses before sending.

**Category**  

**Code**  

**Enhanced Code**  

**Definition**  

Invalid address  

450  

4.1.1  

The recipient's email address is invalid or does not exist.  

Invalid address  

500  

5.0.0  

The recipient's email address is invalid or does not exist.  

Invalid address  

500  

5.1.1  

The recipient's email address is invalid or does not exist.  

Invalid address  

501  

5.1.1  

The recipient's email address is invalid or does not exist.  

Invalid address  

501  

5.1.3  

The recipient's email address is invalid or does not exist.  

Invalid address  

501  

5.1.3  

The recipient's email address is invalid or does not exist.  

Invalid address  

501  

5.5.4  

The recipient's email address is invalid or does not exist.  

Invalid address  

501  

5.7.0  

The recipient's email address is invalid or does not exist.  

Invalid address  

505  

\-  

The recipient's email address is invalid or does not exist.  

Invalid address  

508  

5.1.1  

The recipient's email address is invalid or does not exist.  

Invalid address  

511  

5.1.1  

The recipient's email address is invalid or does not exist.  

Invalid address  

511  

\-  

The recipient's email address is invalid or does not exist.  

Invalid address  

521  

5.3.2  

The recipient's email address is invalid or does not exist.  

Invalid address  

522  

5.7.1  

The recipient's email address is invalid or does not exist.  

Invalid address  

525  

5.7.13  

The recipient's email address is invalid or does not exist.  

Invalid address  

540  

5.7.1  

The recipient's email address is invalid or does not exist.  

Invalid address  

542  

\-  

The recipient's email address is invalid or does not exist.  

Invalid address  

550  

5.0.0  

The recipient's email address is invalid or does not exist.  

Invalid address  

550  

5.0.0  

The recipient's email address is invalid or does not exist.  

Invalid address  

550  

5.0.1  

The recipient's email address is invalid or does not exist.  

Invalid address  

550  

5.0.350  

The recipient's email address is invalid or does not exist.  

Invalid address  

550  

5.1.0  

The recipient's email address is invalid or does not exist.  

Invalid address  

550  

5.1.1  

The recipient's email address is invalid or does not exist.  

Invalid address  

550  

5.1.1  

The recipient's email address is invalid or does not exist.  

Invalid address  

550  

5.1.1  

The recipient's email address is invalid or does not exist.  

Invalid address  

550  

5.1.10  

The recipient's email address is invalid or does not exist.  

Invalid address  

550  

5.1.10  

The recipient's email address is invalid or does not exist.  

Invalid address  

550  

5.1.181  

The recipient's email address is invalid or does not exist.  

Invalid address  

550  

5.1.2  

The recipient's email address is invalid or does not exist.  

Invalid address  

550  

5.1.2  

The recipient's email address is invalid or does not exist.  

Invalid address  

550  

5.1.351  

The recipient's email address is invalid or does not exist.  

Invalid address  

550  

5.1.351  

The recipient's email address is invalid or does not exist.  

Invalid address  

550  

5.1.6  

The recipient's email address is invalid or does not exist.  

Invalid address  

550  

5.2.1  

The email account that you tried to reach is inactive.  

Invalid address  

550  

5.2.1  

The recipient's email address is invalid or does not exist.  

Invalid address  

550  

5.2.14  

The recipient's email address is invalid or does not exist.  

Invalid address  

550  

5.2.5  

The recipient's email address is invalid or does not exist.  

Invalid address  

550  

5.3.0  

The recipient's email address is invalid or does not exist.  

Invalid address  

550  

5.3.2  

The recipient's email address is invalid or does not exist.  

Invalid address  

550  

5.3.2  

The recipient's email address is invalid or does not exist.  

Invalid address  

550  

5.4.310  

The recipient's email address is invalid or does not exist.  

Invalid address  

550  

5.4.312  

The recipient's email address is invalid or does not exist.  

Invalid address  

550  

5.4.350  

The recipient's email address is invalid or does not exist.  

Invalid address  

550  

5.4.355  

The recipient's email address is invalid or does not exist.  

Invalid address  

550  

5.5.0  

The recipient's email address is invalid or does not exist.  

Invalid address  

550  

5.5.1  

The recipient's email address is invalid or does not exist.  

Invalid address  

550  

5.5.2  

The recipient's email address is invalid or does not exist.  

Invalid address  

550  

5.7.0  

The recipient's email address is invalid or does not exist.  

Invalid address  

550  

5.7.1  

The recipient's email address is invalid or does not exist.  

Invalid address  

550  

5.7.100  

The recipient's email address is invalid or does not exist.  

Invalid address  

550  

5.7.13  

The recipient's email address is invalid or does not exist.  

Invalid address  

550  

5.8.1  

The recipient's email address is invalid or does not exist.  

Invalid address  

550  

\-  

The recipient's email address is invalid or does not exist.  

Invalid address  

550  

\-  

The recipient's email address is either invalid or does not exist and is already on the bounce list. Please revalidate the email address and try again.  

Invalid address  

550  

\-  

The recipient's email address is invalid or does not exist.  

Invalid address  

550  

\-  

These errors are originating from the recipient's end due to a misconfiguration or an outage on their MX server.  

Invalid address  

551  

5.1.1  

The recipient's email address is invalid or does not exist.  

Invalid address  

551  

5.1.1  

The recipient's email address is invalid or does not exist.  

Invalid address  

551  

\-  

The recipient's email address is invalid or does not exist.  

Invalid address  

552  

5.1.1  

The recipient's email address is invalid or does not exist.  

Invalid address  

553  

5.1.1  

The recipient's email address is invalid or does not exist.  

Invalid address  

553  

5.1.3  

The recipient's email address is invalid or does not exist.  

Invalid address  

553  

5.3.0  

The recipient's email address is invalid or does not exist.  

Invalid address  

553  

5.3.0  

The recipient's email address is invalid or does not exist.  

Invalid address  

553  

5.5.3  

The recipient's email address is invalid or does not exist.  

Invalid address  

553  

5.7.1  

The recipient's email address is invalid or does not exist.  

Invalid address  

553  

5.7.2  

The recipient's email address is invalid or does not exist.  

Invalid address  

554  

5.0.0  

The recipient's email address is invalid or does not exist.  

Invalid address  

554  

5.1.1  

The recipient's email address is invalid or does not exist.  

Invalid address  

554  

5.1.2  

The recipient's email address is invalid or does not exist.  

Invalid address  

554  

5.2.1  

The recipient's email address is invalid or does not exist.  

Invalid address  

554  

5.2.2  

The recipient's email address is invalid or does not exist.  

Invalid address  

554  

5.5.1  

The recipient's email address is invalid or does not exist.  

Invalid address  

554  

5.7.1  

The recipient's email address is invalid or does not exist.  

Invalid address  

554  

5.7.7  

The recipient's email address is invalid or does not exist.  

Invalid address  

554  

\-  

The recipient's email address is invalid or does not exist.  

Invalid address  

556  

5.1.1  

The recipient's email address is invalid or does not exist.  

Invalid address  

572  

\-  

The recipient's email address is invalid or does not exist.  

Invalid address  

577  

5.1.1  

The recipient's email address is invalid or does not exist.  

Invalid address  

585  

5.1.1  

The recipient's email address is invalid or does not exist.  

Invalid address  

605  

\-  

The recipient's email address is already on the bounce list. Please revalidate the email address and try again.  

Invalid address  

612  

\-  

These errors are originating from the recipient's end due to a misconfiguration or an outage on their MX server.  

**Mailbox**This error suggests that the email address you attempted to send a message to does not have an active mailbox.

**Resolution Tips:**

-   Verify email addresses using Email Validation before sending messages.

**Category**  

**Code**  

**Enhanced Code**  

**Definition**  

Mailbox  

450  

4.2.2  

The recipient's domain has no mailbox and does not accept mail. Please send it to a valid email address.  

Mailbox  

452  

\-  

The recipient's domain has no mailbox and does not accept mail. Please send it to a valid email address.  

Mailbox  

498  

\-  

The recipient's domain has no mailbox and does not accept mail. Please send it to a valid email address.  

Mailbox  

511  

\-  

The recipient's domain has no mailbox and does not accept mail. Please send it to a valid email address.  

Mailbox  

516  

5.1.6  

The recipient's domain has no mailbox and does not accept mail. Please send it to a valid email address.  

Mailbox  

522  

5.2.2  

The recipient's domain has no mailbox and does not accept mail. Please send it to a valid email address.  

Mailbox  

550  

4.2.2  

The recipient's domain has no mailbox and does not accept mail. Please send it to a valid email address.  

Mailbox  

550  

5.0.350  

The recipient's domain has no mailbox and does not accept mail. Please send it to a valid email address.  

Mailbox  

550  

5.2.0  

The recipient's domain has no mailbox and does not accept mail. Please send it to a valid email address.  

Mailbox  

550  

5.2.2  

The recipient's domain has no mailbox and does not accept mail. Please send it to a valid email address.  

Mailbox  

550  

5.4.6  

The recipient's domain has no mailbox and does not accept mail. Please send it to a valid email address.  

Mailbox  

550  

5.5.0  

The recipient's domain has no mailbox and does not accept mail. Please send it to a valid email address.  

Mailbox  

550  

5.5.1  

The recipient's domain has no mailbox and does not accept mail. Please send it to a valid email address.  

Mailbox  

552  

5.1.1  

The recipient's domain has no mailbox and does not accept mail. Please send it to a valid email address.  

Mailbox  

552  

5.2.1  

The recipient's domain has no mailbox and does not accept mail. Please send it to a valid email address.  

Mailbox  

552  

5.5.2  

The recipient's domain has no mailbox and does not accept mail. Please send it to a valid email address.  

Mailbox  

552  

\-  

The recipient's domain has no mailbox and does not accept mail. Please send it to a valid email address.  

Mailbox  

553  

5.3.1  

The recipient's domain has no mailbox and does not accept mail. Please send to valid email address.  

Mailbox  

554  

5.1.1  

The recipient's domain has no mailbox and does not accept mail. Please send to valid email address.

**Mailbox Full**

A "Mailbox Full" bounce happens when the recipient's inbox has reached its storage capacity and is unable to receive new messages. This is typically a temporary issue, and emails can be delivered once the recipient clears space or increases their mailbox size.

**Category**  

**Code**  

**Enhanced Code**  

**Definition**  

Mailbox Full  

452  

4.1.1  

The recipient's mailbox is full and cannot accept new emails.  

Mailbox Full  

452  

4.2.2  

The recipient's mailbox is full and cannot accept new emails.  

Mailbox Full  

550  

5.2.2  

The recipient's mailbox is full and cannot accept new emails.  

Mailbox Full  

552  

5.2.2  

The recipient's mailbox is full and cannot accept new emails.  

Mailbox Full  

552  

5.2.2  

The recipient's mailbox is full and cannot accept new emails.  

Mailbox Full  

552  

\-  

The recipient's mailbox is full and cannot accept new emails.

##   

## **Rate Limit**

**Category**  

**Code**  

**Enhanced Code**  

**Definition**  

Rate Limit  

221  

\-  

The recipient's server has denied your email. You’re sending mail to is getting too many emails too fast. Please contact the recipient using an alternative method.  

Rate Limit  

550  

4.2.1  

The recipient's server has denied your email. You’re sending mail to is getting too many emails too fast. Please contact the recipient using an alternative method.  

Rate Limit  

550  

5.2.1  

The recipient's server has denied your email. You’re sending mail to is getting too many emails too fast. Please contact the recipient using an alternative method.  

Rate Limit  

550  

5.2.122  

The recipient's server has denied your email. You’re sending mail to is getting too many emails too fast. Please contact the recipient using an alternative method.  

Rate Limit  

554  

5.2.121  

The recipient's server has denied your email. You’re sending mail to is getting too many emails too fast. Please contact the recipient using an alternative method.  

Rate Limit  

554  

5.2.122  

The recipient's server has denied your email. You’re sending mail to is getting too many emails too fast. Please contact the recipient using an alternative method.  

* * *

## **Recipient Error**

**Category**  

**Code**  

**Enhanced Code**  

**Definition**  

Recipient Error  

450  

\-  

The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method.  

Recipient Error  

502  

\-  

The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method.  

Recipient Error  

503  

\-  

The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method.  

Recipient Error  

510  

\-  

The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method.  

Recipient Error  

521  

5.3.0  

Cloudflare’s email routing service indicates that the message encountered an issue related to Cloudflare’s email routing or processing.  

Recipient Error  

530  

5.3.0  

The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method.  

Recipient Error  

530  

5.7.0  

The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method.  

Recipient Error  

530  

5.7.1  

The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method.  

Recipient Error  

530  

5.7.1  

The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method.  

Recipient Error  

530  

5.7.57  

The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method.  

Recipient Error  

530  

\-  

The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method.  

Recipient Error  

535  

\-  

The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method.  

Recipient Error  

541  

5.4.1  

The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method.  

Recipient Error  

550  

4.4.0  

The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method.  

Recipient Error  

550  

4.4.2  

The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method.  

Recipient Error  

550  

4.4.7  

The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method.  

Recipient Error  

550  

5.1.3  

The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method.  

Recipient Error  

550  

5.1.9  

The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method.  

Recipient Error  

550  

5.3.5  

The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method.  

Recipient Error  

550  

5.4.103  

The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method.  

Recipient Error  

550  

5.4.108  

The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method.  

Recipient Error  

550  

5.4.142  

The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method.  

Recipient Error  

550  

5.4.300  

The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method.  

Recipient Error  

550  

5.4.315  

The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method.  

Recipient Error  

550  

5.4.316  

The mail server was unable to deliver the message after repeated attempts. The message eventually "expired" after exceeding the time limit set for retries. This usually happens when the recipient’s server refuses the connection or is unreachable for an extended period.  

Recipient Error  

550  

5.4.317  

The mail server was unable to deliver the message after repeated attempts. The message eventually "expired" after exceeding the time limit set for retries. This usually happens when the recipient’s server refuses the connection or is unreachable for an extended period.  

Recipient Error  

550  

5.4.4  

The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method.  

Recipient Error  

550  

5.4.7  

The email server has been trying to deliver the message for an extended period but has not been able to do so within the allowable time limit. The email has now been permanently rejected.  

Recipient Error  

550  

5.5.5  

The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method.  

Recipient Error  

550  

5.7.105  

The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method.  

Recipient Error  

550  

5.7.124  

The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method.  

Recipient Error  

550  

5.7.128  

The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method.  

Recipient Error  

550  

5.7.129  

The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method.  

Recipient Error  

550  

5.7.133  

The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method.  

Recipient Error  

550  

5.7.134  

The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method.  

Recipient Error  

550  

5.7.136  

The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method.  

Recipient Error  

550  

5.7.193  

The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method.  

Recipient Error  

550  

5.7.230  

The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method.  

Recipient Error  

550  

5.7.367  

The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method.  

Recipient Error  

550  

5.7.51  

The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method.  

Recipient Error  

550  

5.7.520  

The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method.  

Recipient Error  

550  

5.7.54  

The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method.  

Recipient Error  

550  

5.7.64  

The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method.  

Recipient Error  

550  

5.7.703  

The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method.  

Recipient Error  

550  

5.7.705  

The recipient's tenant in Microsoft 365 (or Office 365) has exceeded a specific limit or threshold, leading to the rejection of further email deliveries. This threshold could relate to various factors, such as the number of messages sent, the volume of inbound messages, or security thresholds based on suspicious activity.  

Recipient Error  

550  

5.7.900  

The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method.  

Recipient Error  

550  

5.7.902  

The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method.  

Recipient Error  

550  

5.7.929  

The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method.  

Recipient Error  

550  

5.7.987  

The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method.  

Recipient Error  

550  

5.7.999  

The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method.  

Recipient Error  

550  

5.8.2  

The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method.  

Recipient Error  

551  

\-  

The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method.  

Recipient Error  

552  

5.7.1  

The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method.  

Recipient Error  

553  

5.0.0  

The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method.  

Recipient Error  

553  

5.1.8  

The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method.  

Recipient Error  

554  

4.3.5  

The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method.  

Recipient Error  

554  

5.1.0  

The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method.  

Recipient Error  

554  

5.1.2  

The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method.  

Recipient Error  

554  

5.2.0  

The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method.  

Recipient Error  

554  

5.4.6  

The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method.  

Recipient Error  

554  

5.5.4  

The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method.  

Recipient Error  

554  

5.7.1  

The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method.  

Recipient Error  

554  

5.7.105  

The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method.  

Recipient Error  

555  

5.7.1  

The email platform you are trying to use is not supported for communication with Pixieset's systems. This error suggests that certain types of emails or configurations (e.g., unsupported email clients or formats) are not permitted by Pixieset's mail system.  

Recipient Error  

556  

5.7.1  

The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method.  

Recipient Error  

556  

\-  

The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method.  

Recipient Error  

571  

\-  

The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method.  

Recipient Error  

577  

5.7.7  

The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method.  

Recipient Error  

579  

\-  

The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method.  

Recipient Error  

701  

\-  

The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method.  

* * *

## **Rejection**

**Category**  

**Code**  

**Enhanced Code**  

**Definition**  

Rejection  

450  

4.1.8  

These errors indicate that the sending domain does not have valid DNS records. To resolve these issues, please ensure that the sending domain is verified and that the necessary DNS records are added with your DNS provider. [Follow these instructions to resolve this issue.](https://help.leadconnectorhq.com/en/support/solutions/articles/155000002223)  

Rejection  

501  

5.1.0  

These errors indicate that the sending domain does not have valid DNS records. To resolve these issues, please ensure that the sending domain is verified and that the necessary DNS records are added with your DNS provider. [Follow these instructions to resolve this issue.](https://help.leadconnectorhq.com/en/support/solutions/articles/155000002223)  

Rejection  

501  

5.1.7  

These errors indicate that the sending domain does not have valid DNS records. To resolve these issues, please ensure that the sending domain is verified and that the necessary DNS records are added with your DNS provider. [Follow these instructions to resolve this issue.](https://help.leadconnectorhq.com/en/support/solutions/articles/155000002223)  

Rejection  

501  

5.1.8  

These errors indicate that the sending domain does not have valid DNS records. To resolve these issues, please ensure that the sending domain is verified and that the necessary DNS records are added with your DNS provider. [Follow these instructions to resolve this issue.](https://help.leadconnectorhq.com/en/support/solutions/articles/155000002223)  

Rejection  

501  

5.2.0  

These errors indicate that the sending domain does not have valid DNS records. To resolve these issues, please ensure that the sending domain is verified and that the necessary DNS records are added with your DNS provider. [Follow these instructions to resolve this issue.](https://help.leadconnectorhq.com/en/support/solutions/articles/155000002223)  

Rejection  

501  

NA  

These errors indicate that the sending domain does not have valid DNS records. To resolve these issues, please ensure that the sending domain is verified and that the necessary DNS records are added with your DNS provider. [Follow these instructions to resolve this issue.](https://help.leadconnectorhq.com/en/support/solutions/articles/155000002223)  

Rejection  

533  

5.7.1  

These errors indicate that the sending domain does not have valid DNS records. To resolve these issues, please ensure that the sending domain is verified and that the necessary DNS records are added with your DNS provider. [Follow these instructions to resolve this issue.](https://help.leadconnectorhq.com/en/support/solutions/articles/155000002223)  

Rejection  

550  

5.1.0  

These errors indicate that the sending domain does not have valid DNS records. To resolve these issues, please ensure that the sending domain is verified and that the necessary DNS records are added with your DNS provider. [Follow these instructions to resolve this issue.](https://help.leadconnectorhq.com/en/support/solutions/articles/155000002223)  

Rejection  

550  

5.1.0  

These errors indicate that the sending domain does not have valid DNS records. To resolve these issues, please ensure that the sending domain is verified and that the necessary DNS records are added with your DNS provider. [Follow these instructions to resolve this issue.](https://help.leadconnectorhq.com/en/support/solutions/articles/155000002223)  

Rejection  

550  

5.1.7  

These errors indicate that the sending domain does not have valid DNS records. To resolve these issues, please ensure that the sending domain is verified and that the necessary DNS records are added with your DNS provider. [Follow these instructions to resolve this issue.](https://help.leadconnectorhq.com/en/support/solutions/articles/155000002223)  

Rejection  

550  

5.1.8  

These errors indicate that the sending domain does not have valid DNS records. To resolve these issues, please ensure that the sending domain is verified and that the necessary DNS records are added with your DNS provider. [Follow these instructions to resolve this issue.](https://help.leadconnectorhq.com/en/support/solutions/articles/155000002223)  

Rejection  

550  

5.2.3  

The email message is too large for the recipient, exceeding their size limit.  

Rejection  

550  

5.4.0  

The email has been bounced back due to the email message exceeding the maximum number of allowed hops (transfers between mail servers). This usually happens when there is a mail loop or when the message has passed through too many servers.  

Rejection  

550  

5.4.12  

The email has been bounced back due to the email message exceeding the maximum number of allowed hops (transfers between mail servers). This usually happens when there is a mail loop or when the message has passed through too many servers.  

Rejection  

550  

5.4.14  

The email has been bounced back due to the email message exceeding the maximum number of allowed hops (transfers between mail servers). This usually happens when there is a mail loop or when the message has passed through too many servers.  

Rejection  

550  

5.4.6  

Your email was blocked by the recipient's email provider because a mail loop was detected.  

Rejection  

550  

5.5.2  

These errors indicate that the sending domain does not have valid DNS records. To resolve these issues, please ensure that the sending domain is verified and that the necessary DNS records are added with your DNS provider. [Follow these instructions to resolve this issue.](https://help.leadconnectorhq.com/en/support/solutions/articles/155000002223)  

Rejection  

550  

5.7.13  

These errors indicate that the sending domain does not have valid DNS records. To resolve these issues, please ensure that the sending domain is verified and that the necessary DNS records are added with your DNS provider. [Follow these instructions to resolve this issue.](https://help.leadconnectorhq.com/en/support/solutions/articles/155000002223)  

Rejection  

550  

5.7.21  

These errors indicate that the sending domain does not have valid DNS records. To resolve these issues, please ensure that the sending domain is verified and that the necessary DNS records are added with your DNS provider. [Follow these instructions to resolve this issue.](https://help.leadconnectorhq.com/en/support/solutions/articles/155000002223)  

Rejection  

550  

5.7.23  

These errors indicate that the sending domain does not have valid DNS records. To resolve these issues, please ensure that the sending domain is verified and that the necessary DNS records are added with your DNS provider. [Follow these instructions to resolve this issue.](https://help.leadconnectorhq.com/en/support/solutions/articles/155000002223)  

Rejection  

550  

5.7.23  

These errors indicate that the sending domain does not have valid DNS records. To resolve these issues, please ensure that the sending domain is verified and that the necessary DNS records are added with your DNS provider. [Follow these instructions to resolve this issue.](https://help.leadconnectorhq.com/en/support/solutions/articles/155000002223)  

Rejection  

550  

5.7.23  

These errors indicate that the sending domain does not have valid DNS records. To resolve these issues, please ensure that the sending domain is verified and that the necessary DNS records are added with your DNS provider. [Follow these instructions to resolve this issue.](https://help.leadconnectorhq.com/en/support/solutions/articles/155000002223)  

Rejection  

550  

5.7.24  

These errors indicate that the sending domain does not have valid DNS records. To resolve these issues, please ensure that the sending domain is verified and that the necessary DNS records are added with your DNS provider. [Follow these instructions to resolve this issue.](https://help.leadconnectorhq.com/en/support/solutions/articles/155000002223)  

Rejection  

550  

5.7.24  

These errors indicate that the sending domain does not have valid DNS records. To resolve these issues, please ensure that the sending domain is verified and that the necessary DNS records are added with your DNS provider. [Follow these instructions to resolve this issue.](https://help.leadconnectorhq.com/en/support/solutions/articles/155000002223)  

Rejection  

550  

5.7.26  

These errors indicate that the sending domain does not have valid DNS records. To resolve these issues, please ensure that the sending domain is verified and that the necessary DNS records are added with your DNS provider. [Follow these instructions to resolve this issue.](https://help.leadconnectorhq.com/en/support/solutions/articles/155000002223)  

Rejection  

550  

5.7.27  

These errors indicate that the sending domain does not have valid DNS records. To resolve these issues, please ensure that the sending domain is verified and that the necessary DNS records are added with your DNS provider. [Follow these instructions to resolve this issue.](https://help.leadconnectorhq.com/en/support/solutions/articles/155000002223)  

Rejection  

550  

5.7.368  

These errors indicate that the sending domain does not have valid DNS records. To resolve these issues, please ensure that the sending domain is verified and that the necessary DNS records are added with your DNS provider. [Follow these instructions to resolve this issue.](https://help.leadconnectorhq.com/en/support/solutions/articles/155000002223)  

Rejection  

550  

5.7.57  

These errors indicate that the sending domain does not have valid DNS records. To resolve these issues, please ensure that the sending domain is verified and that the necessary DNS records are added with your DNS provider. [Follow these instructions to resolve this issue.](https://help.leadconnectorhq.com/en/support/solutions/articles/155000002223)  

Rejection  

553  

5.1.8  

These errors indicate that the sending domain does not have valid DNS records. To resolve these issues, please ensure that the sending domain is verified and that the necessary DNS records are added with your DNS provider. [Follow these instructions to resolve this issue.](https://help.leadconnectorhq.com/en/support/solutions/articles/155000002223)  

Rejection  

554  

5.1.8  

These errors indicate that the sending domain does not have valid DNS records. To resolve these issues, please ensure that the sending domain is verified and that the necessary DNS records are added with your DNS provider. [Follow these instructions to resolve this issue.](https://help.leadconnectorhq.com/en/support/solutions/articles/155000002223)  

Rejection  

554  

NA  

Possible reasons: the right of the @ in the MAIL FROM does not appear to be valid or poor reputation of a sending domain.

**Sender ReputationHow to Fix: Email Blocked Due to Potential Spam or Malicious Activity**

1.  **Check IP and Domain Blacklists**Utilize tools like a **Blacklist Checker** to determine if your IP or domain has been flagged.  
    If listed, follow the **delisting process** provided by the respective **Blacklist Service.**
2.  **Verify DNS Configuration**Ensure the following DNS records are properly configured for your domain:

-   SPF (Sender Policy Framework)
-   DKIM (DomainKeys Identified Mail)
-   DMARC (Domain-based Message Authentication, Reporting, and Conformance)  
    Use tools like **MXToolbox** to verify the SPF, DKIM, and DMARC records are valid.

1.  **Track and Improve Email Reputation**

-   **Microsoft SNDS**: Check your IP reputation with Microsoft services like Outlook and Hotmail.
-   **Google Postmaster Tools**: Monitor how Gmail handles your emails and analyze deliverability metrics.

1.  **Send Emails in Smaller Batches to Build Trust**To avoid issues, gradually increase the volume of emails sent from new or inactive IPs/domains. Start with smaller batches to establish a positive reputation.
2.  **Maintain a Clean Email List**Regularly remove inactive or invalid email addresses to minimize bounces.  
    Utilize email validation tools to ensure your list is clean before launching campaigns.  
    Monitor spam complaints and promptly remove problematic contacts.
3.  **Follow Best Practices for Email Content**

-   Avoid using spam-like language in subject lines (e.g., "Congratulations!!!" or "Act Now!").
-   Balance text and images within your email to avoid sending image-only messages.
-   Ensure all links in your email are secure and not blacklisted.
-   Always include an unsubscribe link in your marketing emails to comply with anti-spam regulations.

### **FAQs for Email Bounce Classification**




**Question:** What is Email Bounce Classification?
**Answer:** Email Bounce Classification is a feature that identifies and categorizes bounced emails based on their causes, allowing users to analyze email delivery issues and optimize their campaigns to reach more recipients effectively.




**Question:** How can I access the Bounce Classification feature?
**Answer:** Go to **Settings > Email Services** in the platform, and locate the "Bounce Classification" section. This will provide an overview of your email bounces along with insights for troubleshooting.




**Question:** What are the main categories of email bounces?
**Answer:** Common categories include:

-   **Mailbox Full**: The recipient’s mailbox is full.
-   **DMARC/Authentication Issues**: Failed authentication due to incorrect DMARC, SPF, or DKIM settings.
-   **Sender Reputation**: Low sender reputation, causing emails to be flagged as spam.
-   **Internal Errors**: Issues on the email provider’s end, leading to delivery failures.




**Question:** How can I filter bounces to investigate specific issues?
**Answer:** Use advanced filters in the Bounce Classification dashboard to narrow down results by:

-   Sending domain
-   Email service provider (ESP/ISP)
-   Email type or sending IP  
    This helps isolate specific issues based on the chosen parameters.




**Question:** What insights does the Bounce Summary provide?
**Answer:** The Bounce Summary gives you a quick view of total permanent bounces, bounce rates, ESP/ISP blocks, and delivery rates, enabling you to assess the performance of your email campaigns at a glance.




**Question:** How do I resolve issues shown in the bounce details?
**Answer:** Each bounce type comes with actionable guidance:

-   **For DNS Issues**: Access links to update SPF/DKIM/DMARC records.
-   **For Blacklist Problems**: Get resources to remove your IP/domain from blacklists.
-   **For ISP Blocks**: Follow external troubleshooting links to contact providers like Outlook or Gmail.




**Question:** Can I track bounces by individual email service providers?
**Answer:** Yes. Bounce Classification breaks down bounces by ESP/ISP, helping identify provider-specific delivery issues.




**Question:** What is the difference between an "Invalid Address" and a "Mailbox" error?

**Answer:** An **Invalid Address** error (often codes 511 or 550) means the email address itself is non-existent or has a typo. A **Mailbox** error indicates that while the domain might exist, it has no active mailbox configured to accept mail.




**Question:** If an email is classified as a "Permanent Bounce," will the system try to send to them again?

**Answer:** No. To protect your sender reputation, the system automatically adds "Hard Bounces" (like Invalid Address) to a suppression list. Attempting to email these addresses repeatedly can lead to your domain being blacklisted by providers like Gmail or Outlook.