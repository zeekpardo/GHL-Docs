---
title: "Apple Pay and Google Pay Invoices or Text2Pay Links"
description: "Apple Pay and Google Pay Invoices or Text2Pay Links"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/YxobC07PmUOrigWbfBL6"
sourceId: "YxobC07PmUOrigWbfBL6"
category: "Payments"
---

**Apple Pay and Google Pay Invoices or Text2Pay Links**

Apple Pay and Google Pay are supported with one-time and recurring invoices as well as Text2Pay links. Your customers will see Apple Pay and Google Pay based on their geographic location and the web browser of the end customer. Only if both these conditions apply will Google Pay/Apple Pay be visible for payment along with the default choice for a credit card. They will be able to use it based on whether or not they have a payment method associated with their Google account/Apple account.

[**Countries and Regions that Support Apple Pay**](https://support.apple.com/en-in/HT207957)[**Countries that Support Google Pay**](https://support.google.com/googlepay/answer/12429287)

**Currently, supported browsers include Chrome Desktop, Chrome Android, macOS Safari, iOS Safari, and Microsoft Edge for Windows.**

**Please note**: This feature is available exclusively with Stripe and not with other payment providers.

**Please Note:** This capability only works with Version 2 Funnels.

## How do I enable Apple Pay and Google Pay?

The primary requirement is to use Stripe Connect under the **Payments ➝ Integrations** page. If you're using Stripe APIs to connect to Stripe, please use **Stripe Connect** to use this feature. Once you have connected your Stripe account in **Payments > Integrations**, click on ‘Manage’ where it shows Stripe, and there you can toggle to enable Apple Pay and Google Pay.

**Please note:** Apple pay requires an additional step to register the domain on which the payment will be accepted using Apple Pay. The platform will do this registration for all business automatically as soon as the Stripe account is connected. This will automatically allow them to offer Apple Pay as a payment method in invoices and text2pay link payments 

![](https://assets2.modalsupport.net/1766418365636-image2.jpg)

![](https://assets2.modalsupport.net/1766418379236-image3.jpg)

Once completed, Google Pay and Apple Pay will show alongside the credit card option on order forms. Recurring payments and upsells are supported with Apple Pay/Google Pay

Here are some screenshots of how this will look:

![](<https://assets2.modalsupport.net/1763743890795-Captura de pantalla 2025-11-21 115125.png>)

![](<https://assets2.modalsupport.net/1763743912388-Captura de pantalla 2025-11-21 115145.png>)

### **Troubleshooting Apple Pay**

-   The toggle to enable Apple Pay and Google Pay should be turned on while Stripe is connected to the location
-   Make sure that Apple Pay is available in your country - (Look in **Supported Capabilities** under **Payment methods**)  
    [https://stripe.com/docs/connect/payment-method-available-countries#apple-pay](https://stripe.com/docs/connect/payment-method-available-countries#apple-pay)
-   Ensure that the domain on which the funnel is hosted is registered with Stripe. This is an additional requirement for Apple Pay and should ideally automatically happen as soon as the toggle is turned on.

 a. Head over to your Stripe dashboard [on this URL](https://dashboard.stripe.com/settings/payments/apple_pay) and see if the domain is listed in the Web Domains section

 b. If the domain is not listed here, you can manually add the domain by clicking on Add New Domain. This is only intended for a quick resolution; you should raise a ticket with us if it does not automatically register on turning the toggle.

-   If the domain appears registered, ensure that the domain association file is hosted for that domain. This means that a file should get downloaded upon visiting [https://example.com/.well-know...](https://example.com/.well-known/apple-developer-merchantid-domain-association), if you're registering at [https://example.com](https://example.com). Navigate here for more information on this: [https://stripe.com/docs/stripe-js/elements/payment-request-button?client=html#verifying-your-domain-with-apple-pay](https://stripe.com/docs/stripe-js/elements/payment-request-button?client=html#verifying-your-domain-with-apple-pay)

The browser or the device fulfills the following requirements:

-   The end customer is on the web in Safari, starting with iOS 10 or macOS Sierra
-   List of compatible devices with Apple Pay: [https://support.apple.com/en-us/HT208531](https://support.apple.com/en-us/HT208531)
-   List of participating banks with Apple Pay: [https://support.apple.com/en-us/HT204916](https://support.apple.com/en-us/HT204916)

### **Troubleshooting Google Pay**

-   The toggle to enable Apple Pay and Google Pay should be turned on while Stripe is connected to the location.
-   Make sure that Google Pay is available in your country -  (Look in **Supported Capabilities** under **Payment methods**)  
    [https://stripe.com/docs/connect/payment-method-available-countries#google-pay](https://stripe.com/docs/connect/payment-method-available-countries#google-pay)
-   The customer is using Google Chrome or Safari.
-   The customer has a valid card registered with Google Pay.

### **FAQ**




**Question:** What will differ in my reporting of transactions and orders?
**Answer:** There will be no change in the reporting or tracking of the transactions and orders. Stripe treats Apple Pay and Google Pay payments as card payments. All the purchased orders via Apple Pay or Google Pay will be reflected on the Orders/Transactions/Subscriptions page.




**Question:** What is the difference in Stripe pricing for transactions processed through credit cards and Apple/Google Pay?
**Answer:** There is no difference in the pricing between credit card transactions and Apple Pay/Google Pay transactions. They are charged similarly to credit card transactions. [Learn More here about Apple Pay.](https://docs.stripe.com/apple-pay)




**Question:** I'm using PayPal/Authorize.net/NMI as my payment provider instead of Stripe. Can I provide Apple Pay and Google Pay to my customers?
**Answer:** No, Apple Pay and Google Pay can be provided as payment methods using Stripe Connect only.




**Question:** Can I enable other payment methods like Bank redirects and ACH as well?  
**Answer:** Currently, only Apple Pay and Google Pay can be enabled using Stripe.




**Question:** Will Apple Pay/Google Pay be available if I’m using a custom domain?  
**Answer:** Yes, provided your custom domain is successfully registered with Stripe. If the domain is not automatically registered, you may need to add it in Stripe manually and then notify support.




**Question:** Why did my Google Pay button disappear after I added a custom CSS code?
**Answer:** Custom CSS or JavaScript that modifies the "Order Form" element can sometimes hide the **Payment Request Button** container. If you are using custom code, ensure it isn't setting display: none or visibility: hidden to the Stripe elements.




**Question:** Is there a way to force Apple Pay to show up for all users?

**Answer:** No. The visibility of these buttons is **client-side dependent**. This means the button will _only_ appear if the customer’s browser (like Safari for Apple Pay) and device (iPhone/Mac) are compatible and have a card already saved. If they are on a Windows PC using Firefox, they will see the standard credit card fields instead.




**Question:** Why can I see the Google Pay button on my Android phone but not on my Windows laptop?

**Answer:** Google Pay visibility depends on the browser's ability to access your saved payment methods. On a desktop, you must be using **Google Chrome or Microsoft Edge** and be signed into your Google Account with a valid card on file. If you are using a "Guest" window or an unsupported browser like Firefox, the button will stay hidden.