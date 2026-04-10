---
title: "How to Set Up a Subdomain for Memberships"
description: "How to Set Up a Subdomain for Memberships"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/FMEy4RDKk22aADhgXcL3"
sourceId: "FMEy4RDKk22aADhgXcL3"
category: "Memberships"
---

**How to Set Up a Subdomain for Memberships**

In this article, we'll explore setting up a custom domain for membership portals within the context of . Following these steps can ensure a seamless user experience while avoiding potential domain management conflicts.

**Defining Subdomains:**

A subdomain is a subset of a larger domain that allows specific website sections to have unique addresses. For membership portals, we recommend using a subdomain like members.yourtestwebsite.com. In this case, "members" is the subdomain, while the root domain is yourtestwebsite.com.

**Adding Subdomains and Custom Domains**

To configure a domain for your membership portal, follow these steps:

Navigate to the Membership section on the left.

Open the Courses dropdown, select Settings, and then choose Domain Setup.

![](https://assets2.modalsupport.net/1764002655662-image.png)

At this point, you have two options:  

![](https://assets2.modalsupport.net/1770234463288-image6.png)

**Option 1:Utilize a Pre-configured Subdomain**

You can use a pre-configured subdomain under clientclub.net, which is already set up and ready for immediate use. Select this option if it suits your needs. Don’t forget to scroll down and hit Update Domain for the changes to take effect.

**Option 2:Set Up a Custom Domain**

If you prefer to use a domain that you own, follow these steps to configure a custom domain:

-   Click on Custom Domain and enter your desired domain name.
-   Click the +Add Domain button.

![](https://assets2.modalsupport.net/1764002629100-image.png)

**Configuring A or CNAME Records**

Before proceeding, ensure that your domain registrar is already pointing to the specific IP address or server provided to you. This step is crucial to ensure your domain is appropriately associated with your server and functions.

**There are two main types of records to configure:**

**A Record:** Maps your domain to a specific IP address.

**CNAME Record**: Maps your domain (or subdomain) to another domain name.

**Follow this step-by-step guide to add A or CNAME records:**

-   Log in to your domain registrar's dashboard.
-   Navigate to the DNS Settings.
-   Choose the option to add a new record.
-   Select the type of record you want to add (A or CNAME).
-   For an A record, enter the IP address: 162.159.140.166.
-   For a CNAME record, enter the target domain: clientportal.ludicrous.cloud.
-   Save your changes.

**Example Configuration**

You need to create an A record for the root domain (e.g., abc.com). In the "Name" field, enter @; in the "Value" field, enter 162.159.140.166.

For a subdomain (e.g., members.abc.com), create a CNAME record. In the "Name" field, enter the subdomain (e.g., members), and in the "Value" field, enter clientportal.ludicrous.cloud.

Final Steps

Once you've added and verified the record, click the Update Domain button to finalize the setup.

![](https://assets2.modalsupport.net/1764002609359-image.png)

**_Note:_** We recommend using a subdomain; typically, using the main website root domain or main website www subdomain, unless you want that domain to be only for memberships

## Ensure Site Details are Updated

-   After successfully adding the subdomain, navigate to the Courses dropdown Settings and click on Site Details.

![](https://assets2.modalsupport.net/1764002597959-image.png)

-   Verify that your domain name is present in the “Site URL” field under Advanced details.

![](https://assets2.modalsupport.net/1764002506696-image.png)

## Best Practices and Recommendations

-   **Domain Management:** Consider having one domain in (e.g., testsamplewebsite.com) and redirecting the other (non-www or www) using your DNS manager, like Cloudflare with page rules. This prevents conflicts and streamlined user experience.
-   **Subdomain Usage:** To maintain organization and clarity in your web structure, reserve subdomains for specific purposes, such as memberships (e.g., members.yourtestwebsite.com).

### **FAQ's**




**Question:** What is a subdomain, and why should I use one for my membership portal?
**Answer:** A subdomain is a part of your main domain that allows you to create separate sections of your website with unique addresses. Using a subdomain for your membership portal helps keep your site organized and can improve user navigation.




**Question:** Can I use a custom domain instead of a subdomain?
**Answer:** Yes, you can set up a custom domain for your membership portal. However, it’s generally recommended to use a subdomain to maintain clarity and organization within your web structure.




**Question:** What types of DNS records do I need to configure?
**Answer:** You’ll typically need to configure either A records or CNAME records. A records link your domain to a specific IP address, while CNAME records connect your domain or subdomain to another domain name.




**Question:** How do I verify that my DNS settings are correct?
**Answer:** After making changes, you can use tools like DNS lookup services or your domain registrar’s dashboard to verify that your DNS settings are pointing correctly to the designated IP address or target domain.




**Question:** What should I do if my domain isn’t working after setup?
**Answer:** Double-check your DNS settings to ensure they are configured correctly. Additionally, allow some time for DNS propagation, which can take up to 48 hours. If issues persist, contact your domain registrar for support.




**Question:** Can I change my subdomain after I’ve set it up?
**Answer:** Yes, you can change your subdomain. However, keep in mind that you’ll need to update your DNS settings and possibly inform your users of the change to avoid confusion.




**Question:** How do I update the domain in the membership settings?
**Answer:** After adding your subdomain, navigate to the membership settings and click on Site Details. Ensure that the new domain name is present in the “Site URL” field under Advanced details.




**Question:** What are the best practices for managing my domain and subdomains?
**Answer:** Consider consolidating your domains under one primary domain and redirecting others to prevent conflicts. Use subdomains for specific purposes to maintain organization and clarity.




**Question:** Can I use multiple subdomains for different membership portals?
**Answer:** Yes, you can create multiple subdomains (e.g., members1.yourwebsite.com, members2.yourwebsite.com) for separate portals, but ensure each has correctly configured DNS records and site details.




**Question:** Can I use Cloudflare or another DNS manager?
**Answer:** Yes, Cloudflare and similar DNS managers work well. Just ensure records are set correctly and that proxy/CDN features don’t interfere during initial setup.




**Question:** What is the "Pre-configured Subdomain" option, and how do I use it?
**Answer:** This is a ready-to-use option under clientclub.net that allows you to set up your portal immediately without owning a custom domain. To use it, select the "Utilize a Pre-configured Subdomain" option in your Domain Setup settings, enter your desired name, and click "Update Domain."