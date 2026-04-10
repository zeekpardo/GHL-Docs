---
title: "Workflow Action: If/Else"
description: "Using the If/Else Workflow condition allows you to create different paths within a Workflow. This allows you to customize Workflows with an innovative…"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/hMHwkIHUtXSLWLQfJYkG"
sourceId: "hMHwkIHUtXSLWLQfJYkG"
category: "Workflow Actions"
---

Using the If/Else Workflow condition allows you to create different paths within a Workflow. This allows you to customize Workflows with an innovative interface, scenario recipes, and enhanced branching functionality that ensures that your workflows are more adaptable to customer behavior and business needs. There are numerous options for customizing the If/Else condition by adding one or multiple “and” and “or” filters to customize the setup as you need.

## Key Features and Benefits

-   **Scenario Recipes**Scenario Recipes are pre-built templates designed to simplify setting up If/Else conditions within your automation workflows. Whether you're looking to branch based on customer interactions, behaviors, or other criteria, these recipes provide a quick and easy starting point.

![](<https://assets2.modalsupport.net/1763720463960-unnamed - 2025-11-21T182050.624.png>)

-   **Selection Made Simple**: Choose from 10 pre-built recipes designed for a range of If/Else scenarios.
-   **Prerequisite Alerts**: Recipes inform you of any setup requirements beforehand, ensuring a seamless process.

![](<https://assets2.modalsupport.net/1763720484538-unnamed - 2025-11-21T182115.958.png>)

-   **Enhanced Branch Functionality**The branch functionality improves clarity and user experience when setting up conditional workflows.

-   **Clear Summaries**: Branch summaries offer a quick view of each condition being met, simplifying navigation and editing.

![](https://assets2.modalsupport.net/1767188878325-image19.png)

-   **Detailed Condition View**: For branches with multiple conditions, view them all in a pop-up by clicking on the "+x more conditions" button.

![](https://assets2.modalsupport.net/1767188936388-image13.png)

-   **Focused Editing**: Isolate a branch to make adjustments while the others collapse, providing a focused view for easy customization.

![](<https://assets2.modalsupport.net/1763720548597-unnamed - 2025-11-21T182220.052.png>)

-   **Drag-and-Drop Reordering**: Rearrange branches effortlessly through a simple drag-and-drop interface.

![](<https://assets2.modalsupport.net/1763720567763-unnamed - 2025-11-21T182238.165.png>)

![](<https://assets2.modalsupport.net/1763720583459-unnamed - 2025-11-21T182253.208.png>)

-   **"Time of the Day" Condition**An option is available for time-based conditions:

-   **Granular Control**: Set specific times down to 15-minute intervals for more precise automation triggers.

![](<https://assets2.modalsupport.net/1763720603400-unnamed - 2025-11-21T182315.650.png>)

![](<https://assets2.modalsupport.net/1763720621818-unnamed - 2025-11-21T182332.124.png>)

-   **Appointment options within the If-Else action**

Customize workflow behavior based on appointment events such as rescheduling, start date, or end date. This streamlines the automation process by enabling users to create specific branches depending on whether an appointment was rescheduled, as well as dynamically modify actions based on appointment dates.

-   Select "Appointment" in the If-Else branch dropdown and choose between Appointment Rescheduled, Start Date, or End Date.

**Note:** Either or both of the triggers - Appointment Status or Customer booked appointment need to be selected for this option to be available.

![](<https://assets2.modalsupport.net/1763720647100-unnamed - 2025-11-21T182357.174.png>)

![](<https://assets2.modalsupport.net/1763720661098-unnamed - 2025-11-21T182411.292.png>)

**Expanded Condition Operators**

The If/Else action supports "is any of" and "is none of" operators, allowing comparison against multiple comma-separated values in a single condition for simpler and more efficient workflow logic.

![](<https://assets2.modalsupport.net/1763720681939-unnamed - 2025-11-21T182434.499.png>)

-   Real-Life Use Cases:

-   Organize workflow branches based on conditions, such as whether an appointment was rescheduled.
-   Reorder workflow actions using the appointment’s Start Date and End Date.

### Create a Workflow with the If/Else Action

Create a new Workflow or edit an existing one.

-   Set up your Workflow triggers.

![](<https://assets2.modalsupport.net/1763720705738-unnamed - 2025-11-21T182454.705.png>)

### Step 2: Add the If/Else Condition Event

-   Click on the **\+ icon** to add an action to the Workflow.

![](https://assets2.modalsupport.net/1767188997688-image24.png)

-   Choose the “If/Else” condition.

![](<https://assets2.modalsupport.net/1763720742300-unnamed - 2025-11-21T182530.649.png>)

-   Add one or more **segments** and **operators**, and choose from the dropdowns to customize the action. (In the Image above, I set the condition so anyone with “Los Angeles” as their City, and anyone without the name Bob, would go down 1 path of the workflow. Anyone else would go down the 2nd path.)
    -   **NOTE:** You can toggle between “And” and “Or” to decide if you want 1 or more operators to function together or independently. AND implies that both conditions must be met. OR implies any one of the conditions must be met. The first Or that the system runs into will be considered.

**Please Note:**

-   When necessary, you would use conditions to filter as specifically as possible. You would separate these into multiple segments to dial in on specific scenarios.
-   Take advantage of the pre-built **Scenario Recipes** to speed up the setup of your If/Else conditions. These recipes help you quickly build logic without starting from scratch and ensure you consider all necessary prerequisites.
-   If a value (like a Task ID or Medium ID) is not available for a specific contact or event, the field will remain empty, but the workflow will continue to execute.

**Contact Details Based Condition**

-   You can use contact details based conditions, for example, full name, last appointment, email, etc., to further tailor your If/Else Condition Action.  

    _Note: You can also use Contact Details for_ _Contact Engagement Score and Attribution Medium ID (from First/Latest Attribution)._


**Note:** You can add multiple options or paths to your If/Else condition to completely customize the Workflow experience.  

![](https://assets2.modalsupport.net/1769716139914-image.png)

**Please note:** The maximum number of branches for a single condition is ten. While you can branch on many scenarios, it is recommended to utilize multiple workflows for separation. This makes troubleshooting and tracking what is happening in a workflow easier.

-   To use branches, click on add branch and fill out conditions and segments as needed.

![](<https://assets2.modalsupport.net/1763720809195-unnamed - 2025-11-21T182642.259.png>)

-   This will add a branch option.

**Please Note:** Using a naming convention for troubleshooting, updating, and organization is recommended.

**Note:** None is a branch that exists if none of the conditions, segments, and branches are met. Depending on your setup, this branch can be used for additional functionality.

-   To delete or duplicate a branch, click on the three dots and choose to delete or duplicate.

![](<https://assets2.modalsupport.net/1763720839699-unnamed - 2025-11-21T182712.105.png>)

### Step 3: Add Additional Workflow Events/Actions

-   Once you’ve added the If/Else condition, you will see a split in the Workflow path with “Yes,” “No,” and “None”. Based on the filters from your If/Else condition, contacts will go down one of the different paths, and you can customize additional events.

![](https://assets2.modalsupport.net/1767189077264-image3.png)

-   Switch it from Draft > Publish mode for it to function.
-   Save and confirm any changes to your Workflow.

![](<https://assets2.modalsupport.net/1763720877598-unnamed - 2025-11-21T182751.650.png>)

### Pro Tips

1.  **Use Clear Naming Conventions:** For easier troubleshooting and updates, use clear and descriptive names for your branches and conditions. This helps in quickly identifying and managing different paths within your workflow.
2.  **Test Your Workflow Thoroughly:** Before publishing, test your workflow with various scenarios to ensure that all conditions and branches work as expected. This helps prevent errors and ensures smooth operation.
3.  **Organize Multiple Workflows:** For complex setups, consider breaking down your workflows into multiple smaller workflows rather than using a single large one. This can simplify management and make tracking issues easier.
4.  **Utilize the “None” Branch:** Make use of the “None” branch to capture and handle any unexpected or unfiltered scenarios. This ensures that all contacts are accounted for and processed appropriately.

### FAQ




**Question:** How many branches can I create in an If/Else condition?
**Answer:** You can create up to ten branches in a single If/Else condition. For more complex scenarios, it is recommended to use multiple workflows for better organization.




**Question:** What does the “And” operator do in an If/Else condition?
**Answer:** The “And” operator requires that all specified conditions must be met for the path to be followed. If any condition is not met, the contact will not proceed down that path.




**Question:** How does the “Or” operator work?
**Answer:** The “Or” operator allows the contact to proceed down the path if any one of the specified conditions is met. The first “Or” condition that is true will determine the path taken.




**Question:** What should I do if none of the conditions are met?
**Answer:** Use the “None” branch option to handle scenarios where no conditions match. This branch can be used to ensure that contacts are still processed even if they do not fit the specified criteria.




**Question:** How precise is the "Time of the Day" condition?
**Answer:** The "Time of the Day" condition allows you to select specific times down to 15-minute intervals, offering granular control over when a condition should be met.




**Question:** Are there any prerequisites before using Scenario Recipes?
**Answer:** Some Scenario Recipes may have prerequisites. When you select a recipe, it will inform you of any requirements needed to ensure it functions correctly within your workflow.

![](https://assets2.modalsupport.net/1767189138785-image7.png)




**Question:** Can I set time-based conditions?
**Answer:** Yes. The **“Time of the Day” condition** allows granular control, letting you trigger workflow paths at specific times down to **15-minute intervals**.




**Question:** Can I use appointment-related conditions in If/Else?
**Answer:** Yes. You can branch workflows based on **Appointment Rescheduled**, **Start Date**, or **End Date**, provided you have selected either **Appointment Status** or **Customer Booked Appointment** triggers.

![](https://assets2.modalsupport.net/1773164609885-image14.png)