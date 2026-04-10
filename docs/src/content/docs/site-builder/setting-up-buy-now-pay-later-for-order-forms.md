---
title: "Setting Up Buy Now Pay Later for Order Forms"
description: "Buy Now Pay Later (BNPL) payment methods are supported in Order Forms. This is applicable for both 1-step and 2-step order forms. This feature can help you…"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/3u56B2IWlJ65goqEo7mL"
sourceId: "3u56B2IWlJ65goqEo7mL"
category: "Site Builder"
---

Buy Now Pay Later (BNPL) payment methods are supported in Order Forms. This is applicable for both 1-step and 2-step order forms. This feature can help you provide greater payment flexibility to your customers, potentially increasing your conversion rates. In this guide, we'll walk you through everything you need to know to start using BNPL options.

## Overview of BNPL Payment Methods

BNPL options allow customers to purchase products immediately and pay for them in installments over time. The supported BNPL providers are:

-   Klarna
-   Affirm
-   Afterpay/Clearpay

![](https://assets2.modalsupport.net/1762519578373-1.png)

### Availability and Requirements

-   Payment Provider: This feature is available only for businesses using Stripe as their payment provider.
-   Applicable Products: BNPL options can be used for one-time products only, not for recurring products.

### Benefits

-   Increased Conversions: Offering BNPL methods can help increase conversions by providing more payment flexibility to your customers.
-   Order & Transaction Details: All order and transaction details will be recorded under the Payments menu, similar to credit card payments. Existing triggers for Order Submitted and Payment Received will function as usual.

### Migration and Availability

-   Stripe Migration: This change requires a migration from Stripe and might already be available for some accounts and in progress for others.

### Configuring BNPL Payment Methods within

Businesses can set up Stripe payment methods directly within , eliminating the need to configure them on Stripe’s dashboard. These payment methods can be enabled or disabled for various product areas, separately in both Live and Test modes. For existing customers, the default payment methods for product areas or checkouts will remain as they were configured in Stripe.

Important: Going forward, editing these payment methods on Stripe will no longer be possible.

-   Navigate to Payments on the left > Integrations at the top. Locate Stripe and click on Manage.

![](https://assets2.modalsupport.net/1762519685912-2.png)

-   Click on Manage Payment Methods

![](https://assets2.modalsupport.net/1762519729293-3.png)

![](https://assets2.modalsupport.net/1762519754834-4.png)

### Order and Transaction Recording

-   All transactions using BNPL methods will be recorded under the Payments menu, which is similar to other payment methods.
-   Existing triggers for Order Submitted and Payment Received will function as usual.

## Troubleshooting and Support

If you encounter any issues with enabling or using BNPL payment methods, refer to the following support articles:

-   How to Manage payment methods displayed with Stripe integration

For any additional help, contact our support team for personalized assistance.

PayPal Pay Later for order forms and online stores

-   Businesses will be able to offer PayPal Pay Later as a payment method to customers checking out via order forms and online stores
-   This is applicable for both 1-step and 2-step order forms and upsell purchases
-   The pay-later option is only available for one-time purchases. This will not be available for recurring products
-   The Pay Later button will be displayed right below the PayPal button during checkout. Offering pay-later options helps in increasing conversions for your customers
-   Tracking: Subscription status updates made within PayPal will be reflected in real-time inside

![](https://assets2.modalsupport.net/1762519817317-5.png)

![](https://assets2.modalsupport.net/1762519845654-6.png)

![](https://assets2.modalsupport.net/1762520238732-7.png)

### FAQs




**Question:** What is Buy Now Pay Later (BNPL) and how does it work?
**Answer:** BNPL allows customers to purchase products immediately and pay in installments over time. This feature is available for both 1-step and 2-step order forms, providing greater payment flexibility to boost conversions.




**Question:** Which BNPL payment providers are supported?
**Answer:** The supported BNPL providers are Klarna, Affirm, and Afterpay/Clearpay.




**Question:** Can I use BNPL options for recurring products?
**Answer:** No, BNPL options are only available for one-time products, not for recurring purchases.




**Question:** How do I set up BNPL payment methods?
**Answer:** To set up BNPL methods, go to **Payments** > **Integrations** and click on **Manage** next to Stripe. Click on **Manage Payment Methods**. From there, you can manage payment methods and enable BNPL options.




**Question:** Do I need to configure BNPL payment methods in Stripe's dashboard?
**Answer:** No, you can set up BNPL payment methods directly within , eliminating the need to configure them in Stripe's dashboard.




**Question:** What happens to transaction details when BNPL is used?
**Answer:** All transactions made using BNPL will be recorded under the **Payments** menu, just like credit card payments, and existing triggers for Order Submitted and Payment Received will continue to function.




**Question:** Will I be able to edit BNPL payment methods on Stripe in the future?
**Answer:** No, once BNPL payment methods are configured in , editing them directly on Stripe will no longer be possible.




**Question:** What other Pay Later options are available?
**Answer:**  PayPal Pay Later is also available for 1-step and 2-step order forms and upsell purchases, allowing customers to make one-time purchases and pay later.




**Question:** What happens if Stripe hasn’t been migrated yet for BNPL?
**Answer:** Some accounts may still be in the **migration process** for Stripe BNPL support. Once migration is complete, the feature will automatically appear in your Integrations menu.




**Question:** Are there any limitations for using BNPL?
**Answer:** BNPL is only available for one-time purchases, requires Stripe as the payment provider, and cannot be applied to recurring products.




**Question:** How are updates to PayPal Pay Later transactions tracked within the system?

**Answer:** Subscription status updates made within PayPal for Pay Later transactions are reflected in real-time inside , ensuring your records are always up to date.




**Question:** Where does the "Pay Later" button appear for PayPal users?

**Answer:** The PayPal Pay Later button is automatically displayed directly below the standard PayPal button during the checkout process.




**Question:** What should I do if the BNPL options aren't appearing in my Stripe integration settings yet?

**Answer:** This may be because your account is still in the **Stripe migration process**. Once the migration is complete for your specific account, the features will automatically appear in your menu.