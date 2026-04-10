---
title: "Workflow Trigger: Survey Submitted"
description: "In this article, you will learn how to set up the workflow trigger form submitted. This can be attached to funnels, websites, and calendars and when they fill…"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/mgsItgv7KxyE0D6eUR6e"
sourceId: "mgsItgv7KxyE0D6eUR6e"
category: "Workflow Triggers"
---

In this article, you will learn how to set up the workflow trigger form submitted. This can be attached to funnels, websites, and calendars and when they fill out a survey it triggers the workflow.

### **Step 1:** Start a new workflow or edit an existing one

-   Navigate to Automation on the left > Workflows on the top and create a new workflow or edit an existing one

![](https://assets2.modalsupport.net/1762554683952-image5.png)

### **Step 2:** Creating and Editing the Trigger

-   Click “**Add New Workflow Trigger**”

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcKySLdcGOzPi6f1NY7xNrcwEcgcslNxbMY-AZGPu4G-0oTZZ3-rTJDCYNZU1dFc6xaYnNc6HJ_Ad_08ewcwQ6MpSrZ-93xrLftuOJ3CVT1j_DuQ2YNYKYFChlGeP-fHAuz9EFgvQ?key=NkWJhQy7ATM070V342Rqvg)

-   Select “**Survey Submitted**” in the **Contact Actions** section of the Workflow Triggers Menu or use the search feature. Once selected, the Trigger setup menu will appear

![](https://assets2.modalsupport.net/1762554895150-image1.png)

-   (_Optional_) You can change the workflow builder display name of this trigger using the textbox below **Workflow Trigger Name**. Note that this will only affect the display name within the workflow builder and has no other impact on the content or functionality of this Workflow Trigger.

-   Press **\+ Add filters** to expand the **Filters** section of the Trigger setup menu

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfQX47eo8OqooYQ-1T7WW06aWKBi6DiKHy8rBZpq2sB7IZDPe_YTCYZT7FpHbJ_KROfvRTUuDJGueKrSO9OrCdgOPOuFHcHCuuKauG0HS7hMqhgFHGN58doqBfFHahMFPKInkJZeH72pd_qfQp5AQRq5QFS?key=NkWJhQy7ATM070V342Rqvg)

-   Unlike forms, surveys can use logic, meaning depending on the answer you can take them to a specific question or slide.
    -   **Disqualified:** depending on the lead answer it can end the survey prematurely 
    -   **Survey is**: this specifies which survey the workflow is checking for
    -   **Multi Select:** this allows selecting multiple options within the **‘Survey is’** filter with just one trigger.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeZrxNDKhXenw6yOfuamHHF67OK-hlNWhdIrCGS4XfSQy0Hrfh9MzyZMxM1L9j0uNrdE6vLV1thF0Q-UP6gCISy4ujiO3DGYqCN9rIfjQp4iofEKp-XR4xP3DnSswACmnwSAnn9k5hA3LtjXaVnMutP28Z6?key=NkWJhQy7ATM070V342Rqvg)

-   Press **Save Trigger** in the bottom right corner of the Trigger setup menu

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdNykQpfNp44fA2p2ROtRrWt1HhgBk_qg46DIyCfTpb41pR5BVQb4RiiQHVsu1SubnxLMsLOShOCZy4jYzkm5FhwDKo_Rm0mHDsywG4_8EQ_Ib_1xkzPrBJAeEgwuhSMbrGlVTv?key=NkWJhQy7ATM070V342Rqvg)

### **Step 3:** Set up applicable Workflow Action(s). We have multiple articles available to explain the setup of each of the Workflow Actions. Feel free to review our articles on these for more information on setting these up.

**_Pro Tip:_** You can use any Workflow Actions to be triggered by the Survey Submitted trigger or you can leave this workflow without any actions.

### **Step 4:** Press **Save** in the top right corner of your browser to save the workflow

-   If your Workflow is ready to be enabled, make sure the toggle switch under **Save** is set to **Publish**
-   Be sure to test your Workflow to ensure it is set up correctly using the **Test Workflow** button next to the **Publish** toggle switch. 

