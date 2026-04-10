---
title: "Troubleshooting SMS Delivery Failures: A Comprehensive Guide"
description: "Dealing with SMS delivery issues can be frustrating, but with the right troubleshooting approach, most problems can be resolved efficiently. This guide walks…"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/GDjictbP05YoAthAEjgn"
sourceId: "GDjictbP05YoAthAEjgn"
category: "Troubleshooting"
---

Dealing with SMS delivery issues can be frustrating, but with the right troubleshooting approach, most problems can be resolved efficiently. This guide walks you through the possible causes of SMS delivery failures and offers clear, actionable steps for fixing them.

### **1\. Understanding SMS Delivery**

**Q: How does SMS delivery work?**

A: When an SMS is sent, it travels through multiple stages. First, it goes through , then passes through phone number validation and, finally, the carrier network. A failure at any of these stages could prevent successful delivery.

### **2\. Locating Sending/Delivery Errors**

**Q: How can I find the error if my SMS fails to send or deliver?**

A: If an SMS fails, an error message will appear in the conversation view of your account. This error message will include an error code, which will help identify the cause of the problem.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfJE0K_L0tVRpOjqFDW3-xvUeHXY2XbOAoCksExWTSaWpWcxDwmoVJI0FNPy4eC3yMPliniiLldl9J3bYKQI2vJoFmkAUk7v29kbl8pmzzNH4KqUCMmvalknMNPT-SR3lPqBiPkkA?key=HGFWd9gjrq8kiXOLV3hqqnuN)

Dealing with SMS delivery issues can be frustrating, but with the right troubleshooting approach, most problems can be resolved efficiently. This guide walks you through the possible causes of SMS delivery failures and offers clear, actionable steps for fixing them.

### 1\. Understanding SMS Delivery




**Question:** How does SMS delivery work?
**Answer:** When an SMS is sent, it travels through multiple stages. First, it goes through , then passes through phone number validation and, finally, the carrier network. A failure at any of these stages could prevent successful delivery.

### 2\. Locating Sending/Delivery Errors




**Question:** How can I find the error if my SMS fails to send or deliver?
**Answer:** If an SMS fails, an error message will appear in the conversation view of your account. This error message will include an error code, which will help identify the cause of the problem.

### 3\. Common Causes of Delivery Failures

#### Issues at Level:




**Question:** What happens if Do Not Disturb (DND) is enabled for a contact?
**Answer:** If DND is enabled for a contact, will not send the SMS, and an error message will be displayed indicating that the message could not be delivered.




**Question:** What if the phone number is a landline or non-SMS capable?
**Answer:** If phone number validation is enabled, the platform checks if the number can receive SMS. If it's not SMS-capable (such as a landline), the message will not be sent, and an error will appear.




**Question:** Why can't I send messages from a new account?
**Answer:** New accounts are subject to gradual sending limits to prevent misuse. These limits increase over time, but they can be adjusted by the account holder to allow more messages to be sent.




**Question:** Why am I getting an error saying I’ve exceeded my daily SMS limit?
**Answer:** If an account exceeds its daily SMS quota, will stop sending messages for the day. However, one-on-one messages will still be delivered. The daily limit can be set and managed by the account holder.




**Question:** Why has my account’s SMS sending been suspended?
**Answer:** If the account exceeds certain thresholds—such as a high error rate, opt-out rate, or carrier complaints—SMS sending privileges may be suspended temporarily. During this time, any attempted messages will fail.

#### Issues at the Phone Layer:




**Question:** What happens if the recipient's number is on the Do Not Disturb (DND) list?
**Answer:** If the recipient's number has opted out in the past, the SMS will not be delivered. The recipient must opt back in by texting a keyword like "START" to the number before they can receive messages again.




**Question:** What does a "Queue Overflow" error mean?
**Answer:** A "Queue Overflow" error occurs when too many messages are queued at once and cannot be delivered in a timely manner. typically queues messages for up to 4 hours before they are marked as failed. Reducing the validity period can help avoid this issue.




**Question:** What if my account gets suspended after a message was sent?
**Answer:** If the account is suspended after the message is queued but before it is sent, the message will fail. In this case, reach out to your support team for assistance.

#### Carrier Network Issues:




**Question:** What does "Unreachable Destination Handset" mean?
**Answer:** This error occurs when the recipient's phone is either switched off, out of service, or unable to receive SMS due to signal issues. It can also happen if the number is not capable of receiving SMS (e.g., landline).




**Question:** Why is my message being blocked?
**Answer:** Your message could be blocked for several reasons:

-   The recipient's phone is unable to receive SMS (e.g., landline).
-   The recipient is on a national Do Not Call registry.
-   The recipient has opted out using a keyword like "STOP."
-   The message was sent from a toll-free number to a handset that previously responded with an opt-out keyword.




**Question:** Why did my message fail due to attachment size?
**Answer:** If your SMS includes an attachment, ensure that the file size does not exceed the allowed limit. Large attachments may cause the message to fail.




**Question:** Why are my international SMS messages failing?
**Answer:** International SMS messages may fail due to geo restrictions. Ensure that the recipient's country allows SMS from and that there are no regional restrictions in place.




**Question:** My message body exceeds 1600 characters—why isn't it sending?
**Answer:** SMS messages typically have a character limit of 1600. If your message exceeds this, it may not be sent. This issue can also occur if you're using dynamic content, like custom values (e.g., {{message.body}}), which could unexpectedly exceed the character limit.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXf1s6LaOfrZz-jixzK7aKRvkoIKlOXtnOp0Mqy9GmfoTPX_800GEKilQpg8SQG_ZprmmCeL6Lexa-r2MBcGBbEO6k9JTyPJD4OXW4vLUCupObz1KlR44ZjG3n_-7f3iTVbF6jqR6Q?key=HGFWd9gjrq8kiXOLV3hqqnuN)




**Question:** Why am I being charged for SMS messages that failed to deliver?
**Answer:** Charges apply when delivery is attempted, even if the message fails. This covers the cost of trying to send the message, regardless of whether it was successfully delivered.  




**Question:** What if the recipient's number is valid but the message still fails?
**Answer:** Check for network issues, ensure the recipient hasn't opted out, and verify your account hasn't hit limits or been suspended. Contact support if the issue persists.




**Question:** What should I do if a valid number still fails to receive my SMS?
**Answer:** Check for network issues, confirm the recipient hasn’t opted out, and ensure your account hasn’t hit limits or been suspended. Contact support if the problem persists.  




**Question:** I’m trying to reply to a client manually, but my automated bulk messages have stopped sending for the day. Why can I still send individual texts?
**Answer:** This happens when your account reaches its **Daily Message Limit** set by your agency. To protect deliverability, bulk and automated messages are paused once the limit is hit. However, the system still allows individual, one-on-one replies so you don't lose touch with active conversations. You can either wait for the limit to reset the next day or ask your agency to adjust your settings.




**Question:** How do I identify the specific reason my SMS failed to send?
**Answer:** Check the conversation view within your account. If a message fails, an error message and a specific error code will appear there to help you pinpoint the exact cause.




**Question:** Why might an account's SMS sending privileges be temporarily suspended?

**Answer:** Suspension can occur if the account exceeds specific safety thresholds, such as a **high error rate**, a high number of **opt-out requests**, or direct **carrier complaints**.