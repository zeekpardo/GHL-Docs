---
title: "How to use Conversation AI Workflow to Book Appointments"
description: "How to use Conversation AI Workflow to Book Appointments"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/P2lgSKOgrQlcP493MjDq"
sourceId: "P2lgSKOgrQlcP493MjDq"
category: "Conversation AI"
---

**How to use Conversation AI Workflow to Book Appointments**

In the fast-paced world of business, efficiently managing appointments is essential. Conversation AI offers a seamless way to book appointments directly into your calendars, helping streamline the scheduling process. This guide will walk you through setting up an automated workflow that uses Conversation AI to fetch available slots from your calendar, suggest them to users, and book appointments automatically. Let's dive in!

## **Overview of Conversation AI for Appointment Booking**

Conversation AI allows you to automate the appointment booking process, reducing the manual effort in scheduling meetings. By integrating this feature into your workflow, you can ensure that your users receive timely and accurate appointment slots, enhancing their overall experience.

### **Key Benefits:**

-   **Automated Scheduling:** Book appointments without manual intervention.
-   **Time Management:** Save time by automatically fetching available slots.
-   **User Engagement:** Provide a smooth booking experience for your users.

## **Step-by-Step Guide to Setting Up Conversation AI for Appointment Booking**

### **Step 1: Access Conversation AI Settings**

-   Head over to the Settings tab and select Conversation AI to configure the necessary settings before creating a new workflow.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcgkaofwYxAZX3uH5hEGv2-e77D_jUUN1j3NUE3sxI_7urCG5zAJ5PmCyA0duQiIjhVEziDZniyQBJcwYyIFti7CNzMtep949lwBbar7kf3LcegaBWec2ANxIw5VCu8jgqED9SCeA?key=lc4iDDWxYVd7UzCEtI4uuQ)

### **Preferences**

In the **Preferences** section for Conversation AI, you can choose from three distinct modes:

-   **Off**This option fully disables Conversation AI. You can still edit settings and details, but the AI will not interact with your customers.
-   **Suggestive**In this mode, Conversation AI provides suggested responses to customer inquiries within the chat window. You have the option to send these suggestions as they are, modify them before sending, or ignore them.
-   **Auto-Reply**This mode allows Conversation AI to automatically send messages to your customers, enhancing customer interactions and improving response times. It functions independently, ensuring seamless communication without manual involvement. Please note, Auto-Reply Mode is currently in private beta and is available to a selected group of users for testing and feedback.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdo2OaQcSF36ONrf8AZ6uKuwsuhskvPGlHGOxikX8ris7fEtplcpaWHOoBpDOYCeKEM53-rptluf8mEoOym_2Ks3HWEh32JiQL3VLyy9ZyFlo4OM_zIRWzwxxHv5mu3vzDN0HHGeQ?key=lc4iDDWxYVd7UzCEtI4uuQ)

### **Supported Channels**

The **Supported Channels** section enables you to select the platforms where Conversation AI will be active. The following channels are currently supported:

-   **SMS**: Enables automated responses to text messages from your customers.
-   **Facebook**: Allows Conversation AI to interact with customers via your business's Facebook page or Messenger.
-   **Instagram**: Conversation AI can respond to direct messages from your business’s Instagram account.
-   **Google My Business**: Enables Conversation AI to engage with customers who reach out to your business through Google's messaging service.

