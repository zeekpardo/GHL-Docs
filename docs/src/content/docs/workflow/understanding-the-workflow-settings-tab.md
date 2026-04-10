---
title: "Understanding the Workflow Settings Tab"
description: "Understanding the Workflow Settings Tab"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/WmeOPyvnwafADmEI8Srg"
sourceId: "WmeOPyvnwafADmEI8Srg"
category: "Workflow"
---

**Understanding the Workflow Settings Tab**

Effective workflow management is essential for successful marketing automation. The Workflow Settings tab is the backbone of your communication strategies, enabling you to fine-tune various aspects of your automation system. This article will guide you through the key features and benefits of the Workflow Settings tab, as well as provide step-by-step instructions on how to optimize these settings for your business needs.

**Key Features and Benefits**

-   **Communication Control:** Set specific time windows and time zones for sending messages, ensuring your communications are targeted and effective.
-   **Personalized Messaging:** Customize sender details for a more personalized approach, enhancing customer relationships and brand identity.
-   **Contact Management:** Enable or disable re-entry into workflows and stop workflows based on contact responses to prevent message overload.
-   **Efficient Conversation Management:** Automatically mark messages as read to keep your conversation tabs organized and clutter-free.
-   **Error Monitoring:** Receive automated email notifications and view errors in a dedicated "Needs Review" tab, ensuring your workflows run smoothly without interruptions.

## How to Use Workflow Settings

**1\. Accessing the Workflow Settings Tab**

-   Navigate to the Automation Tab > Workflows.
-   When editing an existing workflow, click on the "Settings" tab within the Workflow Builder interface.

![](https://assets2.modalsupport.net/1765824196948-image3.png)

**2\. Configuring Communication Settings**

-   **Time Window:** Choose between 'Any Time' or 'Specific Time' to send messages. If you select 'Specific Time,' you can customize the days and times to target your audience during peak engagement hours.
-   **Timezone:** Select 'Account Timezone' for consistent communication within a specific location or 'Contact Timezone' for global outreach tailored to each recipient’s timezone.
-   **Sender Details:** Set a default 'From' name and email address, with the option to override these details for individual actions.

**Custom Values:** You can use custom values in the From Name and From Email fields by clicking the tag icon. This feature allows you to dynamically insert details, such as the assigned user's name or email, to personalize the sender information across workflows. It's particularly useful in team settings, where emails need to appear as though they are sent by the contact's assigned representative or account manager.

-   **From Number:** Choose a specific number for SMS communications. This provides better management for organizations with multiple phone numbers used across different departments, regions, or purposes, improving message personalization and response rates.
-   **Mark as Read:** Enable this setting to automatically mark outgoing automated messages as read, keeping your conversation tabs tidy and organized.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdk51LHU2H-BCXLmYLgwndd5eVdmYQI9-_QRf-UehXJezwqfbkzIydmKZkLksCtHaA5eNCpds4EaGyWYpgc1kNmvVesMlOP9pma9q82ElEenklQkDm8xhqRouuy7NokVJXbnZnWry_3zzafRoEcgg?key=xG3-FDwwXIjDljcdDpnnuA)

**_Note: The sender email and name will override the Sender Name and Email set in the email action_**

**Use Cases for the “From Number” Field:**

-   Organizations with different phone numbers for departments like Support, Sales, and Operations can now assign specific workflows to use each designated number.
-   An agency with multiple phone numbers for marketing purposes can choose which outbound number to use for each workflow.
-   For businesses operating across multiple regions, using local numbers for SMS communication can enhance recipient trust and boost response rates.

**3\. Managing Contact Settings**

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcwtjrKH0WiG5C_jEjlHuWcvzmyhszpG0CaT6p6GSx2lAKoE7vqA7rHEvB-tGayonDSboEvcd4HgiT1G8ujONLbln4KmIEb-KfB-6ikvXVtXP7p0mAwVelOOTpMxkxy4njqiyCsH_iH__1lx1ASLrWZkS5oyb7XPG6LkQcy?key=xG3-FDwwXIjDljcdDpnnuA)

