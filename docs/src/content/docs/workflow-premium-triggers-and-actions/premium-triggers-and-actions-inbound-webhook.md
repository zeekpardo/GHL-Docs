---
title: "Premium Triggers and Actions - Inbound Webhook"
description: "Premium Triggers and Actions - Inbound Webhook"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/Masvf8ivM3Dxn6tH1lkB"
sourceId: "Masvf8ivM3Dxn6tH1lkB"
category: "Workflow Premium Triggers and Actions"
---

**Premium Triggers and Actions - Inbound Webhook**

An Inbound Webhook is a useful tool that allows external systems to automatically send data to your account. When an event happens in the external system, you can initiate a workflow in by sending an HTTP POST request to a designated URL linked to the trigger. This feature enables real-time data exchange, enhancing 's functionality by enabling smooth integration with other systems.

### **How to use the Inbound Webhook Workflow Trigger?**

Briefly, bring your data to the system in 3 simple steps using the Inbound Webhook Trigger.

![](https://assets2.modalsupport.net/1775063246406-image3.png)

### **Step 1:**

Retrieve the webhook URL and use it in your application or system. Next, send the data to the webhook URL using the appropriate HTTP request method (POST, GET, or PUT) and click the "Test Trigger" button (You can name the ‘fetch sample requests’ button as such after putting in the mapping reference).

![](https://assets2.modalsupport.net/1775063275268-image8.png)

### **Step 2:**

###   

In this step, you can save the data reference that you will use in the custom variables, which can be treated similarly to other contact custom fields or Location Custom Variables.

The next step and examples below provide more information on how to utilize this reference.

**Step 2.1:**

 Hit a **POST** request to the copied webhook Url and copy the id in the response.

![](https://assets2.modalsupport.net/1764787239387-image6.png)


**Step 2.2:**

Copy the unique ID and use it to search for the relevant mapping reference within your webhook trigger.

Please note that the most recent request will always be located at the top of the list.

![](https://assets2.modalsupport.net/1763761481178-4.gif)

**Step 2.3**:  
Select the correct reference and verify the body.

![](https://assets2.modalsupport.net/1763761506797-5.png)

### **Step 3**

You will be directed to the "Create Update Contact" action after saving the trigger. From there, you can select the necessary fields and map the incoming data you received from the trigger. Please note that to create a new contact or map data to an existing one, you must provide either an email or phone field.

![](https://assets2.modalsupport.net/1764787278783-image7.jpg)

By completing the above steps, you can now use the data you received within the workflow as custom values in email, sms, if/else, etc.

![](https://assets2.modalsupport.net/1764787310224-image2.jpg)

* * *

### **Example:**

The custom values of Inbound Webhook can be utilized in all of the actions within your workflow. Below are some examples of how to do this.

**In your communication Actions:**

![](https://assets2.modalsupport.net/1763761710739-8.gif)

**In If/Else Actions:**

![](https://assets2.modalsupport.net/1763761728158-9.gif)

As shown above, you can use the values from the Inbound Webhook inside all other actions as you see fit.

**Please Note:** You can include a contact's full name as a parameter in the create/update contact action that follows the trigger.

### **Can workflow execute without contact?**

-   Workflow can run contactless without any Contact data dependency so you can send any payload data via Inbound Webhook Triggers and use it in workflow.
-   You can proceed without contact and use actions that are not dependent on contact information. Custom Webhook, Google Sheet, Slack, ChatGPT and all Internal Tools can be executed without contact.
-   If necessary, you can use the Create/Update or Find Contact actions to retrieve the contact data to the workflow.  

    **Example:**
-   Send order data via inbound webhook and add the order information to Google sheet, use if/else to categorize based on order value and send a slack notification.
-   Retrieve the contact with Contact ID using the Find contact action.

* * *

#### **Important points to be considered:**

-   Always send the request using a supported method (POST, GET, or PUT) when interacting with the webhook.
-   Ensure the data is sent as a JSON object, the only supported data format.
-   To compile correctly, keys must be a single string without space separations; consider using CamelCase or snake\_case instead of separating key names with spaces.
-   Providing an Email or Phone number in the payload is mandatory, as the workflow requires contact information. An Email or Phone is required to Find or Create the Contact.
-   Arrays are not supported in custom values. You can send them in the request but cannot use them inside actions.
-   If your data structure changes, re-select the Mapping Reference inside the Inbound Webhook Trigger setup to address those fields in other actions correctly.
-   If your Inbound Webhook Trigger URL gets compromised or leaked and you want to prevent unwanted requests, Delete the existing Inbound Webhook Trigger and Add a New Inbound Webhook Trigger. A new URL with a different ending ID will be generated; update your integrations to match the new URL. Once saved, incoming requests from the old URL won't enter your workflow; only requests from the new URL will.

### Frequently Asked Questions (FAQs)




**Question:** What is an Inbound Webhook, and how does it work?

**Answer:** An Inbound Webhook allows an external system to send data directly to by triggering a workflow when an event occurs. This is done through an HTTP POST request to a specific URL, enabling real-time data integration between systems.




**Question:** How do I retrieve and use the Post URL for an Inbound Webhook?

**Answer:** You can retrieve the Post URL from your account and use it in your external application or system. Once you send data to this URL, you can test the trigger and save the data for future use within your workflows.




**Question:** What type of data can I map using the Inbound Webhook Trigger?

**Answer:** You can map any incoming data from the external system to fields within , such as contact details. This data can then be used in various actions within your workflow, including email, SMS, and conditional logic (If/Else actions).




**Question:** Can I use the data from the Inbound Webhook in other actions within my workflow?

**Answer:** Yes, the data received from the Inbound Webhook can be used as custom values across all actions within your workflow, allowing for dynamic and personalized communication.




**Question:** What do I need to include to create or update a contact using an Inbound Webhook?

**Answer:** To create or update a contact using data from an Inbound Webhook, you must include either an email address or phone number in the contact fields. This ensures that the data is properly mapped to the correct contact in .




**Question:** Does every webhook have to create a new contact?
**Answer:** No. While many people use webhooks to sync leads, you can run a **"Contactless"** workflow. This is great for internal tasks, like taking data from one system and sending it straight to a Google Sheet or Slack without ever touching your contact database.




**Question:** Can I send data from Zapier or Make.com to this Inbound Webhook?

**Answer:** Absolutely. In Zapier or Make, choose the "Webhook" or "HTTP" module and select the **POST** method. Paste your Inbound Webhook URL into the destination field. This is a common way to bridge systems that don't have a direct integration.