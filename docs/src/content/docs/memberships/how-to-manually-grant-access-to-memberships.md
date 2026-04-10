---
title: "How to Manually Grant Access to Memberships"
description: "You may want to manually grant access to a membership. Perhaps you are migrating over to and you don’t want to charge customers who’ve already paid, or you…"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/wcF2RBiv5fZRXoM238vS"
sourceId: "wcF2RBiv5fZRXoM238vS"
category: "Memberships"
---

You may want to manually grant access to a membership. Perhaps you are migrating over to and you don’t want to charge customers who’ve already paid, or you just want to give it to a particular person for free. If it’s a membership that has a paid option, follow these steps to grant access manually:

**Please Note:** You can grant an offer manually from the contact page but this is not the best option if you are using a workflow to send login credentials. This will work correctly if you enable the templates in Membership > Settings > Email Settings. This can be fixed by sending a magic link and a password reset from the contact area (see screenshot below). View our articles on magic links and membership emails for more information.

![](https://assets2.modalsupport.net/1774546442213-image18.jpg)

**Key point**: If a user already has access to the membership area (e.g., from a previous course or product), granting access to a new offer might not trigger the sending of login credentials again. The system recognizes them as existing members. To handle this situation effectively, consider creating a separate workflow for existing members to notify them about their new access or remind them to reset their password if needed.

## **Using Workflows to Facilitate Manually Granting Access**

**Step 1: Setup Product.** Create a new product or duplicate an existing one. (You can follow our other articles on creating a product.)

-   To duplicate an existing membership product, clone the product.

![](<https://assets2.modalsupport.net/1769184623297-Captura de pantalla 2026-01-23 111015.png>)

**Step 2: Setup Offer.**

Create a new offer and select the product. (You can follow our other tutorials if you need help setting up a new offer).

**NOTE:** Offers can be created directly within the Products tab.

![](https://assets2.modalsupport.net/1763393392133-image.png)

![](https://assets2.modalsupport.net/1763393494305-image.png)

-   Add your product to an existing offer by clicking on the pencil icon

![](<https://assets2.modalsupport.net/1769184720514-Captura de pantalla 2026-01-23 111154.png>)

![](<https://assets2.modalsupport.net/1769184743635-Captura de pantalla 2026-01-23 111217.png>)

-   Click on the menu dots and checkout on the offer page.

![](<https://assets2.modalsupport.net/1769184767413-Captura de pantalla 2026-01-23 111241.png>)

-   Copy the link from the checkout page and save it for later

![](https://assets2.modalsupport.net/1763393795194-image.png)

**Key point:** When setting up offers, it’s advisable to turn off the default membership email settings in Membership > Settings > Email Settings. This will avoid issues with missing login credentials, particularly for existing members. Instead, manage these through custom workflows to ensure reliability.

**Step 3: Create a Tag for Identification**

-   Under Settings, create a tag such as “Offer A - Free Membership Access”

![](https://assets2.modalsupport.net/1763393954737-image.png)

**Step 4: Setup a Workflow Trigger for the Offer.**

**_Please Note:_** _You can also leave the trigger blank which will require you to use the manual option for adding a contact to a workflow. This is in the contact area (see screenshot below)_

![](<https://assets2.modalsupport.net/1769185067652-Captura de pantalla 2026-01-23 111741.png>)

_We will be using the Contact Tag trigger and the Membership First Signup trigger in this example._

**_Please Note:_** _You would also add the Offer Access Granted Trigger to the 2nd workflow if login credentials are irrelevant. Credentials will only populate the first time an offer is granted when using the Membership New Signup trigger with workflows._

### Workflow 1:

-   Add the trigger Contact Tag then filter for the added tag and save.

![](<https://assets2.modalsupport.net/1769185117434-Captura de pantalla 2026-01-23 111831.png>)

-   Add the Course Grant Offer action to add the contact to the offer and include the product.

**Key point:** Using a temporary tag to manage the status of membership access can help streamline the process, especially when dealing with multiple steps or workflows. This tag can be removed once all necessary actions are completed.

![](https://assets2.modalsupport.net/1763394197458-image.png)

-   Publish and Save

![](https://assets2.modalsupport.net/1763394230998-image.png)

### Workflow 2:

-   Add the New Signup trigger to the second workflow

![](https://assets2.modalsupport.net/1763394249438-image.png)

-   Add the Send Email action and use a template that includes membership custom values

![](https://assets2.modalsupport.net/1763394288797-image.png)

-    Or build one within the workflow email builder.

![](https://assets2.modalsupport.net/1763394334576-image.png)

**Key point:** Consider sending a notification to existing members that a new course or product has been added to their membership, with instructions on how to access it.

-   Publish and save when finished

![](https://assets2.modalsupport.net/1763394359057-image.png)

**Step 4: Add the Tag.**

To grant the offer to one or multiple contacts add the tag in the contact area

**_Please Note:_** _This can be done when importing a list, or by adding to existing contact record(s)._

**_NOTE:__Membership New Signup_** _signifies an action was done by the contact– they filled out a form, made a purchase, etc or can be viewed as the first offer granted._ **_Offer Access Granted_** _implies an action done by YOU or a workflow permitting them to access the offer after the first time._

**Key point:** To avoid the common issue of blank membership details being sent out, it is recommended to create custom workflows for both new and existing members. This ensures that login details are correctly sent to users, regardless of their previous membership status. If you are sending login details from an email within a workflow, make sure the trigger is New Sign up  

**FAQ:** 





**Question:** What happens if I manually grant access to a membership to someone who already has access?

**Answer:** If a user already has access to the membership area from a previous product or course, the system might not send login credentials again. To address this, create a separate workflow to notify existing members of their new access or prompt them to reset their password if needed.  




**Question:** How can I ensure that login credentials are sent when manually granting access to a membership?

**Answer:** It's advisable to turn off the default membership email settings in Membership > Settings > Email Settings and use custom workflows instead. This approach helps avoid issues with missing credentials, particularly for existing members.  




**Question:** Can I use the same workflow to grant access to multiple members at once?

**Answer:** Yes, you can add a tag to multiple contacts in the contact area, which will trigger the workflow to grant them access to the membership. This can be done when importing a list or by manually adding the tag to existing contact records.  




**Question:** What is the difference between the 'Membership New Signup' and 'Offer Access Granted' triggers?

**Answer:** The 'Membership New Signup' trigger is used when the action is performed by the contact, such as filling out a form or making a purchase. In contrast, the 'Offer Access Granted' trigger is used when you or a workflow grants the offer after the first time.  




**Question:** How can I manage the status of membership access when using workflows?

**Answer:** Consider using a temporary tag to track the status of membership access during the workflow process. This tag can be removed once all necessary actions are completed, helping streamline the management of multiple steps or workflows.  




**Question:** What’s the best practice for handling both new and existing members?
**Answer:** Create separate workflows one for new signups using the “Membership New Signup” trigger (to send credentials), and another for existing members using “Offer Access Granted” to notify them of new access without resending credentials.  




**Question:** If I manually grant an offer, can I set a custom password for the user?

**Answer:** You cannot set a specific password for them, but you can trigger a **Password Reset** email from the Contact Card. Alternatively, once they have access, they can change their password themselves within their member profile settings.