---
title: "Setting Up Buy Now Pay Later For Sales"
description: "Setting Up Buy Now Pay Later For Sales"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/PYBj1cRpOHmneb9j0jrp"
sourceId: "PYBj1cRpOHmneb9j0jrp"
category: "Payments"
---

**Setting Up Buy Now Pay Later For Sales**

Buy Now Pay Later (BNPL) is a payment option that allows customers to purchase items immediately and pay for them in installments. Popular BNPL providers include Affirm, Klarna, and Afterpay. Offering BNPL options can increase sales and improve customer satisfaction by providing flexible payment plans.

**NOTE:** The BNPL option only works in the **online store** with **Stripe** at the moment.

## **Step-by-Step Setup Guide**

### **1\. Configuring Stripe Payment Methods:**

Go to **Payments** on the left > **Integrations** at the top > **Stripe** > **Manage Payment Methods**

**![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXf6uIcxq2DdTM5lJ2X2HaKhKpX8QENP28ZzRKicmdkatfoLXiE1Bd81TdhuIPzvectMKB8i5gipqLvecRuSwaHxgamGXISYgIzT0cispDoZlQKZc5Y_c7qnqca-eBtnO2MFGTBtsw?key=GMvoXZw-QYaMXcSYxarNXQ)**

**![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfrhpyMStVyuoQz6L7HmrNXKNxWVC_M0dOCVSPGPeqO5-l8cKsl1vbgj9GU7uRY9GoQ8V6tWpK5tao7YkYlV-vIFCQ0RERyWYEornbeBDkkNW1PSFxDsMqxG87UTGqnedav7VsCBQ?key=GMvoXZw-QYaMXcSYxarNXQ)**

   - Enable the BNPL providers (Affirm, Klarna, Afterpay) you wish to offer

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcWXZs9-5fj0KCO2rlmgixsDmObo_zCwCA1VX_yyBjz7E3g1yvUxw2nRCF3LO1moGHA-1DJq0QZcXmRRCscyQ3QZshV-Apl752L0uRpJWx0oxsV2titS6p9tI5x17b0WQv_weZT?key=GMvoXZw-QYaMXcSYxarNXQ)  

**Note**: If these payment methods are not activating, they are not available for your region/business yet. You can check the product support for the methods [here](https://docs.stripe.com/payments/buy-now-pay-later#product-support)

### **2\. Setting Up Products in :**

   - Go to Payments > Products and add/edit all the products you wish to include in your online store

   - In the product configuration, toggle on the “Include in Online Store” setting, as the BNPL option only works with the online store at the moment  
![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcS7lUsT-h-I1DBNLWomG9HbOMQ7gM218gMVeCZsUvm2iI4HG05OWfPQEnntsvikO6hn1l5gfI-rvRMuzU86mSlRwiG0VCXCvwLxOHgceJvwQ_0w_bbzTHV8Bi3pq5c-TqohduMUA?key=GMvoXZw-QYaMXcSYxarNXQ)

### **3\. Set Up Your E-Commerce Online Store in :**

**Method 1:**    
\- Go to sites > websites

 - Create or edit a website and then open the page editor

   - Add a new element using the “+” button and click on the “Store” category to create your online store  


![](https://assets2.modalsupport.net/1771863368375-image5.png)

**Method 2:**  
Alternatively, you can access the stores tab under sites to create your store from scratch or from available templates.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdDi4-e8koT_-vAxsb6pHo6QCzVqBUd_n5Ob3lSF5p_9kuWEmsbaXkl31knWXvHy65OpLDgSd26qTWw1xQ1LARl9ke6qiSY-hTIae_LII5niRbSYNDcjN2w1TmZnud2tAKAcafk?key=GMvoXZw-QYaMXcSYxarNXQ)

## **Eligibility and Requirements**

### **Geographic Availability:**

BNPL options are supported in specific countries. Ensure your business operates in one of these regions to offer these payment methods. You can check the list of countries by checking the [documentation provided by Stripe](https://docs.stripe.com/payments/buy-now-pay-later)

### **Transaction Limits:**

Each BNPL provider has minimum and maximum transaction amounts. These limits vary by country, so it's important to check the [specific limits for your region](https://docs.stripe.com/payments/buy-now-pay-later)

Provider

Transaction Limit

Affirm

USD 50 - 30,000

Afterpay

USD 1 - 4,000

Klarna

USD 10 - 5000 (varies by customer)

### **Business Categories:**

Your business category must be correctly set in your payment processor (e.g., Stripe) to be eligible for BNPL options. Certain categories may have restrictions or be ineligible for specific BNPL providers.

## **Benefits of BNPL for Your Online Store**

### **Increased Sales:**

Offering BNPL options can lead to higher conversion rates and larger order sizes. Customers are more likely to complete purchases when they have the flexibility to pay over time.

### **Customer Satisfaction:**

BNPL enhances the shopping experience by giving customers more payment options. This flexibility can lead to increased customer loyalty and repeat business.

### FAQs




**Question:** Can I use BNPL for products not included in my online store?

**Answer:** No, BNPL is only available for products listed in the online store. Ensure the “Include in Online Store” toggle is enabled for relevant products.




**Question:** How do I troubleshoot if a BNPL option isn’t working?
**Answer: 

-   Confirm that the provider is enabled in your account.
-   Ensure your business meets transaction limits and category requirements.




**Question:** Can customers outside eligible regions access BNPL options?

**Answer:** No, BNPL is restricted to specific regions. Customers outside those regions won’t see these payment options.




**Question:** Do customers need a Stripe account to use BNPL?

**Answer:** No. Customers can use BNPL through the selected provider (Affirm, Klarna, Afterpay) without needing a Stripe account.




**Question:** Can BNPL be used for in-person payments?
**Answer:** No. Currently, BNPL is **only supported for online store purchases** via Stripe.




**Question:** How do refunds work with BNPL?
**Answer:** You can issue a refund through the **CompanyName** payments tab or your Stripe dashboard just like a regular transaction. The BNPL provider will then automatically adjust or cancel the customer’s remaining installments and refund what they have already paid.