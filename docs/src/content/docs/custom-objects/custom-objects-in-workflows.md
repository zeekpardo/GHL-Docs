---
title: "Custom Objects in Workflows"
description: "Custom Objects are fully integrated into workflows, offering enhanced flexibility and power to automate processes. This feature allows you to trigger…"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/nZaOM4EFKeQCjjB8kMAd"
sourceId: "nZaOM4EFKeQCjjB8kMAd"
category: "Custom Objects"
---

Custom Objects are fully integrated into workflows, offering enhanced flexibility and power to automate processes. This feature allows you to trigger workflows based on specific events within your custom objects, enabling more targeted, object-centric automation. Whether you are tracking products, clients, properties, or any other unique data points, you can create workflows tailored to the needs of your custom objects.

### Key Features and Benefits

-   **Object-Specific Workflows**: Create workflows that are directly tied to your custom objects (e.g., Home, Cars, Orders, etc.), streamlining automation and reducing manual effort.
-   **Trigger Automation with Custom Object Events**: Workflows can be triggered by specific events related to custom objects, such as when a "Home" object is created or updated.
-   **Targeted Actions**: Execute actions like creating or updating records, clearing fields, or sending data based on the specific needs of the object in question.
-   **Increased Efficiency**: Automate processes related to custom objects, ensuring your team can focus on more strategic tasks while repetitive workflows are handled seamlessly.

### How to Set Up Custom Object Workflows

**Navigate to the Workflow Page**Go to Automation on the left, Workflows at the top, and click on "Create Workflow" to start building your object-specific automation.

![](https://modal-inbox-chat-attachments.s3.us-east-2.amazonaws.com/1763049855390-1.png)

**Choose Your Custom Object**

Select the custom object for which you want to create the workflow. This could be any object that you have created, like "Home," "Orders," or "Products."

**Set the Trigger**Choose a trigger event related to the custom object. Examples include:

-   **Custom Object Created**: Trigger the workflow when a new record is created.
-   **Custom Object Changed**: Trigger the workflow when any change is made to an existing record.

![](https://modal-inbox-chat-attachments.s3.us-east-2.amazonaws.com/1763049873964-2.png)

**Define Your Actions**Next, define the actions that should occur once the workflow is triggered. These can include:

-   **Create or Update Record**: Add or update associated records based on the custom object.
-   **Clear Fields**: Remove unnecessary data from the object or its associated records.
-   **Send Data**: Pass data to external systems or databases.
-   **Google Sheets Integration**: Automatically log changes to Google Sheets for reporting and analysis.

![](https://modal-inbox-chat-attachments.s3.us-east-2.amazonaws.com/1763049896575-3.png)

**Customize Your Workflow**

You can also add additional logic like If/Else conditions, Date/Time formatting, or wait times to tailor the workflow further.

**Save and Activate**

Once your workflow is configured, save it and activate it. The system will automatically execute the defined actions whenever the trigger event occurs.

![](https://assets2.modalsupport.net/1768840312330-image2.png)

### Pro Tips

-   **Naming Conventions**: To keep things organized, use clear and consistent naming conventions for your custom objects and workflows. This makes it easier to find and manage them later.
-   **Test First**: Before going live with complex workflows, test them using sample data to ensure everything triggers and behaves as expected.
-   **Use Dynamic Data**: Take advantage of dynamic data fields in your workflow actions to personalize messages or update records with context-specific information.

### Use Case Example

A **real estate agency** uses a custom object called "Home" to track property listings. When a property’s "Home Status" field changes to "Closed" (indicating the property has been sold), the following workflow is triggered:

-   **Trigger**: When the "Home Status" field is changed to "Closed."
-   **Actions**:
    -   **Update Associated Object**: Update the agent's record linked to the sold property.
    -   **Log the Sale**: Add a row in Google Sheets to track the sale.
    -   **Clear Fields**: Remove internal notes and comments that are no longer relevant after the sale.

### FAQs:  

**Question:** What triggers can I use for Custom Object Workflows?
**Answer:** You can trigger workflows based on various events related to your custom objects, such as when an object is created, changed, or updated.

**Question:** Can I update associated records when a custom object changes?
**Answer:** Yes! You can automate updates to related records whenever a custom object changes, ensuring your system remains up-to-date.

**Question:** How can I log changes to an external system?
**Answer:** You can integrate Google Sheets or use custom webhooks to automatically send data to external systems when certain actions occur within your custom object workflow.

**Question:** Are there any limitations to the actions I can perform in a workflow?
**Answer:** While the possibilities are vast, some systems may limit the number of custom actions or integrations depending on their configuration. It's best to test your workflow to ensure compatibility.

**Question:** Can I use workflows to automate actions for multiple custom objects?
**Answer:** Yes! You can set up workflows that target multiple objects and trigger actions based on conditions related to different custom objects.  


**Question:** Can I use conditional logic in custom object workflows?
**Answer:** Yes! You can add additional logic such as If/Else conditions, Date/Time formatting, or wait times to further customize your workflow, ensuring it meets the specific needs of your business processes.

**Question:** Can I use Custom Object data in Email or SMS templates?
**Answer:** Yes. You can use "Custom Values" or "Message Variables" to pull data directly from the Custom Object that triggered the workflow. For example, you can send an automated email that says: "Hi {{contact.first\_name}}, the status for your property at {{home.address}} has been updated to {{home.status}}."