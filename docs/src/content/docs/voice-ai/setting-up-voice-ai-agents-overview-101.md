---
title: "Setting Up Voice AI Agents - Overview 101"
description: "Setting Up Voice AI Agents - Overview 101"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/GRYBAGNsA8pSZOzFxoxn"
sourceId: "GRYBAGNsA8pSZOzFxoxn"
category: "Voice AI"
---

**Setting Up Voice AI Agents - Overview 101**

Voice AI Agents can be an essential asset for your business, handling inbound calls and performing various tasks based on predefined goals, enabling your team to focus on high-priority activities like lead nurturing and closing sales. With customizable features like voice selection, automated workflows, and 24/7 availability, setting up a Voice AI Agent can streamline call handling and enhance customer engagement. This guide provides a detailed walkthrough of how to create and configure a Voice AI Agent for your business.

### Key Features & Benefits

-   **Automated Call Handling**: The Voice AI Agent manages inbound calls, collecting information and providing responses based on customizable scripts and prompts.
-   **Enhanced Call Handling:** Voice AI call rate limits are 200 calls per minute, enabling simultaneous customer interactions and reducing wait times. Regular call limits remain unchanged to balance AI and traditional call handling.
-   **Multi-Mode Agent Goals**: Configure the agent's goals in either Basic or Advanced Mode, with options to collect caller information or set up specific instructions and workflows.
-   **Workflow Integration**: Seamlessly trigger workflows, send SMS messages, or update contact fields based on call interactions, improving the efficiency of follow-up actions.
-   **Customizable Voice and Tone**: Choose from a variety of voices and accents to match your brand’s tone and provide a personalized caller experience.
-   **Availability Management**: Set working hours and assign phone numbers, so the AI Agent only handles calls during specific times, allowing your team to take calls when available.
-   **Import Your Own Voices from 11 Labs:** Import custom voices from 11 Labs under the "My Voices" tab for a more personalized Voice AI experience.

## How to Set Up a Voice AI Agent

### Step 1: Access the AI Agents Section

1.  **Navigate to Settings > Voice AI Agents** in your account.

2\. Once in the AI Agents section, click **\+ Create Agent** to start setting up a new Voice AI Agent.  

