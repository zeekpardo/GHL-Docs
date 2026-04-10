---
title: "Workflow Action: Find Contact"
description: "The \"Find Contact\" workflow action is an integral tool for businesses using . It automates the process of searching and identifying contacts within your…"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/kTaKBeeXZSTL2LY6ydv0"
sourceId: "kTaKBeeXZSTL2LY6ydv0"
category: "Workflow Actions"
---

The "Find Contact" workflow action is an integral tool for businesses using . It automates the process of searching and identifying contacts within your database using specific criteria. This guide will walk you through what the action does, its benefits, how to configure it, and provide real-world use cases to illustrate its potential.

## **Key Features & Benefits**

-   **Enhanced Workflow Efficiency**: Automates the contact search process, significantly saving time and reducing the chance of manual errors.
-   **Flexible Search Capabilities**: Ability to search using standard and custom fields allows for precise and tailored contact searches.
-   **Dynamic Integration**: Compatible with various triggers such as Inbound Webhook and Marketplace Triggers, making it adaptable to different scenarios.
-   **Advanced Matching**: Capability to perform searches based on external references, like "Stripe Customer ID," enhancing the tool's utility.
-   **Improved Customer Engagement**: Ensures that communications and follow-ups are accurately targeted, which enhances customer interactions.
-   **Comprehensive Data Scanning:** Prevents missed matches by scanning beyond primary fields to include secondary contact information in the search.

## **Configuring the "Find Contact" Workflow Action**

### **Step-by-Step Configuration**

**1- Access Workflow Settings**: Navigate to the 'Automation' section in your CRM and either create a new workflow or edit an existing one.

![](<https://assets2.modalsupport.net/1764020698459-Captura de pantalla 2025-11-24 164451.png>)

**2- Add the Action**: Click the "+" icon and select the "Find Contact" action from the dropdown menu.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcGGNfC12jgnnkbmz_A8MBFmEIn2hv_U87tD2SxE05hREou7I1SWGIFByWEl0UCUKvjRMS3tf6lOir6Mfpqingpok-z4WgU-ROm5mbZL--Q_qAQhxuWfzzAC6KDBmIvJGI4ZDxw?key=J4YIpVltcKF8NmWg6pF0v-Tl)

**3- Name Your Action**: For clarity, name it descriptively, such as “Find Contact by Email.”

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXd1bqU8davFxq-gMcft9LIQ90JQHZJ5YOHFUu33M5aYMzrc8gzizIbbMMGlypvNvT78qKdP2wH8WtA8-c3BHZA3ANCKEf2kV_LKs67F0AzGN2Q9zqe9XEAa22WCU3Nc15hpBRSbSg?key=J4YIpVltcKF8NmWg6pF0v-Tl)

**4- Select Fields**:

-   **Standard Fields**: Choose from options like First Name, Last Name, Email, and Phone.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdQCBF8sac9JppRTdunxwrrpyiUZR4z7hIwS2SEnUnrio_0eVWGdOoRqH4klB3rw6O_UEsMS-CZUcZcnzBAKiTFmVBKferr6gKyLAwaJLgkNXlQyKmamxGpaTyJ3FeYwDfTOG39hw?key=J4YIpVltcKF8NmWg6pF0v-Tl)

-   **Custom Fields** (Optional): Add fields like “Customer ID” or “Subscription Tier” if they are pertinent to your search criteria.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXf5am7QMZLoFiyanJ8Xe9ILOlECaoYF6AtnKPuvzV8EOzi_MVPHsODdjpcT6wD9uobFvdRIYrPVmY2r9F1GUImDcsdyENVLNffEuI30kZ8U-jO-wP1GuG_tH4-Alib--zKR6F72?key=J4YIpVltcKF8NmWg6pF0v-Tl)

**5- Enable Secondary Search:** If you select a Phone or Email field, you can check the box to "Include additional phones or emails." This allows the system to look for matches within secondary contact data.

