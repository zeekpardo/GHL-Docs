---
title: "Workflow Trigger: Offer Access Granted"
description: "Workflow Trigger: Offer Access Granted"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/B3JHf62amV1cqhVH2MGy"
sourceId: "B3JHf62amV1cqhVH2MGy"
category: "Workflow Triggers"
---

**Workflow Trigger: Offer Access Granted**

Offer Access Granted will activate when a contact is granted any offer. By using this trigger, you now have access to new custom values. You would not use this trigger to provide passwords for a membership offer.

**Important Points:**

-   Offers are created in Memberships > Offers and attach a product (course) to it. Used to grant or offer the course.
-   For **offer access granted** , you would only be able to provide the Email, Login URL, and Offer Title custom values.
-   If you use the **Offer Access Granted Trigger**, keep in mind credentials will not be sent for a workflow credential email (This will send credentials the first time an offer is granted when using the default email template in **Membership** > **Courses** > **Settings**\> **Email Settings**). Credentials will only populate the first time an offer is granted when using the **New Signup** trigger with workflows.
-   You would also add the **New Signup Trigger** to the workflow if login credentials are needed. Credentials will only populate the first time an offer is granted when using the **New Signup trigger** with workflows.
-   **Offer Access Granted** implies an action done by YOU or a workflow giving them permission to access the offer **after** the first time. **New Signup** signifies an action taken by the contact (they filled out a form, made a purchase, etc.) or can be viewed as the first offer granted. Please view our articles on memberships for more information.

### How to Use:

-   Navigate to **Automation** > **Workflows**. Click on **\+ Create Workflow**

![](<https://assets2.modalsupport.net/1763072653251-wf offer 1.jpg>)

-   Add the trigger with a filter for the offer and save.

![](https://assets2.modalsupport.net/1775757517945-image3.png)

-   You can then set up a **Send Email** or **Send SMS action** (or both) to let the contact know that they have gotten access to the offer.
-   Click on the icon for custom values and then navigate to **Course** > **Offer Access Granted** to choose the three custom values:

-   Email
-   Login URL (Magic Link)
-   Offer Title

![](https://assets2.modalsupport.net/1775757540795-image2.png)

![](https://assets2.modalsupport.net/1775757547427-image4.png)

### FAQ




**Question:** What if I don’t filter the Trigger Order Form Submission?
**Answer:** If you don’t filter the Trigger Order Form Submission, the workflow will activate for every purchase made, regardless of the product or page. This can result in unintended actions for purchases unrelated to the specific offer you're targeting.




**Question:** How can I ensure that only the specific offer is granted?

**Answer:** To grant access to a specific offer, make sure to filter the Course Grant Offer action by the exact name of the offer. This prevents the action from giving access to all offers.




**Question:** Can I add multiple actions to the workflow?
**Answer:** Yes, you can add multiple actions to the workflow. This includes sending confirmation emails, adding contact tags, or sending internal notifications. Just click the + sign to add more actions and ensure each is saved properly.




**Question:** What should I do if I want to notify someone internally about the purchase?
**Answer:** To notify someone internally about a purchase, add the “Send Internal Notification” action in the workflow. This allows you to alert team members or departments about the purchase or any related details.




**Question:** What are the benefits for industry-specific offer automation?

**Answer:** It improves personalization, faster onboarding, and better tracking. For example, a restaurant or clinic lead could instantly receive a relevant discount or access package tied to their action.  




**Question:** Can I set an expiration date so the offer is only valid for 30 days?

**Answer:** While the "Grant Offer" action gives immediate access, you can add a **"Wait"** step of 30 days followed by a **"Remove Offer"** action to create a limited-time trial or membership.




**Question:** Can I grant more than one offer in a single workflow?

**Answer:** Absolutely. You can stack multiple "Grant Offer" actions one after another if a single purchase or event entitles a customer to multiple different courses or packages.




**Question:** Why did my student get two emails when I manually granted them an offer?

**Answer:** This usually happens if you have the **Default Membership Emails** turned ON in your _Email Settings_ AND a **Workflow** active for the same offer. To provide a fully branded experience, we recommend turning off the default system emails and using your own custom Workflow emails instead.