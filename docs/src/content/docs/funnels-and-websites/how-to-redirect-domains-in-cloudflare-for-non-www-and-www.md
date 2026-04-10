---
title: "How To Redirect Domains in Cloudflare (for non-www. and www.)"
description: "How To Redirect Domains in Cloudflare (for non-www. and www.)"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/HgD06f34gUY2ChLERtvu"
sourceId: "HgD06f34gUY2ChLERtvu"
category: "Funnels and Websites"
---

**How To Redirect Domains in Cloudflare (for non-www. and www.)**

This tutorial will walk you through how to set up a domain redirect in your Cloudflare account.  (This is assuming you’ve already added your domains into Cloudflare. If not, check out our Cloudflare setup tutorial and then come back to this article.)

Setting up a redirect means that you’re ensuring the www. and non-www. versions go to the same page . In our example, we’re using **thehelpdeskteam.com**, so we’ll be setting up the redirect for **thehelpdeskteam.com** to direct to **www. thehelpdeskteam.com**, so either version a lead uses goes to the same place.

### Step 1: Confirm your DNS records.

-   Log in to your Cloudflare account.
-   Navigate to the DNS page using the blue buttons at the top of the screen.
-   This is an example of what your setup may look like:

![](<https://assets2.modalsupport.net/1765278036888-unnamed - 2025-12-09T190026.629.png>)

-   Be sure you have these 2 CNAME records: the root domain, and www.
    -   The root domain will be proxied. The www. version will be DNS only.
    -   This is because we have the www. version in under Settings > Domains.

### Step 2: Set up a permanent redirect page rule.

-   Navigate to Page Rules.
-   Create Page Rule or click the tool icon to edit an existing rule.

![](<https://assets2.modalsupport.net/1765278060207-unnamed - 2025-12-09T190051.990.png>)

-   Create a permanent redirect, which is Status Code: 301.

![](https://assets2.modalsupport.net/1765278079526-unnamed.gif)

-   In the top section, enter your root domain, and be sure to include a **/\*** at the end, like this: https://thehelpdeskteam.com/\*
    -   The **\*** functions as a wildcard.
-   In the bottom section, enter the www. version, and include a /$1 at the end, like this: https://www.thehelpdeskteam.com/$1
    -   The $1 functions as a copy of the wildcard.

-   Click “Save and Deploy” (or just “Save” if editing an existing rule.)
-   If you wish to test this, do so after a few minutes so everything is loaded, and then proceed to open your URL in incognito mode.

### Troubleshooting

Q1: I'm keep getting Funnel Error Code 500 - Failed to execute 'appendchild' on 'node'. This node type does not support this method, what should I do?

![](<https://assets2.modalsupport.net/1765278105428-unnamed - 2025-12-09T190136.741.png>)

1\. Login to Cloudflare

2\. Click on your domain where you are seeing the 500 error code

Click on your domain where you are seeing the 500 code error

![](<https://assets2.modalsupport.net/1765278153085-unnamed - 2025-12-09T190224.744.png>)

3\. Click on DNS tab within the left menu

![](<https://assets2.modalsupport.net/1765278171428-unnamed - 2025-12-09T190243.057.png>)

4\. Click on Edit

![](<https://assets2.modalsupport.net/1765278191726-unnamed - 2025-12-09T190300.698.png>)

5\. Uncheck Proxy status

![](<https://assets2.modalsupport.net/1765278212628-unnamed - 2025-12-09T190324.199.png>)

6\. Click on Save

![](<https://assets2.modalsupport.net/1765278234885-unnamed - 2025-12-09T190346.980.png>)

### FAQ




**Question:** What should I do if my domain redirect is not working as expected?
**Answer:Ensure that your DNS records are correctly set up with the root domain proxied and the www version set to DNS only. Also, double-check your Page Rule settings to make sure the redirect is configured with the correct URLs and wildcards.




**Question:** How long does it take for the domain redirect to become active?
**Answer:The redirect should be active within a few minutes after saving and deploying the Page Rule, but it can take up to 24 hours for DNS changes to propagate fully. Clear your browser cache or test in incognito mode if changes do not appear immediately.




**Question:** Can I set up multiple redirects using Cloudflare's Page Rules?
**Answer:Yes, Cloudflare allows multiple Page Rules, and you can set up additional redirects as needed. Just ensure that the rules do not conflict and that you are mindful of Cloudflare’s limit on the number of free Page Rules.




**Question:** What is the difference between a 301 and 302 redirect, and which one should I use?
**Answer:A 301 redirect is permanent, indicating to browsers and search engines that the page has moved permanently to a new URL. A 302 redirect is temporary. For domain redirects like this, a 301 redirect is recommended to ensure proper indexing and SEO benefits.




**Question:** What should I do if my DNS records aren't correctly configured?
**Answer:

If your DNS records are not configured correctly, your domain redirect may not work as expected. Ensure you have two CNAME records: one for the root domain (proxied) and one for the www version (DNS only). You can check this under the DNS page in your Cloudflare account.




**Question:** Can I redirect multiple subdomains to my main domain?
**Answer:

-   Yes, you can set up additional Page Rules for other subdomains.  

-   Ensure each rule is specific and does not conflict with existing redirects.




**Question:** What happens if I want to redirect from the "www" version to the root domain instead?

**Answer:The steps are the same, just flipped! You would put the www version with the /\* in the top box and the root domain (non-www) in the bottom box. Just make sure your **Settings > Domains** inside the platform matches whichever version you choose as the final destination.




**Question:** Do I need an "A Record" if I am using "CNAME Records" for my redirect?
**Answer:** No. In most modern setups, two CNAME records (one for @ and one for www) are sufficient. Cloudflare uses a technology called "CNAME Flattening" to allow you to use a CNAME for your root domain, which is traditionally not allowed in standard DNS. This simplifies your setup significantly.