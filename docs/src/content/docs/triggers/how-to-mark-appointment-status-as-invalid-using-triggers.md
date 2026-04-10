---
title: "How To Mark Appointment Status as Invalid Using Triggers"
description: "Note: The triggers feature has now been deprecated. Please, check our article, ”How To Mark Appointment Status as Invalid Using a Workflow” to learn how to do…"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/2hSBWuzV667I1x1APsv1"
sourceId: "2hSBWuzV667I1x1APsv1"
category: "Triggers"
---

**Note:** The triggers feature has now been deprecated. Please, check our article, **”How To Mark Appointment Status as Invalid Using a Workflow”** to learn how to do this on Workflows.

You can update an appointment status based on tags, which may be useful for your business and any automations you run. Here's a recommended best-practice for updating appointment statuses based on tags, specifically related to the Invalid Status.

## Part 1: Set up a tag for invalid appointments.

-   **Step 1:** Create a tag called "Invalid Appointment".

## Part 2: Create a tag-based trigger.



**![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXd5unWnNyuguC-jP8i1a_U3XtuGUes9cbbVjvSSYn64M19NJN3TItvOLECUpNOx9lmxYdK7pU0mbyJGTNZWERmHUyaFSM7X90e74hDjeYsdDyceqWZOrzYTCppytTjBGPoBBNhArvbkr_aekyf73GLIqw?key=FcmsU6VUZuYJjOrpu52V8w)**

-   **Step 1:** Create a new trigger. Under Step 1 in the trigger, set it up like the screenshot above, so that the action will be triggered by the Contact Tag "Invalid Appointment" being added.
-   **Step 2:** Set the action to be "Update Appointment Status" and choose "Invalid".
-   **Step 3:** Make the trigger active and save it, in the top right hand corner and save.

## Part 3: Using the Tag and Trigger

-   **Step 1:** When you have a contact with an invalid appointment, add the "Invalid Appointment" tag and the trigger will run, updating their appointment status to "Invalid".

### **FAQs**

#### **1\. What is the purpose of the "Invalid Appointment" tag?**

The "Invalid Appointment" tag is used to identify appointments that are no longer valid, allowing for automatic updates to the appointment status without manual intervention.

#### **2\. How do I create a new tag?**

You can create a new tag in the tags section of your contact management system. Look for an option to add or create a tag and name it "Invalid Appointment."

#### **3\. Can I use multiple tags to trigger different appointment statuses?**

Yes, you can create multiple tags and corresponding triggers for various appointment statuses. Each tag can be linked to a specific status update.

#### **4\. What happens when I add the "Invalid Appointment" tag to a contact?**

When you add the "Invalid Appointment" tag to a contact, the associated trigger will activate, automatically updating the contact's appointment status to "Invalid."

#### **5\. Can I deactivate or delete the tag later?**

Yes, you can deactivate or delete the tag if it is no longer needed. However, ensure that any triggers relying on this tag are adjusted accordingly.

#### **6\. What if I mistakenly tagged an appointment as invalid?**

You can remove the "Invalid Appointment" tag from the contact, and if you have a trigger set up to change the status back, it will revert to the previous status.

#### **7\. Is there a way to monitor the appointments marked as invalid?**

Yes, you can create a report or view that filters contacts by the "Invalid Appointment" tag, allowing you to monitor and manage these appointments effectively.

#### **8\. How can I ensure that the trigger is working correctly?**

After setting up the trigger, test it by adding the tag to a test contact to verify that the appointment status updates as expected.