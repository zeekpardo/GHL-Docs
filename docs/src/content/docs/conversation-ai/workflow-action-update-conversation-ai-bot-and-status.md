---
title: "Workflow Action: Update Conversation AI Bot and Status"
description: "Workflow Action: Update Conversation AI Bot and Status"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/wnmu3vVAcmTbxdXVsvlk"
sourceId: "wnmu3vVAcmTbxdXVsvlk"
category: "Conversation AI"
---

**Workflow Action: Update Conversation AI Bot and Status**

Effortlessly manage and automate your AI bot interactions with the "Update Conversation AI Bot and Status" workflow action. This feature allows users to assign specific bots to contacts and update their statuses (Active or Inactive) automatically, streamlining communication and enhancing workflow efficiency.

**Overview of the Feature** The "Update Conversation AI Bot and Status" action empowers you to:

-   Assign a specific Conversation AI bot to individual contacts.
-   Update the bot’s status based on workflows or triggers, enabling tailored interactions.
-   Simplify bot management across communication channels like SMS, Facebook Messenger, and email.

**Key Benefits:**

-   Saves time by automating repetitive tasks.
-   Improves workflow efficiency by assigning bots dynamically.
-   Ensures precise control over bot interactions based on triggers and conditions.

**Step-by-Step Guide**

**1\. Setting Up the Workflow Action**

1- Navigate to Automations on the left and workflows on the top right to access your Workflow Builder.

![](https://assets2.modalsupport.net/1766064974069-image6.png)

2- Add a new action and select "Update Conversation AI Bot and Status."

![](https://assets2.modalsupport.net/1774463728894-image1.png)

3- Configure the action by:

-   Selecting the desired bot.
-   Setting the bot’s status to Active or Inactive.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfMVMj-Jx-Mrp3OvizRmNb-QzAD5cnOAdrVJvAZU2HOjhzf0U-l1Bs1KNqbruHe9f1aqsTCBoOilnXTFwhUraM-eAKBkKI2ZQA4TplttT09ltrpftjpsxbxqLhshVQz4UCNGGxPkg?key=Q1of3I39BrwNZlKCQu5xlA)

-   **If set to inactive> Reactivate Bot After**: Specify the time duration after which the bot should be reactivated (e.g., after a certain number of hours, days, or minutes).
-   **Reactivation Time (Value)**: Set the exact time in the desired unit (e.g., 24 hours) after which the bot should be reactivated.
-   **Reactivation Time Unit**: Choose the time unit for reactivation, such as **minutes**, **hours**, or **days**.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXflz15v8PAyvwLmIYD68pVf0ex8x945ADTZ8rD7n4pTqnqL3h3ISDR4b2xO5t45Yu60A3higxBwBtqn7L8KM82rAjgzhnCXtjLOb1A6r7eWiHoRYkhG5-AaYdigTA3oVZx8GiCCTw?key=Q1of3I39BrwNZlKCQu5xlA)

**2\. Assigning Bots Dynamically**

-   Use triggers like "Customer Replied," "Payment Received," or "Form Submitted" to automate bot assignments.
-   Filter by conditions or tags (e.g., "Call Booked") to ensure precise targeting.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXc1spM-OGTDOGgKMEZfKS3YpGA2Efm11DyB-xz_W0Ke0JW_FgmlayXhsCMJLWkekjXoyA5uluDiW8GnCJeKWKit1otHFWR-xozafnkSi5oVaS8_UwlWhQFWkcyPf-wiTQXkceGDuw?key=Q1of3I39BrwNZlKCQu5xlA)

**3\. Configuring for Specific Channels**

-   Verify the assigned bot has the corresponding channel enabled (e.g., Facebook Messenger).

Note: **Keep Same**: Selecting "Keep Same" means that no changes will be made, and the current bot will remain in place.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeLBuZ4CQTbkPb69_LkVDwOl7bVcLwxVKzZ2P5Lm3sp_Q17X6D6DS5rzaE73hl6Pnj0J2ABatZfMNPA4ymliRcfFD_cmrtkviymt9FV5m4TuN_-tS98x7wq_ipfaFPdFtdJgdRJ?key=Q1of3I39BrwNZlKCQu5xlA)

-   Assign bots to specific communication channels using branching logic.

**4\. Publishing the Workflow**

-   Once configured, save and publish the workflow.
-   Monitor the bot’s interaction in the conversation tab to ensure it’s functioning as intended.

**Use Cases**

**Example 1: Assigning Bots Based on Tags**

-   Scenario: Assign a bot to contacts tagged with "Call Booked."
-   Solution: Use the "Contact Added with Tag" trigger, assign the bot, and set the status to Active.

![](<https://assets2.modalsupport.net/1764187653349-Captura de pantalla 2025-11-26 150724.png>)

**Example 2: Dedicated Bot for Specific Channels**

-   Scenario: Assign a bot for SMS interactions.
-   Solution: Use the "Customer Replied via SMS" trigger and configure the action to assign the SMS bot.

![](<https://assets2.modalsupport.net/1764187679170-Captura de pantalla 2025-11-26 150752.png>)

**Example 3: Automating Bot Activation for Payments**

-   Scenario: Activate a bot only for paying customers.
-   Solution: Use the "Payment Received" trigger to assign the bot and set it as Active.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXe4eCA9JXmqvOhWolsEpmpXtJJivjy39uszXr7Q9KxFBfWCSawGMj0RA5DELiQQ5s-UldeUI8m2it4lVyFhCIb7VpiJkD3j38G2jXStGyZSSCLNaAi3nr-Okf2-kRVgwdvecZiZ?key=Q1of3I39BrwNZlKCQu5xlA)

**Example 4: Bot for Live Chat Interactions**

-   Scenario: Assign a bot for handling Live chats.
-   Solution: Use the "Customer replied" trigger to activate the Messenger bot.

![](<https://assets2.modalsupport.net/1764187930297-Captura de pantalla 2025-11-26 151203.png>)

![](<https://assets2.modalsupport.net/1764187953915-Captura de pantalla 2025-11-26 151223.png>)

**Key Notes**

-   Ensure the bot’s channel is enabled for seamless interaction.
-   This action branches immediately after the assignment, not after the conversation ends.
-   Monitor the workflow’s performance in the dashboard to make necessary adjustments.

**FAQs**




**Question:** Can I assign multiple bots to one contact?
**Answer:** No, only one bot can be assigned to a contact per workflow action. You can create separate workflows for different bots if needed.




**Question:** What happens if the assigned bot’s channel is disabled?
**Answer:** The workflow will not execute for that channel. Ensure the corresponding channel is enabled for the assigned bot.




**Question:** Can I use conditional logic to assign bots?
**Answer:** Yes, conditional logic (e.g., If-Else) can be applied to assign bots dynamically based on specific criteria.




**Question:** How do I check which bot is assigned to a contact?
**Answer:** You can view the assigned bot in the conversation tab of the contact’s profile.




**Question:** Can I update the bot’s status manually?
**Answer:** Yes, but this feature automates the process for efficiency and consistency.




**Question:** How does the “Reactivate Bot After” feature work?

**Answer:** When a bot is set to Inactive, you can schedule it to reactivate automatically after a specified duration. Choose the time value (e.g., 24) and unit (minutes, hours, or days) to control when the bot becomes Active again.  




**Question:** What does the "Keep Same" option do in the bot configuration?

**Answer:** Selecting **"Keep Same"** ensures that no changes are made to the current bot assignment; the bot that is already linked to the contact will remain in place without being overwritten.