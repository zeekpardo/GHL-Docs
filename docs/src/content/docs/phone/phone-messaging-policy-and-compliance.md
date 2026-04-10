---
title: "Phone Messaging Policy and Compliance"
description: "Phone Messaging Policy and Compliance"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/KmDAUjnmk6f6DPyJM89F"
sourceId: "KmDAUjnmk6f6DPyJM89F"
category: "Phone"
---

**Phone Messaging Policy and Compliance**

We all expect that the messages we want to receive will reach us, unhindered by filtering or other blockers. An important step that our customers can take to make that expectation a reality is to prevent and eliminate unwanted messages.

Make sure that the messages sent through are to consenting parties and follow applicable laws, industry standards, and guidelines. We also want to be mindful of measures of fairness and decency when in doubt.

## Phone Messaging Policy

The phone policy was implemented to:

-   Avoid SMS Spam blasts from fake signups.
-   Avoid getting accounts blocked due to suspicious activity
-   Avoid legal actions due to increased spamming to non-consenting customers. Only bulk SMS sending will have daily limitations to avoid account suspension due to non-compliant messaging activity.

All messaging transmitted via the platform - regardless of the use case or phone number type (e.g., long code, or toll-free) - needs to comply with the Application-to-Person (A2P) messaging. All A2P messages originating from the system are subject to this Messaging Policy, which covers messaging rules and /or prohibitions regarding:

**Consent (“opt-in”):** Consent can't be bought, sold, or exchanged. For example, you can't obtain the consent of message recipients by purchasing a phone list from another party. And SMS should only be sent to the opted-in contacts.  
**Revocation of Consent (“opt-out”):** The initial message that you send to an individual will automatically include the following language: “Reply STOP to unsubscribe,” or the equivalent so that Individuals have the ability to revoke consent at any time by replying with a standard opt-out keyword.  
**Sender Identification:** Every initial message will automatically include sender information, except in follow-up messages of an ongoing conversation.  
**Messaging Usage:** You should not be sending messages in any way related to alcohol, firearms, gambling, tobacco, or other adult content.

**Filtering Evasion:** As noted above, we do not allow content specifically designed to evade detection by unwanted messaging detection and prevention mechanisms. This includes intentionally misspelled words or non-standard opt-out phrases that have been specifically created with the intent to evade these mechanisms. We do not permit snowshoeing, defined as spreading similar or identical messages across many phone numbers with the intent or effect of evading unwanted messaging detection and prevention mechanisms.  
**Automated Opt-Out:** To help maintain compliance and build trust, outbound messages automatically include opt-out instructions and sender identification at regular intervals within ongoing conversations. 

This policy applies to all customers who use messaging services to safeguard their messaging capabilities and services.

## Mandatory Opt-Out Language & Sender Information addition

-   The consent for sending out communications cannot be bought, and the only way is to get explicit consent from the user for the SMS campaigns and communications.
-   The consent is taken by the account holder, in our case, accounts who are the actual sender of these communications.
-   To comply with the messaging policies, Every SMS conversation, including Missed Call Text-Back (MCTB) and review requests, will **automatically include** a sender ID (e.g., your business name) and opt-out language (e.g., "Reply STOP to unsubscribe") unless these are already included in the message.

**Please Note:** The “Opt out message” feature applies to Bulk action(Bulk SMS), and **does not** apply to Workflow, campaigns, or One-on-one conversations.

If individuals reply with a standard opt-out keyword like STOP, the consent to send SMS will be revoked. All upcoming and queued messages will fail. Also, a permanent DND will be enabled at the contact level.

**_Please Note:_** _This is mandatory info that should be shared with the end customer, so this is a mandatory check for all the initial messages._

-   **SenderID:** Every message you send must identify you (the party that obtained the opt-in from the recipient) as the sender, except in follow-up messages of an ongoing conversation. We will add the sender info: “Thanks, <Location Name>".

**Sample Opt-Out and Sender Information message screen:**

