---
title: "Workflow Action: Add To Google Analytics"
description: "The Add to Google Analytics Workflow Action allows you to create a workflow that will automatically fire a Google Analytics event. In order for this workflow…"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/F7ePREcQ3sDA2ch7Oyw3"
sourceId: "F7ePREcQ3sDA2ch7Oyw3"
category: "Workflow Actions"
---

The Add to Google Analytics Workflow Action allows you to create a workflow that will automatically fire a Google Analytics event. In order for this workflow action to function, you must already have your Google Analytics account set up and connected to your system. This article will give an overview of how to set up a workflow using the Add to Google Analytics Workflow Action.

**How to access:**

**Step 1:** Start a new workflow or edit an existing one

-   Navigate to Automation > Workflows and start a new workflow or edit an existing one.

![](https://assets2.modalsupport.net/1765311910897-image5.png)

**Step 2:** Set up applicable Workflow Trigger(s). We have multiple articles available to explain the setup of each of the Workflow Triggers. Feel free to review our articles on these for more information on setting these up.

**Pro Tip:** You can use any Workflow Triggers to trigger the Add to Google Analytics Workflow Action or you can leave this workflow without any triggers.

**Step 3:** Setting up the Add to Google Analytics Action

-   Click on the “+” symbol below the trigger to add an action.

![](https://assets2.modalsupport.net/1765312135547-image4.png)

-   Under Actions, select **Add to Google Analytics** in the **Marketing** section of the Actions Menu or use the search feature. Upon selection, the Action setup menu will appear.

![](https://assets2.modalsupport.net/1775248079181-image1.png)

-   (Optional) You can change the workflow builder display name of this action using the textbox below **Action Name**. Note that this will only affect the display name within the workflow builder and has no other impact on the content or functionality of this Workflow Action.
-   Under **Action Type,** select **Universal Analytics** OR **Google Analytics 4**
    -   **Universal Analytics** will prompt you to fill a set of text boxes with your analytics information. These boxes will be **Tracking ID**, **Event Category**, **Event Action**, **Event Label**, and **Event Value**
    -   **Google Analytics 4** will also prompt you to fill a set of text boxes with your analytics information. These boxes will be **Measurement ID**, **Event Name**, and **API Secret**. 
        -   Note that **Event Name** must be mapped from **Google Analytics 4** or **Universal Analytics**. 
    -   Any of these boxes can be filled using appropriate Custom Values by pressing the tag symbol on the right side of each text box

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXd6svH979pCpvgBPTnmgIcObSXO8tLVIoe2tQsTxwC8OWESVJlyLEr8Y4a6eg5cIw8q8EVoNKTIjZFHCjQHva-iRjXki90MhinI_xa3PnCJ_kpq5xsUYBoZM7ynuPi-jJEX_ohh?key=0Rcpdlb4DYv9Uk7xBLcIeg)

-   Press **Save** in the bottom right corner of the Action setup menu

**Step 4:** Press **Save** in the top right corner of your browser to save the workflow

-   If your Workflow is ready to be enabled, make sure the toggle switch under **Save** is set to **Publish**
-   Be sure to test your Workflow to make sure it is set up correctly using the **Test Workflow** button next to the **Publish** toggle switch. 
    -   For an in-depth overview of Workflow Testing see our article, “Using the Testing Features in Workflows”  
         

![](https://assets2.modalsupport.net/1765312178799-image3.png)

Now your Workflow is set up and ready to go with the Add to Google Analytics Workflow Action!

### **FAQs for the "Add to Google Analytics" Workflow Action**




**Question:** What does the "Add to Google Analytics" action do?

**Answer:** The "Add to Google Analytics" action allows you to automatically trigger a Google Analytics event from within your workflow. This helps in tracking specific user actions or behaviors as defined in your Google Analytics setup.




**Question:** What do I need before using the "Add to Google Analytics" action?
**Answer:

-   **Google Analytics Account**: Ensure your Google Analytics account is set up and connected to your system.
-   **Workflow**: Create or edit a workflow where you want to add this action.




**Question:** How do I set up the "Add to Google Analytics" action in my workflow?
**Answer:

1.  **Start/Edit Workflow**:
    -   Begin by creating a new workflow or editing an existing one.
    -   Set up the appropriate workflow triggers if needed.
2.  **Add Action**:
    -   Click on the “+” symbol to add a new action.
    -   Select “Add to Google Analytics” from the Marketing section or use the search feature.
3.  **Configure Action**:
    -   **Action Type**: Choose between Universal Analytics or Google Analytics 4.
    -   **Universal Analytics**: Fill in Tracking ID, Event Category, Event Action, Event Label, and Event Value.
    -   **Google Analytics 4**: Fill in Measurement ID, Event Name, and API Secret.
    -   **Custom Values**: Use custom values by pressing the tag symbol next to each text box if needed.
4.  **Save**:
    -   Press “Save” in the bottom right corner of the action setup menu.
    -   Save the workflow and publish it if ready.




**Question:** What is the difference between Universal Analytics and Google Analytics 4?
**Answer:

-   **Universal Analytics**: This is the older version of Google Analytics that uses Tracking ID and requires fields like Event Category, Event Action, etc.
-   **Google Analytics 4**: This is the latest version with a different setup. It uses Measurement ID and focuses on Event Name and API Secret.




**Question:** How do I find my Tracking ID or Measurement ID?
**Answer:

-   **Universal Analytics**: Your Tracking ID can be found in your Google Analytics account under Admin > Property Settings.
-   **Google Analytics 4**: Your Measurement ID is located in your Google Analytics 4 property under Admin > Data Streams.




**Question:** What should I use for Event Name in Google Analytics 4?
**Answer:** The Event Name must be mapped according to your setup in Google Analytics 4. This name should correspond to the events you are tracking in your Google Analytics 4 property.




**Question:** Can I use custom values for the analytics fields?
**Answer:** Yes, you can use custom values for any of the fields by pressing the tag symbol next to each text box. This allows you to dynamically insert values relevant to each specific contact or action.




**Question:** What happens after a workflow fires the Google Analytics event?
**Answer:** The event data is sent to your Google Analytics account, where you can monitor tracking results, event activity, and reporting within your GA dashboards.




**Question:** Does changing the "Action Name" affect how the data is sent to Google Analytics?

**Answer:** No. Changing the "Action Name" only updates the display name within the workflow builder to help you stay organized. It has no impact on the actual content or functionality of the data being sent to Google Analytics.




**Question:** How long does it take for events to show up in my Google Analytics dashboard?

**Answer:** Typically, events appear in your "Real-Time" report within a few seconds. However, for full processing and inclusion in your standard reports, it may take 24 to 48 hours for Google to display the complete data.