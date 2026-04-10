---
title: "Setup & Configure Domain/Subdomain using Domain Connect or Manually"
description: "This guide will walk you through integrating a new domain or subdomain with Domain Connect and/or manually. Whether you aim to enhance your online presence or…"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/ZbRDjJ1Ndh0F1oBwePKr"
sourceId: "ZbRDjJ1Ndh0F1oBwePKr"
category: "Settings"
---

This guide will walk you through integrating a new domain or subdomain with Domain Connect and/or manually. Whether you aim to enhance your online presence or launch a new project, understanding the intricacies of domain management is pivotal. Here, we delve into manual and automatic methods, ensuring you understand the processes involved. Let's get started!

## Simplifying With Automatic Domain Connect

Domain Connect revolutionizes the domain-linking process by offering a seamless and automated experience. With just a click, this feature eliminates the need for manual DNS record adjustments, making domain management effortless for both primary domains and subdomains.

**Important:**

This automatic feature is solely for connecting domains; it is not for hosting them. You must own a domain with GoDaddy, or Cloudflare for Domain Connect. If using Cloudflare, ensure the DNS records generated automatically have Cloudflare proxy disabled.

###   
What is Domain Connect?

Domain Connect simplifies connecting domains to various online services or applications. Here’s a detailed look:

-   **Streamlined Compatibility:** Easily link your domains to multiple services via Go Daddy or Cloudflare.
-   **No-Fuss Configuration:** Say goodbye to manually adjusting DNS settings; Domain Connect does it all for you, saving time and preventing errors.

### Why Should You Consider This Feature?

-   **Quick and Painless:** Effortlessly link your domains to diverse online platforms.
-   **Reliable and Secure:** Utilize the secure framework provided by top domain providers.
-   **Future-Proof:** Domain Connect is primed for expansion, including support for platforms like WordPress and email services.

### How to Use This Feature

1- Log in to your account and go to Settings > Domains and URL Redirects tab.

2- Click the "+ Connect a Domain" option.

