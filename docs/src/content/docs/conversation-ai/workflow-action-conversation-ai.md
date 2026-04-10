---
title: "Workflow Action: Conversation AI"
description: "Conversation AI refers to the use of artificial intelligence to manage and streamline conversations between a bot and users, providing automated, intelligent…"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/ySvzOw8LLkjwH6Bmih1B"
sourceId: "ySvzOw8LLkjwH6Bmih1B"
category: "Conversation AI"
---

Conversation AI refers to the use of artificial intelligence to manage and streamline conversations between a bot and users, providing automated, intelligent responses that mimic human interactions. This technology enhances customer service by handling queries, collecting information, and guiding users through processes efficiently.

The Conversation AI workflow action includes a Skip Action option. This enhancement allows the bot to skip asking a question if the answer already exists in the conversation history, ensuring smoother and more natural interactions. The article will discuss the following features in detail: 

-   **Skip Action Option**: The bot will not ask a question if the answer is already present in the conversation history.
-   **Automatic Branching**: The contact will be pushed to the relevant branch/condition based on the existing answer.
-   **Conversation Summary & Transcripts:** Automatically generate session-based summaries and full transcripts for every interaction.

## **How to Use**

1.  **Access Workflow Actions** 

Navigate to Automation > Workflows, create a new workflow, or edit an existing one, and then search for the Conversation AI workflow actions in the workflow builder.

![](https://assets2.modalsupport.net/1765314298850-image3.png)

![](https://assets2.modalsupport.net/1765314373511-image8.png)

![](https://assets2.modalsupport.net/1765314457512-image4.png)

1.  **Selecting a channel from dropdown**

You can select from SMS, Facebook, Instagram, Whatsapp, and Live Chat channels when configuring your workflows. This allows for more dynamic and real-time interactions, enabling you to seamlessly integrate these into your automated processes for enhanced communication and efficiency.  
To integrate WhatsApp, link your account with WhatsApp, configure it in your workflows, and employ conversation AI for personalized responses. Ensure compliance with WhatsApp’s guidelines to activate.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcuDJO2VgKaO2pI84qdub3xlpwduGD79JkaP8PZxgZCX3wau9yhqccvx3q_Calsq1aoBhcCpVj6RamRnGyfWgpk1IFirqNHCy78PsGlPWTBRllPZjM8Emn-1hLGatc64pPQSb8EHA?key=zWlokc93AT57quYsIwu1_Q)

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXca3p1ZikcbDicsQQ9sOB0L24oru4JXrBZrGbJmK7zBQb25xpOqa8dvVDlcaKizKPTshU2rV8d24-0XEfH-tyiUDwLofpXzgcZSCp9lFgr3KAeI86nai37YAjUd6U-nhtnK5IBl?key=zWlokc93AT57quYsIwu1_Q)

1.  **Enable Skip Action (Optional)**  
    -   Locate the question in your workflow.
    -   Toggle the "Skip if Answered" option to On.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdTTYBZiMfhY0UsvjOPxcaSyDBddETzIJICE5EHBKToTOdNzaqHHHuxRSQYtZkBKsX2mz5wqXsm1DlxNWURZAonel6uypogpBlqlv685uvRiris94ZxR3IT2XNVcHiVoUvVMPo0FBE_EPv9TnG2nTwlmIo?key=zWlokc93AT57quYsIwu1_Q)

**Bot Wait Time Before Responding in Workflows**

The Bot Response Wait Time setting allows users to customize how long an AI bot waits before responding in workflows. This flexibility ensures tailored interactions, enhancing user experiences for various use cases, from quick appointment bookings to more relaxed, conversational engagements.

**How to Use:**

-   Open the workflow and select the AI Bot configuration.
-   Locate the "Wait Time" or "Wait Time Before Responding" setting, enter the desired wait time in seconds, and save the changes.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXetrjgfBmQBEKbWirR3OSFdRCsZdT7cTFsgR0T3jsvpKUz8VXyVzFtvzOWejw82S1a6cVmr_4kmaRUEyA75g9WkjaxcjVWi1ZtIgfRVz0t_pmRZ3gFJlnqoItcbqetkwE1WxwEm3w?key=zWlokc93AT57quYsIwu1_Q)

