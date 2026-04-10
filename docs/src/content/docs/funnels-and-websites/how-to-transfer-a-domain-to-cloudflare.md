---
title: "How to Transfer a Domain to Cloudflare"
description: "In this article, you will learn how to transfer your domain Nameservers to Cloudflare."
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/N4SPaNtphBLnnHT0L7sJ"
sourceId: "N4SPaNtphBLnnHT0L7sJ"
category: "Funnels and Websites"
---

In this article, you will learn how to transfer your domain Nameservers to Cloudflare.

### **Step 1: Add Site**

-   In your Cloudflare account, select Add Site 
-   Input the domain you'd like to add 
-   Select the preferred payment plan for the domain (Free is a great option) 
-   Wait for Cloudflare to scan for DNS records.

**Please note:** Before transferring your domain, create a Cloudflare account and ensure that your domain is added to your Cloudflare account.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfdKa93iQzFAo-0Li-LHuNDRbaBNgg-xhd1wKGY65OwYjLYUUoF58gtiyqIM0nRjv6VO47ZtVW73n7OjgQa2d-3gtnzddC1wW8cavyCA2Xdw9z56NEhf0l2257TWZ1n3vpT62wgWMQvurE5ED_xPw2Gv88?key=-gKtx0AOGGvR6qaVUPz7aw)

**Note:** Review your DNS records in the Cloudflare dashboard to ensure everything is accurate before proceeding with the transfer.

### **Step 2: Update Nameservers**

-   Once the scan is complete, click "Continue" and change the provided nameservers on your domain registrar to point to Cloudflare. 

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfJpuKmHHQBlpGq0rv1QYEAKir9YcLNTZmiiJDl_1Wk5EZKb4c1EU2optVXj0yUUE5HkQWKXqaqzs6RQdIGITPx92M90TB3zFQBrzWa0J4HfS6xXkBSbJlgDJqrFjLTzYbGW6MbvWfuvUiwX97f-TySLQ?key=-gKtx0AOGGvR6qaVUPz7aw)

-   After you've clicked "Done, check nameservers", as long as everything was input correctly, you are good to go!

**Note:** Please ensure the Proxy status is set to **DNS only** as we do not support Cloudflare Proxy when adding domains to Settings > Domains.

**Pro Tips:**

-   If DNSSEC is enabled at your current registrar, make sure to disable it before transferring, as it may cause connectivity issues when changing nameservers.
-   Ensure your domain is unlocked at your current registrar. This is necessary to allow the transfer process to proceed.
-   Request an authorization code from your current registrar. Cloudflare requires this code to confirm and initiate the transfer.
-   ICANN rules prohibit transferring a domain if it has been registered or transferred within the last 60 days, or if the WHOIS registrant contact information was modified in the last 60 days.
-   Ensure that your account has a valid payment method on file with Cloudflare. Cloudflare will only bill your card when you input the authorization code and confirm the contact information after your transfer request.
-   Be aware that premium domains, internationalized domain names (IDNs), and domains with certain statuses like serverHold, pendingDelete, or pendingTransfer are not eligible for transfer to Cloudflare.
-   After the transfer, you may need to manually configure your DNS records to correctly point traffic to your web host. Cloudflare attempts to scan and add common records but may not catch all existing DNS records.

**Frequently Asked Questions**

**1\. What are the steps to transfer my domain to Cloudflare?**To transfer your domain to Cloudflare, first, add your site by selecting 'Add Site' in your Cloudflare account and input the domain you wish to add. Then, update the nameservers at your current registrar to point to Cloudflare. Ensure all steps are followed correctly, including disabling DNSSEC, unlocking your domain, and obtaining the necessary authorization code from your current registrar.

**2\. Why do I need to disable DNSSEC before transferring my domain?**DNSSEC must be disabled before transferring your domain because it can cause connectivity issues when changing nameservers. If DNSSEC is enabled during the transfer, it may prevent Cloudflare from correctly managing your DNS records, leading to potential downtime or errors.

**3\. How do I unlock my domain for transfer?**Unlocking your domain is a crucial step to allow the transfer process. You can usually unlock your domain through your current registrar’s dashboard, where you’ll find an option labeled ‘Registrar Lock’ or similar. Ensure the domain is unlocked before starting the transfer to avoid delays.

**4\. What are the restrictions for transferring a domain to Cloudflare?**Cloudflare cannot transfer domains that were registered or transferred within the last 60 days, domains with recently updated WHOIS registrant contact information, or domains with certain statuses such as serverHold, pendingDelete, or pendingTransfer. Additionally, Cloudflare does not support premium domains or internationalized domain names (IDNs).

**5\. What should I do if my DNS records are incorrect after the transfer?**After transferring your domain, you may need to manually configure your DNS records in Cloudflare to ensure they point correctly to your web host. Cloudflare scans for common records, but it may not catch all existing records. Refer to your web host’s documentation for the correct DNS settings, and update them in the Cloudflare dashboard to avoid downtime.

**6\. Do I need to prepare my domain before initiating a transfer?**  
Yes. Ensure DNSSEC is disabled, the domain is unlocked, and you have obtained the authorization code. Also, check your WHOIS info and account payment method for compliance.