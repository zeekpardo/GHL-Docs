---
title: "Workflow Action: Update Custom Value"
description: "In this article, we will briefly show how to use the Update Custom Value action in Workflows to update a custom value"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/XJD4GFANGjdgbM6krRZ2"
sourceId: "XJD4GFANGjdgbM6krRZ2"
category: "Workflow Actions"
---

In this article, we will briefly show how to use the Update Custom Value action in Workflows to update a custom value

### **Key Use Cases**

**Dynamic Personalization in Campaigns:**Automatically update customer loyalty tiers after they reach specific purchase milestones.

**Data Synchronization:**Dynamically update fields with data from external APIs.

**Real-Time Automation:**Adjust discount codes or loyalty points in real-time based on customer actions.

**Trigger-Based Updates:**Automatically update status fields based on user interactions.

**Example Scenario:**"When a user makes a purchase over $500, automatically upgrade their loyalty tier from 'Bronze' to 'Gold' using the Update Custom Value action."

## **Navigation**

### **Step 1:** Start a new workflow or edit an existing one

-   Navigate to Automation on the left > Workflows on the top and create a new workflow or edit an existing one.

![](https://assets2.modalsupport.net/1767991424988-image6.png)

### **Step 2:** Set up applicable Workflow Trigger(s). We have multiple articles available to explain the setup of each of the Workflow Triggers. Feel free to review our articles for more information on setting these up.

**_Pro Tip:_** You can use any Workflow Triggers to trigger the Update Custom Value action or you leave this workflow without any triggers.

### **Step 3:** Setting up the Update Custom Value Action

-   Click on the “+” symbol below the trigger to add an action.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfgft-xxJfW9O2oisRI0lpdnpePsmwHVEcW-khjUpL9FObmCITNlU9bQsh_k8OY2tXVA383hoetwd-AIAU1X6kv9sGdUnnYjUTsAFpFDqyhJahEsfblQCfF898XvKe9Ef4qp1vdDry5dQsxU3Yx4oMvVs6b?key=MV0R4EU_ECBPywHIrYYDsA)

-   Under Actions, select Update Custom Value in the section of the Actions Menu or use the search feature

