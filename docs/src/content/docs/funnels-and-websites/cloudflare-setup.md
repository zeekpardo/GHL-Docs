---
title: "Cloudflare Setup"
description: "Follow these steps to walk through adding your domain to Cloudflare."
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/dZPR7yC8qbz3M9w3lYpM"
sourceId: "dZPR7yC8qbz3M9w3lYpM"
category: "Funnels and Websites"
---

Follow these steps to walk through adding your domain to Cloudflare. 

### Step 1: Create a Cloudflare account.

-   Click the cloud icon at the top left to go to the dashboard.
-   Click +Add a Site
-   Enter the site name and click “Add Site”.
-   You’ll be directed to the plan page, where you can choose the option you prefer. If you scroll to the bottom you can select the free option, and then click Continue. 

### Step 2: Configuring DNS records and changing nameservers

-   On the next page, CloudFlare will scan for existing DNS records.
-   Click Continue to change nameservers.
-   Cloudflare will tell you where the nameservers already exist. (In the video example, it shows a GoDaddy account. You’d need to log in to your GoDaddy account and change the nameservers over to the Cloudflare.)
    -   _Note: it is critical to point to Cloudflare's nameservers. It's critical for activating your site successfully. Otherwise, Cloudflare cannot manage your DNS and optimize your site._
-   Click “Done, check nameservers” to continue
-   Walk through the Quick Start Guide to improve security and optimize performance.

As long as you have input all of the nameservers properly in the domain registrar, then you're good to go.

## Migration to CloudFlare for Branded Domains

This means that new branded domain connections now utilize CloudFlare. This migration enhances security, simplifies DDoS attack prevention, and allows easy generation and auto-renewal of SSL certificates.

**Benefit:** This update ensures your branded domains benefit from increased speed and security.

**How to Switch:**

-   **New Branded Domains:**
    -   Automatically added with domain connect flow.
    -   Manual addition: Add new CNAME - brand.ludicrous.cloud.
-   **Old Branded Domains:**
    -   Navigate to location settings -> General Information.
    -   Remove the branded domain and save.
    -   Re-add the same domain with domain connect flow or manual flow, then save.

## FAQs  




**Question:** Can I add multiple domains to my Cloudflare account?
**Answer:** Yes, you can add multiple domains by following the same process for each site. Navigate to the dashboard, click "+Add a Site," and repeat the steps for each domain.




**Question:** What happens if I don’t update the nameservers correctly in my registrar?
**Answer:** If you don’t update the nameservers as instructed, Cloudflare will not be able to manage your DNS or optimize your site’s security and performance. This step is mandatory for successful setup.




**Question:** How long does it take for nameserver changes to propagate?
**Answer:** Nameserver changes typically propagate within a few minutes to 48 hours, depending on your domain registrar and DNS settings.




**Question:** Do I need to purchase a paid plan to use Cloudflare for my domain?
**Answer:** No, you can use Cloudflare’s free plan, which offers basic security and performance features. Paid plans provide additional advanced features if needed.




**Question:** Will migrating to Cloudflare affect my existing DNS settings or email services?
**Answer:** Cloudflare scans your existing DNS records during setup to ensure a smooth transition. However, you should verify that critical records like MX (email) and CNAME remain intact to avoid service disruptions.




**Question:** Do I need to manually configure DNS records when migrating to Cloudflare for branded domains?
**Answer:** Yes, when migrating to Cloudflare for branded domains, you may need to manually add a new CNAME record (brand.ludicrous.cloud) for new branded domains or re-add old branded domains through the domain connect flow or manual flow as outlined in the instructions_._




**Question:** Can I manage multiple domains from a single Cloudflare dashboard?
**Answer:** Yes, Cloudflare allows you to manage multiple domains, each with independent settings for DNS, SSL, caching, and security features.




**Question:** What happens if I accidentally delete my MX records in Cloudflare?

**Answer:** If your MX records are deleted, your **email service will stop working**. Cloudflare does not host email; it only directs it. Always double-check that your MX records (usually pointing to Google Workspace, Outlook, or Zoho) are listed in the Cloudflare DNS tab after the initial scan.




**Question:** Is there a way to use Cloudflare for free?

**Answer:** Yes. When you reach the plan selection page, simply **scroll to the bottom** of the options to find and select the free tier before clicking continue.




**Question:** What happens to my SSL certificate if I move to Cloudflare?

**Answer:** Cloudflare provides its own Universal SSL certificate for free. Once your nameservers are active, Cloudflare will automatically issue and renew an SSL for your domain, ensuring your site always displays the "Padlock" icon in browsers without manual maintenance.