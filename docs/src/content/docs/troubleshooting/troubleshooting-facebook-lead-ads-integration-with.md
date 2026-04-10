---
title: "Troubleshooting Facebook Lead Ads Integration with"
description: "Integrating Facebook Lead Ads with your account can significantly enhance your lead management process by automatically capturing leads and syncing them into…"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/YQTK7PXpnTyWmCtBy4qQ"
sourceId: "YQTK7PXpnTyWmCtBy4qQ"
category: "Troubleshooting"
---

Integrating Facebook Lead Ads with your account can significantly enhance your lead management process by automatically capturing leads and syncing them into your system. However, like any integration, issues may arise. This guide will walk you through the steps to troubleshoot common problems when Facebook Lead Ads aren't syncing correctly with .

### Question: Why Are My Lead Ads Not Making It Into My Sub-Account?

**Answer:** If your Facebook Lead Ads are not syncing with your system, there may be several reasons. Let's walk through each possible cause:

#### 1\. Check Facebook Page Admin Role

-   **Problem**: You need to ensure you're an admin of the Facebook page linked to your ads.
-   **Solution**: Verify that the user account connected to the integration is an **admin** of the Facebook Business page. To add or verify this, follow these steps:
    -   Navigate to the [Facebook Business Settings](https://www.facebook.com/settings?tab=business_tools&ref=settings).
    -   Ensure that the Facebook page you want to integrate has an admin role assigned to your account.

#### 2\. Verify the Correct Facebook Lead Ad Form is Selected

-   **Problem**: The wrong lead form may have been selected in your Facebook Ads Manager.
-   **Solution**: Go to the Ads Manager and confirm that the correct Facebook Lead Form is selected. Then, in the system, check under **Settings > Integrations > Facebook Form Field Mapping** to ensure that the form is properly mapped and appears with a blue checkmark.

#### 3\. Check the Access Permissions for LeadConnector

-   **Problem**: LeadConnector might not have the necessary access permissions to retrieve leads.
-   **Solution**: Follow the steps mentioned in the LeadConnector access section.

### Question: How to Integrate Facebook Leads Using a 3rd Party Service (Pabbly Connect or Zapier)

#### Answer: If you're using Pabbly Connect or Zapier to integrate Facebook Leads with your account:

1.  **Connect your Facebook Ads Account with the Integration Tool:**
    -   Ensure that Facebook Ads is properly linked in the integration tool (Pabbly Connect or Zapier).
    -   You will need to connect Facebook Lead Ads to the tool and map the form fields correctly for seamless lead syncing.
2.  **Check Lead Mapping in :**
    -   Navigate to **Settings > Integrations > Facebook Form Field Mapping** and ensure that the required fields from Facebook Lead Ads are mapped correctly to your ’s contact fields.
3.  **Test the Integration:**
    -   Use the Facebook Lead Ads testing tool to ensure leads are being captured. If leads are still not syncing, verify the connection using the Facebook lead testing tool: [Facebook Leads Ads Testing Tool](https://developers.facebook.com/tools/lead-ads-testing).

### Question: Facebook Token Has Expired In a Sub-Account: Why Does This Happen and How to Fix It?


**Answer:

#### Why It Happens:

Facebook tokens naturally expire after a certain time. This could also happen if there’s a change in password or if someone de-authorizes the app, logs out of Facebook, or alters page permissions.

#### How to Fix It:

1.  **Reconnect Facebook in :**
    -   Go to **Settings > Integrations** in your account.
    -   Click **Disconnect** next to the Facebook icon to disconnect the expired token.
    -   Reconnect by clicking **Connect** and log in with the Facebook account that manages the page you want to link.
    -   Select the Facebook page and complete the reconnection process.
2.  **Check if You’re Logged Into the Correct Facebook Account:**
    -   Ensure that the correct Facebook account is being used for the integration.

### Common Errors

#### 1\. Page Quality Issue

-   **Problem**: This error can occur if the Facebook page has quality issues, such as being flagged by Facebook.
-   **Solution**: Raise a support ticket with Facebook Support to resolve this issue. Go to your page on Facebook and use the [support link](https://www.facebook.com/settings?tab=business_tools&ref=settings) to open a support ticket.

![](<https://assets2.modalsupport.net/1765453004241-unnamed - 2025-12-11T193638.074.png>)

#### 2\. Permission Issue

-   **Problem**: Missing permissions may prevent Facebook Lead Ads from syncing.
-   **Solution**: Use the Facebook lead ads testing tool to check for missing permissions. Check if the appropriate permissions are enabled for the page, Instagram, and Ads account.

![](<https://assets2.modalsupport.net/1765453033582-unnamed - 2025-12-11T193702.199.png>)

#### 3\. Instagram Not Syncing All Messages

-   **Problem**: Instagram messages may not sync correctly due to settings in .
-   **Solution**: Ensure that Instagram is properly connected to the Facebook page and that messaging is enabled.

![](<https://assets2.modalsupport.net/1765453061322-unnamed - 2025-12-11T193733.808.png>)

![](<https://assets2.modalsupport.net/1765453072121-unnamed - 2025-12-11T193744.413.png>)

#### 4\. Leads Not Syncing

-   **Problem**: Leads might not be syncing if the business settings are misconfigured.
-   **Solution**: Check the Ad Account settings, ensure the Page Admin matches the Ad Account Owner, and check the Lead Access Permissions.

### Question: How to Connect Instagram to the Facebook Page or Verify It is Connected


**Answer:

To connect Instagram to your Facebook page, follow these steps:

1.  Log in to Facebook and go to **Pages** in the left menu.
2.  Select the Facebook page you want to connect Instagram to.
3.  Click on **Settings > Linked Accounts > Instagram**.
4.  Follow the prompts to connect your Instagram account.
5.  Verify that Instagram is connected properly by checking if it's listed under **Linked Accounts**.

If Instagram is not listed, follow the steps above to ensure that it is properly connected.

### Missing Pages

#### If you're unable to locate your Facebook Page in 's dropdown:

-   **Problem**: Missing Pages could happen if the page is not assigned to the correct user role or if permissions have been modified.
-   **Solution**: Verify that the page has the correct **admin** or **employee** permissions and ensure that the Facebook page is visible in your **Business Manager**.




**Question:** How can I test if my lead form is working before launching an ad?


**Answer:Use the **Facebook Lead Ads Testing Tool** to submit a test lead. Then, check if it appears in your account under Contacts or Leads.

### Question: How do I test if my lead form is working before running an ad?


**Answer:Use the **Facebook Lead Ads Testing Tool**:

1.  Submit a test lead through your lead form.
2.  Check your account under **Contacts or Leads** to see if it appears.

### Question: How can I troubleshoot common errors like Page Quality or Permission issues?


**Answer:

-   **Page Quality Issue:** Raise a support ticket with Facebook Support to resolve flagged page issues.
-   **Permission Issue:** Use the **Facebook Lead Ads Testing Tool** to check for missing permissions on the Page, Ads account, or Instagram.
-   **Leads Not Syncing:** Verify Ad Account settings, ensure Page Admin matches Ad Account Owner, and check Lead Access Permissions.




**Question:** I’ve connected everything and the mapping is correct, but leads still aren't appearing. Could it be a Business Manager setting?
**Answer:** Yes. This is often caused by **Lead Access Permissions** within your Facebook Business Suite. Facebook has a security layer that dictates which people and apps are allowed to "retract" lead data.

**How to Fix It:**

1.  Go to your **Facebook Business Settings**.
2.  Navigate to **Integrations** > **Lead Access**.
3.  Select the correct **Facebook Page**.
4.  Check the tab: Ensure that **LeadConnector** (or your specific integration app) is listed and has access.
5.  Check the **People** tab: Ensure your name is listed.

If "Lead Access" is restricted, you must manually "Assign Access" to the integration tool so it has permission to pull data into .




**Question:** What happens if I change the name of my Lead Form on Facebook?

**Answer:** If you change the name or create a new version of a form, the integration may not recognize it automatically. You must return to your settings and ensure the new form is mapped. **Pro Tip:** Never delete a form that is currently linked to an active workflow.