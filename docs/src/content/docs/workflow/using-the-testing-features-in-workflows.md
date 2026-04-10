---
title: "Using the Testing Features in Workflows"
description: "Testing workflows is essential for ensuring that automation functions as intended before being deployed in real scenarios. This guide combines practical…"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/Wq1P8B6dLuxeFsRFc3sV"
sourceId: "Wq1P8B6dLuxeFsRFc3sV"
category: "Workflow"
---

Testing workflows is essential for ensuring that automation functions as intended before being deployed in real scenarios. This guide combines practical testing tips with detailed instructions, offering a clear path to verifying that workflows work correctly from start to finish.

### **Introduction**

Workflows streamline processes, reduce manual efforts, and enhance efficiency through automation. Before going live, testing these workflows helps identify and fix issues that could disrupt their performance. This guide explains how to use built-in testing features, review execution logs for troubleshooting, and ensure workflows are ready for real contacts.

### **Why Test Workflows?**

Testing workflows help to:

-   **Verify Functionality:** Ensure each action in the workflow operates as intended.
-   **Identify Errors:** Catch misconfigurations or missing settings before they affect real contacts.
-   **Refine Workflow Logic:** Test conditions, delays, and branching logic to ensure they perform correctly.

**Pro Tip:** Testing a workflow organically, as if the contact is real and setting off the trigger, is the best method for trial testing. This approach provides the most accurate simulation of real-world scenarios. You can add a contact to a workflow manually from the contact card of any lead, and depending on the actions inside, it may not behave as expected without using the appropriate trigger.   

