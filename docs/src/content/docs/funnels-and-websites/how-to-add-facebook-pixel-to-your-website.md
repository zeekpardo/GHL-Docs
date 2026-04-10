---
title: "How to Add Facebook Pixel to Your Website"
description: "If you are using a Facebook Pixel to track events for your ads, you will want to add the Pixel code to your website and website pages. Seamlessly send…"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/QX2Mhn9HekUNgXLAihtR"
sourceId: "QX2Mhn9HekUNgXLAihtR"
category: "Funnels and Websites"
---

If you are using a Facebook Pixel to track events for your ads, you will want to add the Pixel code to your website and website pages. Seamlessly send tracking events data to Facebook using the Facebook Pixel and Conversion API. This will provide enhanced tracking capabilities to optimize your marketing efforts and improve your business insights.

## Key Features

-   **Facebook Pixel Integration:** Easily send event data to Facebook by submitting your Pixel ID.
-   **Conversion API Support:** Choose to send event data via Facebook Conversion API by entering an access token.
-   **Flexible Tracking Options:** Choose whether you want Funnel-level tracking or Page-specific tracking. The former monitors events across the entire customer journey, while the latter tracks events on specific pages.
-   **Event Types:** Decide whether to track events on page views or on upcoming triggers such as one-step or two-step order form submission.
-   **Multiple Pixels:** Manage multiple Pixel IDs for comprehensive tracking across different segments.
-   **Summary Table:** View and manage all your tracking configurations in a user-friendly summary table.

## What you will need:

-   Facebook Pixel Code
-   Events you want to track

## How to Use?

### Step 1: Navigation

1- Login into your account, go to Sites, and choose any website by clicking on the Website tab.

![](<https://assets2.modalsupport.net/1763069023279-fb pixel.jpg>)


2- Open the funnel/website you want to send track events on. Go to the Events tab in the funnel/website overview screen.  

![](<https://assets2.modalsupport.net/1763069050845-fb pixel 2.jpg>)


3- Click 'Add event' and enter your Pixel ID, you can find the instructions to find and add.  

![](<https://assets2.modalsupport.net/1763069096286-fb pixel 3.jpg>)

-   Choose Tracking Level: whether you want to track events at the funnel/website level or on specific pages.
-   Enable Conversion API: If you wish to send data using the Conversion API, select this option and enter your access token.
-   Add and configure multiple Pixel IDs as needed and view them in the summary table for easy management.

![](<https://assets2.modalsupport.net/1763069196601-fb pixel 4.jpg>)

### Benefits:

This feature will give you more control and flexibility over event tracking. By integrating with Facebook Pixel and Conversion API, you can:

-   Gain deeper insights into user behavior and conversion metrics.
-   Optimize your advertising strategies with accurate event data.
-   Improve the efficiency of your marketing campaigns by targeting users based on detailed event tracking.

###   
Step 2: Add Event Specific Code to Individual Pages

-   Choose the Step where the event in question is occurring (e.g. Lead would occur after an Opt-In)
-   Edit the Step.
-   Click on the Tracking Code option on the top left.
-   Click the Footer Code and paste in the Event Code.

![](<https://assets2.modalsupport.net/1763069242126-fb pixel 5.jpg>)

-   Save your Changes.

## RESOURCES

### Facebook Pixel Code (Insert your ID in the IDHERE part of the code):

<!-- Facebook Pixel Code -->

<script>

!function(f,b,e,v,n,t,s)

{if(f.fbq)return;n=f.fbq=function(){n.callMethod?

n.callMethod.apply(n,arguments):n.queue.push(arguments)};

if(!f.\_fbq)f.\_fbq=n;n.push=n;n.loaded=!0;n.version='2.0';

n.queue=\[\];t=b.createElement(e);t.async=!0;

t.src=v;s=b.getElementsByTagName(e)\[0\];

s.parentNode.insertBefore(t,s)}(window, document,'script',

'https://connect.facebook.net/en\_US/fbevents.js');

fbq('init', ‘IDHERE’);

fbq('track', 'PageView');

</script>

<noscript><img height="1" width="1" style="display:none"

src="https://www.facebook.com/tr?id=IDHERE’&ev=PageView&noscript=1"

/></noscript>

<!-- End Facebook Pixel Code -->

### Facebook Event Code: 

<script>

fbq('track', 'EVENTHERE');

</script>

### List of Facebook Standard Events: 

[https://developers.facebook.com/docs/facebook-pixel/reference#standard-events](https://developers.facebook.com/docs/facebook-pixel/reference#standard-events)

## FAQ’s




**Question:** What is the Facebook Pixel, and why is it important?

**Answer:** The Facebook Pixel is a piece of code that you add to your website to track visitor behavior, such as page views, clicks, or conversions. It allows you to gather data that can help you optimize your Facebook ads, measure performance, and create retargeting campaigns based on user behavior.




**Question:** How do I add the Facebook Pixel code to my website?

**Answer:** To add the Facebook Pixel code:

-   Go to your website builder and select the funnel or page where you want to track events.
-   In the funnel or page overview, go to the "Events" tab, click “Add event,” and enter your Pixel ID.
-   You can choose to track events at the funnel/website level or on specific pages.
-   For individual page tracking, add the event-specific code in the tracking code section of that page (usually in the footer).


**Question:  What is the Facebook Conversion API, and how does it work?

**Answer:** The Facebook Conversion API allows you to send events directly from your server to Facebook, providing a more reliable way to track events that may not be captured by the browser Pixel (e.g., due to ad blockers). You can enable this by selecting the Conversion API option and entering your access token.




**Question:** Can I track events at both the funnel level and specific page level?

**Answer:** Yes, you can. Funnel-level tracking monitors events across the entire customer journey, while page-specific tracking focuses on particular actions taken on individual pages. You can configure both depending on your needs.




**Question:** How do I track multiple events or use multiple Pixel IDs?

**Answer:** You can manage multiple Pixel IDs by adding them in the “Events” section. Each ID can be configured separately, and you can view and manage them all in a summary table for easy access.




**Question:** What events can I track using the Facebook Pixel?

**Answer:** You can track standard events like page views, leads, purchases, and custom events. The standard events include actions like ‘Add to Cart,’ ‘Initiate Checkout,’ and more. You can find a full list of Facebook’s standard events [here](https://developers.facebook.com/docs/facebook-pixel/reference#standard-events).




**Question:** What’s the difference between using the Facebook Pixel and the Conversion API?

**Answer:** The Facebook Pixel tracks events using the browser, which can be affected by ad blockers or other restrictions. The Conversion API sends data directly from your server, ensuring more accurate tracking. Combining both provides the most comprehensive tracking setup.




**Question:** How do I verify that my Pixel and events are working correctly?

**Answer:** Use the Facebook **Pixel Helper** browser extension or check your Facebook Events Manager to ensure events are firing correctly. Test events on different pages and steps to confirm proper tracking.




**Question:** Where do I find my Facebook Pixel ID and Access Token?
**Answer:** Both can be found in your **Facebook Events Manager**. Navigate to "Data Sources," select your Pixel, and go to the "Settings" tab. Your Pixel ID is listed at the top. For the Conversion API, scroll down to the "Conversions API" section and click "Generate access token."




**Question:** What specific information do I need to replace in the Facebook Pixel base code?

**Answer:** In the provided resource code, you must locate the text **"IDHERE"** (found in both the script and the noscript sections) and replace it with your actual **Facebook Pixel ID** from your Events Manager.