---
title: "Workflow Guide: Notification for Opened Emails"
description: "Workflow Guide: Notification for Opened Emails"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/zs8R2KZDOux0nLIYgIC1"
sourceId: "zs8R2KZDOux0nLIYgIC1"
category: "Workflow Guides"
---

**Workflow Guide: Notification for Opened Emails**

Here is a guide on how to get an email notification whenever a contact opens an email:

-   Navigate to the Automation tab > Workflows
-   Create a Workflow or edit an existing one.

![](https://assets2.modalsupport.net/1764175645362-image6.png)

-   Add the Email Events trigger, filter for “Opened,” and save the trigger.

![](https://assets2.modalsupport.net/1764175666180-image3.png)

-   You may also specify which workflow the email event took place in.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXepw6x63Y0iPgFYA86CkTikaidke318nzB4Y8UL4LIqT9KnCDGcQmy7Qoh81pAhELDW7Qf6b9gosqn_K-QuYa4RI6ijEdjJZP4Hyi0gt8uOEEaXaVHT_Rso4dQDhDqtw9Bx9A-8mCI5Lh8lp-FqHKMUvAJB?key=7gH-vCoOd4St0LoW9c0rUQ)

-   Add the Internal Notification action, select email for the type of notification, select the user type, and customize the email with a timestamp and other custom values of preference.

![](https://assets2.modalsupport.net/1764175689022-image2.png)

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdfz7tOS0l4h4l12zHemL3GWiS0eVlP3cd1zVXDCbRjCIpnXusEUwoxin5r452S6nVAlu64E4J5s3P_v42-qD1Ye73jbLNYhA7M9GWJQvEx5Qhm4wIcHR2LbFdNAyQv3hr1bEV8LAdJt9VtyqynacNyfPGz?key=7gH-vCoOd4St0LoW9c0rUQ)

-   Make sure to publish and save!

![](https://assets2.modalsupport.net/1764175715095-image5.png)

### FAQs




**Question:** How do I set up an email notification for when a contact opens an email?

**Answer:** To set up an email notification, first add the Email Events trigger and filter for “Opened.” Then, add the Internal Notification action, select email for the notification type, and customize it with details such as a timestamp and custom values.




**Question:** Can I specify which workflow the email event occurred in?

**Answer:** Yes, you can specify the workflow in which the email event took place when setting up the Email Events trigger.




**Question:** What information can I include in the internal email notification?

**Answer:** You can customize the internal email notification to include details such as a timestamp and other custom values relevant to the email event.




**Question:** What should I do after setting up the Email Events trigger and Internal Notification action?

**Answer:** After configuring both the Email Events trigger and the Internal Notification action, make sure to publish and save the workflow to activate the email notifications.




**Question:** What type of notification should I select to receive an email alert?

**Answer:** When adding the "Internal Notification" action, you must specifically select **email** as the notification type to receive the alert.  




**Question:** Who can receive these internal notifications?

**Answer:** Within the **Internal Notification** action, you can select the **User Type**. This allows you to send the alert to the assigned user for that contact, a specific teammate, or a custom email address, ensuring the right person is notified immediately.




**Question:** If a contact opens the same email five times, will I get five notifications?
**Answer:** By default, yes. Every "Open" event triggers the workflow. If you want to avoid being overwhelmed, go to **Workflow Settings** and turn off **"Allow Multiple."** This ensures you only get a notification for the _first_ time they open that specific email.