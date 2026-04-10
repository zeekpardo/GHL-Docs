---
title: "How to Utilize Lead Values in Pipelines and Triggers"
description: "Using lead values in pipelines allows you to help manage your business effectively. Typically a new lead, or ‘cold’ lead, in a beginning pipeline stage isn’t…"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/79OUkWLKt8NS7qycRVqJ"
sourceId: "79OUkWLKt8NS7qycRVqJ"
category: "Triggers"
---

Using lead values in pipelines allows you to help manage your business effectively. Typically a new lead, or ‘cold’ lead, in a beginning pipeline stage isn’t worth as much value as a ‘hot’ lead that’s farther along in the pipeline. In , you can create workflows to assign lead values based on specific actions.  In this tutorial, we’ll teach you about lead values and how they function within a pipeline. By using workflows, you can automate features to save time and work more efficiently. 

Please note, in our example, we’re showing you how to specifically use a contact tag to create a lead value, and then use an appointment status within a calendar to increase the lead value. This example features a lead with a $1,000.00 value when imported with a particular tag, and an increased value at $2,500.00 once an appointment is booked within a particular calendar. There are many more options you can customize as you need for your own business, to ensure you have the lead values and triggers set up appropriately for your needs. Follow our steps below for one popular option, or you can feel free to customize your lead values in pipelines.

## **Steps**

### **Step 1: Create your workflow**

-   Go to workflows, click on Create New Workflow, and select Start From Scratch or edit the workflow if you already have it created.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcE_v3u07uD2nGkzm3-09kcN10AyV_kDMVEyYM9Fc4AQB87Jm1KJQl3gE4_vCR0vpT7XMBrbDlPeA_lsL6qsFmjbU_dRQnitmGo1uoLDpVDokNsk0lGcnq1d40e11S6M2tXoB914Nn9isLRqFXbUZZPlty0?key=U-unnK1hui1d6-fza2pXEw)

### **Step 2: Add the trigger**

In this example, we’re creating a trigger so that if a particular contact tag is added, then the lead will be assigned a $1,000.00 value in the “Lead” stage of the “Demo Pipeline”.

-   Determine which tag you want to trigger the action (we’re using “Import”.)

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXffw1nNJKBy_DWNTBODO3nTA3MS7eW5wA0vB6m74x5MTrtjjjuJF_sVmIJpruiHMAN2Jnf4V294n0v_5OtJwu1Qod6Ft7Xa2wKRykpsyltyowuIz1dFExV3FqjLnxnr9ln8JBXUM0g2d9T5X-mhjSIZaxI4?key=U-unnK1hui1d6-fza2pXEw)

### **Step 3: Add the action**

-   Add the action Create Or Update Opportunity, and choose the pipeline and stage.
-   Fill the data

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcwDWM7m4G8vM7BMyLkXJLrXmuaehKh0pgTY57C-LVdwiMUVlgVW8gnE-m-x5XywkJ3sqo-a5tBI-c1tHsUFiLhnVa8Y-BS1CUgG6_xYg_me4dcNXh-RuPQKn7lPw50gWKgnPqdb8erNIwmoPrfVn0HmHtO?key=U-unnK1hui1d6-fza2pXEw) 

-   Switch it from Draft > Publish in order to run.
    -   **_NOTE_:** You can add additional actions to the trigger if you wish.

### **Step 4: Add the “Import” tag to applicable contacts.**

-   There are multiple ways to add the tag to contacts (check out our tutorials on Tags for more details.) For example, you may add one manually to an individual contact within their profile, do a Bulk Action to add to multiple existing contacts, or add one to a newly imported list.

### **Step 5: View the Lead in your Pipeline**

-   Navigate to Opportunities.
-   Here you’ll see the Contact you added the tag to (and thus assigned the lead value to) from Step 2.
-   You can drag and drop the Contact into different states, and the lead value will remain the same.

Continue on below to learn how to increase the value of a lead as the pipeline stage advances. The steps below outline how you can automate (through triggers) increased value based on stage advancement, rather than using the manual ‘drag-n-drop’ to move leads through a pipeline.

### **Step 6: Create a 2nd workflow with a new trigger to allow for increasing Value as Stages Advance**

