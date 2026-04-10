---
title: "Troubleshooting Audio Issues"
description: "Troubleshooting Audio Issue"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/SGM26ADPGquLnBuKJjl7"
sourceId: "SGM26ADPGquLnBuKJjl7"
category: "Troubleshooting"
---

**Troubleshooting Audio Issue**

In this guide, we will discuss troubleshooting methods for when you are experiencing audio issues with the system.

Common audio issues include:

-   Equipment issues
-   Internet connection issues
-   Default mic and speaker settings
-   Browser settings

Our system uses a Voice Over Internet Protocol (VOIP) system, which compresses audio. With this compression, your audio may sound different compared to the microphone you're using.

## **Internet Connection Issues:**

VoIP breaks audio data into small chunks called packets to transfer them over the internet. This means if you have a bad internet connection or a router, your audio quality might be affected. 

Please head over to [https://speed.cloudflare.com/](https://speed.cloudflare.com/) and do a test

It is recommended to at least have a 50MBPS uplink/downlink connection with a jitter lof ess than 10ms and a Ping of less than 40ms. If you have a connection that is inferior to the specs mentioned above, you may need to upgrade your internet or your router.

You can check the VoIP compatibility of your internet connection by heading over to - [https://test.webrtc.org/](https://test.webrtc.org/)

If you see any warnings then you may need to upgrade your internet, router or computer to improve your call quality.

\*Notes: 5G wifi with a 5G capable WiFi chip or adapter or direct Ethernet connection is going to provide much more stability.

## **Browsers:**

Mobile browsers lack the ability to receive or maintain call connectivity whilst in the background and they do not allow GSM call interruption handling.

Recommended browsers: Chrome, Firefox.

## **Chrome troubleshooting:**

-   Go to a site that wants to use your microphone and camera.
-   When prompted, choose Allow or Block.

_Allowed sites: Sites can start to record when you're on the site. If you're using a different Chrome tab or a different app, a site can't start recording._

_Blocked sites: Some sites won't work if you block them. For example, you won't be able to join a video call._

-   Please check for existing settings.
-   At the top right, click More and then Settings.
-   Click Privacy and Security then Site Settings and then Microphone.
-   Select the option you want as your default setting.
-   Review your blocked and allowed sites.
-   To remove an existing exception or permission: To the right of the site, click Delete.
-   To allow a site that you already blocked: Under "Not allowed," select the site's name and change the camera or microphone permission to "Allow."
-   Turn on permissions in the computer settings

_Note: If you use MacOS Mojave and your camera or microphone isn't on in your system preferences, Chrome may ask permission to use your camera or microphone. To use your camera or microphone in Chrome:_

-   In the dialogue, select Open Preferences. 
-   To enable mic permissions: 
-   Click Microphone and then Select the checkbox next to "Google Chrome."
-   Your computer may ask if you want to quit to save changes. To save changes, click Quit now.
-   You can select a default microphone to use on different sites.
-   Open Chrome.
-   At the top right, click More this looks like 3 dots and then Settings.
-   Click Privacy and Security and then Site Settings and then Microphone.
-   To select a default microphone, click the Down arrow.

If your microphone still isn’t working, try these steps:

### **Step 1:** Make Sure You Aren't Muted

If you’re using a headset, make sure the mute switch on the cord is off. Also, make sure you aren't muted on the website (like Google Meet or Skype).

### **Step 2:** Check your System Settings

-   Ensure your microphone is the default recording device, and that recording levels are correct: the microphone is connected to your Windows PC.
-   Select Start   > Settings  > System > Sound.
-   In Sound settings, go to Input and in the Choose your input device list, select the microphone or recording device you want to use.  
-   To test a microphone that has already been installed:
-   Make sure your microphone is connected to your PC.
-   Select Start   > Settings  > System > Sound.
-   In Sound settings, go to Input and under Test your microphone, look for the blue bar that rises and falls as you speak into your microphone. If the bar is moving, your microphone is working properly.
-   If you aren't seeing the bar move, select Troubleshoot to fix your microphone.

On your Mac, choose Apple menu  > System Settings, then click Sound in the sidebar. (You may need to scroll down.)

-   Click Input on the right, then select the device you want to use in the list of sound input devices.
-   All sound input devices available to your Mac are listed. If your display has an internal microphone, it’s listed as \[Mac model\] Microphone.
-   Do any of the following to adjust your sound input settings:
-   Adjust the input volume: Drag the volume slider.
-   If you’re recording sound through your computer’s sound port, you can adjust the input volume to compensate for the sound source being too loud or quiet.

For example, if you’re recording loud music, lower the input volume so the recorded sound isn’t too loud or distorted. If you are recording someone who is speaking softly, increase the input volume so your Mac can better capture the person’s voice.

Capture less background noise when using your computer’s built-in microphone: Select “Use ambient noise reduction.” This option does not appear if a 4-channel built-in microphone format is selected in Audio MIDI Setup, on a Mac with Apple silicon, or on Mac models with an Apple T2 chip.

_Note: You can’t adjust the input volume for a digital input device using your computer’s controls. You must adjust the input volume from its source, such as a receiver._

### **Step 3:** Contact your Manufacturer

If you’re still having problems, contact your microphone’s manufacturer.

### **Step 4:** Restart your Call and Computer

_Note: Attempting to see if the issues are resolved in an Incognito window in Chrome will show you if extensions, cache, or too many tabs are a part of the problem._

_Note: Limiting the amount of opened tabs, browsers, and other active internet-intensive apps will greatly improve performance._

## **Equipment:**

-   VoIP connections require your computer to perform heavy computations therefore if you are using an old machine, it is expected to have problems with VoIP call quality.
-   Make sure the volume is up as well just in case that is involved!
-   Double-click on your default Microphone > go to the level tab > raise the microphone volume higher. Possibly to 100.

_Note: Using a wired headset is recommended, if you are using a wireless headset please make sure the software is up to date._

_Note: Using a direct to AUX or XLR to Interface to USB is the most recommended method to capture audio. Bluetooth headsets are not recommended!_

## **Default Settings:**

-   Here are some examples of troubleshooting default sound and mic issues:
-   Try using different mics in case improvement can be found there.
-   Please ensure that you have selected the correct microphone. Typically your system will default to another one instead of your professional one, and this can be adjusted in the browser.
-   When you plug and unplug microphones, windows doesn't always recognize the default microphone. Even if you have a microphone plugged in already, windows will default to your regular computer mic.

## **Check Default Microphone Settings:**

1.  Go down to the speaker icon in the lower right-hand corner and right-click.
2.  Open sound settings > Sound control panel > Click recording tab.
3.   Make sure your default recording device is the correct microphone.

## **Check your Sound Settings:**

1.  Right-click the sound Icon and Open Sound Configuration or Start - Configuration - System - Sound.
2.  On the right panel go to advanced sound settings.
3.  There you will see a list of programs and you can choose the output device for each program. Chrome will be shown on this list only if it is playing some sound.

## **Check your Speaker Output:**

If multiple audio output devices are available, check that you have the appropriate one selected. Here's how:

1.  Select the Speakers icon on the taskbar.
2.  Note: If you don't see Speakers displayed, it may be in the overflow area. Select Show hidden icons to check there. 
3.  Next, select the arrow to open a list of audio devices connected to your computer.
4.  Check that your audio is playing to the audio device you prefer, such as a speaker or headphones.

## **Utilizing Network and Audio Connection Wizards:**

Right-click on the sound icon and go to Settings > System > Troubleshoot > Other troubleshooters and run a test on internet connections, audio, and recording.

## **Echo:**

Typically that would be due to some kind of feedback loop such as both people being on speaker at the same time.

\*Firewalls can also present an issue and may be worth looking into if this information does not resolve your audio issue.

## FAQs




**Question:** Why does my audio sound different during calls with the system?
**Answer:** Our system uses VoIP technology, which compresses audio for transmission. This compression can make your audio sound different compared to the microphone you're using. The quality of your internet connection also plays a significant role in maintaining clear audio.




**Question:** How can I test if my internet connection is suitable for VoIP calls?
**Answer:** You can test your internet speed and jitter by visiting [Cloudflare Speed Test](https://speed.cloudflare.com/) and checking VoIP compatibility at [WebRTC Test](https://test.webrtc.org/). It is recommended to have at least a 50MBPS connection with jitter under 10ms and ping below 40ms for optimal call quality.




**Question:** What should I do if my browser is causing microphone issues?
**Answer:** If using Chrome, go to _Settings > Privacy and Security> Site settings > Microphone_. Ensure your preferred microphone is selected as the default and that permissions for sites are set correctly. If problems persist, check your browser’s settings for blocked sites and microphone permissions.




**Question:** Why is my microphone not working even though it’s plugged in?
**Answer:** First, ensure that your microphone is set as the default recording device in your system’s sound settings. Check for any physical mute switches on your headset. If the issue remains, you may need to adjust input levels or troubleshoot the microphone through your operating system.




**Question:** What equipment should I use for the best VoIP call quality?
**Answer:** For the best results, use a wired headset or an AUX/XLR microphone setup. Bluetooth headsets are less reliable. Ensure your device’s software is up-to-date, and if using a wireless headset, verify that the connection is stable. Using a 5G-capable WiFi or an Ethernet connection is also recommended.




**Question:** What steps can I take to fix echo issues during calls?
**Answer:** Echoes are usually caused by feedback loops, such as both parties using speakers simultaneously. Switching to headsets or muting one of the speakers can help resolve this. Also, check your environment for any active devices that could be causing the feedback.




**Question:** How do I set the default microphone and speaker settings on my computer?
**Answer:** For Windows, go to _Start > Settings > System > Sound_ and select your preferred input and output devices. For Mac, go to _System Settings > Sound > Input_ and select the correct device. You can also adjust the input volume levels and enable noise reduction options if needed.




**Question:** My call quality is still poor despite using recommended settings – what else can I try?
**Answer:** If you’ve checked your internet, browser, and equipment settings and still experience issues, try restarting your call and computer. Running the browser in incognito mode can help determine if extensions or cache are causing problems. Additionally, limit the number of open tabs and background applications to reduce system strain.




**Question:** Can browser choice affect call quality and connectivity?
**Answer:** Yes, certain browsers, especially on mobile devices, have limitations regarding call connectivity. We recommend using Chrome or Firefox for the best experience. Mobile browsers generally struggle with maintaining call connections when minimized or interrupted by GSM calls.




**Question:** What should I do if all troubleshooting steps fail?
**Answer:** If none of the troubleshooting steps work, consider contacting your equipment manufacturer or your internet service provider. There may be deeper hardware or network configuration issues that require expert assistance.




**Question:** Why does my voice sound different or distorted on calls?
**Answer:** The system uses VoIP technology, which compresses audio. Combined with internet fluctuations, this may change how your voice sounds. Ensure your connection is stable for optimal quality.




**Question:** Are there settings to prioritize call quality over other network activity?
**Answer:** Yes, some routers allow QoS (Quality of Service) settings to prioritize VoIP traffic. This can improve call stability and reduce lag.  




**Question:** I’m on a Mac and my mic is plugged in, but Chrome still can’t "see" it. What’s wrong?

**Answer:** If you are using macOS Mojave or later, you must grant Chrome permission at the System level. Go to **Apple Menu > System Preferences > Security & Privacy > Privacy**, select **Microphone**, and ensure the checkbox next to **Google Chrome** is checked. You may need to restart Chrome for this to take effect.




**Question:** Which hardware connection is most recommended for capturing audio?

**Answer:** While USB headsets are common, the most recommended professional setup is a **direct to AUX** or an **XLR microphone connected to a USB interface**. The system also advises using a **direct Ethernet connection** rather than Wi-Fi whenever possible for maximum stability.