---
title: "Negative Line Priced Items for Invoices"
description: "The ability to add negatively priced items in invoices is a new feature designed to enhance flexibility and compliance. This feature is particularly useful…"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/kBYWDpGJrl7Dvzd67yfc"
sourceId: "kBYWDpGJrl7Dvzd67yfc"
category: "Payments"
---

### **Introduction**

The ability to add negatively priced items in invoices is a new feature designed to enhance flexibility and compliance. This feature is particularly useful for clients who need to capture information on advances, returns, or buybacks for legal and accounting purposes. This guide will walk you through the steps to use this feature effectively.

### **How-to Steps**

1.  **Create an Invoice:**
    -   Navigate to the invoice creation section in your account.
    -   Click on the option to create a new invoice.
2.  **Add Products on the Go:**
    -   While creating the invoice, you can now add products directly without pre-saving them in your product list.
    -   Enter the product details, including a negative price if applicable.

![](https://lh7-us.googleusercontent.com/docsz/AD_4nXeh2LwNrVQODDivdLD3UxHnfYxBhaSwSuI7fSqbUjnzNqnUuxQhOvalz-3YANoxmZ_qy8bYUpLaFIFlhWbq5-pnrhf9KRmK93nOhE4apDxgyGsqE5J64DoI48hlUOroYxNOwOL9OoxgfurLf093oVC4Z_u9?key=wcxEXf1w0smju11yBsgtXQ)



1.  **Finalize the Invoice:**
    -   Complete the invoice by adding any additional items or details.
    -   Review the total, ensuring the negative prices are correctly subtracted from the final amount.

![](https://lh7-us.googleusercontent.com/docsz/AD_4nXfu3UwBjbnlvbKeGv04aDuHpyDbxLKZ2Br1gsXuIOwTOYRrgCbi9oEuejwUhuEHTirqdJGeE9IaYgESGz6UJaBVlhjd5Ao7kCwqnse-QkftOBfkUL7nt8NOJ1E1Nb8xKM8fWe9nRbVAsELOmiWx9Gc1cbjR?key=wcxEXf1w0smju11yBsgtXQ)



1.  **Save and Send:**
    -   Save the invoice. Note that products with negative prices cannot be saved for later use.
    -   Send the invoice to your client as usual.

**_Note:_**_Businesses using Stripe can now offer additional payment methods_

_IDeal - popular in Netherlands_

_Bancontact - common payment method in Belgium_

_Sepa Direct Debit - common payment method in European Union_

### **Benefits**

-   **Increased Flexibility:**
    -   Allows users to be more creative with their invoicing, accommodating a wider range of transaction types.
-   **Compliance:**
    -   Provides a simple yet effective way to stay compliant with legal requirements by accurately reflecting advances, returns, or buybacks in invoices.

### **Pro Tips**

-   **Non-Saveable Items:**
    -   Remember that products with negative prices cannot be saved for future use, ensuring that they are only used when necessary.
-   **Tax Considerations:**
    -   Products with negative prices cannot have taxes assigned to them to avoid breaking existing APIs. Make sure to verify the tax calculations on the final invoice.

### **FAQ/Use Cases**

-   **Why can’t I save products with negative prices?**
    -   This is to ensure that negatively priced items are only used when needed and to maintain system integrity.
-   **Can I apply taxes to negatively priced items?**
    -   No, taxes cannot be assigned to negatively priced items to prevent issues with existing APIs.
-   **How does the calculation work with negative prices?**
    -   The calculation remains the same as before, with the negative prices subtracted from the final total, ensuring accurate invoice totals.

### **Examples**

-   **Return of Goods:**
    -   If a client returns goods worth $50, you can add a negative-priced item of -$50 to the invoice to reflect the return.
-   **Advance Payment Adjustments:**
    -   For adjusting advance payments, add the advance amount as a negative price to the invoice.