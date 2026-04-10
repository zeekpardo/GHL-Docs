---
title: "Workflow Guide: Granting an Offer"
description: "Once a lead has purchased in an order form or based on any event, you can automate adding an offer to their record so they can access a specific offer. In…"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/B9cP6YYyvfaLwjb1q9Ay"
sourceId: "B9cP6YYyvfaLwjb1q9Ay"
category: "Workflow"
---

Once a lead has purchased in an order form or based on any event, you can automate adding an offer to their record so they can access a specific offer. In this article, you will learn how you set this up inside a workflow.

**Key Benefits of Granting Offers and Automating Workflows**

1.  **Seamless Offer Access:** Automatically grant customers access to specific offers based on their purchase, ensuring a smooth and personalized customer experience without manual intervention.
2.  **Increased Efficiency:** By automating the process of adding offers to customer records, you reduce the need for manual tracking and updates, saving valuable time for your team.
3.  **Customizable Workflow:** Tailor workflows to your business needs, such as triggering actions based on product names, submission types, and specific pages or funnels, allowing for targeted automation.
4.  **Enhanced Customer Engagement:** Add email notifications or custom messages to confirm purchases and provide customers with immediate access to their new offers, enhancing their experience.
5.  **Internal Notifications for Better Coordination:** Easily notify team members about customer purchases by adding internal notifications to your workflow, ensuring everyone stays informed and aligned on customer interactions.

**Note:** We will be **“Granting an offer to a course”** as if the client has already made a purchase. 

To get started, navigate to Automation > Workflows and create a Workflow

![](https://assets2.modalsupport.net/1775573357190-image9.png)

### Step 1: Add the Trigger Order Form Submission

-   You will need to have a trigger Order Form Submission and filter by the product name, the page, the funnel/website, and the submission type. If you don’t filter this trigger, every time a purchase is made, this workflow will execute for the lead. 

![](https://assets2.modalsupport.net/1775573448407-image5.png)

**Note:** This is just an example of how to trigger if someone purchases a product. You can select any trigger based on the event. You can also add contacts to the workflow directly from the contacts tab.

### Step 2: Add the Course Grant Offer action

-   Add the Course Grant Offer action. This action will trigger the workflow guide “**Sending Membership Credentials**”.

![](https://assets2.modalsupport.net/1775573472529-image3.png)

-   Select the Offer to which you want to provide access.
-   Save the action

### Step 3: Add the additional actions you need

-   Click on the + sign to add actions.

![](https://assets2.modalsupport.net/1775573502963-image2.jpg)

-   Select an action from the options on the right side
-   For example, you can add an action email step to make an email that confirms their purchase (you can add a custom message)

![](https://assets2.modalsupport.net/1775573558383-image4.jpg)

-   Make sure you click the “**_Save Action_**” button

![](https://assets2.modalsupport.net/1775573576590-image8.jpg)

-   You can also “**_Add Contact Tag_**” (For Example) that they purchased or any custom note that you want to be tagged on this customer.

![](https://assets2.modalsupport.net/1775573599269-image1.png)

-   If you want someone to know internally that the customer made a purchase, you can do so by Selecting “**Send_Internal Notification._**”

![](https://assets2.modalsupport.net/1775573618798-image7.png)

### Step 4: Complete Setup

-   Once your workflow is completed, publish and save the workflow (top right of the screen)

![](https://assets2.modalsupport.net/1775573642472-image6.jpg)

### FAQ




**Question:** What if I don’t filter the Trigger Order Form Submission?
**Answer:** If you don’t filter the Trigger Order Form Submission, the workflow will activate for every purchase made, regardless of the product or page. This can result in unintended actions for purchases unrelated to the specific offer you're targeting.




**Question:** How can I ensure that only the specific offer is granted?

**Answer:** To grant access to a specific offer, make sure to filter the Course Grant Offer action by the exact name of the offer. This prevents the action from giving access to all offers.




**Question:** Can I add multiple actions to the workflow?
**Answer:** Yes, you can add multiple actions to the workflow. This includes sending confirmation emails, adding contact tags, or sending internal notifications. Just click the + sign to add more actions and ensure each is saved properly.




**Question:** What should I do if I want to notify someone internally about the purchase?
**Answer:** To notify someone internally about a purchase, add the “Send Internal Notification” action in the workflow. This allows you to alert team members or departments about the purchase or any related details.




**Question:** What are the benefits for industry-specific offer automation?


**Answer:** It improves personalization, faster onboarding, and better tracking. For example, a restaurant or clinic lead could instantly receive a relevant discount or access package tied to their action.  




**Question:** Can I set an expiration date so the offer is only valid for 30 days?

**Answer:** While the "Grant Offer" action gives immediate access, you can add a **"Wait"** step of 30 days followed by a **"Remove Offer"** action to create a limited-time trial or membership.




**Question:** Can I grant more than one offer in a single workflow?

**Answer:** Absolutely. You can stack multiple "Grant Offer" actions one after another if a single purchase or event entitles a customer to multiple different courses or packages.