---
title: "Network Merchants Inc. Integration"
description: "NMI (Network Merchants Inc.) is a well-known payment gateway service provider that offers a variety of solutions for businesses to process online transactions…"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/jpHgpNFQsQPz0BH7k6k7"
sourceId: "jpHgpNFQsQPz0BH7k6k7"
category: "Payments"
---

NMI (Network Merchants Inc.) is a well-known payment gateway service provider that offers a variety of solutions for businesses to process online transactions securely and efficiently. NMI's payment gateway allows merchants to accept credit card and eCheck payments from their customers through multiple channels, including websites, mobile apps, and in-person point-of-sale systems. In this article, we will go over what this integration has to offer and how to set it up.  

### What does NMI have to offer?

Some of the features offered by the NMI payment gateway include the following:

-   Support for multiple currencies and payment methods: NMI supports various currencies and payment methods, allowing businesses to cater to a global audience.

-   Tokenization and encryption: NMI's platform uses tokenization and encryption technologies to ensure that sensitive cardholder information is securely transmitted and stored, minimizing the risk of fraud and data breaches.

-   Fraud prevention tools: NMI offers various fraud prevention tools, such as Address Verification System (AVS) and Card Verification Value (CVV), to help merchants identify and block potentially fraudulent transactions.

-   Customizable checkout experience: Merchants can customize the look and feel of their checkout process to match their branding, ensuring a seamless customer experience.

-   Recurring billing and subscription management: NMI supports recurring billing and subscription management, making it easy for businesses to offer subscription-based products or services.

-   Integration options: NMI offers a range of integration options, including APIs and pre-built plugins, making it easy to connect the payment gateway to various e-commerce platforms, shopping carts, and other third-party software.
-   Reporting and analytics: NMI's platform provides comprehensive reporting and analytics tools that allow merchants to track and analyze transaction data, helping them make informed business decisions.
-   Customer vault: Merchants can securely store their customers' payment information in NMI's customer vault, simplifying the checkout process for returning customers and making it easy to manage recurring payments.

### How can I enable payments via NMI?

NMI integration is currently supported for order forms, invoices, and Text2Pay link payments. These steps can enable the integration:

**Enter the required Gateway ID and API keys with NMI:**

Three keys are required to be entered to connect to NMI:

-   Gateway Id
-   Security key
-   Public key

Please follow these instructions to obtain the keys if you do not already have them:

To get the gateway ID for your account, navigate to your merchant account. Head over to Settings -> Account Information and you will be able to find the Gateway ID for your account.

