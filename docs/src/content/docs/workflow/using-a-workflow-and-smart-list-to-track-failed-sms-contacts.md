---
title: "Using a Workflow and Smart List To Track Failed SMS Contacts"
description: "Using a Workflow and Smart List To Track Failed SMS Contacts"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/fwh54NM9IFHNGfzQBlik"
sourceId: "fwh54NM9IFHNGfzQBlik"
category: "Workflow"
---

**Using a Workflow and Smart List To Track Failed SMS Contacts**

If you are sending SMS communications, and the SMS fails to go through, you may want to track those contacts for a variety of reasons (i.e., perhaps you want to call or email them to confirm their mobile number for SMS communications.) You can create and save a smart list to compile Contacts with failed SMS actions and use a Workflow to update this smart list in real-time.

Follow these steps to learn how to create a Smart List and Workflow to achieve this:

**Step 1: Create a Smart List Based on a “Failed SMS” tag**

-   Navigate to Contacts > Contacts/Smart Lists.
-   Click More Filters

![](<https://assets2.modalsupport.net/1764016525079-Captura de pantalla 2025-11-24 153516.png>)

-   Choose “Tag” and then select “Is” and choose the tag you will be using for failed SMS.
    -   NOTE: You can use an existing tag or create a new one, such as “Failed SMS.”

![](<https://assets2.modalsupport.net/1769184263836-Captura de pantalla 2026-01-23 110416.png>)

-   Click “Apply” to save your filter.
-   At the bottom of the window, click “Create” to save the filter(s) as a permanent list. (You can always edit or delete this list later.)

![](<https://assets2.modalsupport.net/1769184320178-Captura de pantalla 2026-01-23 110513.png>)

**Step 2: Create a Workflow to Apply Your Tag**

-   Navigate to Automation > Workflows and create a new Workflow in the workflow builder.

![](<https://assets2.modalsupport.net/1764016564710-Captura de pantalla 2025-11-24 153558.png>)

-   Set up a trigger for “Number Validation”.
-   Filter by “Error Is” and choose “SMS Incapable.”
-   Save the trigger.

![](<https://assets2.modalsupport.net/1764016592251-Captura de pantalla 2025-11-24 153624.png>)

-   Add an action to the Workflow by clicking on the “**+**” icon. 

![](<https://assets2.modalsupport.net/1764016853817-Captura de pantalla 2025-11-24 154046.png>)

-   Choose “Add Contact Tag” and type in the name of the tag you created in Step 1 (such as “Failed SMS.”)

![](https://assets2.modalsupport.net/1775499818067-image7.jpg)

-   Save the action.
-   Save and publish your Workflow.

Now, anytime the Phone system recognizes that an SMS fails/errors, the workflow automation will apply your “Failed SMS” tag to the contact. Your saved Smart List of Contacts will be updated in real-time with anyone who has that tag. You can then determine if you want to manually go through that list to resolve issues or create another workflow to automate another type of follow-up (perhaps a call or email) to those Contacts. 

### FAQ




**Question:** Can I use an existing tag for the Smart List, or do I need to create a new one?
**Answer:** You can use an existing tag or create a new tag specifically for failed SMS, such as "Failed SMS." The tag you choose will be used to filter contacts in the Smart List and track SMS failures.




**Question:** What triggers should I use in the workflow to tag contacts with failed SMS?
**Answer:** Use the "Number Validation" trigger in the workflow, and filter by “Error Is” with the value "SMS Incapable." This will identify contacts whose numbers are unable to receive SMS and apply the specified tag.




**Question:** How does the Smart List update in real-time with the workflow?
**Answer:** The Smart List updates in real-time by using the tag applied through the workflow. Whenever a contact's number fails to receive an SMS and is tagged by the workflow, they are automatically added to the Smart List based on the saved filter criteria.




**Question:** Can I create additional workflows to follow up with contacts in the Smart List?
**Answer:** Yes, you can create additional workflows to automate follow-up actions, such as sending an email or making a call, to contacts in the Smart List who have failed SMS tags. This helps in further verifying their contact details or providing alternative communication.




**Question:** Can multiple failed SMS tags be used for different campaigns?

**Answer:** Yes, you can create multiple tags to track failed SMS across different campaigns or segments. Each tag can have its own Smart List and workflow for automated management.




**Question:** Does the system automatically stop trying to text a "Failed SMS" contact?

**Answer:** Not automatically. The system will attempt to send the message and return an error. By tagging them and putting them in a Smart List, you can manually remove them from future "Bulk SMS" actions to protect your **Sender Reputation** and save on costs.