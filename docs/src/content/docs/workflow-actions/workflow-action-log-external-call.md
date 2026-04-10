---
title: "Workflow Action: Log External Call"
description: "This feature enhances your CRM capabilities: the ability to log external calls using workflows! It streamlines tracking customer interactions, ensuring that…"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/FvuPvazlHqCcvUeJuvex"
sourceId: "FvuPvazlHqCcvUeJuvex"
category: "Workflow Actions"
---

This feature enhances your CRM capabilities: the ability to log external calls using workflows! It streamlines tracking customer interactions, ensuring that all external calls are automatically recorded in . Let's dive into the details and how you can make the most of it.

#### **Step 1: Setting Up the Workflow**

**1\. Navigate to the Workflow Section:**

-   Go to the **Automation** menu on the left side of your dashboard.
-   Click on **Workflows** at the top of the page.
-   Create a new workflow or select an existing one to integrate this new action.

![](<https://assets2.modalsupport.net/1766157811030-Captura de pantalla 2025-12-19 102315.png>)

**2\. Add the Inbound Webhook Trigger:**

-   Click on **Add New Trigger**.
-   Type “Inbound Webhook” into the search bar and select the trigger.
-   This will generate a URL that you need to configure in your external calling software. Once configured, fetch some sample data and hit **Save Trigger**.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXf2Rc6gxiFWkh5fMsbKXfFtmms82E9OTxIpDqSIA8KWa17XQa5FMG31J_yx6kiLETCr_wy2TFQfNmaGBXPodz9LCRIlTkg_2ag5Ccx2Gzt7GjF41lT_DUxcVxz_XFrA7pssxOeE?key=QrK3rjU-ELzGRJBva6Ww-A)

:

#### **Step 2: Configuring Webhook Triggers**

The inbound webhook trigger lets capture call details from your third-party calling software. Make sure to integrate this webhook correctly to ensure seamless data transfer.

#### **Step 3: Creating Conditional Branches**

**1\. Add an If-Else Condition:**

-   Click the **Plus (+)** icon, type “If” into the search bar, and select **If-Else**.
-   Create two branches: one for **Inbound Calls** and one for **Outbound Calls**.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXd1YwAWeW805Vq9mHDKuH3EOSNT-Hhbr68RMVAbJMlAr8CwKgbchWdsod8bEGGXzdVb6ldN4B7KymV4xKU2mc1bqH-yr61Uw8qxLUGo8qF-Kjzev1036vh-Z-Lgr39wdGCUYmKk2sq-ZFdrELlfG65RUzeM?key=QrK3rjU-ELzGRJBva6Ww-A)

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcurLeKo5iXe23MQAd_zcC1VqyIBlqY87ECLgG5dZBXhkQT8lX7-8jzHH20WPueI1OD6yw1omuYi3H5mJc21h3ZK5Gq-_2_Fw8D75F4UXbGQjGaZZEkRToxCuuP6Rb17u929Hfr1w?key=QrK3rjU-ELzGRJBva6Ww-A)

2\. After setting up two branches for Inbound and Outbound calls, add the "Create Contact" action. This action will help identify the contact based on the phone numbers provided in the webhook.

3\. In the "Create Contact" action, map the Phone field as follows:

-   For the Inbound call flow, map it to the "From Number."
-   For the Outbound call flow, map it to the "To Number."

4\. This setup will ensure that the contact is created or identified based on the specified phone number.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXflsbHd5KG9ZW6r9q3azYIY6iRshH6VTlotCTr82iSQF-BjEWynRLvF8U1ghbVFP76ugq7wpqAlpesWwhZVoP4CviOYMmoexj6BT4kXf-03TP6ao2rFJe9Ev0dgjcr9Yd8Xy_BX66p7r-0fNrW-nLqQh-2H?key=QrK3rjU-ELzGRJBva6Ww-A)

#### **Step 4: Configure the action**

-   Select the "Log External Call" action within the workflow.

