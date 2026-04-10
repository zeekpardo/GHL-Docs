---
title: "RSS Blocks In the Email Builder"
description: "RSS Blocks In the Email Builder"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/XQDkQUgtDExkB1y9lvui"
sourceId: "XQDkQUgtDExkB1y9lvui"
category: "Email & SMTP"
---

**RSS Blocks In the Email Builder**

The RSS Elements in the Email Builder allow you to automatically send emails containing dynamically inserted content when a new RSS (Real Simple Syndication) item is published. 

## **Usage**

### **RSS Header**

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfg6FiRqDzIlkxx28YavNRtymrB6PFqeOZyVVzZiUjBDce_UzLivDmQEs19edjdYoMPIO1okTvMKAlzjOOaFGbMjKtkY0aRx2_nnTeexMlz9Cf01gjBN7LYcv62biVUWHh69npyKQ?key=Gw6MD4YvEh-ncwprcF5wCg)

### **RSS Header Block**

This will dynamically populate <channel> tags from your RSS Feed. The RSS Header Element supports the following RSS channel tags - use their respective Custom Value to populate the email with the corresponding tag value:

RSS Tags  

Custom Value For HL  

<title>  

{{rss\_feed.title}}  

<description>  

{{rss\_feed.description}}  

<link>  

{{rss\_feed.url}}  

<lastBuildDate>  

{{rss\_feed.date}}  

## **Basic Vs Custom in RSS Header** 

When using the RSS Header block, you'll see two options in the "RSS Editing Options" dropdown selector: Basic and Custom.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcuIefZ05Yo5WWzd_w8mt5L8faAPl-dLnI139IszpCnzajBZx0rjxwL8cgOiO1VzDEjiHqLhCRB7XFwWsM1F6cfLjyXIoGXc_4aRIEcm-4WcnTg1Y45HIwcKsI7I5J6rWhU9TpMPw?key=Gw6MD4YvEh-ncwprcF5wCg)

**Basic:** adds the following non-editable text in Text Editor

-   <h1 class="h1">{{rss\_feed.title}}</h1>    {{rss\_feed.description}}<br />    <br />

**Custom:** adds the following editable text in Text Editor

-   Updates from {{rss\_feed.url}}    <h1>{{rss\_feed.title}}</h1>    <strong>{{rss\_feed.description}}</strong><br />    <br />    <strong>In the {{rss\_feed.date}} edition:</strong><br />

**NOTE:** The four custom RSS <channel> variables can also be used in the subject field like this:

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeNqhrYRycY4lNPDsnzz7Rn15updmub2TFlLW6VIM-YkJdmnqpq420dJDgZGHALK9P49_AH37YqDlw0ypAk5YqYEofO1Yr_x8IL42qH1_2ROn3gaiviKK7iw-pl41-VafRBQE9T95Pv_j8H0YKBjEUVxfMB?key=Gw6MD4YvEh-ncwprcF5wCg)

## **RSS Items**

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeKVkb08XglNTbUhrJbMVJ_g3tXW09qDn7NhBOHaBrTkO1_7uBxgX7tvUdAubCbDgQHk-6vhC8dylpwLFcev8eXirsAapmQCHV_x2k5MWW5b9gdBKsHg_W0cFLDcrkQNCFdciwpsQ?key=Gw6MD4YvEh-ncwprcF5wCg)

### **RSS Items Block**

The RSS Items block accepts the following Custom Values and will dynamically insert their corresponding RSS Tags:

RSS Tags   

Custom Values  

Description  

<title/>  

{{rss\_item.title}}  

The title of the RSS item is usually a blog post.  
title  
   

<description/>  

{{rss\_item.content}}  

A summary of the RSS item in HTML format, which includes information inside the <description> tag. If there is no <description> tag in your feed, it will display the information in the <content:encoded> tag  

<link/>  

{{rss\_item.url}}  

The text link to the RSS item online, which can be displayed as text or used in a hyperlink.  
content:encoded  

<content:encoded/>  

