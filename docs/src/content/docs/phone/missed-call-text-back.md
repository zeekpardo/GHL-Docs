---
title: "Missed Call Text Back"
description: "In this article, we will discuss the ways to set up Missed Call Text Back in your system!"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/hFKB8Nk92ft9HQkaDrOq"
sourceId: "hFKB8Nk92ft9HQkaDrOq"
category: "Phone"
---

In this article, we will discuss the ways to set up Missed Call Text Back in your system!

## Part 1: Settings Option.

**Step 1:** Navigate to Settings(Located to the bottom left) > Phone Numbers

**Step 2:** Under Advanced Settings > Voicemail & Missed Call Textback > Locate the “Missed Call Text Back” option

**Step 3:** Enable and customize the missed call text back

![](https://assets2.modalsupport.net/1770068031471-image7.png)

![](https://assets2.modalsupport.net/1764175400417-image3.jpg)

![](https://assets2.modalsupport.net/1764175412941-image2.jpg)

**Walkthrough on Call Timeout Settings**

This offers guidance on configuring **Incoming Call Timeout** settings to maintain accurate call routing and status reporting. Longer timeouts may direct calls to carrier voicemail, resulting in missed internal messages and misclassified call outcomes. Setting timeouts within the recommended range helps ensure unanswered calls are correctly marked as ‘Voicemail’.

If the timeout is set too high (over 20 seconds), calls might skip your voicemail and be directed to your carrier voicemail instead. This can result in inaccurate call statuses, as calls answered by the carrier voicemail are marked as 'Completed' rather than 'Voicemail'.

![](https://assets2.modalsupport.net/1770068016591-image2.png)

If the timeout is set too low (under 15 seconds), calls may not connect properly or may end too quickly before being answered.

![](https://assets2.modalsupport.net/1770068049635-image2.png)

**Part 2: Using a Workflow**

If you’d like to further customize what happens when you get a missed call, then a better option can be a workflow. 

**_Please Note:_** _If you further customize the message, you will want to disable the missed call text back within settings._

**_Please Note:_**

_The_ _missed-call-text-back_ _feature will trigger an SMS notification for every missed call, even if the caller tries multiple times within a brief timeframe._

_To avoid receiving multiple SMS notifications for missed calls, it is suggested to create and customize the existing recipe in workflows and personalize it to manage according to your preference (Try adding a 20+/- min wait step, or filter using tags - 1st call, 2nd call, etc)._

### Step 1: Go to Automation on the left, then Workflows at the top

![](https://assets2.modalsupport.net/1764175494620-image6.jpg)

### Step 2: Create a new workflow with the “Auto Missed Call Text Back” Recipe

**_Please Note:_** _Click on the triggers and customize the filter to your use case as well as actions._

![](https://assets2.modalsupport.net/1764175509481-image4.jpg)

### Step 3: Customize and add to this to your liking then change from Draft to Publish for the workflow to be live!

![](https://assets2.modalsupport.net/1764175526203-image5.jpg)

### FAQ's




**Question:** How do I enable the Missed Call Text Back feature?
**Answer:** To enable and customize the missed call text back, navigate to Settings (located at the bottom left), go to Phone Numbers, then under Advanced Settings, select Voicemail & Missed Call Textback, and locate the "Missed Call Text Back" option.




**Question:** What if I want more customization than the basic settings allow?
**Answer:** If you need more customization, create a workflow with the **“Auto Missed Call Text Back”** recipe in the **Automations > Workflows** section. Ensure you disable the missed call text back in settings to avoid conflicts.




**Question:** Can I customize the message sent for missed calls?
**Answer:** Yes, you can customize the missed call text message either directly in the settings or through a workflow for more detailed customization.




**Question:** What happens if I use both the settings and workflows for missed call text back?
**Answer:** If you enable both the settings option and a workflow, ensure the settings option is disabled if you are using the workflow to avoid sending duplicate or conflicting messages.




**Question:** What is the recommended timeout range for incoming calls?
**Answer:** It’s best to set the timeout between 15 and 20 seconds. This range balances the chance for someone to answer with the need to avoid routing to carrier voicemail.  




**Question:** Will the missed call text back work for repeated calls from the same number?
**Answer:** Yes, by default the system sends a text for **every missed call**, even if the same caller tries multiple times. Using workflows allows you to control and limit repeated messages.




**Question:** What is the risk of setting my call timeout to more than 20 seconds?

**Answer:** If the timeout is set too high (over 20 seconds), calls may be directed to your carrier’s voicemail instead of the system's voicemail. This causes the system to incorrectly mark the call status as "Completed" rather than "Voicemail."




**Question:** How can I prevent the system from sending multiple automated texts if the same person calls me several times in a row?
**Answer:** To avoid spamming a caller with multiple messages, it is recommended to use a **Workflow** instead of the basic settings. Within the workflow, you can add a "Wait" step (suggested at 20+/- minutes) or use "Tag" filters to track if it is a 1st or 2nd call, ensuring the automated response only triggers once within that timeframe.