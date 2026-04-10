---
title: "Troubleshooting Guide for Custom Webhook Actions in Workflows"
description: "This guide is designed to help you troubleshoot common issues related to Custom Webhook Actions within workflows. These actions enable real-time data exchange…"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/jy4dxmLZVJft2LPXRPcU"
sourceId: "jy4dxmLZVJft2LPXRPcU"
category: "Troubleshooting"
---

This guide is designed to help you troubleshoot common issues related to **Custom Webhook Actions** within workflows. These actions enable real-time data exchange with external systems using customizable request formats. If your webhooks are not triggering, failing to send, or returning unexpected responses, this FAQ provides quick solutions to help you identify and resolve the issue. Each answer includes concise steps, making it easy to incorporate visuals or examples where needed.

### **FAQ's**




**Question:** Why is my webhook action marked as "Failed" in the workflow history?

**Answer:This usually happens when the external API returns an error or cannot be reached.

**How to Fix:**

Double-check the **URL** used in the webhook for typos or invalid endpoints.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeMjjkUH1cRSLS6AVKTOWnl2S9dPFF99ouH3S2j_gMiYau7OkSMQf1hJvPbV8h9EL0jHsLGKXPo19Loyx5SqTukXfe5-noaNqaCwq9ZkTMReDuh612234p6H_3Y3KY4V-J9CT1EnQ?key=V6R9vHzmKKfhFUeBu_nl2ynE)

-   Ensure the **server you're sending to is online** and can handle incoming requests.

**Steps:**

1.  Copy the webhook URL and test it using a third-party tool (like Postman).
2.  Check the workflow **execution history** to see the error message returned.

Make sure the server supports the **HTTP method** (POST, GET, etc.) you selected.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfguQe8YueyT6NZoafwH7E_9cs69m-Ah8_VKsUji_cjmKjWmHk1TZO83DGPPdsWxkrlyQeiKH0QbyOkC32DDrxAIpR-gF2vQg2xaaRyjyhONoskQmppS5J3kBCQJt40rZkqBOtp?key=V6R9vHzmKKfhFUeBu_nl2ynE)




**Question:** My webhook is not sending the correct data. What’s wrong?

**Answer:Incorrect data mapping or missing custom values can cause this issue.

**How to Fix:**

-   Review the **request body** and make sure all fields are correctly mapped.
-   Use the **autocomplete suggestions** to pull in the right values from contact records or incoming webhook variables.

**Steps:**

1.  Go to the webhook step in your workflow.
2.  Expand the **body** section and recheck each field's value.

Use the {} icon or autocomplete field list to insert accurate variables.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfwg22vne1x9-I9olUoYxjyoKIcIcAc8t03FIHHC7CEgqqhZm6vKl5A9j56JG7rY2jFEqMnDkxwPdzDIJ8EoQRpq9BfbXwTBmdl6bJnavXQ9kAZ_8sLgwEQsu8jioBLbCn-14UU4w?key=V6R9vHzmKKfhFUeBu_nl2ynE)




**Question:** The receiving server is throttling or rejecting some requests. How do I prevent this?

**Answer:This happens when you're sending too many requests too quickly, exceeding the server's rate limit.

**How to Fix:**

-   Slow down the workflow by using a **wait step** before the webhook.
-   Add contacts in batches to avoid overwhelming the server.

**Steps:**

1.  Insert a **Wait Step** before the webhook (e.g., 1 min delay).
2.  Space out contact entries into the workflow (avoid bulk adding large lists).
3.  Coordinate with the receiving system to understand rate limits.




**Question:** My webhook is working, but the external system isn’t doing anything with the data.

**Answer:The data may not be in the correct format or structure the receiving system expects.

**How to Fix:**

-   Check the **API documentation** of the system you're sending data to.
-   Make sure headers (like Content-Type: application/json) and request bodies match their format.

**Steps:**

