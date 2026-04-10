---
title: "Configuring and Managing Processing Charges for Payments"
description: "Processing charges allow businesses to pass on transaction-related costs, such as credit card fees or service fees, directly to customers. These charges are…"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/G5340XKHUt5HNNCGoZaF"
sourceId: "G5340XKHUt5HNNCGoZaF"
category: "Payments"
---

Processing charges allow businesses to pass on transaction-related costs, such as credit card fees or service fees, directly to customers. These charges are shown as separate line items during checkout and added to the final payable amount. This article explains how to configure and manage processing charges in your account, as well as their behavior within different payment flows.

### **What is a Processing Charge?**

A processing charge is an additional fee added to a customer’s transaction total to cover costs like payment processing or miscellaneous service fees. This charge is visible at checkout and reflected on the payment receipt. The processing charge is calculated as:  
**(Subtotal - Discounts + Taxes)**, representing the actual amount processed through the payment provider.

### **Where Does This Fee Apply?**

Processing charges can be applied to the following payment sources:

-   Invoices
-   Funnels
-   Forms
-   Surveys
-   Payment Links
-   Estimates

**Note:** PayPal and custom payment providers are not supported for processing charges on Funnels, Forms, and Surveys.

### **Important Behavior Guidelines**

-   **Draft invoices**: The processing charge appears only if the invoice is edited after enabling the feature.
-   **Existing invoices/orders**: Orders placed before enabling this feature remain unaffected.
-   **Disabling the feature**: Disabling does not retroactively remove charges from existing invoices or orders unless they are still editable.
-   **Mobile App**: The feature does not apply to invoices paid via the mobile app yet.

### **How to Configure a Processing Charge**

**1\. Access Payment Settings**:

-   Navigate to the dashboard.
-   Go to **Payments > Settings**.
-   Scroll to the **Miscellaneous Charges** section and select **Processing Charges**.

![](https://assets2.modalsupport.net/1770920350936-image4.png)

**2\. Define the Processing Charge**:

-   Enable the **Processing Charges** toggle.
-   Enter the fee percentage (e.g., 2.5%).
-   Define a custom label (e.g., Convenience Fee).

![](https://assets2.modalsupport.net/1770920366190-image2.png)

**3\. Select Payment Sources**:

-   Choose where to apply the processing charge (Invoices, Funnels, Payment Links, Forms, Surveys, Estimates).

**4\. Save the Settings**:

-   Click **Save** to apply the charge to the selected payment sources during checkout.

### **Viewing Processing Charges in Checkouts**

-   **Invoices & Estimates**: The processing charge is shown after the "Pay" button is clicked.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcjzIvDQrEo0y6DHUD8Xu9VsSWF7SJBHrYWab4fZ8PML1OUHEUGPTQeGjKigpZXieV5mhzWSRQTXlbPNaXPKV1VrJYUFyVAz6HoSa_1xeihU4R3T4MMMZheyveh4hzDumUW6tFc?key=4-0YkuVMUlsAj4HGkXLqhA)

-   **Funnels, Forms, Payment Links**: The charge is included as part of the total amount at checkout.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXevmY6Shgg3Igyxv-bRHAzuurcr5agiyQXfKXWnq_VgRM4jacYJMtmkrcgeCXXUhgbhg-EQUaLBxom14tLbMEIsr-R2VnudNqjprZOV4EEVtPYPqpNMpnxmgYQBH4UI-r9o0JeugA?key=4-0YkuVMUlsAj4HGkXLqhA)

![](https://assets2.modalsupport.net/1770920391755-image1.png)

### **Viewing Processing Charges in Reports**

To track applied processing charges:

-   Open the **Transactions CSV** or **Orders CSV** export.
-   Review the columns for **Processing Charge Name** and **Processing Charge Amount** to see the details of applied charges.

### **Compliance Note**

It is your responsibility to comply with local laws regarding surcharges, as they may be prohibited in some jurisdictions.

**FAQs**




**Question:** How do I apply processing charges to different payment sources?
**Answer:** You can choose the payment sources (Invoices, Funnels, Forms, etc.) to apply the processing charge by selecting the appropriate checkboxes in the settings.




**Question:** Can I change the label for the processing charge?
**Answer:** Yes, you can define a custom label for the processing charge, such as "Convenience Fee" or "Processing Charge," which will appear on the checkout summary and receipt.




**Question:** Will the processing charge be applied to all transactions automatically?
**Answer:** Once configured, the processing charge is automatically applied to the selected payment sources during checkout.




**Question:** How can I track the processing charges in reports?
**Answer:** You can view the processing charge details in the **Transactions CSV** or **Orders CSV** export, under the columns for **Processing Charge Name** and **Processing Charge Amount**.




**Question:** Does this feature apply to mobile app payments?
**Answer:** The processing charge feature does not currently apply to payments made through the mobile app.




**Question:** Can I generate reports showing total processing charge revenue?
**Answer:** While there’s no standalone dashboard for processing charge revenue yet, you can use the **CSV export** data to calculate total processing fees collected over a selected date range.




**Question:** Can processing charges be applied to mobile app payments?
**Answer:** No**, processing charges do not currently apply to payments made through the mobile app.


**Question:Are PayPal and custom payment providers supported for all payment sources?

**Answer:** No. PayPal and custom payment providers are not supported for processing charges when used with Funnels, Forms, and Surveys.




**Question:** How is the processing charge specifically calculated?
**Answer:** The processing charge is calculated based on the net amount processed through the payment provider. The formula used is: (Subtotal−Discounts+Taxes). This ensures the fee reflects the actual final balance before the processing charge is added.