---
title: "How to Manage Payment Methods Displayed with Stripe Integration"
description: "This article will guide you through managing payment methods in . This feature allows you to dynamically display various payment methods if you have connected…"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/6zCdglExCbq81I99ko8p"
sourceId: "6zCdglExCbq81I99ko8p"
category: "Payments"
---

This article will guide you through managing payment methods in . This feature allows you to dynamically display various payment methods if you have connected Stripe as your default payment provider. This guide will walk you through the steps to turn on/off specific payment methods according to your needs.

## **Overview of Supported Payment Methods**

As of today, supports the following payment methods:

-   Cards
-   Apple Pay
-   Google Pay
-   ACH Direct Debit
-   Affirm
-   Klarna
-   AfterPay
-   Bancontact
-   Ideal
-   Sepa Direct Debit
-   Amazon Pay
-   Revolut Pay
-   Link

## **Navigating to Manage Payment Methods**

Businesses can set up Stripe payment methods directly within , eliminating the need to configure them on Stripe’s dashboard. These payment methods can be enabled or disabled for various product areas, separately in both Live and Test modes. For existing customers, the default payment methods for product areas or checkouts will remain as they were configured in Stripe. 

**Important:** Going forward, editing these payment methods on Stripe will no longer be possible.

-   Navigate to Payments on the left > Integrations at the top. Locate Stripe and click on Manage.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXe_prcMni5BhmDa2YOKdzoGm499QjZ4tFepMij_FM4xAI8CzyD4RyXt_f5N50gWWsLwWxZBREQ1VONa0h83guXfYwmKE9XlIxPtnC0EzC7s1GUWSR4chqwhD45HWOTcfpDtLIgDKA?key=yyhbiZhJzY-yr_hXKiy-_g)

-   Click on Manage Payment Methods 

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeq8R4-cTqJfuUP5XiRWEKxS7I0pV-qgFk91Rf9VHFkWZF8TSNjPbBxza9dRmbkfASKRF2erQY3c0lQW8N_hnO8Qe11uj6d70a-VkQnNIElR2fCyc9A1-Ye1YvCSboTHWIC6pnrKw?key=yyhbiZhJzY-yr_hXKiy-_g)

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcpS8YXMWBNiwdku8QmcccXH7sDQzC-M6_sGDE2qfIu-DVHjCNOf55C3yr58He4itMK7NGQOIvs5DcF1u2XMgr8wAK8jRmgqr36LB1kGtZeno9-sf7aa2JhPByoAMOJwu3z9SN1?key=yyhbiZhJzY-yr_hXKiy-_g)

## **Configurations Available with**

There are four main configurations available to manage payment methods for different channels:

**Product Areas/Checkouts Covered:**

-   Invoices
-   Invoices with AutoPayments
-   Payment Links
-   Funnels - One-Step Order Form
-   Funnels - Two-Step Order Form
-   Forms
-   Ecommerce Stores
-   Calendars
-   Courses
-   Communities
-   Subscriptions

**Note:** Some payment methods may appear as blocked since they are yet to be enabled on our end to support all connected accounts.

### **FAQ**




**Question:** What payment methods are supported by ?
**Answer:** supports the following payment methods: Cards, Apple Pay, Google Pay, ACH Direct Debit, Affirm, Klarna, AfterPay, Bancontact, Ideal, SEPA Direct Debit, Amazon Pay, Revolut Pay, and Link.  




**Question:** How do I manage payment methods in ?
**Answer:** To manage payment methods, navigate to **Payments** on the left, then click on **Integrations** at the top. Find Stripe and click on **Manage**, then select **Manage Payment Methods** to enable or disable payment methods as needed.




**Question:** Can I configure payment methods directly within ?
**Answer:** Yes, you can set up Stripe payment methods directly within , eliminating the need to configure them on Stripe’s dashboard.




**Question:** Can I edit payment methods on Stripe after configuring them in ?
**Answer:** No, editing payment methods directly on Stripe will no longer be possible.




**Question:** What are the product areas or checkouts where payment methods can be applied?
**Answer:** Payment methods can be applied to the following product areas: Invoices, Invoices with AutoPayments, Payment Links, Funnels (One-Step and Two-Step Order Forms), Forms, Ecommerce Stores, Calendars, Courses, Communities, and Subscriptions.




**Question:** Are all payment methods available for all product areas?
**Answer:** Some payment methods may appear as blocked or unavailable until they are enabled to support all connected accounts.




**Question:** Can I enable or disable payment methods for specific product areas in ?
**Answer:** Yes, you can enable or disable payment methods for different product areas, such as invoices, payment links, funnels, forms, ecommerce stores, calendars, courses, communities, and subscriptions. These settings can be adjusted separately for both Live and Test modes.




**Question:** Can I enable or disable payment methods for Live and Test modes separately?
**Answer:** Yes, payment methods can be enabled or disabled separately for both Live and Test modes. This allows you to configure your payment methods according to different testing or live deployment needs.




**Question:** Why do my existing payment methods look different than what I see in Stripe?

**Answer:** For existing customers, the default payment methods for your product areas or checkouts will remain exactly as they were previously configured in Stripe.




**Question:** What happens if I connect a new Stripe account to ?

**Answer:** When a new account is connected, will typically default to a standard set of payment methods (usually Cards, Apple Pay, and Google Pay). You should immediately navigate to the **Manage Payment Methods** section to enable any additional regional methods like **iDEAL** or **Bancontact** that your audience requires.




**Question:** Do I still need to log in to my Stripe dashboard to enable specific payment methods?

**Answer:** No. You can now enable or disable these methods directly within , eliminating the need to configure them on Stripe’s dashboard.