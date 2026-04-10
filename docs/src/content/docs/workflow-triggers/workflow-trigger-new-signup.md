---
title: "Workflow Trigger: New Signup"
description: "Workflow Trigger: New Signup"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/0JZkJC79cCmiekKedYJq"
sourceId: "0JZkJC79cCmiekKedYJq"
category: "Workflow Triggers"
---

**Workflow Trigger: New Signup**

The New Signup trigger streamlines how businesses engage with customers by automating workflows when a new user signs up for a membership, service, or product. This functionality is designed to provide immediate engagement, improve customer experience, and ensure essential information is delivered promptly.

**Pre-requisite:** For the New SignUp to be triggered, a workflow needs to be set up which includes the Course Grant Offer Action. Credentials will only populate the first time an offer is granted when using the New Signup trigger with workflows.

### **Key Features and Benefits**

-   **Automated Engagement**: Send personalized welcome emails, onboarding information, or exclusive offers automatically upon signup.
-   **Targeted Actions**: Apply filters to trigger workflows based on specific offers or memberships.
-   **Enhanced Customer Experience**: Simplify and speed up the onboarding process, ensuring every new customer feels valued.
-   **Custom Tagging**: Automatically tag customer profiles for segmentation and tailored marketing.

## **Navigation**

**New Signup** signifies an action was done by the contact (they filled out a form, made a purchase, etc,) or can be viewed as the first offer granted. **Offer Access Granted** implies an action done by YOU or a workflow permitting them to access the offer after the first time. Please view our articles on memberships for more information.

To configure and use the New Signup trigger, follow these steps:

-   **Access Workflow Builder**: Navigate to Automation on the left and Workflows on the top and create a new workflow.

![](https://assets2.modalsupport.net/1762971246853-image4.png)

-   Add the trigger with a filter for the offer and save

![](https://assets2.modalsupport.net/1775757369975-image3.png)

You can send out the credentials by adding an email action in the workflow. You can add an action email > select an email template if you have any template created for it. The template must have the custom values added to populate the credentials. OR you can write it down in an email in the text section. Click on the custom values icon > select ‘Course’ > select ‘Email’ and ‘Magic Link’ custom values which will populate the credentials.

**_Please Note:_** _You can grant an offer manually from the contact page but this is not the best option if you are using a workflow to send login credentials. This will only work correctly for templates in email settings. If you enabled the templates in Membership > Settings > Email Settings. View our articles on magic links and membership emails for more information._

**_Please Note:_** _Credentials not sending can be fixed by sending a magic link or a password reset from the contact area. View our articles on granting membership offers for more information._

**_Please Note:_** _If you use the Offer Access Granted Trigger keep in mind credentials will not be sent. Credentials will only populate the first time an offer is granted when using the New Signup trigger with workflows._

**Use Case Example**

**Scenario**:  
A business offers a "15% Early Bird Discount" for customers who sign up early for a membership.

**Workflow Configuration**:

-   **Trigger Name**: Course New Sign Up
-   **Offer**: 15% Early Bird Discount

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfCPRbxVUP5JJkhKQ68xFKe7bZM9B9M9BAGVc4Ogwl4VhQJJn_veUpbPkTwBd9VbwM6eKFaGqOpzuJA7B2LT94aocnhB7oPGtsxcrMcH7Ug5U8pZYjQGM6ZVuPY6Xu3GMtJzTCCPg?key=rhcFzm4WkY_hQdgInOLJDA)

**Automated Actions**:

-   Send a **personalized welcome email** with details about the membership and next steps.
-   Apply the **"Early Bird" tag** to segment these customers for targeted campaigns.

![](https://assets2.modalsupport.net/1762971303114-image3.png)

### **Pro Tips**

-   **Segment Your Audience**: Use tags to group customers by the offers they signed up for, enabling tailored marketing efforts.
-   **Combine Triggers**: Pair the New Signup trigger with actions like reminders or follow-ups to ensure continued engagement.
-   **Test the Workflow**: Use test signups to verify that the workflow actions are executed correctly.

## FAQs




**Question:** Will log in credentials be sent if I use the Offer Access Granted trigger?
**Answer:** No, login credentials will not be sent when using the Offer Access Granted trigger. Credentials will only be sent the first time an offer is granted using the Membership New Signup trigger within workflows.




**Question:** What should I do if login credentials are not important for my workflow?
**Answer:** If login credentials are not relevant, you can add the Offer Access Granted trigger to your workflow. This allows you to grant access without triggering the sending of credentials, which only happens with the Membership New Signup trigger.  



**Question:** Why should I use the New Signup trigger instead of manually granting an offer?
**Answer:** Using the New Signup trigger within a workflow ensures that login credentials are sent to the contact when they are granted an offer for the first time. Manually granting an offer may not trigger the proper email templates or credentials, leading to potential issues in the membership onboarding process.  



**Question:** Where can I find more information on magic links and membership emails?
**Answer:** You can view articles on magic links and membership emails for more detailed information. These resources will guide you on how to set up and manage these features effectively.  



**Question:** What should I do if I need to grant access after the first offer is given?
**Answer:** If you need to grant access after the first offer, you should use the Offer Access Granted trigger. Keep in mind that this trigger will not send credentials, so it’s best used when login credentials are not required or have already been provided during the initial offer.  



**Question:** Does the New Signup trigger require a specific action to work?
**Answer:** Yes. For the trigger to work, the workflow must include the **Course Grant Offer Action**, as credentials only populate when an offer is granted for the first time.




**Question:** What is Automated Engagement and how does it work?
**Answer:** Automated Engagement allows you to automatically send personalized welcome emails, onboarding information, or exclusive offers to users immediately after they sign up, ensuring timely and consistent communication without manual effort.