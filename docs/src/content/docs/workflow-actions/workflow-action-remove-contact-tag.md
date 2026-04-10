---
title: "Workflow Action: Remove Contact Tag"
description: "In this article, you will learn more about the Remove Contact Tag action."
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/x1yIqRyO0s3SZDPnmPuO"
sourceId: "x1yIqRyO0s3SZDPnmPuO"
category: "Workflow Actions"
---

In this article, you will learn more about the Remove Contact Tag action. 

This action will allow you to remove tags that your leads currently have. Perhaps you have a workflow for when they submit an opt-in form that adds a tag, and you have another workflow for when they purchase a product. In the second workflow, you can remove the contact tag that was added in the opt-in workflow.

## What you will need:

-   A workflow 

### Part 1: Adding the Remove Contact Tag action

-   Click on “Add your first action” or the “+” to add an action. 

![](<https://assets2.modalsupport.net/1767693932408-unnamed \(85\).png>)

-   Select the option Remove Contact Tag

![](<https://assets2.modalsupport.net/1767693949618-unnamed \(86\).png>)

-   Filter by the tag you want to remove.
-   Toggle between standard values and a custom value picker for specific field types. To do so, simply change the field type to "Custom" via the three dots next to the field and select the desired value from the custom value picker.
-   In the custom values tags that are added can be string ‘tag-1’ or \[‘tag-1’, ‘tag-2’\], or ‘tag-1, tag-2’

**Note:** The feature currently applies to "Add Contact Tag" and "Remove Contact Tag" actions.

![](<https://assets2.modalsupport.net/1767693971808-unnamed \(87\).png>)

-   **Real-Life Use Cases for Standard values and Custom Value picker:**

-   Create tags combining service type and location, e.g., "bushtrimming-{{contact.postal\_code}}."
-   Generate tags based on the user setting a lead, like "setter\_{{user.name}}."
-   Add tags for sign-up offers or dates, such as "Signup-{{right\_now.month}}-{{right\_now.year}}."

-   Click on Save Action
-   Add more actions if needed
-   Once your workflow is complete, put it on Publish mode and save. 

![](<https://assets2.modalsupport.net/1767694026243-unnamed \(88\).png>)

-   To remove all tags from a contact, select the "Remove Contact Tag" action and enable the "Remove All Tags" toggle. Once the toggle is switched on, the "Tags" field will be disabled, and all tags will be removed automatically.

![](<https://assets2.modalsupport.net/1767694050369-unnamed \(89\).png>)

![](<https://assets2.modalsupport.net/1767694066369-unnamed \(90\).png>)

### Suggested Triggers to Combine with the Action

The Remove Contact Tag action can be combined with several triggers to automate the process based on specific events. Examples include:

-   **Customer Replied:** Remove tags based on keywords or phrases in the customer's response (e.g., if the customer responds with "unsubscribe").
-   **Appointment Status Changed:** Remove tags when the appointment status is canceled or rescheduled.
-   **Survey Submitted:** Remove tags based on survey responses, indicating a change in customer interest.

### Example

**Configuration Example**:

Imagine you're running a campaign where contacts are tagged as "Interested" when they sign up for a webinar. If they don't attend the webinar, you can remove this tag to prevent sending follow-up emails intended for participants who were engaged.

### FAQs




**Question:** What is the Remove Contact Tag action used for?
**Answer:** The Remove Contact Tag action is used to remove specific tags from contacts within a workflow. This can help in managing and updating contact tags based on their actions or status changes.




**Question:** How do I choose which tag to remove?
**Answer:** When setting up the Remove Contact Tag action, you will have the option to filter by the specific tag you want to remove. Select the tag from the dropdown menu that appears during the configuration.


**Question:Can I use the Remove Contact Tag action in multiple workflows?
**Answer:** Yes, you can use this action in any workflow where you need to remove tags from contacts. It can be applied to various workflows depending on your tagging strategy.




**Question:** What happens if I don't set the tag filter correctly?
**Answer:** If you don't select the correct tag or leave the filter blank, the Remove Contact Tag action might not function as intended. Ensure you select the precise tag you wish to remove to avoid errors.




**Question:** How do I test if the Remove Contact Tag action works?
**Answer:** You can test the action by running a test contact through your workflow and verifying if the tag is removed as expected. Review the contact’s tag list to confirm that the action was executed correctly.




**Question:** Can I combine the Remove Contact Tag action with other actions?
**Answer:** Yes, you can combine the Remove Contact Tag action with other actions within the same workflow. For example, you might use it alongside actions like adding new tags, sending notifications, or updating contact details.




**Question:** How can I remove all tags from a contact at once?
**Answer:** To remove all tags from a contact, select the "Remove Contact Tag" action in your workflow. Then, enable the "Remove All Tags" toggle. Once the toggle is switched on, the "Tags" field will be disabled, and all existing tags will be automatically removed from the contact.




**Question:** How can I test if the Remove Contact Tag action works?
**Answer:** Run a test contact through your workflow and check the contact’s tag list to confirm that the tags are removed as expected.




**Question:** What is the difference between "Standard" and "Custom" values in the tag field?

**Answer:** Standard values allow you to pick a pre-existing tag from a static dropdown list. The **Custom Value Picker** (accessed via the three dots next to the field) allows you to use dynamic variables, like a contact’s zip code or the current date, to remove tags that were generated automatically.




**Question:** Is it possible to automatically remove tags if a customer wants to unsubscribe via SMS?

**Answer:** Definitely. You can combine the **Customer Replied** trigger with the **Remove Contact Tag** action. Set the trigger to look for keywords like "unsubscribe," and then use the action to strip away marketing-related tags from that contact.