---
title: "Conversation AI - Human Handover"
description: "With the Human Handover feature for Conversation AI, your AI bot can seamlessly transfer conversations to a human when it detects that it is no longer the…"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/xHlaRhuiAnxez6tmRvvz"
sourceId: "xHlaRhuiAnxez6tmRvvz"
category: "Conversation AI"
---

With the Human Handover feature for Conversation AI, your AI bot can seamlessly transfer conversations to a human when it detects that it is no longer the best option to assist. Whether the request is complex, the bot has failed multiple times, or the user directly requests a human, the bot ensures your customers are not left frustrated.

### **Benefits:**

-   Improved customer experience with smooth transitions from AI to human agents.
-   Faster resolution for complex issues.
-   Enhanced efficiency in managing conversations.

### **How to Enable and Use Human Handover**

**Step 1: Enable Human Handover**

1.  From the left sidebar, go to **AI Agents > Conversation AI**, then select the bot from the **Agent List**
2.  Go to  **Bot Goals** and click **Human Handover**.

![](https://assets2.modalsupport.net/1764770825109-image3.png)

**Step 2: Choose the Trigger for Handover**

-   **Contact Request:** The user directly asks for a human (e.g., "Can I talk to a human?" or "I need help from a real person").
-   **Lack of Information:** The AI doesn't know how to answer the user's query.
-   **Failed to Resolve Issue:** After 2 unsuccessful attempts by the AI to help, the handover is triggered.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXej6yIoeNXsV35Ujptjcx-04Xx1o0c0VBDF8NU43S1bOwjWgDE2WMrafGChXKOxnvxLWV4dk_SDCAMtM34wK_NrlwDHuDE3tMmW0H5QushT3LV6UiizMGmBGG2lbhJBXRVe9va3Gg?key=BzwgRiSIcFHh9Fjia8nKFQ)

**Step 3: Configure the Next Actions**

1.  **Assign Conversation to a User**: Choose a staff member or set the system to auto-assign based on existing rules.
2.  **Create a Task**: You can check the box to automatically create a task with the description "Will be created by AI," due in 24 hours.
3.  **Send a Closing Message**: The default message is, “Thank you! Someone from the team will get back to you.”
4.  **Pause the Bot**: Temporarily disable AI messages for a specific time.
5.  **Create Tags**: Use the default tag **human\_handover** to track the transition.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfLfx3aEiBdrkffYr0BjfrzwYtVcuFQxoZDWK3H7FxkLC9y4zafMt5qoVjBKAPIfJC2Ao3CyD5PlvkN3IrHDjc8k76nNeP2Ja_yp_sHzWo0npApZWzKCOG2rLZBb1IImgJFHuxuow?key=BzwgRiSIcFHh9Fjia8nKFQ)

**Step 4: Manage Notifications for Human Agents**

1.  Go to **Settings > My Staff** and select the relevant user.
2.  Enable notifications:
    -   When a conversation is assigned.
    -   When a task is assigned.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcpwp5o0VHdpgDiZYEL5WFeYc8xgUK74nzacGXnyq77SIlSTimhOhPTjqy1DEW1MtqUc0sAdyLUTdWPZIbv91BFkPjGYBCDyLzmvkEmEmOnlBY-wCiSOvsDR6WlcVGXDWFvHKLEcA?key=BzwgRiSIcFHh9Fjia8nKFQ)

### **Key Notes:**

-   You can configure up to **6 handover actions per bot**.
-   **Smart session memory** ensures that if you close the editor or leave the page, your progress will be saved and you can pick up where you left off.

### FAQs




**Question:** What triggers the Human Handover?
**Answer:** Human Handover is triggered when the AI fails to resolve an issue, the user asks for a human, or the AI lacks the information to help.




**Question:** How many actions can be set for the Human Handover?
**Answer:** You can configure up to 6 handover actions per bot.




**Question:** Can I customize the message when the handover occurs?
**Answer:** Yes, you can customize the closing message when handing over to a human agent.




**Question:** Do I need to manually assign tasks after the handover?
**Answer:** No, the task can be auto-created as part of the handover workflow.




**Question:** What happens if the handover action fails?
**Answer:** The bot will ensure the task is handed over to the next available human agent for resolution.




**Question:** Can I temporarily stop the AI from responding once a human has been requested?

**Answer:** Yes, you can use the "Pause the Bot" action to temporarily disable AI messages for a specific period during the transition.




**Question:** Does the system save my progress if I accidentally close the page while setting up Human Handover?

**Answer:** Yes. The feature includes "Smart session memory," which ensures that your progress is saved if you leave the page or close the editor, allowing you to pick up exactly where you left off.




**Question:** If the AI bot fails to resolve a customer's issue, exactly how many unsuccessful attempts will it make before triggering a human handover?

**Answer:** The handover is automatically triggered after **2 unsuccessful attempts** by the AI to assist the user.