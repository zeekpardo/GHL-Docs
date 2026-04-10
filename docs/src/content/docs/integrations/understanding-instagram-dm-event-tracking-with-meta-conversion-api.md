---
title: "Understanding Instagram DM Event Tracking with Meta Conversion API"
description: "In today's digital marketing environment, measuring engagement and accurately tracking conversions is essential for improving campaign performance. One key…"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/2Mj8WzJFBtFa7vJHAzhy"
sourceId: "2Mj8WzJFBtFa7vJHAzhy"
category: "Integrations"
---

In today's digital marketing environment, measuring engagement and accurately tracking conversions is essential for improving campaign performance. One key advancement is the ability to capture and analyze I**nstagram Direct Message (DM)** interactions as conversion events. This article explains how to set up and use Instagram DM event tracking using a **Meta Conversion API**, enabling businesses to better attribute user actions and optimize advertising strategies.

## **Key Features & Benefits**

### **Track Instagram DM Events as Conversions**

Capture and measure when users initiate direct messages through Instagram ads, giving clear visibility into engagement that leads to conversations.

### **Seamless Integration with Automation Workflows**

Trigger workflows automatically when a user sends a DM via an Instagram Click-to-Direct ad, **![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfqBJiFo1vRMaOF9Heevt-bB5uZ51887wnsWCgcaJA4Dwn4b0OGS4FSd8IwyYAZuBASm5KiKhzKNQf4MO0I1ukacttcqwpFtg1KO0RuMM7aaoDlLxVaaR1074IRK8OLhHOqXXzf?key=KlWSNth1P7KYbRStwBSdPw)**allowing for real-time follow-ups and data tracking.

### **Improved Attribution and ROI Insights**

Connect marketing actions (ads) directly with user engagement (DMs) for better reporting and return on ad spend (ROAS) analysis.

### **Centralized Dataset Management**

Manage datasets directly in the ad platform settings without needing external tracking tools, streamlining your data infrastructure.

### **Custom Mapping Support**Enable advanced tracking using IGSID (Instagram Session ID) for enhanced attribution accuracy in custom use cases.

## **How to Use Instagram DM Event Tracking**

###  **Step-by-Step Setup**

**1\. Create a Dataset for Instagram DMs**

-   Navigate to **Meta > Conversions > Create New Dataset**

**![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdXpx_a6p347ls0BzbqzetDzNyli35dwjVTG750td6wSBshxzm5g70jRUUo4stRm_makbOq4Yl3VdHvx1wor2EIEQJa2N_h96jzyTb-0A_dpIfCxBgsWgABcQkoVnqWJGO-khkTZg?key=KlWSNth1P7KYbRStwBSdPw)**

-   Choose **Goal Type: Instagram DM**

**2\. Add the Meta Conversion API Action in Workflows**

-   Inside your workflow, select the **Meta Conversion API** action
-   Set the **Event Type** to **Instagram DM**

**![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfhsJMUE-AUygkk5YV26vRJbaOCm2j_QIHvG-5di_fHMgsJ-ruvHMMispr12Q4I5ysAUo6m3DUUqBJpxjoaIZsqRxh8-jHK0hjG3mMv1uL1LtiAOqzwsZWzVarkA3YFHCot4_P2-g?key=KlWSNth1P7KYbRStwBSdPw)**

**3\. Choose the Correct Connection Type**

-   Options: **Integration** or **Ad Manager**
-   Choose based on how your Meta account is connected

**4\. Select Assets**

-   Pick the associated **Facebook Page**
-   The system will show **Instagram Accounts** linked to that page

**5\. Attach the Dataset**

-   Select the correct **Dataset ID** (formerly Pixel ID)
-   Dataset names appear if Connection Type = Ad Manager

**6\. Configure Event Details**

-   Default **Event Name**: _LeadSubmitted_ (can be customized)
-   Optionally add **Value** and **Currency**  

-   Enable **Custom Mapping** to use IGSID for stronger tracking

**7\. Publish Your Workflow**

-   Once configured, activate the workflow
-   When a user starts a DM from your ad, it will be captured as an event

##  **Pro Tips**

-    **Re-Authorisation Required**: Ensure you re-authorize your Meta account under Integrations, as new OAuth scopes are needed for Instagram DM event tracking.
-    **Updated Naming in Workflow Actions**:  

    “Pixel ID” is now **“Dataset ID”**  
    Action is renamed to **Meta Conversion API**
-    **No Facebook Page Connected?**Ensure your Facebook Page is connected under Integrations settings.
-    **Missing Instagram Account?**Your selected Facebook Page must have an Instagram account linked to it.
-    **Use IGSID for Stronger Attribution**Enable custom mapping to pass session identifiers for better match rates in attribution reports.

##  **Special Requirements & Limitations**

-   **OAuth Authorization:** New permissions must be accepted for Instagram DM tracking to work. Re-authentication is necessary even for existing integrations.
-   **Dataset ID vs. Pixel ID:** The platform now uses "Dataset ID" terminology; ensure you're selecting the correct dataset.  

    **Asset Linking:** Facebook Page and Instagram account must be correctly linked and recognized in the system before configuration.

## FAQ’s




**Question:** What is the purpose of tracking Instagram DM events?
**Answer:** It helps measure direct user engagement from ads, giving better insight into how your campaigns lead to conversations and potential conversions.




**Question:** Do I need a Facebook page to use Instagram DM event tracking?
**Answer:** Yes, your Instagram account must be linked to a Facebook Page, which should also be connected in your system’s integration settings.




**Question:** Can I track multiple Instagram accounts?
**Answer:** Yes, but each Instagram account must be linked to a different Facebook Page that is connected under your settings.




**Question:** Is the custom mapping with IGSID required?
**Answer:** It’s optional, but highly recommended if you want enhanced attribution accuracy for Instagram DM events.




**Question:** Why don’t I see the Instagram DM option in my workflow actions?
**Answer:** Ensure that you’re using the updated **Meta Conversion API** action and that your integration is correctly authorized with the new OAuth scopes.




**Question:** What are the updated naming conventions for workflow actions in Instagram DM event tracking?
**Answer:** The new naming conventions for workflow actions are: "Pixel ID" has been renamed to "Dataset ID," and the action is now referred to as "Meta Conversion API." These changes must be reflected when setting up your Instagram DM event tracking.




**Question:** What do I need to ensure for the Meta Conversion API to work correctly with Instagram DM event tracking?

**Answer:** You must ensure that your Meta account is re-authorized with the new OAuth scopes, your Facebook Page is linked correctly, and your Instagram account is connected to the Facebook Page.  




**Question:** Can I track DMs that come from organic posts, or only from Ads?
**Answer:** This specific integration is designed for **Click-to-Direct Ads**. Its primary goal is to tell Meta, "This person messaged us because of the ad we paid for," so Meta can find more people like them. Organic DMs can trigger workflows, but they aren't typically sent back as "Ad Conversions."  




**Question:** What is the default event name sent to Meta for a DM conversion?

**Answer:** The default event name is **LeadSubmitted**, though you have the flexibility to customize this to match your specific tracking requirements within the workflow action.




**Question:** How does this integration improve ROI insights for advertisers?

**Answer:** It allows you to **connect marketing actions (ads) directly to user engagement (DMs)**, providing clearer visibility into how paid campaigns lead to actual conversations and conversions.