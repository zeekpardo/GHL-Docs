---
title: "Workflow Action: Course Revoke Offer"
description: "Workflow Action: Course Revoke Offer"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/dj4R1T1t4dvIKMjxGnvW"
sourceId: "dj4R1T1t4dvIKMjxGnvW"
category: "Workflow Actions"
---

**Workflow Action: Course Revoke Offer**

The _Course Revoke Offer_ Workflow Action allows you to create a workflow that automatically revokes a Course offer from any contact that is added to the workflow. This article will give an overview of how to create a workflow using the _Course Revoke Offer_ Workflow Action.

### **Step 1:** Start a new workflow or edit an existing one

![](https://assets2.modalsupport.net/1764097177958-image4.png)

### **Step 2:** Set up applicable Workflow Trigger(s). We have multiple articles available to explain the setup of each of the Workflow Triggers. Feel free to review our articles on these for more information on setting these up.

**_Pro Tip:_** You can use any Workflow Triggers to trigger the _Course Revoke Offer_ Workflow Action or you can leave this workflow without any triggers.

### **Step 3:** Setting up the _Course Revoke Offer_ Workflow Action

-   Click on the “+” symbol below the trigger to add an action

![](https://assets2.modalsupport.net/1764097242633-image5.png)

-   Under Actions, select **Course Revoke Offer** in the **Actions** section or use the search feature. Upon selection, the Action setup menu will appear
-   (_Optional_) You can change the workflow builder display name of this action using the textbox below **Action Name**. Note that this will only affect the display name within the workflow builder and has no other impact on the content or functionality of this Workflow Action.
-   Under **Offer** select which Course Offer you want to have revoked from contacts that get added to this workflow.

![](https://assets2.modalsupport.net/1764097314937-image1.jpg)

-   Press **Save** in the bottom right corner of the Action setup menu
-   **Additional Options:**
    -   Optionally, set up additional parameters such as sending a notification email to the contact upon access revocation or tagging the contact for future follow-up actions.

### **Step 4:** Press **Save** in the top right corner of your browser to save the workflow

-   If your Workflow is ready to be enabled, make sure the toggle switch under **Save** is set to **Publish**
-   Be sure to test your Workflow to make sure it is set up correctly using the **Test Workflow** button next to the **Publish** toggle switch. 
    -   For an in-depth overview of Workflow Testing see our article, “Using the Testing Features in Workflows

![](https://assets2.modalsupport.net/1764097348517-image3.png)

Now your Workflow is set up and ready to go with the _Course Revoke Offer_ Workflow Action!

**Example**

**Scenario:** You want to automatically revoke access to the "Advanced Marketing Strategies" course when a user's contact tag is updated to 'expired.'

**Workflow Setup:**

-   **Trigger:** Contact Tag. **Filter** = Tag Added. **Tag** = expired.
-   **Action:** Revoke Course Offer  

    -   **Name:** "Revoke Access to Advanced Marketing Strategies"
    -   **Course:** "Advanced Marketing Strategies"
    -   **Revocation Condition:** Subscription Expiry
-   **Action:** Send email  

    -   **Subject:** "Remove Access to Advanced Marketing Strategies"
    -   **Template:** "Advanced Marketing Strategies"
    -   **From email and Name:** Default to the Location's email and Name

**Outcome:** When the contact tag is updated to "expired," the user's access to the "Advanced Marketing Strategies" course is automatically revoked, ensuring that only active subscribers can access the course content.

![](https://assets2.modalsupport.net/1764097389998-image2.png)

## **FAQ’s**  




**Question:** Why is it important to test the workflow after setting it up?
**Answer:** Testing the workflow ensures that the action correctly revokes the course offer from the intended contacts. This step helps identify and fix any issues before the workflow goes live, ensuring the workflow operates smoothly.




**Question:** What happens if I do not set the workflow to Publish?
**Answer:** If the workflow is not set to Publish, it will remain inactive and will not execute even if the triggers and actions are correctly set up. Make sure the toggle switch under Save is set to Publish to activate the workflow.




**Question:** Can I edit the Course Revoke Offer action after it has been set up?
**Answer:** Yes, you can edit the Course Revoke Offer action by returning to the workflow and adjusting the action settings, including the selected Course Offer or the action’s display name.




**Question:** What are some use cases for the Course Revoke Offer Workflow Action?
**Answer:** Common use cases include revoking access for contacts who no longer meet specific criteria, managing course access for expired trials or subscriptions, or removing offers from contacts who have canceled their membership.




**Question:** Can I add multiple Course Revoke Offer actions in the same workflow?
**Answer:** Yes, you can add multiple Course Revoke Offer actions in the same workflow if you need to revoke different course offers from contacts based on various conditions.




**Question:** What should I name my workflow when using the Course Revoke Offer action?
**Answer:** Naming your workflow descriptively, such as “Revoke Expired Course Access” or “Remove Course Offers,” helps keep your workflow organized and easily identifiable.




**Question:** Where can I find more information on setting up Workflow Triggers and Actions?
**Answer:** For more information, refer to related articles that provide detailed instructions on setting up various Workflow Triggers and Actions. These resources will help you optimize your workflow configuration and ensure all components are correctly set up.  




**Question:** How do I test my Course Revoke Offer workflow before making it live?
**Answer:** You can test your workflow by clicking the "Test Workflow" button next to the Publish toggle switch. This allows you to simulate the workflow to ensure everything functions correctly before going live. For more information on workflow testing, refer to the article “Using the Testing Features in Workflows.”




**Question:** If I delete a course product, do I still need to use the Revoke action?

**Answer:** It is always safer to revoke the offer first. Deleting a product can sometimes leave "ghost" access in a contact's profile. Using the **Course Revoke Offer** action ensures the database is clearly updated to show the contact no longer has permission to view that content.




**Question:** Does revoking an offer delete the contact's progress within the course?

**Answer:** No. Revoking an offer merely removes the user's permission to view and access the content. If you decide to re-grant the offer later via another workflow or manual action, the contact's previous progress and completed lessons will typically be preserved and available to them once they log back in.




**Question:** Can I use "Subscription Expiry" as a specific condition for revocation?

**Answer:** Yes. As shown in the example, you can set a trigger for when a subscription expires (or a tag is added) and follow it with the Course Revoke Offer action to ensure only paying members have access.