![](https://assets2.modalsupport.net/1761071026935-image3.jpg)

### **Key Features and Benefits**

-   **Test Workflow Button:** Allows manual testing of workflow steps without triggering the workflow organically.
-   **Execution Logs:** Provide detailed, step-by-step information on each action, allowing you to troubleshoot errors effectively.
-   **Manual Step Advancement:** This enables you to move contacts through the workflow manually for testing purposes.

### **Awareness of the Workflow Setting Allow Re-Entry** 

If you are testing with a test contact, please be aware of the Allow Re-Entry Setting in the settings tab of automation. You will need to start with a fresh contact when testing multiple times, or allow this setting temporarily, or otherwise.

_![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXe7AS-r8SWeLzhcY6k-S-RuOYTq_gDXNVc8p7I99727roca_hHX--TNOwHtyoSxBCxKr1-WaJmxOwCAw8xdlsSrRYyTFTtW1dZv6k6FZJoRFj4Ylxngl6QLjeHyCM1go_JK_w3MOVl4a1bVsRAzCVVqEVuO?key=XIbAuR-wi3cyNf7TsvXhSA)_

### **Part 1: Workflow Testing Setup**

#### **Step 1: Access the Test Workflow Feature**

1.  Go to your workflow automation section.
2.  Select the workflow you wish to test.
3.  Click on the "Test Workflow" button located within the workflow builder.

![](https://assets2.modalsupport.net/1761071069952-image2.jpg)

**Please Note:** Utilizing the "Test Workflow" button allows you to select a test contact and manually run through the workflow steps without triggering the workflow organically. It's a quick way to verify that each step works correctly.

#### **Step 2: Select a Test Contact**

-   Choose a contact from the list or search for one to use for testing.
-   Click “Run Test” to start the workflow with the selected contact.

![](https://assets2.modalsupport.net/1761071166751-image7.jpg)

**Please Note:** Using the Test Workflow button skips the initial trigger, allowing you to test the sequence directly from the first action. However, some actions may not behave exactly as they would when triggered organically.

### **Part 2: Reviewing Execution Logs and Manual Step Advancement**

#### **Step 3: Review the Execution Logs**

-   After running the test, go to the execution logs to review each step.
-   Check for successful actions, errors, and skipped steps.

![](https://assets2.modalsupport.net/1761071269175-image6.jpg)

-   Click on “View Execution History” for a detailed view of each action, including reasons for any errors.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXf5BJDkx8LMwvkMjZcuYyAqEAaCX0tZ7Fq1XNDSsYm4sSk8BNw59wJqi_m1W8jUXhCYt9XncEYd7P2hI21Oecmw6LJS1T5vhbvc42aucN7LEwVbgCqZgxKgdNMBb5ZiH43kDZY?key=XIbAuR-wi3cyNf7TsvXhSA)

**Pro Tip:** Reviewing execution logs helps identify where actions failed, such as missing custom values or incomplete conditions. It also allows you to adjust and refine workflows before they are live.

#### **Step 4: Manually Move Contacts Through the Workflow**

-   Manually advance contacts through each step of the workflow to test conditions like “Wait Until Reply” or time-based actions.
-   This is particularly useful for testing complex sequences that depend on specific responses or delays.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXe3TAO6P86T8V6cuvt9F5_mhi7AuJ3PjWCGkrCz5Hzmhnahv165jBdJsbZxLgoBPege377c6eS-qEPH-AZOLDTb0Sr8dCwfP-xEug_EVIPtLUO49XGUXtaZPR8uTiZVo1QF-B30?key=XIbAuR-wi3cyNf7TsvXhSA)

### **Part 3: Testing Specific Actions (SMS and Email)**

#### **Testing SMS Actions**

-   Use the “Send Test SMS” button to verify message content.

![](https://assets2.modalsupport.net/1761071376675-image1.jpg)

-   **Please Note:** Links may not send correctly, and custom values might not populate during test sends. Ensure your phone number setup is complete, and be aware that spam filters may block messages in test mode. Please review help articles on this matter

**Pro Tip:** Review the execution history in detail to identify where specific actions failed, such as missing data in custom values or incomplete conditions.

#### **Testing Email Actions**

-   Use the “Send Test Mail” button to check email content.

![](https://assets2.modalsupport.net/1761071415274-image9.jpg)

-   **Please Note:** This may break links and fail to populate custom values. Use a different email address for testing to avoid spam filters and ensure proper delivery.

### **Part 4: Post-Testing Cleanup**

#### **Step 5: Handle Test Data Post-Testing**

-   After completing tests, clear test data by removing test contacts from the workflow. This ensures no outdated data interferes when the workflow is live.
-   **Please Note:** Manually clearing test data helps maintain a clean environment for accurate workflow performance.

### **Additional Tips**

-   **Use Fresh Contacts for Multiple Tests:** If testing repeatedly, use fresh test contacts or adjust the Allow Re-Entry setting to enable multiple entries.
-   **Test Organically:** Whenever possible, test workflows organically by triggering them as real contacts would. This provides the most accurate representation of how the workflow will perform in a live environment.
-   **Monitor Execution History Closely:** Pay close attention to execution history logs, especially after making changes, to ensure the workflow behaves as expected.

### FAQs




**Question:** Why should I test my workflow before using it with real contacts?
**Answer:** Testing ensures all actions function as intended, helps identify misconfigurations, and allows adjustments before the workflow goes live.




**Question:** What is the best method to test a workflow?
**Answer:** Testing organically by setting off the trigger with real-like test contacts provides the most accurate simulation of the workflow's performance.




**Question:** Can I use a triggerless workflow for testing?
**Answer:** Yes, triggerless workflows allow you to focus on testing internal logic without setting up trigger conditions.




**Question:** What should I do if a workflow action fails during testing?
**Answer:** Check the execution logs for detailed information on errors, incomplete configurations, or blocked actions due to test settings.




**Question:** How do I ensure SMS and email tests are accurate?
**Answer:** Ensure that phone numbers and email addresses are set up correctly. Review execution logs to verify action success and use different addresses for testing to avoid spam issues.




**Question:** Will the workflow skip the initial trigger when using the Test Workflow button?
**Answer:** Yes, the button skips the initial trigger and runs the workflow from the first action, which may affect actions reliant on trigger data.




**Question:** What should I do after completing a test?
**Answer:** Clear test data by removing test contacts to prevent outdated data from affecting the workflow when it goes live.




**Question:** How do I handle test data after testing a workflow?
**Answer:  Remove test contacts from the workflow to prevent outdated data from affecting live operations. This ensures a clean environment for accurate workflow performance.




**Question:** How do I confirm a workflow is ready to go live?
**Answer:** Run both test-mode and organic tests, review execution logs for errors, verify message content, and ensure triggers and re-entry settings are correctly configured.




**Question:** Can I move a contact through a "Wait" step faster during testing?

**Answer:** Yes. You can use **Manual Step Advancement** to move contacts through the workflow. This is specifically useful for testing "Wait Until Reply" steps or long time-based delays without having to wait for the actual time to elapse.




**Question:** What setting should I check if I want to test the same workflow multiple times using the same test contact?
**Answer:** You should check the **"Allow Re-Entry"** setting in the automation settings tab. If this is not toggled on, the workflow will block the contact from entering a second time. Alternatively, you can simply use a "fresh" or new contact for each subsequent test to ensure the automation triggers correctly.