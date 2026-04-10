---
title: "Domain Management for WordPress Hosting"
description: "Adding a domain to your WordPress site is essential for making your website publicly accessible. The domain serves as your site’s address, allowing visitors…"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/0RCOfsPswNKyhM2xQG0C"
sourceId: "0RCOfsPswNKyhM2xQG0C"
category: "WordPress"
---

Adding a domain to your WordPress site is essential for making your website publicly accessible. The domain serves as your site’s address, allowing visitors to access it. This article provides step-by-step instructions for adding both primary and subdomains to your WordPress site

#### **How-to Steps**

**1- Adding a Domain:**

-   Navigate to Sites on the left > WordPress on the top and select the WordPress site you would like to add the domain to.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXe0kMZYqlOFe1oEg3P_DSjUv5R-IAdgR16TzI9GYEstPgG6h10pO4GbK4HOE27ASbudQrY-j1c5ogPwiV-RQzMiBeBQSJtLKYn7PS0A4UjAFCKJC5l73j8RQ8taNTw3T9t96Tm3jw?key=kqf6CsQ64ol2ftfsfQ_Cxw)

-   Scroll down to locate a section for managing domains. Click on the 'Add Domain' Button to proceed.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXf3nakV7gv6dqNzTNOTGQ8KzVuIoNjiRz-IOHud53eHZOA49QGbNuFJg_-NaP7Ykc4pQCJ3mu2co-g_3FRAxXZT99Jwnz6FZGCIvaltNwlb70M6lWMrWWNkeXWQS97D4o8J6nnX4w?key=kqf6CsQ64ol2ftfsfQ_Cxw)

**2- Add Your Domain Name**:

-   Enter your domain name. The system will verify if it's already associated with another location or agency.

**![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcB4KzSN9-G6z9BRF05E6nCVW3VAxK5FJsxjFNHTwbEM7GoPdUhhoo00hmTbkdEfXDSc8TF1bubyQTY1vraM8nXfLY8yGnvZTCbz_705SBdOA14ZfHjNPraoVa7XN1jZbOZJ2NWlw?key=kqf6CsQ64ol2ftfsfQ_Cxw)**

**3- Configure SSL Certificate**:

-   Configure your SSL certificate by adding TXT records with your DNS provider.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXd8HeUk-qQknMks1DRldCJZcpIwuCBAThWXT7OoA-nztKJjwXcR-CugUUhTTvRM3DifIkVmtBN9QjU2tDZ66rL47Q7oTmBi3Z62vozU4-ljRazgRo5xMoT2r4r9-D6yPdWrPndBKQ?key=kqf6CsQ64ol2ftfsfQ_Cxw)

-   Once successfully added, proceed to the next step.

**Note:**

-   While most SSL records propagate within an hour, global updates may take up to 48 hours.
-   Set your TTL value to 600 ms or the lowest possible value for optimal SSL record propagation.

**4- Update DNS**:

-   Add your CNAME and A records to your DNS manager. Monitor the status of each step in the Domain/Sub-Domain Dashboard.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeiSav_b6DP1_nF4nXE2XLtDgh4yGJOfr33D5jfg--D1wDJaiAD7VQrxyEf4AWtTkjH4THSoqoOAmXIhZSwmM9XN8WBGc52QM1qUTxEnUkQA7cvY2Pugw6KGTj94kAXFB7y23Hc?key=kqf6CsQ64ol2ftfsfQ_Cxw)

**Note:** If your DNS Provider is Cloudflare, please turn off Proxy Settings

**Adding Sub Domain in WordPress Dashboard:**

Adding a sub-domain follows a similar process to adding a primary domain. The SSL certificate for sub-domains will be verified during the DNS update step, eliminating the need to add TXT records.

**Step 1: Add Your Sub-Domain**

-   Navigate to the domain management section in your WordPress hosting dashboard.
-   Enter the desired sub-domain name.
-   The system will automatically verify if the sub-domain is already linked to another location or agency.
-   If the sub-domain is available, proceed to the next step to update the DNS records.

**Step 2: Update CNAME and A Records**

-   Use the provided CNAME and A records to update your DNS settings with your DNS provider.
-   Once the DNS records are correctly added, click the **'Verify DNS Records'** button to complete the process.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXda5SjIvN9VBpr4WdTYLauz65eY6CMlFPb8gXDkLf2rtmgG1t3R_y98YtKu6HBq9IwWj5wVqogSlgrDSKQ0DibEl_9W5csHOnalA_9yGKevsJupRBY58KtApGnzSzRAbsTQhn9ugA?key=kqf6CsQ64ol2ftfsfQ_Cxw)

**Please note** that if you need to delete and re-add a domain, the process may require some time to complete.

**Please Note:** You can add up to 5 domains or sub-domains. Designate one as your primary domain for better organization.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdIYhFlPLUzZeCRI2bRACEvlqIJTLMCdeVkbmcNxDR8zMIQeu3thB_BeAQ-qN-EWxq7NGGTWFck1kudcRZnBeUOJX-UEpyvrdQWVcVNIGyjdUqdAqDRc-P8U9K8Iw7_SwIq2DJ8Fw?key=kqf6CsQ64ol2ftfsfQ_Cxw)

#### **Benefits**

-   **Simplified Process**: The three-step process makes adding domains easier and more intuitive.
-   **Enhanced Security**: Configuring SSL certificates ensures your website is secure.
-   **Comprehensive Management**: The Domain/Sub-Domain Dashboard provides a clear overview of domain status and management.

#### **Pro Tips**

-   **Verify Before Proceeding**: Always verify your domain name to avoid conflicts with other locations or agencies.
-   **Monitor SSL Status**: Regularly check the SSL issuance status in the dashboard to ensure your site remains secure.
-   **Use the Dashboard**: Take advantage of the Domain/Sub-Domain Dashboard to manage multiple domains and monitor their status.

#### FAQs




**Question:** Can I add multiple domains?
**Answer:** Yes, you can add up to 5 domains/sub-domains and designate one as the primary domain.  




**Question:** How do I switch from www to non-www?
**Answer:** Easily change from www to non-www (or vice versa) with a simple prefix adjustment in the dashboard.




**Question:** What should I do if there's a conflict with my domain?
**Answer:** The system will notify you if your domain is already associated with another location. You will need to resolve the conflict before proceeding.




**Question:** How long does it take for DNS changes to take effect?

**Answer:** DNS changes, such as adding or updating your CNAME and A records, can take up to 48 hours to fully propagate across the internet. While some updates may take effect within an hour, global updates can take longer.




**Question:** Do I need to reconfigure SSL when switching primary domains?
**Answer:** SSL is tied to each domain individually. If you switch your primary domain, ensure that the new primary also has valid SSL configured.




**Question:** If I delete a domain from the dashboard, will I lose my website content?

**Answer:** No. Deleting a domain only removes the "address" pointing to your site. Your WordPress files, posts, and images are safe. You would just need to add a new domain to make the site accessible to the public again.  




**Question:** Why is my site showing a "Not Secure" warning even after I added the TXT records?
**Answer:** This usually means the SSL certificate is still in the "Pending" or "Propagating" stage. SSL issuance relies on global DNS servers recognizing your TXT record. If it has been more than 24 hours, double-check that there are no typos in your TXT record values within your DNS provider.




**Question:** What specific setting must I change if I am using Cloudflare as my DNS provider for my WordPress site?
**Answer:** If your DNS provider is Cloudflare, you must **turn off the Proxy Settings** (ensure the cloud icon is "DNS Only") when adding your CNAME and A records to ensure the domain connects correctly to the system.