---
title: "Customizing Delivery Timeframes Within Workflows"
description: "There are multiple options for setting up workflow timing. In this tutorial, we will show you how to use time frames, or “windows,” to customize your workflow…"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/MZA4D2pOfmbI7kTnRoZE"
sourceId: "MZA4D2pOfmbI7kTnRoZE"
category: "Workflow"
---

There are multiple options for setting up workflow timing. In this tutorial, we will show you how to use time frames, or “windows,” to customize your workflow actions and timing using delivery windows.

You can set up a default setting for the workflow as a whole or use wait steps to customize just certain actions.

### Method 1: Using Default Settings To Customize the Workflow Delivery Window

-   Navigate to Automation >  Workflows and select the workflow you wish to make the changes to.

![](<https://assets2.modalsupport.net/1764326344545-unnamed - 2025-11-28T183841.169.jpg>)

-   Click into Settings
-   Under “Time Window,” choose “Any Time” or “Specific Time”
    -   Any time: messages can be sent from the workflow any time, any day.
    -   Specific time: messages are restricted to specific windows of day/time you set (i.e., Mon-Fri 8 am-5 pm).

![](<https://assets2.modalsupport.net/1764326393247-unnamed - 2025-11-28T183940.290.png>)

-   Here’s an example of how you can set the window to Saturday and Sunday 8 am-12 pm:

![](<https://assets2.modalsupport.net/1764326416144-unnamed - 2025-11-28T184007.519.png>)

-   Any day highlighted in blue is open for sending. So, the email will only be sent on Saturday or Sunday.

### Method 2: Using Workflow Actions For Timing


There may be instances where you want to be more specific with the delivery window, such as sending an email communication on the 5th of the month unless it’s a weekend (and, in that case, you’d want the email to be sent out the following Monday).

-   Create an “If/Else” Workflow condition action, and select the Date Time condition.

![](<https://assets2.modalsupport.net/1764326471826-unnamed - 2025-11-28T184102.128.jpg>)

![](<https://assets2.modalsupport.net/1764326486364-unnamed - 2025-11-28T184118.355.jpg>)

-   Select the current day of the month as the 5th and the day of the week is not Sunday.

![](<https://assets2.modalsupport.net/1764326509509-unnamed - 2025-11-28T184139.401.jpg>)

-   Save the changes made in the workflow.
-   The contact will go down the YES or NO path accordingly.

Note: An important thing to note here is that the conditions you set up include “AND” and “OR” functions. If you use the  “And” function between different conditions, then all the conditions should be “True” for to go to the “Yes” path. Similarly, if the function “OR” is used, this means that at least one (1) condition should hold “true” to make the lead go to the “Yes” path of the workflow.

-   If the contact goes down the NO path, it means the condition was not met. This means it IS Sunday, so you will want to set up a wait action for one day, and the action will occur one day later, on Monday:

![](<https://assets2.modalsupport.net/1764326531622-unnamed - 2025-11-28T184203.539.jpg>)

![](<https://assets2.modalsupport.net/1764326545356-unnamed - 2025-11-28T184215.950.jpg>)

-   If the lead goes down the YES path, it IS NOT Sunday (both conditions were met). However, it could still be Saturday. Therefore, you’ll want to set up another “If/Else” action.
-   Set up the condition for “Current day of the week” >  “is not” > “Saturday.”

![](<https://assets2.modalsupport.net/1764326567002-unnamed - 2025-11-28T184237.488.jpg>)

-   If this condition is met, meaning it is NOT Saturday, the contact will go down the YES path, and you can add your email action or anything else.
-   If the condition is not met, meaning it IS Saturday, the contact will go down the NO path.
-   Add a wait step for two (2) days (to get to Monday), and then you can add your email action or any other actions.

![](<https://assets2.modalsupport.net/1764326584562-unnamed - 2025-11-28T184255.399.jpg>)

-   You can set the Wait step to skip a larger sequence of steps in time-sensitive workflows. This allows you to skip a specific step later in the workflow instead of just moving to the next one.
-   You can also set the Wait step to fire at an Exact time.

![](<https://assets2.modalsupport.net/1764326609442-unnamed - 2025-11-28T184321.507.jpg>)

### Use Cases:

1.  **Email Campaigns with Specific Timing Needs**_Scenario:_ A company wants to send promotional emails on the 5th of each month but avoids sending them on weekends. They use the "If/Else" conditions to ensure emails are sent on the following Monday if the 5th falls on a weekend while still allowing emails on weekdays.
2.  **Appointment Reminders for Business Hours**_Scenario:_ A service-based business wants to send appointment reminders only during business hours (e.g., Monday to Friday, 9 am to 6 pm). They set a specific time window in the default settings to ensure reminders are sent only during these hours, avoiding messages outside of business times.
3.  **Event Notifications Based on User Location**_Scenario:_ An event management platform sends notifications about upcoming events. To ensure users receive notifications at appropriate times, they set up workflow conditions to send reminders only if the event occurs within the user’s local business hours, factoring in time zone differences and local working days.

### FAQs




**Question:** How can I set a default time window for my workflow?
**Answer:** Navigate to the Workflow Builder, click into Settings, and under "Time Window," select either "Any Time" for unrestricted sending or "Specific Time" to define specific windows for sending messages.




**Question:** How do I set up a workflow to avoid sending messages on weekends?
**Answer:** Use an "If/Else" Workflow condition with a Date Time condition to check if the current day is a weekend. Set a wait action to delay sending until the following Monday if the condition is met.




**Question:** Can I customize timing for specific actions within a workflow?
**Answer:** Yes, use the "If/Else" Workflow conditions to specify timing for individual actions. For example, set conditions to handle messages differently based on the day of the week.




**Question:** What should I do if I need to skip steps in a time-sensitive workflow?
**Answer:** Use the Wait step to skip a sequence of steps or fire at an exact time to ensure actions occur according to your timing requirements.




**Question:** How can I skip specific steps in a workflow based on timing?
**Answer:** You can use the Wait step to skip a larger sequence of steps in time-sensitive workflows. This allows you to skip a specific step later in the workflow, ensuring that actions happen at the correct time based on your conditions. You can also set the Wait step to fire at an exact time.  




**Question:** How do the "AND" and "OR" functions affect my workflow conditions?

**Answer:** These functions determine how multiple conditions are evaluated. If you use the "AND" function, all conditions must be true for a contact to proceed down the "Yes" path. If you use the "OR" function, the contact will go down the "Yes" path if at least one of the conditions holds true.




**Question:** How can I visualize which days are "open" for sending in a Specific Time window?

**Answer:** In the Workflow Settings under Time Window, any day highlighted in **blue** is considered "open." If a day is not highlighted, the system will hold all actions until the next highlighted day arrives.




**Question:** If I want to send an email on the 5th of the month, but only if it is not a Sunday, how should I configure the "If/Else" logic?

**Answer:** You should set up a Date/Time condition using the "AND" function. Select "Current day of the month is 5" AND "Current day of the week is not Sunday." This ensures the contact only proceeds to the "Yes" path if both specific conditions are true at the same time.