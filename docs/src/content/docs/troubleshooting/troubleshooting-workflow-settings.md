---
title: "Troubleshooting Workflow Settings"
description: "Troubleshooting Workflow Settings"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/G3r9XIEwNR5ypd7IkJON"
sourceId: "G3r9XIEwNR5ypd7IkJON"
category: "Troubleshooting"
---

**Troubleshooting Workflow Settings**

**Troubleshooting Workflow Settings**

This troubleshooting guide is designed to help you walk through resolving common issues related to **workflow settings**. Whether it's about time windows, re-entry settings, communication management, or handling responses, this guide covers the essential steps to ensure your workflows operate smoothly and efficiently. Follow the steps to troubleshoot any issues you might face with these settings.

**FAQ: Troubleshooting Workflow Settings**




**Question:** Why is my workflow not triggering the actions I expect based on the set time window?

**Answer:If actions in your workflow aren’t being triggered at the expected time, it’s likely due to the **Time Window** setting.

**How to Fix:**

-   Ensure that the **Time Window** is set to **Specific Time** if you want messages to be sent during a specific time frame.
-   Double-check if the scheduled actions are within the selected time window. If they fall outside of the window, they will wait until the next available time slot.

**Steps to Verify:**

-   Navigate to **Settings** > **Workflow Settings**.

![](<https://assets2.modalsupport.net/1762283689325-Captura de pantalla 2025-11-04 141433.png>)

-   Check if the **Time Window** is set to the right option (either "Any Time" or "Specific Time").
-   If using **Specific Time**, ensure that it matches the intended schedule for your audience.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXe052t_ZigkQHA4N9w2YG9WfjFh1Ec085dbBHfCfTt5kASIJ99p1uUyIttnLyZU5GZd2FPvMAHL1pNHuMQdyJVXcOCgkSaDSr9x5ntsa5glzPeyI8sG4z8E5Ras1vP59dQS2JlX?key=c-6Yi-Oq69paM0sHVv9ayCTv)




**Question:** My workflow actions do not respect the contact's time zone. Why is that happening?

**Answer:The issue may occur if the **Timezone** setting isn't configured to use the correct time zone. The workflow may be using the **Account Timezone** instead of the **Contact Timezone**, which may cause mismatched timing.

**How to Fix:**

-   Go to **Settings** > **Workflow Settings**.
-   Ensure that **Timezone** is set to **Contact Timezone** to use each contact’s timezone for actions like email or SMS delivery.
-   If you want to follow your business time zone, set it to **Account Timezone**.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfB4LEuanbms84IQOGmu0cjVzPyC752Cf9GLy8axDmr5sJApj7N8_rxE0F5YKvqB7aQPZd2g4JXwiYltj4nBgB56ZyTNHbfOTkPRbIQNvScfetOTRlY6aki-lRO4aEs2_awP2KpAw?key=c-6Yi-Oq69paM0sHVv9ayCTv)

**Steps to Configure:**

-   Verify that **Account Timezone** or **Contact Timezone** is properly selected, based on your workflow needs.
-   If **Contact Timezone** is selected, ensure that contacts have a valid timezone.




**Question:** Why isn’t my workflow stopping when the contact responds to a message?

**Answer:If the workflow doesn’t stop after a contact replies, the **Stop On Response** feature might not be enabled, or the response type may not trigger the stop.

**How to Fix:**

-   Go to **Settings** > **Workflow Settings** and verify that **Stop on Response** is **OFF.**
-   Ensure the contact is responding via a communication channel (SMS, email, etc.) that is set to trigger the stop action.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdkIGaSlak5rp64DXpkfqAnm162Y9DBKcrkAXeIQ4Eb4i2mMi792wSpMslIWqQUB0effYDz1lxI3cj0GHzJ0526tIUAyFBwGP3h1Ydm812wIZgx4A-heAx-t7RHmlWdHmR_PFO5bA?key=c-6Yi-Oq69paM0sHVv9ayCTv)

**Steps to Verify:**

-   In the workflow editor, check the **Stop on Response** setting under the specific action that requires it.
-   Make sure the contact is replying to the correct channel (e.g., SMS, Email, Facebook Messenger) that’s linked to the workflow’s stop trigger.




**Question:** Why are my automated messages appearing as unread in the conversation tab?


**Answer:If messages sent by your workflow appear as unread in the conversation tab, the **Mark as Read** setting might not be enabled.

**How to Fix:**

