---
title: "Workflow Action: Add To Notes"
description: "Workflow Action: Add To Notes"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/mZOJLPcHQ2xg4vDnSo4C"
sourceId: "mZOJLPcHQ2xg4vDnSo4C"
category: "Workflow Actions"
---

**Workflow Action: Add To Notes**

Adding a note to a specific contact can be automated. Let’s say that your lead submitted a form with a custom field and you want that information to also appear in the notes area for visibility, including additional instructions for a staff member to consider. In this article, we will go over the _Add To Notes_ action and how to use it.

**How to add this trigger to a workflow:**

This action exists within workflows and works similarly to the notes tab within the contact area.

![](https://assets2.modalsupport.net/1774548610598-image4.png)

### **Step 1:** Start a new workflow or edit an existing one.

-   Navigate to Automation > Workflows and start a new workflow or edit an existing one.

![](https://assets2.modalsupport.net/1764175851702-image.png)

### **Step 2:** Setting up the Workflow Trigger

-   Under Workflow Triggers, select “Form Submitted” in the “Events” section of the Workflow Triggers Menu
-   Filter for the form that you can create from Sites > Forms > Builder
-   Click “Save Trigger” in the bottom right of your screen.

**Note:** You can add any trigger based on the event to which you want to add them to the workflow.

**_Please Note:_** _You can use any trigger you would like, including no trigger_

![](https://assets2.modalsupport.net/1774548638494-image5.png)

### **Step 3:** Adding the _Add To Notes_ Action

-   Click on the “+” symbol below the trigger to add an action.
-   Under Actions, select “Add To Notes” in the “Contact” section of the Actions Menu or use the search feature
-   Name the workflow action if you would like, add details to your notes
-   In this example, we are using the custom values tab to populate the note with a custom field

**Please Note:** Include a title with the value as it will populate with the answer provided by the customer only if you don’t. (see screenshot below)

-   Save the action

![](https://assets2.modalsupport.net/1764175916793-image.png)

### **Step 4:** Customize to your preference

-   Add actions and customization to your preferences
-   Publish and save the workflow (top right of the screen)

![](https://assets2.modalsupport.net/1764176176251-image.png)

**Pro Tips**

**Keep Notes Concise** – Write short, clear notes that provide **quick context** for other team members.

**Use Custom Fields Wisely** – Ensure custom values are formatted properly in the note to avoid cluttered or hard-to-read entries.

**Avoid Duplicate Notes** – If a workflow runs multiple times for the same contact, add a filter to prevent duplicate notes from being created.

**Leverage Notes for Lead Scoring** – Use note content to determine **lead quality** and prioritize follow-ups based on recorded interactions.

**Test Before Publishing** – Always **test workflows** with sample data to confirm that notes populate correctly with the right information.

### FAQs




**Question:** What is the Add To Notes action?
**Answer:** The Add To Notes action allows you to automatically add notes to a contact’s record within a workflow. This action helps in keeping track of additional information or instructions for a contact based on specific triggers.




**Question:** How do I set up a workflow trigger for this action?
**Answer:** Select a trigger such as **Form Submitted** and filter for the specific form you want to use. You can also choose other triggers or no trigger if it suits your needs.




**Question:** Can I use custom field values in the note?
**Answer:** Yes, you can use custom field values to populate the note. This is done through the **Custom Values** tab when configuring the action.




**Question:** What should I include in the note title?
**Answer:** Including a title is optional but recommended. It provides context for the note and helps to make the information clearer. Without a title, the note will only display the customer’s answer.




**Question:** How do I test the workflow?
**Answer:** Before publishing, use the **Test Workflow** button next to the Publish toggle switch to ensure that the workflow is functioning as expected. For more details on testing workflows, refer to our article, “Using the Testing Features in Workflows.”




**Question:** Can I modify or delete notes after they are added?
**Answer:** Notes added through the workflow action are part of the contact’s record. They can be edited or deleted manually if needed.




**Question:** Can automated notes be edited or removed later?

**Answer:** Yes. Once notes are created in the contact record, they can be modified or deleted manually by authorized staff.




**Question:** How can I prevent a contact from having the same note added multiple times?  
**Answer:** To avoid **duplicate notes**, you can add a filter to your workflow or use "If/Else" conditions to check if a specific action has already occurred before the "Add To Notes" step is triggered again.