---
title: "Workflow Trigger: Video Tracking"
description: "The Video Tracking Workflow Trigger allows you to trigger a workflow whenever a lead watches a certain percentage of a video you uploaded to your account.…"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/ophUwub7FXcGm4nEwTks"
sourceId: "ophUwub7FXcGm4nEwTks"
category: "Workflow Triggers"
---

The _Video Tracking_ Workflow Trigger allows you to trigger a workflow whenever a lead watches a certain percentage of a video you uploaded to your account. When a lead watches your selected percentage of a video, they will be added to this workflow. This article will give an overview of creating a workflow using the _Video Tracking_ Workflow Trigger.

**Important Notes**: 

-   This trigger only runs for leads who are already registered as contacts in the system.
-   This article will assume that you already have videos uploaded to your account.
-   To learn how to add the hosted video element in your site builder, check out our article “**Hosted Video Element**”
-   The trigger in workflows will activate when a user closes or completes the video.
-   If no specific Video Tracking percentage is set, the trigger will fire when the contact either closes the window or finishes the video, regardless of the percentage watched.
-   To fire the trigger once a user has watched at least 20% of the video, change the operator to "Greater than or Equal to" instead of "Equals to."
-   The workflows will receive data each time the user closes the video. If the user revisits the page and meets all the filter criteria, they will re-enter the workflow, provided that "Allow Re-entry" is enabled.

### **Step 1:** Start a new workflow or edit an existing one  

![](https://assets2.modalsupport.net/1762558676907-image3.png)

### **Step 2:** Creating and Editing the Trigger

-   Click “Add New Trigger”
-   Select **Video Tracking** in the **Events** section of the Workflow Triggers Menu or use the search feature. Once selected, the Trigger setup menu will appear.

![](https://assets2.modalsupport.net/1762558875180-image5.png)

-   (_Optional_) You can change the workflow builder display name of this trigger using the textbox below the **Workflow Trigger Name**. Note that this will only affect the display name within the workflow builder and has no other impact on the content or functionality of this Workflow Trigger.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcCFPBb2-uARDjE_wYBgEHjvXeCalwx_22TQ-ahB-3Ip693_jpCXJybLQCm2LdfAmPD6n5m2p1yv1T8LzoLOAc8m_V-eVw02kwlSaZ2LXoSVoJIVdDirEX6kquN7-xtMVTWsGi5BD7lXNG7OZZrUiEiaGe3?key=EN0-WfsipfyC3OUIf8JyjA)

-   Press **\+ Add filters** to expand the **Filters** section of the Trigger setup menu.
-   **Video duration (%)** will set the required percentage of a video for a lead to watch to trigger this workflow. This filter parameter has various logic options (Greater than, less than, is not empty, etc…). Configure these parameters to fit your goals.
    -   The **Funnel** parameter lets you specify which funnels can or cannot trigger this workflow. 
        -   **Funnel > Is any of** will allow you to select one or multiple funnels to be able to trigger this workflow. All unselected funnels, in this case, cannot activate this workflow.
        -   **Funnel > Is none of** will allow you to select one or multiple funnels to be restricted from triggering this workflow. Only unselected funnels, in this case, can trigger this workflow.
    -   The **Video** parameter lets you specify which videos can or cannot trigger this workflow. 
        -   **Video > Is any of** will allow you to select one or multiple videos to be able to trigger this workflow. All unselected videos in this case cannot activate this workflow
        -   **Video > Is none of** will allow you to select one or multiple videos to be restricted from triggering this workflow. Only unselected videos in this case can trigger this workflow
    -   You can also filter by **Custom Fields,** which will only allow contacts who meet your selected custom value parameters to trigger this workflow. Custom values can be set up by going to **Settings** \> **Custom Fields** in your account.
-   Press **Save Trigger** in the bottom right corner of the Trigger setup menu.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdPP5AEIULiMll2d9cblLQEWShQ4ELT4e-J67cSIgXY8UhOta9ijBKPOVbcqN_66T_ks4ZFxpjN-ZN1SVML9Y5Eym63jIZQhfairVgxK0bCq0UYDSYUEWPa1sYPLv78-5etk49ba8K95JxS0Y5rk9cWAgc?key=EN0-WfsipfyC3OUIf8JyjA)

### **Step 3:**Add Actions

 Set up the applicable Workflow Action(s). We have multiple articles available explaining the setup of each Workflow Action. Feel free to review our articles for more information on setting these up.

**_Pro Tip:_** 