-   Navigate to **Settings** > **Workflow Settings**.
-   Enable **Mark as Read** for automated messages to avoid cluttering your conversation tab with unread messages.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeqrEfHiCSvUQQ62IpVhgRVwqDOkuHsjH5ZbcHibsXnT-sn_gAiam4lVMHiD9qVGhQOOVTq3sr6xVrU6jbGXDdxvM77T-7PEO-68Yvxa2iJ5np-poTY7JMjo--0RCbGKOM7_1AdHw?key=c-6Yi-Oq69paM0sHVv9ayCTv)

**Steps to Configure:**

-   Locate the **Mark as Read** option in the **Conversation Management** section.
-   Toggle the setting **ON** to automatically mark outgoing workflow messages as read.




**Question:** My contacts are not being re-enrolled into the workflow after completing it. What’s wrong?


**Answer:If contacts are not being re-enrolled into a workflow after completing it, the **Allow Re-Entry** setting might not be activated.

**How to Fix:**

-   Go to **Settings** > **Workflow Settings**.
-   Ensure that **Allow Re-Entry** is **ON** for the workflow.
-   Remember, this setting only works if the contact is no longer active in the workflow.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdJ8E6HtysAR93ZKQ4DuUkNOM_gSBsKiy7uJlzHbni-UE95JRd_Jelu4ReN-9LQT3fSI7Fk1UWiXEUELdnZm5dUT-npsnrgZZvHd70_Gi8JuAbvicPlMbPWYxA2uAJ-fnUxI0iwfA?key=c-6Yi-Oq69paM0sHVv9ayCTv)

**Steps to Enable:**

-   Check the **Allow Re-Entry** setting and toggle it **ON** to enable re-enrollment after completion or removal from the workflow.




**Question:** Why isn’t my workflow executing if the contact is already in the workflow?

**Answer:This could be due to the **Allow Re-Entry** setting not being configured properly, or the contact may still be marked as "active" in the workflow, preventing them from entering again.

**How to Fix:**

-   Check if the **Allow Re-Entry** setting is enabled.
-   Ensure the contact has completed or been manually removed from the workflow before trying to re-enter.

**Steps to Resolve:**

-   If the contact is active, they won’t re-enter until the workflow has been completed or been manually removed. If **Allow Re-Entry** is needed, make sure it is activated and the contact is no longer in the workflow.




**Question:** Why are contacts not receiving communication after the first message in my workflow?

**Answer:This can happen if the **Wait Steps** are configured incorrectly, or if the **Allow Multiple Opportunities** setting is conflicting with your workflow.

**How to Fix:**

-   Go to **Settings** > **Workflow Settings**.
-   Check the **Wait Steps** and ensure that the time delay is appropriate.
-   Make sure the **Allow Multiple Opportunities** feature is properly configured if you are managing multiple opportunities per contact.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeO8zWShIxMcNxxMZAXGhV_rxEip0nOB1gn_G6qmu-GF4DVuXTPvyiK8yRkGXVDE3si2Li7p9u-NFpKHsvpunYb1K6Fj5Aoqwf-A1y8t3XEjzuFyhFyX6BXZFqgul3vQ9GN6cgY?key=c-6Yi-Oq69paM0sHVv9ayCTv)

**Steps to Verify:**

-   Review the **Wait Steps** and ensure they have the right duration between messages.
-   If you’re using the **Allow Multiple Opportunities** feature, verify that it’s turned on in your workflow settings.




**Question:** Can I send multiple workflows to the same contact simultaneously?

**Answer:Currently, workflows are designed to handle one execution per contact at a time. However, you can set up multiple workflows for different actions, but only one workflow will be active per contact at any given moment unless re-entry is enabled.

**How to Work Around:**

-   Use the **Allow Re-Entry** setting to enable the contact to re-enter workflows when needed.
-   Set up different workflows for different actions that can run independently.

**Steps to Configure:**

-   Make sure the **Allow Re-Entry** option is turned on for the workflows that need to be re-triggered.
-   Check if the workflows are aligned with your contract needs and don’t overlap unnecessarily.




**Question:** What should I do if a workflow still isn’t working after checking settings?

**Answer:** Double-check all relevant workflow settings, confirm that contacts are correctly configured, and ensure no conflicts exist with other workflows.  




**Question:** Can I limit a workflow to only run on business days?

**Answer:** Yes. In the **Specific Time** window settings, you can uncheck Saturday and Sunday. If a contact triggers the workflow on a weekend, the system will "hold" them at the first step and only execute the action when Monday’s time window opens.