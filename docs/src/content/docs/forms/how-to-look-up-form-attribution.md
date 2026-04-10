---
title: "How to Look Up Form Attribution"
description: "Attribution provides a detailed analysis of the channels or sources from which contacts originate. This information helps identify growth opportunities and…"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/YJ9eEX9zLzIj2pHog4ls"
sourceId: "YJ9eEX9zLzIj2pHog4ls"
category: "Forms"
---

Attribution provides a detailed analysis of the channels or sources from which contacts originate. This information helps identify growth opportunities and the most effective channels. For example, when running Facebook and Google Ads, attribution helps determine which platform is more effective at generating leads. This insight allows for better strategic decisions and optimization of marketing efforts.

Form attribution can be found under form submissions, giving you detailed insight into the lead source for your different forms. To analyze the data on your form submissions, we'll show you how to access your form submission information.

### Step 1: Navigate to the Sites > Forms Tab

Go to Sites on the left > Forms at the top. Here you’ll see 3 different options within the dropdown: Builder, Analyze, and Submissions.

![](<https://assets2.modalsupport.net/1768389077845-unnamed \(35\).jpg>)

-   **Builder**: This is where you can create and edit forms. (Check out our tutorial on how to use the builder to create new forms and edit existing forms.)
-   **Analyze**: Here, you can see Total Submissions, and the selected date range is shown in the dropdown in the top right. Scroll down to Forms. You will see a list of your forms and the number of submissions for each.

![](<https://assets2.modalsupport.net/1768389094074-unnamed - 2026-01-14T191127.950.png>)

![](<https://assets2.modalsupport.net/1768389102964-unnamed - 2026-01-14T191135.426.png>)

-   **Submissions**: You can filter a specific form and search through submissions by name, phone number, and more. Here you can view submissions and review the URL, source, campaigns, and keywords associated with a particular submission.

![](<https://assets2.modalsupport.net/1768389123266-unnamed - 2026-01-14T191157.640.png>)

The form submissions tab will show you all the submissions by your leads. This is where you can analyze their attribution data as well. Each lead/contact has a first and latest attribution attached to it.

### What is "First" or "Latest" Attribution?

When attributing a contact to a specific source, it's common to consider both first and latest attribution. These are recorded for every contact.  

First Attribution: This marks the initial interaction a contact has with your system, recording the attribution data for that session. For example, when someone fills out a "Contact Us" form.  

Latest Attribution: This is the most recent interaction, capturing the latest session's attribution data. For example, if someone purchases via a two-step order form after filling out a "Contact Us" form. The latest attribution will change with each new interaction, while the first attribution remains constant.  

Now that we understand what the first and latest attribution is, we need to know where this data is stored.

#### Attribution in Form Submission  

Each form submission has attribution added to it. On each submission, you’ll be able to see the attribution details including various data like source, referrer, URL, UTM parameter data, etc.

#### Attribution in Contact Details  

Whether it is the first or latest attribution data, you can locate this information in the bottom right of all contact records.

-   Go to Contacts
-   Select a contact record
-   Locate the attribution data in the bottom right column under the Activity tab.

![](<https://assets2.modalsupport.net/1768389155585-unnamed \(36\).jpg>)

![](<https://assets2.modalsupport.net/1768389168984-unnamed \(37\).jpg>)

### Different Attribution Sources and How They Are Determined

Attribution sources identify where a contact originated. Here are the common sources and how they are determined:

-   **Paid Search**: Originates from paid search campaigns, like Google Ads. Determined by UTM parameters (utm\_source=adwords) or the presence of gclid or msclkid.
-   **Paid Social**: Comes from social media ad campaigns. Identified by UTM parameters (utm\_source=fb\_ad, linkedin\_ad, twitter\_ad).
-   **Direct Traffic**: Users who directly type the URL into their browser or clear query parameters.
-   **Organic Search**: Non-paid search results from engines like Google or Bing.
-   **Social Media**: Traffic from social media platforms, excluding paid ads.
-   **Referrals**: Traffic from external websites linking to yours, excluding social media or search engines.
-   **Others**: Leads from sources like incoming calls, SMS, emails, WhatsApp, or Facebook messages.
-   **UI**: Leads manually created within .
-   **Third-Party**: Leads generated through third-party tools like Zapier.

### How is Attribution Source Determined?

### Attribution sources are determined by examining the full page URL and the referring domain against a set of predefined rules:

1.  UTM Parameters: Parameters like utm\_source, utm\_medium, and utm\_campaign in URLs help categorize traffic.
2.  Referring Domain: The domain from which the traffic originated helps identify sources like search engines or social media.
3.  Cookies and Tracking URLs: These elements store and track user interactions over time, aiding in accurate attribution.

### Events Recording Attribution

### Attribution data is recorded when a contact performs one or more of the following actions within the same session:

-   Form/Survey Submission
-   Calendar Booking Submission
-   Chat Widget interaction (after submitting contact info)
-   Order Form Submission (one or two-step)

For detailed attribution tracking, ensure these actions occur on forms, surveys, calendars, chat widgets, and order forms within .

### FAQs




**Question:** Where can I view the attribution data for a contact?
**Answer:** Attribution data is located in the bottom right column under the Activity tab in the contact details. Navigate to Contacts > Select a Contact Record to view both first and latest attribution details.




**Question:** What is the difference between first and latest attribution?
**Answer:** First attribution marks the contact's initial interaction with your system (e.g., filling out a "Contact Us" form), while latest attribution captures their most recent interaction (e.g., completing a purchase). First attribution remains constant, whereas latest attribution updates with each new interaction.




**Question:** How are attribution sources determined?
**Answer:** Attribution sources are identified using a combination of UTM parameters (e.g., utm\_source, utm\_medium), referring domains, cookies, and tracking URLs. These elements categorize traffic into sources like paid search, social media, direct traffic, and more.




**Question:** What actions record attribution data?
**Answer:** Attribution is recorded during key actions such as form/survey submissions, calendar bookings, chat widget interactions (after submitting contact information), and order form submissions.




**Question:** Can I analyze attribution data for form submissions?
**Answer:** Yes, attribution data for form submissions can be viewed under Sites > Forms > Submissions. Here, you can filter by form, search submissions, and analyze details like source, referrer, URL, and UTM parameters.




**Question:** Can I export attribution data to a CSV?
**Answer:** Yes. When you export your contacts from the **Contacts** tab, you can include the attribution columns. This allows you to perform deep-dive analysis in tools like Excel or Google Sheets to calculate your Cost Per Lead (CPL) per channel.




**Question:** What does the source category " UI" represent in my attribution data?
**Answer:** This source indicates that the lead was manually created by a user within the platform interface itself, rather than being generated through an automated channel like a website form, a paid ad, or a third-party integration.