---
title: "Workflow Action: Send Recurring Invoice"
description: "The Recurring Invoices Action within Workflows streamlines this process, enabling businesses to automate and manage invoicing with ease. With the ability to…"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/ybSXsJkNu2mB5Ded3Abd"
sourceId: "ybSXsJkNu2mB5Ded3Abd"
category: "Workflow Actions"
---

The Recurring Invoices Action within Workflows streamlines this process, enabling businesses to automate and manage invoicing with ease. With the ability to set flexible start dates, frequencies, and stop rules, this feature simplifies billing for agencies, memberships, course platforms, and services. Automating recurring invoices ensures timely billing without the need for manual intervention, improving operational efficiency and consistency.

### Key Features and Benefits:

-   **Customizable Start Options**: Choose between an action-based start (e.g., form submission, birthday reminder) or a fixed date (e.g., the 1st of each month).
-   **Flexible Stop Rules**: Set invoices to stop either after a specific number of occurrences or never, ensuring adaptability based on business needs.
-   **Varied Frequency Options**: Recurring invoices can be sent on a daily, weekly, monthly, or yearly basis, allowing for complete control over billing cycles.
-   **Auto-Pay Option**: With auto-charge enabled, customer cards can be automatically charged after the first successful payment, saving time and reducing administrative workload.
-   **Fully Automated Workflow**: Automating invoicing within workflows ensures that businesses do not have to worry about manual intervention or errors, providing a seamless billing experience for customers.

### How to Use:

**Prerequisites**

-   At least one invoice template must be created under the "Invoices" section.
-   A payment gateway (e.g., Stripe or PayPal) must be configured for processing payments.

**Steps**

**1\. Add the Action**:

-   In the Workflow Builder, click on the “+” to add a new action.
-   Search and select **Send Recurring Invoice**.

![](<https://assets2.modalsupport.net/1764936923414-unnamed - 2025-12-05T201520.323.png>)

**2\. Basic Settings**:

-   Rename the action if you’d like (e.g., "Monthly Plan – Silver").
-   Choose the user from whom the invoice will be sent.
-   Select the invoice template to use.

![](<https://assets2.modalsupport.net/1764936943120-unnamed - 2025-12-05T201540.193.png>)

**3\. Set Start Date**:

-   **Action Date**: The invoice starts from the contact's entry point (e.g., when a form is submitted).
-   **Fixed Date**: The invoice starts from a specific date on the calendar (e.g., the 1st of every month).

![](<https://assets2.modalsupport.net/1764936960935-unnamed - 2025-12-05T201559.747.png>)

**4\. Define End Criteria**:

-   **Never**: Billing continues indefinitely until manually stopped.
-   **After X Occurrences**: Set the number of invoices to be sent (e.g., 12 monthly invoices).

![](<https://assets2.modalsupport.net/1764936980489-unnamed - 2025-12-05T201618.731.png>)

**5\. Choose Recurrence Frequency**:

-   **Daily**: Send invoices every X days.
-   **Weekly**: Send invoices on a specific weekday or on the action date.
-   **Monthly**: Send invoices on a specific day of the month or week (e.g., every 2nd Wednesday).
-   **Yearly**: Send invoices annually.

![](<https://assets2.modalsupport.net/1764937003336-unnamed - 2025-12-05T201641.105.png>)

**6\. Enable Auto-Pay** (Optional):  
Turn on auto-pay if you want to automatically charge the customer's saved card after the first successful payment.

![](<https://assets2.modalsupport.net/1764937026436-unnamed - 2025-12-05T201702.007.png>)

**7\. Test & Go Live**:  
Save the action, test it with the “Test Workflow” option, and then publish the workflow to go live.

### Pro Tips:

-   **Set Reminders**: Even though the invoices are automated, setting a reminder to review billing workflows periodically helps ensure everything runs smoothly.
-   **Use Different Templates**: For different membership levels or subscription plans, create multiple invoice templates to customize the invoicing experience for your clients.

### FAQs




**Question:** Can I choose when the recurring invoice starts?
**Answer:** Yes, you can set the start date either based on the contact’s entry point or a fixed date on the calendar.




**Question:** Can I stop the recurring invoices after a specific number of occurrences?
**Answer:** Yes, you can define the number of occurrences for the invoices to stop after.




**Question:** How do I enable auto-payment for recurring invoices?
**Answer:** You can enable auto-payment by toggling the “Auto-Pay” option when setting up the recurring invoice action.




**Question:** Can I send invoices on a specific day of the week or month?
**Answer:** Yes, you can set the frequency of the invoices to be sent on specific days (e.g., the 2nd Wednesday of every month).




**Question:** What happens if a customer fails to make a payment after the first charge?
**Answer:** A: The payment gateway you’re using (e.g., Stripe or PayPal) will typically handle failed payments, and you can set up a workflow to notify the customer and retry payments.




**Question:** Where can I view all issued recurring invoices?
**Answer:** Inside your contact and invoice records, and also wherever issued invoices are stored in your billing modules.




**Question:** What are the requirements I need to have in place before I can use the Recurring Invoices Action?

**Answer:** You must have at least one invoice template created in the "Invoices" section and a payment gateway (such as Stripe or PayPal) configured for processing payments  




**Question:** If I manually pause the workflow, will the invoices stop sending?

**Answer:** Yes. If you pause the workflow or remove the contact from the workflow, the "Send Recurring Invoice" action will stop executing for that specific individual.




**Question:** What is the difference between an "Action Date" and a "Fixed Date" for starting an invoice?
**Answer:** An **Action Date** triggers the invoice based on when the contact enters the workflow (e.g., immediately after they submit a form). A **Fixed Date** schedules the invoice to start on a specific calendar day for everyone (e.g., ensuring all customers are billed on the 1st of every month).