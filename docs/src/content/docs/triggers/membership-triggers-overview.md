---
title: "Membership Triggers Overview"
description: "Note: The triggers feature has now been deprecated. Please, check our article, “Membership Triggers Overview for the Workflow Builder” to learn how to do this…"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/x58y2y0J5gT1tzktuKdX"
sourceId: "x58y2y0J5gT1tzktuKdX"
category: "Triggers"
---

**Note:** The triggers feature has now been deprecated. Please, check our article, “**Membership Triggers Overview for the Workflow Builder**” to learn how to do this on Workflows.

he membership triggers are an important part of . Using triggers, you can automate several features of , using “if, then” scenarios so that “if” something occurs, “then” one or more action is triggered to occur. We have other tutorials that provide great overviews on triggers, and in this article, we will focus specifically on the membership triggers.



### **Step 1: Understanding the Membership Trigger Options**

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfCxPZKmFaxckpQ44Cf09wrFOxeUyrmiN5tU-M4WjBOSwssMh7QQvnIsv8sD-pAb1acA_i5Zvjh-uu5cXtyEC4immObtLSGRbZQM5BxWo-7o-PIa4veEUeducvad6WE2yiqct5Fq85rwd1T2Zp2KqD47IPU?key=xqI6i0U5tt2Z6W7brA7k1Q)

-   **Category Started:** Runs when a category of specific products starts
-   **Category Completed:** runs when a category of specified product gets completed
-   **Lesson Started:** Runs when a lesson starts
-   **Lesson Completed:** Runs when a lesson gets completed
-   **New Signup:** A customer or lead has subscribed for the membership. This can be a product or offer; it’s any kind of signup for your membership area.
-   **Offer Access Granted:** Someone is given access to a specific offer
-   **Offer Access Removed:** Someone has access to an offer removed/revoked
-   **Product Access Granted:** Someone is given access to a specific product
-   **Product Access Removed:** Someone has access to a product removed/revoked
-   **Product Completed:** The product has been completed
-   **Product Complete:** Runs when product is completed
-   **User Login:** The user logs in to the membership





**_NOTE:_** You may want to define the filters by clicking “add filter” in order to specify which product/offer your trigger applies to. If you just set up “Offer Access Granted” to fire off an action, this will apply for any offer. If you add a filter and choose a specific product/offer, the trigger will only run for that specific product or offer.



## **FAQ’s**

**4\. Can I specify which product or offer a trigger applies to?**

Yes, you can use filters to specify which product or offer the trigger applies to. When setting up your trigger, click “add filter” to select the specific product or offer. Without a filter, the trigger will apply to all products or offers.

**5\. What happens if I don’t add a filter to my membership trigger?**

If you don’t add a filter, the trigger will apply to all products or offers. For example, if you set the trigger to “Offer Access Granted” without specifying a particular offer, the action will be triggered for any offer where access is granted.

**6\. What kind of actions can I trigger?**

You can choose from several actions, such as adding or removing tags, starting or stopping campaigns, sending emails, updating contact information, and more. These actions are performed automatically based on the trigger you set up.

**7\. Can I create multiple actions for a single trigger?**

Yes, you can set up multiple actions for a single trigger. For example, when a user completes a product, you can send them an email, update their tag, and add them to a new campaign—all within the same trigger setup.

**8\. When should I use the "User Login" trigger?**

The "User Login" trigger is useful for tracking when a user logs into the membership area. You might use this to send welcome messages, track active users, or trigger engagement actions based on login frequency. 

**9\. Credentials are not populating when sending a welcome email from workflow?**

Ensure that the trigger you're using is "New Signup." If you use any other trigger, the login information, such as the email and magic URL, will not populate correctly. Therefore, it's crucial to confirm that the trigger is set to "New Signup.