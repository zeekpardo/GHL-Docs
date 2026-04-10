---
title: "Workflow Action: Number Formatter"
description: "The Number Formatter Action encompasses five essential features: Text to Number, Format Number, Format Phone Number, Format Currency, and Random Number."
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/zDc090Jk59lVrovFbX6S"
sourceId: "zDc090Jk59lVrovFbX6S"
category: "Workflow Actions"
---

The Number Formatter Action encompasses five essential features: Text to Number, Format Number, Format Phone Number, Format Currency, and Random Number. 

Some of its capabilities include:

-   Converting text to the number (e.g., "$12,345.67" to 12345.67) for easy comparison in If/Else conditions with number operators.
-   Formatting currencies to their respective locales before sending emails or SMS to contacts, ensuring a professional appearance.
-   Formatting United States phone numbers as international numbers (e.g., adding "+1" country code) before storing or sending them via email, SMS, Slack, or a custom webhook to another platform.

### **What are some good use cases for each Number Formatter Action Type?**

Here are some practical business examples for each of the Number Formatter Action features:

#### **Text to Number:**

**a.E-commerce order value calculation:** An online store receives order data as text, like "3 items at $12.50 each." The Text to Number feature can extract the numerical values, enabling the calculation of the total order value.

**b.Sales data analysis:** A company receives sales data in a text format such as "Revenue: $10,500.00." Using Text to Number, they can convert it to a numeric value for easy analysis and comparison.

**c.Financial report data import:** A business imports financial data from a spreadsheet, with values like "€2,500.00." Text to Number can convert these values for seamless integration into the 's reporting features.

**d.Survey response analysis:** A marketing firm collects survey data with text-based responses like "I spent £150 last month." Text to Number can convert these values for further analysis and customer segmentation.

**e.Social media data processing:** A brand extracts numeric data from social media posts, like "We reached 10K followers!" Text to Number can convert this data to numerical values for tracking and reporting purposes.

#### **Format Number:**

**a.** International sales reports: A multinational company needs to present sales data in region-specific formats for easier comprehension by their international teams.

**b. Customized invoices:** A business generates invoices with region-specific number formatting, catering to the preferences of their international clients.

**c. Data export:** A company exports data from their CRM to share with a partner in another country, requiring the conversion of number formats to match local conventions.

**d. Client reports:** A marketing business prepares reports for clients in different countries, adjusting the number formatting to match local preferences.

**e.Product pricing updates:** An e-commerce store updates product prices on its website to accommodate different number formats based on the customer's location.

#### **Format Phone Number:**

**a. SMS marketing campaigns:** A company standardizes collected phone numbers into a consistent format for more effective SMS marketing campaigns.

**b. International calling:** A customer support team formats phone numbers to include country codes, ensuring successful connections to international customers.

**c. Data validation:** A business verifies and corrects the formatting of phone numbers in their CRM to improve data accuracy and reduce communication errors.

**d. Personalized communication:** A sales team adjusts the phone number format to match the customer's region, making the communication more relatable and personalized.

**e. Lead management:** A lead generation company formats phone numbers to ensure proper routing and assignment to relevant sales agents.

#### **Format Currency:**

**a. Personalized pricing display:** An e-commerce store displays prices in the local currency format based on the customer's location for a better shopping experience.

**b. Invoicing:** A business generates invoices with currency values formatted according to the client's country, ensuring clarity and professionalism.

**c. Financial reports:** A company prepares financial reports for stakeholders in multiple countries, formatting currency values to match local expectations.

**d. Marketing materials:** A marketing business creates promotional content with region-specific currency formatting to appeal to international audiences.

**e. Budget management:** A project manager converts currency values in their budget to a standardized format for easy comparison and analysis.

#### **Random Number:**

**a. Unique discount codes:** An online retailer generates random discount codes for a limited-time promotion to encourage sales.

**b. Lottery-style giveaways:** A company runs a giveaway where customers are assigned random numbers, and the winners are selected based on a random number draw.

**c. Randomized product recommendations:** A subscription box service uses random numbers to select items for inclusion in their customers' personalized  
**d. A/B testing:** A company uses random numbers to assign website visitors to different versions of their website for A/B testing. This helps ensure a fair and unbiased distribution of visitors between the test groups.  
**e. Customer support ticket assignment:** A customer support team assigns incoming support tickets to agents based on random numbers. This method helps evenly distribute the workload among agents and ensures that no single agent is overwhelmed with requests.

## **How to use the Number Formatter Action?**

To use the Number Formatter Action, follow these steps:

Inside a workflow, add the Number Formatter Action

