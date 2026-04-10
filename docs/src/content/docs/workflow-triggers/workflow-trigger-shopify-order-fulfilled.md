---
title: "Workflow Trigger: Shopify Order Fulfilled"
description: "In this article, you will learn how to set up the order fulfilled trigger and an example of how it can be used"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/zMLJGsbbIVLv1uqmTFhM"
sourceId: "zMLJGsbbIVLv1uqmTFhM"
category: "Workflow Triggers"
---

In this article, you will learn how to set up the order fulfilled trigger and an example of how it can be used

### Navigate through workflow

1\. Navigate to Automation on the left > Workflows on the top and create a new workflow or edit an existing one

![](https://assets2.modalsupport.net/1764176380016-image4.png)

2\. Select the “**Add New Workflow Trigger**” button

-   This will pull up a list of selections of triggers on the right-hand side of the screen

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcJqpq_Jm9WuZf1fI0sJVUKE7hoZuVqwwjogfIeGqT5zyIAtq2p90JUPFSwIESycwLsZXALXfgZNd5gScwCppJ0XZ7gleakr5ifZMJw2KdsGZUFip3pr5CG5J8LS6TcWdu7WAs-NWncJMzDz1dMaEkH977J?key=eX2jefDFBOsbveNZ2Z-qAg)

-   Scroll down until you see the “**Shopify**” section
    -   Select the “**Order Fulfilled**” trigger
        -   This would be used in the case someone placed an order and you have shipped it to them

![](https://assets2.modalsupport.net/1770149747035-image5.png)

3\. Select the blue “**Add filters**” option

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXevSezHUktliTSvHt9-DQz50xfCWSK9Arf0iAUU7RVsNhGcKXREd19P88aJ2hmv07Nh0FTfUH27cMTgn56-EAsm3SxeMh3gWF-ED-39ujiziPhbHs3zm9DsnEHeIzc4067PTQFPy5lujeVk6nmjgawYBusx?key=eX2jefDFBOsbveNZ2Z-qAg)

-   Select between **Standard Fields** or **Custom Fields**
    -   **Standard:** Cart Value - can specify the value of the cart in the “Select Operator” option (choose based on specific needs)

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXew22ScobI-FPRy07R-cORWg6J4dkFZHUcPPJSKNR33XOplRA2iTAXhtCoVJEe0zmIgMjUvYtYLAudwL0cHhSe6Ef6Temp4rhT2wOhxs6pe5fC0PYRGeLLTIlWVf6g59llmkLGYG1kDvRbHPzTgB8gpp60F?key=eX2jefDFBOsbveNZ2Z-qAg)

-   **Custom:**
    -   **For Example:** Your order has not been shipped! Shipping #\*\*\*\*\*\*\*

4\. Click the blue “**Save Trigger**” button on the bottom right corner

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfZgL75xKmhdwKPE33VBQr4Kt0a1cbmc6sLbfcB5fR2U1ibvND_D3IJtnWmV3nYjl8vmm_rgVEj5UfEDWkevWzMvlYFuU50D7TS7TmSMBbWjozmPbBYFEiETQUQ5b35ZFTQH4et?key=eX2jefDFBOsbveNZ2Z-qAg)

**Example**

**Scenario:** A company wants to send a thank-you email to customers who make a purchase with a cart value exceeding $100.

**Configuration:**

-   **Trigger:** Order Fulfilled
-   **Filters:**
    -   **Cart Value:** Greater than
    -   **Value:** $100
-   **Actions:** When the trigger is activated:
    -   Send an automated thank-you email to the customer.
    -   Update to mark the customer as a "VIP Customer."
    -   Add a follow-up task to the sales team's calendar to offer a special discount on the next purchase.

This setup ensures that high-value customers receive personalized follow-ups, strengthening the relationship and encouraging repeat business.

### FAQ’s




**Question:** What does the “Order Fulfilled” trigger do?Answer**: The “Order Fulfilled” trigger starts a workflow when an order is marked as fulfilled in Shopify, indicating that the order has been shipped to the customer.




**Question:** How do I add filters to the trigger?
**Answer:** After selecting the “Order Fulfilled” trigger, click the blue “Add filters” button. Choose between Standard Fields or Custom Fields to narrow down when the trigger should activate.

 


**Question:** What are Standard Fields, and how do I use them?
**Answer:** Standard Fields include predefined options like “Cart Value.” You can set specific criteria, such as a minimum cart value, to activate the trigger based on the order’s total amount.




**Question:** What are Custom Fields, and how do I use them?Answer**: Custom Fields allow you to use data unique to your store. For example, you can create a custom field to include shipping details or other order-specific information.




**Question:** Can I use this trigger to send a shipping confirmation email?
**Answer:** Yes, you can set up actions in your workflow to send a shipping confirmation email or perform other tasks once the order is fulfilled.




**Question:** When does the Order Fulfilled trigger fire?

**Answer:** This trigger fires once an order is marked as fulfilled in Shopify, typically after the product has been shipped to the customer.




**Question:** Is it possible to automate internal team tasks when an order is fulfilled, in addition to contacting the customer?

**Answer:** Yes. You can set up internal actions such as adding a follow-up task to the sales team's calendar or updating a customer's status (e.g., marking them as a "VIP Customer") within the system as soon as the trigger is activated.