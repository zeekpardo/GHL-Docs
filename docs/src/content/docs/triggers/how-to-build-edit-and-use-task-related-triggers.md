---
title: "How to Build, Edit and Use Task Related Triggers"
description: "Note: The triggers feature has now been deprecated. Please, check our article, “Workflow Trigger: Task Reminder” to learn how to do this on Workflows."
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/uehUBnJdBFVJFBv1GL7B"
sourceId: "uehUBnJdBFVJFBv1GL7B"
category: "Triggers"
---

**Note:** The triggers feature has now been deprecated. Please, check our article, **“Workflow Trigger: Task Reminder”** to learn how to do this on Workflows.



There are many ways you can create tasks, such as in a pipeline, campaign, or contact record. For this tutorial, we will be creating a task from within a contact. Here’s how to set up a task-related trigger.

### Step 1: Create the Task in a Contact Record

-   Navigate to a contact record.
-   In the top right, you can toggle between different options. Select the task option and click on “+New Task” to create the task. 

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdYeld7nGkqfDAJNdOim3Pc33WbnhlHi--rDFFBO5qlWM86TSgZ7XkklZ1JjaFLW6jjZi71kAXuxDd-BEfwwaV_TIxVFKV__FQv1uA487JZn26wz6l_GHRap-ulBGEjkiL-e3Y3VP820YsktuIbq3-d_Lus?key=VsGXoK_OIZRtsJCajjaSuQ)

-   Fill in the task title and the description.
-   Then select which user you want to assign the task to.
-   Finally, you can set the due date of the task.
-   Once you have finished setting up the task, save it. The task will then appear on the right side of the contact record. 

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdohlFUBGSnHIdhq0tRNOUMxbuansNRay4lBoSm6b1ZyakqHw0zK7PyaNpadtJXJQEPwKbQijyA6mI7IkvMpNhpji2SIpwS01vsTkqmI4orvQMsi9ImOK6rinu9o84C0DFo7zx2C7zgU-xIatSnrFjkJhV9?key=VsGXoK_OIZRtsJCajjaSuQ)

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeZYWe84wE-aawZwjSKijWC0EzTNTFMfr89uyZrmiSvqRaNd1Uz81BJFky00apHbWxu5oVtwJCec9vXJGay3p1xeDk1MlIwFeyXYqe_ePLss4Mn-MAltUBIYj31DjKsdsK_JNE5R9fKZ5aG0Y7CoKo0Xi9A?key=VsGXoK_OIZRtsJCajjaSuQ)

### Step 2: Setting up the Trigger

-   Navigate to **Automation** > **Triggers** > **Add Trigger** to create a new trigger to start making your new task trigger. Give your Trigger a name.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfBdd98AnMHUa9Mz0yM1CuXc5grZLzyGYjdvtx_KTNPQB-15ZVhsMxrynRQ1En7l-08eEdAbyf260CaxYqMxzCYJgQNqOxcp0mWqq0q4D3IWKYeOiQqxJBMb06H1ReGhJb1cEVlmCtbmkRS0nsSUESxPv8?key=VsGXoK_OIZRtsJCajjaSuQ)

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdV75BAayn3NnvsPRXM15ev60DwwPplu-bevrWXexMuUxj9cVP0KxJiBEvus-CQpLWNj2cei5Uwz8QQ5Y-sFuwUg7zGpNnh08RnsM2ibJuDyAB3HI59_-iZLS22wJSMUI74eZMIAGHPR0M_RsasZQG8vDQ?key=VsGXoK_OIZRtsJCajjaSuQ)



-   For the trigger type, select **“task reminder.”**
-   For the filter, two standard options are commonly used: “Before number of days” and “After number of days”.  (Both are viable options depending on your preference.)
    -   **_Note:_** If you want the task to be due on the same day you made it, you can use either option and set the number of days to zero. 

-   You can customize this section in many ways for the action. For simplicity, we recommend limiting the number of automations to three: “send email,” “send notification,” and “send SMS.” (We will be using the “send email” action for the sake of this tutorial.)

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXd0tl5CsDxTK2vjQXfuys40PKXBkQLwrqywaYSKFPTfAXQiQY5BQ-NbXBXJ0A92JpXwANrN-ztDJ9hI53c86ILc4MLZo5jraMg4_JoDIriHieXbz95SGAgDFhrkHIWQpVKnT2EsOq3nCloaChMqZ42Z-pTh?key=VsGXoK_OIZRtsJCajjaSuQ)

-   Now you must format your email however it works best for you.
-   The sender portion should have the appropriate email and the recipient portion should have the custom value {{ user.email }} \* no spaces \* for the user’s email address.
    -   Pro Tip: When using custom values in general for tasks, the custom value drop down menu has a task section so you can copy the necessary custom values to properly set up your email.
-   Create a subject for the email. We recommend using the custom fields for the task title and due date. 
-   Create the body of the email. We suggest using the custom values for the title and description.
-   You can also test the email by clicking on the “Send Test Email” button

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcCiRh5DwvzYnJA3yRMwgI6Pve74QUME0LqbmC012qv1VyYAnIr-jYk_tECVc17TskeqKHwrbiYU24A1_moYCxfc6SFZqZ0uXhoZbmmQS9EXIAtjsCJZQhnwSYvhqL2jyLpKrG-Mucifamn-OtERR_CHhqg?key=VsGXoK_OIZRtsJCajjaSuQ)

-   Save and activate the trigger once you’ve set up your email, notification, or SMS.   

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXels3WjZKE9mEwGCydEJxbsvzx2oFD79A0QiQU-DzZQVN54K1gqJCMFlZpOS4UMnjPtVXDO3hUV70tUYd65g0rmpMlksIU4ATjihpcGczP_qZF3DAzPmR-E-EKp-FayIpQpwcu4hGSH9S6Hbef8ppbdep0?key=VsGXoK_OIZRtsJCajjaSuQ)

**Pro Tips:**

1.  **Using Custom Values:** When setting up email actions in triggers, use the custom value dropdown menu to ensure you include accurate task details, such as the task title and due date. This helps personalize the notifications effectively.
2.  **Email Testing:** Always test your email setup by using the “Send Test Email” button. This allows you to verify that all custom values and formatting appear correctly before finalizing the trigger.
3.  **Task Due Date:** If you want tasks to trigger reminders on the same day they are created, set the filter to "Before number of days" or "After number of days" with zero days. This ensures timely reminders without delays.
4.  **Limit Automations:** For simplicity and to avoid clutter, limit the number of actions in your automation to essential ones like “send email,” “send notification,” and “send SMS.” This helps keep the process streamlined and manageable.

**FAQ:**

1.  **What is the purpose of creating a task in a contact record?**
    -   Creating a task in a contact record allows you to track and manage specific actions related to that contact, such as follow-ups or updates. This helps ensure that important tasks are completed on time.
2.  **How do I set up a trigger for task reminders?**
    -   To set up a trigger for task reminders, navigate to Automation > Triggers > Add Trigger. Choose “task reminder” as the trigger type and configure the filter and actions according to your needs.
3.  **Can I use custom values in email actions for triggers?**
    -   Yes, you can use custom values in email actions. Use the custom value dropdown menu to insert dynamic information such as task titles and due dates into your emails.
4.  **What should I do if my test email does not appear as expected?**
    -   If your test email does not appear as expected, review the custom values and formatting used in the email setup. Ensure that all custom fields are correctly referenced and that there are no formatting errors. Use the “Send Test Email” feature to make adjustments as needed.