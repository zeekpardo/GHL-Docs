---
title: "How To Redirect Domains (from www to non-www)"
description: "This article will walk through how to redirect domains from the www. version to non-www. version. In this example, we'll be using Cloudflare, but you can…"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/p1a00GMk2YYvu2VFcLaz"
sourceId: "p1a00GMk2YYvu2VFcLaz"
category: "Funnels and Websites"
---

This article will walk through how to redirect domains from the www. version to non-www. version. In this example, we'll be using Cloudflare, but you can follow a similar process with other DNS hosts.

**_NOTE:_** You will still need to configure BOTH the www and non-www versions in your account. 

### Part 1: Setting Up the Domain

**Step 1:** Navigate to Settings > Domains and URL Redirects > Connect a Domain.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXd4TWCA-EjmGf2WWRE6P7tjUxpw1xVHVQUJU2T7al72iqsN5jA5BlMupWl9ZCqiDPfyt-cWHWXMe7xiRJdIRCt9TzB3q2q6SC_jL0Y-aSoZ1gtxU8h3jr4r15LiETq2NzrCcpyIZg?key=rCzI8FGt9asPnxxLQxbaAg)

**Step 2:** Add the non-www version of the domain, such as thedemoaccount.com.  
After adding the typing non-www domain, you will also get the option to add the www domain. Turn on that toggle.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXc8wVYRiQor8mnSi9fr0SkQqO0TkcG9hVcVatXj4BZoDvOyj3GFStTKZCHJ9JZgUXbmEm1GwQgHqaUczjGnILSzuoZlddlFUa7aZBz-vvJWE9sxQrbtFlhK70TXpHvS5FigcQj30hU0DJXySWI1N_2sh6Bf?key=rCzI8FGt9asPnxxLQxbaAg)

**Step 3:** Hit the “Continue” button, or if you want to add the records manually in your domain’s DNS settings, then choose the option “Add record manually.”

**Step 4:** If adding the records manually, create the DNS records that the system provided.  
If not adding manually, choose the option to “Authorize domain”

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcPbKkDfV8UOdQW0hwskJKpbXKsrcj4lupSfr5ravBtfRGo37qHUIOVtuZFxkDzkndo0UQiYBI94SB6mrCQU2FWToZmTAHfNV-PuZjMide9rcF6Lq3B0FNeyHTY1PSSm1MUJnvHS5jcRpJ75PMYnfDKMnk?key=rCzI8FGt9asPnxxLQxbaAg)

**Step 5:** Once this is done, make sure that both, www and non-www domains are showing up in the list of domains in your account.

### Part 2: Setting up the URL Redirect

**Step 1:** Go to Settings > URL Redirects

**Step 2:** Click on the “Add a Redirect” button

**Step 3:** In the ‘Domain’ field, select the www domain

**Step 4:** Leave the ‘Path’ field blank

**Step 5:** In the Redirect Type field, choose “All”

**Step 6:** In the ‘Target  Domain’ field, select the non-www domain

**Step 7:** Add the Redirect  

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcnoAtHRqkZ7i2oN8FKZBXA-wYYl_7S0SVgwrfxGFbK1EkTdRsh1-nuN23djqfepg3hTI4pZWf6g6iJe3Qp10alFVV9l0lGEEphzJ3QcTAxp043V71GcBxXMSI-miqB0vuaVmv_Zr9xB-aIfOtJer0HDBcn?key=rCzI8FGt9asPnxxLQxbaAg)

### Part 3: Testing the Sub-domain Forwarding

Go to your funnels/websites and connect the non-www domain inside settings.

Now open a new tab and try opening a link with the www domain. It will automatically redirect to the non-www domain.

### FAQ's




**Question:** What should I do if the redirection is not working?
**Answer:

-   Double-check the DNS records for both www and non-www domains to ensure they are configured correctly.
-   Verify that the redirect settings in **Settings > URL Redirects** are accurately set, with the www domain selected in the "Domain" field and the non-www domain in the "Target Domain" field.




**Question:** Can I redirect multiple domains at once?

**Answer:** No, each domain needs to be configured and redirected individually. Repeat the process for each domain.




**Question:** Do I need to use Cloudflare for this process?

**Answer:** No, the steps can be adapted for other DNS hosts. The key is configuring DNS records and setting up the redirection correctly within your chosen platform.




**Question:** Why is the www version still appearing after I set up the redirect?
**Answer: 

-   This may occur due to caching. Clear your browser cache or DNS cache and test again.
-   Ensure that the non-www domain is correctly linked to your website or funnel inside your account settings.




**Question:** How can I verify that the redirection is successful?
**Answer: 

-   Open a new browser tab and enter the www version of your domain. It should automatically redirect to the non-www version.
-   Hover over the domain in the listing page to see the redirection string (e.g., "This domain is redirected to example.com").


**Question:  What type of redirect should I use?

**Answer:** For full domain redirection, choose the **“All”** option in the Redirect Type field to ensure all pages are redirected from www to non-[www](http://www).




**Question:** Do I need to configure both www and non-www domains in my account?

**Answer:** Yes, both the www and non-www versions must be configured in your account. You need to ensure that both versions are added to your domain list for the redirect to work properly.




**Question:** Do I need to test the redirect after setup?

**Answer:** Yes. Open links using the www domain and ensure they automatically redirect to the non-www domain. This confirms the setup is working properly.




**Question:** Does this redirect affect my email (MX) records?

**Answer:** No. URL Redirection only affects web traffic (A and CNAME records). Your email settings are handled by MX records, which remain untouched during this process.




**Question:** Should I leave the "Path" field empty when setting up the redirect?
**Answer:** Yes. When configuring the URL redirect in Part 2, you should leave the Path field blank to ensure the redirection applies to the root domain.




**Question:** Can I reverse this and redirect my non-www domain to the www version?

**Answer:** Absolutely. The process is identical; you simply swap the roles. You would select the non-www domain in the "Domain" field and the www version as your "Target Domain."