{{rss\_item.content\_full}  

The full content of the information inside the <content:encoded> tag for an RSS item, in HTML format. If there is no <content:encoded> tag, it will display the information in the <description> tag.  

pubDate  

{{rss\_item.date}}  

The date the RSS item was published, in the format \`MMM DD, YYYY hh:mm A\`. We will provide support for custom formatting in the future.  

<dc:creator>  

{{rss\_item.author}}  

The author of the RSS item  
media:content  

<media:content>  

{{rss\_item.imageUrl }}  

This will provide the src URL of the image as text to render it as an image, use {{rss\_img}}  
   
   
{{rss\_img alt="alt\_text" src=rss\_item.imageUrl height="200" width="200"}}  

<item>  

{{#rss\_items rss\_items}}  

This tag doesn't display anything. It's used to open the customized formatting for individual RSS items.  

</item>  

{{/rss\_items}}  

This tag doesn't display anything. It's used to close the customized formatting for individual RSS items.  

## **Basic Vs Custom in RSS Items** 

When using the RSS Items block, you'll see two options in the "RSS Editing Options" dropdown selector: Basic and Custom.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXec4eTtDSQDgwH5ya8yaLByqHZEj0Ru_I5XgI3JOXRIF9b87CeZ2ofKg0iHNibk1NUEbX709ZI6KR_nQWtrBLo-kSBB6X-KJNN7TlZ4Fyo6d-VROOt6IDEFS-teuUBN1CAwA0dhuw-pOJcRPguSzQ_ffbCd?key=Gw6MD4YvEh-ncwprcF5wCg)

**Basic:** adds the following non-editable formatted text in Text Editor

-   {{#rss\_items rss\_items}}      <h2 class="mc-toc-title"><a href="{{rss\_item.url}}" target="\_blank">   {{rss\_item.title}}      </a> </h2>      {{rss\_item.content}}      <br />      <a href="{{rss\_item.url}}" target="\_blank">Read on »</a><br />      <br />     {{/rss\_items}}

**Custom:** adds the following formatted text and the Text editor will become editable

-    {{#rss\_items rss\_items}}    <h2 class="mc-toc-title"><a href="{{rss\_item.url}}" target="\_blank">{{rss\_item.title}}</a></h2>    <em>By {{rss\_item.author}} on {{rss\_item.date}}</em><br />    {{rss\_item.content\_full}}<br />    <a href="{{rss\_item.url}}" target="\_blank">Read in browser »</a><br />    <br />    {{/rss\_items}}<br />    <br />    <br />    <h3 class="h3">Recent Articles:</h3>   {{#rss\_items rss\_items}}

## **HTML-Based RSS Feed**

The values returned by the RSS-based custom variable {{rss\_item.title}} are HTML-escaped. For example, if the expression contains &, then the returned HTML-escaped output is generated as & or if your RSS Feed has HTML-based text instead of plain text then it will be rendered as plain text.

If you don't want it to escape a value, use the "triple-slash", {{{:

Eg: if your RSS feed source is something like this

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeiUydPZM1ni2ixMxFpV7AbQBj1fn5bPI2To9uYd-ozVw6ihsyEYVgYbW177z5F0aG1hXzfbjQ-sLIR_pvxNqPpMAbOrxZc15KyAj6VGPLfJpaQrUdBmU0oJ6-u7jP5Fa_bdvKg8gwm8YsPSkKWd9mJt88?key=Gw6MD4YvEh-ncwprcF5wCg)

-   Without "triple-slash" it will render like this

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcRs6fNtUgfDi9Z3ClDvCxL7dCG8neOzKfoijlkIG9xRwk0W6sz5N-ozzrAmQI6duRbDJZDhIujlGEveRRLRaVNQv1h2OXQgX0grxgFuTVlbkyc5TY71_KMG6rSZ9RAnUF5QK1aRkYe7W4_5WZHwncLdYA?key=Gw6MD4YvEh-ncwprcF5wCg)

once you will use "triple-slash" {{{rss\_item.content}}} it will render like this

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcGGxnBcgUlHYXIzpU4dFEPizWUIvoLLCb_-Tg7O9_Cv8vtFEBMW-zKPbzYEEdywIvHZMOqIXRMOkjXoiJCy9SWBeoSn8fzr31LmQoMwPV5qegc7ooFWpeNu7jhPkjx5WEjTEubdNIqO1fVPb_RgbGTPv4x?key=Gw6MD4YvEh-ncwprcF5wCg)

### **Scheduling:**

To schedule RSS Feed based emails:

-   navigate to the "Send or Schedule" tab
-   select the "RSS Email Campaign" sending option
-   give your campaign a name in the "Campaign Name" field
-   paste your RSS feed URL in the "RSS Feed URL" field
-   Specify the maximum limit on the number of feed items to be processed per campaign.
-   _This feature allows you to control the amount of content included, ensuring a more concise and targeted email for your recipients._

![](https://assets2.modalsupport.net/1771945376867-image9.png)

### **Scheduling Flexibility and Efficiency**

RSS campaigns offer greater scheduling flexibility, real-time adjustments, and improved usability to better serve your email marketing needs. Users can schedule campaigns for the last day of the month, automatically adapting to varying month lengths. Additionally, dynamic helper guides simplify setup by providing contextual information, and same-day scheduling enables instant campaign execution when needed.

**How to Use:** 

-   Navigate to the RSS campaign settings. 
-   Choose your desired execution day (including the last day of the month or same-day scheduling), and let the dynamic helper guide streamline the process. 

![](https://assets2.modalsupport.net/1771945405768-image13.png)

**Note:** Execution days must be selected for proper scheduling.

### **Sending Options:**

-   **"When we should send":** Here you can determine whether RSS Emails should go out Daily, Weekly, or Monthly as well as at what time the emails should go out.
-   **Send on:** Here you can choose the Day(s) of the week on which you want to send the campaign

Once all input fields are filled along with the recipient, in Review and Send side panel You will see the following new information

-   Email type
-   RSS Feed URL
-   Repeat After

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdA5zJkQ8KzcWSOwhE0JAg9afMseEmI4DsNbMCME_jZ66JJpHmLOmbxRt7GUxvfWCzWF8v8Q3o6GNasMVjA9q3_WzX2expR7zbQDEtFeJbkAdANjJRyuh1xUYyXx2VgKyj8hVnP5c5TOlRa_ZyrT9gkytme?key=Gw6MD4YvEh-ncwprcF5wCg)

### **Testing RSS Emails**

When using the "Send Test Email" functionality with an email that has RSS Elements, you will see a new "RSS Feed URL" field where you'll need to provide the RSS Feed URL from where you want to pull the content. Without this, all RSS tag-based custom variables will be replaced by empty text.

![](https://assets2.modalsupport.net/1771945436931-image2.png)

**NOTE:** If you try to Schedule RSS Element-based email template through normal scheduling options (send now, schedule for later, send in drip mode), all RSS tags-based custom variables will be replaced by empty text.

## **View and Edit RSS Campaign:**

You can see your scheduled RSS Campaigns in the Scheduled Tab, where you'll see the type listed as RSS. For other scheduled emails (send now, schedule for later, send in drip mode), the type will be Normal.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeajBiGllHjw7sbJItD7oPF2KhWhVlltJv12pzFwryDiBiKDIx3RBcD1Tr9nldrjyqES4OKLF3rQ86WMO-_GUFPuWyjskQ2HUU060ZQ9WPSsp6e_UfRSeYrk1tnJi67JyPBrrKGp-o-_yMknMdnrI7bdsLA?key=Gw6MD4YvEh-ncwprcF5wCg)

The example above is an RSS email set to send Daily and we can see the Next Execution time will be at 2 pm. Once the 2 pm email has been sent, it will be marked as complete and a new scheduling/execution will be scheduled with the same configuration (RSS Feed URL, send Daily) with the following day's date.

### **Actions:**

With RSS-type scheduling, you can perform the following actions:

Edit: If you click the pencil icon to edit, you will see a confirmation modal asking you to confirm that you would like to cancel the currently scheduled email and re-schedule a new one.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdVvLanM35PI5J1_tSQsdeCdWf1WoRSKtOZq2fj9JiOB4O2GGlSpttrQ5zRMVjYWOpCQodlG_F54Q1Cf4GS0es9gTS7otYSTf2oHcRgRnrWCEGQgxxC-KNQ7i449EV6rW2TQAHjzX5V4gZmjLWZ1tiGnA8l?key=Gw6MD4YvEh-ncwprcF5wCg)

-   Once you click Confirm, it will cancel the current scheduling and open up an Email Builder with RSS Scheduling options pre-filled with the current canceled scheduling information
-   **Pause/Resume:** You can also pause and resume the execution through the Pause/Resume actions
-   **Delete:** You can also delete the RSS scheduling. Deleting will first cancel the scheduling then delete it permanently from the system

## FAQ’s




**Question:** How can I use the RSS Elements in the Email Builder?
**Answer:** The RSS Elements in the Email Builder allow you to automatically send emails containing dynamically inserted content from an RSS feed when a new item is published. You can use RSS Header and RSS Items blocks to populate your emails with data from your RSS feed, such as titles, descriptions, linksa, dates, authors, and more.




**Question:** What is the difference between Basic and Custom options in RSS Elements?
**Answer:** In the RSS Header and RSS Items blocks, the Basic option adds non-editable text to the email, using predefined RSS tags, while the Custom option allows you to edit the text in the email builder, offering greater flexibility to customize how the RSS content is displayed in your emails.




**Question:** How do I schedule an RSS email campaign?
**Answer:** To schedule an RSS email campaign, go to the "Send or Schedule" tab in the Email Builder, select the "RSS Email Campaign" option, enter your campaign details, including the RSS Feed URL, and choose the frequency (Daily, Weekly, or Monthly) and the timing for the emails. Ensure all necessary fields are filled in, including recipients.




**Question:** Why do my RSS-based custom variables show empty text in test emails or regular scheduling?
**Answer:** If you try to send a test email or schedule an RSS-based email through normal scheduling options (send now, schedule for later, send in drip mode), the RSS tag-based custom variables will be replaced by empty text because these options do not support dynamic RSS content. Use the "RSS Email Campaign" option instead.




**Question:** What actions can I perform on scheduled RSS campaigns?
**Answer:** You can view your scheduled RSS campaigns in the Scheduled Tab. For RSS campaigns, you can edit the scheduling, pause/resume the execution, or delete the scheduling. Editing will cancel the current schedule and allow you to reconfigure it; pausing/resuming lets you manage the timing, and deleting will permanently remove the schedule.




**Question:** What time zone does RSS scheduling use?
**Answer:** RSS campaigns run based on your account’s selected time zone settings. Check your account or company settings for accuracy.




**Question:** How do I view and manage my scheduled RSS campaigns?
**Answer:** Scheduled RSS campaigns are listed in the **Scheduled Tab**. Here, the type will show as **RSS**, and you can view execution times, edit, pause/resume, or delete campaigns as needed.




**Question:** Can I include more than one RSS feed in a single email?

**Answer:** No. Each RSS Email Campaign is tied to a single RSS Feed URL defined in the "Send or Schedule" tab. The variables in the builder will only pull data from that specific source.