---
title: "How to Add A Facebook Pixel to a Funnel"
description: "How to Add A Facebook Pixel to a Funnel"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/bqQvUubWOvpBw3oRNP4q"
sourceId: "bqQvUubWOvpBw3oRNP4q"
category: "Funnels and Websites"
---

**How to Add A Facebook Pixel to a Funnel**

If you are using a Facebook Pixel to track events for your ads, you will want to add the Pixel code to your funnel and funnel steps. Seamlessly send tracking events data to Facebook using the Facebook Pixel and Conversion API. This will provide enhanced tracking capabilities to optimize your marketing efforts and improve your business insights.

Key Features

-   **Facebook Pixel Integration:** Easily send event data to Facebook by submitting your Pixel ID.
-   **Conversion API Support:** Choose to send event data via Facebook Conversion API by entering an access token.
-   **Flexible Tracking Options:** Choose whether you want Funnel-level tracking or Page-specific tracking. The former monitors events across the entire customer journey, while the latter tracks events on specific pages.
-   **Event Types:** Decide whether to track events on page views or upcoming triggers such as one-step or two-step order form submission.
-   **Multiple Pixels:** Manage multiple Pixel IDs for comprehensive tracking across different segments.
-   **Summary Table:** View and manage all your tracking configurations in a user-friendly summary table.

## What you will need:

-   Facebook Pixel Code
-   Events you want to track

### How to Use?

1.  Login into your account, go to Sites on the left and choose any funnel by clicking on the Funnels tab.
2.  Open the funnel/website you want to send track events on. Go to the Events tab in the funnel/website overview screen. 

![](<https://assets2.modalsupport.net/1763753767147-Captura de pantalla 2025-11-21 143601.png>)

3\. Click 'Add event' and enter your Pixel ID, you can find the instructions to find and add.

![](<https://assets2.modalsupport.net/1763753810994-Captura de pantalla 2025-11-21 143643.png>)

4\. Choose Tracking Level: whether you want to track events at the funnel level or on specific pages.

5\. Enable Conversion API: If you wish to send data using the Conversion API, select this option and enter your access token.

6\. Add and configure multiple Pixel IDs as needed and view them in the summary table for easy management.

![](<https://assets2.modalsupport.net/1763753852705-Captura de pantalla 2025-11-21 143726.png>)

Benefits:

This feature will give you more control and flexibility over event tracking. By integrating with Facebook Pixel and Conversion API, you can:

-   Gain deeper insights into user behavior and conversion metrics.
-   Optimize your advertising strategies with accurate event data.
-   Improve the efficiency of your marketing campaigns by targeting users based on detailed event tracking.

### Step 2: Add Event Specific Code to Individual Pages

-   Choose the Step where the event in question is occurring (e.g. Lead would occur after an Opt-In)
-   Edit the Step.
-   Click on the Tracking Code option on the top left.
-   Click the Footer Code and paste in the Event Code.

![](<https://assets2.modalsupport.net/1763753881925-Captura de pantalla 2025-11-21 143755.png>)

-   Save your Changes.

## RESOURCES:

### Facebook Pixel Code (insert your ID in the IDHERE part of the code):

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

[**_https://developers.facebook.com/docs/facebook-pixel/reference#standard-events_**](https://developers.facebook.com/docs/facebook-pixel/reference#standard-events)

### Use Cases for Facebook Pixel Integration

1.  **Lead Generation Campaigns**Use Facebook Pixel to track when a user submits a lead form on your funnel page. By tracking this event, you can optimize your ads to target users who are more likely to convert into leads and retarget those who started the process but didn't complete the form.
2.  **E-commerce Sales Funnel**In an e-commerce funnel, you can track events such as "Add to Cart" or "Purchase" to measure the effectiveness of your sales funnel. By connecting these events with your Facebook ads, you can monitor how well your ads are driving sales and make adjustments to your ad strategy based on real-time data.
3.  **Upsell/Downsell Tracking**After a customer makes an initial purchase, you can use Facebook Pixel to track actions taken on upsell or down-sell pages. This allows you to monitor the success of your upsell strategies and improve the customer journey by targeting users who did not engage with these offers.

### FAQs:




**Question:** What is the Facebook Pixel?
**Answer:** The Facebook Pixel is a piece of code that you can place on your website or funnel to track visitors' actions. This enables you to measure the effectiveness of your ads by understanding how users interact with your website and track conversions.




**Question:** Do I need a Facebook business account to use the Pixel?
**Answer:** Yes, you need to have a Facebook business account to access the Pixel ID and configure the event tracking. You also need to ensure that the Pixel is set up correctly on Facebook Business Manager.




**Question:** Can I track multiple events on a single funnel page?
**Answer:** Yes, you can track multiple events on the same funnel or website page. For example, you can track "Lead" events when a form is submitted and "Purchase" events when a transaction is completed, all from the same page.




**Question:** How do I use the Facebook Conversion API with the Pixel?
**Answer:** To use the Facebook Conversion API, you must enter your access token in the tracking settings. This allows you to send event data from your server directly to Facebook, bypassing issues with browser ad blockers and improving data accuracy.




**Question:** What should I do if the Pixel or Conversion API is not tracking correctly?
**Answer:** Check that the Pixel ID and access token are entered correctly, ensure the code is placed in the correct funnel step, and verify that there are no conflicts with other scripts. Use testing tools to confirm data is being received.




**Question:** Why am I seeing duplicate events on Facebook?

**Answer:** This can happen if you have manually pasted the base code into the header AND used the built-in Pixel Integration tool. Ensure you are only using one method to avoid over-reporting your data.




**Question:** What is the difference between Funnel-level and Page-specific tracking?

**Answer:** Funnel-level tracking** monitors events across the entire customer journey within that specific funnel. **Page-specific tracking** allows you to isolate and track events only on certain pages, which is useful if you want to trigger unique pixels for specific products or landing pages.