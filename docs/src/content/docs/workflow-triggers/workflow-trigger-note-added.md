---
title: "Workflow Trigger: Note Added"
description: "The Note Added Workflow Trigger allows you to trigger a workflow whenever a note is added to a contact in your account. In this case, the contact to whom the…"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/9oJ9xpg6sMhwmfykJk5p"
sourceId: "9oJ9xpg6sMhwmfykJk5p"
category: "Workflow Triggers"
---

The Note Added Workflow Trigger allows you to trigger a workflow whenever a note is added to a contact in your account. In this case, the contact to whom the note was added would be added to this workflow. This article will give an overview of how to set up a workflow using the Note Added Workflow Trigger.

### Step 1: Start a new workflow or edit an existing one

-   Navigate to Automation > Workflows and create a new workflow or edit an existing one.

![](https://assets2.modalsupport.net/1766072248024-image4.png)

### Step 2: Creating and Editing the Trigger

-   Click “Add New Workflow Trigger”

![](https://assets2.modalsupport.net/1763394586676-2.png)

-   Select **Note Added** in the **Contact** section of the Workflow Triggers Menu or use the search feature. Once selected, the Trigger setup menu will open.

![](https://assets2.modalsupport.net/1763394614072-3.png)

-   (_Optional_) You can change the display name of this trigger within the workflow builder using the text box under **Workflow Trigger Name**
-   Press **\+ Add filters** to open up the **Filters** section of the Trigger setup menu

![](https://assets2.modalsupport.net/1763394645548-4.png)

-   You can filter by the parameters **Has Tag** and **Doesn’t Have Tag** which will only allow contacts who have or do not have a selected tag assigned to them
    -   Using **Has Tag** will only allow contacts who have the selected tag to be added to this workflow. No other contacts may be added
    -   Using **Doesn’t Have Tag** will allow all contacts to be added EXCEPT those who have the selected tag
    -   **_Pro Tip:_**  You are capable of applying both of these filters to the trigger, but these can cancel each other out in many cases. In light of this, it is best to use only one or the other depending on your needs

-   You can also filter by **Custom Fields**. Using **Custom Fields** as your filter parameters will only allow contacts who have specified custom values assigned to them. These custom values are set up elsewhere in your account.

![](https://assets2.modalsupport.net/1763394806158-6.png)

-   Press **Save Trigger** in the bottom right corner of the Trigger setup menu

![](https://assets2.modalsupport.net/1763394833379-7.png)

### Step 3: Set up applicable Workflow Action(s). We have multiple articles available to explain the setup of each of the Workflow Actions. Feel free to review our articles on these for more information on setting these up.

**_Pro Tip:_** You can use any Workflow Actions to be triggered by the _Note Added_ trigger or you can leave this workflow without any actions.

### Step 4: Press Save in the top right corner of your browser to save the workflow

-   If your Workflow is ready to be enabled, make sure the toggle switch under Save is set to Publish
-   Be sure to test your Workflow to make sure it is set up correctly using the Test Workflow button next to the Publish toggle switch. 
    -   For an in-depth overview of Workflow Testing see our article, “Using the Testing Features in Workflows”

![](https://assets2.modalsupport.net/1763394851068-8.png)

Now your workflow is set up and ready to go with the _Note Added_ Workflow Trigger.

### FAQs




**Question:** What does the "Note Added" Workflow Trigger do?

**Answer:** The "Note Added" Workflow Trigger activates a workflow whenever a note is added to a contact’s profile. This means that any time a new note is logged for a contact, that contact is added to the workflow associated with this trigger.


**Question:How can I use the "Note Added" trigger in a workflow?

**Answer:** To use this trigger, start by creating a new workflow or editing an existing one. Add the "Note Added" trigger from the Contact section of the Workflow Triggers Menu. This will start the workflow whenever a new note is added to a contact.


**Question:Can I filter which contacts the trigger applies to?

**Answer:** Yes, you can filter contacts based on tags and custom fields:

-   **Has Tag:** The workflow will only trigger for contacts that have a specific tag.
-   **Doesn’t Have Tag:** The workflow will trigger for contacts that do not have a specific tag.
-   **Custom Fields:** Filter contacts based on custom values assigned to them.


**Question:What are the limitations when using filters with the "Note Added" trigger?
**Answer:

-   Applying both "Has Tag" and "Doesn’t Have Tag" filters simultaneously can often lead to conflicts, as contacts cannot both have and not have the same tag. It’s best to use one type of filter to ensure clarity and effectiveness.


**Question:How do I set up the "Note Added" Workflow Trigger?
**Answer:

-   **Step 1:** Start a new workflow or edit an existing one.
-   **Step 2:** Click “Add New Workflow Trigger” and select "Note Added" from the Contact section.
-   **Step 3:** Optionally, change the display name for the trigger for easier identification.
-   **Step 4:** Add filters as needed and press “Save Trigger” to apply the changes.


**Question:What actions can I set up with the "Note Added" trigger?
**Answer:

-   You can set up any workflow actions that you need to occur when a note is added. For example, you might want to send an email notification, update a contact field, or add the contact to a list.
-   **Pro Tip:** You can leave the workflow without actions if you simply want to track when notes are added.


**Question:How do I ensure my workflow is functioning correctly after setting up the trigger?
**Answer:

-   After setting up the workflow, be sure to save your changes and enable the workflow by toggling the switch to "Publish."
-   Test the workflow using the Test Workflow button to confirm that it operates as intended when notes are added.




**Question:** Does this trigger work if I import notes in bulk?

**Answer:** Generally, no. This trigger is designed for individual note creation within the platform. If you are doing a bulk import of contacts with a "Notes" column, the system usually treats this as a contact field update rather than a "Note Added" event.




**Question:** Can I use a note to trigger a message_to_the customer?

**Answer:** **Yes, but be careful.** While you can set the action to "Send SMS," remember that notes are often internal. If you add a note that says _"Customer was rude on the phone,"_ and your workflow is set to automatically SMS the contact the last note added, it could lead to a major PR issue. Always ensure your automated actions are generic or strictly internal.