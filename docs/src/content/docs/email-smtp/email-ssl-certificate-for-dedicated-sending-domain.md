---
title: "Email: SSL Certificate for Dedicated Sending Domain"
description: "Email: SSL Certificate for Dedicated Sending Domain"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/Xo3bVyoTtrrsjmT8y9cp"
sourceId: "Xo3bVyoTtrrsjmT8y9cp"
category: "Email & SMTP"
---

**Email: SSL Certificate for Dedicated Sending Domain**

When sending out email links from a custom domain in email, it's essential to ensure you have generated an SSL certificate by verifying the domain beforehand. Failure to do so will result in a broken link when a recipient tries to open it.

In this article we will explain the process to successfully send email links:

**_\*NOTE:_** _You will need to ensure you follow these steps for any link whatsoever when using email or it will result in broken links._


We support enabling the HTTPS protocol on open, click, and tracking URLs. We utilize Let’s Encrypt with HTTP-01 challenges via your existing tracking CNAME record to issue a TLS certificate.

_(You can get to this screen by going to "Settings" > "Email Services" > click on the "Dedicated Domain And IP" button on the right side of the screen.)_

_![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfcCZIY890jB31iEm7QzuKP4hrfmudKNhNsHY41snO40HnnWuQ71UkjcUEjXzPd464f06orZM3URZ2zrLdWol2fx-bd7p8pcg1y_LGXyrNYfyrbd-yY-TrGBb_gWWvdIh9uYJfgxw?key=0wkyxUe5gtYHzRk_0OHEeg)_

By default, when a domain is created and verified, an SSL certificate will be issued. 

### **There are three statuses in SSL:**

**1\. SSL Issued:** SSL certificate was successfully issued to your domain.

**![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcCnqZ3a6IAdLiM1aZ5wHaL9yXZNmCtOgDTZ2gMqgNGvz1SwvugfuwY9DL6FX1qqXSTI01SOTpqTylOwtoFIZ_dhf2oLDS2nEbhqoDnubsMYGQ3FBpMVNXDZfmSX82DG6S4p3KolDDrgM8DaALpZz0xUa6q?key=0wkyxUe5gtYHzRk_0OHEeg)**

**2\. SSL Pending:** Generate SSL certificate was in progress and not issued

**![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfG38-uX1PFKVuUnfvRn4LNBv1bAv0H26PoqLKTZgmdznb2cgbHVfMR_cprNKbBQ0tzz0ZU39GV3Icn_WZMYh9T8fZl2IqGe2QcYtqX2zrVyabszzjV62mK8MCtLO-sxWG_KxQiFc2NPz8YbnlCxTen36aw?key=0wkyxUe5gtYHzRk_0OHEeg)**

### **What should you do now?**

Verify the domain again by following the steps:

-   Click the "**Verify Now**" > you will be redirected to the domain DNS page
-   Verify that all your records are verified
-   Hit the "**Verify domain"** button to issue an SSL certificate.

**3\. SSL Unknown:** SSL was not generated and not issued.

**![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXccSF0G1zTAY7g9FAiyEQkBut1QGbvVAgaeycQlEbRwWfk0H64nOhWcaqZfcAW2NKxuPemFHLhA6yp4k6mMa3ds0N9fuKeU2YSF71r3IOjr40ZpQfm-1HEzPYWxbitYJslaFzOG7JezF4VZp0y2AC8lHUCV?key=0wkyxUe5gtYHzRk_0OHEeg)**

### **What should you do now?**

Verify the domain again by following the steps:

-   Click the "**Verify Now**" > You will be redirected to the domain DNS page
-   Verify that all your records are verified
-   Hit the "**Verify domain"** button to issue an SSL certificate.

### **Pro Tips**

1.  **Check SSL Status Regularly**: Regularly monitor the SSL status for your custom domain to ensure that certificates are issued and renewed properly. This helps prevent issues with broken links and ensures secure connections for your recipients.
2.  **Verify DNS Records**: Before reattempting to issue an SSL certificate, ensure all DNS records are correctly set up and verified. Incorrect or missing records can delay or prevent SSL issuance.
3.  **Utilize HTTPS Protocol**: Always use HTTPS for open, click, and tracking URLs. This not only secures the link but also helps maintain trust with your recipients by ensuring a secure browsing experience.

### FAQ




**Question:** What do I have to do when my email link URL gets broken?

**Answer:** Navigate to your domain and verify the domain again.  




**Question:** What happens if I don't generate an SSL certificate for my custom domain?
**Answer:** If you do not generate an SSL certificate for your custom domain, links sent via email will be broken when recipients try to open them. This can lead to a poor user experience and decreased trust in your email communications.  




**Question:** What do I have to do when I get this page error? This site can't provide a secure connection.
**Answer:** Navigate to your domain and verify the domain again.  




**Question:** What should I do if my SSL status is "SSL Pending"?
**Answer:** If your SSL status is "SSL Pending," it means the certificate generation is in progress. Verify your domain by going to the DNS page, ensuring all records are correct, and then click the "Verify domain" button to complete the SSL issuance process.  




**Question:** How can I resolve an "SSL Unknown" status?
**Answer:** To resolve an "SSL Unknown" status, follow these steps: Click "Verify Now" to access the domain DNS page, check that all DNS records are properly set up, and then click "Verify domain" to attempt to issue the SSL certificate again.




**Question:** Why does verifying my domain fix SSL issues?

**Answer: Domain verification confirms ownership and allows the system to issue a TLS certificate via Let’s Encrypt. Without verification, SSL certificates cannot be generated.




**Question:** Can incorrect DNS records affect SSL issuance?
**Answer:** Yes. Missing or incorrect DNS records will prevent SSL certificates from being generated. Always double-check your DNS setup before verifying the domain.  




**Question:** Do I need to repeat this process for every email link I send?
**Answer:** No, once the SSL certificate is issued for your custom domain, all links sent from that domain will automatically use HTTPS and remain secure.




**Question:** What technology is used to issue the SSL certificates, and which protocol is supported for tracking links?

**Answer:** The system uses Let’s Encrypt with HTTP-01 challenges to issue TLS certificates. This allows for the support of the HTTPS protocol on all open, click, and tracking URLs.




**Question:** What specific DNS record does the system use to issue the TLS certificate via Let’s Encrypt?
**Answer:** The system utilizes an **HTTP-01 challenge** through your existing **tracking CNAME record**. This process allows Let’s Encrypt to verify domain ownership and successfully issue the certificate required for secure HTTPS tracking link