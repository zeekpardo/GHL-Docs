---
title: "Using the Voicemail Feature"
description: "Using the Voicemail Feature"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/KOpxGjAxoX6AyoRfOfdJ"
sourceId: "KOpxGjAxoX6AyoRfOfdJ"
category: "Phone"
---

**Using the Voicemail Feature**

The voicemail feature from streamlines how you handle incoming calls by allowing you to upload and manage custom voicemail messages. This ensures that callers receive clear, professional messaging when you’re unavailable. With options to set call timeout and upload personalized voicemail files, you can effectively manage and maintain a professional image for your business communications.  

## How to record your voicemail

Google Record mp3 online. Pick a website and record your voicemail online:

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXceXd55XiJwgnXaCSPkKKO9Q5HqBetWQtr3lrZszMGtCE6xe50-Q8Exdc-NuJMfIsgUN26CsGk3vN4xj8f9A-JO3FaZHD1s4UbyXHlG-gw2MAsGiAlDoEXFrQMA_MLZqrB7oxGVVdLc6gt_1yAT4qBH1oQ?key=xvucIHY6rXOQfWtWbDGrFA)

## Where To Upload Voicemail Files

**Step 1: Voicemail files (mp3 format) can be set in two different places:.**

-   Voicemail For **Users** - Account > **Settings** > **My Staff** tab > **Edit** User > Scroll down and expand **Call & Voicemail Settings** \> **Upload mp3/wav file**

