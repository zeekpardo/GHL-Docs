---
title: "Facebook Conversion API Integration for Lead Events"
description: "Facebook Conversion API Integration for Lead Events"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/IwUjoSqMLMQNMxmMCLh8"
sourceId: "IwUjoSqMLMQNMxmMCLh8"
category: "Integrations"
---

**Facebook Conversion API Integration for Lead Events**

This article will teach you more about the Facebook Conversion API integration and how it helps your Facebook lead ads.

The instant forms will help you optimize the quality of the leads instead of the volume. 

When the user submits an Instant Form, the information is captured and synced in . You can use this information to follow up with leads and move them to different funnel stages. As the moves happen, the Conversion leads integration allows the advertiser to share the lead status with Meta, which will enable Meta to optimize the lead ad for increased lead-to-sales Conversion. 

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXf6ItOs4GalgmfwhbTrt-fbDCWrv5MrYC0DLJ_a5qH7ACWHejkSd5_w_dgoQDYDQN_A0y60VBnNTAkBUf96PanSciUlGcifTRcUKgc1gMS436Vck_3peGMR2XzLQUYDJMBRCS1pjMfJJPelzIrdKMAP59nt?key=A_x8AM-cqLxNp5K5ZOAS8g)

**Things to note:** 

There are 2 options available for the Facebook Conversion API Trigger: Funnels and Lead Events. 

![](https://assets2.modalsupport.net/1775246448850-image16.png)

#### **Funnel Events**

Funnel Events are server-side events triggered when a user interacts with your website. These include actions such as:

-   Page visits
-   Adding items to a cart
-   Making a purchase
-   Submitting a form or application
-   Subscribing to a service

These events are sent directly from the web server to Facebook to track key user behaviors.

#### **Lead Events**

Lead Events are triggered based on how a contact progresses through stages in your pipeline. For example, if a business has a pipeline labeled **"Lead Generation"**, leads moving from statuses such as _New_, _Booked_, or _Abandoned_ will trigger events. These actions are captured within and sent to Facebook CAPI, with the **acting as the primary data source**.

## **Setting Up FB Conversions API for Lead Events:**

### **Step 1: Initialize an FB Pixel:**

**1-** Begin by accessing your [**_Facebook Business Manager_**](https://business.facebook.com/business/loginpage/?login_options[0]=FB&login_options[1]=IG&login_options[2]=SSO&config_ref=biz_login_tool_flavor_mbs&create_business_portfolio_for_bm=1) (now known as Meta Business Suite). Navigate to the Events Manager section found on the left side.

**2-** Verify that you are linked to the appropriate Ad Account and have the necessary permissions for the Facebook Page in question.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXd2dpBPWwAvKX6N3e7uPtdsUKf1CWTE7poLle11pbpBrRSwsmWgSAGUKw4cq9LsUvTlByX5sZbS6bmz2Nn7WCHR_UWG3ye0d6UylgOsbC9Bfe4dhViyiHmpjBkJTu4AAbv_F8Ww4us-JfNJwxV4E5G5eSYD?key=A_x8AM-cqLxNp5K5ZOAS8g)

**3-** In the left sidebar, select the option to 'Connect Data Sources. '

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcdGBQItaAvTl4C70NBjRmIxEWTQFly9NEbg1CZs6z1E7ybzc-BUDPAjS4CUqqzT2Owujfcg9SOYePmJ-pInFnTBsgwHjv4l773em2s_MLuDIgB4avoAjfXEZCmGU75pZv8gqo_P1Bgixw8jQyHSo2BmsAD?key=A_x8AM-cqLxNp5K5ZOAS8g)

**4-** When presented with various choices, select '\_\_CRM' and then click on 'Next. '  
![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfivQ5Dr34D_XuVLGahW23-3pEUrGcNM61-acncyX0tIb4rqlkaqdS0VaHw_vqTrWlvqUA2bd92wr9SnLD5_8nyOc8NvATn-RzBW0JGPvNYAdRGb8X96RXoRcVVuLctmwuAvfh5Sg?key=A_x8AM-cqLxNp5K5ZOAS8g)

