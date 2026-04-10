---
title: "How to Use SMS and Phone Number Validation"
description: "may have SMS validation enabled, allowing to check phone numbers for you at the time of SMS sending. If activated, will check Phone Number Lookup (which…"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/qXEigcGN6Z6FAMIwEOy5"
sourceId: "qXEigcGN6Z6FAMIwEOy5"
category: "Phone"
---

may have SMS validation enabled, allowing to check phone numbers for you at the time of SMS sending. If activated, will check Phone Number Lookup (which charges per lookup) to see if the number is a landline, and then won’t send messages to it. Phone Number Lookup can also invalidate non-existent numbers or badly formatted numbers.

## How SMS Validation is Activated:

**Go to Business Profile Settings:** For accounts integrated with , access the **“Business Profile”** under **“Settings”**.

**Locate SMS Validation Settings:** Scroll down to find the option 'Validate phone numbers when the first SMS is sent to a new contact.'

![](https://assets2.modalsupport.net/1762966197329-1.png)

There is a nominal fee per validation, which helps avoid costs associated with sending messages to invalid numbers.

**NOTE_:_** The validation is done at the time of SMS sending, not during Contact Record creation or importing. 

You may set up a workflow trigger for the validation error to set up trigger action accordingly. This can help you determine what automation(s) you want to set up in case of an invalid number. For example, if you send a bulk SMS but detects an invalid number, you may want to send you a notification so you can email the affected contact(s). This is just one use case, but there are many options you can completely customize.

**Step 1: Setting Up the Workflow Triggers for Number Validation**

-   Navigate to Workflows
-   Create a new Workflow or edit an existing Workflow

![](https://assets2.modalsupport.net/1762966229055-2.jpg)

**Step 1**

-   Add a Workflow Trigger, and choose “Number Validation” from the dropdown list.

![](https://assets2.modalsupport.net/1773087110351-image1.png)

**Step 2**

-   Choose your filter(s). The filter can operate based on the error when the phone number is invalid (Error 21211) or SMS is incapable (error 30006). Check the box for the option(s) you wish to use.

![](https://assets2.modalsupport.net/1762966288778-4.jpg)

**Step 3**

-   Continue to set up the workflow however you’d like (with notifications, emails, etc.) You may set up multiple triggers and/or workflow events - whatever makes sense for your specific situation.
-   Save to confirm your changes.

Now you’re ready to use the number validation!  

## FAQ’s




**Question:** What is SMS validation, and how does it work?
**Answer:** SMS validation checks phone numbers before sending SMS messages to ensure they are valid. It uses Phone Number Lookup to identify landlines and invalid numbers and avoids sending messages to them.




**Question:** How do I activate SMS validation in my account?
**Answer:** To activate SMS validation, go to your Business Profile under Settings, find the “Validate phone numbers when the first SMS is sent to a new contact” option, select it, and update your settings.




**Question:** Are there any costs associated with SMS validation?
**Answer:** Yes, there is a nominal fee per validation, which is charged when checking phone numbers to ensure they are valid.

**When is SMS validation performed during contact import or message sending?**
**Answer:** SMS validation is performed when the first SMS is sent to a new contact, not during contact creation or import.




**Question:** Can I set up a workflow to handle invalid phone numbers?
**Answer:** Yes, you can create workflows to trigger actions when a phone number is invalid (e.g., sending notifications, emails, or other custom actions). Simply add a “Number Validation” trigger in your workflow settings.




**Question:** Why should I use SMS validation?
**Answer:** Using SMS validation reduces costs, improves delivery rates, and ensures your messages reach valid and intended recipients, helping maintain efficient communication.




**Question:** Does SMS Validation work for "Short Codes" or "Toll-Free" numbers?

**Answer:** The system is designed to validate the **recipient's** number. It will accurately identify if the person you are texting is using a mobile phone, a VOIP number (like Google Voice), or a standard landline.