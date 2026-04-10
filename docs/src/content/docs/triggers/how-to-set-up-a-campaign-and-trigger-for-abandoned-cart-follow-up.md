---
title: "How To Set up a Campaign and Trigger for Abandoned Cart Follow Up"
description: "Important Note: Campaigns and Triggers (in the Automation tab) are deprecated. Check out our article “Workflow: Abandoned Cart” to learn how to do it in…"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/tIxp5AjhFJGfzAiEWTlX"
sourceId: "tIxp5AjhFJGfzAiEWTlX"
category: "Triggers"
---

**Important Note: Campaigns** and **Triggers (in the Automation tab)** are deprecated. Check out our article “**Workflow: Abandoned Cart”** to learn how to do it in Workflows!  

Abandoned cart sequences are when someone has filled out the first step of the two-step order form but didn't complete the payment step. This allows you to follow up directly with them through communication of your choice.

### **Step 1: Create a campaign for the abandoned cart follow-up sequence.**

-   Navigate to campaigns and create a new campaign for your Abandoned Cart sequence.
-   Add 1 or more events and customize the communication you wish to send, including a link to the page as a "last chance" or "did you forget something?" type of notification.
-   **Be sure to set up a delay in the campaign.** The trigger will be set up to fire off immediately upon the submission of the sale, which doesn't give the client any time to actually take the one-time offer. But by putting a delay in the campaign, you allow them time to take or decline the OTO. The below example shows a 30-minute delay, but you can customize this to your liking:

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXde7B_WYsI6WVLVaoXxBMMYyXDzfW-3rufQg0VRWKzYq2zlGLZDEN1RSmttT4K_TteFEJnqPqmbEXgKELCmWvUoXSk3sz_CnVAp11Fh_DaNb19E1KJOkOfFXwrA5RY8_NoLJbY-VSQoTha8T9CGUJCyoaE?key=554saj2GOtpxnlvbGpr2bQ)

-   Save and publish the campaign.



### **Step 2: Create a trigger for the Abandoned Cart campaign.**

-   Set up a new trigger for the Two Step Order to trigger the automation.
-   The first filter will be submission type: opt-in.
-   For the next two filters, specify the funnel and funnel step you wish to apply this for.
-   The action for the trigger will be **add to campaign**. You'll use the Abandoned Cart campaign that you created.
-   You should also add an action to **apply a tag**, such as an Abandoned Cart, to the client.
-   Save and activate the trigger.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeK2yCvoDFB7yk5ydF0oNOpRbNAxKvJ-1qCQ5ZnWdi7DeexwE1PkR65BJqUN_-Mz8Q-iwXuVwBliOXZT9WqQ5c485dAKptGjMEEQHSezPsdQeaY-63draHS4KERje_DTeG4C3hfYtt51KsLVQ68Fl-Bz_tp?key=554saj2GOtpxnlvbGpr2bQ)



### **Step 3: Create a trigger for removing contacts from the Abandoned Cart campaign.**

-   If customers do make a purchase, you'll want to remove them from the abandoned campaign.
-   For what triggers the rule, choose the Two Step Order, submission type: sale, and specify the funnel and funnel page.
-   The first action will be to **remove from the campaign**, and you'll specify the Abandoned Cart campaign created in Step 1.
-   The second action will be to remove the tag you previously added in step 2, such as "Abandoned Cart", from the contact.

-   Add any other actions you want to take upon a purchase occurring
-   Save and activate the trigger.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdnMSsm8KhMN9A_bVOsXEmCaU_VmTzF55rfk5esxKF_ov-SHxSuAigJnIS1GP9dpHfNc44CGFaMHYtvnhLekjIgF3dsYsE5vTm1iaXvBjlizQAYV1iHfVRewvxADGZqbR8u3NBZ5bs-GZjZ7kBTWBYZ_ik?key=554saj2GOtpxnlvbGpr2bQ)

### **FAQ**

**1\. What is the purpose of an Abandoned Cart sequence?**

-   The Abandoned Cart sequence helps you follow up with customers who filled out the first step of the order form but didn't complete the payment step, allowing you to encourage them to finish their purchase.

**2\. Why should I add a delay in the Abandoned Cart campaign?**

-   Adding a delay in the campaign gives customers time to complete the one-time offer (OTO) before receiving follow-up communications, making the follow-up more effective and less intrusive.

**3\. How do I stop the Abandoned Cart sequence if a customer completes their purchase?**

-   You can create a trigger that removes customers from the Abandoned Cart campaign if they complete their purchase, ensuring they don’t receive unnecessary follow-up messages.

**4\. Can I customize the communication in the Abandoned Cart campaign?**

-   Yes, you can customize the communication sent during the Abandoned Cart sequence, including adding personalized messages, links, and timing delays to suit your needs.