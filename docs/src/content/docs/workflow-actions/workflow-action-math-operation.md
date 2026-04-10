---
title: "Workflow Action: Math Operation"
description: "Workflow Action: Math Operation"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/XJf1N925N1KkmSx8vnLz"
sourceId: "XJf1N925N1KkmSx8vnLz"
category: "Workflow Actions"
---

**Workflow Action: Math Operation**

The Math Operation action in workflows is a powerful tool for automating various business calculations and tasks. By allowing users to perform arithmetic operations on numeric, monetary, and date fields, this feature helps streamline workflows and automate key business processes, such as updating renewal dates, tracking sales commissions, or managing inventory levels. This article explains the key features, benefits, and use cases of the Math Operation action and provides a step-by-step guide on how to use it effectively.

### **Key Features and Benefits**

The Math Operation action offers extensive capabilities to handle calculations automatically within workflows. Below are its main features and advantages:

1.  **Automated Calculations**: Perform arithmetic operations like addition, subtraction, multiplication, and division on numeric and monetary fields. Date-based calculations, such as adding or subtracting days, months, or years, are also supported.
2.  **Improved Accuracy**: Automating calculations reduces manual errors, ensuring accurate data for decision-making.
3.  **Flexible Customization**: Support for standard, custom, and trigger-based fields allows for tailored calculations to suit specific business requirements.
4.  **Enhanced Workflow Integration**: Seamlessly integrate math operations with other actions, such as sending emails or updating records, and conditions like If/Else.
5.  **Scalable Solution**: Efficiently manage increasing data volumes without additional manual effort, making it suitable for businesses of all sizes.
6.  **Dynamic Scheduling**: Use date-based calculations to automate time-sensitive processes and reminders.

### **Special Requirements and Limitations**

-   Math Operations are limited to numeric, monetary, and date fields.
-   When subtracting values, use conditions to ensure that negative results are handled appropriately for monetary calculations.
-   Math Operations involving date fields do not support negative values; calculations must always add or subtract positive increments.

To set up and configure the Math Operation action, follow these steps:

1.  **Create or Select a Workflow**
    -   Start by creating a new workflow or choose an existing one where you want to apply the Math Operation action.

