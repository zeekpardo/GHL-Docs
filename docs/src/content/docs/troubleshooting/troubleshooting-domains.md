---
title: "Troubleshooting Domains"
description: "MXtoolbox is a popular online tool that can help you check your Domain's DNS records. Follow these steps to use MXtoolbox for checking DNS records:"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/07Y5twyGnOHuEmr0R80p"
sourceId: "07Y5twyGnOHuEmr0R80p"
category: "Troubleshooting"
---

## Troubleshooting Domains

## How to check your DNS records (DNS Lookup Tool)

MXtoolbox is a popular online tool that can help you check your Domain's DNS records. Follow these steps to use MXtoolbox for checking DNS records:

Go to the MXtoolbox website at [**_https://mxtoolbox.com_**](https://mxtoolbox.com/)**_._**

On the homepage, you will see a dropdown menu with options like MX Lookup, DNS Lookup, Blacklists, etc. Click on the dropdown menu and select the type of DNS record you want to check. Some common options include: standard.

**MX Lookup:** Check your Domain's mail exchange (MX) records.

**DNS Lookup:** Check various DNS records like A, AAAA, CNAME, NS, etc.

**TXT Lookup:** Check the text (TXT) records for your Domain, which often contain information like SPF, DKIM, and DMARC records.

**CNAME Lookup:** Check your Domain's canonical name (CNAME) records.  

After selecting the appropriate option from the dropdown menu, enter your domain name (e.g., example.com) in the input field next to the dropdown menu.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeX_H85szVsRCyvbh8Zj9oXsoMm-DNR33i__MQ44ZeoqS-aLk9e0y8BMo7rlZAVmFe4BAsVTrXdgQtpCW5wRoJs2-mm25GbPhSA4PHEWcOEiEN1NpfH6Yn0qpJB-bS-c7Igu5xGR0bcYRMPO-TjdBWH0ttH?key=-9Tp-gFWpDXpAxA_sk5TlQ)

Click the  **"DNS Lookup"** button to initiate the search.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdtQCUKSqVSsFFr1102n4hD3TP03xqjiI-gC8dXDsniiBn-6P1zlBjgr1bHyp33LGMQs7qFdm_Jvl5MDP0AYCXoLZY66Tgra0Cc60gYAaWouHkIWDZRg2XiexOTr8vepdOgrUzIP-m3EV4kcAp89--cMOg8?key=-9Tp-gFWpDXpAxA_sk5TlQ)

The tool will then display the DNS records for the Domain you entered. You may need to scroll down to see all the results.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeW7NFPthGkWsdVzVInDjVkJMtM4Y6heKHXDZy1gT7o3GYVBk8RNvzj97wscH5ZZMWUCOPwA9ru-RseAKLFBmxgi06kJ_WQnVBfntET7m8JtbkdWOE9DQeLh7ZsAWOI4BNn1ItB5dEoIw08MSbG5wYexsqO?key=-9Tp-gFWpDXpAxA_sk5TlQ)

Remember that the DNS records might not be updated instantly if you've recently changed your Domain's configuration. The changes can take some time to propagate across the internet, typically up to 24-48 hours.

## Removing a Domain from the account within

To remove a domain from your account, head to **Settings> Domains andURL Redirects\>** Click on **the three dots** next to the **Domain you want to delete** and click **Delete:**

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdkR3aWF6GeELJQn_PzKki4XIZuLl_a-pZAhp6lqUk7FslPAdriGo1A8ZrHk06Jj51ofa5ISZZolQIiVVujPJINoMaxlCsq9JuHyJfJqTEbpu-Mkdnf5NoImu2PTTbr9BPvx7-Tbw?key=-9Tp-gFWpDXpAxA_sk5TlQ)

### What causes an SSL Error?

An SSL (Secure Sockets Layer) error occurs when there is a problem with the SSL certificate or the SSL/TLS (Transport Layer Security) configuration on a website. SSL/TLS is a security protocol that provides encryption and secure communication between a user's browser and the web server. SSL errors can result from various issues, often indicating that the connection between the user's browser and the web server is insecure.

When you connect your domain, the SSL certification process will be automatically provided by .

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdA0aCK6wo_72PHzaBPwuFmydk6d7cEB152kDP2I1CHSmWfFf0MKC-T8yfU7EO5AIb27lnBQS3AB1gyPCKiseoJq15nMeSprLRoFcnNmHDS5ApHAs7pF5XtzLTJwk6zratP3Ty5AA5F4kq59o6T7315cRz8?key=-9Tp-gFWpDXpAxA_sk5TlQ)

If your Domain is showing a privacy/SSL error, it can be due to one of the following reasons:

