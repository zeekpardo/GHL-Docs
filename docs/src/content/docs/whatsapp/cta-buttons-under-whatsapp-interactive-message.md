---
title: "CTA Buttons under WhatsApp Interactive Message"
description: "CTA Buttons under WhatsApp Interactive Message"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/Obeopy6VLxizTZCB40gY"
sourceId: "Obeopy6VLxizTZCB40gY"
category: "WhatsApp"
---

**CTA Buttons under WhatsApp Interactive Message**

In customer communications, clarity and simplicity are essential to building trust and increasing engagement. Long, raw URLs in WhatsApp messages can create clutter and discourage users from clicking. To improve user experience and streamline workflows, businesses can use **Interactive Call-to-Action (CTA) URL Button Messages** within WhatsApp automations.

## Key Features & Benefits

### Clean CTA Buttons

Display clear, branded buttons like **“Visit Website”** instead of raw URLs. This improves visual presentation and builds trust with the end user.

### Branching Logic

Branch automation workflows based on interaction outcomes:

-   **Link Opened**
-   **Not Delivered**
-   **Timeout (No Action)**

### Rich Media Headers

Support for Text, Image, Video, or Document headers allows you to provide additional context for your message.

### Timeout Configuration

Set how long the interactive button remains active between **5 minutes** and **2 days**.

### Trackable Engagement

Monitor exactly which contacts interacted with the CTA, allowing for smarter follow-ups and performance optimization.

### Multi-Channel Resilience

If WhatsApp delivery fails, workflows can automatically fall back to other channels like SMS or email.

## How to Use

1.  **Ensure Customer Service Window is Open**Before using CTA Button Messages, confirm the **24-hour WhatsApp Customer Service Window** is active. This begins when a customer messages your business.

![](https://assets2.modalsupport.net/1764192926682-1.png)

1.  **Add the WhatsApp Interactive Message Action**In your automation:  

    -   Click **Add Trigger** 
    -   Select **WhatsApp Interactive Messages**
    -   (Optional) Rename the trigger for clarity

![](https://assets2.modalsupport.net/1775249589685-image2.png)

1.  **Choose Message Type**Set **INTERACTIVE MESSAGE TYPE** to **Visit Website Button**

![](https://assets2.modalsupport.net/1764192955645-3.png)

1.  **Fill in Required Fields**
    -   **HEADER TYPE**: Choose Text, Image, Video, or Document
    -   **HEADER TEXT / MEDIA URL**: Input relevant content
    -   **BODY**: Add the main message (max 1024 characters)
    -   **FOOTER**: Optional, supporting text (max 60 characters)
    -   **URL**: Enter the destination URL ( variables supported)
    -   **BUTTON TEXT**: Example: “Book Now” (max 20 characters)
    -   **TIMEOUT UNIT & VALUE**: Between 5 minutes and 2 days

![](https://assets2.modalsupport.net/1764192969009-4.png)

1.  **Configure Workflow Branches (Optional)**Add branches for:  

    -   **Link Opened**
    -   **Not Delivered**
    -   **Timeout**
2.  **Save and Test**Use a sample contact to test:  

    -   Link functionality
    -   variable population
    -   Button appearance

**Customer Service Window**

The **24-hour Customer Service Window** must be open to send interactive messages.

**How it works:**

-   The window is activated when a customer messages your business via WhatsApp.
-   Within this period, you can send **unlimited interactive messages** without additional cost.
-   If the window is closed, you must send a **Marketing or Utility Template** to reopen it.

**How to check or trigger:**

-   **Trigger: Customer Replied (Channel = WhatsApp)**
-   **Action: Customer Service Window Check**
    -   Branch: **Open** → proceed with the message
    -   Branch: **Closed** → send a reactivation template

![](https://assets2.modalsupport.net/1764192980496-5.png)

## FAQs




**Question:** Do Interactive WhatsApp Messages incur any extra cost?
**Answer:** No. If sent within the 24-hour Customer Service Window, there is no additional charge for using interactive messages, including CTA URL buttons.




**Question:** What if I try to send a message after the service window is closed?
**Answer:** You must send a pre-approved Marketing or Utility Template message to reopen the window before continuing with interactive messaging.




**Question:** Can I include more than one CTA button in a single message?
**Answer:** No. Only one CTA button is allowed per interactive message. To send multiple options, use Quick Reply Buttons instead.




**Question:** Can I use personalization in the button link?
**Answer:** Yes. variables (e.g., {{contact.name}}) can be used within the URL to personalize each contact’s link dynamically.




**Question:** What happens if the contact doesn’t click the button?
**Answer:** You can set up a **Timeout** branch in the automation to trigger a fallback message or reminder after the button expires.




**Question:** Can I track if the button was clicked?
**Answer:** Yes. Workflow branches allow you to react to **Link Opened**, providing engagement data for further segmentation or follow-up.




**Question:** What kind of content can I use in the header?
**Answer:** Headers can include **Text**, **Images**, **Videos**, or **Documents**, depending on your use case and message type.




**Question:** Can I use this feature for promotional campaigns?
**Answer:** Only if the recipient initiates the conversation. For cold outreach or inactive contacts, you must use a compliant template message first.




**Question:** Are these messages supported on all devices?
**Answer:** Yes. Interactive messages are supported across all WhatsApp-enabled devices. However, user experience may vary slightly between platforms.




**Question:** What happens after the timeout period?
**Answer:** The button becomes inactive, and your workflow can use the **Timeout** branch to trigger alternative actions or reminders.




**Question:** Can I test the button before sending it to contacts?
**Answer:** Yes. Use a sample contact to verify that the button link works, variables populate correctly, and the message appears as intended.




**Question:** What is the maximum duration I can set for a CTA button to remain active?
**Answer:** You can configure the timeout period for an interactive button to stay active anywhere between a minimum of 5 minutes and a maximum of 2 days.




**Question:** How do I handle delivery failures in my automation?

**Answer:** You can utilize "Multi-Channel Resilience" by configuring a **Not Delivered** branch in your workflow. If the WhatsApp message fails, the system can automatically trigger a fallback action, such as sending an SMS or email.