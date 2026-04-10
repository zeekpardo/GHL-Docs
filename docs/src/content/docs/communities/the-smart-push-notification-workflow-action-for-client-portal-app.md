---
title: "The Smart Push Notification Workflow Action for Client Portal App"
description: "The Smart Push Notification Workflow Action for Client Portal App"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/3DsSz422NdZeMp4a4TXK"
sourceId: "3DsSz422NdZeMp4a4TXK"
category: "Communities"
---

**The Smart Push Notification Workflow Action for Client Portal App**

The Smart Push Notifications workflow action allows businesses to send personalized notifications to their contacts via the Client Portal. This feature enables customization of the notification title, body, and even includes the option for redirecting users to specific pages, such as Communities or Courses. The purpose of this article is to guide you through the process of setting up and configuring Smart Push Notifications to improve user engagement and interaction.

**Note:** This action will only send notifications to registered Client Portal users. Non-registered users will not receive notifications.

### How to Use Smart Push Notification

**1\. Add the Action to a Workflow**:

-   Navigate to **Automation > Workflows**.
-   Open an existing workflow or create a new one.

![](https://assets2.modalsupport.net/1763652707407-1.png)

-   Click on **\+ Add Action**, search for “Smart” and select **Smart Push Notification**.

**2\. Configure the Fields**:

-   **Title**: Enter a catchy, personalized title (e.g., “Welcome {{contact.first\_name}}!”). Use placeholders like {{contact.first\_name}} for dynamic personalization.
-   **Message Body**: Write the main content of the notification (up to 300 characters). Again, you can use placeholders like {{contact.last\_name}} for personalization.
-   **Redirection**: Choose the destination where the user will be redirected after clicking the notification. Options include **Communities** or **Courses**.

![](<https://assets2.modalsupport.net/1766069851411-Captura de pantalla 2025-12-18 095720.png>)

**3\. Save and Activate**:

-   Click **Save Action** to confirm the configuration.
-   Test the workflow with a sample contact to ensure it triggers correctly.
-   Activate the workflow once you’re satisfied with the setup.

**Example Use Case**

Let’s say you want to notify a contact about a new community post. Here’s how the configuration would look:

**Title:** "New Community Update!"

**Message Body:** "Hi {{contact.first\_name}}, check out the latest post in our community."

**Redirection:** Choose Communities.

When the workflow is triggered, the contact will receive a push notification with a link to the Community page, driving them to engage with the new content.

![](https://assets2.modalsupport.net/1763652759907-3.png)

**Pro Tips**

**Maximize Engagement:** Use clear and concise language for both the title and the message body. Short and actionable notifications are more likely to be clicked.

**Test Before Activating:** Always test the notification with a sample contact to ensure that the redirection works as expected.

**Personalization is Key:** Utilize dynamic placeholders to make notifications feel more tailored to each recipient, improving the likelihood of interaction.

**FAQs**




**Question:** Can I use placeholders in the notification message?
**Answer:** Yes, you can use placeholders like {{contact.first\_name}} and {{contact.last\_name}} to personalize the title and message body of the notification.




**Question:** How do I redirect users after they click on the notification?
**Answer:** You can choose between Communities or Courses as the destination for the redirection. This ensures users are directed to relevant pages within the Client Portal.




**Question:** What is the maximum character limit for the message body?
**Answer:** The message body can be up to 300 characters long, allowing you to deliver concise and engaging messages.




**Question:** Can I use Smart Push Notifications for any type of communication?
**Answer:** Smart Push Notifications are best used for engaging and timely notifications like updates, reminders, and announcements. They are designed to work with workflows, ensuring messages are sent at the right moment.




**Question:** Who will receive Smart Push Notifications?
**Answer:** Smart Push Notifications will only be sent to contacts who are registered users in the Client Portal. Non-registered users will not receive these notifications.




**Question:** Is there a way to add an image or emoji to the notification?

**Answer:** While the current feature focus is on text and personalization placeholders, you can use **standard emojis** within the Title and Message Body fields to make your notifications more visually engaging and "on-brand."




**Question:** What is an example of using this for community engagement?

**Answer:** You could set the Title to "New Community Update!" and the Redirection to "Communities." When the workflow triggers, the user is notified of new content and sent directly to the community feed upon clicking.




**Question:** Why is the dispute feature not appearing for my ?

**Answer:** This feature may be restricted if your Google Business Profile account manages a **large number of listings**. Specifically, Google often prevents access to the dispute process for accounts managing **more than 30 profiles**.




**Question:** What is the recommended best practice before fully activating a Smart Push workflow?

**Answer:** You should always **test the workflow** with a sample contact to ensure the notification triggers correctly and the redirection link leads to the intended destination.