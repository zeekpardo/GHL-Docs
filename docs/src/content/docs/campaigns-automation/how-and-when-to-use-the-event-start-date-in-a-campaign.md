---
title: "How And When To Use The Event Start Date In A Campaign"
description: "The Event Start Date field allows you to build automation around a specific date & time. Once you set the Event Start Date, all the items in that campaign can…"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/d0RbedMbTODDFiS1DvvT"
sourceId: "d0RbedMbTODDFiS1DvvT"
category: "Campaigns (Automation)"
---

The Event Start Date field allows you to build automation around a specific date & time. Once you set the Event Start Date, all the items in that campaign can be sent in relation to that day and time using the 'before' action in each campaign step/event. This is useful for reminders for both in-person and online events with a set time for the entire group of leads (e.g webinars, conferences, etc.)

If you want to use this to send campaign steps within specific time frames, we recommend using the Windows in campaign settings or specific events. (Check out our other tutorials for using campaign windows.)

### **Step 1:** Setting the event time in a campaign.

-   Create a campaign. 
-   Click the campaign configuration and go to **Event Start Date**. Set your Event Date and Time (note that this will default to the timezone that you have established in Settings). 
-   Set up your campaign as you would any other normal appointment confirmation & reminder campaign using the 'before' action. 
    -   **_NOTE:_** If you haven’t read the article on Confirmation and Reminder Campaigns, we recommend that you do so prior to implementing this campaign to gain a better understanding of the 'before' settings. 

The campaign will skip steps that are set too far 'before' the event time. For example, if I have my first email going out 5 days before the event, and a lead opts in 3 days before the event, the lead will not get the 5 days before.