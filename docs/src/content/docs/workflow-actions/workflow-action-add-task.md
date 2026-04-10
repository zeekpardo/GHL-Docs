---
title: "Workflow Action: Add Task"
description: "Adding a task to contact an assigned user can be automated. For example, you could add the tag “ultimate task” to a contact, which would cause the system to…"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/EL73KkrNQnUXgGBdFBnA"
sourceId: "EL73KkrNQnUXgGBdFBnA"
category: "Workflow Actions"
---

Adding a task to contact an assigned user can be automated. For example, you could add the tag “ultimate task” to a contact, which would cause the system to automatically add this task to the assigned user’s contact page and notify both of them. In this article, we will review the _Add Task_ action and how to use it.

This action exists within workflows and works similarly to the add task option within the contact area.

![](https://assets2.modalsupport.net/1760971560795-image6.jpg)

### **Step 1:** Start a new workflow

-   Navigate to Automation > Workflows and click on **\+ Create Workflow** and **Start from Scratch**

![](https://assets2.modalsupport.net/1764189171418-image7.jpg)

### **Step 2:** Setting up the Workflow Trigger

-   Under Workflow Triggers, select “Contact tag” in the “Contact” section of the Workflow Triggers Menu.
-   Filter for a tag that you can create from the filter menu and many areas within the system, including the contact area and settings.
-   Click “Save Trigger” in the bottom right of your screen.

![](https://assets2.modalsupport.net/1760971726034-image7.jpg)

**_Please Note:_** _You can use any trigger you would like, including no trigger_

### **Step 3:** Adding the _Add Task_ Action

-   Click on the “+” symbol below the trigger to add an action.
-   Under Actions, select “Add Task” or use the search feature to find it.
-   Name the workflow action if you would like, provide a title, add details for the description, assign the task to the assigned user/specific user, and pick a due date
-   Save the action

![](https://assets2.modalsupport.net/1760971684372-image5.jpg)

### **Step 4:** Setting up the Send Email action

-   Click on the “+” symbol below the first action.
-   Under Actions, select “Send Email” in the “External Communications” section of the Actions Menu or use the search feature.
-   Name the workflow action if you would like, and provide field information and custom values to your preference.
-   Save the action

**_Please Note:_** _Subject and message are required._

_![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeecrdTSuxJXxF-1WwhE7NWra08-FroQ9Lv_Cyoqsu7RPSartORTaY26FayLXVto4bGfqcpDQR2izSxEWfZoowrDU6B8upNYwfWCvlO7sk0Vs-sd-kVyfPUxMYNhpg8SixrH8pxgA?key=jmJR7wQ56yoKKXcB96xfYA)_

### **Step 5:** Setting up the Internal Notification action

-   Under Actions, select “Send Internal Notification” in the Actions Menu.
-   In the “Send Internal Notification” menu, select “Email” under “Type of Notification.”
-   Once selected, several email setup customization options will appear below
-   Name the workflow action if you would like, provide field information and custom values to your preference
-   This action lets you select the user type you want to send to. In this example, the Assigned User was selected
-   Save the action

![](https://assets2.modalsupport.net/1760971791474-image4.jpg)

### **Step 6:** Customize to your preference

-   Add actions and customization to your preference
-   Publish and save the workflow (top right of the screen)

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdR6vmwOhZZR-uc0Dxo_f3MpT8ENl3W1haSuHHCvjECfYRW2nK6xKzS8ZERWpCNABGeAAm-gRW42zu_pFw3czyYylhJMvNAOCUsIeJn8U3TccD8LtU8Cte1TsXxpJ03OtOMlDoqBg?key=jmJR7wQ56yoKKXcB96xfYA)

### **Pro Tips**

1.  **Test Your Workflow:** Before finalizing, test the workflow with sample data to ensure all actions (task creation, email sending, and notifications) work as intended and the correct users are notified.
2.  **Use Clear Naming Conventions:** Name your workflow actions descriptively to make it easier to identify and manage them later. This practice helps in understanding the workflow’s purpose at a glance.
3.  **Customize Notifications:** When setting up the Internal Notification action, tailor the email content to provide clear instructions or information to the assigned user. This improves communication and ensures tasks are completed effectively.
4.  **Review Workflow Triggers:** Regularly review and update your workflow triggers and actions to align with any changes in your processes or requirements. This helps keep your workflows relevant and efficient.

### **FAQ's**




**Question:** How do I set up a trigger for adding a task?
**Answer:** To set up a trigger for adding a task, select “Contact tag” from the Workflow Triggers Menu and filter for the specific tag you want to use. Save the trigger to activate the workflow when this tag is applied.




**Question:** Can I use triggers other than “Contact tag”?
**Answer:** Yes, you can use any available trigger based on your needs, including other contact-related triggers or even no trigger at all. Customize the workflow according to your specific requirements.




**Question:** How do I ensure that the task is assigned to the correct user?
**Answer:** When setting up the “Add Task” action, assign the task to the specific user by selecting their name in the assignment field. This ensures the task is added to the correct user's contact page.




**Question:** Are there any required fields for the “Send Email” action?
**Answer:** Yes, the “Send Email” action requires that you provide a subject and message content. Ensure these fields are filled out to successfully send an email as part of your workflow.




**Question:** Do I need to add a contact when using the Add Task action?
**Answer:** No, it is no longer necessary to add a contact when using the Add Task action. Tasks can be created independently of a contact.




**Question:** How can I test my workflow before publishing?
**Answer:** Use sample data to run the workflow and ensure all actions including task creation, emails, and notifications execute correctly and that the correct users are notified.  




**Question:** Can I trigger a different workflow once a task is marked as "Completed"?

**Answer:** While the **"Add Task"** action creates the task, you can use a separate workflow with the trigger **"Task Completed"** to initiate follow-up actions, such as sending a "Thank You" email to the customer or updating an Opportunity stage.




**Question:** What types of internal notifications can I send to my team members when a task is created?

**Answer:** While the "Send Internal Notification" action offers multiple formats, you can specifically select "Email" as the notification type. This allows you to fully customize the subject line and message body using custom values to provide the assigned user with all the necessary task details.