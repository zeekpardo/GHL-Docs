---
title: "Workflow Guide: Sending Membership Credentials"
description: "Workflow Membership Credentials/Welcome Email"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/LdHBBk0BTtpU4J2YPi3G"
sourceId: "LdHBBk0BTtpU4J2YPi3G"
category: "Workflow Guides"
---

**Workflow Membership Credentials/Welcome Email**

_Please Note: This guide assumes that your contacts are granted access to the membership offer through another method or workflow._

### **Creating a Workflow to Send the Credentials:**

1.  Navigate to the **Automation** tab and create a new workflow.

![](<https://assets2.modalsupport.net/1764014271506-Captura de pantalla 2025-11-24 145744.png>)

2\. Add a trigger: **New Signup**.

![](https://assets2.modalsupport.net/1775757022632-image1.png)

-   You can add a filter if you want to trigger it for any specific course offer.

3\. Add an action: **Send Email**.

![](https://assets2.modalsupport.net/1775757050452-image4.png)

-   In the email action, click on the custom value option.
-   Select **Course** > **New Signup**.
-   Choose the custom values: **Email** and **Login URL (Magic Link)**.

![](<https://assets2.modalsupport.net/1764014379908-Captura de pantalla 2025-11-24 145921.png>)

**Important Notes:**

-   Users will have the flexibility to set their own passwords, eliminating the need for automated password generation.
-   Users will be redirected to the Set Password page if they try to log in without setting their password.
-   Password fields in the existing templates will not be populated. Users should use the **loginUrl** to set their passwords.
-   The Password custom field will not be visible across all template builders and workflow email options. Users also will not be able to add the password field in their new templates.

### **Creating a Workflow for Granting Offer Access:**

1.  Navigate to the **Automation** tab and create a new workflow.
2.  Add a trigger based on your desired criteria.

![](<https://assets2.modalsupport.net/1764014409946-Captura de pantalla 2025-11-24 150003.png>)

-   For example, an order form submission (on a funnel or website, on a particular page, a product, etc.).

1.  Add an action: **Course Grant Offer**.

![](https://assets2.modalsupport.net/1775757082975-image6.png)

-   Select the offer you want to provide access to.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXe6MhdjSJLmYyo0VfXMwgLZ-ItVC0TKw7WPrvKelkF9tQPwO33vrxIjE0mJJHbaOGCST2hS28zDtGn7WbOPXxVx184BAydVhGMGp2eNZORaXYsGXGn_JLLrq_H52dTtGTNIcWRMshVxALp1MJav-hTeT0o?key=44JNgNyyrRZaC94bJCVk3Q)

-   Select the “**_+_**” button below the Membership Grant Offer trigger- This will pull up multiple actions where you can add specific actions related to the purchase.

-   Select the “**_Send Email button”_** 

**_For example:_** _Making an email that confirms their purchase_ (you can add a custom message) 

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfuZLjWxwdARM7ltlF8Q17qQoTIr1kHvbfweJcC68RonrJ-iCjUl_jHcXCbq70p3pKUA3mWaPT565a0lGBqgNT_ztGzy_edwHeE_5aSY1C5U_hOvkrY0t-MRDeJl52yGtXWY00c7ZAqW-BMrQPGRC7AP-Y?key=44JNgNyyrRZaC94bJCVk3Q)

-   Make sure you click the “**_Save Action_**” button

-   You can also “**_Add Contact Tag_**” (For Example) that they purchased, or any custom note that you want to be tagged on this customer 

![](<https://assets2.modalsupport.net/1764014481551-Captura de pantalla 2025-11-24 150114.png>)

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXc7KPBMRO0CQUoaijJrZEAi7Az0SoQfrzb8w3Q8QTan3ktBnzhYZKmvGbT7A0tJeL7K4_r1iBByu83kC4mAxF_JGlKzXNUBS87j4DYEWAgy2O2Pz5ViXUe2GKuXcPi58Lv9t7cf-YBwxHHCuZcscABOuFGy?key=44JNgNyyrRZaC94bJCVk3Q)

-   If you want someone to know internally that the customer made a purchase you can do so by Selecting “**Send_Internal Notification_**”

-   Click the “**_Custom Values_**” Tab when using an internal email notification and under “**_Contac_**t” go over to the “**_Email_**” option and use this value to identify the contact

-   Once completed select the “**_Save Action_**” button

This will now notify an internal user of your choice.

**FAQs** 




**Question:** What happens if a user tries to log in without setting their password?

**Answer:** If a user tries to log in without setting their password, they will be redirected to the Set Password page. This ensures that they can create a password before accessing the membership content.




**Question:** Can I use a custom password field in the email template when sending login credentials?

**Answer:** No, the password custom field is not available across all template builders and workflow email options. Instead, users should use the login URL (Magic Link) provided in the email to set their password.




**Question:** How can I trigger the workflow to send membership credentials?

**Answer:** To trigger the workflow for sending membership credentials, navigate to the Automation tab, create a new workflow, and add a "New Signup" trigger. You can also filter this trigger to apply to specific course offers if needed.




**Question:** How do I grant access to a membership offer automatically after a purchase?

**Answer:** To grant access automatically, create a new workflow with a trigger based on your desired criteria (e.g., an order form submission). Then, add the "Course Grant Offer" action to provide access to the selected offer.




**Question:** Can I notify internal team members when a customer makes a purchase?

**Answer:** Yes, you can notify internal team members by adding a "Send Internal Notification" action within the workflow. Use custom values to include the customer's email or other relevant information in the notification.




**Question:** What should I do if I want to add a tag to a contact after they make a purchase?

**Answer:** You can add a tag by selecting the "Add Contact Tag" action in the workflow after the purchase trigger. This allows you to label contacts with specific tags, such as "Purchased," for easy tracking and segmentation.




**Question:** Can I customize the email that is sent after granting membership access?

**Answer:** Yes, you can customize the email content by adding a "Send Email" action after the "Course Grant Offer" trigger in your workflow. Include a custom message or additional details relevant to the purchase or membership.




**Question:** Can the workflow handle multiple course offers?
**Answer:** Yes. You can filter triggers or create separate workflows for different course offers, ensuring each user receives the correct credentials and welcome communication for their specific course.




**Question:** How do I test the "New Signup" workflow?
**Answer:** To test this accurately, you must use a completely new email address that has never been a member in your system before. Adding a tag or manually moving a "Test Contact" into the workflow will not populate the Magic Link correctly if that contact is already a known user.