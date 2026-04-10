---
title: "Available Testing Cards for Payment Integrations"
description: "The following test credit card numbers will only work in the sandbox. Use any expiration date after today’s date. If the card code is required, please use any…"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/7VePI62gVQWDtx27r5nc"
sourceId: "7VePI62gVQWDtx27r5nc"
category: "Payments"
---

## **Test card numbers for Authorize.net**

**The following test credit card numbers will only work in the sandbox.** Use any expiration date after today’s date. If the card code is required, please use any 3-digit combination for Visa, Mastercard, Discover, Diners Club, EnRoute, and JCB; use a 4-digit combination for American Express.

**Test Card Brand**

**Number**

American Express 

370000000000002

Discover

6011000000000012

JCB

3088000000000017

Diners Club/ Carte Blanche

38000000000006

Visa

4007000000027

4012888818888

4111111111111111

Mastercard

5424000000000015

2223000010309703

2223000010309711

## Test cards for Stripe:

Visa

4242424242424242

Any 3 digits

Any future date

Visa (debit)

4000056655665556

Any 3 digits

Any future date

Mastercard

5555555555554444

Any 3 digits

Any future date

Mastercard (2-series)

2223003122003222

Any 3 digits

Any future date

Mastercard (debit)

5200828282828210

Any 3 digits

Any future date

Mastercard (prepaid)

5105105105105100

Any 3 digits

Any future date

American Express

378282246310005

Any 4 digits

Any future date

American Express

371449635398431

Any 4 digits

Any future date

Discover

6011111111111117

Any 3 digits

Any future date

Discover

6011000990139424

Any 3 digits

Any future date

Discover (debit)

6011981111111113

Any 3 digits

Any future date

Diners Club

3056930009020004

Any 3 digits

Any future date

Diners Club (14-digit card)

36227206271667

Any 3 digits

Any future date

JCB

3566002020360505

Any 3 digits

Any future date

UnionPay

6200000000000005

Any 3 digits

Any future date

UnionPay (debit)

6200000000000047

Any 3 digits

Any future date

## Test cards for NMI (Network Merchants Inc. Integration)

### Test Card PANs

#### Generic Card Scheme PANs

The NMI test platform will accept any valid PAN, however, if you don't have one available for use, it is possible to use one of the following available PANs:

**Card Scheme**

**Card Number (PAN)**

Amex

371111111111114

Diners

3001111111111116

Discover

6011111111111117

JCB

35281111111111119

Maestro

56410411111111113

Mastercard _(Credit)_

5411111111111115

Mastercard _(Debit)_

5511111111111114

Visa _(Credit)_

4532111111111112

Visa _(Debit)_

4751271111111118

_\* For the expiry date, please choose any date in the future__\*\* For CSC/CVV, please use the first 3 digits of the card number (PAN)._

## FAQ’s




**Question:** What are test card numbers, and why are they used?
**Answer:** Test card numbers are dummy credit card numbers used to simulate transactions in a secure, non-production environment. They allow developers and testers to test payment processing without using real cards, ensuring that payment systems work correctly before going live.




**Question:** Can I use these test card numbers in a live environment?
**Answer:** No, these test card numbers are intended only for use in sandbox or testing environments. They will not work in live environments and should not be used for real transactions.




**Question:** What expiration date should I use with test card numbers?
**Answer:** Use any expiration date that is in the future. The specific month and year do not matter as long as the date is after today’s date.




**Question:** What card code (CSC/CVV) should I use with test cards?
**Answer:** You can use any 3-digit combination for Visa, Mastercard, Discover, Diners Club, EnRoute, and JCB cards. For American Express, use any 4-digit combination.




**Question:** Are the test cards specific to each payment processor?
**Answer:** Yes, the test cards are specific to each payment processor (e.g., Authorize.net, Stripe, NMI) and should be used in their respective environments to test payment processing functionality.




**Question:** What is the importance of using test cards in sandbox environments?
**Answer:** Using test cards in sandbox environments allows developers and users to test payment flows without involving real money or real customer data, ensuring the payment process is secure, functional, and error-free before going live.




**Question:** What are the differences between the Visa test cards for Authorize.net and Stripe?
**Answer:** The Visa test cards differ slightly between Authorize.net and Stripe in terms of the numbers used. Each processor has its specific test card numbers, and they must be used within the correct platform's sandbox environment.




**Question:** What is a sandbox environment, and why is it used?
**Answer:** A sandbox environment is a safe, testing environment developers use to simulate real-world transactions without affecting actual accounts or financial data. It is used for testing, debugging, and ensuring the system works correctly before deploying it in a live environment.


**Question:  What should I do if a test transaction fails?
**Answer:** Double-check the card number, expiration date, and CVV. Ensure you are using the correct card for the payment processor and that you are in the sandbox environment. Each processor has specific rules for testing various scenarios, such as declines or errors.




**Question:** How do I switch my account from Test Mode to Live Mode?

**Answer:** Once you have finished testing with these cards, navigate to your **Payment Settings**. You will see a toggle for "Test Mode" or "Sandbox." Switch this to **Live**, save your settings, and your system will now be ready to accept real credit cards from your customers.




**Question:** Is it safe to enter these test numbers into my actual or website?
**Answer:** It is safe **only if your payment toggle is set to "Test Mode."** Never enter these numbers if your site is live, as the system will attempt to run them against real banks, resulting in an error and potentially flagging the transaction as suspicious.




**Question:** Does NMI require specific card numbers, or can I use any number?

**Answer:** The NMI test platform is flexible and will accept **any valid PAN**. However, if you don't have one, you should use the specific "Generic Card Scheme" numbers provided in the list (e.g., Visa Credit: 4532111111111112).