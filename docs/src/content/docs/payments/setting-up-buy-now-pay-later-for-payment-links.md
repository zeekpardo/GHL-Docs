---
title: "Setting up Buy now Pay later for Payment Links"
description: "Buy Now Pay Later (BNPL) payment methods are supported in Payment Links. This feature can provide greater payment flexibility to your customers, potentially…"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/H6PfCSZP9uJpUhWhTXFP"
sourceId: "H6PfCSZP9uJpUhWhTXFP"
category: "Payments"
---

Buy Now Pay Later (BNPL) payment methods are supported in Payment Links. This feature can provide greater payment flexibility to your customers, potentially increasing your conversion rates. In this guide, we'll walk you through everything you need to know to start using BNPL options.

## **Overview of BNPL Payment Methods**

BNPL options allow customers to purchase products immediately and pay for them in installments over time. The supported BNPL providers are:

-   Klarna
-   Affirm
-   Afterpay/Clearpay

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdkEy6x8mC2NgZnRzPEkCibI35nsojGWWpbz2-oc0omfPcgH05qf6g4P9Mzzt6pa9vt2JixLJANJhqlaIg6xpAAfNbIIMHkhw0b3lUvUtsCSgXbCM8La4K8kyaDgg1SMsQAovnJ_A?key=ZMZuDvc5BKoq5Zwxn_3RNw)

### **Availability and Requirements**

-   **Payment Provider:** This feature is available only for businesses using Stripe as their payment provider.
-   **Applicable Products:** BNPL options can be used for one-time products only, not for recurring products.

### **Benefits**

-   **Increased Conversions:** Offering BNPL methods can help increase conversions by providing more payment flexibility to your customers.
-   **Order & Transaction Details:** All order and transaction details will be recorded under the Payments menu, similar to credit card payments. Existing triggers for Order Submitted and Payment Received will function as usual.

### **Migration and Availability**

-   **Stripe Migration:** This change requires a migration from Stripe and might already be available for some accounts and in progress for others.

## **Configuring BNPL Payment Methods**

You have the flexibility to turn on/off specific payment methods for different channels provided by . Here’s how to manage the configurations:

1.  **Invoice:** Used for one-time invoices or recurring invoices with auto payments turned off and Text2Pay links. Default methods: Cards, Apple Pay, Google Pay, ACH Direct Debit, Affirm, Klarna, and AfterPay.
2.  **Invoice With Autopayment:** Used for recurring invoices with auto-payments enabled. Default methods: Cards, Apple Pay, Google Pay, and ACH Direct Debit.
3.  **Store:** Used for payment methods on online stores on websites. Default methods: Cards, Apple Pay, Google Pay, Affirm, Klarna, and AfterPay.
4.  **Default:** Used everywhere else like 1-step and 2-step order forms, payment links, memberships, and communities. Default methods: Cards, Apple Pay, and Google Pay.

## **Step-by-Step Guide to Enabling BNPL Options within**

**Important:** This feature is available only for businesses using Stripe as their payment provider.

**1\. Access Payment Settings:** Navigate to Payments on the left > Integrations at the top > Stripe > Manage Payment Methods

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdn6XpW3P2nEpsGIZDz3uDgNxodTCBAWOpLLMMn1gZblmGiS5zt6vDejHxM-zcGCBXAEn52s2pvel-WvYU8TIcqkpcGclvYqobnEjxH8U7YvPc7LDctT4HXDl6SzkTHeubL1XBL6Q?key=ZMZuDvc5BKoq5Zwxn_3RNw)

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeG-EizV4mSKS8B9IY07LjngGgqlHfx6v96kFtxKWxQllN-rEgUz9aQuOvU0dWt17xVo_v3A7IRdhsUMZXgwVlhz3MQlE7ygIFMjrNpZlKF8nk2kEBQRtl_9b4XeRM9EsqRqbg79g?key=ZMZuDvc5BKoq5Zwxn_3RNw)

**Select BNPL Providers:** Enable the BNPL providers (Klarna, Affirm, Afterpay/Clearpay) you want to offer.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfBAmXnuhzxo1ZEMqaEECOcfpp1U6njW2PgWIOEtkYXrjuCrfs-iKJCCl432y_3aDbVWrb3azk7k3Ed-Hqdkr_rl3GJuInkQCBMK9iLal5MwXy9HKWOBTQ8A2idOXHt2VBhxf91_g?key=ZMZuDvc5BKoq5Zwxn_3RNw)

-   Within , navigate to Payments > Payment links, access your custom payment links and they will now start showing all the BNPL payment methods you have enabled.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXd-9RZRnFN28h708TwZktGKvwe3aNiBDbBQY2PylLNT67W8eHp-FlBN1cp9sCoxqXFPRFqF7o1Q15grv3yBZiZIzWelFTM8KQpYlz8uikp4NkCaEZG1hTyOpQQHMP_8P3a51WBY?key=ZMZuDvc5BKoq5Zwxn_3RNw)

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcm5as5by0v2_XcNCH93lVBxhpMSd5s-hSARJwoZmrRB3qW5PDGrrk6IkcRzZ8CxEB4i4sh9S9_vbQDAZBriEI9HVqX4-TI7xswmzVkXu-D3TxWe3_ydLelVEYib-TzKi0ihlkg?key=ZMZuDvc5BKoq5Zwxn_3RNw)

### **Order and Transaction Recording**

-   All transactions using BNPL methods will be recorded under the Payments menu, which is similar to other payment methods.
-   Existing triggers for Order Submitted and Payment Received will function as usual.

## **Troubleshooting and Support**

If you encounter any issues with enabling or using BNPL payment methods, refer to the following support articles:

-   How to manage payment methods displayed with Stripe integration

For any additional help, contact our support team for personalized assistance.

**FAQ’s**


**Question:What is required to use BNPL payment methods?

**Answer:** BNPL payment methods are only available for businesses using Stripe as their payment provider. Ensure your Stripe account is integrated to access this feature.


**Question:Can BNPL be used for recurring products?

**Answer:** No, BNPL options are only applicable for one-time products and cannot be used for recurring products.


**Question:How do I enable specific BNPL providers?

**Answer:** Navigate to Payments on the left > Integrations at the top > Stripe > Manage Payment Methods. Enable the BNPL providers (Klarna, Affirm, Afterpay/Clearpay) you want to offer.


**Question:Can I turn off a specific BNPL provider for certain channels?

**Answer:** Yes, you can customize payment methods for channels like Invoices, Stores, and Default Payment Links by accessing the payment configuration settings and disabling the desired provider.


**Question:Do BNPL payments affect order notifications or triggers?

**Answer:** No, order and payment triggers remain the same. BNPL payments integrate seamlessly with your existing workflow for notifications and automation.




**Question:** How do I handle refunds for BNPL transactions?

**Answer:** You can process refunds directly through your **Payments menu** in , just like any other transaction. The BNPL provider will then handle the adjustment of the customer's remaining installments. Note that BNPL providers may have specific rules regarding refund windows, so check their terms.




**Question:** Can I use BNPL for a 2-step order form?

**Answer:** Yes. If you have enabled these methods in your Stripe integration settings within , they will appear on the second step of your order forms alongside credit card options, provided the product is a one-time purchase.




**Question:** Do I need to create a separate account with Klarna, Affirm, or Afterpay?

**Answer:** No. You only need a **Stripe** account. Stripe acts as the central hub; once you enable these methods within your Stripe dashboard (via the Integrations settings in our platform), Stripe handles the relationships and technical communication with the BNPL providers for you.