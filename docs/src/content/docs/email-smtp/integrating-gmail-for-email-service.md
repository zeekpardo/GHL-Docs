---
title: "Integrating Gmail for Email Service"
description: "Integrating Gmail as your Email Service provider is one option for sending emails to your leads. This detailed guide explains how to create app-specific…"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/ZCB0feo3SNZytzxwEQCH"
sourceId: "ZCB0feo3SNZytzxwEQCH"
category: "Email & SMTP"
---

Integrating Gmail as your Email Service provider is one option for sending emails to your leads. This detailed guide explains how to create app-specific passwords for accounts with 2-step verification, with an emphasis on integrating Gmail SMTP. It's especially helpful for users in the Philippines experiencing connection issues.

**Important note:** From 2024, it will be essential to use a professional email address (such as those provided by Google Workspace or Microsoft 365) for sending **bulk emails**. Free email services like Gmail, Outlook, or Yahoo will not be suitable for such purposes due to the inability to alter necessary email settings.

**Note**: Please use a VPN when trying to connect to Gmail SMTP for Users in the Philippines

### Step 1: Creating your Gmail App Password

-   Visit Google.com.
-   Select your profile icon in the upper right corner.
-   Ensure you’re logged into the correct Google Account that you plan to integrate.

![](<https://assets2.modalsupport.net/1768473998225-unnamed - 2026-01-15T184632.208.png>)

-   Click on **Manage your Google Account**

![](<https://assets2.modalsupport.net/1768474023145-unnamed - 2026-01-15T184653.008.png>)

-   Click “Security” from the menu on the left-hand side.

![](<https://assets2.modalsupport.net/1768474046485-unnamed - 2026-01-15T184718.842.png>)

-   Before proceeding to “App Passwords”:
    -   **_NOTE:_** If there are no “App Passwords,” your two-step verification is off in Google. You will need to turn it on to enable it, and cannot use the “Allow Less Secure Apps” option.

![](<https://assets2.modalsupport.net/1768474065445-unnamed - 2026-01-15T184742.688.png>)

-   Once 2-step verification is enabled, click on **App passwords.** Choose the correct email from the dropdown.
-   Type in the password
-   Click “Next” 

![](<https://assets2.modalsupport.net/1768474090710-unnamed - 2026-01-15T184804.017.png>)

![](<https://assets2.modalsupport.net/1768474105066-unnamed - 2026-01-15T184818.156.png>)

-   Add a name. Type in something like **SMTP** or **Email integration**.
-   Click “Create”

![](<https://assets2.modalsupport.net/1768474125044-unnamed - 2026-01-15T184839.416.png>)

-   Copy the password. (You will need to paste it as the password when you integrate your Gmail as the SMTP in the next step.)

![](<https://assets2.modalsupport.net/1768474144145-unnamed - 2026-01-15T184859.249.png>)

### Step 2: Integrating Your Gmail Account

-   Click into account settings located on the bottom left.
-   Navigate to “Email Services”
-   Click “Add Service” in the top right corner

![](<https://assets2.modalsupport.net/1768474177045-unnamed - 2026-01-15T184932.656.png>)

-   Click “Select Provider”
-   Choose Gmail from the dropdown list
-   Paste the app password from Step 1 here.
-   Click “Save”

![](<https://assets2.modalsupport.net/1768474194574-unnamed - 2026-01-15T184951.927.png>)

## Troubleshooting Tips and Recommended Best Practices:

If you're using Gmail as your Email/SMTP provider, please be advised that you may experience some emails being flagged as spam or not being sent out at all.

For instance, If you set your provider as "**TestEmail@Gmail.com**" but then try to send emails from a different Gmail address like "**SampleEmail@Gmail.com**," Gmail may mark those emails as spam.

![](<https://assets2.modalsupport.net/1768474256904-unnamed - 2026-01-15T185052.693.png>)

To avoid deliverability issues, always use the same Gmail address for both your emails and automation if Gmail is your provider.

Some providers have daily limits on the number of emails that can be sent.

**Gmail send limits per day:**For the **individual Gmail accounts**, the daily send limit is 500 emails per 24-hour period.  
For **Google Workspace** accounts (formerly G Suite), the daily sending limit is 2,000 emails per rolling 24-hour period per email address. These accounts are usually for businesses and operate under the company’s domain.  

**Please note**, Google counts each email address as a separate email, so one message sent to five recipients would count as five emails.

Please use a VPN when trying to connect to Gmail for Users in the Philippines. 

**Important Note:**

If you are using a Google Sending Domain, please also check the article called **“Email: How to Set Up a Dedicated Sending Domain.”**

**Professional Email Address Requirement:**

### As of February 2024, Google and Yahoo have new requirements for their Email Domain. This will help improve deliverability, avoid ending up in spam, and increase your credibility and sender reputation. You will need to add a \_dmarc record to your domain.  

FAQs




**Question:** Why do I need to create an app-specific password for Gmail?
**Answer:** App-specific passwords are required when your Google account has 2-step verification enabled. It provides an extra layer of security and allows you to connect your Gmail account with third-party platforms without compromising your primary Google account password.




**Question:** What should I do if I don’t see the “App Passwords” option in my Google account?
**Answer:** If you don’t see the “App Passwords” option, it’s likely because 2-step verification is not enabled on your account. You will need to turn on 2-step verification under your Google account’s security settings to access the app passwords feature.




**Question:** What are Gmail’s daily sending limits, and how do they differ between accounts?
**Answer:** For individual Gmail accounts, the daily sending limit is 500 emails per 24 hours. For Google Workspace accounts (previously known as G Suite), the limit is 2,000 emails per 24-hour period per email address. Remember, sending one message to multiple recipients counts each recipient as a separate email.




**Question:** Why do I need to use a VPN when connecting to Gmail SMTP from the Philippines?
**Answer:** Some users in the Philippines experience connection issues when setting up Gmail SMTP. Using a VPN can help bypass regional restrictions and improve connection stability when integrating Gmail.




**Question:** How can I avoid deliverability issues when using Gmail as my provider?
**Answer:** To prevent emails from being flagged as spam, ensure you use the same Gmail address for both sending emails and automation. Mixing different Gmail addresses for the same SMTP setup can lead to emails being flagged or blocked. Additionally, always comply with Gmail’s sending limits and use a professional email address for large-scale email campaigns.




**Question:** What should I do if my emails are being flagged as spam when using Gmail?
**Answer:** To prevent your emails from being flagged as spam, always use the same Gmail address for both sending emails and automation. Mixing different Gmail addresses for the same SMTP setup can lead to emails being flagged or blocked. Ensure that you also comply with Gmail’s sending limits and consider using a professional email address for better deliverability.




**Question:** Why is a professional email required for sending bulk emails?

**Answer:** Professional email addresses (Google Workspace, Microsoft 365) allow proper configuration of authentication settings like SPF, DKIM, and DMARC, which are essential for avoiding spam filters and ensuring successful delivery.  




**Question:** Does sending one email to multiple recipients count as a single email toward my daily limit?
**Answer:** No. Google counts each recipient as a separate email. For example, if you send one message to five recipients, it will count as five emails toward your daily sending limit.




**Question:** Are the sending limits different for Google Workspace compared to personal Gmail?

**Answer:** Yes. Personal Gmail accounts are limited to 500 emails per 24 hours, while professional Google Workspace accounts allow up to 2,000 emails per rolling 24-hour period per email address.