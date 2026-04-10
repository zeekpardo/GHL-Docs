---
title: "Workflow Trigger: Category Completed"
description: "The Courses Category Completed trigger will activate a Workflow when a contact begins or interacts with a specific category in a membership. In this article,…"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/RE87rYXW8IrS6xpYDdOI"
sourceId: "RE87rYXW8IrS6xpYDdOI"
category: "Workflow Triggers"
---

The Courses Category Completed trigger will activate a Workflow when a contact begins or interacts with a specific category in a membership. In this article, we will go over how to use this trigger to track specific membership products and send additional resources once a category has been completed.

## **Step 1: Creating and Editing the Trigger**

-   Navigate to Workflows
-   Create a new Workflow or click on an existing one

![](<https://assets2.modalsupport.net/1764874693764-Captura de pantalla 2025-12-04 135807.png>)

-   Click “Add New Trigger”

![](<https://assets2.modalsupport.net/1764874671454-Captura de pantalla 2025-12-04 135744.png>)

-   Select “Category Completed” under the Courses triggers section of the dropdown.

![](https://assets2.modalsupport.net/1774549957426-image9.png)

-   Add the trigger with filters for the product and category and save

![](<https://assets2.modalsupport.net/1764874625173-Captura de pantalla 2025-12-04 135658.png>)

**_NOTE:_** _If you don’t select filters, this will run for any category completed. If you filter more specifically, you can choose to have the Workflow run when a specific product’s course and category are completed._

**_Please Note:_** _Custom values are available for customization of emails. If/Else fields are also available for filtering when using multiple lessons. (See Screenshots Below)_

![](<https://assets2.modalsupport.net/1764874593143-Captura de pantalla 2025-12-04 135624.png>)

![](<https://assets2.modalsupport.net/1764874570373-Captura de pantalla 2025-12-04 135602.png>)

![](<https://assets2.modalsupport.net/1764874536946-Captura de pantalla 2025-12-04 135512.png>)

## FAQ’s




**Question:** Can I trigger a Workflow for specific categories only?

**Answer:  Yes, by adding filters to the trigger, you can specify that the Workflow only runs when a particular product’s course and category are completed. This allows you to target specific content within your membership.




**Question:** What can I do once a category is completed in a membership?

**Answer:** Once a category is completed, you can use the Workflow to send additional resources, follow-up emails, or other communications to the contact. This helps in enhancing the learning experience and keeps the members engaged.




**Question:** What are custom values, and how can they be used in this Workflow?

**Answer:** Custom values are placeholders that automatically populate with specific information related to the contact or membership. In this Workflow, custom values can be used to personalize emails or other communications, making the messages more relevant and tailored to the member’s experience.




**Question:** How can If/Else fields be used in this Workflow?

**Answer:** If/Else fields allow you to create conditional logic within the Workflow. For example, you can set up different actions based on whether the contact has completed multiple lessons or only a specific category. This helps in delivering targeted content based on the member’s progress.




**Question:** Can I use this trigger to track progress across multiple categories?

**Answer:** Yes, you can use the If/Else fields within the Workflow to track and respond to progress across multiple categories. This allows you to create more complex and responsive learning paths within your membership site.




**Question:** Are there limitations I should keep in mind?

**Answer:** Yes. If settings are too broad, it may trigger more often than intended. If too filtered, it may miss untagged categories. Always test completion paths before publishing.




**Question:** What happens if I have the same Category name in two different Courses?

**Answer:** To avoid confusion, you should always use the **"In Product"** filter. This tells the workflow exactly which course you are talking about so it doesn't accidentally trigger for the wrong one.  




**Question:** Why isn't my workflow triggering even though I finished the category?

**Answer:** This is usually due to a filter mismatch. Double-check that the "Product" and "Category" names in your filter exactly match the ones in your Membership area. Also, ensure the Workflow is set to **"Published"** and not "Draft."