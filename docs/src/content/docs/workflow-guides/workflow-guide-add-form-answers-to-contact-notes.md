---
title: "Workflow Guide: Add Form Answers to Contact Notes"
description: "Workflow Guide: Add Form Answers to Contact Notes"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/epU2cE2DtQhNbogMUmH4"
sourceId: "epU2cE2DtQhNbogMUmH4"
category: "Workflow Guides"
---

**Workflow Guide: Add Form Answers to Contact Notes**

In this article, you will learn to automate the population of customer information into the notes section of your contacts. This advanced technique ensures that your customer data is seamlessly integrated, saving you time and effort. In this guide, we will walk you through the process step-by-step, empowering you to effortlessly manage your contact data.

### **Custom Forms:**

Before you begin, ensure you have customized forms tailored to your specific data needs. If you haven't set up custom forms yet, refer to our article, "How To Customize a Form Or Survey," for detailed instructions.

### **Step 1: Create the Workflow Automation**

-   Begin by navigating to **Automations > Workflows** and create a new Workflow.

![](https://assets2.modalsupport.net/1763156124119-image5.png)

-   Under **Workflow Triggers**, select **“Form Submitted”**

-   In the **Filters** section, choose **“Form is”** and select the specific form from the dropdown menu that you want to extract data from.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcwd568hbnThV-_dilCh6sVfJKkGHYkwrDJ5MclwKHXfILrUC9LFAnUiFRHJ5J_sltntO36Uv0uaFAOila-_GnlAn_MV-9W5mMjpc0hGliwyyBONXudKforA1Uc5DrEGrNpEfOGPGtEUa-MZC9tcDggio9k?key=nwQiRc3aWHLCEX3JELVOsQ)

-   Click **“Save Trigger”** at the bottom right of the screen to confirm your settings.

### **Step 2: Set up the “Add to Notes” Action**

-   Navigate to the **Actions** section and choose **“Add to Notes”** under the CRM section.

-   In the **“Custom Values”** dropdown menu, select **“Contacts.”**
-   A secondary dropdown will appear; here, choose the specific form data you want to add to your contact notes.

![](https://assets2.modalsupport.net/1763156164282-image2.png)

![](https://assets2.modalsupport.net/1763156236970-image1.png)

-   When your Custom Value is selected, a corresponding code will appear in the text box; this code will be replaced with the form submission data in your contact’s notes.

**_Note:_** _Consider adding a field title for clarity._

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcYcq6L4gPW_uT9CcgIDDS1vbmZjcTaToS46qkgCjiw2NxsGIral8R81TL8am9YEp1qlNBD06UNwMoYPcS_Hby3VYQQpFF4IGjLTRZoyZ1XfDci5raoFQYEXnII_e1it8f5R_T4HsT2x3JhPHwiB8nzgFA?key=nwQiRc3aWHLCEX3JELVOsQ)

-   Click **“Save Action”** in the bottom right corner of your screen to confirm your action settings.

## **Finalizing and Publishing**

-   Toggle the **“Publish”** switch to activate your workflow.
-   Click **“Save”** in the top right corner to apply your changes.

With this setup configured the system will automatically populate contact notes with form submission data. With this streamlined process, you can focus on meaningful interactions with your customers while your system takes care of organizing crucial data points.

For any additional assistance or troubleshooting, do not hesitate to contact our support team.

## FAQs




**Question:** Can I use multiple forms to populate the notes section for a single contact?
**Answer:** Yes, you can create separate workflows for each form. Each workflow can populate data into the notes section of the same contact, provided the workflows are configured correctly.




**Question:** What happens if I update the form data after it’s already been added to the notes?
**Answer:** If the same form is resubmitted with updated information, the new data will replace the old data in the notes if the workflow is triggered again. Alternatively, you can configure the workflow to append the updated data instead of overwriting it.




**Question:** Can I include data from multiple fields within the same form in the notes section?
**Answer:** Yes, you can select multiple form fields and add them to the notes section by using multiple custom values within the same “Add to Notes” action.




**Question:** Is it possible to format the notes section to make the data more organized?
**Answer:** Yes, you can add titles, line breaks, or custom labels before each custom value in the notes section to ensure the data is well-structured and easy to read.




**Question:** What happens if a contact already has notes? Will this workflow overwrite existing notes?
**Answer:** The workflow will add the new form data to the existing notes. It does not overwrite existing notes unless explicitly configured to do so. Be mindful of this when setting up the workflow to avoid clutter or duplication.




**Question:** What should I do if I encounter issues with the workflow?

**Answer:** If you experience any problems or unexpected behavior, contact the support team for assistance. They can help troubleshoot and ensure your workflows populate contact notes correctly.




**Question:** Does this work for Surveys as well as Forms?

**Answer:** Yes. The logic is identical. Simply change the Workflow Trigger to **"Survey Submitted"** and select your survey. You can then map any of the survey answers into the contact notes section using the same method.




**Question:** Is there a prerequisite for setting up this workflow?

**Answer:** Yes. You must have **customized forms or surveys** already created and tailored to your data needs. If you haven't done this yet, you should refer to the "How To Customize a Form Or Survey" guide before starting the automation.




**Question:** Can I delete or edit an automated note once it has been created?

**Answer:** Yes. Once the workflow populates the note, it behaves like a manual note. You can navigate to the contact record, locate the note, and click the edit or delete icons to refine the information.