![](<https://assets2.modalsupport.net/1768397667674-unnamed - 2026-01-14T213421.362.png>)

![](<https://assets2.modalsupport.net/1768397684756-unnamed - 2026-01-14T213432.138.png>)

![](<https://assets2.modalsupport.net/1768397694906-unnamed - 2026-01-14T213448.348.png>)

3- Input your primary or subdomain. If adding the "www" subdomain, an option will appear.

![](<https://assets2.modalsupport.net/1768397714383-unnamed - 2026-01-14T213507.676.png>)

4- Press "Continue."

5- An "Authorize" button will display if your domain is registered with GoDaddy, or Cloudflare. Click it to initiate the DNS settings change.

![](<https://assets2.modalsupport.net/1768397734366-unnamed - 2026-01-14T213525.295.png>)

6- Follow the instructions on your domain provider's portal to complete authorization.

![](<https://assets2.modalsupport.net/1768397754925-unnamed - 2026-01-14T213548.225.png>)

7- Finalize the connection, once authorized, close the domain provider’s tab and return to the Domain Connect interface.

8- Manual DNS record addition remains an option if your domain provider is not supported.

#### Verify the Connection

Run a test to verify the domain connection. Changes may take at least 30 seconds to reflect.

**Domain Connect Conflict Detection Across Product Types**

Domain Connect also prevents domain configuration conflicts between different product types. This ensures that if connecting a domain to a new product could disrupt an existing product's connection, the system will block the action and display a clear error message.

![](<https://assets2.modalsupport.net/1768397778085-unnamed - 2026-01-14T213609.380.png>)

### Domain Connect Integration with WordPress

The Domain Connect integration simplifies connecting domains to WordPress sites, eliminating the need for manual DNS configurations. With support from major providers like GoDaddy, Cloudflare, and IONOS, users can link domains in a few easy steps, enhancing efficiency and reducing errors. This feature saves users valuable time by automating the setup, allowing them to focus on managing their websites without technical hurdles.

**How to Use:**

1- Go to the WordPress hosting section in your dashboard by going to Sites > WordPress.

![](<https://assets2.modalsupport.net/1768397797924-unnamed - 2026-01-14T213631.383.png>)

![](<https://assets2.modalsupport.net/1768397813364-unnamed - 2026-01-14T213641.144.png>)

2- Choose the WordPress site to connect.

3- Select “Add Domain” and enter your domain name.

4- Click “Auto Configure” to start the automatic setup.

![](<https://assets2.modalsupport.net/1768397843944-unnamed - 2026-01-14T213717.022.png>)

![](<https://assets2.modalsupport.net/1768397858097-unnamed - 2026-01-14T213729.743.png>)

![](<https://assets2.modalsupport.net/1768397871259-unnamed - 2026-01-14T213742.313.png>)

![](<https://assets2.modalsupport.net/1768397882044-unnamed - 2026-01-14T213754.616.png>)

### Frequently Asked Questions

**Q: Can I opt for a manual DNS setup?**

A: Manual configuration is still available for users whose domain providers aren't supported by Domain Connect.

**Q: What if my domain provider isn’t among the top three?**

A: You can continue using manual DNS settings; the process remains the same.

**Q: What happens if I choose to 'Also add www domain,' but it's already configured elsewhere?**

A: A CNAME record will be created, but any pre-existing CNAME or A records for your www domain must be removed manually for proper functionality. If you do not delete the previous www record, it will create a conflict and won't allow you to add another www record.

**Q:What DNS providers are supported?**

A: This integration currently supports GoDaddy, Cloudflare, and IONOS for domain connections.

**Q: Do I need technical skills to configure DNS settings manually?**

A: No, the Domain Connect integration automates DNS setup, making it accessible for all users.

**Q: Will this affect my current DNS settings?**

A: Domain Connect manages only the required DNS settings for WordPress, so existing configurations remain unaffected.

**Q: How do I verify if my domain connection was successful?**A: After completing the connection process, run a test to verify the domain connection. The changes may take at least 30 seconds to reflect, so allow some time before checking.

## Manually adding a Domain:


Manual addition of domains applies to you if your domain registrar is anyone except the two supported by Domain Connect (i.e., Cloudflare, and GoDaddy). 

You can still use the manual addition capability even if you own a domain out of the two mentioned above. The domain is the web address, such as [www.mywebsite.com](http://www.mywebsite.com) or [www.thedemoaccount.com](http://www.thedemoaccount.com). You must create a domain within a registrar, such as Namecheap, Hostgator, etc. Then, you can add your domain to the system to start using it. Follow the steps below to configure your new domain:

## Step 1: Create A Record to Connect Your Domain

This will be done by your registrar. Depending on your domain host, this can be done one of two ways:

-   (Recommended) Add a CNAME record for your root domain or any sub-domains with the value ‘sites.ludicrous.cloud’
-   (Alternative) Use an A name for your root domain, specifically pointing to **162.159.140.166**

**_Please Note:_** _You will need to be certain that the domain is not pointed to multiple places (multiple records for the same domain set to different values). Ensure you have an A record pointing to_ **_162.159.140.166_** _or a CNAME record pointing to sites.ludicrous.cloud for the domain_

### Instructions on Adding a CNAME record to various Domain Registrars:

Follow the instructions for each registrar.

Namecheap instructions: [https://www.namecheap.com/support/knowledgebase/article.aspx/9646/2237/how-to-create-a-cname-record-for-your-domain/](https://www.namecheap.com/support/knowledgebase/article.aspx/9646/2237/how-to-create-a-cname-record-for-your-domain/)

Godaddy instructions:

[https://www.godaddy.com/help/add-a-cname-record-19236](https://www.godaddy.com/help/add-a-cname-record-19236)

Cloudflare instructions:

[https://www.cloudflare.com/en-gb/learning/dns/dns-records/dns-cname-record/](https://www.cloudflare.com/en-gb/learning/dns/dns-records/dns-cname-record/)

Wix instructions:

[https://support.wix.com/en/article/adding-or-updating-cname-records-in-your-wix-account](https://support.wix.com/en/article/adding-or-updating-cname-records-in-your-wix-account)

Hostinger instructions:

[https://support.hostinger.com/en/articles/4738777-how-to-manage-cname-records-on-hpanel](https://support.hostinger.com/en/articles/4738777-how-to-manage-cname-records-on-hpanel)

BlueHost instructions:

[https://www.bluehost.com/hosting/help/cname](https://www.bluehost.com/hosting/help/cname)

![](<https://assets2.modalsupport.net/1768397916787-unnamed - 2026-01-14T213831.596.png>)

**Please Note:**

If you are using Cloudflare, please make sure that the Proxy status is set to DNS only as we do not support Cloudflare Proxy. 

![](<https://assets2.modalsupport.net/1768397937798-unnamed - 2026-01-14T213850.183.png>)

### Instructions on Adding an A record to various Domain Registrars:

Namecheap instructions: [https://www.namecheap.com/support/knowledgebase/article.aspx/319/2237/how-can-i-set-up-an-a-address-record-for-my-domain/](https://www.namecheap.com/support/knowledgebase/article.aspx/319/2237/how-can-i-set-up-an-a-address-record-for-my-domain/)

Godaddy instructions:

[https://www.godaddy.com/help/add-an-a-record-19238](https://www.godaddy.com/help/add-an-a-record-19238)

Cloudflare instructions:

[https://www.cloudflare.com/en-gb/learning/dns/dns-records/dns-a-record/](https://www.cloudflare.com/en-gb/learning/dns/dns-records/dns-a-record/)

Wix instructions:

[https://support.wix.com/en/article/adding-or-updating-a-records-in-your-wix-account](https://support.wix.com/en/article/adding-or-updating-a-records-in-your-wix-account)

Hostinger instructions:

[https://support.hostinger.com/en/articles/4468886-how-to-manage-a-records-in-hpanel](https://support.hostinger.com/en/articles/4468886-how-to-manage-a-records-in-hpanel)

Bluehost instructions:

[https://my.bluehost.com/hosting/help/713](https://my.bluehost.com/hosting/help/713)

![](<https://assets2.modalsupport.net/1768397965517-unnamed - 2026-01-14T213918.701.png>)

**Please Note:**

If you are using CloudFlare, please make sure that the Proxy status is set to DNS only as we do not support Cloudflare Proxy. 

![](<https://assets2.modalsupport.net/1768397981621-unnamed - 2026-01-14T213935.698.png>)

**_Please Note:_** _If you are using Cloudflare it is preferred to have either the www or the non-www domain proxied. The non-proxy would reside in the system; it is preferred to have www for funnels. You would then create a page rule and dynamic pattern with a wildcard character. Please review the article: “How To Redirect Domains in Cloudflare (for non-www. and www.) for this.”_

**_Please Note:_** _After adding your Domain to the Domain Registrar, it might take some time for the DNS settings to propagate, so if it doesn't work immediately, give it some time (up to 24 hours) and try again._

## Step 2: Add Your Domain to Your System

You’ll need to add your domain within your system to use it for funnels or websites.

-   Navigate to Settings > Domains
-   Here, you’ll see a list of any Domains you already have, or you can add a new one.
-   Click “+ Connect a Domain” to add a new one.

![](<https://assets2.modalsupport.net/1768398014702-unnamed - 2026-01-14T214008.434.png>)

-   In the popup, type your domain, such as [www.mywebsite.com](http://www.mywebsite.com) or [www.thedemoaccount.com](http://www.thedemoaccount.com)

**_NOTE:_** _Ensure you have an A record pointing to 162.159.140.166 or a CNAME record pointing to_ ‘sites.ludicrous.cloud’ _for in domain within the (). (This would have been completed in Step 1 above.)_

-   Click “Add record manually” to proceed to the next step.

![](<https://assets2.modalsupport.net/1768398041485-unnamed - 2026-01-14T214035.044.png>)

**_NOTE:_** _If you see the error message “Couldn’t find a CNAME/A record pointing www to_ sites.ludicrous.cloud_” then you may have something in your DNS settings input incorrectly, or perhaps you spelled something wrong. Double-check your Domain and try again._

Here you can add a full domain such as [www.thedemoaccount.com](http://www.thedemoaccount.com) or you can add just the root domain such as thedemoaccount.com (without the www portion).

**_Please Note:_** _If you want a funnel step/website page to open without any path (domain.com instead of domain.com/home), you can select that page as the default page for that domain. A default page can be selected from Settings > Domains and url redirectors >(Manage) the Particular Domain > Edit Domain._

![](<https://assets2.modalsupport.net/1768398063629-unnamed - 2026-01-14T214057.430.png>)

![](<https://assets2.modalsupport.net/1768398083102-unnamed - 2026-01-14T214115.843.png>)

Please review the article “How To Connect Your Domain to a Funnel or Website” for the next steps on how to Associate the Domain with a Funnel/Website.

You may ignore the Robots.txt code if you don't want to manage indexing for your domain. This link explains more:  [Robots.txt Introduction and Guide | Google Search Central  |  Documentation  |  Google for Developers](https://developers.google.com/search/docs/crawling-indexing/robots/intro).

### Additional Note:

Please be patient after adding your domain to the Domain Registrar; DNS settings might take some time to propagate (up to 24 hours). If it doesn't work immediately, wait for a while and try again.

Domain Transfer-Out

This streamlines the process of connecting domains and subdomains to online services, reducing manual configuration and simplifying DNS management. By automating domain linking, users save time, minimize errors, and ensure reliable connectivity for websites, funnels, or applications.

### How to Use:

Users can connect domains by logging into their account, navigating to Settings > Domains, and selecting “+ Connect a Domain,” then following the guided steps for automatic or manual DNS configuration. 

![](<https://assets2.modalsupport.net/1768398110382-unnamed - 2026-01-14T214143.922.png>)

Transfer domain to another register.

![](<https://assets2.modalsupport.net/1768398128723-unnamed - 2026-01-14T214202.162.png>)

![](<https://assets2.modalsupport.net/1768398138622-unnamed - 2026-01-14T214211.322.png>)

## FAQs




**Question:** What is Domain Connect, and how does it simplify domain management?
**Answer:** Domain Connect automates the process of linking your domains or subdomains to various online services, eliminating the need for manual DNS adjustments. It supports domains registered with GoDaddy and Cloudflare.




**Question:** Can Domain Connect be used for hosting domains?
**Answer:** No, Domain Connect is only for connecting domains, not for hosting them. You must own a domain with GoDaddy, or Cloudflare to use this feature.




**Question:** What domain providers are supported by Domain Connect?
**Answer:** Domain Connect supports GoDaddy and Cloudflare. For other providers, manual DNS configuration is required.




**Question:** How do I integrate a new domain using Domain Connect?
**Answer:** Go to Settings > Domains, click “+ Connect a Domain,” enter your domain or subdomain, and click "Continue." If your domain is with GoDaddy or Cloudflare, click “Authorize” to initiate DNS settings changes. Complete the authorization on your domain provider’s portal, then return to the Domain Connect interface to finalize the connection.




**Question:** Can I manually set up DNS records if my provider isn’t supported by Domain Connect?
**Answer:** Yes, if your domain provider isn’t supported, you can manually add DNS records by following the manual setup instructions provided for your specific registrar.




**Question:** What should I do if my DNS changes are not reflected immediately?
**Answer:** DNS changes can take up to 24 hours to propagate. If the changes are not reflected immediately, wait for some time and try verifying the connection again.




**Question:** What steps are involved in manually adding a domain?
**Answer:** First, create an A record pointing to 162.159.140.166 or a CNAME record pointing to ‘sites.ludicrous.cloud’ in your domain registrar. Then, add the domain to your system by navigating to Settings > Domains and clicking “+ Connect a Domain.”




**Question:** What happens if I encounter the error “Couldn’t find a CNAME/A record pointing www to sites. Ludicrous.cloud”?
**Answer:** This error indicates a potential issue with your DNS settings. Double-check the DNS records to ensure they are correct, and make sure there are no typos in the domain entry.




**Question:** Can I set a default page for my domain without a path (e.g., domain.com instead of** [**domain.com/home**](http://domain.com/home))?
**Answer:** Yes, you can set a default page for your domain from _Settings > Domains and url redirectors>(Manage) the Particular Domain > Edit Domain_, allowing a specific page to open without a path.




**Question:** Why is my site not loading without the "www"?
**Answer:** You likely added the www version but not the root domain. To fix this, ensure you have added both versions in your settings, or set up a redirect in your registrar so that yourdomain.com automatically sends visitors to www.yourdomain.com.




**Question:** Why must Cloudflare’s proxy be disabled for Domain Connect to work?
**Answer:** Domain Connect does not support Cloudflare’s proxy. Ensure the Proxy status is set to DNS only when using Cloudflare.




**Question:** Is it necessary to add both www and non-www versions of my domain?
**Answer:** It’s preferred to have either the www or the non-www version of the domain proxied. Set up a page rule and dynamic pattern if needed for redirects between www and non-www versions




**Question:** Where can I find specific instructions for adding CNAME and A records for various domain registrars?
**Answer:** Instructions are provided in the article for Namecheap, GoDaddy, Cloudflare, Wix, Hostinger, and Bluehost. Follow the links for detailed guidance on adding CNAME and A records specific to each registrar.  


**Question:What happens if I choose to 'Also add www domain,' but it's already configured elsewhere?
**Answer:** A CNAME record will be created, but any pre-existing CNAME or A records for your www domain must be removed manually for proper functionality. If you do not delete the previous www record, it will create a conflict and won't allow you to add another www record.  


**Question:Can Domain Connect integrate with WordPress?
**Answer:** Yes. Domain Connect allows automatic setup for WordPress sites, avoiding manual DNS edits, and supports providers like GoDaddy, Cloudflare, and IONOS.




**Question:** What is the specific requirement for using Cloudflare with Domain Connect?

**Answer:** If you are using Cloudflare, you must ensure that the DNS records generated automatically have the **Cloudflare proxy disabled** (the "orange cloud" should be turned off) for the connection to function correctly.