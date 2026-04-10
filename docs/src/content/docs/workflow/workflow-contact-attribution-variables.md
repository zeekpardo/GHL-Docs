---
title: "Workflow Contact Attribution Variables"
description: "If you are using dynamic number swapping or call tracking (using a number pool), you may want to be able to determine if a lead found its way to you via an…"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/GOYqPGmLBa4CxcqEPmwS"
sourceId: "GOYqPGmLBa4CxcqEPmwS"
category: "Workflow"
---

If you are using dynamic number swapping or call tracking (using a number pool), you may want to be able to determine if a lead found its way to you via an organic social media search, a paid Google Ad, or another source. Within a Workflow, you can use several different contact attribution variables for both first and last attribution to customize your Workflow actions.

There are many ways you can take advantage of this feature. In this article, we’ll show you how to use an incoming call with contact attribution to determine how the contact came into your list and what you want to do with that information. 

### Step 1: Create The Workflow Trigger

-   Navigate to **Automation** > **Workflows** and click **\+ Create Workflow**

![](<https://assets2.modalsupport.net/1761590937352-Captura de pantalla 2025-10-27 134843.png>)

-   Set up a Workflow Trigger as Call Status and filter by Call Direction and “Incoming Call.”
-   Save the Trigger.

![](<https://assets2.modalsupport.net/1761590976110-Captura de pantalla 2025-10-27 134925.png>)

### Step 2: Add a Workflow Action for the If/Else Condition

![](<https://assets2.modalsupport.net/1761591008550-Captura de pantalla 2025-10-27 134957.png>)

-   Select “**Contact Details**” and select “**Source**” after “**Is**” choose “**Attribution**” > “**First/Latest**” > “**Session Source**”

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdK1-ikPu7qqexaMrG5IE2-nje1L1iH9dB4yD-vjHdKnSzNHHGZCkK5CxgmKoC17uWZGtxdfLeBJx4dd2DHfvj3WhgjzQV1lxL2KpLGtAF87twytrNabuUXDLUXk0CqPNzKr5NrBcwvBnr404t9f4Uf9zNd?key=O2dkjX4Qx9L1ksoqplUhNw)

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfxdraRc0mJeN7lhCyPh8bsJuM2VtM5Og3TMY39-3fiVo-v08Azq0ZTzx8YBFcw7HtTHhCCUe5p89-V31LLUrXRVVJgb4h8qg6J1y0g1T3gVYns1qSYCxtoqf6se_DTk62Avkpqfg?key=O2dkjX4Qx9L1ksoqplUhNw)

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfI_g7GF3VXt-KtCurUTSp8VVHkXkoPREW7O8P9AXZOMkB640lOu3s4VRyabbNKyG1BxZA71z2YL6jEyC2W6IU9O7RJX8jewl9n19X-ym6UTHQ07dKwXACfMUR4TJp2ZhsX7Cde?key=O2dkjX4Qx9L1ksoqplUhNw)![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdFWFzwbYsFKy4-hIdiPr8v_DvjQc_zitNj-2vSRC6W6ztW1kKq3avDyD6EZ9utegvpxwb_EH2dDmXq3SgkHTFuD3At1eginQGWpkEARaZCoPbQcb_8R56mIWMlbfNnJZv10Gg2Ig?key=O2dkjX4Qx9L1ksoqplUhNw)

-   Now, add another segment. Select “**Contact Details**” again and scroll down to find “**Session Source (First Attribution)**” or “**Session Source Last Attribution**” - (how they originally or most recently engaged with your business).
-   Add “**Is** > **Paid Search**”
-   **Save** the action.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXf0UYeSpotCXRUaWLeANCtbdo-MNEjK-qmRVaNgTUjSDFULfjdk0z-WMkCUwMugogEgsroxKjjVo7kW-nc1j8c0sTONw6V784fo8OVf53TqEnuhEcW5uiw0OmW22eJzTI553Na6wg?key=O2dkjX4Qx9L1ksoqplUhNw)

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeawZsE_aMpnlLwHKce1Qaz39rMnNrFxbN_sNiDGGdqFoFWaC6GOPn6pvVt1bnFj8l8S17Q4qEpxhf6a3UbMhjiTB4r64kCIRqDZbLR6xpZNGRGfA8HjVZqtm7Xg-b5TQpYsufSCA?key=O2dkjX4Qx9L1ksoqplUhNw)

