---
title: "Facebook Ads Reporting"
description: "Facebook Ads Reporting"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/bJHTXLHv8pwz2FI8IlXb"
sourceId: "bJHTXLHv8pwz2FI8IlXb"
category: "Reporting"
---

**Facebook Ads Reporting**

The Reporting Tab includes a specific report on Facebook Ads. You can view your ad data here if you’ve integrated your Facebook account and are using Facebook for ads. Facebook Ads are a great way to promote your business, but you must ensure they’re set up correctly. If you don’t have the correct settings in place, it could cost you money and waste time. We'll show you how to check your Facebook ad setup so you can get the most out of them and how to view reporting within .

### 1- Setup and Diagnostics

The Integration of the Facebook Ad Account needs to be active.

It is necessary to check that the Facebook Ad Account connected in Settings > integrations has [admin permissions](https://www.facebook.com/business/help/1588743581429919?id=735435806665862&_rdc=2&_rdr).

**Please Note:** You need to be a page admin or ask a page admin to assign you to that [role](https://www.facebook.com/help/187316341316631?helpref=faq_content). 

**Before we get started, please review the notes below:**

-   If you are running traffic to a landing page, make sure you set your Facebook pixel and Facebook Conversion API in Workflows. To learn more check out our article “**Workflow Action: Facebook - Conversion API**”
-   Facebook will not add the UTM parameters to your links when you are viewing your ad as a preview.
-   Don't use any special characters or emojis in the UTM parameters or any parameter that needs to be tracked.
-   The first ad attribution data will be recorded for contacts coming from the following "entry points" listed below; in other cases, the first attribution data will be empty.

**Entry Points:** 

-   Form submissions
-   Survey submissions
-   Calendar
-   Directly coming from Facebook Lead From
-   Two-step order form
-   Chat widget
-   Inbounding Calls (won't work if leads call the number pool directly, but only for the click-to-call scenarios)

### 2- UTM Tracking template should be added at Tracking, not at the Destination.

Once you are in your ads manager, select the campaign you wish to add UTM parameters to, then head over to Manage ads -> Ads -> Edit.

![](<https://assets2.modalsupport.net/1763751616994-Captura de pantalla 2025-11-21 140012.png>)

### 3- Complete the steps below for URL parameters

-   Click on "Campaign Source" and type "fb\_ad" into the field
-   Click on "Campaign Medium" and select {{adset.name}} from the dropdown
-   Click on "Campaign Name" and select {{campaign.name}} from the dropdown
-   Click on "Campaign Content" and select {{ad.name}} from the dropdown
-   Click on the "Add Parameter" button
-   Enter "campaign\_id" as the "Parameter name" and for the "Value" please select "{{campaign.id}}" from the dropdown menu
-   Hit "Apply" to save changes

![](<https://assets2.modalsupport.net/1763751733276-unnamed \(1\).png>)

**_Note:_** _The following UTM tracking parameters are available on the contact level within the system:_

-   _Source_
-   _Campaign Name_
-   _Adset Name_
-   _Ad Name:_
-   _Campaign Id_
-   _fbclid_
-   _gclid_
-   _Referrer_

### 4- While connecting Facebook Lead Form Mapping, choosing the correct Facebook Page is necessary.

Make sure that the correct Facebook page is selected in  from Settings > Integrations.

**_Please Note:_** _Ensure you have_ mapped the Facebook form fields in from Settings> Integrations> Facebook Form Fields

Check out these articles for more information:  
**1**. **Mapping Facebook Form Fields2\. Lead Ad Debugging for Facebook**

### 5- Add to the websites within

Add the main tracking code to all pages from Sites > Funnels/Websites > Selected Site > Settings tab.  

![](<https://assets2.modalsupport.net/1763751763299-Captura de pantalla 2025-11-21 140231.png>)

Add the Event tracking codes to the individual associated pages by selecting the page and editing the page. This will take you to the Site Builder add the code to head tracking space.

![](<https://assets2.modalsupport.net/1763751784274-Captura de pantalla 2025-11-21 140259.png>)

![](<https://assets2.modalsupport.net/1763751803555-Captura de pantalla 2025-11-21 140318.png>)

### **Track with Pixel ID:**


To track with the help of **Meta Pixel**, you’ll need to add the **pixel ID**. Navigate to Sites > Funnels/Websites > Events:

![](<https://assets2.modalsupport.net/1763751827618-Captura de pantalla 2025-11-21 140343.png>)

![](<https://assets2.modalsupport.net/1763751844375-Captura de pantalla 2025-11-21 140400.png>)

## **Reporting**

### Step 1: Accessing The Report

-   Navigate to the Reporting section of on the left.
-   Click on Facebook Ads Report at the top.

-   Choose your desired date period in the top right corner of the screen.

![](<https://assets2.modalsupport.net/1763751864934-Captura de pantalla 2025-11-21 140420.png>)

-   Click the checkbox to confirm the date period and run data for the selected period.

### Step 2: Viewing The Report Data

-   Several statistics and data points are available in this report.

![](<https://assets2.modalsupport.net/1763751889596-Captura de pantalla 2025-11-21 140445.png>)

**_NOTE:_** _If you wish to view reporting metrics for one day, check that date as the start and end date. You must have both selected for the stats to appear. The example below shows how you can run reports for January 1, 2022, by choosing January 1st as the start and end date:_

![](<https://assets2.modalsupport.net/1763751909875-Captura de pantalla 2025-11-21 140505.png>)

### **Pro Tips**

-   **Verify Facebook Ad Account Integration:** Ensure your Facebook Ad Account is correctly integrated with and that you have admin permissions. This is crucial for accurate data collection and reporting.
-   **Use UTM Parameters Effectively:** When adding UTM parameters to your Facebook ads, make sure to follow the template exactly to avoid issues with tracking. Special characters and emojis in UTM parameters can disrupt tracking.
-   **Review Attribution Points:** Understand that attribution data will only be recorded for specific entry points like form submissions, surveys, or directly from Facebook Lead Forms. Ensure your entry points are correctly set up for accurate data.
-   **Track UTM Parameters Correctly:** Add UTM parameters in the Tracking section rather than the Destination section of your ad settings. This helps in proper tracking and reporting.
-   **Check Facebook Page Mapping:** When connecting Facebook Lead Forms, ensure you select the correct Facebook page and map the Facebook form fields correctly in .
-   **Add Tracking Codes to All Pages:** Make sure to add the main tracking code to all your website pages and event tracking codes to the specific pages where needed. This ensures comprehensive data collection.

### FAQs




**Question:** What permissions do I need for Facebook Ad integration?
**Answer:** You need admin permissions for the Facebook Ad Account to ensure proper integration and data access. Verify this in Settings > Integrations.




**Question:** How do I set up UTM parameters for Facebook ads?
**Answer:** In Ads Manager, go to Manage Ads -> Ads -> Edit, then add UTM parameters under URL parameters by filling in the fields for Campaign Source, Medium, Name, Content, and Parameter name.




**Question:** Why might my Facebook ad reporting data be missing?
**Answer:** Data might be missing if UTM parameters are not set up correctly, if there are issues with Facebook form field mapping, or if the entry points for attribution are not configured properly.




**Question:** Can I run a report for just one day?
**Answer:** Yes, to view metrics for a single day, set both the start and end dates to that specific day. For example, to view January 1, 2022, set both dates to January 1, 2022.




**Question:** Where should I add UTM parameters Tracking or Destination?

**Answer:** Always add UTM parameters in the **Tracking** section of your ad settings, not the Destination section. This ensures accurate reporting and attribution.  




**Question:** Will I see attribution data in the report if I view my ad using the "Preview" mode on Facebook?
**Answer:** No. Facebook will not add the UTM parameters to your links when you are viewing your ad as a preview. Attribution data is primarily recorded for live interactions through specific entry points like form submissions, surveys, or direct Facebook Lead Forms.  




**Question:** How do I track conversions specifically on my funnels or websites using a Pixel ID?

**Answer:** To track using a Meta Pixel, navigate to **Sites > Funnels/Websites** and select your specific site. Go to the **Events** tab to add your Pixel ID, and ensure the main tracking code is pasted into the **Settings** tab of the site.




**Question:** Are there any characters I should avoid using when setting up my UTM tracking parameters?
**Answer:** Yes. You should not use any special characters or emojis in your UTM parameters or any other parameter that needs to be tracked. Using these can disrupt the system's ability to record attribution data correctly.