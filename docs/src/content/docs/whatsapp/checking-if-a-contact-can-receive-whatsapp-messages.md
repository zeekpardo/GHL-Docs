---
title: "Checking If A Contact Can Receive WhatsApp Messages"
description: "Checking If A Contact Can Receive WhatsApp Messages"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/EeL526h9w8N1lBpQbbaM"
sourceId: "EeL526h9w8N1lBpQbbaM"
category: "WhatsApp"
---

**Checking If A Contact Can Receive WhatsApp Messages**

The Valid WhatsApp field and filtering options are available within your Contacts section. Utilize these features to streamline your communication and manage your WhatsApp-enabled contacts more effectively.

### **Features for WhatsApp Contact Management**

### **Valid WhatsApp Field Addition**

The Valid WhatsApp field at the contact level indicates whether a contact's number is active on WhatsApp. This allows for more efficient communication and management of contacts.

### **WhatsApp Contact Name Pre-Fill** 

The WhatsApp Contact Name Pre-Fill feature automatically populates unknown contacts' first and last names from their WhatsApp profile into , provided the contact is not already saved, enhancing contact management efficiency.

### **Dedicated Column and Filter for WhatsApp Status**

Easily identify and manage WhatsApp-enabled contacts using the dedicated column and filter in your contact list. This makes it simple to focus your communication efforts on contacts who are reachable via WhatsApp.

### **Interpreting WhatsApp Status Values**

-   Valid: The contact's number is active on WhatsApp.
-   Invalid: The contact's number is not available on WhatsApp.
-   Not Validated: Uncertainty about whether the contact's number is on WhatsApp or not.

### **How WhatsApp Status is Updated**

Understanding how these fields are updated is crucial for accurate insights:

-   Message Delivered Successfully: When a message is successfully delivered, the system automatically marks the contact as "Valid."
-   Message Delivery Failure: If a message fails to deliver or encounters issues with Meta, the contact is marked as "Invalid."
-   Receiving WhatsApp Messages: When a contact initiates a WhatsApp message, the status is updated to "Valid," ensuring real-time validation.
-   No WhatsApp Interaction: If there is no conversation over WhatsApp with a particular contact, the status remains in the "Not Validated" state until further interaction.

### **Advantages of these WhatsApp Features**

-   **Optimized Communication**: Focus your efforts on reachable contacts.
-   Efficient Contact Management: Easily identify and segment WhatsApp-enabled contacts.
-   **Enhanced Workflow Efficiency**: Save time by targeting relevant contacts for WhatsApp interactions.

### **Automated Do Not Disturb (DND)**

To help you manage customer preferences and maintain compliance with WhatsApp messaging regulations, we have implemented Automated Do Not Disturb (DND) for WhatsApp.

-   **Automated Opt-Outs**: If a customer replies with "Stop," "Unsubscribe," or "Stop," they will automatically be placed on a DND list for WhatsApp communications.
-   **Easy Re-Engagement**: The DND status will be removed only when the customer initiates a reply back to the user, ensuring that they have control over their communication preferences.

![](https://assets2.modalsupport.net/1763649670832-image.png)

### **How to Use the New WhatsApp Contact Features**

### **Accessing and Utilizing the Valid WhatsApp Field and Filter**

1.  Navigate to Contacts: Go to the Contacts section located on the left in your account.
2.  Find the Valid WhatsApp Column: Look for the Valid WhatsApp column in your contact list and select Valid Whatsapp

![](https://assets2.modalsupport.net/1763649703173-image.png)

![](https://assets2.modalsupport.net/1763649714650-image.png)

**How to Create a Smart List Excluding Invalid WhatsApp Contacts**

**Step 1:** Navigate to the Contacts page and click on "More Filters."

![](https://assets2.modalsupport.net/1763649748353-image.png)

**Step 2:** Search for "Valid WhatsApp."

![](https://assets2.modalsupport.net/1763649808073-image.png)

**Step 3:** Select "Is Valid" and click "Apply."

![](https://assets2.modalsupport.net/1763649836293-image.png)

**Step 4:** Set the condition to "OR" and select "Is Not Validated."

**Step 5:** Click "Save as Smart List" and give your smart list a name.

![](https://assets2.modalsupport.net/1763649877689-image.png)

This smart list will update dynamically as contacts become active or inactive on WhatsApp. You can use the created smart list to send WhatsApp campaigns.

**Why Include "Is Not Validated" Contacts?**The "Is Not Validated" condition ensures that WhatsApp messages are only sent to contacts where the system has not yet determined whether the contact is on WhatsApp due to a lack of conversation history.

### **Managing Your WhatsApp-Enabled Contacts**

-   Segment Your Contacts: Use the filter to create segments of WhatsApp-enabled contacts for targeted campaigns.
-   Prioritize Communication: Focus your communication efforts on contacts marked as "Valid" to enhance engagement.
-   Monitor and Refresh: Regularly monitor the Valid WhatsApp field to ensure your contact list remains accurate and up-to-date.

### FAQ’s




**Question:** How frequently are these fields updated?
**Answer:** The fields are updated in real-time based on the defined scenarios and contact activity.




**Question:** Can I manually update the WhatsApp status of a contact?
**Answer:** No, the system automatically updates the WhatsApp status based on user interactions and message delivery results.




**Question:** What is the "Valid\_WhatsApp" field?
**Answer:** The "Valid\_WhatsApp" field indicates whether a contact's phone number is registered and active on WhatsApp.




**Question:** What do the different "Valid\_WhatsApp" status values mean?
**Answer:

-   **Valid**: The contact has an active WhatsApp account.
-   **Invalid**: The contact's number is not currently registered on WhatsApp.
-   **Not Validated**: The system has not yet confirmed whether the number is on WhatsApp due to a lack of message history.




**Question:** How is the "Valid\_WhatsApp" status updated?
**Answer:** The status updates automatically based on the following:

-   **Successful message delivery**: The status changes to "Valid."
-   **Message delivery failure**: The status changes to "Invalid."
-   **Contact sends a message**: The status immediately updates to "Valid."




**Question:** Can I filter contacts by their WhatsApp status?
**Answer:** Yes! You can filter contacts using the "Valid WhatsApp" filter to display only those that are reachable on WhatsApp.




**Question:** Can I trigger a Workflow when a contact becomes "Valid"?

**Answer:** **Yes.** You can use the **Contact Changed** trigger and filter for "Valid WhatsApp is Valid." This is great for moving a lead from an "Email Only" sequence into a "WhatsApp High-Engagement" sequence the moment they are verified.