---
title: "Workflow Action: Update Contact Field"
description: "The update contact field action in workflows allows you to update the value of a specific field for a contact. With this action, you can specify a new value…"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/V2IttTxmrNYd7hCWGGZa"
sourceId: "V2IttTxmrNYd7hCWGGZa"
category: "Workflow Actions"
---

The update contact field action in workflows allows you to update the value of a specific field for a contact. With this action, you can specify a new value for the field, and the contact's existing field value will be replaced with the new value. You can also clear the field, i.e., empty the input field or reset it to the default value. 

In the article you will learn how to properly set up the Workflow Action: **Update Contact Field or Clear Contact Field.**

### Notes

-   **Custom Fields Only:** Remember that clearing fields apply only to custom contact fields, not to standard fields.
-   **Testing is Crucial:** Always use the Test Workflow feature to verify that the "Update Contact Field" or "Clear Contact Field" actions perform as expected before going live.
-   **Proper Setup:** Ensure that the correct field is selected and that any dynamic values are accurately set up to prevent errors or unintended data changes.
-   **Expanded Dynamic Field Support:** You can  use Dynamic Custom Values in more types of fields within the Update Contact Field action. These include:

Numeric fields  
Dropdown/Select fields (no manual option ID input needed)  
Monetary fields

-   **Live Variable Integration:** Instead of manually typing values, you can dynamically pull in data from previous steps or stored fields. This streamlines workflows and reduces duplication or manual entry.
-   **Improved Workflow Logic:** Users often had to create workaround logic to update contact fields based on earlier steps. you can **directly assign values** from earlier workflow steps without needing extra setup.

### What are some good usage cases for this?

Here are some excellent usage cases for the "Update Contact Field" and "Clear Field Data" actions in workflows:

-   **Personalization:** You can use the "Update Contact Field" action to personalize your email marketing campaigns by updating contact fields such as first or last name.
-   **Sales Pipeline Management:** You can use the "Update Contact Field" action to update the stage of a contact in your sales pipeline based on their progress.

### Differences between Update and Clear Update Field

### Update Field Data 

Updates the selected field with the provided value. 

The "Update Contact Field" action in workflows allows you to update the value of a specific field for a contact. This feature is useful when updating a contact field with a new value, such as a phone number, email address, or custom field.

To use the "Update Contact Field" action, you must add it to your workflow, select the contact field you want to update, and specify the new value you want to set for the field. You can update the field with a static value, a fixed value that you specify in the workflow, or a custom value, which is a value dynamically generated based on other data in your workflow.

