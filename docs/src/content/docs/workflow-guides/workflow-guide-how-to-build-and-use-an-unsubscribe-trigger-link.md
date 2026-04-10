---
title: "Workflow Guide: How to Build and Use an Unsubscribe Trigger Link"
description: "In this article, you will learn how to build and use an unsubscribe link. You can insert the link into any email or SMS to give your contacts the ability to…"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/817INYyl6HJXWT1X9s5w"
sourceId: "817INYyl6HJXWT1X9s5w"
category: "Workflow Guides"
---

In this article, you will learn how to build and use an unsubscribe link. You can insert the link into any email or SMS to give your contacts the ability to unsubscribe from your communications. Follow these steps to build an Unsubscribe link with a Funnel/Landing page and trigger link:

### **Step 1: Create your Unsubscribe funnel page**

-   Go over to Sites on the left > Funnels at the top.
-   Navigate to your Funnel and create the page you want customers to see when they click your Unsubscribe link.
-   Create a new funnel step called **Unsubscribe**.
-   Set the path to something such as **/unsubscribe**.
-   Once the page is created, click Edit to customize the page however you’d like within the Funnel Builder.
    -   It can be as simple as one column and row with a headline that says “You’ve been successfully unsubscribed.” You can further customize this however you wish with additional text, colors, a logo, etc.