1\. Under webhook settings, verify that the correct **headers** are used.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdhbO7Auliw4lX_7TFJ3qoMrOpGYC1sqHOZZPyeKuycCbRSAsVcALtwSK2I4ymSIgsifZazya1nP5CARdmEKj5FLuRsoTXBrh3TlbZlu8I_Yp4BDDCUSoW30t9_NIveWEWwT_Nn?key=V6R9vHzmKKfhFUeBu_nl2ynE)

2\. Ensure you're sending data in the **required structure** (JSON, query parameters, etc.).

3\. Test your webhook with a known working sample request to isolate the issue.




**Question:** I’m not seeing any errors, but the webhook action seems to be skipped.

**Answer:Silent skips can happen if the workflow retries and still fails due to silent rejections from the external API.

**How to Fix:**

-   Check if the webhook is configured with **authentication** and the token/key has expired or is invalid.
-   Review the **retry attempts** and response codes in the contact's workflow history.

**Steps:**

1\. Confirm your **authorization method** is correct (e.g., Bearer Token, Basic Auth).

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfXt-dENYHn04aADlPscmbQPl-pNm5-RA9NnCybgKU6jVPjt9UmxArd8cEltEKtuex1nrQ58bkvMRlrTAsXpLRuX7XruYBIcBj_OPrpBxECsGVcro2rErEjwoW2ZIRHZBD_O3eN?key=V6R9vHzmKKfhFUeBu_nl2ynE)

2\. Regenerate or re-enter your credentials.

3\. Re-add the contact to the workflow after fixing the issue.




**Question:** Can I test the webhook setup before sending live data?

**Answer:While there isn’t a preview mode, you can create a **test contact** and send test data through the webhook step.

**How to Test:**

-   Use a dummy contact with known values.
-   Observe the workflow history to ensure the webhook executes successfully and returns the correct response.

**Steps:**

1.  Create a test contact.
2.  Add that contact to the workflow manually.
3.  Monitor the webhook step’s **execution log** under workflow history.




**Question:** Why aren’t my query parameters or headers being recognized by the external system?

**Answer:Incorrect formatting or missing key-value pairs can cause this issue.

**How to Fix:**

-   Review the **Query Parameters** and **Headers** section in your webhook setup.
-   Make sure each field is filled properly and follows the external system’s expected keys.

**Steps:**

1.  In the webhook settings, expand **Headers** and **Query Parameters**.
2.  Confirm all fields are correctly filled (no extra spaces or missing keys).
3.  Save the workflow and retest using a test contact.




**Question:** The webhook worked once, but now it's failing for new contacts. What changed?

**Answer:A likely cause is updated custom values or deleted fields used in the webhook mapping.

**How to Fix:**

-   Review any recent changes made to contact fields, custom values, or the data being sent.

**Steps:**

1\. Reopen the webhook action and double-check all dynamic fields.

2\. Make sure those fields still exist and have data on the new contact.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXduwgtD3MHuPiYcPdXE4EK0txXdQpLZYQLv-4PIxMYKO3rw3VhCIaGh5AGuT-CSyK1meDAvXYKghtGvozHl8tgL7qoeS9HESUvRTzc3TSzva0fJNRG99l5ch5vHaVt5m7NilTEwCA?key=V6R9vHzmKKfhFUeBu_nl2ynE)

3\. Re-save the webhook step and re-test.




**Question:** How can I confirm my webhook is formatted correctly before going live?

**Answer:** Perform a validation check using a testing service.  
How to Test:

-   Send your payload to a mock endpoint or requestbin-style listener.
-   Review the raw payload to ensure the structure matches the expected form




**Question:** What is the difference between a "Custom Webhook" and a "Standard" integration?

**Answer:** Think of a **Standard Integration** like a pre-built bridge (like our Google or Facebook connections). A **Custom Webhook** is a "DIY" bridge. It allows you to send data to _any_ software that has an API, even if we don't have a direct button for it. Because it is custom, you have to tell the system exactly what data to send and where to put it.  




**Question:** Can I receive data back from the and use it later in the same workflow?

**Answer:** The "Custom Webhook" action is an **outbound** send only. If you need to send data _and then_ receive a response to use in the next step, you would need to use a middleware tool (like Zapier or Make) or a "Custom Code" action to handle the asynchronous response.