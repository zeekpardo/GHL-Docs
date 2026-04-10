---
title: "Quickbooks Integration"
description: "In this article, we will explore how to integrate QuickBooks with , streamlining your workflow and eliminating the need for manual data entry each time a…"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/hjl9HZl5b7uweBvX4KcP"
sourceId: "hjl9HZl5b7uweBvX4KcP"
category: "Integrations"
---

In this article, we will explore how to integrate QuickBooks with , streamlining your workflow and eliminating the need for manual data entry each time a contact is created in QuickBooks.

Once the integration is complete, all new contacts will automatically be added to , and they will receive a review request upon payment (unless you choose to disable this feature).

Additionally, you have the option to import all previously created invoices from QuickBooks into your account, providing a comprehensive overview of your financial interactions.

## What does the QuickBooks integration do:

-   Syncs all **new** contacts that are created in QuickBooks.
-   Sends review upon QuickBooks payment in without any automation (only on the first invoice)
-   Automatically register sales receipts inside Quickbooks whenever a payment is made inside for order forms, subscription payments, membership checkouts, and calendar payments
-   Automatically create an invoice inside Quickbooks as soon as an invoice is marked as sent inside . This will also sync any updates made afterward inside and mark it is paid inside QBO as soon as it is paid inside

### Integrating Quickbooks

-   Navigate to Settings > Integrations, and locate the Quickbooks integration.
-   Click Connect.

![](https://assets2.modalsupport.net/1771951317773-image2.png)

-   You'll be redirected to Intuit's login page, where you can log in to Quickbooks.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcpaZ-gLNrcSMcC4gxOHszgJ1_qIX37de9VsZ95hvBxaOpNFsBWXpgxXwaFb7A9L5RGI3O7wuV6uWmUD3K5h8Vzz-NmigNlrezjyQvweB0xmUC33gSj6UZJXC_BrerEj7Uu_j-vUUpy-1kPo3NYW7BiuPs?key=UlOfiW6-9qBr47_NmdITjQ)

-   Once logged in, you'll be asked to "Connect" to allow Quickbooks information to be shared back into .
-   Make sure to accept all permissions > hit the "connect" button
-   In , navigate back to Settings > Integrations, and you should now see Quickbooks is connected!

**Note:** 

There is a checkbox that appears under the QuickBooks Icon integration, asking if you want to automatically send reviews.

### Improved QuickBooks integration for Non-US Countries

The QuickBooks integration for non-US customers includes invoice syncing. Previously, non-US users faced issues due to mandatory tax requirements not being met. Now, users can create and attach taxes to products while generating invoices, ensuring successful synchronization with QuickBooks Online.

**Benefit**: This streamlines the invoicing process for non-US users, enhancing accuracy and compliance with local tax regulations.

**How to use it**: Go to Payments > Settings > Taxes to create a tax, then attach it to your product while creating an invoice. Your invoices will sync successfully with QuickBooks Online, including the necessary tax details.

### Auto creation of sales receipts

-   This is applicable for any payment processed via order forms, calendars, or subsequent subscription payments as well.
-   If a customer exists inside QBO with the same email ID with which the transaction is processed, we will update the sales receipt corresponding to the same customer inside QB.
-   If the customer is not present, we will create a new customer against the email ID with which the transaction is processed.

### One-way invoice sync from to QBO

-   This will create a replica of the sent invoice, along with the total amount (including taxes and discounts) on QBO for frictionless accounting sync.
-   Any updates made on the invoice inside will be updated on QBO. This will include any invoice status change transitions inside , such as the invoice is paid by the customer, or the invoice is voided on or any further discount is added upon customer request.
-   This will not sync existing invoices already created within . Only new invoices created from now on will get synced inside QBO.
-   If a customer exists inside QBO with the same email ID with which the transaction is processed, we will update the sales receipt corresponding to the same customer inside QB
-   If the customer is not present, we will create a new customer against the email ID with which the transaction is processed.

### Import Previous Invoices from Quickbooks

The ability to import invoices simplifies the process of centralizing financial records by allowing users to seamlessly transfer all past invoices from their previous systems during account setup.