![](https://assets2.modalsupport.net/1775247951878-image10.png)

![](<https://assets2.modalsupport.net/1764681365379-unnamed - 2025-12-02T211558.691.png>)

### Clear Field Data 

Resets the selected field to the default value (clears the data). 

Clearing contact fields is a feature that allows you to remove the existing value of a contact field, effectively resetting it to an empty value. This feature is useful when removing a previously entered value from a contact field.

**Note:** It's important to note that the clear field data feature currently supports only the Contact Custom Fields. This means you can use only clear custom fields you've created for your contacts, not standard fields like first name, last name, or email.

When you use the clear field data feature, the contact field value is set to NULL or empty. To clear a contact field in a workflow, add the "Update Contact Field" action, select the contact field you want to clear and add a filter for which field you want to clear. Once the workflow is executed, the contact field will be cleared of its previous value and set to an empty value.

![](<https://assets2.modalsupport.net/1764681387461-unnamed - 2025-12-02T211621.242.png>)

### Step 1: Start a new workflow or edit an existing one

-   Navigate to Automation on the left > Workflows on the top and create a new workflow or edit an existing workflow.

![](<https://assets2.modalsupport.net/1764681407202-unnamed - 2025-12-02T211638.981.png>)

### Step 2: Set up applicable Workflow Trigger(s). We have multiple articles available to explain the setup of each of the Workflow Triggers. Feel free to review our articles for more information on setting these up.

### Step 3: Setting up the Update Contact Field/Clear Contact Field action

-   Click on the “**+**” symbol below the trigger to add an action.

![](<https://assets2.modalsupport.net/1764681423258-unnamed - 2025-12-02T211656.888.png>)

-   Under Actions, select **Update Contact Field** in the **Actions** section.

![](<https://assets2.modalsupport.net/1764681439897-unnamed - 2025-12-02T211714.037.png>)

**Note:** You can change this action's workflow builder display name using the textbox below **Action Name**. Note that this will only affect the display name within the workflow builder and has no other impact on the content or functionality of this Workflow Action.

-   Next, click the blue “**Add Field**” button

![](<https://assets2.modalsupport.net/1764681459361-unnamed - 2025-12-02T211732.755.png>)

-   This will pull up the field's drop-down, giving you the ability to select any that you want to update

-   **For Example:** in this situation, we will select “**Business Name**” and then type into the box the specific information

![](<https://assets2.modalsupport.net/1764681480269-unnamed - 2025-12-02T211753.459.png>)

**Tip:** if you click on the **Tag** icon it will pull up custom values. You can select any of the values. They will now automatically be populated into this action. (**Please Note:** _The information has to be entered into the account_)

![](<https://assets2.modalsupport.net/1764681499000-unnamed - 2025-12-02T211811.940.png>)

![](<https://assets2.modalsupport.net/1764681508741-unnamed - 2025-12-02T211820.919.png>)

-   Once you have entered the desired information, Press **Save Action** in the bottom right corner

![](<https://assets2.modalsupport.net/1764681526975-unnamed - 2025-12-02T211838.957.png>)

### Step 4: Press Save in the top right corner of your browser to save the workflow

-   If your Workflow is ready to be enabled, make sure the toggle switch under **Save** is set to **Publish**

![](<https://assets2.modalsupport.net/1764681545080-unnamed - 2025-12-02T211857.130.png>)

-   Be sure to test your Workflow to ensure it is set up correctly using the **Test Workflow** button next to the **Publish** toggle switch.
-   For an in-depth overview of Workflow Testing see our article, “Using the Testing Features in Workflows”

Now the Workflow is set up and ready to go with the Update Contact Field Workflow Action!

### Pro Tips for Using 

-   **Use clear and specific field names** to avoid confusion when updating or clearing contact data.
-   **Test workflows before activation** to ensure updates and field-clearing work as expected.
-   **Only custom fields can be cleared**, while standard fields like name and email cannot be reset.
-   **Use dynamic values** to automatically populate fields with relevant data.
-   **Ensure accuracy in updates** by verifying data before applying changes.
-   **Avoid overwriting important information** unless necessary for workflow automation.
-   **Regularly review and clean up custom fields** to maintain organized contact data.
-   **Monitor workflow logs** to track changes and troubleshoot any issues.
-   **Use field clearing for data resets** when old or incorrect information needs removal.
-   **Keep a backup of critical data** before making bulk updates in workflows.

### FAQs


**Question:What does the "Update Contact Field" action do?
**Answer:** The "Update Contact Field" action allows you to set a new value for a specific contact field. This could be any field you’ve defined, such as phone numbers, custom fields, or other data points. The existing value in that field will be replaced with the new value you provide.




**Question:** How does the "Clear Contact Field" action differ from the "Update Contact Field"?
**Answer: 

-   **Update Contact Field:** Replaces the current value of the contact field with a new specified value.
-   **Clear Contact Field:** Resets the selected field to an empty state or its default value. This action is only applicable to custom contact fields, not standard fields like first name or email.




**Question:** What are some common use cases for the "Update Contact Field" action?
**Answer: 

-   **Personalization:** Update contact fields such as first name, last name, or preferences to personalize email campaigns or communications.
-   **Sales Pipeline Management:** Change the stage or status of a contact within your sales pipeline as they progress through different stages.
-   **Data Correction:** Correct or update any inaccurate contact information.




**Question:** What are some use cases for the "Clear Contact Field" action?
**Answer: 

-   **Data Reset:** Remove outdated or incorrect information from custom fields to maintain accurate records.
-   **Field Management:** Clear custom fields that are no longer relevant or needed for specific contacts.
-   **Reinitialization:** Prepare a contact for new data entry by clearing previous values.




**Question:** How do I set up the "Update Contact Field" action in a workflow?
**Answer: 

-   Start by creating or editing a workflow.
-   Add the “Update Contact Field” action from the Actions section.
-   Select the contact field you want to update and specify the new value. You can use static values or custom values from other parts of the workflow.
-   Save the action and the workflow.




**Question:** How do I set up the "Clear Contact Field" action?
**Answer: 

-   Similar to updating a contact field, start by adding the “Update Contact Field” action to your workflow.
-   Select the custom contact field you want to clear.
-   To clear the field, ensure you leave the value field empty, which will reset it to NULL or empty.
-   Save the action and the workflow.




**Question:** Are there any limitations to using the "Update Contact Field" action?
**Answer:** Yes, this action only supports custom fields created in your contact profiles. Standard fields like first name, last name, or email cannot be cleared using this action.




**Question:** Can this action overwrite existing important information?
**Answer:** Yes, so it’s important to verify the data before applying changes and avoid overwriting critical information unless intended for workflow automation.  




**Question:** Can I use dynamic values instead of typing in a static value for a field update?

**Answer:** Yes. You can use Dynamic Custom Values and Live Variable Integration to pull in data from previous workflow steps or stored fields. This is supported in various field types, including numeric, monetary, and dropdown/select fields, allowing the system to automatically populate the information without manual entry.