![](https://assets2.modalsupport.net/1765898670306-image4.png)

-   Save the funnel page.
-   Copy the URL of the Unsubscribe page you just created (you’ll need it in future steps). To copy it, click the icon with the arrow pointing to the top right corner, and it’ll be the URL you’ll see in the browser bar.
-   You can paste it into a new browser tab to preview the page if you wish. 

**_NOTE_:** If you’ve not yet configured a domain, check out our tutorials on the topic before completing this step.

### **Step 2: Set up the Trigger Link**

-   Navigate to Marketing on the left > Trigger Links at the top.
-   Click “Add Link”.
-   Name the Trigger Link and paste the URL of your Unsubscribe page. 

**![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfwanaTW5fKV2os-Sq17forle3GudJyJ8L3-zEBVr_bOQu2VDQk0HUUJrPMGkgUgmwq9XtHASo0s9KSYcPCGgS3QtTrc7wzyAqvhoO0AU5JQlsU-AXtwp9TlzqV63WmGixtd303E8TCBA7e5HFR8Zvu1pjL?key=ppQmYGhh1s_9xYQZyua6Dw)**

-   Save to confirm your changes.

### **Step 3: Create a Workflow Trigger**

-   Navigate to Automation > Workflows > Create Workflow > Start from Scratch. 

![](https://assets2.modalsupport.net/1765898742047-image15.png)

-   Add a Workflow Trigger: **Trigger Link Clicked**. You will need to define the filter to the specific trigger link you created as the Unsubscribe link so it fires off the action only for that particular trigger link. 

![](<https://assets2.modalsupport.net/1763668074336-Captura de pantalla 2025-11-20 144748.png>)

-   For the first action, click the + and add 'Set contact DND.' Then, you will select 'enable contact DND' from the dropdown menu. 

![](https://assets2.modalsupport.net/1773156910318-image9.png)

**Note:** You can also enable DND for specific channels only.

-   Save the workflow and publish it. 
    -   **_NOTE:_** You can add additional actions to the workflow if you wish. For example, you could add a contact tag that the lead unsubscribed, you could add a step to remove them from all workflows, etc. 

### **Step 4: Add your Unsubscribe Link to Email or SMS Communication**

You can use the Unsubscribe link in any campaign, bulk action, or one-off email or SMS communication. 

-   Navigate to the email or SMS editor for the specific email or SMS you wish to update. (This can be within a Workflow, Trigger, or Campaign. It can also be a one-off or bulk-action email or SMS.)
-   Within the editor for the email or SMS, type out the text you want to insert the link in, such as “Click here to Unsubscribe.”
-   Highlight the text, click on the hyperlink icon, then, add the Unsubscribe funnel step URL.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeThGNHe3dm6ev6aGepHOKqzCtPxZKMTAIHrGIA8p2WdChqqIiOisM1_DWwoW5uo0Cv8j4jKf92EwQrJ7yqCJLtStSOo0IVtfZaoBy1zdCwf3C_U0BodQJIu2UPnXusuB2nAOtroLRZUE8G19Pd0mrGoYRv?key=ppQmYGhh1s_9xYQZyua6Dw)

-   You can also highlight the text, and then, use the Trigger Link icon to auto-populate the trigger link that connects to that URL. 

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcP0oDjojptG_y6hz-E6QzGcHSzjd-CiEFEI4Cyl_7NJqIWWgAmCmCEfUIyem6owAyq1s9u8jhAjF2kpiLHCjs-3uypWddrLwdu7emWiDopnYWHIkgNshnwfhvxi7IqJ02LVO3vlBR7shDhaYdaV45Y6K4?key=ppQmYGhh1s_9xYQZyua6Dw)

-   Save your email/SMS template or send your email/SMS if it’s a one-off.

## **Quick Resubscribe Link in Unsubscribe Success Message**

Now, if a user accidentally unsubscribes, they can easily opt back in by clicking the resubscribe link. This action will instantly remove their email from the Do Not Disturb (DND) list.

### **How to add aResubscribe Link in Unsubscribe Success Message**

**1. Go to Email Marketing:**

-   Click on Marketing on the left and Emails at the top.

**2\. Create and Send a Campaign:**

-   Create a new email campaign and send it to a dummy contact.

**3\. Click the Unsubscribe Link:**

-   Open the email sent to the dummy contact and locate the unsubscribe link.
-   Click on the unsubscribe link to opt out of receiving further emails.

**4\. Use the Resubscribe Link:**

-   After unsubscribing, check for the success message which may include a resubscribe link.
-   Click on the resubscribe link in the success message to re-enable receiving emails.

These steps ensure that you can manage subscriptions effectively using your platform's email marketing features.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcE-R756To09Hdf4Hjyw16GxGagK-dxqrzQN2w6NYKXfAgmUWBG25A8bnWNwVy1zJpk7nmLCcVf6tknnAzdqtPJcmhvZDhwUuBtvRBG19ognicA_nke089kUIuzGFiTcC3kJJuaL01PrNax65oA6i92IrGj?key=ppQmYGhh1s_9xYQZyua6Dw)

5\. Check the DND section in contacts.

![](<https://assets2.modalsupport.net/1763668516479-Captura de pantalla 2025-11-20 145509.png>)

**Note:**📋

Users re-opting it may still appear under unsubscribed in campaign statistics

### **Pro Tips for Setting Up and Using Unsubscribe Links**

1.  **Test Your Funnel Before Publishing:** Always test the unsubscribe funnel by clicking on the link as a dummy user to ensure the process works seamlessly from start to finish.
2.  **Use Clear and Friendly Language:** Customize the unsubscribe success page with a polite and reassuring message, such as "You’ve been successfully unsubscribed. If this was a mistake, you can resubscribe below."
3.  **Track Unsubscribes for Better Insights:** Add a tagging action in the workflow to categorize contacts who unsubscribe. This can help in future segmentation and analysis.
4.  **Resubscribe Option Visibility:** Make the resubscribe link prominently on the success page to encourage accidental unsubscribers to opt back in easily.
5.  **Audit Your DND List Regularly:** Periodically check the Do Not Disturb (DND) list for accuracy and to ensure it reflects the latest contact preferences.

### **FAQ’s**




**Question:** Can I customize the success message for unsubscribers?
**Answer:** Yes, you can fully customize the unsubscribe success page in the Funnel Builder. Add a headline, message, or even a resubscribe link for users to opt back in if they change their minds.




**Question:** What happens if a user unsubscribes but wants to resubscribe?
**Answer:** Users can click the resubscribe link included in the success message to re-enable communications. Their contact DND status will be updated automatically.




**Question:** Will unsubscribed users still show in my campaign statistics?
**Answer:** Yes, users who re-opt it may still appear under "unsubscribed" in campaign statistics. However, they will be removed from the DND list and eligible for future communications.




**Question:** Can I limit unsubscribing to specific channels, such as email or SMS?
**Answer:**  Yes, you can enable DND for specific channels in the workflow settings, allowing contacts to unsubscribe from one type of communication while remaining subscribed to others.




**Question:** How do I ensure compliance with unsubscribe laws?
**Answer:** Always include an unsubscribe link in your emails and SMS. Additionally, provide clear instructions and ensure unsubscribes are processed promptly to maintain compliance.