![](https://assets2.modalsupport.net/1761061677969-image.png)

## Customizing the Opt-Out Language and Sender Information

Go to **Settings** > **Phone System** > Messaging > Messaging Compliance, where you can customize the opt-out message; below is a screenshot for reference:  

![](https://assets2.modalsupport.net/1770828331301-image2.png)

**_Note:__Opt-out language is only added if the message doesn’t already include it, avoiding duplication._**

**_Important: New locations/accounts, as well as Account Users and Admins, can no longer disable these checkboxes, ensuring consistency and compliance throughout your account._**

## Violations

When we identify a violation of these principles, where possible, we will work with customers in good faith to get them back into compliance with the messaging policy. However, to protect the continued ability of all our customers to freely use messaging for legitimate purposes, we reserve the right to suspend or remove access to the platform for customers or customers’ end users that we determine are not complying with the Messaging Policy, or who are not following the law in any applicable area or applicable communications industry guidelines or standards, in some instances with limited notice in the case of serious violations of this policy.

Every new account (from February 1st, 2024) that is on the Phone System going forward will follow the "Ramp Up Model". This ramp up will start the day the first SMS is successfully sent, NOT when the account is created.

The SMS limit is increased every day for the next 7 days. Starting the 8th day the account will have the limit set to 3000+ SMS/day. Below is the table which will give you a detailed idea:

![](https://assets2.modalsupport.net/1761061758672-image.png)

**Recommended process for new accounts:**

-   A new account will start on Level 1 Sending Limits of 100 SMS within 24 hours.
-   To unlock Level 2, an account must send 100 SMS within 24 hours. 
-   After sending 100 SMS within 24 hours, the account will be temporarily restricted from sending SMS for 24 hours. After 24 hours, SMS sending will be allowed again and you will unlock Level 2 sending limit of 250. 
-   Then to unlock Level 3, you must send 250 SMS within 24 hours, after sending 250 SMS within 24 hours you will be temporarily restricted from sending SMS for 24 hours. After 24 hours, you will unlock the Level 3 sending limit of 500. 
-   This process of hitting the level sending limit and waiting 24 hours, continues until Day 8, which allows for 3000+ sending.

## Error Screens and Notifications

-   **Conversation Error:** You have exceeded your SMS sending limit.

![](https://assets2.modalsupport.net/1764778663601-image6.jpg)


**Bulk Action:** You are allowed to send 5000 message(s) in a day. You have already sent 5000 message(s). If you wish to proceed, 1 Message(s) will be failed.

![](<https://assets2.modalsupport.net/1757532053675-Phone Messaging Policy 4.jpg>)

## Spam Message Handling

Each of the messages sent out from the account ends up with the following four statuses:

-   Sent: The messages whose response we did not receive from the carrier can be in any of the three statuses below.
-   Delivered: The messages which were successfully delivered and sent to the contact.
-   Failed: The messages that were canceled or were not sent to the carrier to forward to the contact.
-   Undelivered: The message sent needed to be more suspicious or fulfilled the messaging policy.

As part of this feature, we will only consider Undelivered messages. All the undelivered messages end up with a particular error code, and we will start storing them at each message level. We will further use them to start enabling Temporary/Permanent DND at a contact level so that new SMSs are not sent to them, increasing your deliverability rate. 

The table below summarizes the undelivered SMS error codes what each of them means, and the relevant remediation measures we are taking:

**Response Code**

**Code Description**

**Remediation**

30005

User Inactive/Number does not exist

Enable Temporary DND

30003

Unreachable- Out of Service

Enable Temporary DND

30004

Do not want SMS/DND enabled

Enable Permanent DND

30006

Landline/Incapable to receive SMS

Enable Temporary DND

30008

None of the above scenarios matched

Do nothing

**_Temporary DND:_** _The DND set at a contact level can be revoked by the account admin._

**_Permanent DND:_** _The DND set at the contact level cannot be revoked by the account admin as the contact is incapable of receiving the message or has opted out from receiving messages._

**_Opt-Out Keyword:_** _Individuals must be able to revoke consent at any time by replying with a standard opt-out keyword like STOP, Unsubscribe, etc. In this case, a permanent DND will also be enabled at the contact level._

## Advantage:

-   This will restrict the account from sending SMS to non-relevant contacts, eventually increasing the deliverability rate and decreasing the possibility of getting blocked.
-   The account will only send messages to the contacts who have opted in.

## Spam messaging error screens

-   **Conversation:** Cannot send messages as DND is active for SMS.

![](https://assets2.modalsupport.net/1764778771923-image2.png)

-   **Bulk Action:** All SMS sent via features like workflow and bulk SMS will automatically skip the DND-marked contacts from the sender list.

## Revoke DND for a Contact

**For Temporary DND**, go to the contact details and remove the DND flag, below is the screenshot of the sample screen:  

![](https://assets2.modalsupport.net/1764778811336-image4.jpg)

**For Permanent DND,** you cannot revoke the same from UI. To revoke the permanent DND, request the contact to send a reply with the "START," "YES," and "UNSTOP" keywords to the number. This should automatically remove the DND from the contract.

**_Note:_** _If the START keyword does not revoke the DND and the incoming/outgoing messages are still failing, please raise a support ticket._

## Error and Opt-out Rate Monitoring

-   We are focused on helping our customers deliver trusted communications. Ensure the carrier does not block or suspend the account permanently based on bad usage.
-   We will be monitoring the delivery rate of the overall account and be taking proactive measures(as mentioned below) to keep the delivery rate in check:
    -   **Violation Email** \- We will send out an email notification as soon as the account hits the error rate of 8% and opt-out rate of 1%.
    -   **Temporary Account Restriction -** We will send out a suspension email as the account hits the error rate of 12.5% and opt-out rate of 2.5%.

**_Please Note:_** _As soon as the account hits the temporary suspension, all upcoming outbound SMS will fail until 00:00 AM UTC._

**What should we do when we get a violation email?**

-   Stop all your workflows, campaigns, triggers, and/or bulk actions to contacts who have yet to explicitly opt-in to receive messages from the account.

-   Enable and customize the Opt Out language and SenderID message as per your use case so that all the upcoming messages are not flagged.

-   Please do not make bulk communication or implement message blasts. Make sure no cold prospecting message campaigns are sent in the near future until resolved.

**What are error and opt-out rates, and is it good to have a threshold?**

-   A **High Opt-Out Rate** indicates that contacts receiving your messages have objected, generated complaints, or marked your SMS as spam. **A good opt-out rate is typically in the range of 0—1%.** Once the opt-out rate hits 2%, the account will be locked for sending text messages for 24 hours.
-   A **High Delivery Error Rate** indicates that you send SMS to contacts that are no longer in service, are unreachable, or use a non-SMS-capable device such as a landline. This may also mean that external carrier filters are refusing to deliver your SMS due to bad sending behavior in the past. **A reasonable error rate is typically in the range of 0—6%.** Once the error rate hits 12%, the account will be locked for sending text messages for 24 hours.

**_Please Note:_** _The account suspension will be lifted in 24 hours. However, can the account be permanently suspended?_

**_Please Note:_** _One-on-one conversation, Test SMS, Resend Message, and MissedCallTextBack are allowed even if the account is suspended._

### FAQs




**Question:** How often does the SMS limit last?

**Answer:** The SMS limit will refresh every 24 hours. If the account is brand new, then each day, the increments will increase according to the table above. Once you have hit the 8th day, your SMS limit will be capped at 5000 daily.




**Question:** I want to send over 5000 SMS daily; how can I increase my limit?

**Answer:** Once your account(s) hit the 8th-day mark (5000 SMS per day), you may reach out to your Agency Admin with the Email Subject **<Increase SMS Daily Limit>** with your account, new limit details, and your use case for the new limit.




**Question:** What happens when we hit our daily limit? Can we respond to SMS if a lead replies?

**Answer:** No, you cannot respond manually to incoming messages. SMS daily limits will affect all messaging activities, including manual SMS in conversation, automation within workflows, and bulk actions.




**Question:** Can we undo the DND option in bulk?

**Answer:** No, we cannot because this prevents sending SMS in bulk again after DND is enabled for the contacts. 




**Question:** Is the auto-append Sender ID and Opt-Out Language feature also applying to every first text of the workflow or manual SMS?

**Answer:** This feature only applies to Bulk action (Bulk SMS) and does not apply to One-on-one conversations, Workflow, or Campaigns.




**Question:** Does the daily limit apply to my one-on-one conversations?
**Answer:** Yes. The daily limit is a total cap for the entire account. Whether you are sending a bulk blast or a single manual text to a client, every message counts toward your daily "Ramp Up" limit.




**Question:** What happens if I hit my daily limit in the middle of a workflow?

**Answer:** If a workflow tries to send a message after you have reached your daily cap, that specific message will **fail**. The system will not "queue" it for the next day. You will need to manually resend failed messages or wait until your limit resets at 00:00 AM UTC to resume automation.