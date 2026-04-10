---
title: "Workflow Trigger: Subscription"
description: "The Subscription Trigger allows users to automate processes based on subscription status changes, such as creation, trial activation, or cancellation."
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/aP13ETzjLYJZncfv1tK5"
sourceId: "aP13ETzjLYJZncfv1tK5"
category: "Workflow Triggers"
---

The Subscription Trigger allows users to automate processes based on subscription status changes, such as creation, trial activation, or cancellation.

## How to Use the Subscription Trigger:

### Step 1: Start a new workflow or edit an existing one

Navigate to the workflow section within the platform and either create a new workflow or select an existing one to edit.

![](<https://assets2.modalsupport.net/1761816235741-unnamed \(18\).png>)

### Step 2: Creating and Editing the Trigger

-   Click on "Add New Workflow Trigger" to initiate the trigger setup process.
-   Select "Subscription Trigger" from the available triggers in the menu.
-   Optionally, modify the display name of the trigger for easier identification within the workflow builder.

![](<https://assets2.modalsupport.net/1761816299525-unnamed \(19\).png>)

-   Under Filters, define the specific subscription events that should trigger the workflow.
-   The status filters include:

Active

Cancelled

Expired

Failed

Incomplete

Overdue

Paused

Scheduled

Trial

Unpaid

-   Customize filters as needed, such as filtering by product or subscription status.
-   Save the trigger to finalize the setup.

![](<https://assets2.modalsupport.net/1761816349321-unnamed \(20\).png>)

### Step 3: Set up applicable Workflow Action(s)

-   After setting up the trigger, define the actions that should be automated based on subscription events.
-   Choose from a variety of workflow actions available within .
-   Configure each action according to your specific requirements to streamline subscription management processes.


**_NOTE: We have multiple articles available to explain the setup of each of the Workflow Actions. Feel free to review our articles for more information on setting these up._**

### Step 4: Save and Test the Workflow

-   Press "Save" in the top right corner of your browser to save the workflow.
-   When ready, enable the workflow by setting the toggle switch to "Publish."
-   Test the workflow using the "Test Workflow" button to ensure it is set up correctly and functioning as intended.

![](<https://assets2.modalsupport.net/1761816375765-unnamed \(21\).png>)

**_Pro Tip: Utilize any workflow actions to be triggered by the Subscription Trigger or leave the workflow without any actions if preferred.__NOTE: For an in-depth overview of Workflow Testing, see our article, “Using the Testing Features in Workflows.”_**

### Example

A typical use case for the Subscription Trigger is automating customer communication. For example, when a customer's subscription changes from trial to active, an automated welcome email can be sent to boost engagement and satisfaction. Similarly, if a subscription is canceled, a follow-up email can be triggered to request feedback or offer re-engagement incentives.

**Key Features of Subscription Trigger:**

-   Automate actions based on subscription status changes.
-   Trigger actions for subscription creation, trial activation, or cancellation.
-   Utilize subscription information in emails for personalized communication.
-   Craft tailored messages to welcome, retain, or offer special incentives to subscribers.

## Enhanced Workflow Automation:

-   Define actions based on subscription events to streamline processes.
-   Utilize conditionals to customize actions within workflows.
-   Access subscription information within the email builder for personalized communication.

### FAQ's




**Question:** What is a Subscription Trigger, and how does it work?  
**Answer:** A Subscription Trigger is an automation tool that initiates specific actions based on changes in a subscription's status. This includes events such as subscription creation, trial activation, or cancellation. When a subscription event occurs, the trigger activates a predefined workflow, allowing you to automate tasks such as sending welcome emails, offering discounts, or updating records.




**Question:** How do I set up a Subscription Trigger in my workflow?  
Answer:**

1.  **Start a New Workflow or Edit an Existing One:**
    -   Navigate to the workflow section within your platform and either create a new workflow or select an existing one to edit.
2.  **Create and Edit the Trigger:**
    -   Click on "Add New Workflow Trigger."
    -   Select "Subscription Trigger" from the menu.
    -   Optionally, rename the trigger for easier identification.
    -   Define the specific subscription events to trigger the workflow (e.g., creation, trial activation, cancellation).
    -   Customize filters if needed (e.g., by product or subscription status).
    -   Save the trigger setup.
3.  **Set Up Workflow Actions:**
    -   After configuring the trigger, add and configure the actions to automate based on subscription events.
    -   Choose from available workflow actions and set them up according to your needs.
4.  **Save and Test the Workflow:**
    -   Press "Save" to save your workflow.
    -   Enable it by setting the toggle switch to "Publish."
    -   Test the workflow using the "Test Workflow" button to ensure proper functionality.




**Question:** Can I customize the Subscription Trigger for different subscription events?
**Answer:** Yes, you can customize the Subscription Trigger to respond to various subscription events such as creation, trial activation, or cancellation. Additionally, you can set up filters to narrow down the events based on specific criteria like subscription status or product type.




**Question:** What actions can I automate using the Subscription Trigger?
**Answer:** You can automate a range of actions, including:

-   Sending welcome emails to new subscribers.
-   Offering special incentives or discounts to trial users.
-   Notifying your team of subscription cancellations.
-   Updating your records with subscription details.
-   Triggering follow-up emails or surveys based on subscription activities.




**Question:** Can I set up multiple Subscription Triggers within a single workflow?
**Answer:** Yes. Multiple triggers can be configured for different subscription events to handle various scenarios within the same workflow.




**Question:** What is the difference between an "Expired" and a "Cancelled" status?

**Answer:** A **Cancelled** status usually means the customer (or an admin) manually stopped the subscription, but they might still have access until the end of the billing period. **Expired** means the time has completely run out, and the customer no longer has access to the service or product.




**Question:** Can I use logic to change what happens based on different subscription events?

**Answer:** Yes. You can utilize **conditionals** (If/Else steps) within your workflow to customize actions. For example, you could branch the workflow to send one email if the status is "Trial" and a different one if the status is "Active."