![](https://assets2.modalsupport.net/1770758444704-image22.png)

### **Text to Number:**

In the Number Formatter action, choose the Text to Number option in the Action Type dropdown.

![](https://assets2.modalsupport.net/1773760257019-image2.jpg)

**a. Select Field:** Choose a suitable field for text-to-number conversion from Contact fields, Custom fields, Custom values, or Inbound Webhook Trigger.

![](https://assets2.modalsupport.net/1762372806975-image17.png)

![](https://assets2.modalsupport.net/1762373073298-image11.png)

**b. Input Decimal Mark:** Define the character used to denote the decimal portion of the number.

![](https://assets2.modalsupport.net/1762373223093-image16.png)

**c. Output**: Use the result in further actions in your workflow with {{number\_formatter.2.result}}

![](https://assets2.modalsupport.net/1762373314528-image4.png)

![](https://assets2.modalsupport.net/1762373338098-image6.png)

![](https://assets2.modalsupport.net/1762373363333-image9.png)

### **Format Number:**

In the Number Formatter action, choose the Format Number option in the Action Type dropdown.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXc34J56Zc241l7oP5ZxY8HW-2_Mzm2_DZK2HDfSGsOcWk0s_XXzf5tjtGlr8495EGJ57OVghKDGX_AsYOeGLHjWnXQ3xE93F-ckTYEde8x2xA9mv5PzgQJ2nQuXg5dpP5lrVfCfl83bkv0AQyWzGnoBGZ3x?key=-MDit3JwcV6Sgly49JXoVg)

**a. Select Field:** Choose a suitable field for number formatting from Contact fields, Custom fields, Custom values, or Inbound Webhook Trigger.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXd2mkIWai-zntRBd-MEUwLirzNuJHtALUZAnn9SW2shLxPkUKBTQ-3ybj98XCYjA39tXilaCSCUUIAD1WIKTi6YBtbYiwxLUIGpGZ-TguKZLT0n1TXYZUA4E4CtwBRMACAFbcCJ4KNZ3xwf9i9XaPeBXexv?key=-MDit3JwcV6Sgly49JXoVg)

**b. Input Decimal Mark:** Define the character used to denote the decimal portion of the number.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcBwh6EiwASNJL3QmjZH0mQrAJnfbK9FslSY5RhAC5HYjWH00eEUuJeZlRlnzpaE42U_Z7DeM13wx8GwhYYsAIhCCw7rn_AXZYFxEZGPx96VV4UiK0Rh2PVRX5PVEdj5xMF-BWHAOIQ-eI0K6IE7U9jtOE?key=-MDit3JwcV6Sgly49JXoVg)


**c. To Format:** Select the required format from the list.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXc-r2f_LBZY9T2I_tL0A-BI-LemOlVNIzL1WsTDYLC5z7xY0njEsqFEzrN8oh0H3OEAX4cqhJaXnoPK6Csho8yjjOSx_h0k53-QcuEuEiPc6BlmW-eAtMEDL0RGra569TWQ2FXqK1b0fXLrN88WIqCqXK8?key=-MDit3JwcV6Sgly49JXoVg)  

**d. Output:** Use the result in further actions in your workflow with {{number\_formatter.2.result}}

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeskF8qtNvg0L2T-LKbi-VvJuZp5ka0BN9MNGDowylPuSTnIsTePuYEH2bpwBb50dE0P0vM1n76f2NCoLoJnrxunBS03NE0kTcZa0j3YZDlHPkVHyw0WQJMMmgAzZ_aGtbjRAWDLo2n4L3PJh8f5wbAGxY?key=-MDit3JwcV6Sgly49JXoVg)

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXf23eeF8Gru8fTVe9jqQAQD1CvPL3sQhNidzPVFhELH__4OBtKKy7jtMMD2hMBDzesdbm_7GLeYi-A4KmvTB_WuUdiQrK22EENBe_guArV6RD5TaFQqJQJ4I_oosi4spPWLC2oX-vX-Q9TP2C7tQSVAUdpJ?key=-MDit3JwcV6Sgly49JXoVg)

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfq0BnduVjTdaNHEC7eVFfiFHKi8ShaFcKdu19brIxvB25vyln190I2y2MoLtCPwYNFUlq5OgEcYz_5S1oAcJmSDsOfDQ-aKcM-0EsOMI8T5lRgDZg4ltQdi1qRG01s79CzNbmiVMvcKkgf-EyY8sRQ0Rg?key=-MDit3JwcV6Sgly49JXoVg)

### **Format Phone Number:**

In the Number Formatter action, choose the Format Phone Number option in the Action Type dropdown.

![](https://assets2.modalsupport.net/1762371417906-image22.png)




**a. Select Field:** Choose a suitable field for phone number formatting from Contact fields, Custom fields, Custom values, or Inbound Webhook Trigger.

**Please Note:**

If you choose the Format Phone Number Action Type, you would only be able to choose Phone Number related fields

![](https://assets2.modalsupport.net/1762371488170-image23.png)

**b. To Format:** Select the required format from the list.

![](https://assets2.modalsupport.net/1762371601390-image14.png)


**c. Country Code:** Select the required country code from the list.  

![](https://assets2.modalsupport.net/1762371651250-image18.png)


d. Output: Use the result in further actions in your workflow with {{number\_formatter.2.result}}  

![](https://assets2.modalsupport.net/1762371844962-image4.png)

![](https://assets2.modalsupport.net/1762371887480-image6.png)﻿

![](https://assets2.modalsupport.net/1762371920533-image9.png)

### **Format Currency:**

In the Number Formatter action, choose the Format Currency option in the Action Type dropdown.

![](https://assets2.modalsupport.net/1762372051203-image20.png)

**a. Select Field:** Choose a suitable field for currency formatting from Contact fields, Custom fields, Custom values, or Inbound Webhook Trigger.

![](https://assets2.modalsupport.net/1762372149322-image11.png)

**b. Currency:** Select the required currency format from the list.

![](https://assets2.modalsupport.net/1762372199712-image21.png)


**c. Currency Locale:** Select the required currency locale format from the list.

![](https://assets2.modalsupport.net/1762372257587-image18.png)


**Please Note:**

Currency locale refers to the regional settings and conventions used to display currency values, taking into account the local formatting rules, symbols, and language preferences. It determines how currency values are formatted and presented based on the region or country where the currency is being used.

**For example**, the currency locale for the United States uses the US Dollar symbol ($) and formats currency values with a comma as the thousands separator and a period as the decimal separator (e.g., $1,234.56). In contrast, the currency locale for Germany uses the Euro symbol (€) and formats currency values with a period as the thousands separator and a comma as the decimal separator (e.g., €1.234,56).

Using the correct currency locale ensures that your customers or users can easily understand and interpret currency values, as they will be presented in a familiar and expected format.

**d. Output:** Use the result in further actions in your workflow with {{number\_formatter.2.result}}

### **Random Number:**

In the Number Formatter action, choose the Random Number option in the Action Type dropdown.

![](https://assets2.modalsupport.net/1762372344806-image10.png)

**a. Specify the Lower Range and Upper Range.**

![](https://assets2.modalsupport.net/1762372403415-image5.png)


**Please Note:**

The Lower Range and Upper Range in the Random Number action type are the parameters that define the minimum and maximum values, respectively, within which a random number will be generated. By setting these values, you can control the range of possible numbers that can be produced by the Random Number action.

**For example**, if you set the Lower Range to 1 and the Upper Range to 100, the Random Number action will generate a random number between 1 and 100, inclusive. This functionality can be useful for creating unique codes, selecting random samples, or generating dynamic content within your CRM workflows.

**b. Specify the Decimal Points**

![](https://assets2.modalsupport.net/1762372438816-image2.png)

c. Output: Use the generated random number in further actions in your workflow with {{number\_formatter.2.result}}.

![](https://assets2.modalsupport.net/1762372475896-image4.png)

![](https://assets2.modalsupport.net/1762372511858-image6.png)

![](https://assets2.modalsupport.net/1762372531971-image9.png)


**Please Note:** 

When selecting fields, ensure they suit the chosen formatting operation to avoid errors or unexpected results.  

### **FAQs**




**Question:** Can I use the Number Formatter Action to format numbers from external APIs?  
**Answer:** Absolutely! Inbound Webhook Trigger can retrieve numbers from external APIs and format them accordingly.




**Question:** Can I apply multiple formatting operations within the same workflow?  
**Answer:** You can use multiple instances of the Number Formatter Action in a single workflow to perform various formatting operations.




**Question:** How does the Random Number feature ensure uniqueness in generated numbers?  
**Answer:** The Random Number feature generates numbers within a specified range. While it does not guarantee absolute uniqueness, the odds of generating the same number multiple times decrease as the range increases. To further ensure uniqueness, you can implement additional checks in your workflows to track previously generated numbers and prevent duplicates from being used. This combination of a wide range and proper tracking will help minimize the likelihood of non-unique random numbers in your applications.




**Question:** Can date values be formatted using the Number Formatter Action?
**Answer:** The Number Formatter Action is designed specifically for formatting numbers. For date values, consider using a dedicated date formatting action or tool.




**Question:** Can I use the Number Formatter Action to format numbers in languages that use non-Arabic numeral systems?
**Answer:** The Number Formatter Action supports formatting numbers using the Arabic numeral system (0-9). Formatting numbers in languages with non-Arabic numeral systems would require a specialized tool or custom implementation.




**Question:** How does Random Number ensure uniqueness?
**Answer:** Random Number generates numbers within a defined range, reducing the likelihood of duplicates. To further ensure uniqueness, you can track previously generated numbers in your workflow.  




**Question:** Can I format a number to have a specific number of zeros at the end?
**Answer:** Yes. In the "Format Number" or "Random Number" settings, you can specify the **"Decimal Points."** If you set it to 2, the number will always look like "10.00" instead of just "10."