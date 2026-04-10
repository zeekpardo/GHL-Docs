---
title: "Customizing the From Email Address in Workflows"
description: "Customizing the From Email Address in Workflows"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/0ACUtmGuBtds1gX4o9fa"
sourceId: "0ACUtmGuBtds1gX4o9fa"
category: "Workflow"
---

**Customizing the From Email Address in Workflows**

In this article, you will learn how to use a custom email in your From Email Address field on a workflow. 

This will allow you to mask the email address and use another one as the sender's email. There are two options on how to do this from the workflows.

### **Option 1: Masking your** _**From**_ **Email Address** **on Workflows Settings** 

-   Click on Automation tab > Workflows > Create Workflows
-   Start from Scratch and click on Create New Workflow
-   Click Settings - Configure “Sender Details” with a custom value or type in the boxes

![](<https://assets2.modalsupport.net/1762288206941-Captura de pantalla 2025-11-04 152955.png>)

### **Option 2: Masking your From Email Address on the From Email Address field to the Send Email Action**

-   Click on the builder button at the top then click on the "+ button". Select the "Send Email" option
-   Enter the From Name and From Email 

![](<https://assets2.modalsupport.net/1762288273899-Captura de pantalla 2025-11-04 153057.png>)


**Note:** If your leads are not assigned to a user, we will use the email you have under your Business Profile and Business Email field as the sender's email when these settings and fields are empty. 

**Note:** The From Email address’s domain must match the dedicated domain in the email services tab to avoid emails going to spam.

### FAQs




**Question:** Can I use a custom value for the From email address?
**Answer:** Yes, you can use a custom value in the workflow settings to dynamically set the From email address based on the context, such as using the assigned user’s email or another variable.




**Question:** What are the benefits of masking the From email address?
**Answer:** Masking the From email address enhances branding consistency, improves deliverability, and ensures that emails appear to come from a relevant or recognizable sender, which can increase engagement and response rates.




**Question:** Can I change the From email address for individual emails within the same workflow?
**Answer:** Yes, you can change the From email address for each email step by configuring the settings individually in the "Send Email" action.




**Question:** What if I want emails to always come from a specific department instead of the assigned user?
**Answer:** You can achieve this by entering the desired department’s email (e.g., support@company.com) as the From email in either the workflow settings or in each "Send Email" action.




**Question:** How do I ensure that my custom From email settings are applied correctly?
**Answer:** To ensure your custom settings are applied, double-check both the workflow’s sender details configuration and the individual "Send Email" action fields. You can also run a test email to verify that the correct sender information is being used.




**Question:** What should I do if emails aren’t sending from the custom address I set up?
**Answer:** If emails are not being sent from the custom address you set up, make sure:

-   The fields are correctly filled in with no typos.
-   The lead is assigned to a user if required.
-   The default settings in your Business Profile are configured correctly as a fallback.




**Question:** What happens if no custom email is set and the lead is not assigned to a user?

**Answer:** If no custom email is set and the lead is not assigned to a user, the system will use the email from your Business Profile’s "Business Email" field as the sender’s email.  




**Question:** Does my custom From email address need to match my dedicated domain?

**Answer:** Yes. To prevent your emails from being flagged as spam, the domain of the custom email address you enter must match the dedicated domain set up in your email services tab.




**Question:** Why did my test email show "sent via \[Provider Name\]" next to my masked email?

**Answer:** This happens when the domain you are using to mask (e.g., @gmail.com or @yahoo.com) does not match your **Dedicated Sending Domain**. To remove the "via" or "on behalf of" message, you must use an email address that belongs to the domain you've verified in your Email Services settings.




**Question:** Can I use a personal email like @gmail.com or @outlook.com as my masked "From Email"?

**Answer:** While technically possible, it is highly discouraged. To avoid being flagged as spam, your "From Email" domain must match the **Dedicated Domain** verified in your Email Services tab. Using a public provider (like Gmail) for masking will likely result in deliverability issues.