---
title: "Workflow Action: Add Contact Tag"
description: "In this guide, we'll walk you through using the \"Add Contact Tag\" action, a powerful tool for organizing your contacts, categorizing them for targeted…"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/4mGqlQVups1AYRF9yOQv"
sourceId: "4mGqlQVups1AYRF9yOQv"
category: "Workflow Actions"
---

In this guide, we'll walk you through using the "Add Contact Tag" action, a powerful tool for organizing your contacts, categorizing them for targeted marketing, and triggering workflows. Tags are essential for maintaining structured contact records and enabling automation processes, making it easier to manage your audience effectively. Let’s get started!

## **Overview of the "Add Contact Tag" Action**

The "Add Contact Tag" action automatically applies one or more tags to a contact's record. Tags help you group contacts based on specific criteria, such as their interaction source or interests, allowing you to streamline your marketing efforts and automate follow-ups. You can also create new tags directly from the action setup.

### **Key Features and Benefits**

-   **Organize Contacts Efficiently:** Use tags to categorize contacts for better audience management.
-   **Trigger Automated Workflows:** Tags can automatically trigger workflows, allowing for targeted actions based on contact behavior.
-   **Personalize Marketing Campaigns:** Tailor your marketing efforts by tagging contacts according to their interests or engagement sources.
-   **Custom Tagging Flexibility:** Easily toggle between standard values and a custom value picker to dynamically create personalized tags based on automation trigger data for enhanced workflow efficiency.

## **Step-by-Step Guide to Setting Up the "Add Contact Tag" Action**

### **Step 1: Choose the Action Type**

-   Navigate to the Automation tab.
-   Create a Workflow or edit an existing one.