-   Multiple DNS (A or CNAME) records exist for the same domain/subdomain. One Domain or subdomain can only work with one platform/server at a time, and that's why you need to have only one DNS record set up for that domain/subdomain.so
-   There is no DNS record added for the Domain
-   There should be only one A record added. If there are multiple A records added, it will create a conflict and generate a Private Connection error.
-   Each domain or sub-domain should be linked to only one funnel/website.
-   The Domain has an AAAA added, other than the A/CNAME record
-   The site has been flagged by a browser for social engineering content. You can check this on a Google browser at [**_https://search.google.com/search-console/not-verified?original\_url=/search-console/security-issues&original\_resource\_id_**](https://search.google.com/search-console/not-verified?original_url=/search-console/security-issues&original_resource_id)

### What causes the error "CNAME / A record not found."

This error occurs if your DNS record is not set up properly or they are added to the incorrect domain host. Use the DNS lookup tool to discover where your Domain is hosted (GoDaddy, CloudFlare, Namecheap, etc.). Make sure to add the DNS record properly and add it to the correct domain host.

**Note:** When you create a DNS record, it can take some time to populate. Wait for a few minutes and then try to add the domain to your account. If it still generates the same error after some time, then delete the previous records that you created, re-add the DNS records, and then add the domain to your account. 

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXd3xiQtsnkgfPa1vx-rZ_54ip8JHfxFGbDQaCP9mbmZ0YneJg5DSMiCDnYENqu3KB3kvV3RoLU5nHAp8ZvPS7_x-cb7CY0PYaBSjSPOkYVEPw_2BgAGf1Cg1Sg1C3Vtm5nizEjWCsEMSDIrp0EXXxNd0lg?key=-9Tp-gFWpDXpAxA_sk5TlQ)

### 404 Error

A 404 error, also known as "404 Not Found," is a standard HTTP status code that indicates the requested web page or resource could not be found on the server. This error typically occurs when a user tries to access a non-existent URL or when the requested page has been deleted or moved to a different location without proper redirection.

If your Domain without any path shows a 404 error, e.g., mydomain.com, you need to go to **Settings > Domains > Edit Domain> Select a default page**. In case it is already selected, try saving it again.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXf9ON4-8yK4Xk8aF_HPxmscylpcRP7oG0st7zXBSx9F2jcddQH0WA0Y9X4gW8x1HY49RBp5r1bDjIRzzna2j6JrctznQK4GnHwUK9Zjqi9Csx-8mCmlav-VqDkgrxh7zUpnDPbmdw?key=-9Tp-gFWpDXpAxA_sk5TlQ)

If your Domain shows a 404 error despite having a default path, e.g., mydomain.com/home, then you need to make sure that one of the funnels/websites that are connected has the same path added in page settings. If the path is already added and it still does not work, then go to the funnel/website settings > remove the Domain> Save> add the Domain again and save.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXerioJY5V2HSRflNYaOGHKZh6ILRQIn4KDzFdU9GUnKqeepR16aLBb2E1qnrYrDsOauGJ8h8eCTqfhER51qJZdIdNfUDa7EUIpdjS4a0iyCyf4YKlZChTBVMO6zf2W0F1f04B5Wuw?key=-9Tp-gFWpDXpAxA_sk5TlQ)

If your Domain shows a 404 error intermittently, then you might be using the www/root domain with your funnel/website. In that case, ensure you have added a redirect from www to the non-www domain or vice versa. Please review our articles on setting up redirection.

**_Please Note:_** _Redirecting with path is only possible with Cloudflare. It will not work with other domain registrars like_ _GoDaddy, Namecheap__, etc__._

### Why do my Cloudflare domains not work with a Proxy?

Suppose your DNS setup is accurate, but you're still getting a privacy error, your funnel/website is not showing images, or you cannot add the Domain. In that case, you need to make sure you've set the proxy status inside CloudFlare to "DNS Only."

When the CNAME/A record has proxy status set to "proxied," it shows an error.

CloudFlare proxy status is only to be set to "proxied" when setting up a redirect (only use this by following the exact instructions mentioned in the steps to set up a redirect)

### Funnel Error Code 500 - Failed to execute 'appendchild' on 'node'. This node type does not support this method

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcSylFYdHImBShwklMc2KfA8VEXB63hRny9S5ijV5Lj46PuAmNrarRrl-g42WZzKncA5fqL5ylezPTqWas3t_iuKlPqTXQ3I9xCu2JWj8r_kZ285jnOk_jpZ9BVyl-TLwM7TX5bVdk-OqgvXKN-Y0D6axs?key=-9Tp-gFWpDXpAxA_sk5TlQ)

