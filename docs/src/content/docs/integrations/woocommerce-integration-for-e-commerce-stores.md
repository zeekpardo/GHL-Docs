---
title: "Woocommerce Integration for E-commerce stores"
description: "The WooCommerce integration feature enables store owners to effortlessly migrate and manage their WooCommerce store data, including contacts, orders,…"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/uhoggx6fZecCEKI7s7us"
sourceId: "uhoggx6fZecCEKI7s7us"
category: "Integrations"
---

The WooCommerce integration feature enables store owners to effortlessly migrate and manage their WooCommerce store data, including contacts, orders, transactions, products, and collections. By syncing WooCommerce data, users can also leverage automated marketing tools like order and payment triggers to enhance store management.

**_Key Features and Benefits_**

-   **Data Syncing for Easy Management**: Effortlessly import and sync contacts, orders, transactions, products, and collections from WooCommerce, making data organization seamless.
-   **Automation Triggers**: Utilize order-related triggers, such as “Order Submitted” and “Payment Received,” to automate workflows and enhance customer experience.
-   **Customizable Sync Settings**: Configure sync settings to enable or disable the continuous import of specific data, ensuring your setup aligns with your store’s needs.
-   **Improved Guest Checkout Handling** Automatically create contacts for guest checkout customers to ensure no potential lead is missed.
-   **Improved Product Import**: Only simple and variable products are imported, ensuring that product data is organized and accurate.
-   **Error Handling**: In case of authentication errors (401, 403, 404), the system will automatically set the account to reconnect and send email instructions for reconnection.

### **Important Notes**

-   **Customer Type Import:** Customers assigned the roles of “customers” or “subscribers” will be imported.
-   **Contact Creation with Disabled Customer Sync:** If Contact sync is turned off but Order sync is enabled, contacts will still be created for orders.
-   **Guest Checkout**: Orders placed by guests are created as contacts but do not sync further.
-   **Order Status Mapping**: WooCommerce status updates follow these mappings in the system:

-   Completed or Refunded → Completed
-   Cancelled or Failed → Cancelled
-   All other statuses → Pending

-   **Order Details:** The Orders page includes a Woocommerce subtype:

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdgrD_SodeGMtjLGhqrS6d6mHzGIbNuuENMz7U2tQx5hNQ-zuccPwdYWoqMSSEqE5DoQ-CDM76w8NfHYVvkPQqv6RRZbHBKvaiYi3emFoVxNZ_QontKawhS9twnISyB18pCqU7r0g?key=ohkw0IMTclXjrM0jjf-hBg)

-   **Product Import Limitations**: Only **Simple** and **Variable** product types are imported. Other product types will be excluded. Products with zero price or no variants will also not be imported.
-   **Product Visibility**: The "Include in Online Store" toggle will only be enabled for published products. Unpublished products will not be imported.
-   **Source of Truth**: WooCommerce will serve as the source of truth for product information, meaning that changes made in WooCommerce will be reflected in the synced data.
-   **Category Import Limitations**: Only categories associated with products will be imported. Unlinked categories will be excluded.
-   **Product & Category Deletions**: Deletions of products or categories in WooCommerce will not be synced to your platform.

### **How to Use WooCommerce Integration**

**1\. Access Integration Settings**

-   Navigate to **Settings > Integration > WooCommerce** within your account to access the WooCommerce integration.