![](https://assets2.modalsupport.net/1767991499967-image4.png)

-   Select the Custom Value you’d like to update from the drop-down menu, then the New Value you’d like to replace it with.

![](https://assets2.modalsupport.net/1775250598203-image5.jpg)

-   Press **Save** in the bottom right corner of the Action setup menu

### **Step 4:** Press **Save** in the top right corner of your browser to save the workflow

-   If your Workflow is ready to be enabled, make sure the toggle switch under **Save** is set to **Publish**

-   Be sure to test your Workflow to ensure it is set up correctly using the **Test Workflow** button next to the **Publish** toggle switch. 
    -   For an in-depth overview of Workflow Testing see our article, “Using the Testing Features in Workflows”

![](https://assets2.modalsupport.net/1762561171184-image2.png)

Now your Workflow is set up and ready to go with the Action Update Custom Value

### **Field Descriptions**

**Field**

**Description**

**Example**

**Action Name**

A descriptive name for the action shown in the workflow.

Update Loyalty Tier

**Custom Value**

Select the specific custom value you want to update.

Loyalty Level

**Current Value**

Displays the existing value, if available.

Bronze

**New Value**

Set either a static value or a dynamic variable.

Gold

### **Advanced Use Cases**

**Using Conditional Logic (If/Else Action):**Adjust a field only if certain conditions are met.  
**Example:** Update loyalty tiers only if the current value is "Bronze."

**Integrating with APIs:**Automatically update custom values using incoming data from external APIs.  
**Example:** Dynamically update a "Last API Sync Date" custom field with data from an external source.

**Math Operations Integration:**Use mathematical operations to dynamically calculate and update numeric custom values.  
**Example:** Add 50 points to a user's reward balance automatically based on specific actions.

**Dynamic Discount Codes:**Update discount codes in real-time workflows.  
**Example:** After a user completes three purchases in a month, automatically change their discount tier to "10% Off Next Purchase."

### **Suggested Triggers**

**Contact Tag Added:**When a tag is added to a contact (e.g., "VIP", "High Priority"), you can update a related custom value to indicate the importance of that contact.  
**Example:** If the "VIP" tag is added, update the custom value for Discount Rate to offer a higher percentage.

**Contact Updated:**Trigger an action when specific fields in a contact’s profile are updated. For example, if a customer’s preferences or contact information changes, you can update a corresponding custom value.  
**Example:** If the Email Subscription field is updated to "Subscribed," update the custom value Email Frequency to "Weekly."

**Form Submitted:**After a form submission, use the data provided to update custom values.  
**Example:** A form submission can trigger a workflow to update the custom value Survey Score or Preferences based on the submitted information.

**Appointment Booked:**Once an appointment is successfully booked, you can update custom values according to the appointment type or other related criteria.  
**Example:** When a contact books a high-ticket appointment, update the custom value Appointment Importance to "High."

**Opportunity Status Changed:**When the status of an opportunity in the pipeline changes (e.g., from "Qualified" to "Won"), update a custom value to reflect the new status.  
**Example:** If the opportunity status changes to "Won," update the custom value Client Tier to "Platinum."

**Survey Submitted:**When a contact submits a survey, use their responses to dynamically update custom values that inform future interactions.  
**Example:** If a survey response indicates high satisfaction, update the custom value Customer Satisfaction to reflect that score.

**Order Fulfilled:**After an order is fulfilled, update a contact's custom value to track their order history or status.  
**Example:** When an order is fulfilled, update the custom value Last Order Date to the current date.

**Link Clicked:**When a contact clicks a link in an email or SMS, dynamically update a custom value based on their behavior.  
**Example:** If a contact clicks a link for a new product, update the custom value Product Interest to reflect their interest in that product.

## FAQs




**Question:** Can I use any Workflow Triggers with the Update Custom Value action?
**Answer:** Yes, you can use any Workflow Triggers to activate the Update Custom Value action. This flexibility allows you to update custom values based on various triggers that suit your specific needs within the workflow.




**Question:** Is it necessary to add triggers to use the Update Custom Value action?
**Answer:** No, it is not necessary to add triggers. You can set up the workflow without any triggers, allowing you to manually run the workflow or update values as needed.




**Question:** How do I choose which Custom Value to update in the action setup?
**Answer:** In the action setup menu, select the Custom Value you’d like to update from the drop-down menu, then specify the New Value you want to replace it with. This setup ensures that the correct value is updated in your workflow.




**Question:** Can I rename the Update Custom Value action in the workflow builder?
**Answer:** Yes, you can rename the action using the textbox in the Action setup menu. This change will only affect the display name within the workflow builder and does not impact the functionality of the action.




**Question:** How do I save the Update Custom Value action after setting it up?
**Answer:** After configuring the action, press Save in the bottom right corner of the Action setup menu. Then, save the entire workflow by pressing Save in the top right corner of your browser.




**Question:** What should I do after setting up the Update Custom Value action?
**Answer:** After setting up the action, save the workflow and ensure it is enabled by setting the toggle switch under Save to Publish. Test the workflow using the Test Workflow button to confirm that it functions as expected.


**Question:Do I need any special permissions to edit workflows or update custom values?
**Answer:** You must have the appropriate access level to create or edit workflows and modify custom fields. Access restrictions depend on your system’s role settings.




**Question:** What is the difference between a Custom Field and a Custom Value in this context?

**Answer:** Custom Fields are usually specific to an individual contact (like their phone number), while Custom Values are often global variables used across the system (like a standard discount code). This action allows you to update those global-style values automatically through a workflow.




**Question:** Is there a limit to how many times a Custom Value can be updated in an hour?
**Answer:** While there is no hard limit, frequent global updates can cause small delays in data syncing across landing pages. It is best practice to use this for meaningful data shifts rather than high-frequency "real-time" counters.