**Special Requirements/Limitations:** The wait time can range from 10 to 300 seconds, with a default value of 10 seconds.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfsTPKPqmnHkPZe_3_P9ODz9ypJ7NhOl38pDwHl3LPXvNOjdbOl_qDxoAgnN-jMCkZ2n3fEH6UokDfcPhu-cW1QmOjSrOG49Nhn1NsHQxT_hepl0nfCjgwpGTWEyKIGlIm5-vAWYQ?key=zWlokc93AT57quYsIwu1_Q)

#### Conversation Summary & Transcripts

To provide better insights and audit capabilities, you can enable session-based summaries.

1.  **Enable the Feature:** Navigate to **AI Agents > Conversation AI**. Select your bot and go to the **Bot Goals** tab to toggle on "Enable Conversation Summary." (Note: This must first be enabled in your agency-level lab settings).
2.  **Configure Generation Triggers:** Summaries are generated based on:
    -   **Inactivity:** A set duration (e.g., 15 minutes) where no messages are sent.
    -   **Bot Sleep Events:** Such as reaching message limits, human handover, or a "Stop Bot" condition.

![](https://assets2.modalsupport.net/1771422744833-image7.jpg)

1.  **Automated Actions:** \* **Save to Field:** Automatically save the latest summary to a specific contact field (replaces the previous summary).
    -   **Trigger Workflows:** Use a "Summary Generated" event to trigger internal automations.
    -   **Notifications:** Send summaries via email to admins, assigned users, or custom addresses.  



![](https://assets2.modalsupport.net/1774552532502-image7.png)

1.  **Configure Branches:**  
    -   Set up the relevant branches/conditions that the bot should follow if the answer is already known.

![](https://assets2.modalsupport.net/1765314614456-image10.png)

![](https://assets2.modalsupport.net/1765314584294-image11.png)

1.  **Save and Test:** 

Save your workflow and test it to ensure the bot behaves as expected.  

![](https://assets2.modalsupport.net/1765314520518-image9.png)

## **Example Use Case**

-   **Favorite Color Question**: If a user has previously answered "What is your favorite color?" with "blue," the bot will not ask this question again and will proceed to the next relevant question or action.
-   **Audit Review:** An admin can review an automatically generated transcript to identify common customer questions and improve the bot's training data without manually reading through every chat log.

### **Note**

To maximize the effectiveness of the Skip Action option, regularly review and update your workflows to ensure they align with common conversation patterns and user behaviors. This will help maintain a natural flow and improve the overall user experience.

## **FAQ’s**




**Question:** What happens if the answer is not found in the conversation history?

**Answer:** If the answer does not exist, the bot will proceed to ask the question as usual.




**Question:** Can I toggle the Skip Action option off?

**Answer:** Yes, the Skip Action option can be toggled off if you prefer the bot to ask the question regardless of previous answers.




**Question:** How does this feature impact branching conditions?

**Answer:** The bot will automatically push the contact to the relevant branch/condition based on the existing answer, streamlining the workflow.

​​


**Question:** What triggers a conversation summary to be generated?

**Answer:** A summary is created when a configured inactivity timer expires or when the bot is put to "sleep" due to human handover, message limits, or manual intervention.




**Question:** Does the summary include the entire history of the contact?

**Answer:** No. Each new summary replaces the previous one and only includes messages sent after the last summary was generated within that specific session.




**Question:** What types of actions can be automated using WhatsApp?
**Answer:** You can automate actions like appointment booking, sales Q&A responses, and follow-up messages, similar to other communication channels.




**Question:** Do I need special permissions or accounts to use WhatsApp for workflows?
**Answer:** Yes, an active and compliant WhatsApp business account is typically required to integrate and use this feature.




**Question:** How can I set up this feature?
**Answer:** Access the workflow automation tools in your account, select the WhatsApp channel as an action, and configure it as part of your automated process.




**Question:** Are there any limitations to using WhatsApp as a workflow channel?
**Answer:** Some restrictions may apply, such as message types, templates, or compliance with WhatsApp’s guidelines for business communication.




**Question:** Can I use WhatsApp for live conversations in addition to workflows?
**Answer:** Yes, WhatsApp can typically be used for live chat and automated workflows, offering flexibility in customer engagement.




**Question:** Any tips for using Skip Action effectively?
**Answer:** Regularly review and update workflows to reflect common conversation patterns, ensuring a natural flow and improved user experience.




**Question:** What happens if the stored answer is no longer valid or has changed?
**Answer:** The "Skip Action" relies on the data currently saved in the contact's fields. If a user needs to update their information, you can build a separate "Update Info" workflow or have a human agent intervene. The bot prioritizes efficiency by assuming the existing data is correct.