![](https://assets2.modalsupport.net/1769447486038-image1.png)

**2\. Connect Your WooCommerce Store**

-   Click the **Connect** button. A modal will prompt you to enter your WooCommerce store URL (ensure it follows the format [https://yourstore.com](https://yourstore.com) without a trailing slash).  


![](https://assets2.modalsupport.net/1769447528310-image2.png)

**3\. Select Data to Import**

-   After connecting, you will be directed to the **Import Elements** screen, where you can select the data you want to import from your WooCommerce store. You can choose to import **Contacts**, **Orders**, **Transactions**, **Products**, and **Collections**.

![](https://assets2.modalsupport.net/1769447678028-image9.png)

**4\. Configure Syncing Settings**

-   On the next screen, choose the data you wish to continue syncing from WooCommerce to your account in the future. Available syncing options include **Contacts**, **Orders**, **Transactions**, **Payment Received Triggers**, **Products**, and **Collections**.  


![](https://assets2.modalsupport.net/1769447773201-image3.png)

**5\. Complete the Setup**

-   After configuring the desired import and sync settings, click **Save** to initiate the process and approve the Woocommerce permissions. The setup may take some time depending on your data volume.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXekDG9frpHwpeuv1TD3r60TGNnQUBi8M5DZj9KPPbCIzhYTej0RsMv8H9jZNflNrjcj9xv3sEeatltTJAXThpTP30FgdWn9ZDt2bK6lLnIhBsZGBDszf2oLZocNOEv8aXIREfpVRtGSLVvkNgW12EiNy5Q?key=ohkw0IMTclXjrM0jjf-hBg)

**6\. Manage Sync Settings**

-   To adjust sync settings later, simply return to the **Settings** screen to enable or disable specific elements for future orders.

**7\. Reimport Data if Needed**

-   If additional data needs importing, disconnect and reconnect the integration to start a fresh import of any missed information.

## **Use Case: Automating Your WooCommerce Store Management**

Imagine a store owner who wants to manage their WooCommerce data while automating tasks like order confirmations and payment tracking. With the WooCommerce integration:

1\. Contacts, orders, and transactions are synced automatically, saving time on manual entry.

2\. Automation triggers send personalized order confirmation emails upon order placement.

3\. Payment confirmations trigger thank-you emails and reminders for pending payments.

**Order Submitted trigger:**

![](https://assets2.modalsupport.net/1764183160378-image8.jpg)

![](https://assets2.modalsupport.net/1764183211877-image10.jpg)

**Payment received trigger:**

![](https://assets2.modalsupport.net/1764183236459-image6.jpg)

### **Pro Tips**

-   **Optimize Triggers for Automation:** Leverage "Order Submitted" and "Payment Received" triggers to automate tasks such as email notifications, order confirmations, and follow-ups.
-   **Monitor Guest Checkouts:** Ensure guest checkout contacts are captured to expand your lead database, but note that these will not sync for future updates.
-   **Use WooCommerce Status Mappings:** Familiarize yourself with how statuses map to (e.g., “Completed” in WooCommerce becomes “Completed” in ).
-   **Keep Data Clean:** Regularly review and update your imported data to maintain consistency and accuracy across platforms.

### **FAQ's**




**Question:** What types of data can I import from WooCommerce?
**Answer:** You can import Contacts, Orders, Transactions, Products, and Collections to easily manage customer information and track sales.




**Question:** Does the integration support guest checkouts?
**Answer:** Yes, guest checkouts will create contact records; however, these accounts won’t sync updates.




**Question:** What if I want to reimport data?
**Answer:** Simply disconnect and reconnect the integration to reimport any missed data.




**Question:** How are order statuses mapped?
**Answer:** Completed and Refunded orders are marked as Completed, Cancelled, and Failed as Cancelled, and other statuses as Pending.




**Question:** What product types are imported during the WooCommerce integration?
**Answer:** Only **Simple** and **Variable** product types are imported. Other product types will be excluded.




**Question:** Can I import unpublished products from WooCommerce?
**Answer:** No, only published products from WooCommerce will be imported.




**Question:** What happens if I have authentication errors during the integration?
**Answer:** If an authentication error occurs (e.g., 401, 403, or 404), the account will enter a reconnect state, and an email will be sent with instructions on how to resolve the issue.




**Question:** Will product and category deletions be synced from WooCommerce?
**Answer:** No, deletions of products or categories in WooCommerce will not be synced to your platform.




**Question:** If I delete a contact in my account, will it be deleted in WooCommerce?

**Answer:** No. Deletions are not bidirectional. Deleting a record in your account will not affect your WooCommerce database. However, if that customer makes a _new_ purchase in the future, the integration will recreate them as a new contact in your account.