![](<https://assets2.modalsupport.net/1766158112457-Captura de pantalla 2025-12-19 102825.png>)

-   Pass all relevant call details, including:
    -   **Call direction** (inbound or outbound)
    -   **Phone number of the receiver** for inbound calls
    -   **Phone number of the dialer** for outbound calls
    -   Call recording (if available)

Note: The direction field can be used from Inbound Webhook Trigger option

For each field—Direction, Date, To, From, Call Status, and Attachment—update the corresponding values by clicking the custom values icon and selecting "Inbound Webhook Trigger.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXffm3jgUM_klz7mB-6bRLqsd1dZqxhWRMKgtcwiqAb7_c2ZfRpu4PnwiAbNxUOXOhfp2jbiQ1w-fmoJQudrZ-InAMFUtDl5VjfhtxGl1hFizv5ypwY80L6Cmn1tngF_eS42Ca5cxxXS-9rLM9ccqVxILqhX?key=QrK3rjU-ELzGRJBva6Ww-A)

**Mandatory Details**:

-   Ensure that the call direction and phone numbers are provided, as these are mandatory for logging the call.

**Display**:

-   The logged call will be displayed in the conversations section of the contact’s profile. This provides an easy way to review all interactions with a particular contact.

![](<https://assets2.modalsupport.net/1766158181638-Captura de pantalla 2025-12-19 102932.png>)

#### **Benefits of Logging External Calls**

1.  **Comprehensive Interaction Records**:
    -   Maintain a complete record of all customer interactions, including external calls, in one centralized location.
2.  **Enhanced Customer Insights**:
    -   By logging all calls, you can gain valuable insights into customer behavior and preferences, enabling more personalized service.
3.  **Seamless Access to Call Data**:
    -   Quickly access call logs and recordings directly from the contact’s profile in , facilitating better follow-up and customer relationship management.

### **FAQs on Logging External Calls Using Workflows**




**Question:** What does the feature of logging external calls using workflows do?
**Answer:** This feature allows you to automatically log external calls in by using workflows. It streamlines tracking customer interactions, ensuring that all external calls are recorded and accessible in




**Question:** How can I log an external call in ?
**Answer:** To log an external call, follow these steps:

1.  **Trigger the Workflow:** Use the "Inbound Webhook Trigger" to start the workflow based on external events like incoming or outgoing calls.
2.  **Configure the Action:** Select the "Log External Call" action and pass relevant call details, including the call direction, phone numbers, and call recording (if available).




**Question:** What details are required to log an external call?
**Answer:** Mandatory details for logging an external call include:

-   Call direction (inbound or outbound)
-   Phone number of the receiver for inbound calls
-   Phone number of the dialer for outbound calls




**Question:** How do I set up the "Create Contact" action in the workflow?
**Answer:** After creating branches for Inbound and Outbound calls, add the "Create Contact" action to identify the contact based on the phone numbers provided in the webhook:

-   **Inbound Call Flow:** Map the Phone field to the "From Number."
-   **Outbound Call Flow:** Map the Phone field to the "To Number."




**Question:** How do I update field values in the workflow?
**Answer:** For each field Direction, Date, To, From, Call Status, and Attachment update the values by clicking on the custom values icon and selecting "Inbound Webhook Trigger."




**Question:** Where can I view the logged calls in ?
**Answer:** Logged calls will appear in the conversations section of the contact’s profile. This section provides a consolidated view of all interactions with a particular contact  




**Question:** What is the first step I need to take in my third-party calling software to enable this feature?
**Answer:** You must configure the unique URL generated by the **Inbound Webhook Trigger** within your external calling software. Once configured, you should fetch sample data to ensure the connection is working before saving the trigger in the platform.




**Question:** Can I include call recordings in the automated logs?

**Answer:** Yes. If your external calling software provides a recording, you can map the "Attachment" field to the call recording URL using the custom values from the Inbound Webhook.