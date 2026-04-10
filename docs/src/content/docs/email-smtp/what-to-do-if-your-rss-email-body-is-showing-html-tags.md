---
title: "What To Do If Your RSS Email Body Is Showing HTML Tags"
description: "What To Do If Your RSS Email Body Is Showing HTML Tags"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/GPX0yJvVJT5pLXk4kQnu"
sourceId: "GPX0yJvVJT5pLXk4kQnu"
category: "Email & SMTP"
---

**What To Do If Your RSS Email Body Is Showing HTML Tags**

Within the Email Builder, you may be using the RSS Header or RSS Item elements. These are files that are read easily by a computer (XML files) that automatically update information across sites. They are useful for blogs and other sites if you want to pull information from a site into an email.

Sometimes there can be an error with the RSS information showing as HTML, like this: **<p> <div>  <img src = “ ![](http://www.thedemoaccount.com.jpg) ”** … when you want to show the article title, headline, image, etc. What this means is something has “escaped”. This is called “HTML-escaped”. For example, maybe you had the **&** symbol included in the original RSS feed, yet the output is **&** This means the feed has converted to plain text.

To prevent or resolve the HTML-escaped issue, you can use the “triple bracket” to surround the title or feed, meaning {{{ instead of {{ on each side. Follow these quick steps below to learn how to resolve this issue:

## **Navigation**

-   Within the email builder,(you can navigate to Email Builder by going to Marketing > Email > Campaigns or Template) click on your RSS header or item element.
-   Once it’s highlighted with the box around the element, use the menu on the left-hand side to customize the RSS Editing Options.
-   From the dropdown, choose “custom”.
-   Edit the {{ to {{{
-   Save to confirm your changes.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeKCTkM2GkdNIRhuGVa7OrEmiq-FUDCDFSvxA5-Wxmggguib1bbuOUisQHCI_oua-PKcXS1_t1HoBNOP40czfPp4HMHnp7vHXg2Dh2AY5EMGq00HGLmTagbjB3TPBMoJRMjsZsiO067V5Cu0A78cy6QEcG4?key=d12cXt5fCGhlxEGNMf0M_A)

## FAQs




**Question:** What is the purpose of using RSS Header or RSS Item elements in the Email Builder?
**Answer:** RSS Header and RSS Item elements allow you to pull dynamic content from an RSS feed, such as blog articles or updates, directly into your emails. This feature helps keep your emails updated automatically with the latest content from your chosen sites.




**Question:** Why does the RSS content sometimes show as HTML in my emails?
**Answer:** RSS content can be displayed as HTML when it includes special characters like the & symbol, which gets HTML-escaped to &. This happens because the RSS feed content is being treated as plain text rather than formatted HTML, causing the tags and symbols to display incorrectly.




**Question:** How can I fix the HTML-escaped issue in RSS elements?
**Answer:** To fix the HTML-escaped issue, you can use triple brackets {{{ instead of double brackets {{ around the RSS variable. This change tells the system to interpret the content as HTML rather than plain text, displaying it correctly with the intended formatting.




**Question:** How do I customize RSS elements to prevent HTML-escaping?
**Answer:** Within the Email Builder, select your RSS header or item element to highlight it. In the menu on the left-hand side, go to the RSS Editing Options dropdown and choose "custom." Then, replace {{ with {{{ around the relevant RSS variables and save your changes.




**Question:** What should I do if the RSS feed content is still displaying incorrectly after using triple brackets?
**Answer:** If the content still displays incorrectly, ensure that all relevant RSS variables are surrounded by triple brackets and that no HTML tags are missing. Double-check the original RSS feed for any issues that might be causing formatting problems, and verify that the feed source is correctly formatted and up-to-date.




**Question:** Can RSS automatically refresh content after it’s added to an email?

**Answer:** Yes. One of the main benefits of RSS is automatic updates when emails are opened or regenerated, if the feed continues to update at the source.  


**Question:Where can I find the RSS Editing Options to fix formatting issues?
**Answer:** The RSS Editing Options are located in the menu on the left-hand side of the Email Builder once you have clicked on and highlighted the specific RSS header or item element.




**Question:** Can I limit the number of characters displayed in the RSS Item when using the custom setting?

**Answer:** The triple bracket pulls the content exactly as it is. To limit characters, you would typically need to adjust the "Summary" settings at your RSS source (like your WordPress or blog settings) to ensure it only sends a snippet rather than the full article.




**Question:** Will using triple brackets make my email load slower?
**Answer:** No. Triple brackets simply change how the data is interpreted by the email client. The loading speed depends entirely on the size of the images and the amount of content being pulled from your RSS source.