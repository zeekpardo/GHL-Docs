---
title: "Workflow Action: Send To Eliza Agent Platform"
description: "The Send to Eliza Agent Platform Workflow Action can let you create a workflow that will automatically send contacts that get added to this workflow to the…"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/aLn9yb2zO7nwhfD4WK3P"
sourceId: "aLn9yb2zO7nwhfD4WK3P"
category: "Workflow Actions"
---

The _Send to Eliza Agent Platform_ Workflow Action can let you create a workflow that will automatically send contacts that get added to this workflow to the Eliza Agent platform to most effectively ensure that you are capturing your leads well. This action will both send contacts to the Eliza Agent Platform and add the tag “CS1” to their contact. The “CS1” tag is configured as the Send to Eliza tag on the settings page. This article will give an outline of how to create a workflow using the _Send to Eliza Agent Platform_ Workflow Action.

**Key Features**

**Automated Lead Transfer:** Effortlessly move contacts into the specialized agent platform as soon as they meet your criteria, ensuring no potential customer is left waiting.

**Intelligent Tagging:** The system automatically applies a "CS1" tag to every contact it processes. This makes it easy to filter, track, and organize your leads so you always know their current status.

**Complete Reach:** Capture every opportunity even leads who only make phone calls or haven't sent a message yet by ensuring they are still sent to the agent platform for professional follow-up.

**Customizable Triggers:** You have the flexibility to decide exactly what starts the process. Whether it is a new form submission, a specific tag being added, or a manual update, the system adapts to your business rules.

**How to use:**

### Step 1: Start a new workflow or edit an existing one

-   Navigate to Automation > Workflows and start a new workflow or edit an existing one.

![](<https://assets2.modalsupport.net/1765452062898-unnamed - 2025-12-11T192056.747.jpg>)

### Step 2: Set up applicable Workflow Trigger(s). We have multiple articles available to explain the setup of each of the Workflow Triggers. Feel free to review our articles on these for more information on setting these up.

**_Pro Tip:_** You can use any Workflow Triggers to trigger the _Send to Eliza Agent Platform_ Workflow Action or you can leave this workflow without any triggers.

### Step 3: Setting up the Send to Eliza Agent Platform Workflow Action

-   Click on the “+” symbol below the trigger to add an action.

![](<https://assets2.modalsupport.net/1765452078896-unnamed - 2025-12-11T192114.874.png>)

-   Under Actions, select **Send to Eliza Agent Platform** in the **Actions** section or use the search feature. Upon selection, the Action setup menu will appear
-   (_Optional_) You can change the workflow builder display name of this action using the textbox below **Action Name**. Note that this will only affect the display name within the workflow builder and has no other impact on the content or functionality of this Workflow Action.

-   Press **Save** in the bottom right corner of the Action setup menu

![](<https://assets2.modalsupport.net/1765452106018-unnamed - 2025-12-11T192140.422.png>)

### Step 4: Press Save in the top right corner of your browser to save the workflow

-   If your Workflow is ready to be enabled, make sure the toggle switch under **Save** is set to **Publish**
-   Be sure to test your Workflow to make sure it is set up correctly using the **Test Workflow** button next to the **Publish** toggle switch. 
    -   For an in-depth overview of Workflow Testing see our article, “Using the Testing Features in Workflows”

![](<https://assets2.modalsupport.net/1765452131597-unnamed - 2025-12-11T192204.645.jpg>)

Now your Workflow is set up and ready to go with the _Send to Eliza Agent Platform_ Workflow Action!

The "Send to Eliza" workflow action ensures that contacts who don’t send inbound messages or only make inbound calls can still be added to Eliza seamlessly. This feature automates the process, allowing you to nurture these contacts effectively without manual intervention.

Optionally, a specific tag can be assigned to these contacts for better tracking, though it’s not mandatory. To use this action, configure it in your workflows, and the platform will handle the rest, ensuring all qualifying contacts are sent to Eliza automatically.

## FAQ’s  




**Question:** Why is it important to test the workflow after setting it up?

**Answer:** Testing the workflow ensures that the action works correctly and the contacts are sent to the Eliza Agent Platform as intended. This step helps identify and fix any issues before the workflow goes live, ensuring smooth operation.




**Question:** What happens if I do not set the workflow to Publish?
**Answer:** If the workflow is not set to Publish, it will remain inactive and will not run even if the triggers or actions are correctly set up. Ensure the toggle switch under Save is set to Publish to activate the workflow.




**Question:** What types of contacts will be sent to the Eliza Agent Platform using this action?
**Answer:** Contacts that are added to the workflow, either through triggers or manual addition, will be sent to the Eliza Agent Platform. The action ensures these contacts are tagged appropriately and integrated with the platform for effective lead management.




**Question:** Can I edit the Send to Eliza Agent Platform action after it has been set up?
**Answer:** Yes, you can edit the Send to Eliza Agent Platform action by returning to the workflow and adjusting the action settings as needed. Changes can be saved and tested to ensure they meet your requirements.




**Question:** What should I name my workflow when using the Send to Eliza Agent Platform action?
**Answer:** Name your workflow descriptively, such as “Eliza Agent Lead Integration” or “Send to Eliza Workflow,” to easily identify its purpose and manage your workflows effectively.




**Question:** Can I add additional actions to the workflow along with the Send to Eliza Agent Platform action?
**Answer:** Yes, you can add multiple actions to the workflow, allowing you to customize the flow of actions that occur when a contact is added. This could include sending notifications, updating contact information, or other relevant actions.  




**Question:** Is assigning a tag to contacts mandatory when using the Send to Eliza Agent Platform Workflow Action?
**Answer:** No, assigning a tag to contacts is optional. While the action automatically adds the "CS1" tag to the contacts, you can choose not to assign a specific tag if you prefer. It is only required for better tracking, but it does not impact the functionality of the workflow.




**Question:** Does changing the "Action Name" in the setup menu change how the Eliza Agent Platform functions?
**Answer:** No. Changing the workflow builder display name in the textbox only affects how the action is labeled within the workflow builder itself. It has no impact on the actual content or functionality of the Workflow Action.




**Question:** If I send a contact to Eliza, does it stop my other workflow actions?

**Answer:** No. Sending a contact to Eliza is just one "step" in your workflow. The contact will continue to move to whatever action you have placed next (like a tag, a task, or a wait step). Eliza will handle the conversation in the background while your workflow continues its logic.