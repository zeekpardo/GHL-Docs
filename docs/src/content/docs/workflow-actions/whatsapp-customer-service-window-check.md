---
title: "WhatsApp: Customer Service Window Check"
description: "WhatsApp: Customer Service Window Check"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/Oyg3jfwLrkr5om7b9nEn"
sourceId: "Oyg3jfwLrkr5om7b9nEn"
category: "Workflow Actions"
---

**WhatsApp: Customer Service Window Check**

In this article, we will explore the WhatsApp: Customer Service Window Check Workflow Action, a powerful tool for managing automated workflows and sending free-form messages. This feature is designed to help businesses and organizations determine whether an active customer service window is open, allowing for efficient and cost-effective communication with customers.  

# **Prerequisite for using WhatsApp under Workflows**

1-WhatsApp needs to be subscribed and enabled on the location account. Please refer to the article “**Setting Up WhatsApp”**.

2-Additionally, if you want to send business-initiated conversations then please ensure that you have an approved template in place. Refer to the article “**How to Create a WhatsApp Template”**

### **What are Conversations?**

Conversations are 24-hour messaging threads between you and your customers, which determine the cost of your communications. They can be started by sending either free-form messages or template messages.

#### **Types of Conversations**

**1-Marketing, Utility, and Authentication Conversations**

-   When you send an approved marketing, utility, or authentication template message to a customer, the system checks if there is already an open conversation of the same category. If there is, no new conversation is created. If not, a new 24-hour conversation is started.

**Example:**

-   Hour 0: You send a marketing template message (e.g., a targeted promotion). Since no open marketing conversation exists, a new marketing conversation is started, lasting 24 hours.
-   Hour 4: The customer places an order. You send them an order confirmation (utility template message). Since no open utility conversation exists, a new utility conversation starts, lasting 24 hours.
-   Hour 10: You send a shipment confirmation (utility template message). As there is already an open utility conversation, no new utility conversation is created.

**2-Service Conversations**

-   A service conversation is initiated when you send a message other than a template message and no open conversation exists. A customer service window must be open for this to occur.

**Example:**

-   Hour 0: You send a marketing template message. A marketing conversation is started, lasting 24 hours.
-   Hour 4: The customer replies. This opens a customer service window, allowing you to send any type of message for the next 24 hours.
-   Hour 5: You send an interactive list message. Since there is an open marketing conversation, a new service conversation is not started.
-   Hour 24: The marketing conversation expires.
-   Hour 25: The customer service window is still open. You send another message. Since there is no open conversation, a new service conversation starts, lasting 24 hours.
-   Hour 26: The service window is still open. You send a third message. An open service conversation already exists, so no new service conversation is started.

#### **What is a Customer Service Window?**

A customer service window is a 24-hour period that begins when a customer messages you. This window allows you to send free-form messages without additional charges. If a customer messages you, the window starts or refreshes, allowing uninterrupted communication for 24 hours.

#### **How to Use WhatsApp: Customer Service Window Check**

**Step 1: Create Your Workflow**

1-Navigate to Automation> Workflows.

2-Click "Create Workflow" and select "Start from Scratch."

![](https://assets2.modalsupport.net/1764695015894-image.png)

**Step 2: Add the Customer Service Window Check Action**

1-Click the plus button to add an action.

2-Select "WhatsApp: Customer Service Window Check."

![](https://assets2.modalsupport.net/1764695034308-image.png)

**Step 3: Configure Branches**

1-The action will create two branches: Open and Closed.

![](https://assets2.modalsupport.net/1764695054394-image.png)

**Please Note:** Only numbers with an "ACTIVE" status will appear in the selection dropdown, reducing errors and ensuring smooth automation. To use this feature, simply select the preferred WhatsApp number within your workflow settings to validate service windows effectively.

![](https://assets2.modalsupport.net/1764695070515-image.png)

**Step 4: Handle Open Branch**

1-Under the Open branch, select the WhatsApp action and choose "None - Free form message."

![](https://assets2.modalsupport.net/1764695091448-image.png)

**Step 5: Handle Closed Branch**

1-Under the Closed branch, select the WhatsApp action and choose a marketing or utility template.

2-If the customer service window is closed (i.e., no customer reply in the last 24 hours), you can only send WhatsApp marketing or utility template messages.

![](https://assets2.modalsupport.net/1764695104416-image.png)

## FAQs




**Question:** What's the difference between "None - Free form message" and selecting a template when sending WhatsApp messages in workflows?
**Answer:** "**None - Free form message**" lets you write a free-form message within the 24-hour customer service window. Selecting a template is for sending pre-approved messages, which is useful for starting conversations outside of the 24-hour window or for specific marketing or support purposes.

![](https://assets2.modalsupport.net/1764695130473-image.png)




**Question:** Can I create workflows that combine WhatsApp with other channels like SMS or Email?  
**Answer:** Yes! workflows are flexible, allowing you to combine WhatsApp with other communication channels to create comprehensive automation sequences.  




**Question:** Can I use WhatsApp workflow automation to send messages outside the 24-hour customer service window?  
**Answer:** Yes, you can use approved WhatsApp templates after the 24 hour customer service window is closed, for outreach or follow-up messages. Keep in mind that these template-based messages will incur additional charges.  
**  
Question: What's a 'Free Entry Point Conversation' and how is it different from a regular conversation?  
**Answer:** Triggered when a customer clicks a "Click to WhatsApp" ad or a Facebook Call-to-Action button.  
Lasts for 72 hours, compared to the standard 24-hour window. During this extended window, you can send both free-form and template messages.  




**Question:** Why can't I see my WhatsApp number in the selection dropdown when configuring the Workflow action?  
**Answer:** Only WhatsApp numbers with an "ACTIVE" status will appear in the selection dropdown. This is a built-in safeguard to reduce errors and ensure your automation runs smoothly. If your number is not visible, please verify its status in your WhatsApp settings.  
**  
Question: If a customer reacts to my message with an emoji, does that open the 24-hour Service Window?  
**Answer:** No. Meta requires an actual inbound message (text, image, or audio) from the customer to open or refresh the Customer Service Window. Reactions do not count as "inbound messages" for this specific purpose.




**Question:** How does the system define a "Conversation"?

**Answer:** A conversation is a **24-hour messaging thread** between you and your customer. The type of conversation started (Marketing, Utility, Authentication, or Service) determines the communication costs.