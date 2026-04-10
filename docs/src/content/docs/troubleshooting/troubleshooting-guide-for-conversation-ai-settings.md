---
title: "Troubleshooting Guide for Conversation AI Settings"
description: "Troubleshooting Guide for Conversation AI Settings"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/whaWsRFPV4zILNlJB9A8"
sourceId: "whaWsRFPV4zILNlJB9A8"
category: "Troubleshooting"
---

**Troubleshooting Guide for Conversation AI Settings**

This troubleshooting guide is designed to give you a walkthrough on resolving common issues with **Conversation AI** settings. Whether you're having trouble with the bot's response time, handling customer inquiries across multiple channels, or configuring appointment bookings, this guide will provide step-by-step fixes to ensure smooth interactions. Follow the steps below to quickly address and resolve any issues you might encounter with Conversation AI.

**FAQ: Troubleshooting Conversation AI Settings**




**Question:** Why isn't the Conversation AI responding automatically to customer messages?


**Answer:If your Conversation AI is not responding automatically, it might be because the **bot status** is set to **Suggestive Mode** instead of **Auto-Pilot Mode**.

**How to Fix:**

-   Go to settings, navigate to **Conversation AI Settings**.
-   Ensure that the bot status is set to **Auto-Pilot Mode** to allow the AI to respond automatically to all incoming messages without manual intervention.

**Steps to Configure:**

-   Go to **Conversation AI Settings**.
-   Click on the bot settings and select **Auto-Pilot Mode**.

