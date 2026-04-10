---
title: "Google Analytics 4 Setup"
description: "Google Analytics 4 Setup"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/jM6iRQDu8C9Hm1FVBKGV"
sourceId: "jM6iRQDu8C9Hm1FVBKGV"
category: "Integrations"
---

**Google Analytics 4 Setup**

The existing workflow action for Google Analytics in the includes both Google Analytics 4 and Universal Analytics, which means that users can choose to use either platform or both to track their marketing campaigns and website traffic. This provides a more flexible and integrated approach to tracking and analyzing user behavior, which can help businesses make data-driven decisions to improve their marketing strategies and user experience.

### Step 1: Access Account

Ensure you have an active account with . 

### Step 2: Navigate to Workflows

Once logged in to , navigate to Automation and then to the Workflows section from the main dashboard.

![](<https://assets2.modalsupport.net/1764070953633-unnamed - 2025-11-25T194224.818.png>)

### Step 3: Create or Select a Workflow

Either create a new workflow or select an existing one where you want to integrate Google Analytics 4.

### Step 4: Add a Google Analytics Action

Within the selected workflow, locate the action section. Click on "Select Action" or the (+) icon to add a new action.

![](https://assets2.modalsupport.net/1774548841416-image10.png)

### Step 5: Choose Google Analytics Action Type

In the action type dropdown menu, select "Google Analytics 4" from the available options.

![](https://assets2.modalsupport.net/1774548863216-image6.png)

### Step 6: Enter Measurement ID

Retrieve the Measurement ID from your Google Analytics account. Access Google Analytics, go to Account Settings, then Data Streams. Select the appropriate data stream, and copy the Measurement ID.  

![](<https://assets2.modalsupport.net/1764071017842-unnamed - 2025-11-25T194329.535.png>)

### Step 7: Paste Measurement ID

Back in the workflow, paste the copied Measurement ID into the designated field for Measurement ID.  

![](<https://assets2.modalsupport.net/1764071035815-unnamed - 2025-11-25T194347.025.png>)

![](<https://assets2.modalsupport.net/1764071045646-unnamed - 2025-11-25T194356.388.png>)

### Step 8: Obtain API Secret

In Google Analytics, navigate to Admin > Account Settings > Data Streams. Select the relevant data stream, then click on "Measurement Protocol API Secrets." Create a new API secret key, give it a nickname, and copy the value.  

![](<https://assets2.modalsupport.net/1764071068313-unnamed - 2025-11-25T194418.125.png>)

![](<https://assets2.modalsupport.net/1764071085722-unnamed - 2025-11-25T194437.296.png>)

![](<https://assets2.modalsupport.net/1764071101810-unnamed - 2025-11-25T194450.407.png>)

**Please Note:**

Before an API Secret can be created, you need to acknowledge that you have completed the necessary privacy discussions and have received the right from your end users for the collection and processing of data.

![](<https://assets2.modalsupport.net/1764071120134-unnamed - 2025-11-25T194511.221.png>)

### Step 9: Add API Secret

Paste the copied API secret value into the corresponding field within the workflow.

![](<https://assets2.modalsupport.net/1764071147993-unnamed - 2025-11-25T194538.316.png>)

![](<https://assets2.modalsupport.net/1764071171058-unnamed - 2025-11-25T194550.538.png>)

![](<https://assets2.modalsupport.net/1764071182354-unnamed - 2025-11-25T194612.197.png>)

### Step 10: Configure Workflow Conditions

Set up workflow conditions based on your requirements. For instance, define actions triggering Google Analytics tracking, such as form submissions, appointment bookings, or other relevant events.

### Step 11: Save and Test

Once all configurations are complete, save the workflow. Test the integration by performing the specified actions within to ensure that data is correctly tracked and sent to Google Analytics.

### Step 12: Monitor and Analyze

After implementation, regularly monitor your Google Analytics dashboard to analyze account-related metrics, such as user interactions, conversions, and engagement.

### Create a Google Analytics event that you want to track

You can add the event name that you wish to track. This event name will show up under the Google Analytics dashboard along with other standard events that are set up.

When setting up events, ensure they align with your business goals and tracking strategy to make the most out of your analytics data. Customize event parameters to capture specific details relevant to your campaigns.

**Configuring Enhanced Measurement Settings**

In your Data Stream settings, make sure that Enhanced Measurement is enabled. This setting helps automatically collect additional data, such as scroll tracking, outbound link clicks, and more, which can provide deeper insights into user interactions on your website.

**Troubleshooting Common Issues**

If you encounter issues where events are not showing up in Google Analytics, ensure that your Measurement ID and API Secret values are correctly entered without spaces or formatting errors. Additionally, verify that the correct event names are used and that no filters are blocking data in your Google Analytics account.

**Testing Events Before Publishing**

Before publishing the workflow, it's recommended to test the events by triggering them manually or through a test environment to ensure they are being tracked correctly in Google Analytics. Check the Google Analytics dashboard under the "Realtime" tab to confirm that your events are firing as expected.

**Enabling Data Retention Settings**

To maximize the data available for analysis, adjust your data retention settings in Google Analytics. Navigate to Admin ➝ Data Settings ➝ Data Retention and select the retention period that best fits your analysis needs, such as 14 months, and ensure the 'Reset on new activity' option is enabled to extend data retention on user interactions.

**Please Note:** Before an API Secret can be created, you need to acknowledge that you have read and understood Google's privacy disclosures regarding the collection of user data.

Then click on Create if no API Secret has already been created. Name your API secret and then hit Create, and a Secret Value will be generated for it automatically.

Copy the Secret Value from here and paste it into the API Secret field in the Google Analytics action in your Workflow.

**Please note:** Make sure there is no space before or after when you paste your API Secret value into the workflow's field, or your Google Analytics action will fail.

Save the Action and then Save the Workflow. Publish if you are ready to use it.

### Pro Tips for Setting Up Google Analytics 4 in Workflows

1.  **Double-Check Your Measurement ID and API Secret**
    -   Ensure that there are no spaces before or after when you paste your **Measurement ID** and **API Secret** values in the workflow fields. Even a small formatting error can cause the Google Analytics action to fail. A quick review can save you time troubleshooting.
2.  **Utilize Custom Events for Better Tracking**
    -   When creating Google Analytics events, be specific with the event names and parameters. Align your event names with your business goals and tracking strategy to get meaningful insights. For example, instead of generic names like "form submission," try "newsletter\_signup" to make event analysis more granular and relevant.
3.  **Enable Enhanced Measurement for Deeper Insights**
    -   Don't forget to enable **Enhanced Measurement** in your **Data Stream settings**. This will automatically capture additional user behavior data, such as **scroll tracking**, **outbound link clicks**, and **file downloads**, which can provide more comprehensive insights into how users interact with your website.
4.  **Test Your Events Before Going Live**  
    1\. Before publishing your workflow, manually trigger the events or use a test environment to ensure everything is working correctly. Use the **"Realtime"** section in your Google Analytics dashboard to confirm that the events are firing and the data is being sent correctly.

### FAQs




**Question:** How do I set up Google Analytics 4 in workflows?
**Answer: To set up Google Analytics 4, go to your workflow and choose 'Add to Google Analytics' under the action type. Select 'Google Analytics 4' from the dropdown, enter your Measurement ID, and configure the desired event names and API Secret values. Ensure Enhanced Measurement settings are enabled in your Data Stream for additional insights.




**Question:** What should I do if events are not appearing in Google Analytics?
**Answer:** If events are not showing up, double-check that the Measurement ID and API Secret are entered correctly without spaces. Verify that the event names match those configured in your workflow, and ensure that no filters are blocking data in your Google Analytics settings.




**Question:** How can I test my events before publishing the workflow?
**Answer:** You can test your events by manually triggering them or using a test environment. Check the 'Realtime' section in your Google Analytics dashboard to confirm that the events are being tracked as expected before publishing the workflow.




**Question:** What are Enhanced Measurement settings, and why are they important?
**Answer:** Enhanced Measurement settings automatically collect additional data, like scroll tracking and outbound link clicks. Enabling these settings in your Data Stream provides deeper insights into user behavior, which can help optimize your marketing strategies.




**Question:** How should I manage API Secret expiration and security?
**Answer:** API Secrets may have expiration periods or security requirements that necessitate regular updates. Periodically review and update your API Secret to ensure the continued functionality of your Google Analytics integration.




**Question:** How often should I test my tracking connection?
**Answer:** It’s recommended to test after any major change (like updating domains, editing events, or new campaigns) to ensure data continues flowing correctly.




**Question:** Why can't I see my workflow events in my regular Google Analytics reports right away?
**Answer:** While you can see events instantly in the **"Realtime"** tab, Google Analytics 4 can take **24 to 48 hours** to process that data and show it in your main "Engagement" or "Events" reports. If it’s working in Realtime, you’re all set!




**Question:** Can I send more than one event to Google Analytics in a single workflow?

**Answer:** Yes. You can add multiple Google Analytics actions at different stages of your workflow. For example, you could send a "lead\_qualified" event after a form submission and a "booking\_confirmed" event after they pick a time on your calendar, all within the same automation.