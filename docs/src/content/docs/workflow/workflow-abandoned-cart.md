---
title: "Workflow: Abandoned Cart"
description: "Workflow: Abandoned Cart"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/q473bilH6rvDUq81oTrI"
sourceId: "q473bilH6rvDUq81oTrI"
category: "Workflow"
---

**Workflow: Abandoned Cart**

If a lead abandons their cart and does not make a purchase, you may want to set up a Workflow to automate some actions, from a follow-up email to a reminder call or anything else that makes sense for your particular use case. Follow these steps to create and use Workflows for an Abandoned Cart sequence.

**Note:** Abandoned Cart works with the 2-step order form only. When someone fills out the first part of the order form and does not make a payment in the 2nd part, it would trigger the workflow.

## **Part 1: Setting up the Workflow for the Abandoned Cart**

### Step 1:  Setting up the Workflow Trigger

-   Navigate to Automations> Workflows and Create a New Workflow
-   Select “Order Form Submission” as your Workflow trigger
-   For filters, select your funnel/website and set your submission type as “Optin.”
    -   **_NOTE:_** If you don’t specify a funnel/website, then the trigger action will apply to all Order Form Submissions.

![](https://assets2.modalsupport.net/1764181586825-image.png)

-   Save the trigger to add it to your Workflow.

### Step 2: Setting Up a Wait Step

-   Set up a wait step to allow users some time to purchase and to know if they abandoned their cart.

![](https://assets2.modalsupport.net/1764181684606-image.png)

-   Save the action.

### Step 3: Setting Up an Abandoned Cart Contact Tag

-   Add another Step and  select “**Add contact Tag.**”
-   Type in “Abandoned Cart” to add a tag that signifies that the user abandoned their cart, and click save to add this action.

![](https://assets2.modalsupport.net/1764181710424-image.png)

### Step 4: Add a method to follow up.

-   Add the actions you need to follow up with your user

![](https://assets2.modalsupport.net/1764181743351-image.png)

Workflow: Abandoned Cart

-   Save the workflow

![](https://assets2.modalsupport.net/1764181774297-image.png)

## **Part 2: Create a Second Workflow to Remove Abandoned Cart Labels When A Purchase Is Made**

### Step 1: Create a Second Workflow

-   Select “Order Form Submission” as your Workflow trigger
-   Set your filters to select your website/funnel and your submission type as “Sale,” then Save.

![](https://assets2.modalsupport.net/1764181795485-image.png)

### Step 2: Remove the Abandoned tag filter and remove the lead from the first Workflow.

-   Add another Step.
-   Select “Remove Contact Tag” and Choose the “abandoned cart” tag you created in Part 1.

![](https://assets2.modalsupport.net/1764181814114-image.png)

-   Add another step. Select “Remove from Workflow.”
-   Select “Another Workflow”.
-   Select the name of the first Workflow you created in Part 1.

![](https://assets2.modalsupport.net/1764181851724-image.png)

-   Save your changes to the action.
-   Save and publish both Workflows.

**FAQs**




**Question:** How do I set up a Workflow trigger for abandoned cart sequences?


**Answer:** To set up a Workflow trigger for an abandoned cart sequence, navigate to Automations > Workflows and create a new Workflow. Select "Order Form Submission" as your trigger, and in the filters, choose your funnel or website and set the submission type as "Optin." Save the trigger to add it to your Workflow.  




**Question:** Why do I need a wait step in the Workflow?

**Answer:** The wait step is essential because it allows time for the user to complete their purchase. By setting a wait period, you can determine if the cart has been abandoned and then take appropriate follow-up actions based on the user's inaction.  




**Question:** What does the "Abandoned Cart" contact tag do?

**Answer:** The "Abandoned Cart" contact tag is used to label users who have abandoned their cart without completing a purchase. This tag helps identify these users so you can target them with specific follow-up actions, such as sending reminder emails or making reminder calls.




**Question:** How do I remove the "Abandoned Cart" tag once a purchase is made?

**Answer:** To remove the "Abandoned Cart" tag once a purchase is made, create a second Workflow. Set the Workflow trigger to "Order Form Submission," and in the filters, choose your website/funnel and set the submission type as "Sale." Add a step to "Remove Contact Tag" and select the "Abandoned Cart" tag created in Part 1. This will ensure that the tag is removed for users who complete their purchase.  




**Question:** Can I stop users from receiving follow-ups if they complete their purchase after abandoning their cart?

**Answer:** Yes, you can stop users from receiving follow-ups if they complete their purchase. In your second Workflow, add a step to "Remove from Workflow," then select "Another Workflow," and choose the abandoned cart Workflow you created in Part 1. This will remove the user from the abandoned cart Workflow, preventing further follow-up actions once they have made a purchase.  




**Question:** Can I customize the follow-up actions in an Abandoned Cart Workflow?

**Answer:** Absolutely. You can add emails, SMS, notifications, or other workflow actions to engage users based on your specific follow-up strategy.  




**Question:** Can I send a specific discount code only to people who abandon their cart?
**Answer:** Yes. Within the follow-up actions of your first workflow, you can include a unique coupon code in your email or SMS to incentivize the lead to come back and complete their purchase.




**Question:** Will this trigger if I manually add a contact to the system?
**Answer:** No. This specific workflow is triggered by the action of a lead interacting with the order form on your funnel or website.




**Question:** Does the Abandoned Cart workflow work with all types of order forms?
**Answer:** No, the Abandoned Cart trigger specifically works with the **2-step order form**. It is triggered when a lead completes the first part of the form (entering their contact information) but fails to complete the payment in the second part.