![](https://assets2.modalsupport.net/1771338666167-image4.png)

![](https://assets2.modalsupport.net/1771338685548-image7.png)

**6- Configure Triggers**: Set up triggers like "Inbound Webhook" or ‘form submitted’ to activate the action based on specific activities.

![](<https://assets2.modalsupport.net/1764020781338-Captura de pantalla 2025-11-24 164611.png>)

**7- Test and Save**: Before finalizing, test the configuration with sample data to ensure accuracy.

**8- Publish the Workflow**: Activate the workflow to start automating the contact search process.

![](<https://assets2.modalsupport.net/1764020808513-Captura de pantalla 2025-11-24 164638.png>)

## **Use Cases**

-   **Follow-Up Communication**: After a contact submits their email via a web form, the action can find the contact and trigger a personalized follow-up email.
-   **Secondary Contact Matching:** If a customer reaches out using a secondary email address not listed as their primary, the system can still identify them and link the activity to their existing record.
-   **External Reference Matching**: When a webhook sends a "Stripe Customer ID", the action matches this ID with a contact in the CRM, updating their payment status and triggering a confirmation email.
-   **Data Validation for Marketing Campaigns**: Ensures contacts meet certain criteria before they are included in a promotional email campaign.
-   **Onboarding Assistance**: Finds a contact who has signed up and assigns them to an onboarding specialist for immediate follow-up.
-   **Lead Scoring Integration**: Updates a contact's lead score based on data from a lead scoring system and notifies the sales team for prioritization.

## **Branching in the "Find Contact" Workflow Action**

The "Find Contact" workflow action includes branching capabilities that allow users to define different paths based on whether a contact is found. This functionality enhances the adaptability and precision of managing workflows.

### **Implementation**

-   **Branch Flow Usage**: The action allows for the configuration of branching paths that respond based on the search results, enabling different actions depending on whether a contact is found or not.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXc94-VjhAOKwPGRk1KxVmzyL7h8THNwMqna9A7MU3G6MO6AOz7MQyXqZexxY66DJZOMqZ6PLVkwq5wr9kBItWog9hhH8mHlCX78JhUh4phGkdIuMHtpPvjoH5-zZb6msGW40nxh?key=J4YIpVltcKF8NmWg6pF0v-Tl)

-   **Integration in Workflows**: This branching, once enabled, is seamlessly integrated into both existing and new workflow configurations, ensuring that all users can benefit from this feature without any need for special updates.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcy4YUEF0Wa-AThm4eSz4o6VJuG0DU8nabqlwBZ-Y0lsuOsIgLY777PbN1_o3MmOt_z3k9Tbqtypb3BuujnbBb8AAScTNp8gpI0T3V2fEAlGn_aqwt6OuODWNoCn_cugbCGpVJ42A?key=J4YIpVltcKF8NmWg6pF0v-Tl)

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXf8rr7TXotjpnzZNaerKHsC0qHEAfGSILJ-t1YJZGzeEby-im_-WmRRjYxzv_7EoS_MM1j0xPwReIXmu2UXnGX0TvGXtw5FFnvQSo5ryKoY_RyuwXsHDp6nZEycKLCzzxvO4EeXBg?key=J4YIpVltcKF8NmWg6pF0v-Tl)

### **Benefits of Branching**

-   **Customized Workflow Responses**: Users can tailor workflows to handle different outcomes effectively, such as taking specific actions when a contact is not found.
-   **Streamlined Workflow Logic**: Define clear steps for various outcomes, enhancing the workflow’s effectiveness and response to data conditions.

## FAQs




**Question:** What happens if the contact is not found?
**Answer:** The workflow may skip subsequent steps or execute a fallback action like creating a new contact record.




**Question:** How does external reference matching work?
**Answer:** External identifiers stored in custom fields are used by the "Find Contact" action to locate the corresponding contact in the .




**Question:** Can this action be combined with other workflow actions?
**Answer:** Yes, it can be integrated with actions like "Send Email" or "Update Contact" for more complex workflows.




**Question:** Is this action compatible with all workflow triggers?
**Answer:** Yes, it works with a variety of data-driven triggers, enhancing its versatility across different scenarios.




**Question:** Can multiple fields be used for the search?
**Answer:** Absolutely, configuring multiple fields refines the search criteria, ensuring more precise results.




**Question:** What is branching in the Find Contact action?
**Answer:** Branching allows the workflow to split into different paths based on whether a contact **is found or not found**. Each path can trigger unique actions depending on the result.




**Question:** Can I search for contacts using information other than name or email?
**Answer:** Yes. Beyond standard fields, you can use **Custom Fields** such as "Customer ID," "Subscription Tier," or external references like a "Stripe Customer ID" to locate specific contacts.




**Question:** What is branching in the Find Contact action?  
**Answer:** Branching allows the workflow to split into different paths based on whether a contact is found or not found. Each path can trigger unique actions depending on the result.  




**Question:** Can I search for contacts using information other than name or email?

**Answer:** Yes. Beyond standard fields, you can use **Custom Fields** such as "Customer ID," "Subscription Tier," or external references like a "Stripe Customer ID" to locate specific contacts.




**Question:** What happens if the search finds multiple contacts that match the criteria?

**Answer:** In the event of multiple matches, the system typically identifies the contact that was **most recently updated**. To ensure the best results, it is recommended to use unique identifiers like Email, Phone, or a specific Customer ID as your primary search criteria.