![](<https://assets2.modalsupport.net/1762899748864-Captura de pantalla 2025-11-11 172151.png>)

-   Select “Add Contact Tag” from the list of available actions.

![](<https://assets2.modalsupport.net/1762899768288-Captura de pantalla 2025-11-11 172241.png>)

![](<https://assets2.modalsupport.net/1762899790664-Captura de pantalla 2025-11-11 172257.png>)

### **Step 2: Name Your Action**

-   Enter a descriptive name for the action, such as “Tag Added” or “Facebook Tagging.” This helps you easily identify the action in your workflow setup.

### **Step 3: Select Tags**

-   Choose one or multiple tags that you want to add to the contact. You can scroll through the list and select the appropriate tags that align with your criteria.
-   Toggle between standard values and a custom value picker for specific field types. To do so, simply change the field type to "Custom" via the three dots next to the field and select the desired value from the custom value picker.
-   In the custom values tags that are added can be string ‘tag-1’ or \[‘tag-1’, ‘tag-2’\], or ‘tag-1, tag-2’

Note: The feature currently applies to "Add Contact Tag" and "Remove Contact Tag" actions.

![](https://assets2.modalsupport.net/1775484040007-image1.jpg)

![](https://assets2.modalsupport.net/1775484100455-image5.jpg)

-   **Dynamic Select Field Support:** When using the custom value picker with dropdown fields, **option IDs** (not display names) are required. These can typically be found via exports or internal helper guides. This enables dynamic selection based on values retrieved earlier in the workflow, such as appointment types or service categories.

![](https://assets2.modalsupport.net/1775484114454-image4.jpg)

-   **Real-Life Use Cases:**

-   Create tags combining service type and location, e.g., "bushtrimming-{{contact.postal\_code}}."
-   Generate tags based on the user setting a lead, like "setter\_{{user.name}}."
-   Add tags for sign-up offers or dates, such as "Signup-{{right\_now.month}}-{{right\_now.year}}."

### **Step 4: Delete Tags**

-   If you need to remove a selected tag, click the “x” icon next to the tag in the list. This will de-select the tag to ensure it is not added to the contact.

### **Step 5: Add a New Tag**

-   If the tag you need isn’t available, you can create a new one by typing the desired tag name in the input field.
-   Click on the “Add New Tag” button, and the tag will be added to your list, ready to be applied to contacts.

![](<https://assets2.modalsupport.net/1762899921143-Captura de pantalla 2025-11-11 172433.png>)

## **Real-World Example: Adding a Tag When a User Engages on Facebook**

**Scenario:** A business wants to add a "Facebook" tag to customers who have replied to a post and shown interest in a product. This tag will help the business run separate marketing campaigns for these contacts in the future.

**Action Setup:**

-   **Action:**Contact Tag
-   **Name:** Tag is added
-   **Fields:** Select "Facebook" tag from the list

**Workflow Trigger:**

-   **Trigger:** Facebook - Comments On A Post. This trigger will add the contact to the workflow when they comment on a selected Facebook post.

**Workflow Actions:**

-   **Add Tag:** Automatically adds the "Facebook" tag to the contact.
-   **Facebook Interactive Messenger:** Initiates a conversation with the customer via Facebook Direct Message (DM).

**Outcome:** This setup ensures that the tag is added to the contact, helping categorize them based on their engagement, and setting up targeted marketing efforts.

**Tips for Success**

-   **Use Clear Tag Names:** Name your tags clearly and descriptively to make it easier to identify the purpose of each tag.
-   **Leverage Tags in Workflows:** Utilize tags to trigger relevant workflows, providing a seamless and personalized experience for your contacts.
-   **Keep Tags Consistent:** Avoid creating duplicate or similar tags; consistency helps maintain an organized contact database.

**Pro Tips**

-   Keep Tag Names Simple & Standardized – Use clear, structured names like "Lead-HighPriority" instead of "Hot Lead!!".
-   Use Tags in Smart Lists – Filter contacts by tags to create targeted marketing lists for bulk email/SMS campaigns.
-   Remove Tags When Necessary – If a tag is no longer relevant (e.g., “Lead - Contacted” after conversion), use the Remove Contact Tag action to keep your database clean.
-   Use Date-Based Tags for Tracking – Add timestamps to tags like "Webinar-Signup-03-2024" to track engagement trends over time.
-   Automate Internal Notifications – If contact is tagged as "High Value", automatically notify your sales team to prioritize outreach.
-   Test Your Workflows – Before activating, run a test workflow to ensure tags are applied correctly without duplicates or errors.

## FAQs




**Question:** How can tags trigger automated workflows?

**Answer:** Tags can trigger automated workflows when specific tags are added to a contact’s record. For example, if a contact receives a “Facebook” tag, it can automatically add them to a workflow designed for follow-up actions, such as personalized messaging or targeted marketing efforts.




**Question:** Why is it important to use clear and descriptive tag names?

**Answer:** Using clear and descriptive tag names makes it easier to identify the purpose of each tag and manage your contact records effectively. It helps avoid confusion and ensures that tags are used consistently across your workflows.




**Question:** Can tags be used to personalize marketing campaigns?

**Answer:** Yes, tags allow you to tailor marketing efforts by categorizing contacts based on their interests or interaction sources. By tagging contacts appropriately, you can create personalized campaigns that target specific segments of your audience.




**Question:** What should I do if I need to add a tag that isn’t available in the list?

**Answer:** If the tag you need isn’t available, you can add a new tag by typing the desired name into the input field and clicking the “Add New Tag” button. This new tag will be created and can be immediately used.




**Question:** How do tags help in categorizing contacts?

**Answer:** Tags categorize contacts by assigning them specific identifiers based on their actions, interests, or other criteria. This helps maintain an organized database, making it easier to manage large groups of contacts and tailor interactions accordingly.




**Question:** What happens when a contact is tagged with "Facebook" in a workflow?

**Answer:** When a contact is tagged with "Facebook" in a workflow, it categorizes them as having interacted through Facebook. This tag can then trigger further actions, such as starting a conversation via Facebook Messenger or adding them to a specific marketing campaign.




**Question:** Why is it important to keep tags consistent across your contact database?

**Answer:** Keeping tags consistent helps maintain an organized contact database, prevents duplication, and ensures that your tags are used effectively in automations and campaigns. Consistent tagging simplifies contact management and improves the accuracy of your workflows.




**Question:** Can I use multiple tags for a single contact?

**Answer:** Yes, you can apply multiple tags to a single contact, allowing you to categorize them across different criteria. This flexibility helps refine your targeting and enhances the personalization of your automated workflows.


**Question:**  **Are tags case-sensitive or format-sensitive?

**Answer: Tags are generally stored as text labels, so keeping naming format consistent is recommended to avoid duplicates or similar variations.




**Question:** Is there a limit to how many tags one contact can have?
**Answer:** There is no strict limit. A contact can have dozens of tags. However, it is best to keep them organized so your contact profiles don't get too cluttered and hard to read.




**Question:** What is the "Dynamic Select Field" support, and when should I use it?

**Answer:** This is used when you want to apply tags based on dropdown or selection fields. Note that when using the custom value picker for these, you must use the **Option ID** rather than the display name. This allows the workflow to dynamically select the correct tag based on values retrieved earlier in the process, such as a specific service category.