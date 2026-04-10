---
title: "Troubleshooting Google Ads Reporting: A Step-by-Step Guide"
description: "This article provides a comprehensive guide on troubleshooting common issues with Google Ads reporting in , helping you ensure your campaigns are performing…"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/5KEmFa64LpMDwTzVQYzN"
sourceId: "5KEmFa64LpMDwTzVQYzN"
category: "Troubleshooting"
---

This article provides a comprehensive guide on troubleshooting common issues with Google Ads reporting in , helping you ensure your campaigns are performing optimally.

### How to Troubleshoot Your Google Ads Reporting:

**Step 1: Verify Google Ad Account Integration with** To start, ensure your Google Ads account is properly integrated with your account. If the integration is functioning, confirm that the Gmail address associated with the integration matches the one used for your Google Ads account. This step is critical for ensuring that your data is being tracked and synced correctly.

Navigate to Settings > Integrations to verify the integration.

![](<https://assets2.modalsupport.net/1769088346403-unnamed - 2026-01-22T212540.265.png>)

**Permissions Note**: Please make sure the email address of the user connected has the maximum amount of permissions (admin) in your Google Ad Account. 

![](<https://assets2.modalsupport.net/1769088369665-unnamed - 2026-01-22T212604.148.png>)

**Important:** The Gmail account connected to the integration should have either a user role or an admin role in the Google Ads account, not a manager role. This is necessary for proper access and reporting functionality.

**Step 2: Review UTM Tracking Template Setup:** UTM tracking templates should be placed in only one location—either in the Account settings, Campaign, or Ad setup. If you place the template in multiple locations, it will be processed based on a hierarchy: Account > Campaign > Ad. Ensuring it is placed correctly will prevent tracking errors.

**UTM Tracking Tip**: UTM parameters are case-sensitive. Be sure to follow the template exactly, with no capital letters, to avoid discrepancies in your reports.

**Step 3: Ensure Unique Campaign, Ad-set, and Ad Names:** Google Ads requires that campaign names, ad-set names, and individual ad names be unique. If these names are duplicated across different ad-sets or ads, Google Ads will display duplicate data in your reporting, making it hard to track performance accurately.

-   **Incorrect Setup Example**: Campaign Name: Winter Shoes, Ad Group: Sport Shoes 1, Ad: Nike Sport Shoes 1. 

![](<https://assets2.modalsupport.net/1769088411025-unnamed - 2026-01-22T212644.996.png>)

This setup results in duplicate reporting because the name “Nike Sport Shoes 1” appears more than once. These would need to be unique

-   **Correct Setup Example**: Campaign Name: Winter Shoes, Ad Group: Sport Shoes 1 York, Ad: Nike Sport Shoes 1.1 York logo.

![](<https://assets2.modalsupport.net/1769088431234-unnamed - 2026-01-22T212703.294.png>)

This setup ensures each entry is unique and data is accurately attributed.

**Naming Reminder**: If you change the name of your campaign, ad-set, or ad after it has already been tracked, the UTM parameters will not automatically update. This could lead to discrepancies, and sales or lead attribution may stop functioning correctly. It's often better to create a new campaign or ad-set for fresh tracking.

**Note**:

Changing the name of your Google Ad Campaign, Ad-set, or Ad will not update the existing UTM parameters, and the data will continue to attribute to the old parameters.

To ensure accurate tracking, we recommend creating a new Campaign, Ad-set, and Ad. While will update the name in the list view of Google Ads Reporting, the data will no longer reflect sales, leads, or ROI accurately, as it will still be tied to the old UTM parameters.

### FAQs




**Question:** What should I do if my Google Ads integration is not connected to my account?
**Answer:** Ensure that your Google Ads account is properly linked to your account. You may need to verify credentials or update the integration settings.




**Question:** Can I use multiple UTM templates in different places?
**Answer:** While you can, it’s recommended to place the UTM tracking template in just one location (Account settings, Campaign, or Ad setup) to avoid confusion or errors.




**Question:** Why do I see duplicate ads in my Google Ads reporting?
**Answer:** Duplicate ads are usually caused by non-unique names for campaigns, ad-sets, or individual ads. Ensure each name is distinct to avoid duplicate entries in your reports.




**Question:** Can I change my campaign name after it’s been created?
**Answer:** Yes, but it will not update the existing UTM parameters, and the data may no longer reflect accurate lead or sales attribution. It’s best to create new campaigns if necessary.




**Question:** How can I check if my UTM parameters are set up correctly?
**Answer:** Review your UTM parameters for consistency, ensuring they follow the correct case-sensitivity and formatting. Using a tool or manual checks can help confirm they are correctly applied.




**Question:** Why is it important to have a unique campaign, ad-set, and ad names?
**Answer:** Unique names prevent duplicate data in your reporting and ensure accurate performance tracking across campaigns and ads.




**Question:** Can I test my UTM parameters before launching campaigns?
**Answer:** Yes. You can click on the final URL with UTMs and verify that parameters appear correctly in the URL. Tools like Google Analytics’ URL builder can help validate formatting.




**Question:** What happens if I duplicate a campaign or ad accidentally?
**Answer:** Duplicated names can lead to duplicate reporting and inaccurate tracking. Ensure names are unique, and consider deleting or renaming duplicates before running campaigns.




**Question:** What specific role does my Gmail account need within Google Ads for reporting to work?

**Answer:** The connected Gmail account must have either a **User role or an Admin role**. It is important to note that a **Manager role** is not sufficient for proper access and reporting functionality within the integration.




**Question:** Will my past data sync the moment I connect the integration?

**Answer:** Yes, once the integration is successful, the system will pull historical performance data. However, **attribution** (linking a specific lead to a specific click) will only begin for new leads that enter the system _after_ your UTM tracking templates are properly in place.