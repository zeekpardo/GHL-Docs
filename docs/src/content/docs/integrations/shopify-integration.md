---
title: "Shopify Integration"
description: "Shopify is a widely used e-commerce platform for online and retail shopping. By integrating Shopify with , you can enhance your e-commerce capabilities in…"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/k2qT4Q8RzVh0scDFFq3R"
sourceId: "k2qT4Q8RzVh0scDFFq3R"
category: "Integrations"
---

Shopify is a widely used e-commerce platform for online and retail shopping. By integrating Shopify with , you can enhance your e-commerce capabilities in several ways, including workflows, and the use of Shopify-specific custom values. Store owners can easily import and sync their products, collections, contacts, orders, and transactions from Shopify to . This simplifies the entire store migration process, enabling seamless integration and allowing users to benefit from advanced marketing tools, such as triggers for orders and payments. Follow these steps to integrate Shopify with :

### Step 1: Create or Login To A Shopify Account  


![](<https://assets2.modalsupport.net/1762973907700-Shopify 1.jpg>)

### Step 2: Enable Private App Development (if already enabled, skip to Step 3.)

-   Once logged in to your Shopify store, navigate to “Apps” from your dashboard.

![](<https://assets2.modalsupport.net/1762973965520-Shopify 2.jpg>)

-   Click “Develop Apps” in the top right of the screen
-   Click "Allow custom app development"

![](<https://assets2.modalsupport.net/1762974035801-Shopify 3.jpg>)

-   **_NOTE:_** If you already enabled the private app development, you’ll be directed straight to the create/develop apps button and won’t need to re-accept the terms/permissions.

### Step 3: Create Your Private App

-   Click to Create an App

![](<https://assets2.modalsupport.net/1762974106760-Shopify 4.jpg>)

-   Enter a name for your app such as “my App” or “Sally’s Shopify Store”, and enter your email address in the appropriate field.

![](<https://assets2.modalsupport.net/1762974184229-Shopify 5.jpg>)

-   Click "Configure Admin API scopes" to configure Admin API integration.

![](<https://assets2.modalsupport.net/1762974264503-Shopify 6.jpg>)

-   Scroll down to "Orders" and enable at least "read\_orders" access
-   Scroll down to "Products" and enable at  least "read\_products" access
-   Click the "Save" button on the top right.
-   Click the "Install app" button on the top right.
-   Click "Install" in the popup window that appears.


Your app is now ready to be integrated.

###   
Step 4: Retrieve the Admin API Access Token for Integration

-   After the installation is complete, you will be able to find the Admin API Access Token under the API Credentials Section.
-   Click “Reveal Token Once” to get access. 
-   Copy the "Admin API access token" by clicking on the clipboard icon or highlighting it all and using the control+c or command+c keyboard shortcut ono your computer.  Keep this password copied, as you’ll need it in the next step.

###   
Step 5: Connecting Shopify to

-   Back in , navigate to Settings > Integrations.
-   Click “Connect” under Shopify.

![](https://assets2.modalsupport.net/1769444288266-image2.png)

-   In the popup window, paste the previously copied Admin API token and type out your Shopify Store URL.

![](https://assets2.modalsupport.net/1769444326864-image12.png)

-   Choose which elements to import (products, collections, contacts, etc.)

![](https://assets2.modalsupport.net/1769444382454-image16.png)

-   Decide what data should sync automatically in the future. The options for syncing include Contacts, Orders, Transactions, Order submitted trigger, Payment received trigger, Products, and Collections.

![](https://assets2.modalsupport.net/1769444604867-image6.png)

-   Click Save to finalize the process. The import and sync process may take some time to complete.

### Important Notes:

-   Taxes are not included when products are imported or synced, meaning tax information won’t be mapped over.
-   Each order will have only one transaction reflected in .
-   Orders synced from Shopify will have their status set as either "Completed" or "Cancelled" based on the Shopify data.
-   When contacts are merged in Shopify, the primary contact will be updated in .
-   If no modifications are made to Shopify’s default SEO settings, the SEO data will be recorded as null when synced to .

**Products imported from Shopify to :**

![](<https://assets2.modalsupport.net/1762974822380-Shopify 11.jpg>)

![](<https://assets2.modalsupport.net/1762974865101-Shopify 12.jpg>)


**Collections imported from Shopify to :**

![](<https://assets2.modalsupport.net/1762974922002-Shopify 13.jpg>)

![](<https://assets2.modalsupport.net/1762974969842-Shopify 14.jpg>)

### Removing Pre-Existing E-Commerce Integrations

The ability to remove pre-existing e-commerce integrations addresses the issue of integrating a single e-commerce store with multiple locations, providing a solution for users who couldn't re-integrate their store if it was already connected to another location. Users can remove an existing integration and re-integrate the same store to a different location if needed. 

**One significant benefit** of this feature is the improved flexibility and control over store integrations, allowing seamless management across various locations. 

**To use this feature**, enter the access token and store name;  

![](<https://assets2.modalsupport.net/1762975059041-Shopify 15.jpg>)


If the store is already integrated, an option will appear to remove the current integration and re-integrate it to the desired location.

![](<https://assets2.modalsupport.net/1762975148081-Shopify 16.jpg>)

### Shopify Orders in Email Campaign - Conversion Metrics (Email ROI for Shopify Orders)

Campaign conversion metrics, including Shopify orders, provide a comprehensive view of how email campaigns drive sales by incorporating Shopify order data into the conversion metrics.

**How to Use**

Step 1: Sync Shopify Orders

1\. Integrate Shopify with :  

-   If you haven’t already integrated your Shopify store, navigate to Settings > Integrations.

-   Follow the Shopify integration guide above to complete the setup.  
    Ensure the “Sync Shopify Orders” option is checked to enable order syncing.

![](<https://assets2.modalsupport.net/1762975346862-Shopify 17.jpg>)

Step 2: Navigate to Email Campaigns

1.  Access Email Campaign Statistics:  

    • Go to the Marketing section.  
    • Navigate to Email Campaigns.

![](<https://assets2.modalsupport.net/1762975610043-Shopify 18.jpg>)

-   Select the campaign for which you want to view statistics.

![](<https://assets2.modalsupport.net/1762975751202-Shopify 19.jpg>)

Step 3: Explore Conversion Metrics

1.  View Revenue Attribution:  

    • In the Email Campaign Statistics, scroll to the “Conversion Metrics” section.

![](<https://assets2.modalsupport.net/1762975844142-Shopify 20.jpg>)

-   Here, you will find detailed statistics on the revenue generated from the email campaign, now including Shopify orders.

![](<https://assets2.modalsupport.net/1762975913941-Shopify 21.jpg>)

![](<https://assets2.modalsupport.net/1762975954537-Shopify 22.jpg>)

**Benefits**

-   Improved Accuracy: By incorporating Shopify orders, the conversion metrics provide a more complete and accurate picture of your email campaign’s effectiveness.
-   Seamless Integration: Shopify orders are now visible under the Orders section, ensuring all sales data is consolidated and readily available for analysis.
-   Enhanced ROI Tracking: This update allows you to show clients exactly how much revenue your email campaigns are generating, providing clear evidence of the campaign’s value.

**FAQ:**




**Question:** Can I re-import data if I miss something during the initial sync?  
Answer**: Yes, disconnect and reconnect the integration to reimport any data you missed.




**Question:** What happens to merged contacts in Shopify?  
Answer**: The primary contact from Shopify will be updated in \_\_**CompanyName**.




**Question:** Are taxes synced along with products?Answer**: No, taxes are not mapped during the import process.




**Question:** Can I disable the syncing of specific elements after integration?Answer**: Yes, you can manage and adjust which elements continue to sync after setup.




**Question:** What triggers are available for automation?  
Answer**: You can set up triggers like "Order Submitted" and "Payment Received" for enhanced automation.




**Question:** What should I do if Shopify orders are not appearing in ?
**Answer:** Verify the integration is active, order syncing is enabled, and the API token is valid. Reconnecting the integration often resolves syncing issues.




**Question:** Can I connect one Shopify store to multiple locations in ?

**Answer:** A Shopify store can only be actively integrated with one location at a time. However, you can use the "Remove Pre-Existing Integration" feature to disconnect it from one location and re-integrate it into another.




**Question:** Can I connect one Shopify store to multiple locations in ?

**Answer:** A Shopify store can only be actively integrated with one location at a time. However, you can use the "Remove Pre-Existing Integration" feature to disconnect it from one location and re-integrate it into another.