-   You can use any Workflow Actions to be triggered by the _Video Tracking_ trigger or you can leave this workflow without any actions.
-   You can automate actions such as sending follow-up emails or SMS messages, tagging leads, or triggering other workflows based on viewer engagement.

### **Step 4:** Press **Save** in the top right corner of your browser to save the workflow

-   If your Workflow is ready to be enabled, make sure the toggle switch under **Save** is set to **Publish**
-   Be sure to test your Workflow to ensure it is set up correctly using the **Test Workflow** button next to the **Publish** toggle switch. 

![](https://assets2.modalsupport.net/1762558938326-image1.png)

-   For an in-depth overview of Workflow Testing, see our article, “Using the Testing Features in Workflows.”

Your workflow is set up and ready to go with the _Video Tracking_ Workflow Trigger.

**Example**

Here are a few ways you can utilize the Video Event Tracking Workflow Trigger:

**Example 1: Webinar Follow-ups**You host a webinar with a pre-recorded video presentation. Set up the following workflow:

-   **Trigger:** Activate when a viewer watches 50% of the video.  
    **Action:** Send a personalized email thanking them for watching and offering additional resources related to the content.
-   **Trigger:** Activate when a viewer watches 100% of the video.  
    **Action:** Send a different follow-up email inviting them to schedule a consultation or offering a special discount.

This workflow helps nurture leads based on their level of engagement, providing them with relevant content and offers that can increase the likelihood of conversion.

**Example 2: Lead Scoring**Assign points to viewers based on the percentage of the video they watch and use these points to score and prioritize leads:

-   **Trigger:** Activate when a viewer watches 25% of the video.  
    **Action:** Add 10 points to their lead score.
-   **Trigger:** Activate when a viewer watches 50% of the video.  
    **Action:** Add 20 points to their lead score.
-   **Trigger:** Activate when a viewer watches 75% of the video.  
    **Action:** Add 30 points to their lead score.

By awarding more points to viewers who watch more of the video, you can better identify and prioritize the most engaged leads for targeted follow-ups and sales outreach.

**Example 3: Abandoned Video Tracking**Create a workflow to track viewers who abandon the video before completion:

-   **Trigger:** Activate when a viewer watches less than 50% of the video.  
    **Action:** Add them to a segment for "Abandoned Video Viewers."  
    **Action:** Send a follow-up email with a link to the video, encouraging them to finish watching.

This workflow helps identify and re-engage viewers who started watching but didn't finish. By sending a targeted follow-up, you can boost the chances of them completing the video and taking further action.

**FAQ**




**Question:** What is the purpose of the Video Tracking Workflow Trigger?
**Answer:** The Video Tracking Workflow Trigger allows you to initiate a workflow whenever a lead watches a specified percentage of a video that you’ve uploaded. It helps you target leads based on their video engagement.




**Question:** Do I need to have videos uploaded to use this trigger?
**Answer:** Yes, this trigger requires that you have videos already uploaded to your account. You should also ensure that your leads are registered contacts in the system for the trigger to function.




**Question:** What are the required settings for the Video Tracking Workflow Trigger?
**Answer:** You must apply the Video Duration (%) filter to specify the percentage of the video a lead must watch to activate the workflow. You can also set filters for specific funnels, videos, and custom fields.




**Question:** How do I ensure my workflow is functioning correctly after setting it up?
**Answer:** After saving your workflow, use the Test Workflow button to test its functionality. Make sure the workflow is published by toggling the switch under Save to "Publish."




**Question:** What types of actions can I automate based on video progress?
**Answer:** You can automate actions such as sending follow-up emails or SMS messages, tagging leads, or triggering other workflows based on viewer engagement.




**Question:** Can I filter the workflow by Custom Fields?
**Answer:** Yes. You can filter contacts using Custom Fields, so only leads meeting the specified criteria will enter the workflow.




**Question:** If a lead skips to the end of the video, does that count as 100% watched?

**Answer:** No. The system tracks the actual consumption of the video content. Scrubbing or skipping through the timeline will not "trick" the trigger into firing for percentages that were not actually played on the screen.




**Question:** Does the video have to be hosted on an external site like YouTube?

**Answer:** No. This trigger specifically works with videos uploaded to the media library and placed using the "Hosted Video" element. It does not track watch percentages for embedded YouTube, Vimeo, or Wistia links.




**Question:** Can I restrict this trigger to only work on specific pages?

**Answer:** Yes. You can use the **Funnel** parameter to specify exactly which funnels should (or should not) activate the workflow. You can select "Is any of" to include specific funnels or "Is none of" to exclude them.