![](<https://assets2.modalsupport.net/1762338450628-unnamed - 2025-11-05T182721.875.png>)

-   Click **Save** to confirm your changes.

![](<https://assets2.modalsupport.net/1762338470389-unnamed - 2025-11-05T182742.441.png>)




**Question:** Why is my bot not answering appointment booking queries correctly?


**Answer:**  
If your bot is not handling appointment bookings as expected, it's likely that **Appointment Booking Actions** haven't been configured properly, or the **Calendar** has not been assigned.

**How to Fix:**

-   Make sure the **Appointment Booking Actions** are set up correctly and the bot is connected to a specific calendar for appointments.
-   Double-check that you have enabled and selected the correct calendar.

**Steps to Configure:**

1.  In **Conversation AI Settings**, navigate to the **Appointment Booking Actions** section.
2.  Select the appropriate calendar for your bot to reference when booking appointments.
3.  Ensure the **Send Booking Link** and **Trigger Workflow After Booking** options are configured for post-booking actions.
4.  Save your settings.

![](<https://assets2.modalsupport.net/1762338493606-unnamed - 2025-11-05T182807.121.png>)




**Question:** Why is the bot not transferring conversations to another bot in the workflow?


**Answer:If the bot isn’t transferring conversations, the **Transfer to Employee** or **Transfer to Another Bot** action might not be set up correctly.

**How to Fix:**

-   Check if the **Transfer to Employee** or **Transfer to Another Bot** action is enabled and configured in your bot's settings.
-   Ensure the right bot or employee is assigned to handle the transfer.

**Steps to Resolve:**

1.  Go to **Conversation AI Settings**.
2.  Under **Appointment Booking Actions**, select **Transfer to Another Bot** or **Transfer to Employee**.
3.  Choose the appropriate bot or employee for the handoff.
4.  Click **Save** to apply changes.

![](<https://assets2.modalsupport.net/1762338520113-unnamed - 2025-11-05T182828.846.png>)

**Qusetion: My bot isn’t providing answers from the FAQ database. How can I fix this?**


**Answer:If the bot isn’t pulling responses from the FAQ database, it's possible that the **bot training** hasn’t been completed, or the **Custom Bot Responses** are missing.

**How to Fix:**

-   Ensure that the **bot training** process has been completed, and the bot has been properly configured to use FAQs.
-   Add or refresh any missing FAQs or custom responses in the **Custom Bot Responses** section.

**Steps to Fix:**

1.  Go to **Bot Training** under **Conversation AI Settings**.
2.  Review the training and ensure it pulls data from your website or FAQ page.
3.  If necessary, click **Refresh** to update the bot’s training with the latest FAQs or custom responses.
4.  Save the changes.




**Question:** Why is the bot’s response delayed?


**Answer:Response delays may occur if the **Wait Time Before Responding** setting is too long.

**How to Fix:**

-   Adjust the **Wait Time Before Responding** to a shorter time interval to ensure faster responses.
-   If you want the bot to behave more like a human, you can increase the wait time slightly.

**Steps to Adjust:**

1.  Go to **Conversation AI Settings**.
2.  Under **Advanced Features**, locate the **Wait Time Before Responding** setting.
3.  Adjust the wait time according to your preference (e.g., reduce to 3 seconds for faster responses).
4.  Save your changes.

![](<https://assets2.modalsupport.net/1762338538754-unnamed - 2025-11-05T182850.776.png>)




**Question:** Why isn’t my bot updating the contact record after booking an appointment?


**Answer:If the bot isn’t updating the contact record after booking an appointment, it may not be set up to **collect necessary information** like name, phone number, or email before the appointment is booked.

**How to Fix:**

-   Ensure that the bot is programmed to ask for the contact information (name, phone number, etc.) before booking an appointment.
-   Add these questions to the bot’s **Conversation Flow**.

**Steps to Set Up:**

1.  Go to **Conversation AI Settings**.
2.  Click on **Edit Prompt** under **Appointment Booking Actions**.
3.  Add fields like **First Name**, **Last Name**, **Phone Number**, and **Email Address** to the conversation flow.
4.  Save the configuration.

![](<https://assets2.modalsupport.net/1762338566593-unnamed - 2025-11-05T182915.975.png>)




**Question:** How do I test the bot's responses before going live?


**Answer:Testing your bot in real-time allows you to ensure it’s functioning correctly before it interacts with customers.

**How to Test:**

-   Use the **Bot Trial** feature to interact with the bot in a live environment.
-   Provide feedback on its responses and make adjustments as needed.

**Steps to Test:**

1.  Go to **Conversation AI Settings** and select **Bot Trial**.
2.  Type sample queries into the chat window to see how the bot responds.
3.  If needed, provide feedback or adjust the prompts to refine the bot’s responses.




**Question:** My bot is interacting with customers, but I want to make sure it doesn’t behave too "robotic." How can I adjust the bot's tone?


**Answer:If the bot feels too robotic, you can adjust its **Personality** and **Tone** to make interactions feel more natural and aligned with your brand.

**How to Adjust:**

-   Update the bot’s **Personality** setting to match the tone of your business. Options like **Friendly**, **Professional**, or **Formal** can be selected based on your preferred communication style.

**Steps to Adjust:**

1.  Go to **Conversation AI Settings**.
2.  Select **Bot Goals** and choose the **Personality** that best fits your brand (Friendly, Professional, Formal).
3.  Save your settings.

![](<https://assets2.modalsupport.net/1762338587358-unnamed - 2025-11-05T182939.094.png>)




**Question:** Can I configure multiple bots to handle different types of inquiries?


**Answer:Yes, you can create multiple bots and assign them to specific workflows or channels.

**How to Configure:**

-   Create different bots for various functions, such as a **Primary Bot** for general inquiries and other bots for specialized tasks (e.g., appointment bookings, FAQs).
-   Assign the appropriate channels to each bot to manage specific tasks.

**Steps to Configure:**

1.  In **Conversation AI Settings**, click on **Create Bot**.
2.  Choose a **Prompt Template** based on the bot’s role (e.g., General Q&A, Appointment Booking).
3.  Assign the bot to specific channels (e.g., SMS, Facebook, Instagram).
4.  Set it as **Primary** or **Non-Primary** based on your needs.
5.  Save your settings.

![](<https://assets2.modalsupport.net/1762338607427-unnamed - 2025-11-05T183000.270.png>)




**Question:** Can the bot handle multiple languages simultaneously?

**Answer:** Yes, the Conversation AI is designed to detect the language of the incoming message and respond in the same language, provided it has been trained on multilingual data or the base model supports it.