-   To get started, navigate to Settings → Integrations → QuickBooks Connect, choose the account you want to link, and toggle the import option. 
-   Click the date-picker and select your desired Start Date and End Date.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXebiFZWcu6ddjKi0AA588R9qaAfcYXNwRocbyD_7R3hI7ClhnDrDSWLNVgTs8EO5lK_InC7HTZBVgF614z-Vvpoj47CUYJw7-tFbVoufN6RunmRu1buPfB5-pS1y-ag0cbdvp5TLQ?key=UlOfiW6-9qBr47_NmdITjQ)

-   Set sync preferences to configure settings like Send Review Requests to automatically gather feedback for completed invoices.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcYAQnGC_pkHioz8c5beYz6K0MX-FUeoAp0Ehd73RFNxZM3n8VI745dqvl1UPHj9Qs-lEfYItGRKar43uLKZ0uD79ITzs-K2oFPLPC8gc-d5bkpqnEMKi7mGS_m27Ec1E6bn7A9?key=UlOfiW6-9qBr47_NmdITjQ)

### Quickbooks Integration in Reputation Management


With QuickBooks Integration in Reputation Management, you have the option to opt out of automatic review requests when an invoice balance hits zero. 

**Benefit:** This update gives you full control over when to send review requests, ensuring they align with your business needs and customer interactions. 

**How to Use:** 

-   Go to your settings 
-   Navigate to Integrations > QuickBooks Integration, and deselect the "Send Review Request to Contacts" option.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcL_9qYx1UPnLblQW_eZGTAJ4QvzGRjyPHkyyrqcikC-LNKdDTbHNo2p1hvokUPKNLqCL8ikfBGWViMb2NpFy-ewNmr1mvlF6qnJLuDCsWHuYUAKrNW7EV45AvQtfIESPp_mQClD89X64o5CyC3ccLyfLU?key=UlOfiW6-9qBr47_NmdITjQ)

### **Please Note:**

\- Once the integration has been established only **NEW** leads will be added as contacts to your location. It may take up to 5 minutes before you see the new contact in

\- To add older Quickbook contacts to please [export](https://quickbooks.intuit.com/learn-support/en-us/help-article/import-export-data-files/export-customer-data-excel/L0ZerVWiO_US_en_US) them first then add them to the system via CSV.

### **FAQs**  




**Question:** What happens if I have existing customers in QuickBooks?

**Answer:** The integration will only sync new contacts created after the integration is established. Existing customers will not be synced automatically. To add older QuickBooks contacts, you can export them and import them into the system using a CSV file.




**Question:** How do I enable or disable automatic review requests?

**Answer:** You can opt out of automatic review requests by going to Settings > Integrations > QuickBooks Integration and deselecting the "Send Review Request to Contacts" option.




**Question:** Can I sync invoices created before I set up the integration?

**Answer:** No, the integration will only sync invoices created after the connection is established. Existing invoices will not be affected.




**Question:** How does the tax feature work for non-US users?

**Answer:** Non-US users can create and attach taxes to products in Payments > Settings > Taxes. This ensures that the necessary tax details are included when generating invoices, allowing for successful synchronization with QuickBooks Online.




**Question:** What information is synced to QuickBooks?

**Answer:** The integration syncs new contacts, updates sales receipts for payments processed, creates invoices for sent invoices, and updates invoice statuses as they change in .




**Question:** How long does it take for new contacts to appear in after integration?

**Answer:** It may take up to 5 minutes for new contacts to appear in after they are created in QuickBooks.




**Question:** How do I import previous invoices from QuickBooks?

**Answer:** You can import previous invoices from QuickBooks by navigating to Settings → Integrations → QuickBooks Connect, choosing the account you want to link, and toggling the import option. Then, use the date-picker to select your desired Start Date and End Date for the invoices you want to import.




**Question:** What happens if a customer in has a different email than in QuickBooks?

**Answer:** A new customer will be created in QuickBooks using the email associated with the transaction in .




**Question:** Can I connect multiple QuickBooks companies to one account?

**Answer:** Currently, each location in the platform can be connected to **one** QuickBooks Online company. This maintains a clean 1-to-1 relationship for your accounting and prevents data from different business entities from getting mixed.




**Question:** If I delete the integration, will it delete the contacts or invoices in QuickBooks?

**Answer:** No. Disconnecting the integration simply stops the future flow of data. All contacts, invoices, and sales receipts already synced to QuickBooks will remain safely in your Intuit .