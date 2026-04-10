---
title: "The Estimates Workflow Trigger and Action"
description: "Enhancing workflows to automate actions based on estimated events can greatly improve efficiency in managing business processes. This article will guide you…"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/ZPzedcsnw0G4Hmf1TsGc"
sourceId: "ZPzedcsnw0G4Hmf1TsGc"
category: "Workflow"
---

Enhancing workflows to automate actions based on estimated events can greatly improve efficiency in managing business processes. This article will guide you through the key features and benefits of using estimate triggers and actions in workflows, along with step-by-step instructions on how to use these tools effectively.

### **Key Features and Benefits**

-   **Estimate Trigger**: This trigger allows users to automate workflows based on estimate events, such as when a new estimate is created, updated, or changes status.
-   **Flexible Filtering Options**: Users can filter estimates by various criteria, such as template, value, or status, to ensure the automation applies only to the relevant cases.
-   **Send Estimate Action**: With this action, estimates can be sent automatically from workflows, reducing the need for manual intervention and speeding up communication with clients.
-   **Enhanced Automation**: The combination of estimate triggers and sending actions helps automate processes related to invoicing, contracts, and client follow-ups, resulting in better organization and faster turnaround times.

### **How to Use Estimate Triggers and Actions**

Follow these steps to set up an automated workflow for estimates:

**1\. Access the Workflows Section**

-   Navigate to **Automation** in the left menubar, then to the **Workflows** section of . This is where you can create, edit, or manage automated workflows. Click on **\+ Create Workflow > Start from Scratch**

