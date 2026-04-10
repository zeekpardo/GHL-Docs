---
title: "How To Set Up Automated Calls And Voicemail Drops Within Your Campaigns"
description: "Note: The Campaign feature has now been deprecated. Please, check our article, “How To Set Up Automated Calls And Voicemail Drops in a Workflow” to learn how…"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/CMyPeaZvJPuYvySESvXi"
sourceId: "CMyPeaZvJPuYvySESvXi"
category: "Campaigns (Automation)"
---

**Note: The Campaign feature has now been deprecated. Please, check our article, “How To Set Up Automated Calls And Voicemail Drops in a Workflow” to learn how to do this on Workflows.**

You can use the Call Event in a campaign to automatically have call the customer when that step is reached in the campaign. If the lead answers, it will connect to the assigned user’s phone. This is a very useful tool because you can get your lead and the assigned user on the phone together, just after the lead has opted-in is fresh.

## **Navigation**

### **Step 1: Create a New Campaign or Open an Existing Campaign**

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdvfxiQvhm7AqkmrxvSN7lwk5UKmoNmHv3CdZ_MkVwnKpq3_MXw1W4_dznCxHTGPgxQCdV4POWZ0G4llVZeN01-ujKjpSNoFnB6oTdQl8dBHqwnm9mi-6OUUk5YNq-YZ8GuOCJGOIHsrsaC7Um8j3yzNXXT?key=ZAaRcLCDQnuNZF5roRSc4w)

-   Create a campaign or edit an existing campaign.
-   Navigate to Campaigns > Create Campaign (or click into an existing one)
-   Add a Call Event
-   Follow the steps in the event.
-   Save to confirm your changes.
-   **_NOTE_:** If you haven’t set up a forwarding number or a company number, check out our article on inbound calls before continuing.
-   **_NOTE_:** When a call event in a campaign successfully connects with the lead/customer, it will connect to the forwarding number (or if no forwarding number, the number that is set in Company Settings). As such, it is necessary to ensure that the phone number being utilized is connecting to the right person in your company (salesperson, front desk, etc.).

### **Step 2: Assigning or adding a user to a Campaign**

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfgkGZUAyywYT5skf0DjCRqkmLv2JErUnXobwzXTS7hbhf_9WJ6sOUO-MUZOunSEs2dNcBzE467RgWpJto05bFPBAy2Js7wqDlB4xe4EgQANjzMQkA4vCQ4BfoGb0K53DHXb9GNGA4pey8PGFvPbgdLGlZy?key=ZAaRcLCDQnuNZF5roRSc4w)

-   By assigning a user (or users) to the campaign, you ensure that when a lead is entered into a campaign the call event comes from the assigned user.
-   **_NOTE_:**If the User has a specific phone number assigned in their User Settings, this number will override the set forwarding number or the Company number indicated in the Company Settings.

### **Step 3: Combining your Call Event with A Voicemail Event**

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeBbL21KinlBS_9_Cl-iWFk0V-OH5_uUeH-XQo8xk6Rb19zGe2wLR3C5yxIeEmhEIoZJHaRy7yLOycwt7nE--bYMakO96CUwvZBFIlSeJnJXmr5LF2DMejKN1Ti-xTxGN4cP8jZ2Gthsp08CENMfB3jaYrx?key=ZAaRcLCDQnuNZF5roRSc4w)

-   Add a Voicemail Event after the Call Event. If you use a Voicemail Event after a call, the lead/customer will receive the pre-recorded voicemail in the event that they do not answer.
-   After the event is created, upload an MP3 or .wav File to the Voicemail Event.
-   Ensure that the wait time for the VM Event is set to 0 minutes (or hours or days) wait time to ensure the voicemail goes through after the call. 

### **Step 4: Call Time Out**

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdys4zbKPuS1C8G1813gekRo0JWKnnGfj_Avtz61puu4_xCAYTUsuw8CqGgdv2sbyuD1UoWe3EMcDQQnxCTTMogTEwc4G1ZzJyzlf-W4-5-QCENoN1UtLeyocrhmZW1bLZ3DyXt_OL0jypTkOig5ojxArpI?key=ZAaRcLCDQnuNZF5roRSc4w)

-   The Call timeout option will limit the number of seconds that will be ringing the lead. By default, if you leave that blank it will automatically ring the lead for 30 secs.



## **FAQ’s**

**1\. What is the purpose of using a Call Event in a campaign?**

The Call Event automatically triggers a call to the lead when that step is reached in a campaign. If the lead answers, they will be connected directly to the assigned user’s phone. This is beneficial because it connects the lead and user quickly, while the lead’s interest is still fresh after opting in.

**2\. What happens if I haven’t set up a forwarding number for calls?**

If a forwarding number is not set up, the call will default to the number indicated in the Company Settings. It’s important to ensure the number being used is connected to the right person (e.g., salesperson, front desk) to avoid missed opportunities.

**3\. How do I ensure the Call Event is linked to the correct user?**

By assigning a user (or multiple users) to the campaign, you ensure the Call Event originates from the assigned user’s number when a lead enters the campaign. If the user has a specific phone number set in their User Settings, this will override the forwarding number or the company number.

**4\. What is the benefit of combining a Call Event with a Voicemail Event?**

Combining a Call Event with a Voicemail Event ensures that if the lead does not answer the call, they will receive a pre-recorded voicemail. This keeps the lead engaged even if they missed the initial call. Be sure to set the wait time for the Voicemail Event to 0 to ensure it triggers immediately after the call.

**5\. What does the Call Timeout option do?**

The Call Timeout option limits how long the system will ring the lead before stopping. If left blank, the system will default to ringing the lead for 30 seconds. You can adjust this duration as needed.

**6\. What happens if the lead doesn’t answer the call?**

If the lead does not answer the call and you’ve set up a Voicemail Event, the system will automatically deliver the pre-recorded voicemail message after the call attempt. This ensures the lead still receives your message even if they missed the call.