-   Name this branch “**Yes**” 
-   **_NOTE:_** There are several options to choose from for “Contact First Attribution” and “Contact Last Attribution”. Be sure to scroll down through them all to find the best option for your specific situation.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdaZr-p8L7RlEsB8JXbBRl4XMfVaJ6ruuw9UK_6mqzblkwh_P4BwBJwuoDE8O76DTT9LhYMQIKYOY7gDDdKJWbZ0lLrNycwfXY1XzSxbAOE_g9IBQH7x4Wyn-AK14jF3NCysNWQC7pa7mB4cov26Cqv-GM?key=O2dkjX4Qx9L1ksoqplUhNw)

-   Save the condition.

### Step 3: Add a Google Adwords Action

-   Under the “Yes” path (meaning it IS from a Google ad), you can add to Google Adwords for reporting purposes.

![](<https://assets2.modalsupport.net/1761591107714-Captura de pantalla 2025-10-27 135135.png>)

-   Add any additional actions for both paths and save your Workflow.
-   Toggle it from Draft to Published mode in order for it to function.

### **Pro Tips**

**Pro Tip 1:** Use both first and last attribution sources in your workflow to gain a comprehensive understanding of how leads are interacting with your business over time. This allows you to better tailor your follow-up actions based on the most relevant source of engagement.

**Pro Tip 2:** Regularly review your attribution reports in Google Ads and other analytics platforms to ensure that your workflows are accurately capturing and responding to the most impactful lead sources. This will help you refine your marketing strategies and improve ROI.

**Pro Tip 3:** To maximize the effectiveness of your workflows, consider segmenting your contacts based on their attribution source and customizing your follow-up actions. For example, contacts from organic sources might receive different nurturing sequences than those from paid ads.

**Pro Tip 4:** Use custom fields or tags to store attribution data if you need to reference it in other workflows or reporting tools. This can help in tracking the performance of various channels beyond just Google Ads.

### FAQ's




**Question:** Can I use attribution data for both paid and organic sources in my workflows?
**Answer:** Yes, you can use attribution data for various sources, including paid search, organic search, social media, and other channels. Customize the If/Else conditions in your workflow to segment contacts based on their first or last attribution source.




**Question:** What’s the difference between first attribution and last attribution?
**Answer:** First attribution refers to the source through which a contact first engaged with your business, while last attribution refers to the most recent source of engagement. This distinction helps you understand the contact’s journey from the initial touchpoint to the latest interaction.




**Question:** How can I track the effectiveness of my Google Ads campaigns using these workflows?
**Answer:By adding contacts to Google Ads based on their attribution source, you can track conversions and engagement directly within your Google Ads account. This allows you to analyze the effectiveness of your campaigns and make data-driven adjustments to your marketing strategies.




**Question:** Can I use this workflow setup for non-call-related attributions?
**Answer:** Yes, you can adapt this workflow setup for other attribution-related triggers, such as form submissions or Calendar Booking Submission. Simply modify the workflow trigger and conditions to match the type of engagement you want to track and respond to.




**Question:** How do I ensure my workflow actions are applied correctly for each attribution source?

**Answer:** Double-check that your If/Else conditions correctly reference the appropriate first or last attribution variable and that each branch has the desired actions assigned before publishing the workflow.  




**Question:** Can I use this workflow to send an SMS notification to my team that includes the lead source?
**Answer:** Yes! You can add an "Internal Notification" step to your workflow. By using "Custom Values," the system will automatically put the lead's source (like Google or Facebook) into a text message. This way, your team knows exactly how the person found you before they even start the conversation.




**Question:** Why do some of my incoming calls show "Unknown" or "Direct" as the source?

**Answer:** This typically happens if the lead called a number that isn't part of a **Dynamic Number Insertion (DNI)** pool, or if they blocked cookies on their browser. For the system to "stitch" the web session to the phone call, the lead must visit your site and call the tracking number displayed during that specific session.




**Question:** How do I set up a workflow to trigger specifically when someone calls my tracking number?

**Answer:** Create a new workflow and set the **Workflow Trigger** to **Call Status**. Then, add a filter for **Call Direction** and select **Incoming Call**.