**5-** Important: If your goal is to transmit a Funnel Event via Facebook CAPI using LeadConnector for funnel activities, opt for the 'web' selection at this point to facilitate event tracking.

**6-** A window will appear displaying 'Best Practices', which are recommendations from Facebook on optimizing this feature. Click 'Next' to continue.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdWqHFZE4SAqsqmI4MOgHdqX-YBZWXdfgDyz-sIG8VivDjKsxSaqJ_L3Bdi5vr6vvfh1uo1PZe7NrZvN0AHJutuLF1b7zir2j51isz77TRZZQVPsVSwupq9mfdtXQdNj9KAm6if?key=A_x8AM-cqLxNp5K5ZOAS8g)

**7-** You'll be given the option to either create a new pixel or use an existing one to gather data. Add your pixel details and proceed by clicking 'Continue. '

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcLuj4j5NTVHZtm6wOcuWHfmnSEv7-LG7sp6IVa3RGdgOrgHkL0SEBsy5K6t7YEIN2MRVqXeYumBqbx7wkj0-7V0OQ3xPvqhHyZuN2ih7r-_s68N1R6jzpC1xvwvGOaz2Sb-BYO3g?key=A_x8AM-cqLxNp5K5ZOAS8g)

**8-** After creating the pixel, choose your and click on 'Next. '  
![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdXdhmyTatUBOrsci7mBTpm9IRNy6PNAotX_BksBxpbbaJvZwksmQDo3G1aJjSB3v47GFOiRSDIEQG77lh8MrcxZIrD_eQFE1xFeWPEkMppgiZYSFrSB6f1blCvs_JXMYXNChz2?key=A_x8AM-cqLxNp5K5ZOAS8g)

**Note:**After clicking **Next**, Facebook may redirect you to log in to the partner website. You can **ignore this step** and proceed directly with setting up your **Conversion API (CAPI) workflow** to send events back to Facebook.

You will then be presented with a screen where your **is pre-selected**.

**Important:** If you're encountering the message **“Wait for seven days ofevents”**, please ensure the following:

-   Data is **sent daily and consistently** to your Facebook Pixel.
-   A **minimum of 50 events** is recorded over the span of 7 days.
-   **Test events are not counted** as valid data.
-   At least **two stages** within your pipeline should be triggering pixel events.

You can now begin sending events by setting up **two workflows**, as outlined in the instructions below.

#### **Prerequisites for Setting Up Facebook CAPI - Lead Events:**

Within , navigate to Settings > Integration. Ensure that your Facebook account is connected with administrative rights. Confirm that your FB Business Page is fully integrated, ensuring you have admin access and that the correct FB lead form is configured within .

For Facebook Form Field Mapping, ensure that the form is properly mapped and activated. The mapping option can be found under the Account settings > integrations > Facebook Form Field Mapping. This section will list all supported custom fields, including those with multiple and single options.

### **Step 2: Implement Two FB Conversion API Workflows**

**Important:** For the process to be effective, it's essential to establish two separate workflows.

The **first workflow** is designed to capture leads and categorize them accurately within the appropriate pipeline, utilizing the Create Opportunity/Update Opportunity  Workflow Actions. This step is crucial for ensuring that each lead is properly identified and placed in the correct Pipeline and Stage, facilitating efficient management and progression through the sales funnel.

The **second workflow** is aimed at activating events specific to Facebook conversion leads. This process is initiated when a lead advances to a certain stage in the pipeline, triggering a Facebook Conversions API workflow action that communicates the update to FB CAPI.

Together, these workflows form a robust system for lead generation and management, specifically tailored for Facebook conversion leads, enhancing the potential for higher lead qualification, customer conversion rates, and business growth.

#### **Creating the Workflows:**

Begin by exiting the FB Events Manager > Data Sources > Settings area (though keep it accessible in another browser tab) and navigate to to start creating the necessary workflows.  

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdYfUDbYbenFNEC9BOAMPl8Z18ev5izcgbDycEjyuWuyXGdO-eGmmSGrF-fHLmZ0AdjJLBSWhnTmUyKW9bzhwBsh_DGLXAbKgpiollMRnQY-jOzVoR4WElDqv_iAzLJPjenNRx7XsSAssM9KI7TOR5o-oIl?key=A_x8AM-cqLxNp5K5ZOAS8g)

