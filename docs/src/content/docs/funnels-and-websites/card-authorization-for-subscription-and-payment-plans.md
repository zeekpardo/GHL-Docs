---
title: "Card Authorization for Subscription and Payment Plans"
description: "How Card Authorization Works:"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/QnbmLPtHSxigtt9Knx6g"
sourceId: "QnbmLPtHSxigtt9Knx6g"
category: "Funnels and Websites"
---

**How Card Authorization Works:**

Using the Card Authorization feature is a great way to help safeguard your business. 

By using the Card Authorization, a card will be authorized to check that the funds are available at the time the card information is submitted, even if the total amount isn’t charged right then.

When using this feature you need to make sure you are using a **_recurring_** product type.

**For example:**

-   Maybe you have a 7-day free trial, and then on the 8th day, the purchase price of $100.00 would be due. 
-   If you don’t have the authorization feature turned on, then the 7-day free access could still be granted, even if knew that the $100.00 wasn't available in the account, to be charged after the trial period. 
-   With the authorization turned on, will check to ensure they have the amount of money available, even though it won't be collected until the 8th day. 
-   would only grant the free 7-day trial if the $100.00 was available in their account.
-   This is similar to payment plans. Perhaps you have a $150.00 product that you want to charge over three installments of $50.00 each. The authorization will check that the purchaser has $150.00 available, even though the payment plan would only charge $50.00 at a time.

Card Authorization is one great way you can help protect your business, by knowing that funds are available in the purchaser’s account. Follow these steps to set it up for your products:

**Note:** The card authorization charge will be shown separately in your payment provider (e.g. Stripe). This charge is instantly refunded to the customer, as it is just a test authorization charge.

**How To Set Up A Custom Card Authorization Amount:**

-   Navigate to Sites>Funnels/Websites and choose a Funnel/Website.
-   Go to the “Products” tab for the funnel step/website page where you want to add/edit your product to apply custom authorization.

![](<https://assets2.modalsupport.net/1765879688459-unnamed - 2025-12-16T180801.291.png>)

![](<https://assets2.modalsupport.net/1765879701259-unnamed - 2025-12-16T180810.799.png>)

-   Click “Edit” to update an existing product, or you can click + Add Product to add a new one.
-   You can also view your product by clicking the three dots and select **Products**

![](<https://assets2.modalsupport.net/1765879723818-unnamed - 2025-12-16T180836.844.png>)

-   If you’re adding a new product, choose the product and the price before proceeding to the next step.

![](<https://assets2.modalsupport.net/1765879748259-unnamed - 2025-12-16T180859.363.png>)

-   Click on the “Additional Options” for this product.
-   Scroll down to the “Custom Authorization” field and fill in the desired amount (greater than 0).
-   Click “Save” to confirm your changes.

![](<https://assets2.modalsupport.net/1765879774059-unnamed - 2025-12-16T180925.909.png>)

**Note:** To use the custom authorization feature requires the use of a **recurring** price type.

**Pro Tips for Using Card Authorization:**

1.  **Test the Authorization Amount**: Before fully deploying, consider running a few test transactions with different amounts to ensure that the authorization feature is working smoothly and checking for the right funds without charging the customer.
2.  **Use for Recurring Products**: The Card Authorization feature is designed for recurring products, like subscription services or payment plans. Always ensure that your product’s pricing type is set to recurring to make the most out of this feature.
3.  **Communicate with Customers**: If you're offering a free trial or payment plan, it's a good idea to let customers know that their card will be authorized for the full amount, even if they won’t be charged until later. This transparency helps avoid confusion.
4.  **Monitor Authorization Expiry**: Authorization holds typically expire within 7 days (depending on your payment processor), so be sure the authorization is still valid when the charge is processed, especially for long-term subscriptions.

**FAQ**




**Question:** Is Card Authorization the same as charging my customer?
**Answer:** No, Card Authorization is a temporary check to ensure funds are available in the customer’s account. It does not result in a charge; the amount is authorized but not collected until the actual billing date.




**Question:** Do I need to set up Card Authorization for all my products?
**Answer:** No, Card Authorization is optional and typically used for recurring products or services with a trial period. It’s only necessary if you want to ensure that funds are available before granting access to your product or service.




**Question:** How long does it take for the authorization charge to be refunded?
**Answer:** The authorization charge is usually refunded instantly to the customer’s account. It’s a temporary authorization and does not result in an actual charge. Check with your payment provider for specific timing details.




**Question:** What is the difference between Card Authorization and a charge on my customer’s account?
**Answer:** Card Authorization is not the same as charging the customer. It’s a temporary check to ensure that the funds are available in the customer’s account, but the amount is not actually collected until the billing date. This is clarified in the description when it mentions that "the card will be authorized to check that the funds are available at the time the card information is submitted, even if the total amount isn’t charged right then."




**Question:** Can I change the authorization amount after a product is live?  
**Answer:** Yes. You can edit the product in the **Products** tab of your funnel at any time. However, the new authorization amount will only apply to _new_ customers signing up after the change; it will not retroactively check existing subscribers.




**Question:** What happens if the authorization fails?

**Answer:** If the system cannot verify the required funds, the transaction is declined immediately. The customer will see an error message at checkout, and access to the product, trial, or subscription will not be granted. This prevents "ghost" sign-ups where the user has no intention or ability to pay.




**Question:** What is the specific product requirement for using the Card Authorization feature?

**Answer:** To use the Card Authorization or Custom Authorization feature, you must ensure you are using a **recurring product type** (such as subscriptions or payment plans). It is not available for one-time purchase products.