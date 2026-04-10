---
title: "How to Get Notified When a Lead Opens an Email"
description: "How to Get Notified When a Lead Opens an Email"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/HpkdCXdEbylmwlS5mUSi"
sourceId: "HpkdCXdEbylmwlS5mUSi"
category: "Workflow"
---

**How to Get Notified When a Lead Opens an Email**

In this article, you will learn how to set up your workflow to notify you when a lead opens an email.

### Step 1: Create the workflow 

-   Start from scratch by navigating to **Automation** on the left Menu bar> **Workflows** at the top, then clicking on the “**\+ Create Workflow**” 
-   Select Start from scratch.

![](https://assets2.modalsupport.net/1764767259862-image7.png)

**Step 2:** Name the Workflow and then add the Email Events Trigger

-   Add the trigger Email Events
-   Add the filter ‘Event’ and select ‘Opened’.
-   You can also filter by workflow.

![](https://assets2.modalsupport.net/1774549042608-image7.png)

-   Save Trigger

### Step 3: Add an action 

-   Click on the “+” symbol to add the action Send Internal Notification

![](https://assets2.modalsupport.net/1764013968403-image.png)

-   Select the type of notification from the dropdown. In this example, we will be using the email type Internal Notification.

![](https://assets2.modalsupport.net/1764013983982-image.png)

-   Fill in the details as needed. Below is an example I created using custom values.

![](https://assets2.modalsupport.net/1774549076506-image3.png)

![](https://assets2.modalsupport.net/1764014045652-image.png)

-   Publish and save 

### Step 4: Test the workflow

**Step 5: Monitor and Optimize Workflow Performance**

-   Regularly check the analytics for your workflow to ensure it's working as expected. Monitor the performance of email events and notifications, and adjust any filters or actions as necessary to improve the efficiency of your system.

**Note:** The best way to test this workflow will be by opening the email you need your leads to open from a test email address you have created.

### FAQs




**Question:** Can I set up notifications for other email events besides opened emails?
**Answer:** Yes, you can set up notifications for other email events by adjusting the filter in the Email Events trigger. Available options include events like clicked, delivered, and bounced emails.




**Question:** How do I customize the internal notification details?
**Answer:** When setting up the Send Internal Notification action, you can customize the notification by using custom values to include specific details such as the lead’s name, email, or the subject of the opened email.




**Question:** Can I receive notifications through channels other than email?
**Answer:** Yes, you can choose different types of internal notifications, such as SMS, Slack, or push notifications, depending on the available integrations in your system.




**Question:** How can I test if my workflow is working correctly?
**Answer:** To test the workflow, send the target email to a test email address you own, open the email, and check if the internal notification is triggered and received as expected.  




**Question:** How can I monitor and optimize workflow performance?
**Answer:** Regularly review analytics to ensure your workflow functions correctly. Monitor email events, notifications, and adjust filters or actions as needed for better efficiency.  




**Question:** Can I narrow down the email events notification to a specific campaign?
**Answer:** Yes. When setting up the Email Events trigger, you have the option to filter by workflow, allowing you to track opens for specific email sequences rather than all emails sent from the system.




**Question:** Can I see a history of all the "Opens" in one place?

**Answer:** Yes. Beyond the internal notification, you can go to the **Enrollment History** or **Execution Logs** tab within the workflow to see a timestamped list of every contact who has triggered the "Opened" event.