![](<https://assets2.modalsupport.net/1764242013744-unnamed - 2025-11-27T191322.489.jpg>)

3\. A pop-up will appear that will give you the options: Browse Marketplace or Create Custom Agent. For this tutorial, we will go with the latter.  

![](<https://assets2.modalsupport.net/1764242037405-unnamed - 2025-11-27T191345.227.jpg>)

**Step 2: Configure Agent Details**

**1\. Agent Name**: Enter a unique name (e.g., “Customer Support Bot”) for easy reference.

**2\. Business Name**: Verify or update your business name to ensure consistency.

**3\. Language**: Select your desired language from the variety of languages available. The Voice AI supports multiple languages, including English, Brazilian Portuguese, Spanish, French, German, Italian, and Dutch.

**4\. Voice Selection**: Choose a voice that best matches your business. Test the voices by clicking the play button to preview.

**5\. Timezone**: You can set the timezone of your Voice AI agent

**6\.Agent's Initial Message**: Customize the greeting (e.g., “Hello, you’ve reached \[Business Name\]. How can I help you today?”).

![](<https://assets2.modalsupport.net/1764242056485-unnamed - 2025-11-27T191408.231.jpg>)

**7\. Advanced Settings:**

-   Adjust call durations from 3 to 15 minutes.
-   Choose response speed options, including “Fast” for rapid exchanges, “Normal” for focused discussions, and Brisk for in between.

-   The delay timer can be set between 1 and 20 seconds, with the default set to 8 seconds. Calls will automatically terminate if there is a post-reminder silence lasting more than 15 seconds.
-   You also have the option to customize the Agent’s behavior: response speed and LLM temperature.
-   You can also customize the Voice Settings of the Agent. In this, you can adjust Voice Speed, Voice Temperature, Voice Volume, and Background Sound.
-   You also have the option to reset to default settings.

![](<https://assets2.modalsupport.net/1764242076787-unnamed - 2025-11-27T191429.419.jpg>)

### Step 3: Define Agent Goals

#### Basic Mode

1- Select **Basic Mode** if you want the agent to collect essential caller details with minimal setup.

2- Choose the information you want to collect, such as the caller’s **Name, Email, Address,** or **Issue**.

3- Check the box to **Trigger a Workflow** if you want a workflow to start when the call ends.

4- Enable/Disable the option to **Receive Email notification post-call completion**. Choose from multiple options, such as sending notifications to all admins, assigned users, specific users or even custom email addresses.

![](<https://assets2.modalsupport.net/1764242097206-unnamed - 2025-11-27T191449.234.png>)

#### Advanced Mode

For more control over the agent’s actions, switch to **Advanced Mode**.

![](<https://assets2.modalsupport.net/1764242117313-unnamed - 2025-11-27T191509.212.png>)

![](<https://assets2.modalsupport.net/1764242128829-unnamed - 2025-11-27T191518.853.jpg>)

**1- Knowledge Base:** With the Knowledge Base, AI Agents can automatically fetch relevant information from a dedicated resource when triggered by user input. You can assign a knowledge base to each agent under Agent Goals in both Basic and Advanced modes.

![](<https://assets2.modalsupport.net/1764242151180-unnamed - 2025-11-27T191543.090.png>)

**2- Prompts**: Write detailed prompts to guide the agent’s personality and responses.

![](<https://assets2.modalsupport.net/1764242167317-unnamed - 2025-11-27T191559.190.png>)

**Set up your actions:**

**Note:** The system allows for action limits of up to 15 for **call transfers, workflows**, and **SMS** triggers, providing flexibility for users to prioritize actions. You also have the option to add actions during the call or after the call.

**3- Call Transfer**: Set rules for transferring calls to a human if certain conditions are met.

![](<https://assets2.modalsupport.net/1764242183638-unnamed - 2025-11-27T191617.139.jpg>)

![](<https://assets2.modalsupport.net/1764242197411-unnamed - 2025-11-27T191627.516.jpg>)

**4- Workflow Triggers**: Define workflows that automatically trigger based on call interactions.

![](<https://assets2.modalsupport.net/1764242216978-unnamed - 2025-11-27T191649.303.jpg>)

![](<https://assets2.modalsupport.net/1764242232449-unnamed - 2025-11-27T191703.250.jpg>)

**5- Update Contact Fields**: Specify which fields the agent should update with the collected information.

 The update contact field has an action limit of 25 to maintain data accuracy and prevent erroneous updates.

![](<https://assets2.modalsupport.net/1764242253112-unnamed - 2025-11-27T191724.237.jpg>)

![](<https://assets2.modalsupport.net/1764242268371-unnamed - 2025-11-27T191737.893.png>)

-   Voice AI can automatically extract numbers, monetary values, and postal codes during voice interactions. Create an "Update Contact Field" action and choose the relevant fields (e.g., ticket ID, budget, postal code). 

-   When the required number or postal code is mentioned during a call, it will automatically update the corresponding contact record.

**Important:** This functionality is limited to extracting numbers, monetary values, and postal codes.

![](<https://assets2.modalsupport.net/1764242294670-unnamed - 2025-11-27T191805.978.jpg>)

**6- Send SMS**: Configure SMS responses during or after calls for efficient follow-ups.

![](<https://assets2.modalsupport.net/1764242318217-unnamed - 2025-11-27T191830.669.jpg>)

![](<https://assets2.modalsupport.net/1764242330557-unnamed - 2025-11-27T191839.553.jpg>)

**7- Appointment Booking** allows automatic scheduling based on predefined rules.

![](<https://assets2.modalsupport.net/1764242346435-unnamed - 2025-11-27T191858.575.jpg>)

-   Select the calendar the AI agent will use for bookings.
-   Define the number of days for available appointment slots (e.g., 3 days).
-   Set the maximum number of slots per day (e.g., 3).
-   Specify the gap between each appointment (e.g., 3 hours).
-   If the contact’s email is missing, the AI agent will request it before confirming the booking.

![](<https://assets2.modalsupport.net/1764242367013-unnamed - 2025-11-27T191918.683.jpg>)

-   **Use case:** By configuring the AI agent with a calendar, available slots, and working hours, the system handles missed calls and schedules appointments on behalf of the team, ensuring no lead is lost and improving efficiency.

**8- Custom Actions** enable AI agents to integrate with external systems through Webhook calls. Custom Actions enable your AI agents to trigger processes, fetch live data, and perform tasks in real time during conversations, such as updating order statuses or querying systems.

Note: Custom Actions work with POST Webhook calls and support authentication, headers, and dynamic parameters.

![](<https://assets2.modalsupport.net/1764242387533-unnamed - 2025-11-27T191938.472.jpg>)

![](<https://assets2.modalsupport.net/1764242400274-unnamed - 2025-11-27T191951.333.jpg>)

**Note**: Once the agent is configured in Advanced Mode, it cannot revert to Basic Mode.

**9-Separate “During” and “Post-Call” Actions in Voice AI**

The Separate During and Post Call Actions feature improves the organization and management of actions within your Voice AI agents.

1.  In the **Voice AI** interface, you will see actions split into two sections: **During the Call** and **After the Call**.
2.  Add or manage actions using the **New Action** button, and delete actions directly from their respective cards.

![](<https://assets2.modalsupport.net/1764242421823-unnamed - 2025-11-27T192013.594.png>)

### Step 4: Configure Number and Availability

**1\. Assign Phone Numbers**: Select the phone numbers that will route to the Voice AI Agent.

**2\. Activate the AI Agent as a backup for the phone number or number pool:** The AI Agent will handle the call if the user or call forwarding number does not respond.

-   The AI will also handle incoming calls routed through the pool.
-   Agents assigned to a Number Pool will appear on the Agent Listing Screen for easier management, and call tracking logs will display the specific phone number used for each call. 

![](<https://assets2.modalsupport.net/1764242443972-unnamed - 2025-11-27T192034.637.jpg>)

**3\. Set Working Hours**: Define the agent’s availability to handle calls only during specified times.

![](<https://assets2.modalsupport.net/1764242465650-unnamed - 2025-11-27T192057.046.png>)

### Step 5: Test and Finalize

1\. Once all configurations are complete, make a test call to ensure everything works as expected.

![](<https://assets2.modalsupport.net/1764242484852-unnamed - 2025-11-27T192115.188.png>)

2\. Once the call is complete, review the following:

-   **Call History** – Access previous test calls.
-   **Transcripts & Recordings** – Examine the conversation details.
-   **Summaries & Feedback** – Rate the interaction and provide insights to improve your agent's performance.

![](<https://assets2.modalsupport.net/1764242505896-unnamed - 2025-11-27T192137.220.png>)

### Call Logs:

-   View the contact name or phone number for each call log.
-   Click on the contact name or number to access the corresponding contact details.

**Important:** Contact names will appear only if the caller is already saved as a contact in the system.

![](<https://assets2.modalsupport.net/1764242522692-unnamed - 2025-11-27T192155.408.png>)

### STEP 6: Analytics Dashboard for Voice AI Agents

**AI Dashboard for Analytics**: This provides a comprehensive view of analytics specific to Voice AI interactions. It includes:

-   **Call Analytics**: Insights into the total number of calls, trends over time, and average call duration.

![](<https://assets2.modalsupport.net/1764242540335-unnamed - 2025-11-27T192213.457.png>)

-   **Actions Triggered**: Data on the total actions triggered, with a detailed breakdown of each action type and frequency.

![](<https://assets2.modalsupport.net/1764242569096-unnamed - 2025-11-27T192240.274.png>)

-   **Updated Contact Fields**: Information on the most frequently updated contact fields during calls.

![](<https://assets2.modalsupport.net/1764242593603-unnamed - 2025-11-27T192304.278.png>)

-   **User Sentiment Analysis** : AI-analyzed sentiment metrics to gauge how users feel about the calls.

![](<https://assets2.modalsupport.net/1764242617218-unnamed - 2025-11-27T192330.138.png>)

-   **Customizable Date Ranges and Filters** : Options to filter analytics by specific time durations or by individual agents for targeted insights.

![](<https://assets2.modalsupport.net/1764242637398-unnamed - 2025-11-27T192349.068.png>)

**Location of the Dashboard**: The dashboard can be accessed by navigating to Settings> the AI Agents tab> 'Voice AI agents dashboards and logs' section.

**Comparison Features**: The dashboard allows for comparisons to previous periods, showing percentage changes and trends over time to better understand performance improvements or declines.

## Pro Tips

-   **Train Your Agent**: Provide detailed prompts and responses for complex inquiries to improve the accuracy and usefulness of the AI Agent’s interactions.
-   **Segment Calls with Advanced Mode**: Use Advanced Mode if you need the agent to handle specific scenarios, such as transferring calls based on caller responses.
-   **Use Availability Settings**: If your team is available during certain hours, adjust the agent’s working hours to allow direct human interaction when your staff is on duty.

## FAQs




**Question:** Can I use different voices for each AI Agent?
**Answer:** Yes, each Voice AI Agent can have a unique voice and accent, allowing for tailored caller experiences.




**Question:** What is the difference between Basic Mode and Advanced Mode?
**Answer:** Basic Mode is simpler, collecting only essential caller details. Advanced Mode allows more customization, including detailed prompts, workflow triggers, and call transfers.




**Question:** Can I switch between Basic and Advanced Mode?
**Answer:** Once you set up the agent in Advanced Mode, you cannot revert to Basic Mode. If you need to change modes, you must create a new AI Agent.




**Question:** Can I link multiple phone numbers to the same AI Agent?
**Answer:** Yes, you can assign multiple phone numbers to one AI Agent and calls to any of these numbers will route to the AI Agent. 




**Question:** How can I disable an AI Agent temporarily?
**Answer:** To disable an agent, remove the assigned phone number(s) from its settings. The agent will remain in the system but won’t answer calls.  




**Question:** What are the limits for action controls in Voice AI?


**Answer:** The action limits for call transfers, workflows, and SMS triggers are set at 15, while the update contact field action has a limit of 25 to ensure data accuracy.




**Question:** How do I assign a Number Pool to an agent?

**Answer:** Go to Create/Update Agent → Phone & Availability and assign a Number Pool to your agent.




**Question:** What happens if a call comes to a pool number?

**Answer:  Incoming calls will be routed through the pool number, with AI handling the routing based on the agent's availability and backup settings.




**Question:** Is there any granular permission feature in Voice AI agents?
**Answer:** Yes, Voice AI agents have a granular permission feature. It allows admins to define specific access levels for users, including managing agents, configuring agent goals, viewing agent goals, and accessing the Voice AI dashboard. You can manage it in Settings > My Staff > Edit User > Roles & permissions tab.




**Question:** Can I configure my Voice AI Agent to handle appointment bookings?

**Answer:** Yes, the Voice AI Agent can automatically handle appointment bookings based on predefined rules. You can define available calendar slots, working hours, and gaps between appointments. The AI Agent will even request missing information, such as email addresses, before confirming appointments.  




**Question:** What types of information can the Voice AI Agent automatically extract and update in contact fields?

**Answer:** The Voice AI Agent is specifically designed to extract numbers, monetary values, and postal codes from conversations. It can then automatically update corresponding contact records, such as ticket IDs, budget amounts, or zip codes.




**Question:** Can the AI Agent handle "Outbound" calls or just "Inbound"?

**Answer:** The Voice AI Agent is optimized for **Inbound** calls (handling leads who call you). For outbound calling, you would typically use a Workflow to trigger a manual call or use the "Power Dialer" feature for your human team.