![](https://assets2.modalsupport.net/1762372657357-1.png)

**Add the Math Operation Action**

-   In the workflow builder, click on the **\+ icon** to add Action and select "Math Operation" from the available options.

![](https://assets2.modalsupport.net/1762372672948-2.png)

![](https://assets2.modalsupport.net/1762372689816-3.png)

**Choose the Field to Update**

-   Select a numeric, monetary, or date field where the calculation result will be stored. This could be a standard field, a custom field, or a custom value.

![](https://assets2.modalsupport.net/1772728566202-image7.png)

**Select the Operation**

-   Choose the type of operation: addition, subtraction, multiplication, or division for numeric and monetary fields, or add/subtract days, months, or years for date fields.

![](https://assets2.modalsupport.net/1762372739856-5.png)

And you can choose the addition or subtraction of days, months, or years for date fields.  

![](https://assets2.modalsupport.net/1762372760296-6.png)

You can incorporate values from the trigger and use them in the "Select Field." The numeric and trigger fields will also be accessible in the "Value" field within the operation section.  

![](https://assets2.modalsupport.net/1762373928976-7.png)

![](https://assets2.modalsupport.net/1762374076112-8.png)

**Specify the Operator Value**

-   Input a fixed number or use a custom field for the calculation. This value acts as the operator (e.g., adding 10 to a numeric field).

**Note:**

-   Math Operation saves its result as an output custom variable, so you can use it in the next workflow steps without needing to first save it to a custom field. You can also use the output of one Math Operation inside another Math Operation. This makes it pretty easy to work with and use your math results.

![](https://assets2.modalsupport.net/1775580904231-image12.jpg)

**Save and Apply the Action**

-   Click "Save" to confirm the Math Operation setup.

**Activate the Workflow**

-   Publish the workflow to enable the automatic execution of the Math Operation whenever the workflow is triggered.

![](https://assets2.modalsupport.net/1772728603102-image5.png)

**Combine with Additional Actions and Conditions**

-   Optionally, integrate the Math Operation with other workflow actions or conditions to build complex and dynamic automation.

![](https://assets2.modalsupport.net/1762374130881-10.png)

**Update Custom Values within Update Field**  
Users can update custom values directly within the Math Operation action, including Standard Fields and Custom Fields. They can also perform operations on custom values and adjust them in real-time, further improving workflow automation.

1.  **Numeric / Monetary Field Types**

Numeric and monetary fields are custom field types in workflows used to store numerical values. They can manage and process quantitative data, such as lead scores, sales figures, or financial information, within a workflow. Here are some details about these field types:

**Numeric Fields**: Store whole numbers or decimals, such as lead scores or customer satisfaction ratings.  

![](https://assets2.modalsupport.net/1762374158710-11.png)

**Monetary Fields**: Store currency values, such as sales amounts or employee salaries.

**Supported Operations**: Addition, subtraction, multiplication, and division.

**Please Note:** The Select field and Update Field can be the same or different, but it has to be of the **same field type**

1.  **Date Field Type**

In workflows, the Math Operation action can be used with date fields, enabling the manipulation and calculation of dates by adding or subtracting specific time units. This feature automates time-sensitive tasks and schedules based on dynamic dates. Below are details about the date field types and the supported math operations:

**Add/Subtract Days, Months, or Years**: Automate tasks like calculating follow-up dates, billing cycles, or membership renewals. Date fields typically store information in a standardized format like YYYY-MM-DD or include time information (e.g., YYYY-MM-DD HH:MM: SS). They can also be displayed according to different time zones or locale-specific formats.  

![](https://assets2.modalsupport.net/1762374395809-12.png)

**Current Date Field**: Enables calculations based on the present date, which is useful for deadlines and event scheduling.  

![](https://assets2.modalsupport.net/1762374424388-13.png)

**Please Note:** If the output value is negative then it will be replaced with zero

**How does it work?**

1.  Select field -> select any Numeric / Monetary / Date field as an Input
    1.  \-Only Numeric, Monetary, and Date field types are supported.
2.  Operations -> select an operation and enter respective values
    1.  \-The Select field and Update Field have to be of the **same field type.**
3.  Update field -> select any field to update it with the output value (field type should be same as "Select Field")
    1.  \-If the output value is negative then it will be replaced as zero.

### **Applying Negative Values to Math Operations**

When performing Math Operations within workflows, it is important to consider constraints based on the characteristics of monetary and numeric fields. Below are examples of where these constraints might apply:

**Please Note:**Negative values are not supported for Date or Current Date fields.

#### **Monetary Field Constraints**

-   **Use Case:** Calculating discounts for a product or service. If the applied discount results in a negative value, the system should adjust the final price to 0 to prevent charging customers a negative amount.
-   **Solution:** When performing Math Operations on monetary fields, use an If/Else condition to check for negative results. If the outcome is negative, set the monetary field to 0 to maintain the proper constraints.

#### **Numeric Field Constraints**

-   **Use Case:** Calculating the net profit or loss for a business, where numeric fields can store both positive and negative values to represent profit or loss.
-   **Solution:** Math Operations on numeric fields can involve adding or subtracting values directly, as negative values are allowed without additional constraints.

Utilizing If/Else conditions and other actions to ensure these constraints are met can improve workflow accuracy. For instance, if a Math Operation on a monetary field produces a negative result, an If/Else condition can be applied to set the value to 0, upholding the constraint for monetary fields.

### **Examples**

**Scenario 1: Calculate Follow-Up Date**

-   **Action Name:** Follow-Up Date Calculation
-   **Select Field:** Current Date
-   **Operator:** Add
-   **Days:** 7
-   **Update Field:** Follow-Up Date
-   **Description:** Adds 7 days to the current date to set a follow-up date after an event or interaction.

**Scenario 2: Calculate Age from Date of Birth**

-   **Action Name:** Age Calculation
-   **Select Field:** Date of Birth
-   **Operator:** Subtract
-   **Years:** Difference between the current year and the birth year
-   **Update Field:** Age
-   **Description:** Automatically calculates the contact's age based on their date of birth.

**Scenario 3: Extend Subscription Period**

-   **Action Name:** Subscription Extension
-   **Select Field:** Subscription Start Date
-   **Operator:** Add
-   **Months:** 1
-   **Update Field:** Subscription End Date
-   **Description:** Extends the subscription start date by one month to calculate and update the subscription end date.

### **Five Use Cases for Combining Math Operations with Other Actions and Conditions**

1.  **Lead Prioritization and Follow-Up:**Use the Math Operation action to increase a lead's score based on their interactions with your business. Combine this with If/Else conditions to categorize leads into segments (e.g., hot, warm, or cold). Trigger follow-up actions accordingly, such as sending targeted email campaigns or assigning high-priority leads to sales representatives for immediate outreach.
2.  **Subscription Renewal Reminders:**Apply the Math Operation action to calculate a subscription's renewal date by adding the subscription duration to the start date. Use an If/Else condition to check if the renewal date is approaching (e.g., within two weeks). If true, trigger reminder emails to encourage customers to renew their subscriptions.
3.  **Sales Commission Calculation and Notification:**Utilize the Math Operation action to calculate sales commissions based on performance metrics like revenue generated or deals closed. Combine this with If/Else conditions to check if the commission amount exceeds a certain threshold, signifying exceptional performance. If the condition is met, send an email to the sales representative congratulating them and informing them of the commission payout.
4.  **Project Deadline Tracking:**Use the Math Operation action to determine project deadlines by adding the project duration to the start date. Combine this with If/Else conditions to check if the deadline is approaching (e.g., within a week) or if the project is overdue. Based on the outcome, trigger actions such as sending reminder emails to the project team or escalating the issue to a manager for intervention.
5.  **Customer Loyalty Program:**Implement the Math Operation action to update customers' loyalty points based on their purchases or interactions with your business. Use If/Else conditions to check if the customer has reached a specific points threshold, qualifying them for rewards or special offers. If the condition is satisfied, send an email notifying the customer of their reward and encouraging them to redeem it.

### **FAQs**




**Question:** Can I perform multiple math operations in a single workflow step?
**Answer:** No, each Math Operation action handles one calculation at a time. To perform complex calculations, add multiple Math Operation actions sequentially.  




**Question:** How can I manage rounding errors or decimal precision?
**Answer:** Systems generally handle decimal precision automatically. For more control, implement custom logic or rounding functions within the workflow.  




**Question:** Can math operations be applied to custom date fields?
**Answer:** Yes, you can add or subtract days, months, or years from custom date fields for automated time-based calculations and scheduling.  




**Question:** Are there limitations on the values used in math operations?
**Answer:** Value ranges depend on field types. Monetary fields have a minimum value of 0, while numeric fields support both positive and negative values.  




**Question:** Can the result of a math operation be used in an If/Else condition?
**Answer:** Yes, results can be used as conditions in If/Else actions to create dynamic workflows, such as routing leads or performing specific tasks based on calculated values.  




**Question:** Can I perform math operations using external data, such as APIs?
**Answer:** While Math Operations mainly use built-in fields, some systems allow integration of external data through custom fields or integrations.  




**Question:** Can Math Operation actions be combined with other workflow actions and triggers?
**Answer:** Yes, Math Operations can be combined with other actions, triggers, and conditions to build complex, automated processes tailored to business needs.




**Question:** Can I use decimal values in Math Operations?

**Answer:** Yes, numeric and monetary fields support decimal values, allowing for precise calculations such as percentage changes, prorated amounts, or fractional adjustments.




**Question:** How does the system handle different time zones in date calculations?

**Answer:** The Math Operation uses the account's default time zone settings. When you add days or months, the system maintains the standardized format (YYYY-MM-DD), ensuring that your automated reminders go out at the correct time regardless of where your contact is located.