![](https://assets2.modalsupport.net/1762554990352-image4.png)

-   For an in-depth overview of Workflow Testing see our article, “Using the Testing Features in Workflows”

Now your workflow is set up and ready to go with the Survey Submitted Workflow Trigger.

### **Example**

You’d like to set up a workflow that activates when a contact submits a feedback survey and is not disqualified. The workflow will then send a follow-up email thanking the contact for their participation.

**Workflow Trigger Name:** "Feedback Survey Submitted"  
**Filters:**

-   **Disqualified:** is false (Only trigger if the contact is not disqualified)
-   **Survey:** "Customer Satisfaction Survey"

**Workflow Steps:**

1.  **Trigger:** Survey Submitted (as set up in the filters above)
2.  **Action:** Send Email - "Thank you for your feedback!"
3.  **Action:** Update Contact Field - Set the survey status to "Completed."

### FAQs




**Question:** What is the Survey Submitted Workflow Trigger?
**Answer:** The Survey Submitted Workflow Trigger is an automation tool that activates workflows based on the submission of a survey. This trigger can be attached to funnels, websites, and calendars. When a user completes and submits a survey, this trigger initiates the corresponding workflow actions.




**Question:** What are the steps to set up the Survey Submitted Workflow Trigger?
**Answer: 

1.  **Start a New Workflow or Edit an Existing One:**
    -   Navigate to the workflow section within your platform and either create a new workflow or select an existing one to edit.
2.  **Creating and Editing the Trigger:**
    -   Click on “Add New Workflow Trigger.”
    -   Select “Survey Submitted” from the Contact Actions section of the Workflow Triggers Menu, or use the search feature.
    -   (Optional) Rename the trigger for easier identification within the workflow builder.
3.  **Add Filters:**
    -   Click on + Add filters to expand the Filters section.
    -   Configure filters such as:
        -   **Disqualified:** Ends the survey if certain answers are given.
        -   **Survey is:** Specifies the survey to be monitored.
        -   **Multi Select:** Allows selecting multiple options within the ‘Survey is’ filter.
4.  **Save the Trigger:**
    -   Press “Save Trigger” in the bottom right corner of the Trigger setup menu.
5.  **Set Up Workflow Actions:**
    -   Configure the actions that should be executed when the survey is submitted. For more information on setting up Workflow Actions, refer to related articles.
6.  **Save and Publish the Workflow:**
    -   Press “Save” in the top right corner to save the workflow.
    -   If ready, enable the workflow by setting the toggle switch to “Publish.”
    -   Test the workflow using the “Test Workflow” button to ensure it functions as intended.
7.  **Testing:**
    -   For detailed guidance on testing workflows, see the article “Using the Testing Features in Workflows.”




**Question:** Can I customize the Survey Submitted Trigger?
**Answer:** Yes, you can customize the Survey Submitted Trigger by:

-   Renaming it for easier identification.
-   Applying filters to specify conditions such as particular surveys or handling disqualified responses.
-   Using multi-select filters to monitor multiple surveys with a single trigger.




**Question:** How does the Disqualified filter work?
**Answer:** The Disqualified filter allows the workflow to terminate the survey if certain answers are provided. This is useful for excluding respondents who do not meet specific criteria from continuing the survey or triggering subsequent actions.




**Question:** What should I do if the Survey Submitted Trigger does not activate the workflow?
**Answer:** If the trigger does not activate as expected:

-   Ensure that the survey submission meets the configured filters and conditions.
-   Check the workflow configuration and make sure all required actions and settings are correctly set up.
-   Verify that the workflow has been published and is active.
-   Test the workflow to identify any issues and ensure proper functionality.




**Question:** Can I use the Survey Submitted Trigger with other types of workflows?
**Answer:** Yes, the Survey Submitted Trigger can be used in conjunction with various workflow actions. You can configure the workflow to perform different actions based on survey responses, such as sending notifications, updating records, or other custom tasks.




**Question:** How do I test the Survey Submitted Trigger?
**Answer:** Testing involves:

-   Submitting a test survey to ensure the workflow is triggered as expected.
-   Using the “Test Workflow” button to simulate survey submissions and verify that all actions execute correctly.
    -   **NOTE:** For an in-depth overview of testing workflows, see our article, “Using the Testing Features in Workflows.”




**Question:** Can this trigger handle survey logic?
**Answer:** Yes. Surveys with conditional logic can be managed with this trigger, ensuring that workflows only execute for respondents who meet specific criteria or complete certain paths in the survey.




**Question:** Does changing the Workflow Trigger Name affect how the trigger works?

**Answer:** No. Changing the display name in the textbox only affects how the trigger is labeled within the workflow builder for your own organization. It has no impact on the actual content, logic, or functionality of the trigger.




**Question:** Can I trigger different emails based on the specific score a user got in the survey?
**Answer:** Yes, but you don't do it at the trigger level. After the **Survey Submitted** trigger, add an **If/Else** action. You can then create branches based on the "Contact Details" or "Custom Fields" where the survey scores/answers are stored.