![](<https://assets2.modalsupport.net/1763746812490-Captura de pantalla 2025-11-21 123955.png>)

**2\. Add an Estimate Trigger**

-   In the workflow creation screen, select the option to add a new trigger.
-   Choose the "Estimates" trigger from the list of available triggers. This trigger allows you to automate actions based on specific estimate events.

![](https://assets2.modalsupport.net/1775224432460-image8.jpg)

**3\. Set Up Filters**

-   Configure filters to narrow down which estimates should trigger the workflow. You can filter estimates by:
    -   **Template**: Select specific templates to focus on.
    -   **Value**: Define a range of values to include estimates within a certain monetary range.
    -   **Status**: Specify the status of estimates (e.g., "Pending," "Approved," "Declined") to target certain stages of the estimate process.

-   Choose from:

-   Accepted: The estimate has been reviewed and approved by the client.
-   Declined: The estimate was reviewed but not accepted by the client.
-   Invoiced: The estimate has been converted into an invoice for payment.
-   Sent: The estimate has been shared with the client but is awaiting their response.
-   Viewed: The client has opened and reviewed the estimate, but no action has been taken yet.

![](<https://assets2.modalsupport.net/1763746867185-Captura de pantalla 2025-11-21 124102.png>)

![](<https://assets2.modalsupport.net/1763746891130-Captura de pantalla 2025-11-21 124125.png>)

**4\. Adding the Send Estimate Action**

-   In the workflow builder, click on the **\+ icon** to add actions and add the "Send Estimate" action.

![](<https://assets2.modalsupport.net/1763747039355-Captura de pantalla 2025-11-21 124354.png>)

![](<https://assets2.modalsupport.net/1763747054582-Captura de pantalla 2025-11-21 124410.png>)

-   Configure the action by selecting the user responsible for sending the estimate and choosing the appropriate estimate template.
-   **Customizable Invoice Delivery Channels:** Users can also choose to send invoices via email, text, or both, offering greater flexibility in communication with clients.

![](<https://assets2.modalsupport.net/1763747073030-Captura de pantalla 2025-11-21 124428.png>)

-   Select an option from the "**Sending Mode**" dropdown, either "**Send Directly**" or "**Create in Draft**." With the “Create in Draft” option, each time this workflow is triggered, a draft estimate will be created and placed in the draft section of Estimates.
-   This automation ensures that estimates are sent out automatically, following the conditions you have set.

![](https://assets2.modalsupport.net/1765219390289-image7.jpg)

**Save and Activate the Workflow**

-   Review the configuration to ensure all conditions and actions are set correctly.
-   Save and activate the workflow to start automating your estimate-related tasks.

![](<https://assets2.modalsupport.net/1763747125289-Captura de pantalla 2025-11-21 124520.png>)

**Creating If-Else actions based on estimate statuses:**

This allows businesses to automate tailored follow-up actions and ensure efficient handling of each step in the estimate approval process. Here’s how each status can trigger a different action and why this approach is beneficial:

1.  **Accepted**:
    -   **_Action_:** If an estimate is marked as "Accepted," trigger an automatic thank-you email to the client and create an invoice in the system.
    -   **_Benefit_:** This ensures a smooth transition from estimate approval to payment, strengthening customer satisfaction and reducing manual effort.
2.  **Declined**:
    -   **_Action_:** If an estimate is "Declined," send a follow-up email offering further assistance or alternative solutions, or notify a sales team member to reach out.
    -   **_Benefit_:** This provides an opportunity to recover lost sales by addressing potential concerns or offering customized solutions.
3.  **Invoiced**:
    -   **_Action_:** When an estimate is updated to "Invoiced," stop any further follow-ups and transition the client to the billing and collections process.
    -   **_Benefit_:** This ensures that once payment is requested, all client communications and tracking relate solely to payment completion, improving workflow efficiency.
4.  **Sent**:
    -   **_Action_:** If an estimate has been "Sent" but not yet viewed, schedule a reminder email to check in with the client after a set period.
    -   **_Benefit_:** Helps ensure that clients don’t overlook estimates, increasing the chances of moving forward with the proposal.
5.  **Viewed**:

-   **_Action_:** Once an estimate is "Viewed," set a task for a sales representative to follow up with the client to address any questions.
-   **_Benefit_:** Following up after the estimate is reviewed allows the sales team to engage with clients while the proposal is fresh in their minds, increasing the likelihood of a positive response.

![](https://assets2.modalsupport.net/1765219368823-image1.png)

### **Use Cases**

-   **Automating Invoice Follow-Ups**: Use the workflow to automatically send a follow-up email if an estimate has been approved, but the payment hasn't been made within a set timeframe.
-   **Client Onboarding**: Automatically send estimates to new clients as part of the onboarding process, with different workflows for different service levels.
-   **Renewal and Upsell Opportunities**: Trigger workflows to send updated estimates to existing clients when contracts are about to expire, including options for additional services or upgrades.
-   **Complex Project Proposals**: Use multiple filters to send detailed estimates for high-value projects, automatically including all relevant details.
-   **Seasonal Promotions**: Send special offers or revised estimates during holiday seasons to encourage clients to take advantage of limited-time deals.

### **Pro Tips for Using Estimate Workflows**

-   **Combine Multiple Triggers and Actions**: For more complex scenarios, use multiple triggers and actions in a single workflow. For example, you could automate different follow-up actions based on whether an estimate is accepted or declined.
-   **Use Conditional Logic**: Incorporate conditional steps to fine-tune the workflow’s behavior. For example, send different estimates based on the client's industry or project type.
-   **Monitor Workflow Performance**: Regularly review workflow analytics to identify areas for improvement, such as refining filters or updating automation rules.
-   **Leverage Pre-Built Templates**: Use existing estimate templates to save time when setting up workflows, ensuring consistency across your estimates.
-   **Regularly Update Templates and Filters**: As your business needs change, periodically update your estimate templates and filter criteria to keep workflows relevant.

### FAQ's




**Question:** Can I automate different actions based on the status of an estimate?
**Answer:** Yes, you can configure the workflow to take specific actions when an estimate changes status, such as sending an approval notification or following up on a pending estimate.  




**Question:** What happens if an estimate doesn't meet any of the filter criteria?
**Answer:** If an estimate does not match the set filters, the workflow will not be triggered, and no actions will be taken.  




**Question:** Can I send estimates to multiple recipients automatically?
**Answer:** While the "Send Estimate" action typically allows for a single recipient, you can set up multiple actions within the same workflow to send estimates to various contacts.  




**Question:** Is it possible to customize the estimated templates used in the workflows?
**Answer:** Yes, you can select different templates when configuring the "Send Estimate" action, or even create new templates to suit specific needs.  




**Question:** Can the workflow be paused or edited after activation?
**Answer:** Absolutely. You can pause, modify, or deactivate workflows at any time. This allows you to make changes as needed or temporarily suspend automations.  




**Question:** Can I send an estimate via Text (SMS) if I don't have their email?

**Answer:** Yes. In the **Send Estimate** action, you can choose the "Delivery Channel." You can select Email, SMS, or Both. If you select SMS, the client will receive a link on their phone that opens the estimate in their mobile browser.