#### **Workflow 1:** 

-   With the FB page integration set up in your , proceed to Automation > Workflows and initiate a new Workflow.
-   Establish a Workflow Trigger based on the submission of a Facebook Lead Form, marking the initial phase of your conversion flow.

![](https://assets2.modalsupport.net/1775246500446-image10.png)

-   Apply filters to target specific Facebook Lead Ad forms, triggering the workflow upon their submission.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeHJMPnf_zkkwgv1qP0MylbcDFTmPY-EKpW4kV7KXXmTr8IRHffcyWsGakQ6N8eIttNnLsPp7Df6NFe8jRxTOKlxqGp6GuKzz6oUVvND_s8Kd10VKiqichLatvfISVwWbqFLNwx_Q?key=A_x8AM-cqLxNp5K5ZOAS8g)

-   Next, add a new action titled **“Facebook Conversion API”** to your workflow.  
    Fill in the required fields: **Access Token**, **Pixel ID**, and **Stage Name**.

![](https://assets2.modalsupport.net/1775246550679-image8.png)

**Note: Custom Value Mapping for Facebook Ads**

Similar to Google Ads, supports **custom mapping** for Facebook Ads conversion tracking parameters.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXervDR9puwZnMo2DeMxRuwzTxm3I8onLAtFc6K7tcNiqM-JjoKdqsD_RN6vpQsfneY2uJBt_cZgFOOLt-AUybg8ULjP_MRbCuPPlU-Bu0srYlKks-LSOfQpXNyafhusVYzsSzI8sA?key=A_x8AM-cqLxNp5K5ZOAS8g)

#### **How It Works:**

-   By default, **custom mapping is turned off**.
-   You can **toggle it on** to enable custom value mapping.

Once enabled, you can map the following:

1.  **FBCLID** (Facebook Click ID) for funnel events
2.  **Facebook Lead ID** for lead events
3.  If custom mapping values are entered, they will **override the system defaults**.
4.  If left blank, the system will continue using its **built-in default values**.

**Where to Find Access Token and Pixel ID**

-   **Access Token**:  
    Go to **Facebook Events Manager** > **Data Sources** > **Settings**.  
    Scroll down to find the **“Generate Access Token”** button.  
    Click to generate, then **copy and paste** it into the Access Token field in your workflow.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfbTyrC8qvLSVNMt73WnX7F7Tcy14hUUyHGzZgVSClPpnYM9cQTLlcyFd4ZySCSPT68lS5Qhuwm01zJeyYcRGgAVzpMwwXJ82DIQiBhRXeqhrgeXTQkxAUBUXRnK59Rx2jvWn0eHQ?key=A_x8AM-cqLxNp5K5ZOAS8g)

-   **Pixel ID** (also referred to as Dataset ID):  
    In the same **Settings** section of your **Events Manager**, scroll down and locate your **Dataset ID**.  
    Copy this value and paste it into the **Pixel ID** field within your Facebook Conversion API action in the workflow.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfMX5Rdh_BegBfH_wt6O9zHmUg0hfPwj6pEW-I52SqFKoIx7sPSRcac3rGNurxTZhZPyxvAr0QdKO8eR0vlqCxqwy6W0o5m3jxLy04MRdZzYQXWy66IQ0pMXmUNmCPpTmCBO-vtgQ?key=A_x8AM-cqLxNp5K5ZOAS8g)

-   Include the “**Create Opportunity**” or **“Update Opportunity**” actions, specifying the relevant Pipeline and Stage.
-   Default the Opportunity Name to the Lead’s Full Name using the custom value selector and enable Allow Duplicate Opportunities for this workflow.

**Important:**

-   Turn on the ‘Allow Re-Entry’ option in the Workflow Settings.
-   Ensure all actions are saved before publishing the Workflow.

#### **Workflow 2: Sending Conversion Data to FB Conversion API**

-   Create a secondary workflow with a Pipeline Stage Change trigger and a Facebook Conversion API action.

