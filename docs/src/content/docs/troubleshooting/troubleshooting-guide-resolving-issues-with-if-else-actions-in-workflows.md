---
title: "Troubleshooting Guide: Resolving Issues with If/Else Actions in Workflows"
description: "This guide is designed to help you troubleshoot and resolve common issues with the If/Else actions in workflows. Whether you're facing conditions not…"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/FF4zBZGoiBK2CPe4m8AN"
sourceId: "FF4zBZGoiBK2CPe4m8AN"
category: "Troubleshooting"
---

This guide is designed to help you troubleshoot and resolve common issues with the If/Else actions in workflows. Whether you're facing conditions not triggering correctly or contacts not entering the right branch, this guide provides step-by-step solutions to ensure your workflows run smoothly.

### FAQ: Workflow Action - If/Else




**Question:** My If/Else action isn't working as expected in my workflow. How can I troubleshoot this?

**Answer:Check the conditions set in the If/Else action. Ensure that the variables or data you're referencing (e.g., contact tags, custom fields) exist and are properly configured. Also, confirm that your workflow trigger is firing as expected, as incorrect triggers can prevent actions from executing.

**How to check your conditions:**

1- Open your workflow and click on the If/Else action.

![](<https://assets2.modalsupport.net/1765452284137-unnamed - 2025-12-11T192433.742.png>)

2- Review the conditions set for the "If" branch.

![](<https://assets2.modalsupport.net/1765452302084-unnamed - 2025-12-11T192456.514.png>)

3- Ensure the conditions are correctly pulling in the variables or data you're referencing (e.g., tags, custom fields, etc.).

**Fix**: Review the condition criteria and verify the values being checked.




**Question:** Why are contacts not entering the correct branch of my If/Else action?

**Answer:This could be due to incorrect logic or conflicting conditions. Ensure that the conditions in the If/Else action are distinct and do not overlap. Conflicting conditions can cause contacts to not meet the correct criteria for the desired branch.

**How to adjust conflicting conditions:**

1- Open your workflow and click on the If/Else action.

2- Check both the "If" and "Else" branches.

3- Ensure that each branch has unique, non-overlapping conditions.

![](<https://assets2.modalsupport.net/1765452332779-unnamed - 2025-12-11T192525.980.png>)

4- Test the workflow with different contact data to verify the flow.

**Fix**: Double-check each branch’s condition for clarity and make sure there are no contradictions.




**Question:** I’m not seeing any contacts go through the Else branch of my If/Else action.

**Answer:If no contacts are going through the Else branch, all conditions for the If branch are likely to be met. This means contacts do not fall into the Else category.

**How to ensure contacts go through Else:**

1- Open your workflow and select the If/Else action.

2- Review the condition for the "If" branch.

3- Adjust the "If" branch’s condition to allow contacts that don’t meet the criteria to pass to the Else branch (e.g., changing the condition to check for "Does Not Equal" or "Is Empty").

![](<https://assets2.modalsupport.net/1765452366704-unnamed - 2025-12-11T192559.811.png>)

**Fix**: Verify that the condition for the If branch is strict enough to allow some contacts to fall into the Else category.




**Question:** How can I troubleshoot an If/Else condition that seems to trigger incorrectly?

**Answer:The issue could be with the data you're comparing or an incorrect condition type (e.g., checking for text when it should be a number). Review the exact condition being used and test it with a known value to ensure it behaves as expected.

**How to test an If/Else condition:**

1- Open your workflow and click on the If/Else action.

2- Look at the condition you’ve set in the "If" branch.

3- Test it with a known contact or variable value to see if it triggers the expected branch.

4- Adjust the condition if needed (e.g., switch from "contains" to "equals" for text values).

**Fix**: Test with sample data that you know fits the criteria to ensure the action triggers as expected.




**Question:** My If/Else action isn't showing up as an option in the workflow. What could be the issue?

**Answer:If the If/Else action isn't showing in the workflow, it might not be supported in the current template you're using or could be a bug. Check if you're using the latest version of the workflow template and ensure you're following the right workflow structure.

**How to add the If/Else action to a workflow:**

1- In your workflow builder, click on the "+" to add a new action.

2- From the available action types, select "If/Else."

3- If it doesn’t show, ensure that you’re on the right template or refresh the page to load any recent updates.

**Fix**: Try restarting your session or selecting a new workflow template to see if the action appears.




**Question:** How to add the If/Else action to a workflow?
**Answer:

1- In your workflow builder, click on the "+" to add a new action.

2- From the available action types, select "If/Else."

3- If it doesn’t show, ensure that you’re on the right template or refresh the page to load any recent updates.

**Fix**: Try restarting your session or selecting a new workflow template to see if the action appears.




**Question:** How do I properly test my If/Else action logic before launching?
**Answer:** To ensure your logic works, use sample contact data that covers various scenarios for your conditions. Observe which branch each test contact enters; if they do not follow the expected path, go back and adjust your criteria. This allows you to verify the flow without affecting your entire live database.  




**Question:** Can I have more than two branches in an If/Else action?

**Answer:** Yes! You can add multiple segments within a single If/Else action to create several branches (e.g., Branch A, Branch B, Branch C, and then the default "None" branch). This is much cleaner than stacking multiple separate If/Else steps.