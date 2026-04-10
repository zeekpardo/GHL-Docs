---
title: "Workflow Action: Webhook"
description: "Using a webhook with Zapier or, in advanced cases, other programs using API management solutions is possible with . With webhooks, you can export/import data…"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/m31OR5RNhkEG2iz43Hbo"
sourceId: "m31OR5RNhkEG2iz43Hbo"
category: "Workflow Actions"
---

Using a webhook with Zapier or, in advanced cases, other programs using API management solutions is possible with . With webhooks, you can export/import data to and from  with another platform or system. This is useful if you are utilizing multiple systems and want to exchange information with  . (Check out our Webhook setup article if you need an overview of how to create and use Webhooks.)

**Please Note:** This is a premium app option in Zapier. There are available options for integrated apps to accomplish this without webhooks with limited triggers and actions depending on the application. Browse options for that here: [https://zapier.com/apps  

](https://zapier.com/apps)

## Overview

Within the Workflow builder, you may want to use form information or a booked appointment to fire off a webhook action. You can start with that action as a trigger within the Workflow builder, and that will fire off a webhook action.

-   Webhooks can send data using both POST and GET requests, depending on your integration needs. A POST request typically sends data, while a GET request retrieves data from an external system.

![](<https://assets2.modalsupport.net/1767692648174-unnamed \(59\).png>)

-   When setting up a webhook, you can configure the payload using JSON format. This allows you to define the specific data you want to send, such as contact details, appointment information, or other relevant data fields. Example of a JSON payload:

![](<https://assets2.modalsupport.net/1767692665301-unnamed \(60\).png>)

-   You would provide the webhook from Zapier or the webhook source in the URL field and provide any custom data key and values that you want to include

![](<https://assets2.modalsupport.net/1767692683904-unnamed \(61\).png>)

### How Do Webhooks Work?

Webhooks are used to connect different applications by sending data from one app to another when a specific event occurs. They rely on a triggering event that signals one application to send a request to another. For example, if a purchase occurs in a payment platform like Stripe, a webhook can send the purchase details to another application. Stripe packages the information into a "payload" (the data being sent) and sends it to the receiving application, where the information can then be used to perform various tasks.

To use webhooks, the receiving application must provide a Webhook URL. A Webhook URL is a unique address created by the app receiving the request, similar to a phone number you use to contact a business. This URL is the address where the data will be sent, allowing the receiving app to process the incoming information.

### Use Case Example

Imagine you own a Shopify eCommerce store that uses Stripe for payment processing, and you want to send targeted emails to customers who purchase a specific course. The challenge is that the purchase data isn’t directly available in your email marketing or platform. To solve this, you can create a webhook event that triggers every time the specific course is purchased in Stripe. The webhook sends this purchase data to your account, which can then use the information to perform specific tasks, like sending emails to the contacts who purchased the product.

This approach allows seamless integration between different applications, ensuring that relevant data flows automatically from one platform to another, enabling you to perform targeted actions based on real-time events.

## Navigation

Here’s a sample workflow/webhook example:

-   **Create a Workflow Trigger:** Set up a trigger for an action such as Form Submitted, Survey Submitted, or Customer Booked Appointment.
-   **Click the + to Add an Action to Your Workflow:** Choose Webhook.
-   **In the Popup, Name Your Action and Add the URL:** Provide the URL from Zapier or any other webhook source you are using.

NOTE: If the external system requires authentication or specific headers, such as an API key or content type, you can add these headers in the webhook configuration. Example:

![](<https://assets2.modalsupport.net/1767692723048-unnamed \(62\).png>)

-   **Provide Custom Data if Applicable:** Add key-value pairs for any custom data you need to include. For example:

Key: Addr

Value: Address from the value picker

You can add up to five custom data fields using key-value pairs, allowing you to tailor the information sent to external systems to match specific requirements.

-   **Save Your Changes to the Webhook.**Before finalizing, it's recommended to test the webhook using tools like Webhook.site or Postman to ensure that the data is being sent correctly and that the integration with the external system functions as expected.

-   **Test:** After setting up, test the webhook to verify that it sends the correct data to the external system.

-   **Publish and Save the Workflow:** Ensure that the workflow is activated so that the webhook triggers as intended based on the defined conditions.

![](<https://assets2.modalsupport.net/1767692756109-unnamed \(63\).png>)

**_NOTE:_** The specific type of information that comes through will depend on what you set up in the webhook; meaning a form will pull through form data, an appointment will pull through appointment and contact data, raw webhooks will pull in raw data, etc.

**Example**

**Scenario:** You want to sync contact data with an external CRM whenever a new contact is created.

1.  **Create Workflow Trigger:** Set up a workflow trigger to initiate when a new contact is created.
2.  **Add Webhook Action:** Select the "Webhook" action and name it "Sync Contact with CRM."
3.  **Enter Webhook URL:** Provide the CRM’s API endpoint for contact updates, e.g., https://api.externaltestcrm.com/contacts/create
4.  **Configure Payload:** Define the contact details to be sent in JSON format, such as:

![](<https://assets2.modalsupport.net/1767692783048-unnamed \(64\).png>)

1.  **Add Headers:** Include any necessary authentication details, such as:

![](<https://assets2.modalsupport.net/1767692800561-unnamed \(65\).png>)

1.  **Save and Activate the Workflow:** Once the workflow is active, every time a new contact is created, their details will automatically be sent to the external CRM.

## FAQs




**Question:** Can I customize the data sent through a webhook?
**Answer:** Yes, you can customize the data sent through a webhook by providing custom data key-value pairs in the webhook setup. This allows you to tailor the information being sent to meet specific requirements.




**Question:** What should I do after setting up the webhook in the workflow?
**Answer:** After setting up the webhook, save your changes and test the webhook to ensure it is functioning correctly. Once confirmed, publish and save the workflow to activate it.




**Question:** What information do I need to provide when setting up a webhook?
**Answer:** When setting up a webhook, you need to provide the webhook URL from Zapier or another source, configure the payload using JSON, and add any necessary headers for authentication. You may also need to specify the type of action that triggers the webhook within the workflow.




**Question:** What kind of actions can trigger a webhook in ?
**Answer:** Webhooks in can be triggered by actions such as form submissions, survey submissions, appointment bookings, and other similar events within the workflow builder.




**Question:** Can I use webhooks with platforms other than Zapier?
**Answer:** Yes, webhooks can be used with other platforms that support webhook integration. You can use any compatible webhook source to send or receive data between and other systems.




**Question:** What happens if the webhook URL is incorrect or fails?
**Answer:** If the webhook URL is incorrect or fails, the data will not be sent or received as intended. It’s important to verify the URL and test the webhook using tools like Webhook. site or Postman to ensure it works correctly before fully deploying it in your workflow.




**Question:** Do webhooks send data immediately?
**Answer:** Yes. Webhooks send data in real time as soon as the triggering event occurs. However, delays can occur if the receiving system is slow or unreachable.




**Question:** What is the difference between a POST and a GET request in the Webhook action?

**Answer:** A **POST** request is typically used when you want to **send** data from our system to an external platform. A **GET** request is used when you need to **retrieve** or pull data from an external system to use within your workflow.




**Question:** How many custom data fields can I include in a single webhook action?

**Answer:** You can include up to five custom data fields using key-value pairs. This allows you to tailor and map specific information, such as an address or custom contact details, to match the requirements of the external system you are sending data to.  




**Question:** Can I add authentication or specific API keys to my webhook request?

**Answer:** Yes. If the external system you are connecting to requires authentication or specific headers (such as an API key or content-type), you can add these directly within the webhook configuration.




**Question:** How do I secure my webhook so only my external system can read it?

**Answer:** You can use **Headers** to add a layer of security. By including an "Authorization" or "X-API-Key" header with a unique secret key, the receiving system can verify that the data is truly coming from your account before processing it.