![](<https://assets2.modalsupport.net/1764071797834-unnamed - 2025-11-25T195625.203.png>)

An application programming interface key (API key) is a unique code that is passed into an API to identify the calling user.

**How To Create A Security Key**

-   Log into the Merchant Account
-   Click on Options
-   Click on Settings
-   Click on Security Keys

**Types Of Security Keys**  

-   API - Used if using Direct Post, Three Step Redirect, or the Query API. (Some plugins may request for this as well)
-   Cart- Used with our hosted cart also known as Quickclick ([https://vimeo.com/202093415](https://vimeo.com/202093415))
-   Tokenization- Used ONLY if you're using Collect.js 

**Note:** You can check API AND Cart and use it for both.

Once you have acquired the keys, please head to **Payments**\> **Integrations**

![](<https://assets2.modalsupport.net/1764071878935-unnamed - 2025-11-25T195749.209.png>)

Then **fill out the respective fields with their keys** and hit **Save:**

![](<https://assets2.modalsupport.net/1764071897248-unnamed - 2025-11-25T195810.040.png>)

**_Please Note:_** _Upgrade to Funnels version 2 to use this feature._ 

**NMI integration for Invoices, Text2pay links, and order form payments**

-   The integration allows the processing of invoices, Text2Pay links, and order form payments using NMI
-   No new products are required to be created for using NMI, it will work with existing products in place
-   Other payments from calendars and memberships will continue to be processed via Stripe for now. Please don't set NMI as the default gateway if you are using calendar payments
-   Supports one-time and recurring payments, one-click upsells along with auto payments in recurring templates
-   Track all orders and transactions using the Orders and Transactions page under the Payments menu
-   Ability to cancel a subscription/recurring template created at any time using the Cancel action
-   Specify the default gateway in case more than 1 gateway is connected

### FAQs

**~~Question: Where can I use the NMI integration to accept payments?~~**  

**Answer:** The NMI integration can process **order form payments in Funnels version 2**. This includes **one-step and two-step order forms andone-click upsells**; **invoice payments** can be processed using the NMI integration, and **Tex2Pay link payments** can be processed using the NMI integration.




**Question:** How should I sync the products with my payment provider?

**Answer:** Syncing the products is not required at all for using NMI/Authorize.net integration. You are only required to create a product(one-time/recurring) under Payments ➝ Products, and it will work according to the price defined while creating/editing the product.

If existing products are being used with Stripe/Paypal, they will work with Authorize.net or NMI by switching the default provider under Payments ➝ Integrations. No additional sync is required to be done in that case.




**Question:** Are Apple Pay, Google Pay, and e-check payment methods supported?

**Answer:** Only credit/debit card payments can be accepted using NMI integration. Currently, you cannot accept Apple Pay, Google Pay, or check payment methods,




**Question:** Is 3DS supported with the NMI integration?

**Answer:** NO, 3DS payments are not supported using the integration.




**Question:** Can I use Stripe to offer Google Pay and Apple Pay and process credit card payments using NMI/Authorize.net?

**Answer:** Unfortunately, this cannot be the case. Google Pay and Apple Pay can be provided using Stripe only for now, and only one gateway is defaulted for order form payments among Stripe, Authorize.net, or NMI. So using both simultaneously is not possible using NMI as the default gateway.




**Question:** Will recurring purchases be supported with NMI?**   

**Answer:** Yes, recurring product purchases are supported using NMI/Authorize.net integration. You can track the subscriptions under Payments ➝ Subscriptions and orders details under the Orders and Transactions table.

**Please Note:**

Purchase only one recurring product at a time in an order form checkout is supported.




**Question:** Where can I find the track of subscriptions and orders placed?  
**Answer:** Yes, recurring product purchases are supported using NMI/Authorize.net integration. You can track the subscriptions under Payments ➝ Subscriptions and orders details under the Orders and Transactions table.

**_Please Note:_** _Only one recurring product at a time in an order form checkout is supported._




**Question:** I am already using Stripe. Do I need to disconnect Stripe to connect to NMI?

**Answer:** No, You are not required to disconnect Stripe to connect to NMI. You can connect to both gateways on the integrations page. However, since you have connected two gateways for processing payments, you must define a default gateway for processing order form payments.




**Question:** What is the meaning of the Default gateway at the top of the Integrations page?

**Answer:** When you connect to more than one gateway on the Integrations page, you will be required to define a default gateway for processing payments. This is necessary since more than one gateway is eligible to process payments and would require a default choice. One default choice must be made.

**_Please Note:_** _PayPal will continue to function alongside Authorize.net/Stripe, whichever is set as the default_




**Question:** Why don't I see PayPal among the default gateway options?

**Answer:** You can connect to Paypal and use it as a payment method alongside a credit card payment method using Stripe/Authorize.net/NMI. This means that the default must be chosen among Stripe/Authorize.net/NMI when connected. PayPal can be used independently and alongside credit card payment methods on order forms.




**Question:** I have connected to NMI and have selected it as the default gateway. Will transactions across the application be processed through NMI now?

**Answer:** The NMI integration is available only for invoices, text2pay links, and order form payments. This means that if NMI is connected and is set as the default gateway, only these payments will be processed through NMI. Other payment areas like calendars or memberships will continue to process payments using Stripe.

**_Please Note:_** _If there are any recurring subscriptions/pending transactions with Stripe, they will continue to run as is till the time the Stripe connection is in place. We encourage you to keep the connections in place and not disconnect any gateway, defining the default gateway will run new transactions through the desired choice and will keep in place the existing subscriptions running through Stripe and/or PayPal._




**Question:** What will change in the reporting of transactions done with Authorize.net? Where will I be able to keep track of all payments?


**Answer:** There will be no change in the Orders/Subscriptions/Transactions reporting. All the payments done via NMI/Authorize.net will be available under Payments ➝ Transactions.

Also, there will be no change in the functioning of triggers/attribution associated with order forms. All the functionalities will work the same.




**Question:** How do I Cancel/End a subscription created via NMI/Authorize.net? I am not able to do so in the merchant portal.

**Answer:** Subscriptions created using NMI/Authorize.net can be canceled within the Subscriptions page using the 'Cancel Subscription' action.

We do not create subscriptions using the Automatic Recurring Billing of NMI/Authorize.net; hence, only charges corresponding to a subscription transaction will be visible in the merchant portal.

![](<https://assets2.modalsupport.net/1764071934715-unnamed - 2025-11-25T195846.571.jpg>)

![](<https://assets2.modalsupport.net/1764071943666-unnamed - 2025-11-25T195854.965.jpg>)




**Question:** Will I be able to refund transactions as well within the application itself?

**Answer:** No, as of now, we do not have the refund functionality within the application. It would be best if you used the merchant portal for refunding transactions for now.




**Question:** Where will I be able to find the subscriptions created via NMI? I cannot relate to the subscription status defined on the Subscriptions page.

**Answer:** All subscriptions created on the order forms can be tracked under Payments ➝ Subscriptions. The following represents subscription statuses and their inferences:

-   **Pending** \- When the first transaction for the subscription could not be completed, or the transaction is held for review

-   **Trial** \- Subscription is in trial mode

-   **Active** - The last payment was made, and there is an upcoming payment as well

-   **Expired** - All the subscription payments have been completed, and the subscription no longer exists

-   **Canceled** - The business canceled the subscription using the Cancel action, and no further payments will be processed.

-   **Unpaid** - The last payment for the subscription was not paid successfully. The subscription is ongoing, but the final payment was unsuccessful.

The following actions will be provided for the subscriptions according to the status:

Actions / Status

Pending

Trial

Active

Expired

Canceled

Unpaid

Cancel

No

Yes

Yes

No

No

Yes

**The following flow describes the handling of subscription statuses and payment retry logics in case of a subsequent payment failure:**

If the first subscription payment is successful while purchasing the subscription on the order form, the subscription will move into the active state. It can also move into the trial status if a trial period is attached to the recurring product. The subscription will remain active until every recurring payment is made successfully for the subscription and will move to "Expired" after the completion of payments.  

The payment will be attempted two more times after 24 hrs each. The status will remain "Unpaid."

The subscription will remain in the Unpaid state and attempt the following subsequent transactions, each with two retries. The next subsequent payment will also be attempted, and if any payment becomes successful, the subscription will move into "Active." Else will stay with "Unpaid" status.  

The subscription status will move to "Expired" after all the retries are made for the last transaction.

If the business disconnects the gateway account and there is an ongoing subscription, the transaction cannot be processed, and hence the subscription will move to unpaid. The retry attempts will continue according to the retry logic.  




**Question:** Is PCI compliance required to use NMI integration?
**Answer:** Yes, PCI compliance is required for all merchants processing credit card payments. However, NMI handles most of the sensitive data through **tokenization**, reducing your PCI scope.




**Question:** Do I need a merchant account to use the NMI integration?

**Answer:** Yes. NMI functions as a payment gateway and requires a connected merchant account to process transactions. Without an active merchant account, transactions cannot be authorized or settled.




**Question:** How do I handle refunds for NMI transactions?  
Answer**: Currently, the platform allows you to track and manage orders, but full **refund functionality** must be handled directly inside your NMI Merchant Portal. Once the refund is processed there, you can manually update the transaction status in to keep your records accurate.  




**Question:** How do I find my Gateway ID if I have multiple merchant accounts?

**Answer:** If you manage multiple accounts under one login, ensure you select the correct merchant first. Then, navigate to **Settings > Account Information**. The **Gateway ID** is a numerical value unique to that specific merchant configuration and is required for to route funds correctly.

### Additional resources for reference

[**_Testing cards with NMI_**](https://support.nmi.com/hc/en-gb/articles/115002375583-Test-Cards)

[**_Available currencies for NMI_**](https://support.nmi.com/hc/en-gb/articles/360005072012-Available-Currencies-Currency-Selection#Querying%20Available%20Currencies)