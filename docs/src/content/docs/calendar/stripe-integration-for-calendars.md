---
title: "Stripe Integration For Calendars"
description: "In this article, you will learn how to set up Stripe for your calendar."
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/gXSbKEyz07pZABjvQFsb"
sourceId: "gXSbKEyz07pZABjvQFsb"
category: "Calendar"
---

In this article, you will learn how to set up Stripe for your calendar. 

This is very useful because it allows you to collect a payment to allow your users to book. 

## **What you will need:** 

-   A Stripe Integration
-   A Calendar

### **Part One: Connect Stripe and Manage the Payment Methods**

-   Navigate to Payments on the left > Integrations at the top 
-   Click on "Connect with Stripe" and complete the steps

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXf_DSy1trBNTeniEwGvG2qJDlnO1OsTYtxdUfIs6xnpSgAEoSGRh5ANxdxjlhZWSnqstPY9TyiB0Ox1WhGQTbsqW02uTunhOOSy7FduQgl_bMKZaVOSX4c27h52EJ7sYUoUVarXcw?key=7_VIC2OZwaEKHB3UycR8wg)

-   Businesses can set up Stripe payment methods directly within , eliminating the need to configure them on Stripe’s dashboard. These payment methods can be enabled or disabled for various product areas, separately in both Live and Test modes. For existing customers, the default payment methods for product areas or checkouts will remain as they were configured in Stripe. 

**Important:** Going forward, editing these payment methods on Stripe will no longer be possible.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcgEVXLKN_YIqT2adNCuBsJuGV2K4h7STAiPHcYSmAXWXsyFQ_IyhtZiwZ8LDKGeH0gin2bZoV7KCtg1612Oskw12_zU35eQNxhVOAzyYnfop64qDKOV2XJJr-1F2z9XA6cyrsZ?key=7_VIC2OZwaEKHB3UycR8wg)

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfw3LlEVk-9V1dppfLsLFE2k4tA1cN_vd2s8JQkz9vHHlSKgz05XWk7wVLipN0BOkGl8F2nrBw11rxJjyDzdlKoFXcq-_BVHtp3GSFjbjrL0YlAy_E3wOg4w4F2AnHBc0Bu2u4hmg?key=7_VIC2OZwaEKHB3UycR8wg)

### **Part Two: Connect Stripe with your Calendar**

-   Navigate to Settings > Calendars
-   Click on the Pencil icon to Edit

![](https://assets2.modalsupport.net/1773418022001-image3.png)

-   Go to **Payment** within the particular calendar
-   Check the "Payment" option
-   Enter the amount you would like to charge, the currency, and the charge description

![](https://assets2.modalsupport.net/1773418066260-image4.png)

-   Click on "Save" when you have filled out all the proper details
-   Your calendar is all set to begin charging customers in the booking widget

**Note:** The charge description is important as it is what tells your customers why they are being charged.

**Note:** If multiple payment gateways are connected, a dropdown menu will appear, allowing you to select a default payment gateway. Only the **default payment gateway** will be used for processing payments. For example, if you select Stripe as the default, all payments will be processed exclusively through Stripe.

**Note**: Partial payments do not work with recurring calendars.

## **Other Payment Integrations:** 

-   Payments in calendars are supported through five payment gateways, namely Stripe, NMI, [Authorize.net](https://www.authorize.net/), Razorpay, and Square.
-   Please Note: You can use these payment methods to collect payments for all calendar types. However, Razorpay, NMI, and Square are currently not supported for the Classic Widget and Service menu.

## FAQ’s 




**Question:** Can I use Stripe as the default payment gateway if multiple gateways are connected?

**Answer:** Yes, if multiple gateways are connected, you can select Stripe as the default payment gateway from the dropdown menu. Only the default gateway will process payments.




**Question:** How do I manage payment methods in ?

**Answer:** To manage payment methods, navigate to **Payments** on the left, then click on **Integrations** at the top. Find Stripe and click on **Manage**, then select **Manage Payment Methods** to enable or disable payment methods as needed.  




**Question:** Are partial payments supported for calendar bookings?
**Answer:** No, partial payments are not supported for recurring calendars.  




**Question:** Which payment gateways are compatible with calendars?
**Answer:** Stripe, NMI, Authorize.net, Razorpay, and Square are supported. However, Razorpay, NMI, and Square do not work with the Classic Widget or Service menu.  




**Question:** What happens if I don't set a charge description?
**Answer:** The charge description helps inform customers why they are being charged. If left blank, it may create confusion during payment processing.  




**Question:** Can I connect multiple payment gateways to my calendar?
**Answer:** Yes, you can connect multiple gateways, but only the default gateway will be used for processing payments.  




**Question:** Are recurring payments supported through the calendar?
**Answer:** Currently, **recurring payments are not supported** within calendar bookings. Each appointment must be paid individually.  




**Question:** How do I disable or enable payment methods for different product areas?
**Answer:** You can disable or enable payment methods for various product areas separately in both Live and Test modes. This can be done by navigating to the "Manage Payment Methods" section after connecting your Stripe integration.




**Question:** If I cancel an appointment, does the customer get an automatic refund?

**Answer:** No. To ensure you have full control over your money, the system does not issue automatic refunds. If you need to refund a client, you must log in to your **Stripe Dashboard** directly to process the return.