-   **Allow Re-Entry:** Toggle this option on or off depending on whether you want contacts to re-enter the workflow after completion. This is useful for recurring campaigns or periodic updates.
-   **Stop on Response:** Enable this option to end the workflow for a contact once they respond to a message, ensuring a personalized and efficient approach.
-   **Allow Multiple Opportunities in Workflows:** This option enables workflows to handle multiple opportunities for the same contact. This is especially useful in scenarios where a single contact has multiple active opportunities, as each opportunity will trigger its own workflow execution independently.

-   **How it Works:**

-   **Separate Execution:** Each opportunity will trigger a unique workflow execution, ensuring that updates to one opportunity don't interfere with others.
-   **No Workflow Restarts:** When an opportunity is updated, the workflow will continue from the current stage, using the updated opportunity values without restarting.

**Example Use Case:** Imagine you're a real estate agent with a client, John Doe, who is interested in two properties: "1 Madison Avenue" and "2 Nice Street."

![](https://assets2.modalsupport.net/1762978457340-image1.png)

 **With this feature:**

-   If "Allow Multiple Opportunities" is **OFF**, only the first updated opportunity will trigger the workflow, and subsequent opportunities will be skipped.
-   If "Allow Multiple Opportunities" is **ON**, both properties will trigger their respective workflows independently, ensuring each opportunity is handled properly.

**Best Practices for Configuring Workflow Settings**

-   For campaigns targeting global users, use the Contact Timezone feature to send messages at appropriate times.
-   Enable **Allow Re-Entry** for recurring workflows, such as renewals or onboarding updates.
-   Utilize **Stop on Response** for sales and support workflows to pause automations once the user responds.
-   Always verify your Sender Email to enhance email deliverability and ensure messages land in the inbox.
-   For urgent workflows where timing flexibility is crucial, avoid using the Specific Time setting.

### FAQ




**Question:** Can I use different settings for different workflows?
**Answer:** Yes, each workflow can be customized with unique settings based on your specific needs.




**Question:** What should I do if I choose the wrong settings?
**Answer:** You can update the settings at any time. The changes will affect new entries into the workflow.




**Question:** How do I set the best time window for sending messages?
**Answer:** It depends on your audience and goals, but generally, it’s best to send communications when your audience is most active.




**Question:** Can I prevent a contact from re-entering the workflow after completing it?
**Answer:** Yes, you can toggle off the "Allow Re-Entry" option to prevent contacts from re-entering the same workflow multiple times.




**Question:** How does the "Allow Multiple Opportunities" setting work?
**Answer:** When this setting is enabled, each opportunity associated with a contact will have its own workflow execution. This ensures all opportunities are managed independently and updates to one opportunity do not affect others.




**Question:** Does Stop on Response work if the contact replies to a previous, unrelated message?

**Answer:** No, Stop on Response only triggers if the contact replies to a message sent directly from the workflow.




**Question:** Can Workflow Settings override specific actions in the workflow?

**Answer:** No. Workflow Settings apply at the workflow level, but some steps (like email) can override defaults.




**Question:** What happens to existing contacts if I change the Timezone or Time Window?

**Answer:** Changes only apply to new contacts entering the workflow. Existing contacts retain prior settings.  




**Question:** Can I use "Stop on Response" for some actions but not others?

**Answer:** No, "Stop on Response" is a global setting for the entire workflow. If you need a contact to continue receiving certain updates even after they reply, you should move those specific actions into a separate workflow that does _not_ have "Stop on Response" enabled.




**Question:** Can I use dynamic data for the sender’s name and email?

**Answer:** Yes. By clicking the **tag icon** in the Sender Details section, you can use **Custom Values**. This allows you to dynamically insert the name or email of the specific team member assigned to that contact, making the communication feel more personal.




**Question:** How can I track if there are issues or glitches in my workflows?

**Answer:** You can monitor workflow health through the **"Needs Review"** tab, which displays errors. Additionally, you can set up automated email notifications to alert you when a workflow execution encounters an issue.