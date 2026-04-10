---
title: "Workflow Trigger: Category Started"
description: "The Category Started trigger will activate a Workflow when a contact begins or interacts with a specific category in a membership. In this article, we will go…"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/YSvT5W2RW4G88gXN4ySp"
sourceId: "YSvT5W2RW4G88gXN4ySp"
category: "Workflow Triggers"
---

The Category Started trigger will activate a Workflow when a contact begins or interacts with a specific category in a membership. In this article, we will go over how to use this trigger to track specific membership products and send additional resources once a category has been started.

## **Navigation**

-   Add the trigger with filters for the product and category and save

![](https://assets2.modalsupport.net/1775485727110-image3.png)

-   Here is an example of a course structure and where a category is located in a membership product: (See Screenshot Below)

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXc_Pvvp4NrZQf9twBkCkBKO-HpQ6RxiC0c7rC8qV8atSGudV_J6K-vO0Y6EmbnRs6yfQL4GxjfT5Pg0lWdVspfyuUgRjlfnzibetQPf2jsRA31t9vt8oFbM8m7py9IgyOquWgBK0YvwMJMeOXOZy50FZik?key=9j6ANtH3A3MHYo8JaSrOGg)

-   Add a Send Email action and use the category custom values to make it more personal.

![](<https://assets2.modalsupport.net/1762967571253-Captura de pantalla 2025-11-12 121241.png>)

-   Add an internal notification using custom values to set a timestamp and provide details that refer to the category.

![](<https://assets2.modalsupport.net/1762967596590-Captura de pantalla 2025-11-12 121309.png>)

**_Please Note:_** _You can use the If/Else action to create branches based on the category involved if you use more than one category as a trigger. (See Screenshot Below)_

![](<https://assets2.modalsupport.net/1762967625872-Captura de pantalla 2025-11-12 121336.png>)

## FAQ’s




**Question:** How can I make my follow-up emails more personal when using this trigger?

**Answer:** You can make follow-up emails more personal by using category-related custom values. These values automatically insert details specific to the category the contact interacted with, allowing you to tailor the email content to be more relevant and engaging.




**Question:** What is the purpose of adding internal notifications in the workflow?

**Answer:** Adding internal notifications allows you to keep track of when a category has been started and provide specific details to your team. This can include setting timestamps and providing context about the category, which is useful for monitoring and follow-up actions.




**Question:** Can I create branches in my workflow based on the category started?

**Answer:** Yes, you can use the If/Else action within the workflow to create branches based on the category involved. This is particularly useful when you have multiple categories and want to customize the actions for each category separately.




**Question:** What should I include in the internal notifications when a category is started?

**Answer:** Internal notifications can include timestamps, details about the contact and the category they interacted with, and any other relevant information that helps your team understand the contact’s actions and the next steps in the workflow.




**Question:** How can I use the Category Started trigger for a course structure?

**Answer:** In a course structure, the Category Start trigger can be used to track when a contact begins a specific category within the course. This allows you to automate follow-up actions like sending introductory materials or resources that align with that category.




**Question:** Can I use this trigger for multiple categories in a single workflow?

**Answer:** Yes, you can use the Category Started trigger for multiple categories within the same workflow. By using the If/Else action, you can create branches that handle each category differently, ensuring that each contact receives the appropriate response based on their interaction.




**Question:** Can I combine this trigger with other workflow actions?

**Answer:** Absolutely. You can pair it with actions like sending emails, assigning tasks, updating tags, or sending notifications to create fully automated workflows tailored to category interactions.


**Question:** Does this trigger fire every time a student clicks on the category?  
Answer**: No. To prevent overwhelming students with emails, the trigger is designed to fire the first time a contact interacts with that specific category. This ensures that your "Welcome to Module 2" resources are only sent once.




**Question:** Can I see a history of which categories a contact has started?
**Answer:** Yes. You can view this in the **Execution Logs** of the workflow or by looking at the **Contact Activity** tab within the specific Contact Record to see which triggers they have activated.