![](https://assets2.modalsupport.net/1775246585538-image15.png)

-   Set the Event Type to Lead Event. Enter the Access Token and Pixel ID.
-   Ensure this value accurately reflects the **Pipeline** and **Pipeline Stage** to enable clearer reporting. Use the **tag icon** at the end of the field to insert the custom value for the opportunity's pipeline and stage.  


![](https://assets2.modalsupport.net/1775246609181-image6.png)

-   Remember to save your actions and publish the Workflow.

**Important:**

-   Turn on the ‘Allow Re-Entry’ option in the Workflow Settings.
-   Test your Workflow with the Lead Ads Test Tool, selecting the appropriate Page and Lead Ad Form to create a lead.
-   Monitor the event captured by your Events Manager, which may take up to a day for successful detection.

Once the Event is sent from the Lead Ads Test Tool, please go to Opportunity Pipeline and move the dummy Facebook lead to another stage configured in the Workflow. Once this is completed, check the workflow status as executed and the conversion API event in Event Manager.

Finally, use the “Settings” tab in the Events Manager to oversee the integration progress of your Conversion Leads.

### **Troubleshooting**

#### **My Facebook Conversion API Action is being skipped. Error says there is no attribution data found**

If you’re using FB Pixel on a funnel/website, try adding the code inside the page builder > head tracking code instead of the general settings.

Use the right triggers in your workflows as shown above in the article.

### **FAQ**




**Question:** What is the Meta Conversion API (CAPI) integration?
**Answer:** The Meta Conversion API allows you to send events from to Facebook, helping improve tracking and optimization of your Facebook Lead Ads. Instead of relying solely on browser-based tracking, events are sent directly from , ensuring better reliability and data quality.




**Question:** How does CAPI help with lead ads?
**Answer:** When someone submits a Facebook Instant Form, their contact data is synced into . As the lead moves through your funnel stages, this integration shares their status back with Meta. This allows Facebook to optimize your ads based on lead quality and not just volume, increasing the chances of converting leads into paying customers.




**Question:** How do I start setting up the Facebook CAPI integration in ?
**Answer:** Start by:

-   Ensuring your **Facebook account** is integrated under Settings > Integrations.
-   Verifying your Facebook Page, Ad Account, and Lead Forms are correctly linked and mapped.
-   Setting up **Facebook Form Field Mapping** for custom fields in Account Settings > Integrations.




**Question:** Where do I find my Facebook Access Token and Pixel ID?  
Answer:**

-   **Access Token**:
    -   Go to **Events Manager > Data Sources > Settings**
    -   Scroll down and click “Generate Access Token”
    -   Copy and paste this into your workflow
-   **Pixel ID (Dataset ID)**:
    -   Found under the same **Settings** section
    -   Copy and paste into the Pixel ID field in your workflow




**Question:** What is Custom Value Mapping and how does it work?
**Answer:** You can enable custom mapping to manually assign specific parameters like:

-   **FBCLID** (for funnel events)
-   **Facebook Lead ID** (for lead events)

This takes precedence over system defaults. If left blank, the system continues using its internal mappings.




**Question:** What if I see the error: “No attribution data found”?
**Answer:** Try these troubleshooting steps:

-   Insert the Facebook Pixel code directly into the **page builder’s head tracking section**, not in global settings.
-   Double-check that your workflows are using the correct triggers (Lead Form Submission, Pipeline Stage Change).




**Question:** How do I monitor my CAPI event progress?
**Answer:** In Events Manager > Settings, you’ll find a section that shows integration status and event tracking history. Monitor it to confirm whether your events are being received properly.




**Question:** Can I use this integration to optimize ad campaigns for lead quality?
**Answer:** Yes, CAPI allows Meta to track lead progress and status in your pipeline, enabling ads to be optimized for higher-quality leads rather than just the quantity of leads generated.




**Question:** Does this integration work if I am using an existing Facebook Pixel?
**Answer:** Yes. During Step 1 of the setup, you will be given the choice to either create a new pixel or select an existing one. Using an existing pixel is often better as it already contains historical data about your audience.