![](<https://assets2.modalsupport.net/1762379554257-publishing nov1.jpg>)

![](<https://assets2.modalsupport.net/1762379619098-publishing nov 2.jpg>)

-   Voicemail For The **Business** - Account **Settings** → **Phone Numbers** → **Voice** → **Voicemail & Missed Call Textback**

![](https://assets2.modalsupport.net/1770823672995-image2.png)

**Note: When the contact calls the number that's not assigned to any users, it will play the voicemail, which is set up under Phone number settings → voice.**

### How does it work?

When the contact calls the number, we will ring the forwarding number for 10 seconds based on the call timeout set. After 10 seconds, if no one picks up, the contact will hear the voicemail recording.

Make sure Call Recording is enabled:

![](<https://assets2.modalsupport.net/1762381017238-modal nov1.jpg>)

![](<https://assets2.modalsupport.net/1762381078596-modal nov2.jpg>)


**Where to find the Call Recordings?**

1- Click on **Reporting** > **Call Report and scroll down** to locate the call recordings of the specific numbers.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdP7Dbn2V0ChPXCiM9zOl3PGSfljjd8HKm4K-ZayBqUD4xPiwbHPrg-RsNRrRXb3Han6BzF3CbYHQ7o6I8iG4SUlegR9kI1QGGPqMIIx3CvLIPN4z3Ur4tSh9jJK4v7X18GrhS2?key=xvucIHY6rXOQfWtWbDGrFA)

2- You can also click on the contact name to listen to the recordings on the **Conversation** page.

### **Where To Control Timeout Settings**

To replace the original voicemail of the forwarding number, you'll need to set a "Timeout" number; otherwise, the call will ring by default for 60 seconds, during which time the original voicemail of the forwarding number will usually trigger, and we will not be able to replace it with the uploaded recorded voicemail.

Timeout numbers can be set in three different places:


1) Account **→Settings→My Staff tab→Edit user→Call & Voicemail Settings**

2) Account → **Settings→Phone Numbers** → **Click the three-dot** → **Edit Contfiguration** → **Call Forwarding**  
3) Account **Settings** → **Phone Numbers** → **Voice** → **Voicemail & Missed Call Textback**

**Understanding Priorities For Timeout Settings:**

When a call comes into a number, it will ring for 60 seconds by default before looking for a voicemail to play unless a Timeout number has been set. will look for timeout numbers in the following order:  

**First** - is there a Timeout number in the user settings of the user this number is attached to? (option one above)

**Second** - is there a Timeout number in the phone number settings for this number? (option two above)

**Third** - is there a Timeout number in the Company settings -**Voicemail & Missed Call Textback**? (option three above)

**NOTE:** If a call comes into a number and a Timeout number is found, but no voicemail files are found, the following default message will be played: "**We are unable to take your call right now. Please leave a message after the beep.**"

Timeout numbers are not "connected" with any particular voicemail file, e.g., a call comes into a number, and detects a timeout number set in the User's settings (but that user doesn’t have a voicemail file) and finds a voicemail file in the Company Settings → Phone Settings → Voice → Voicemail & Missed Call Textback, will play the voicemail file from the Company settings - **Voicemail & Missed Call Textback tab** after the number of seconds set in the Timeout field in the User's settings.   

## Troubleshooting Voicemail not working in the Voicemail & Missed Call Textback tab

#### 1\. Check if the number is assigned to the user, and make sure the user has uploaded a voicemail file.

#### 2\. Check if there's a forwarding number or business phone configured. We must forward the call somewhere to drop/play the uploaded voicemail.

-   One way might be to get a Google Voice number and put it in the forwarding number. Set the incoming call timeout to 1 second so it will drop the call faster in 2-3 rings. The call timeout will need to be at least 1 second to attempt to connect the call. The idea is to drop/time out the call before the forwarding number's original voicemail is played. 

#### 3\. Check the call timeout set. Try setting the Inbound call timeout to 1 second

-   The maximum Incoming Call Timeout should be less than 20 seconds. Suppose the call timeout is set to be more than 20 seconds. In that case, we won't be able to replace the original voicemail, as the original voicemail for the forwarding number will usually be playing by then.
-   If it's already set to 20 seconds, but it's still playing the forwarding number's original voicemail instead of the voicemail you uploaded, try setting the call timeout to 1 second and calling again to see if it works. If it works, you can gradually increase the call timeout (10 seconds, 15 seconds) to test further so it will call the forwarding number longer and still be able to play the uploaded voicemail.

![](<https://assets2.modalsupport.net/1762380514999-publishing nov 9.jpg>)

#### 4\. Check if we call the forwarding number directly; does the call go to voicemail as soon as you call it?

-   If the forwarding number is in **Do Not Disturb** mode or is configured to go directly to a pre-set voicemail, we won't be able to replace that voicemail because the forwarding number's original voicemail plays immediately.

The key is to figure out how soon your own voicemail will play and set the call timeout so you can drop the call before your voicemail answers. If your voicemail answers right away during **Do Not Disturb** mode, we won't be able to replace the original voicemail.

###   

If you are using a Google Voice number or landline, they might have their call settings, so we are not able to overwrite their configured voicemail. You may have to turn off the announced feature in Google Voice. That may pick up as a voicemail, and we are not able to overwrite its original voicemail.

#### 5\. Check if the uploaded Voicemail file is too high-quality

If the voicemail file quality is high and also not an MP3 file, these instructions should help you make it compatible

1\. Go to [https://online-audio-converter.com/](https://online-audio-converter.com/) and upload the voicemail file 

2\. Convert to **ECONOMY 64kbps MP3**

3\. Upload it and call the number to test it again. 

### Pro Tips

1.  **Test Voicemail Settings Regularly:** After uploading your voicemail files and adjusting timeout settings, regularly test by calling the number to ensure the correct voicemail plays. This helps identify any configuration issues promptly.
2.  **Maintain File Format Consistency:** Always use MP3 or WAV formats for voicemail files. If necessary, convert the files to the appropriate settings using tools like online audio converters for compatibility.
3.  **Optimize Timeout Settings:** Start with a shorter timeout (e.g., 1 second) for testing purposes and gradually increase it to find the optimal duration. This ensures that the new voicemail is played before any default voicemail from forwarding numbers.
4.  **Monitor Call Recordings:** Check call recordings frequently to verify that the voicemail plays correctly. This will help in troubleshooting and ensuring the voicemail system works as intended.
5.  **Update and Manage Voicemail Files:** Regularly update your voicemail files to keep them relevant and professional. Manage different voicemails for users and business needs to ensure consistent communication.

### FAQ




**Question:** How do I record my voicemail?
**Answer:** You can record your voicemail by using an online MP3 recording tool. Simply choose a website, record your message, and save it as an MP3 file.




**Question:** Where can I upload voicemail files?
**Answer:** Voicemail files can be uploaded in two places:

-   Account **→Settings→My Staff tab→Edit user→Call & Voicemail Settings**
-   Account **Settings** → **Phone Numbers** →**Voice**→ **Voicemail & Missed Call Textback**




**Question:** What is the purpose of setting a timeout number?
**Answer:** A timeout number allows you to control how long the system will ring before playing the voicemail. Setting this ensures that your uploaded voicemail plays before any default voicemail from forwarding numbers.




**Question:** What should I do if my voicemail is not playing correctly?
**Answer:** Check if the number is assigned correctly, verify the forwarding number settings, and ensure the call timeout is appropriately set. If needed, test the configuration and adjust settings for optimal performance.




**Question:** How can I troubleshoot issues with voicemail playback?

**Answer:** Ensure the voicemail file is in MP3 or WAV format and not too high-quality. Verify the timeout settings, ensure forwarding numbers are configured properly, and test the voicemail playback by calling the number.  




**Question:** How do I ensure my voicemail file is compatible with the system?
**Answer:** To ensure compatibility, make sure your voicemail file is in MP3 or WAV format. If the file is of too high a quality, you can use an online audio converter to convert it to an MP3 file with ECONOMY 64kbps settings before uploading it.  




**Question:** What happens if a timeout is set but there is no voicemail file uploaded?
**Answer:** If the system detects a timeout number but cannot find an uploaded voicemail file it will play a default message stating that the team is unable to take the call right now and asking the caller to leave a message after the beep.




**Question:** In what order does the system look for a Timeout number if multiple are set?

**Answer:** The system follows a specific three-step priority: First, it checks the **User settings** for the specific number; second, it looks at the **Phone Number settings**; and third, it checks the **Company settings** under Voicemail & Missed Call Textback.