---
title: "How to add UTM Parameters in Email Builder"
description: "UTM (Urchin Tracking Module) parameters are tags added to the URLs in your marketing campaigns. They allow you to track the performance of campaigns across…"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/YMt7erKINLBdXFsx1jj3"
sourceId: "YMt7erKINLBdXFsx1jj3"
category: "Email Campaigns"
---

### **How to add UTM Parameters in Email Builder**

### **What are UTM Parameters?**

UTM (Urchin Tracking Module) parameters are tags added to the URLs in your marketing campaigns. They allow you to track the performance of campaigns across various traffic sources. By using UTM parameters, marketers can identify which campaign brought a user to their site, providing valuable insights into the effectiveness of their marketing efforts.

### **Automatic UTM Parameters**

This feature allows users to set default UTM parameters directly within the email builder settings. It automates the process, ensuring that every link in your email campaign is tagged correctly without manual intervention. 

### **Best Practices for UTM Parameters:**

To ensure consistent and accurate tracking, avoid using personally identifiable information (PII) such as Social Security numbers or addresses in UTM parameters, as these are restricted by analytics platforms. Stick to essential parameters like utm\_source, utm\_medium, and utm\_campaign for clarity, and use consistent capitalization and underscores (\_) instead of spaces to avoid encoding issues.

Here's a closer look at how it works:

### **How to access**

**1\. Navigating to Email Settings**:

-   Navigate to Marketing and Within the email builder campaigns, navigate to the email settings.
-   Under the access settings, you'll find the tracking options.

