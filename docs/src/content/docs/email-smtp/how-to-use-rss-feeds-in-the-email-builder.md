---
title: "How To Use RSS Feeds in the Email Builder"
description: "In this article, you will learn how to use RSS Feeds in the Email Builder and how to send RSS email campaigns."
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/7thdrjFqeBWDHi9mcDvo"
sourceId: "7thdrjFqeBWDHi9mcDvo"
category: "Email & SMTP"
---

In this article, you will learn how to use RSS Feeds in the Email Builder and how to send RSS email campaigns. 

## RSS Elements

The RSS Elements in the Email Builder allow you to send automatic emails containing dynamically inserted content when a new RSS item is published. 

![](https://lh7-us.googleusercontent.com/docsz/AD_4nXebsYg_eT2WXSOEUJv-tgsb-DHoisOnR_O4e_4dI5dadQion0iZkASUr49fWUBeUDtRzOTH9ZJQbCSpWf7mSzOr_lRox2hyLabdEMU1tPTREJdouVIOtuJ_m4st4FDRETiWvzb6tZBOb-mamgXZnLC8utey?key=ifGozZpcgO__dTojFvxPAA)

The **RSS Header** element will dynamically populate <channel> tags from your RSS Feed. This supports the following RSS channel tags - use their respective Custom Value to populate the email with the corresponding tag value:

![](https://lh7-us.googleusercontent.com/docsz/AD_4nXekjWAunHcYeDcLRtySzrkqQuKOMDDspNPzzqlV9dNUVViCSp-JSby-vEzRWvQ3MiOBGvumj0XAFaBy5dZerOjzABhI8v3Ks57Qe7WJmLaX_g0qpueftSzSUVrjThNPY1VArr6k6kcUTfsc-Znlg_B4a_zM?key=ifGozZpcgO__dTojFvxPAA)

## Basic Vs Custom in the RSS Header

When using the RSS Header element, you will see two editing options: Basic and Custom. 

![](https://lh7-us.googleusercontent.com/docsz/AD_4nXfcNnfP1Tn54ghrJXw1Q3CzQIcgBeV0P6kk1jGBotQQk2QFCZvtFR3y5fkHQ7gQTi4il_OOScIj4eUbHKrhLJ89XhVuf0l1tVnvDYqCef5aKzjiYIItlAPZ88i93a_HotGtPH4fdlemGMzO70pbX6ot12M?key=ifGozZpcgO__dTojFvxPAA)

The basic adds the following non-editable text in the Text Editor

   <h1 class="h1">{{rss\_feed.title}}</h1>    {{rss\_feed.description}}<br />    <br />

The custom adds the following editable text in the Text Editor

Updates from {{rss\_feed.url}}    <h1>{{rss\_feed.title}}</h1>    <strong>{{rss\_feed.description}}</strong><br />    <br />    <strong>In the {{rss\_feed.date}} edition:</strong><br />

**Note:** You can also use the four custom RSS <channel> variables in the subject line

![](https://lh7-us.googleusercontent.com/docsz/AD_4nXcTv7rpa9pOLJyotriLFdWqxMnrMwx--IqAZ4dpyjxLvAzMpHsP7mvPdiax3uWH8rw46alzMyQRwy0_HQWky2-EKEcZzgjkj_Gm7pj6-r28cX4iIA0Syvgdromt_1YJ62KCzxZr-YCM11FyKsDdnJb8X4Mc?key=ifGozZpcgO__dTojFvxPAA)

The RSS Items element accepts the following custom values and will dynamically insert their corresponding RSS Tags. The RSS now includes support for thumbnails under the media group of RSS feeds.

![](https://lh7-us.googleusercontent.com/docsz/AD_4nXc7hocg589hOso2Fkzrv33cdfoZUQdt1Ce5V2GYGCTHIALRVtnzqDmmh59Ij9_Z0FDt2ErbSuK94upBUoDk-NEQKhqR8p75mXRPXFTTZXKranra5NpGYSf8Fvj1PZJnRtl-eXyTx8g4MUW9Sr2oW8fW2fM?key=ifGozZpcgO__dTojFvxPAA)

## RSS Schedule on Email Campaigns

RSS enables you as a business to deliver updates and newly published blog content via email. You can send periodic RSS emails or newsletters that provide an overview of blog content based on what they have missed. 

RSS stands for “Really Simple Syndication”, and refers to files that are read quickly by a computer (XML files) that automatically update information across sites. 

### Part 1: Creating an RSS email

-   Go to Marketing - Email - Email Campaign
-   Click on Create Campaign
-   Select the email template you want to use
-   Use the tools the email builder gives you to design your campaign
-   Once your design and content are ready you can click on Send or Schedule

### Part 2: Pre-Sending Checklist

-   Click on the RSS option in Sending Options on the left side
-   Add your RSS Feed URL
-   Choose Daily, Weekly, or Monthly
-   Select the time when the RSS email campaign is to be sent out
-   Uncheck the days from the week you don't want to send the RSS email
-   On the right side, add your recipients in the To Section by choosing the email(s), add the email address in the From section, your name in the Name section, the subject line in the Subject section, and the preview text in the Preview section. 

**Notes:** 

-   Check the details of the execution date, time, and time zone before scheduling
-   You can delete or reschedule the campaign. To reschedule, click on reschedule and set the date-time of the campaign. You can reschedule for one hour before sending the email campaign. 
-   The RSS Email Campaigns also have a Pause option. Click on Actions and then on Pause.