---
title: "Commission Length, Variable Commissions & Level Up Affiliates in Affiliate Manager"
description: "The Commission Length, Variable Commissions Over Time, and Level Up Affiliates features allow you to manage the duration and variability of commissions while…"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/v33h7dKcD9RvS8UVQ972"
sourceId: "v33h7dKcD9RvS8UVQ972"
category: "Affiliate"
---

The Commission Length, Variable Commissions Over Time, and Level Up Affiliates features allow you to manage the duration and variability of commissions while automating affiliate promotions based on milestones. These features help ensure an optimized, scalable, and dynamic affiliate program by streamlining tier-based rewards, recognizing top performers, and maintaining motivation without manual tracking.

### Key Features and Benefits

-   **Commission Length**: Set a defined number of transactions for which affiliates are compensated, providing clarity and control over reward distribution.
-   **Variable Commissions Over Time**: Introduce tiered commission structures to incentivize performance differently based on charge count, fostering better alignment with business goals.
-   **Level Up Affiliates:** Automatically promote affiliates to a new campaign when they reach specific milestones.

**Important:Commission Priority Hierarchy**

1\. Product-Based Commissions

2\. Variable Commissions

3\. Default Commissions

This ensures specific commission settings override more general ones.

### How to Use These Features

#### Step 1: Create or Edit an Affiliate Campaign

Start by creating or accessing your affiliate campaign. Please view our articles on the Affiliate Manager for better understanding.

#### Step 2: Set the Default Commission

Define the default commission rate that affiliates will earn. This serves as the baseline reward structure for your program.

#### Step 3: Enable Commission Length

1\. Navigate to the **Commission Length** option in your campaign setup.

2\. By default, commissions are provided indefinitely until the customer cancels.

![](<https://assets2.modalsupport.net/1764155424082-unnamed - 2025-11-26T191008.671.png>)

3\. To restrict the number of commissionable transactions, choose the **By Count** option and set a specific limit.

![](<https://assets2.modalsupport.net/1764155442109-unnamed - 2025-11-26T191032.907.png>)

-   **Example**: If the limit is set to 3, affiliates will earn a commission for the first three successful charges, regardless of the interval (monthly, yearly, etc.).

![](<https://assets2.modalsupport.net/1764155457276-unnamed - 2025-11-26T191049.774.png>)

**Note**: This feature applies exclusively to the number of successful charges and does not consider time-based intervals.

#### Step 4: Set Variable Commissions Over Time

1\. Toggle on **Variable Commissions** to enable this feature.

2\. Select Two Levels to define different rates for specific charge counts.

![](<https://assets2.modalsupport.net/1764155477871-unnamed - 2025-11-26T191108.745.png>)

-   **Example**: For the first three charges, affiliates may earn a 33% commission, while subsequent charges earn the **default 23%**.

![](<https://assets2.modalsupport.net/1764155495776-unnamed - 2025-11-26T191128.202.png>)

3\. Configure additional tiers as necessary to provide even more granularity in commission structures.

This feature allows for strategic reward distribution, motivating affiliates during initial charges and sustaining engagement over time.

**Step 5: Level Up Affiliates Automatically**

You can automate affiliate promotions based on specific milestones, such as reaching a certain number of customers or generating a set amount of revenue. This simplifies the process of recognizing top performers and streamlining tier-based rewards without requiring manual tracking. By setting goals like customer count or revenue, you can easily manage affiliate movement between campaigns. To use this, enable the "Level Up to Another Campaign" option, set your criteria, and choose how to handle existing customers.

![](<https://assets2.modalsupport.net/1764155518540-unnamed - 2025-11-26T191149.281.png>)

#### Step 6: Publish Your Campaign

Save and publish your campaign to activate the customized commission settings. Affiliates will automatically receive rewards based on the established rules.

### Use Case

A subscription-based business wants to reward affiliates for driving long-term customer retention. Initially, the business sets a higher commission rate (e.g., 40%) for the first three charges to encourage new customer acquisition. Afterward, a default rate of 23% is applied to maintain consistency. To control costs, the Commission Length feature caps rewards after the tenth charge. This setup ensures affiliates are incentivized to secure high-quality customers without compromising profitability.

### Pro Tips

-   **Combine Features for Maximum Impact**: Use Commission Length and Variable Commissions together to control both the duration and structure of affiliate rewards.
-   **Communicate Clearly with Affiliates**: Ensure that your affiliates understand the commission policies to avoid confusion and foster trust.
-   **Test Before Full Deployment**: Run a pilot campaign to gauge the impact of these settings on affiliate behavior and overall sales performance.

### FAQ




**Question:** What happens if both Commission Length and Variable Commissions are enabled?
**Answer:** Commission Length determines the total number of charges eligible for commissions, while Variable Commissions allow tiered rates within those charges. They complement each other seamlessly.




**Question:** Can I apply different settings for specific products?
**Answer:** Yes, product-based commission settings take priority and allow unique configurations for individual offerings.




**Question:** What if an affiliate exceeds the Commission Length limit?
**Answer:** Once the limit is reached, no further commissions will be generated for that customer’s charges.




**Question:** Are these features applicable to one-time payments?
**Answer:** No, these features are designed for recurring payments such as subscriptions or installment plans.




**Question:** Can I level up affiliates between different types of campaigns?
**Answer:** Yes, you can level up between Website, Store, and Funnel campaigns, though External Website campaigns can only level up to other External Website campaigns.




**Question:** What happens to existing customers when an affiliate levels up?
**Answer:** You can choose to either keep existing customers in their current campaign or move them to the new one after a level-up.




**Question:** Can I change these settings after publishing the campaign?
**Answer:** Yes, you can modify the commission settings, but changes will apply only to future transactions.




**Question:** How are the commission priority rules applied when multiple commission settings exist?
**Answer:** The commission priority hierarchy ensures that more specific commission settings override more general ones. This means that product-based commissions take priority over variable commissions, and variable commissions take priority over default commissions.  


**Question:How does the system calculate the limit for Commission Length?

**Answer:** The limit is based strictly on the **number of successful charges** (charge count) rather than time-based intervals like months or years. For example, if the limit is set to 3, the affiliate earns for the first three successful payments, regardless of how much time passes between them.  




**Question:** Why am I not seeing my newly created forms in the WordPress plugin dropdown?

**Answer:** This is usually due to a sync delay. Try clicking the "Refresh" or "Sync" button within the LeadConnector plugin settings in your WordPress dashboard. This forces the plugin to pull the latest data (forms, surveys, and calendars) from your account.




**Question:** When an affiliate "Levels Up," do they get a notification?
**Answer:** The system handles the move between campaigns automatically. However, to notify the affiliate, you should set up a Workflow triggered by the "Affiliate Campaign Joined" event. This allows you to send them a congratulatory email explaining their new higher commission rates.