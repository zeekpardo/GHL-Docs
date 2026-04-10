---
title: "Workflow Action: Assign To User"
description: "Workflow Action: Assign To User"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/Gyw7FEmIGNsmC3EY5SSD"
sourceId: "Gyw7FEmIGNsmC3EY5SSD"
category: "Workflow Actions"
---

**Workflow Action: Assign To User**

Efficient lead management is crucial for any organization aiming to optimize its sales processes. One effective strategy is to use workflows to assign new leads to users in a round-robin style automatically. This ensures an even distribution of leads among team members and helps streamline communication. This article will guide you through setting up a workflow to automatically assign leads and notify users about their new assignments.

## How to Automatically Assign Users to Leads In Workflows

### **Step 1: Create a New Workflow**

1.  Navigate to the **Automations** section and select **Workflows**.
2.  Click the **Create Workflow** button.

1.  Choose the **Start from Scratch** option to begin building your workflow from the ground up.

![](https://assets2.modalsupport.net/1764009981089-image.png)

### **Step 2: Add a Trigger**

1.  Define a trigger to activate the workflow. For simplicity, select **contact created** as the trigger. This setup ensures that the workflow initiates every time a new contact is added to the system.

![](https://assets2.modalsupport.net/1764010005919-image.png)

### **Step 3: Assign Users**

1.  Add the **Assign to User** action to the workflow. This feature allows you to assign new contacts to users in a round-robin manner.

![](https://assets2.modalsupport.net/1764010133417-image.png)

-   Customize the distribution settings:

-   Select users from the sub-location to include in the round-robin.

![](https://assets2.modalsupport.net/1764010212939-image.png)

### **Step 4: Notify Assigned Users**

1.  Add the **Internal Notification** action to the workflow. This action notifies users about the new leads they are assigned.

![](https://assets2.modalsupport.net/1764010395939-image.png)

1.  Choose the notification channel(s):
    -   Select from in-app notifications, SMS, or email.
    -   Use multiple channels if necessary to ensure prompt delivery.

![](https://assets2.modalsupport.net/1764010409446-image.png)

1.  In the **Redirect Page** option, select where the user will be redirected when they click the notification. Typically we recommend the **Contact** or **Conversation.**

![](https://assets2.modalsupport.net/1764010703919-image.png)

1.  Under **user type**, select **assigned user** to ensure notifications are sent only to the designated user.

![](https://assets2.modalsupport.net/1773240983661-image11.png)

1.  Make sure the **Internal Notification** action is placed after the **Assign to User** action in the workflow sequence to ensure accurate notifications.

### **Step 5: Publish and Save**

1.  After configuring the trigger, user assignment, and notification actions, enable the **Publish** toggle at the top right of the screen.
2.  Click **Save** to activate the workflow and start automatically assigning leads.

![](https://assets2.modalsupport.net/1764010864124-image.png)

## **Pro Tips**

-   **Review User Roles:** Ensure that user roles and permissions are correctly set up in the system to avoid any issues with lead assignment and notifications.
-   **Test the Workflow:** Before fully deploying the workflow, test it with a few sample leads to confirm that the round-robin assignment and notifications work as expected.

## **Use Case**

**Customer Onboarding**

-   **Scenario:** A company is onboarding new customers and wants to assign onboarding specialists to each new customer based on availability.
-   **How It Works:** New customers are assigned to onboarding specialists in a round-robin manner, ensuring each specialist has an equal number of onboarding tasks and no one is overloaded.

## FAQs




**Question:** How does the round-robin assignment work?
**Answer:** The round-robin assignment evenly distributes new leads among selected users. Each new lead is assigned to the next user in line, ensuring an equitable distribution.




**Question:** Can I assign leads to users based on specific criteria?
**Answer:** While this setup focuses on round-robin distribution, more advanced workflows may allow for criteria-based assignments depending on user roles and lead attributes.




**Question:** What happens if a user is unavailable?
**Answer:** If a user is unavailable or removed, the workflow will automatically reassign leads to the remaining users in the round-robin setup.




**Question:** Can I modify the workflow after publishing?
**Answer:** Yes, you can edit the workflow at any time. However, ensure that changes are saved and published so that they can be applied to new leads. However, if you make changes to a workflow, the changes will not reflect on the leads currently added to the workflow. You might need to re-add them to the workflow to reflect the changes on them.




**Question:** What happens if no users are selected in the rotation list?
**Answer:** The workflow cannot assign owners without users defined. Make sure at least one active user is added to the round-robin list.




**Question:** Can I pause lead assignments temporarily?

**Answer:** Yes. You can disable the workflow at any time by turning off the Publish toggle. Lead assignment will resume once the workflow is re-enabled.




**Question:** Where is the best place to send a user when they click on a lead notification?

**Answer:** It is typically recommended to redirect the user to either the **Contact** or **Conversation** page to ensure they can immediately access the necessary lead details.