![](https://assets2.modalsupport.net/1773258175210-image1.png)

**2\. Setting Default UTM Parameters**:

-   In the tracking section, you can enable UTM tracking.
-   You can set default UTM parameters such as Source, Medium, and Campaign. These defaults will be automatically applied to your email campaigns.
-   Additionally, you can add custom UTM parameters to suit your specific tracking needs.

![](<https://assets2.modalsupport.net/1763743204889-Captura de pantalla 2025-11-21 113954.png>)

-   The default UTM parameters enabled are usually Source and Medium, which help you identify the origin of the traffic (e.g., email) and the medium (e.g., email marketing). The Source field is mandatory and defaults to "email," while Medium can be customized from its default value of "email marketing." The Campaign parameter can include details like the campaign name, send date, or campaign ID and is optional, allowing for a more granular analysis of the campaign performance.

**3\. Automatic Application**:

-   When creating a new email, the set UTM parameters will be automatically added to all links.
-   This ensures that every link is tagged consistently, making tracking and attribution seamless.

**_NOTE: If you have a campaign with multiple links, this feature saves significant time compared to manually adding UTM parameters to each link individually._**

-   You can review and adjust the default UTM values from the tracking settings, ensuring they align with your specific analytics needs. Access to these settings can typically be found in the tracking section of the email marketing settings, where you can also create and save any custom UTM parameters.

**4\. Disable for Specific Campaigns:** 

To exclude UTM parameters from a specific campaign, turn off tracking on the Send or Schedule page within that specific campaign.  

![](<https://assets2.modalsupport.net/1763743236109-Captura de pantalla 2025-11-21 114028.png>)

When enabled, this setting will automatically add the default UTM parameters to every link in the campaign. If you need to review or modify the default values, you can click the provided link to navigate back to the tracking section of your email marketing settings. After making any changes, return to the campaign screen to save or send the email, and the UTM parameters will be applied to all links within the email campaign.  

![](<https://assets2.modalsupport.net/1763743262551-Captura de pantalla 2025-11-21 114057.png>)

**Use Case Examples:** Include some real-life examples of how UTM parameters can be used effectively. For example:

-   Tracking email marketing campaigns to see which specific email brought the most traffic.
-   Comparing the effectiveness of different social media channels by adding source-based UTM parameters.

**Visuals:** Add screenshots or visual aids that show the process of navigating to the email settings, enabling UTM tracking, and reviewing the parameters in the settings. A visual step-by-step guide can make it easier for users to follow.

**Test and Optimize Campaigns:** Emphasize the importance of testing your UTM parameters before sending the email campaigns to ensure tracking is set up correctly. Encourage users to run A/B tests to refine their UTM parameter strategy for better data insights.

**Link UTM Parameters with Analytics:** Add a note on how UTM parameters can be integrated with popular analytics platforms like Google Analytics. This will help readers understand how to view the results of their UTM tracking.

**Error Troubleshooting:** Include a troubleshooting section for common UTM parameter issues, such as incorrectly formatted URLs or missing parameters. This can guide users on how to fix issues if their UTM tracking is not working properly.

**Performance Metrics:** Add a brief mention of what metrics can be tracked with UTM parameters, such as click-through rates, conversion rates, and other key performance indicators (KPIs), to give users a better understanding of the insights they can gather.

**Best Times to Use UTM Parameters:** Include a note on when to use UTM parameters in different types of campaigns, such as limited-time promotions, seasonal campaigns, or ongoing newsletters. This can help marketers apply the feature in the most relevant scenarios.

### Limitations of UTM Parameters:

UTM parameters may not function correctly in certain scenarios, such as with trigger links where UTM tracking is not supported. Additionally, ensure that links are correctly formatted with necessary prefixes like "[https://"](https://); to avoid tracking errors, especially if they are saved under custom values. It's recommended to send test emails to verify that UTM parameters are working as expected.

### Benefits of Automatic UTM Parameters

1.  **Streamlined Process**:
    -   Automating UTM parameter addition saves time and reduces the likelihood of errors that can occur with manual tagging.
2.  **Improved Accuracy**:
    -   Consistent tagging across all links ensures accurate tracking and reporting, providing reliable data for campaign analysis.
3.  **Consistent Naming Conventions for UTM Parameters**
    -   To maintain a uniform approach when naming custom UTM parameters, it is recommended to use a consistent format such as UTM\_underscore followed by the parameter name (e.g., UTM\_source).
4.  **Flexible Tracking Controls**
    -   When sending email campaigns, UTM tracking can be toggled on or off directly from the Send or Schedule page. This ensures that your settings are flexible and can be adjusted based on the specific needs of each campaign.
5.  **Advanced Customization Options**
    -   For advanced users, there is an option to create up to five custom UTM parameters to further refine tracking, allowing for a highly detailed view of user interactions without the risk of including sensitive personal information, such as Social Security numbers or addresses, which should be avoided.
6.  **Customizable Tracking**:  
    1\. The ability to add custom UTM parameters means you can tailor tracking to your specific needs, gaining deeper insights into campaign performance.

### FAQs




**Question:** What are UTM parameters, and why are they important?
**Answer:** UTM parameters are tags added to URLs in your marketing campaigns that help track the performance of those campaigns across different traffic sources. They provide valuable insights into which campaign brought a user to your site, allowing you to better understand the effectiveness of your marketing efforts.




**Question:** How do I set up default UTM parameters for my email campaigns?
**Answer:** To set up default UTM parameters, navigate to the Marketing section, access the email builder, and go to the email settings. Under the tracking options, you can enable UTM tracking and set defaults for parameters like Source, Medium, and Campaign. These settings will automatically apply to all links in your email campaigns.




**Question:** Can I customize UTM parameters beyond the defaults?
**Answer:** Yes, you can add up to five custom UTM parameters in addition to the default ones. This allows you to further refine your tracking to suit specific needs. However, it’s important to avoid using personally identifiable information (PII) in these custom parameters.




**Question:** Are there limitations to using UTM parameters?
**Answer:** UTM parameters may not work in all scenarios, such as with trigger links where UTM tracking is not supported. Additionally, ensure that URLs are correctly formatted with necessary prefixes like "https://" to prevent tracking errors. Testing your UTM parameters with dummy campaigns is recommended to ensure they function as intended.




**Question:** How can I disable UTM tracking for specific email campaigns?
**Answer:** If you want to exclude UTM parameters from a particular email campaign, you can turn off tracking on the Send or Schedule page within the email campaign settings. This provides flexibility in managing which campaigns have UTM tracking applied.




**Question:** What should I consider when naming custom UTM parameters?
**Answer:** It’s best to maintain consistent naming conventions when creating custom UTM parameters. Use a format like UTM\_underscore followed by the parameter name (e.g., UTM\_source) to ensure clarity and prevent encoding issues. Consistent capitalization and the use of underscores instead of spaces are also recommended.




**Question:** Can I review and adjust UTM parameters once they are set?
**Answer:** Yes, you can review and adjust UTM parameters in the tracking settings section of your email marketing setup. This allows you to ensure that the parameters align with your specific analytics needs and modify them as required for different campaigns.




**Question:** What are the benefits of automating UTM parameter addition?
**Answer:** Automating UTM parameter addition streamlines the process, saving time and reducing errors associated with manual tagging. It ensures consistent tagging across all links, improving the accuracy of tracking and reporting, and providing reliable data for campaign analysis.




**Question:** When should I use UTM parameters in my campaigns?
**Answer:** Use UTM parameters for email campaigns, limited-time promotions, seasonal campaigns, social media campaigns, and any marketing activity where tracking traffic sources and user engagement is important.




**Question:** Does turning off tracking for one campaign delete my global settings?

**Answer:** No. Toggling the tracking off on the "Send or Schedule" page only applies to that specific send. Your global defaults will remain saved and ready for your next campaign.