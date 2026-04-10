---
title: "Workflow Trigger: Lesson Started"
description: "Workflow Trigger: Lesson Started"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/GBaCmyVkhE8BC7vR4KR0"
sourceId: "GBaCmyVkhE8BC7vR4KR0"
category: "Workflow Triggers"
---

**Workflow Trigger: Lesson Started**

Course lesson triggers are powerful tools for automating responses and tracking user engagement. Utilizing these triggers allows you to monitor when a user begins or interacts with a specific lesson and automatically send them additional resources, feedback, or encouragement. This guide will walk you through how to set up and use the Lesson Started trigger, highlighting key benefits and providing step-by-step instructions for implementation.

### **Important Note**

The Lesson Started trigger will only fire the first time a member begins or interacts with a specific lesson, product, or category. This means the trigger activates only on the initial interaction and will not re-activate if the member revisits the same lesson or category later. This one-time activation helps in tracking the first engagement accurately but does not account for repeated visits or interactions.

Consider setting up additional triggers or workflows designed for continuous tracking to capture multiple interactions or re-engagements.

### How to Use the Lesson Started Trigger

Follow these steps to set up and optimize the Lesson Started trigger:

#### **Step 1: Set Up Your Workflow**

1.  **Navigate to the Workflow Builder**: Start by accessing your workflow builder where you can create a new workflow or edit an existing one within the automation tab.

![](<https://assets2.modalsupport.net/1763058144042-Captura de pantalla 2025-11-13 132214.png>)

2. **Add the Lesson Started Trigger**: Select the Lesson Started trigger from the list of available triggers in the Courses category. This will enable the workflow to activate whenever a member begins a specific lesson within your course.

![](<https://assets2.modalsupport.net/1763058187005-Captura de pantalla 2025-11-13 132258.png>)

#### **Step 2: Customize Trigger Filters**

1.  **Choose Specific Lessons or Categories**: Use the filter options to target specific lessons. You can specify which lesson within your membership course you want to monitor, allowing the workflow to respond only to those interactions.

![](<https://assets2.modalsupport.net/1763058306815-Captura de pantalla 2025-11-13 132455.png>)

This trigger above will filter for a specific lesson. (See Example Below)

![](https://assets2.modalsupport.net/1775757222755-image3.png)

**2\. Set Up Conditional Logic (If/Else)**: Utilize If/Else fields to further refine your workflow, especially when dealing with multiple lessons. This allows the workflow to take different actions based on the specific lesson started.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdOtaiIDbXkGcijLB5V36NQVvWUEj8vX0Kc8wuZJrSnocJfUP1wrn5wD-22K2CLFrU4OeV5ajo4Xn1MWULg8_ybKBWILRhwe1fVif__xScnnQQ4E4i4RSxtN743OCqgiqOIrEHR?key=IfnynxELVrWk33Y_d3BKAA)

#### **Step 3: Add Actions to Your Workflow**

1.  **Send Follow-Up Emails**: Configure actions such as sending an email once the trigger is activated. Customize these emails using custom values to dynamically insert user-specific information like their name, lesson title, or progress.

_![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeHI4w4YKcwHdYNOd2oB2YYW0D9dU7dNcz_KHJOZjLbmnxvV2FmlZ5f2wqOMOalUpnizXZyQLVbFR8MBTbzd28d6Dz7OVe808IjURZ0gGIfXadLzF6FjX83azdJN1xokhPf5n4Pgi9xO5u3HaZX4bB5dKs?key=IfnynxELVrWk33Y_d3BKAA)_

2. **Deliver Additional Resources**: Set up the workflow to send relevant resources, such as PDFs, videos, or links to further reading, enhancing the learning experience immediately upon lesson interaction.

3\. **Track Engagement Metrics**: Add actions that record user engagement metrics within or analytics tool, helping you assess the effectiveness of your lessons and identify areas for improvement.

#### **Step 4: Test and Activate the Workflow**

1.  **Run Test Scenarios**: Before going live, test your workflow with different scenarios to ensure it activates as intended and sends the correct follow-up communications.

**_To learn how to test a workflow, check out our in-depth article on ‘Using the Testing Features in Workflows’_**

2\. **Publish and Monitor**: Once tested, publish your workflow and monitor it periodically to ensure it continues to operate as expected, making adjustments as necessary.

![](<https://assets2.modalsupport.net/1763058622300-Captura de pantalla 2025-11-13 133012.png>)

### Key Features and Benefits

-   **Enhanced Engagement Tracking**: Track specific lessons within your courses to understand how users interact with your content. This insight allows you to tailor follow-up communications and resources effectively.
-   **Automated Resource Delivery**: Automatically send additional resources, reminders, or follow-up emails when a member starts a specific lesson, enhancing their learning experience and providing immediate value.
-   **Customization with Filters**: Customize your workflows by adding filters to target specific lessons or categories, ensuring the trigger activates only when users interact with particular parts of your content.
-   **Personalized Communication**: Use custom values in your emails to personalize messages based on user behavior, making your communication feel more relevant and engaging.

### Pro Tips

-   **Utilize Custom Values**: Incorporate custom values in your emails and messages to personalize the user experience. This could include referencing specific lessons or dynamically updating content based on user progress.
-   **Optimize Timing**: Adjust the timing of your follow-up messages to align with typical user behavior, such as sending reminders a day after starting a lesson or following up when a lesson isn’t completed.
-   **Monitor Workflow Performance**: Regularly check workflow performance metrics to identify which triggers are most effective. This data can guide you in refining your course content and automation for better results.

### FAQ




**Question:** What is the Lesson Started Trigger used for?
**Answer:** The Lesson Started Trigger activates a workflow when a member begins or interacts with a specific lesson in your membership course, allowing you to track engagement and send automated follow-ups.




**Question:** Can I customize the trigger to target specific lessons?
**Answer:** Yes, you can use filters to target specific lessons or categories. This ensures the workflow only activates when users interact with the specified content.




**Question:** How can I use If/Else conditions with this trigger?
**Answer:** If/Else conditions allow you to create branching workflows based on the lesson started. For example, you can set different follow-up actions depending on which lesson is interacted with.




**Question:** What type of actions can I include after the trigger?
**Answer:** Common actions include sending follow-up emails, delivering additional resources, tracking engagement metrics, or updating user records within your system.




**Question:** Do I need to manually activate each workflow?
**Answer:** Once set up and tested, workflows run automatically whenever the specified trigger conditions are met. Ensure your workflow is published and live to operate correctly.




**Question:** Can I use this trigger to deliver immediate learning resources?
**Answer:** Absolutely. The Lesson Started Trigger can automatically send PDFs, videos, or other materials as soon as a member begins a lesson, enhancing their learning experience right away.




**Question:** What happens if I have multiple courses? Will this trigger for all of them?

**Answer:** By default, it will trigger for any lesson started in any course unless you apply a **"Product" filter**. To keep things organized, always filter by the specific Product (Course Name) first, then the Category or Lesson.




**Question:** Does "Started" mean they just clicked it, or do they have to watch the whole video?

**Answer:** The trigger fires the moment the lesson page is **loaded/opened** by the member. It does not track video completion (for that, you would use the **Video Tracking** trigger). This makes it perfect for delivering "Pre-lesson" instructions or worksheets that the student needs _while_ watching the video.