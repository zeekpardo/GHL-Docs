---
title: "How To Set Up Automated Calls And Voicemail Drops in a Workflow"
description: "How To Set Up Automated Calls And Voicemail Drops in a Workflow"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/v4K3WKWA8uXmnq8lU1Qg"
sourceId: "v4K3WKWA8uXmnq8lU1Qg"
category: "Workflow"
---

**How To Set Up Automated Calls And Voicemail Drops in a Workflow**

Within the Workflow builder, you can create an automated sequence for making calls and dropping voicemails. Below is a step-by-step guide on setting up this sequence using a tag-based trigger.

**1\. Navigate to the Automation Tab**Go to the Automation tab and select "Workflows."

**2\. Create a New Workflow**Click on "Create New Workflow" or edit an existing one.

![](https://assets2.modalsupport.net/1763395771920-image.png)

**3\. Set Up the Trigger**

-   In the Workflow builder, add a trigger for "Contact Tag."
-   Decide which tag you want the Workflow to be based on and use the "Filters" option to select a specific tag.
-   **Note:** If you don't specify a tag, the Workflow will trigger on any contact tag, which might not be ideal for your specific needs. Choose the appropriate tag that matches your business use case, such as tags from appointment bookings or tags added to imported contact lists.

![](https://assets2.modalsupport.net/1763395796820-image.png)

**4\. Save the Trigger and Add Actions**After setting up the trigger, save it and proceed to add actions to your Workflow.

**5\. Assign Calls to a User**

-   Add the ‘Assign to User’ action if you want the calls to be directed to the assigned user’s configured phone number.

![](https://assets2.modalsupport.net/1763395867323-image.png)

**6\. Add the Call Action**

-   Add the ‘Call’ action to your Workflow.

![](https://assets2.modalsupport.net/1763395890522-image.png)

-   By default, a call whisper message (a message heard by the answering party) plays, stating: "You have a new lead, John Smith. Press any button to connect." This message repeats up to three times before connecting the call.

![](https://assets2.modalsupport.net/1763395922461-image.png)

-   You can modify the call whisper message by adjusting the settings here, and you may use Custom Variables to further personalize it.

**_NOTE: To enable leaving a personalized voicemail, go to the settings of the call step and activate "Disable Voicemail Detection." This allows you to upload your voicemail file and ensure the message is delivered as intended._**

![](https://assets2.modalsupport.net/1763395977562-image.png)

**7\. Add the Voicemail Action**

-   Add the Voicemail action to your Workflow. If the lead doesn’t answer, the message, "Couldn't connect with the lead," will play, and the call will end without leaving a personalized voicemail.

![](https://assets2.modalsupport.net/1763396000065-image.png)

**8\. Creating the Voicemail Recording**

Create a voicemail recording using the program of your choice.

Save it as a .mp3 or .wav file.

You can use tools like [https://recordmp3online.com/](https://recordmp3online.com/) to record your voicemail message.

**9\. Uploading Voicemail File**

When adding the Voicemail action, ensure you upload the voicemail recording in the correct format (.mp3 or .wav).

This step is crucial for the Voicemail Drop to function correctly, as it relies on the uploaded recording to leave the message.

**10\. How Voicemail Drops Work**

The Voicemail Drop process involves making an initial call to the contact, disconnecting it immediately, and then initiating a second call that goes directly to voicemail. This sequence allows the voicemail message to be left without requiring live interaction.

**11\. Limitations of Voicemail Drops**

Voicemail Drops work approximately 70% of the time. They are a workaround to expedite leaving voicemails, but phone carriers generally do not favor this method. As a result, the success rate may vary.

**12\. Save and Publish the Workflow**

-   Once all actions are set up, save and publish your Workflow for it to be operational.

![](https://assets2.modalsupport.net/1763396022722-image.png)

### FAQs




**Question:** Can I run the Workflow on multiple tags simultaneously?
**Answer:** Yes, you can configure the Workflow to run on multiple tags by adding more triggers with the desired tags. Make sure to set the correct tags in the "Filters" section for each trigger to ensure the Workflow runs based on your selected criteria.




**Question:** What happens if I don’t specify a tag in the trigger?
**Answer:** If no tag is specified, the Workflow will trigger on any contact tag, which might not suit your needs. It is essential to specify the right tag to ensure the Workflow activates only for the intended contacts.




**Question:** How do I customize the Call Whisper message?
**Answer:** You can customize the Call Whisper message within the settings of the Call action. This is the message that plays to the assigned user before the call connects. You can use Custom Variables to personalize this message, and it will play up to three times before connecting the call.




**Question:** Can I leave a personalized voicemail if the call doesn’t connect?
**Answer:** By default, if the call fails to connect, no personalized voicemail is left. To leave a custom voicemail, disable the voicemail detection in the call step settings by turning on "Disable Voicemail Detection," and then upload your personalized voicemail file.




**Question:** Is it possible to assign calls to a specific user’s phone number?
**Answer:** Yes, you can direct calls to a specific user’s phone number by adding the ‘Assign to User’ action in the Workflow. Ensure that the user’s phone number is correctly configured in their settings to route the calls to the intended person.  




**Question:** Are voicemail drops legal?
**Answer:** Voicemail drops are legal only if you have the user’s consent. The Telephone Consumer Protection Act (TCPA) considers voicemail drops as a form of communication that uses automated dialing systems and prerecorded messages. Therefore, obtaining prior express consent from recipients is mandatory. Without consent, you may face legal action or fines from the Federal Communications Commission (FCC) or other private parties.  




**Question:** Can I use Voicemail Drop in any workflow?
**Answer:** Yes, Voicemail Drop can be integrated into any workflow by adding the "Voicemail" action and attaching your pre-recorded message. This will only work if you have a contact phone number on file.




**Question:** Why does the system make two calls for a Voicemail Drop?
**Answer:** The first call is disconnected quickly to avoid live interaction. The second call is initiated immediately after, designed to go straight to voicemail, allowing your pre-recorded message to be delivered without requiring a conversation.




**Question:** What’s the benefit of using a Voicemail Drop?
**Answer:** Voicemail Drops save time by automating the voicemail process, allowing you to efficiently leave messages for multiple contacts without manually dialing each one and waiting for their voicemail to pick up.




**Question:** What should I do if my voicemail file isn’t uploading correctly?
**Answer:** Ensure that the file is in .mp3 or .wav format and that the file size isn’t too large. If you still encounter issues, try re-saving the file or using a different recording program.




**Question:** Can I trigger a Call Action immediately when a form is submitted?
**Answer:** Yes. This is known as a **"Speed to Lead"** automation. By setting the trigger to "Form Submitted" followed immediately by a "Call" action, you can potentially be on the phone with a lead within 30 seconds of them showing interest.




**Question:** Can I route the call to a group of people instead of just one user?
**Answer:** **Yes.** Instead of using "Assign to User," you can use the **"Round Robin"** or **"User Group"** assignment logic. The system will then dial the users in that group based on your settings (e.g., ringing everyone simultaneously or in a specific order) to ensure the lead is contacted as quickly as possible.