-   Create a new workflow and set up the rule so that when the appointment status is confirmed within the specific calendar, the action will occur.
-   Set the action to Add/Update Opportunity > (Choose the appropriate pipeline) > Pick “Booked Call” for the stage.
-   Add a new value.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXd7tUyyD-LT5bTz-I0L-vWPG03aBgp89V9JmVFK8ZVzdpjR7-i6AVAAEFLokBBcEJVLnlbCA0kZM2V5vOnkIwIFX-D8wqseSwdvED6EeELZWOsR-QgnnxyRbxa3RytgHfsBslDR9jCUnTKZXT4GuhqBi4H2?key=U-unnK1hui1d6-fza2pXEw)

-   Save to confirm your changes.
-   Set the workflow to “Publish” mode.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfswtQj1YamfW3gYmkQITxSDu51hQiZRyEj97RlO37hv-_1_vLpW0HtqsrvO9kBQme7hHlfOmC5uvyCSFGJI9g8-14A0MFT1C9omDuDLfvWqoDDa8uXSyBCk8PQmUST_mDbp46U5whAp8Ff3M8Bnb0gjvhI?key=U-unnK1hui1d6-fza2pXEw)

### **Step 7: Booking an Appointment to advance the lead value**

-   Book an appointment.
    -   You can do this manually for the appropriate Contact within the calendar set in the workflow above. Or, the lead can also book directly themselves within the same calendar, for the trigger to fire off.
-   Be sure the status is “Confirmed”.
-   Now if you return to the pipeline, you’ll see the Contact has advanced pipeline stages and has an increased value.

**_NOTE_:** You may manually update a lead value within the Contact’s box in a pipeline. Click into the Contact’s opportunity box in a pipeline. In the popup that appears, you may manually set a lead value. Save to confirm your changes.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXenagouv-8lapnfLmmX3jbCfqoKnkR2Cy5WQClohzM9TiN8HTfviZboaE5lk83oqW_eEgSOXJG1w3rBs2kzEn_IBffG69OjEJdOe4-HfajZnXae1M6UQNyn3e_f_cbElhqe8rYvQEKR8zq52c_Jdy0fGRgO?key=U-unnK1hui1d6-fza2pXEw)



## **FAQ’s**



**1\. What is the purpose of assigning lead values in a pipeline?**

Assigning lead values helps manage your business more effectively by tracking the financial worth of leads as they progress through different stages in your pipeline. Typically, leads further along in the pipeline (like a "hot" lead) are worth more than those in the early stages ("cold" leads). This allows you to prioritize efforts based on lead potential.

**2\. How can I automate lead value assignment using workflows?**

You can create workflows that automatically assign lead values based on specific triggers, like adding a contact tag or booking an appointment. For example, a lead could be assigned a value of $1,000 when imported with a specific tag, and that value could increase to $2,500 when the lead books an appointment in your calendar.

**3\. What’s the first step to set up lead value automation?**

Start by creating a workflow in the "Workflows" section. Select "Start From Scratch" or edit an existing workflow. Then, set a trigger like adding a specific contact tag to assign a lead value.

**4\. How do I create a trigger to assign a lead value based on a contact tag?**

Within the workflow, add a trigger that activates when a specific tag is added to a contact (e.g., “Import”). Next, add an action to create or update an opportunity in the chosen pipeline and stage. Assign the desired lead value (e.g., $1,000) and publish the workflow.

**5\. Can I add tags to multiple contacts at once?**

Yes, tags can be added to multiple contacts using bulk actions. You can also manually add tags to individual contacts or apply them when importing a contact list. Check out the tutorials on Tags for more detailed instructions.

**6\. How can I increase a lead’s value as they move through the pipeline stages?**

Create a second workflow that triggers when an appointment status is confirmed in a specific calendar. The action can update the opportunity stage (e.g., "Booked Call") and assign a higher lead value. This automation allows lead values to increase as they advance in the pipeline without manual intervention.

**7\. Is it possible to manually adjust a lead’s value within the pipeline?**

Yes, you can manually update the lead value by clicking into the contact’s opportunity box within the pipeline. In the popup that appears, you can edit the lead value and save the changes.

**8\. What happens if a lead books an appointment directly?**

If the lead books an appointment directly in the specified calendar with the correct status (e.g., "Confirmed"), the trigger will fire, advancing the lead in the pipeline and updating the value based on your workflow settings.