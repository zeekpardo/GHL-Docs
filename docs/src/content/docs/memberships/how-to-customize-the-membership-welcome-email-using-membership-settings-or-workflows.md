---
title: "How To Customize The Membership Welcome Email Using Membership Settings or Workflows"
description: "How To Customize The Membership Welcome Email Using Membership Settings or WorkflowsThere are a few options to send credentials when someone creates their…"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/MVpHmTszCKc8WR0KEY4W"
sourceId: "MVpHmTszCKc8WR0KEY4W"
category: "Memberships"
---

**How To Customize The Membership Welcome Email Using Membership Settings or Workflows**  


There are a few options to send credentials when someone creates their Membership account. You may want to customize this email for your members, so follow these steps to review your options:

## **Option 1: System-Generated Email Using a Template**  

**Step 1:** Navigate to Memberships on the left > Courses at the top right > Settings from the dropdown menu > turn the "Send Welcome Email" option on.

![](https://assets2.modalsupport.net/1764280493281-1.png)

![](https://assets2.modalsupport.net/1770149363296-image7.jpg)

**Step 2:** Choose a template from the dropdown list.​​

![](https://assets2.modalsupport.net/1764280506820-2.jpg)

**_Note:_** _You will need to create your template to create a custom welcome email and the Default Template is not editable or viewable without testing it. You would accomplish this with custom values, continue this article to see what this means_

**_Note:_** _This will send an automated email from the system with login credentials to the user when they complete the offer checkout. This email template can be customized and saved within the Email Builder \\_

**Step 3:** Save your changes.​

## **Option 2: Create a Workflow to Send a Customized Email**

**Step 1:** Navigate to Automation > Workflows

**Step 2:** Create or edit an existing workflow 

![](https://assets2.modalsupport.net/1764280520680-3.png)

**Step 3:** Select the “New Signup” Workflow trigger.  

![](https://assets2.modalsupport.net/1773940171614-image6.png)

**Step 4:** Select Send Email in Action

![](https://assets2.modalsupport.net/1764280561961-5.png)

**Step 5:** Enter the content of your email. You’ll need a From Name, Email, and Subject, and you can select a template or use your content. 

![](https://assets2.modalsupport.net/1764280584119-6.png)

**Step 6:** Note that by using ‘New Signup’ you now have access to new custom values. These are called Membership Contacts and are at the bottom of the Custom Values list right above your unique custom values. Grab both your email and password and place them appropriately in the body of your email. 

![](https://assets2.modalsupport.net/1764280629020-7.png)

![](https://assets2.modalsupport.net/1764280642981-8.png)

**Step 7:** If you use Option 2, be sure to toggle off the system-generated email (Option 1). Otherwise, both the system-generated template option and the workflow-customized options will be sent.

## **FAQ’s**  




**Question:** What are Membership Contacts in custom values, and how do I use them?
**Answer:** Membership Contacts are specific custom values related to the member's account, such as their email and password. These values are found at the bottom of the Custom Values list and can be placed in the email content to automatically insert the member's login credentials.




**Question:** Why should I toggle off the system-generated email if I’m using a custom workflow email?
**Answer:** You should toggle off the system-generated email to avoid sending two emails to the new member. If both options are enabled, the member will receive both the system-generated email and the workflow-customized email, which could confuse.




**Question:** Can I use both the system-generated email and a custom workflow email at the same time?
**Answer:** While technically possible, it’s not recommended because it may result in the member receiving duplicate emails. It's better to choose one method to ensure clarity and a streamlined user experience.




**Question:** How do I ensure that the custom values like email and password are correctly included in the workflow email?
**Answer:** When setting up your workflow email, use the Membership Contacts custom values (found at the bottom of the Custom Values list) to insert the member's email and password. This ensures the credentials are correctly populated in the email sent to the new member.




**Question:** What happens if I don't create a custom template and leave the system on the default template?
**Answer:** If you don't create a custom template and leave the system on the default template, the system-generated welcome email will be sent to the new member using the default template. However, this template is not viewable or editable without testing, so it may not fully meet your customization needs.




**Question:** Can I view or edit the "Default Template" for the system-generated welcome email?

**Answer:** No, the Default Template is not editable or viewable without testing it first. If you want a customized welcome email, you must create your own template within the Email Builder and select it from the dropdown list in the Membership settings.




**Question:** What is the benefit of enabling the "PWA" (Progressive Web App) feature in my membership settings?
**Answer:** Activating the PWA installation allows your members to add your membership site to their mobile or desktop devices as if it were a native app. This enhances accessibility and engagement, as users on compatible browsers (like Chrome or Safari) will be prompted to install the app, giving them one-click access to your courses from their home screen.