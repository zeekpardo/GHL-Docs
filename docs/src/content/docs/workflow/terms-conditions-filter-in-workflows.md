---
title: "Terms & Conditions Filter in Workflows"
description: "The T&C Filter allows businesses to filter users in workflows based on their agreement to the Terms and Conditions (T&C). This ensures that only users who…"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/nzZSuBHfioXrpNr1sqAK"
sourceId: "nzZSuBHfioXrpNr1sqAK"
category: "Workflow"
---

The **T&C Filter** allows businesses to filter users in workflows based on their agreement to the **Terms and Conditions (T&C)**. This ensures that only users who have accepted the T&C can proceed to specific workflow steps, improving compliance and segmentation.

With this filter, you can automate different actions based on user consent, streamlining processes and ensuring regulatory alignment.

### Key Benefits of the T&C Filter

-   **Better User Segmentation** – Automate workflow actions based on whether users have accepted the T&C.
-   **Enhanced Compliance** – Ensure only users who have agreed to terms continue through specific workflow steps.
-   **Custom Workflow Paths** – Create targeted journeys for users who accepted or declined the T&C.

### How to Add the T&C Filter in a Workflow

Follow these steps to integrate the **T&C Filter** into your workflow:

#### 1\. Open Workflows and Select a Trigger

-   Navigate to the **Workflows** section.
-   Select an existing workflow or create a new one.

![](<https://assets2.modalsupport.net/1766487245244-unnamed \(24\).png>)

-   Choose a workflow trigger such as:
    -   **Form Submitted**
    -   **Survey Submitted**
    -   **Quiz Submitted**

![](<https://assets2.modalsupport.net/1766487263561-unnamed \(25\).png>)

#### 2\. Add the T&C Filter

-   Click **Add Filters** in the workflow setup.
-   Select the **T&C Filter** from the available options.

![](<https://assets2.modalsupport.net/1766487282845-unnamed \(26\).png>)

#### 3\. Configure the Filter

-   Choose one of the following conditions:
    -   **Users who have agreed to the T&C**
    -   **Users who have not agreed to the T&C**
-   Apply the filter to the relevant workflow step based on the condition.

![](<https://assets2.modalsupport.net/1766487307714-unnamed \(27\).png>)

#### 4\. Save and Test the Workflow

-   Click **Save** to apply the changes.
-   Run a **test submission** to verify that users are correctly filtered based on their T&C agreement.

### Special Considerations

-   The **T&C Filter** applies only to workflows triggered by **form, survey, or quiz submissions** that include a T&C checkbox.
-   If the T&C agreement is **mandatory**, all users will have agreed, making this filter unnecessary.
-   If users are required to agree to the T&C before submission, this filter can be used for additional segmentation.

**Use Cases**

-   **Promotional Offers**: Exclude users who have not agreed to updated terms from receiving certain offers.
-   **Feature Access**: Limit access to premium features based on users' agreement to terms and conditions.
-   **Compliance Management**: Ensure that only compliant users are included in regulated workflows.

### FAQs


**Question:What is the purpose of the T&C Filter?
**Answer:** The filter allows workflows to segment users based on whether they have accepted the Terms and Conditions, helping automate different actions accordingly.


**Question:Can I apply the T&C Filter to all workflows?
**Answer:** No, it can only be applied to workflows triggered by forms, surveys, or quizzes where a T&C agreement option is present.


**Question:What happens if the T&C is mandatory?
**Answer:** If the T&C agreement is required, all users will have accepted it, making the filter redundant. It is more useful for cases where agreement is optional.


**Question:What happens to users who haven't interacted with the T&C?
**Answer:** They will be categorized as “Not Agreed,” ensuring clarity in your workflow decisions.


**Question:Where can I find this filter in my workflow settings?
**Answer:** You can find it under Workflow Triggers → Add Filters → T&C Filter when setting up a Form Submitted, Survey Submitted, or Quiz Submitted trigger.


**Question:Can I apply this filter to existing contacts already in my database?
**Answer:** No. This filter is "event-based," meaning it evaluates the user at the moment they submit a specific form. To filter existing contacts, you would need to use a bulk segmentation tool or a "Tag" filter based on their past activity  




**Question:** How can this filter be used if I am launching a new promotional offer?
**Answer:** You can use the filter to create Custom Workflow Paths. For example, you can set the workflow to automatically exclude any users from receiving promotional emails if they have not agreed to your updated marketing terms.




**Question:** Does this filter work for "Order Form" submissions?

**Answer:** Yes, as long as the order form is built using the standard form or survey elements that include a T&C agreement field.