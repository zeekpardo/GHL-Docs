---
title: "Connecting Mailgun to Your DNS Manager"
description: "Integrating Mailgun with your DNS manager is crucial for businesses looking to enhance their email deliverability and maintain control over their email…"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/hfcYozNCfME28bbFXqIw"
sourceId: "hfcYozNCfME28bbFXqIw"
category: "Mailgun"
---

Integrating Mailgun with your DNS manager is crucial for businesses looking to enhance their email deliverability and maintain control over their email campaigns. By properly setting up Mailgun, you ensure your emails reach your recipients' inboxes, helping you maintain a strong sender reputation. This guide will walk you through connecting Mailgun to your DNS manager, ensuring a seamless setup.

**Please Note:** If you're using a non-generic DNS provider, such as Crazy Domain or Squarespace, please contact their support team for assistance with adding the necessary records to your domain.

## How to Connect Mailgun to Your DNS Manager

### Step 1: Create a Mailgun Account

-   Start by creating a Mailgun account. Make sure to select the appropriate plan that suits your needs. Avoid the foundational trial plan if you anticipate high email volumes, as it has limitations that might affect performance.

### Step 2: Verify Your Account

-   Upon creating your account, verify your email and phone number. This is a crucial step to avoid any disruptions in email sending.

### Step 3: Add Your Domain in Mailgun

-   Navigate to the domain settings in Mailgun.
-   Add a new domain or subdomain specifically for sending emails. It's recommended to use a dedicated subdomain for email campaigns to protect your main domain.

![](<https://assets2.modalsupport.net/1763722606804-unnamed - 2025-11-21T185638.997.png>)

### Step 4: Configure DNS Records

-   In Mailgun, you will see the DNS entries; 2 TXT records, 2 MX records, and 1 CNAME. Log in to your DNS manager (e.g., Cloudflare) and add the necessary DNS records provided by Mailgun.
-   Choose Type from the dropdown menu to add the DNS entry.

![](<https://assets2.modalsupport.net/1763722629391-unnamed - 2025-11-21T185701.360.png>)

-   Here are the record types shown in Mailgun. **NOTE: Do not use these exact record hosts, as the hosts will be specific to the domain you are setting up.**  
    -   Type: TXT ; Host: replies ; Value: paste from Mailgun page. Save
    -   (Repeat for 2nd TXT record.)
    -   Type: MX ; Host: replies ; Points to: paste from Mailgun page ; Priority: 10 ; TTL: leave defaulted to 1 hour.
    -   (Repeat for 2nd MX record.)
    -   Type: CNAME ; Host: email.replies ; Points to: enter value ; TTL: leave defaulted to 1 hour

### Step 5: Click "Verify DNS Settings".

-   All 5 should have the green check mark. If any do not, check the record and re-attempt. 

**_NOTE_:** If the green check marks are not showing up, you'll want to ensure that the Host pieces for each record only have the sub-domain piece of the total record. For example, if the total record is mailo.\_domainkey.mg.thedemoaccount.com, you would only put in mailo.\_domainkey.mg. 

### Step 6: Set Up Unsubscribe and Tracking Options (Optional)

-   In your Domain Settings on Mailgun, enable click and open tracking, as well as unsubscribe links, to maintain compliance and monitor your email campaign performance.

![](<https://assets2.modalsupport.net/1763722656986-unnamed - 2025-11-21T185727.869.png>)

### Updating the Unsubscribe settings in your Mailgun account:

1- In the left-hand navigation panel, go to **Send** and click on **Sending** to expand the list of options. Then select **Domain Settings.**

![](<https://assets2.modalsupport.net/1763722677626-unnamed - 2025-11-21T185750.050.png>)

2- Under **Domain Settings**, choose your domain from the drop-down list.

![](<https://assets2.modalsupport.net/1763722776826-unnamed - 2025-11-21T185819.058.png>)

3- Scroll down to the **Unsubscribe** section and click **Edit**. Toggle the Unsubscribe feature on or off as needed.

![](<https://assets2.modalsupport.net/1763722799463-unnamed - 2025-11-21T185951.535.png>)

![](<https://assets2.modalsupport.net/1763722815665-unnamed - 2025-11-21T190007.747.png>)

4- Click **Save** to apply your changes.

### Pro Tips:

-   **Use a Dedicated Subdomain:** For businesses, it's advisable to use a dedicated subdomain for email campaigns to safeguard your primary domain.
-   **Enable Two-Factor Authentication:** Secure your Mailgun account with two-factor authentication to prevent unauthorized access.
-   **Monitor Deliverability:** Regularly check your email logs and analytics to ensure high deliverability rates.

### FAQs




**Question:** What is the benefit of using a dedicated subdomain for Mailgun?
**Answer:** A dedicated subdomain isolates your email campaigns from your primary domain, protecting your main domain's reputation in case of deliverability issues.




**Question:** How do I verify my domain in Mailgun?
**Answer:** After adding your domain in Mailgun, you'll need to add specific DNS records to your DNS manager. Once done, return to Mailgun to verify these settings.




**Question:** Can I use Mailgun with multiple domains?
**Answer:** Yes, Mailgun allows you to add multiple domains, each with its settings, making it easier to manage different email campaigns.




**Question:** What should I do if my DNS records are not verified?  
**Answer:** If your DNS records do not verify, double-check that the entries are correct and that there are no typos. You may also need to wait a few minutes and try again. Some DNS providers take 24-48 hours to propagate records and update them, we would suggest, although it usually takes less time, it is advised to wait for that long before reaching out to the support.




**Question:** How do I enable click and open tracking in Mailgun?
**Answer:** Go to the domain settings in Mailgun and enable click and open tracking under the tracking settings. This allows you to monitor the effectiveness of your email campaigns.




**Question:** Can I use my Root domain in Mailgun?  
**Answer:** Yes, you can add your root domain in Mailgun as well, but please make sure that it is not connected to any other email service like Google Workspace.  




**Question:** What should I do if I have trouble adding DNS records?
**Answer:** Ensure you're using the correct values from Mailgun. If you're using a non-generic DNS provider, like Crazy Domain or Squarespace, contact their support for assistance.


**Question:How long does it take for DNS changes to take effect?
**Answer:** While DNS changes often propagate within minutes, some providers may take 24–48 hours for full propagation.


**Question:Does Mailgun require Two-Factor Authentication (2FA)?
**Answer:** Mailgun account has the power to send thousands of emails under your brand’s name, 2FA prevents unauthorized users from hijacking your domain reputation for spam.




**Question:** My DNS provider doesn't have a "Host" field, it says "Name." What do I put there?

**Answer:** "Host" and "Name" are usually the same thing in DNS managers. If you are setting up mg.yourdomain.com, some providers (like Cloudflare) only want you to type mg in that box. Others might want the full mg.yourdomain.com. If the verification fails, try toggling between the short version and the full version.




**Question:** Does the "Update Row" action work if I don't know the exact row number?

**Answer:** The "Update Specific" action requires a number. To find that number automatically, you should use the **"Lookup Spreadsheet Row"** action first. It can search for an email address, find which row it is on, and store that row number as a variable to be used in the Update action.




**Question:** What should I do if I am using a non-generic DNS provider like Squarespace or Crazy Domain?

**Answer:** Because these providers have unique interfaces, it is recommended that you contact their specific support teams for assistance in adding the Mailgun records correctly.