![](https://assets2.modalsupport.net/1775256400641-image10.png)

### **Step 2: Start a New Workflow**

Once you are done, begin creating a new workflow:

-   **Create a Workflow:** Create a new workflow in your automation tool.

![](https://assets2.modalsupport.net/1765821824568-image10.png)

-   **Add a Trigger:** Set up a trigger that starts the workflow when a user replies to a message.
    -   **Trigger Type:** Select "Customer Reply."
    -   **Filter by Channel:** Choose the communication channel, e.g., SMS.
    -   **Add Tags:** Optionally, add tags to differentiate this workflow from others.

![](https://assets2.modalsupport.net/1775256433370-image7.png)

### **Step 2: Configure the Appointment Booking Action**

**1- Select the Action:** In the workflow builder, search for and select the "Appointment Booking" action under the Conversation AI options.

![](https://assets2.modalsupport.net/1775256455479-image8.png)

**2- Choose a Calendar:** Pick the specific calendar you want the AI to book appointments in.

-   **Note:** Recurring calendars are not supported, so make sure to select a non-recurring calendar.

**3- Set Bot Personality and Instructions:** Customize the bot's personality and instructions to reflect your business's tone and approach.

**4- Adjust Maximum Messages:** Define the number of messages the bot can send before giving up if the appointment is not booked (default is 10; recommended is 15).

**5- Timeout Settings:** Set how long the bot should wait for a response (default is 24 hours).

**6- Enable or Disable Confirmation Messages:** Choose whether the bot sends confirmation messages automatically or if you prefer to review them first.

7- Press “Save Action”.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXf6_zFK1aOOwD0WH3FSllzc-b7HMywSmQXkIqj57D62jGD3i8VSG4JAAXSNHswcQY9n-2S8TQPcKjQ5iBcwOJGsETbUeQ3_Cthc7pmklJEQqUMQn0PNj1qiV5mB8Tzt-pxfsmrHwCKkq6cJhT93gwupF2_R?key=lc4iDDWxYVd7UzCEtI4uuQ)

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfKg-Z7EhWranT4DUvkkYCHZEacTvgiSE0f56AXxTW2k-lVp7xK_GAL64CqkJ6bo1NDf5KR5uRmOt-7U9mMPTTLUFM07SetJakl4DKDpZ7cfEKVlPJ2gsr5idOgDdiENphvObStAfi9S1rYCGdiU5OkAZeA?key=lc4iDDWxYVd7UzCEtI4uuQ)

### **Step 3: Define Workflow Branches for Different Outcomes**

1.  **Timeout:** Set actions for when the bot times out due to no response (e.g., send a follow-up email).
2.  **Appointment Booked:** Define what happens when an appointment is successfully booked (e.g., send a confirmation email).
3.  **Appointment Not Booked:** Outline actions if the booking is unsuccessful (e.g., add the contact to a nurturing sequence).

![](<https://assets2.modalsupport.net/1763590871710-Captura de pantalla 2025-11-19 172104.png>)

### **Step 4: Publish and Test Your Workflow**

1.  **Save and Publish:** Save and publish your workflow once everything is set up.
2.  **Test the Workflow:** Send a test message to the designated channel and observe the bot's response through the execution logs. Ensure the bot fetches available slots, makes suggestions, and books appointments correctly.

![](<https://assets2.modalsupport.net/1763590891290-Captura de pantalla 2025-11-19 172124.png>)

## **Practical Example**

-   **Scenario:** A customer sends a message expressing interest in a consultation.
-   **AI Response:** The bot checks your calendar, suggests available slots, and books the preferred time automatically.

## **Use Cases**

-   **Marketing Agencies:** Automate client consultation bookings.
-   **Service Providers:** Streamline the scheduling of service appointments.
-   **Sales Teams:** Set up discovery calls with prospects effortlessly.

## FAQs




**Question:** Can I use Conversation AI for recurring appointments?
**Answer:** No, Conversation AI currently does not support recurring calendars. Ensure you select a non-recurring calendar for booking.




**Question:** How do I customize the bot’s personality?
**Answer:** In the Conversation AI setup, adjust the bot personality settings to align with your business tone and preferences.




**Question:** What happens if the bot fails to book an appointment?
**Answer:** If the bot cannot book an appointment within the set message limit, the workflow will follow the "Appointment Not Booked" branch, where you can set actions like sending follow-up communications.




**Question:** Can I manually review bookings before confirmations are sent?
**Answer:** Yes, you can disable the automatic confirmation feature, allowing you to manually review and confirm each booking.




**Question:** How do I track the performance of my booking workflow?
**Answer:** You can monitor workflow performance using execution logs, which show detailed information about each step, including contacts added and messages sent.




**Question:** What is the difference between "Suggestive" and "Auto-Reply" modes?

**Answer:** In Suggestive mode, the AI generates draft responses for you to review, edit, or send manually. In Auto-Reply mode, the AI sends messages to customers automatically without any manual intervention. Note that Auto-Reply is currently in private beta.