1\. [Login to Cloudflare](https://dash.cloudflare.com/)

2\. Click on your domain where you are seeing the 500 error code

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfL2U5lfj5iwJpjE2Vlj5wasWfL3uTSUK-2Wy0dwwGwUlBajy2VcZEg1JPVzTQRiUOBNZ_YEXrVjNwbU5bTPRBe9MiueijGvav8cAgoMoaz7ZQ8c8v7e26DAJpquo-0bzYvMjlVBUrn0_LpuQamGFZW84Y?key=-9Tp-gFWpDXpAxA_sk5TlQ)

3\. Click on the DNS tab within the left menu

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXf1o7wIse5hn9Kogo2bhCr9wGllF4rBSJOsA7lIdb9j_tvMJYRVHiTecUU7ERwLrfJC1HWWWT-E0XVzk1cud5yPtAYA_6YodomFxa87e-5FM1VxnGtXRUsSU1Ix2jlb3Jj8XRl4OUqriz2f5m_Bd8rCjT4?key=-9Tp-gFWpDXpAxA_sk5TlQ)

4\. Click on Edit

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfn5U3XM87B74b-Q3KGmBjhB6TarbJ_ZPb3EB8Vjf0RzaCWm1eBgXwF3c44KrQGZOUbhmhEhA8vsTC3ExNJsd2gzVHK4oO3Ih2zi9O82wT2fdMDFTA2CQuj2-gn8f2l3S5MwDTdRQ-rYKYn7GVH-wSe8e7Q?key=-9Tp-gFWpDXpAxA_sk5TlQ)

5\. Uncheck Proxy status

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfr8_73uNs_z1nrHc_NK--qpT-2fnh8PFXtr6lpWs4m7gtcD4qYPzqdOMfVShiXNGRm_jBkk-8Oou31b4B0Fa2mDni_qzK1jbLKMictVeS_vpqURmThuTbN3UPwY-FRX9N1Txhr_kpQwvKCWoD5FwfRjSVM?key=-9Tp-gFWpDXpAxA_sk5TlQ)

6\. Click on Save

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXd81A_VjLeOkwBcgROkuDFDjRJLLs-LIE1JXXWURHE806Bppu7BXEpvWROWxs6azIIHPn5iYX-dL1-GvRwXrFV6Lpv9MqxHNVv_Ho_YTCSao4TFolfEeB1H6ZZvSoB-8W75CIGZsOx1B-UmhjwUpXK4MYLo?key=-9Tp-gFWpDXpAxA_sk5TlQ)

### FAQs  




**Question:** Can I use the same domain on more than one platform?

**Answer:** No, one domain/subdomain can only be used with one platform/server at a time (WordPress, Wix, etc.)

If you already use mydomain.com with WordPress, use site.mydomain.com with our system or a different domain.

Also, if you're using a domain/subdomain with funnels/websites, it can't be used with memberships or some other feature hosted on a different server.

_Please Note:_ _If you want to use your domain for multiple purposes then use subdomains: blog.yourdomain.com, membership.yourdomain.com, app.yourdomain.com, etc._




**Question:** Do I have to purchase SSL for the Domain separately?

**Answer:** No, our system generates SSL automatically once you've added the Domain successfully. You don't need to purchase it separately.




**Question:** Can I buy a domain from you directly?

**Answer:** Absolutely! offers users the ability to purchase domains directly from within the system. Navigate to Settings > Domains and click on Purchase a domain to buy a domain. Please see the article “How to Purchase a Domain” for more information.

![](https://assets2.modalsupport.net/1766156730419-image3.png)




**Question:** How many funnels/websites can I connect with one Domain?

**Answer:** You can connect as many as needed within . There is no limit.




**Question:** What causes the Funnel Error Code 500 related to Cloudflare?

**Answer:** This occurs if the CNAME/A record is proxied incorrectly. Fix it by logging into Cloudflare, editing the DNS record, and unchecking Proxy Status before saving.




**Question:** How many funnels/websites can I connect to a single domain?

**Answer:** You can connect multiple funnels/websites, but each domain/subdomain can only point to one platform at a time. Use subdomains if needed for multiple features.




**Question:** How do I remove a domain from my account?

**Answer:** Navigate to Settings > Domains and URL Redirects, click the three dots next to the domain you want to delete, and select Delete.  




**Question:** Why is my Cloudflare domain causing a "500 Error" or not showing images?  
**Answer:** This is almost always caused by the **Cloudflare Proxy (the orange cloud)**. For our system to manage the SSL and routing correctly, the Proxy status must be set to **"DNS Only" (Grey Cloud)**. The only exception is when you are setting up specific URL redirects as instructed in our advanced guides.




**Question:** Does an AAAA record interfere with my domain setup?

**Answer:** Yes. If an AAAA record exists alongside your A or CNAME record, it can cause SSL and connectivity issues. You should remove the AAAA record to ensure the domain points only to our system's server.