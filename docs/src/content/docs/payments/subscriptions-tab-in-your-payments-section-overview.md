---
title: "Subscriptions Tab in Your Payments Section Overview"
description: "In this article, we will give an overview of the Subscription Tab and what features can be found there."
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/rD117QvCYaN7vqIT8FOc"
sourceId: "rD117QvCYaN7vqIT8FOc"
category: "Payments"
---

In this article, we will give an overview of the Subscription Tab and what features can be found there.

### Part 1: Overview

-   _Click on Payments > Subscriptions_

![](<https://assets2.modalsupport.net/1763468833475-unnamed - 2025-11-18T202706.309.png>)

**In this tab you will find:**

-   Ability to add and manage subscriptions directly
-   Schedule subscriptions for a future start date.
-   Payment Provider and Subscription ID
-   Customer details
-   Source of subscription creation
-   Date of creation
-   Subscription amount
-   Status of subscription

### Part 2: What is included in this Section?

-   Businesses can create subscriptions directly by navigating to Payments > Subscriptions > Add Subscription.
-   When adding subscriptions, users can schedule them for a future start date by choosing a specific Billing Date. This enables the option to begin the subscription and associated payment collections at a later time. Users can easily create a new subscription by selecting the customer and product. Payments can be completed using an existing card on file or by adding a new one. All of this is managed in a streamlined, single flow.

![](<https://assets2.modalsupport.net/1763468864237-unnamed - 2025-11-18T202739.157.png>)

![](<https://assets2.modalsupport.net/1763468880294-unnamed - 2025-11-18T202751.427.png>)

**Note:** Subscriptions can also be added directly from the Contact's detail page, allowing for a faster setup for the customer by navigating to Contacts > Contact Details > Payments > Actions > Create Subscription.

-   Payment provider details, along with details of the source of subscription creation.
-   Subsequent transactions happen in the subscription in case the subscription was created.
-   Temporarily or indefinitely pause subscriptions, providing flexibility in managing payment cycles.

**NOTE:**

You can send customers a link to update their payment method for ongoing subscriptions. This simplifies maintaining updated payment information and reduces the risk of failed transactions. Access this through the quick action menu on the subscription list page or the Actions section on the subscription detail page.

![](<https://assets2.modalsupport.net/1763468903675-unnamed - 2025-11-18T202817.326.png>)

![](<https://assets2.modalsupport.net/1763468918167-unnamed - 2025-11-18T202830.529.png>)

![](<https://assets2.modalsupport.net/1763468935208-unnamed - 2025-11-18T202845.638.png>)

**Part 3: What does the status of the subscription represent?**

![](<https://assets2.modalsupport.net/1763468952134-unnamed - 2025-11-18T202906.707.png>)

The following list represents subscription statuses and their inferences:

**Pending** \- When the first transaction for the subscription could not be completed or when held for merchant review

**Trial** \- Subscription is in trial mode

**Active** \- The last payment was made, and there is an upcoming payment as well

**Paused** - The subscription has been temporarily halted.

**Expired** \- All the subscription payments have been completed, and the subscription no longer exists

**Canceled** \- The merchant canceled the subscription using the Cancel action, and no further payments are to be processed.

**Unpaid** \- The last payment for the subscription was not paid successfully. The subscription is ongoing, but the final payment was unsuccessful.  

Cancellation will be possible for the subscriptions according to the status:

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

Cancel Action is provided only against those subscriptions that are created on Authorize.net and Network Merchants Inc. Cancellation of subscriptions for Stripe and PayPal will be added soon.

**The following flow describes the handling of subscription statuses and payment retry logics in case of a subsequent payment failure :**

-   If the first subscription payment is successful while purchasing the subscription on the order form, the subscription will move into the active state. 

-   It can also move into the trial status if there is a trial period attached to the recurring product

-   The subscription will remain active until every recurring payment is made successfully for the subscription, and will move to "Expired" after the completion of payments.

-   If the credit card expires for the end customer in the middle of the subscription, the payment requires authentication from the end customer, or the last payment didn't go through successfully, the status will move over to "Unpaid."

-   The payment will be attempted two more times after 24 hrs each. The status will remain "Unpaid."
-   The subscription will remain in the Unpaid state and will attempt the following subsequent transactions, each with two retries. 
-   The next subsequent payment will also be attempted, and if any payment becomes successful, the subscription will move into "Active." Else will stay with "Unpaid" status.
-   The subscription status will move to "Expired" after all the retries have been made for the last transaction.

-   If the merchant disconnected the gateway account and there is an ongoing subscription, the transaction cannot be processed;  hence, the subscription will move to unpaid. The retry attempts will continue according to the retry logic

Subscriptions created using Authorize.net and Network Merchants Inc. can be canceled within the **Subscriptions** page using the '**Cancel Subscription**' Action.

![](<https://assets2.modalsupport.net/1763469002836-unnamed - 2025-11-18T202954.871.png>)

![](<https://assets2.modalsupport.net/1763469019496-unnamed - 2025-11-18T203009.144.png>)

We do not create subscriptions using the Automatic Recurring Billing of Authorize.net or NMI; hence, only transaction charges corresponding to a subscription will be visible in the merchant portal.

### Subscription Pause and Management Feature

Subscriptions can be paused from the subscription list or details page, with options to resume automatically after a set date or manually. During the pause, invoices are still generated, and businesses can choose to have them as draft or void. This helps maintain accurate financial records while offering flexibility in subscription management.

Pause-related fields are added to the **CSV download of Subscriptions** (Paused Date, Resume Date, etc.)

**Flexible Subscription Management**You can adjust active subscriptions without canceling—add/remove products, change quantities (1–1000), and edit start/end dates while keeping billing schedules unchanged for a smoother customer experience.

**How to update a subscription:**

1- Navigate to **Payments** → **Subscriptions**.

2- Click on the three dots and then go to **Update**

![](<https://assets2.modalsupport.net/1763469042411-unnamed - 2025-11-18T203035.310.png>)

3- Add/remove products or adjust quantities (1–1000).

![](<https://assets2.modalsupport.net/1763469067085-unnamed - 2025-11-18T203055.634.png>)

4- Edit the **Start Date** (for scheduled subscriptions) or **End Date** (for active ones).

![](<https://assets2.modalsupport.net/1763469084777-unnamed - 2025-11-18T203120.222.png>)

-   Click on the three dots next to a subscription and select "Pause."
-   Choose to pause the subscription, definitely (with a specified end date) or indefinitely.

![](<https://assets2.modalsupport.net/1763469114237-unnamed - 2025-11-18T203142.197.png>)

![](<https://assets2.modalsupport.net/1763469125777-unnamed - 2025-11-18T203154.781.png>)

-   If paused, the subscription will automatically resume after the set date, or you can resume it manually at any time. Subscriptions paused indefinitely need to be resumed manually

![](<https://assets2.modalsupport.net/1763469148656-unnamed - 2025-11-18T203218.110.png>)

-   While pausing subscriptions on every payment due date an invoice would be generated, customers would get an option to get these invoices in draft or void state.
-   Draft invoices can be sent to the customers and the payments against these invoices would be marked to the Subscription

![](<https://assets2.modalsupport.net/1763469173076-unnamed - 2025-11-18T203241.834.png>)

![](<https://assets2.modalsupport.net/1763469184359-unnamed - 2025-11-18T203254.020.png>)

**Visibility on Subscription Details**

Subscription details are easier to read, helping users manage billing, verify payment methods, and track activity more efficiently. Information such as card brand, last four digits, and expiry date is clearly shown, with fallback messages if data is missing. Users can also view cancellation dates, end dates, and the total number of completed payments at a glance.

**How to use:**

Go to Payments → Select a Subscription → View Details

![](<https://assets2.modalsupport.net/1763469209477-unnamed - 2025-11-18T203323.230.png>)

![](<https://assets2.modalsupport.net/1763469218555-unnamed - 2025-11-18T203332.892.png>)

**Subscription Settings – Failed Payment Retries**

Businesses can automate subscription payment retries, reducing manual follow-ups and improving recovery rates. Users can set up to **three retries** with customizable gaps of **1, 3, 5, or 7 days**, ensuring a higher chance of successful payments. Changes to retry settings apply to **both new and existing subscriptions**, including those already in progress. If all retries fail, businesses can choose to keep the subscription **Unpaid** or move it to **Cancelled** automatically.

**How to Use:** Go to **Payments > Settings > Subscription**, configure retry attempts and intervals, and select the preferred action for failed payments.

![](<https://assets2.modalsupport.net/1763469249235-unnamed - 2025-11-18T203400.358.png>)

**Supports:** NMI, Authorize.net, and Square.

**Subscription Payment Failure and Invoice Management** 

Businesses can also configure whether to create invoices for failed subscription payments, offering flexibility in managing transactions. You can set up automatic retries, create invoices, and send them via email or SMS.

**How to Use:** Go to Payments > Subscription Settings and configure invoice creation and notifications for failed payments.

![](<https://assets2.modalsupport.net/1763469269037-unnamed - 2025-11-18T203423.995.png>)

**Note:** This works with major payment providers and alternative providers.

**CVS Export for Subscription** 

The CSV export for the Subscriptions tab provides enhanced data details, including subscription start and end dates, trial periods, payment method, currency, subtotal, discounts, tax amounts, coupon codes, and line item specifics like quantity and price. 

![](<https://assets2.modalsupport.net/1763469297325-unnamed - 2025-11-18T203444.365.png>)

## Stripe and Paypal

![](<https://assets2.modalsupport.net/1763469320259-unnamed - 2025-11-18T203512.510.png>)

**NOTE:** For Stripe, the subscription status and payments received will automatically sync with your Stripe dashboard. For example, if a subscription is canceled on Stripe, it will also reflect as canceled in your subscriptions. All the upcoming payments received will also remain in sync with your Stripe dashboard.

However, this is not the case if the subscription was created on PayPal. In case the subscription originated in Paypal, the subscription details will not capture the upcoming payments. **The subscription entry will be created by you to track the subscriptions that were created via PayPal.**

All subscriptions created on the order forms can be tracked under **Payments ➝ Subscriptions**.

## FAQ




**Question:** How can I create a new subscription in the Subscriptions tab?
**Answer:** To create a new subscription, go to Payments > Subscriptions > Add Subscription. Select the customer, product, and billing date. You can choose to start the subscription immediately or schedule it for a future start date.




**Question:** Can I cancel a subscription from the Subscriptions tab?
**Answer:** Yes, you can cancel subscriptions directly if they were created via Authorize.net or Network Merchants Inc. Cancellation for subscriptions created through Stripe and PayPal will be available in the future.




**Question:** What does the "Unpaid" status mean, and how are payment failures handled?
**Answer:** The "Unpaid" status indicates that the last payment attempt was unsuccessful. The system will automatically retry the payment twice after a 24-hour interval. If successful, the status will move to "Active"; otherwise, it will remain as "Unpaid."




**Question:** Can I send customers a link to update their payment details for ongoing subscriptions?
**Answer:** Yes, you can send a link to customers to update their payment method. This can be accessed through the quick action menu on the subscription list page or from the Actions section on the subscription detail page, helping to avoid failed transactions.




**Question:** How does the subscription status sync with Stripe and PayPal?
**Answer:** For Stripe, subscription status and payments will sync automatically with your Stripe dashboard. Any changes made on Stripe will be reflected in the Subscriptions tab. However, this does not apply to subscriptions created on PayPal. For those, upcoming payments are not tracked, and you must create an entry to manually track PayPal-originated subscriptions.




**Question:** Can subscriptions automatically resume?
**Answer:** Yes, if paused definitely with an end date, the subscription will resume automatically on that date.




**Question:** Will invoices still be generated during the pause?
**Answer:** Yes, invoices will continue to be generated on each payment due date and can be set as draft or void.


**Question:Can I add or remove products from an existing subscription?
**Answer:** Yes, as long as all products share the same billing frequency, you can add or remove items directly from the subscription without interrupting the billing cycle.


**Question:What kind of payment methods are supported in the new view?
**Answer:** Both card and non-card payment methods are supported. For cards, brand, last four digits, and expiry date are displayed. For others, only relevant available data is shown.


**Question:Can I export subscription data?
**Answer:** Yes. The CSV export includes details like start/end dates, trial periods, billing amounts, payment methods, coupons, discounts, and taxes for easier reporting.


**Question:How can I manage failed payment retries for subscriptions?
**Answer:** You can set up automatic payment retries for failed subscription payments. Users can configure up to three retries with customizable intervals (1, 3, 5, or 7 days). The retry logic applies to both new and existing subscriptions. If all retries fail, businesses can choose whether to keep the subscription in "Unpaid" status or automatically cancel it.  




**Question:** Can I pause a subscription and resume it later?

**Answer:** Yes, you can pause a subscription either indefinitely or until a specified end date. Subscriptions can be resumed manually at any time or automatically on the set date. Even during the pause, invoices will be generated, and businesses can choose whether to have them as draft or void.




**Question:** Can I change a customer’s subscription without making them sign up again?

**Answer:** Yes! You can adjust active subscriptions by clicking the three dots and selecting "Update." You can add or remove products, change quantities (up to 1,000), and even modify the end date. This ensures a seamless experience for the customer without requiring a new checkout.




**Question:** What is the difference between "Expired" and "Canceled" statuses?

**Answer:** "Expired" means all scheduled payments for the subscription have been successfully completed and the term has ended. "Canceled" means the merchant manually terminated the subscription using the Cancel action, preventing any further payments from being processed.




**Question:** Can I schedule a subscription to start at a later date instead of immediately?
**Answer:** Yes. When creating or adding a subscription, you can choose a specific "Billing Date" to schedule it for the future. This allows you to set up the customer and product details, while delaying the start of the subscription and the associated payment collections until your chosen date.