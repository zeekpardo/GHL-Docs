---
title: "Email: How to Set Up a Dedicated Sending Domain"
description: "How to Set Up a Dedicated Sending Domain"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/UOV0kJRMTVuJH0wCaRYq"
sourceId: "UOV0kJRMTVuJH0wCaRYq"
category: "Email & SMTP"
---

**How to Set Up a Dedicated Sending Domain**

Email marketing is a great way to reach customers and increase sales. But if you're not careful, you could end up in trouble. A dedicated sending domain gives you control over what appears to be coming from your business. That means you can avoid spam filters and other issues that might make your messages get caught by unwanted mail servers. Don't let your email marketing efforts go unnoticed! In this article, we will start setting up a dedicated sending domain.

**_Note:_** _Dedicated sending domains only apply to the users in the_  

**_Email System._**

**_Note:_** _If you're using a new domain that hasn't been used for email before, be sure to warm it up before sending emails to a large list. Skipping this step can lead to poor deliverability._

A dedicated sending domain allows you to send emails that appear to be coming from your brand, and this can help you maintain a better reputation with email services.

By default, all emails sent from our platform will show the name of our email-sending servers in the "**sent on behalf of**" or "**sent via**" email headers:

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcFsyvYMlW6zpQyucGo3fIqZ0qNk2Ba9uTkCbPpOaA_5-rPSK3LdGbEPN02ZCiYMkJbhLRssqe2IWx4DU8YZoftMTnGoT2y8zeBmGcEFdDifFrdsew-569MYLjXOtUF0Kpprsc6JA?key=rvZvhCnzCZonrcmO2YQjAg)

When you set up your custom mail server domain, you will see a different "**mailed-by**", "**sent on behalf**", or "**sent via**" field.

It would be best if you used a unique subdomain that is not used for any other purpose. A subdomain is a secondary part of your root domain. For example, if your dedicated sending domain is hello@mg.yourbrand.com, your subdomain would be the “mg” portion.

If your sending domain is listed below, you are using the LC Email system default domains.

-   mg.msgsndr.org
-   mg.msgsndr.net
-   replies001.msgsndr.com
-   replies.msgsndr.com
-   replies000.msgsndr.com
-   ec1.msgsndr.org
-   ec1.msgsndr.net

## **How to create a dedicated sending domain?**

1- Navigate to **Settings** - > **Email Services**

2- Click the '**Dedicated domain and IP**' button.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdLTcjidzBKbvBE3U7QcdXvDN-rYO8gRaIvnTmKRE0Hxd8OJNUwgJdRokeyCWSdXLz0CkULdZvkj3RtHWPielks6am7Vc32LIAUD5QArAJZNY8k6E1BOYoDqfizmaxvvbRQKC0IHA?key=rvZvhCnzCZonrcmO2YQjAg)

3- Add your domain details

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeeC0s5tKcCMV5bOVDisphxt2h08bhveLm1vZ9sJry31kxzhcx4BLgOLN_yVIUmZEy9-pNZqP9mpGXkJcdS7AkoOL4iYjx7FC_PkVlMygquNwjrQIvHqaGCBOMhE8XC6ae72YHMVw?key=rvZvhCnzCZonrcmO2YQjAg)

4- After adding your subdomain, you'll need to verify your DNS records. You can choose to let auto-configure them or manually enter the records yourself.

If cannot configure the DNS records automatically, you'll need to add them manually.

**Important:** DNS propagation can take up to 24 hours. If it exceeds this timeframe, review your DNS settings and follow the steps outlined above.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcyAGFCsY1QG9jVLdFckpFIQfO433S2zaOhtbxHM-z5BBKwI3R6G2LgiL0MutUMGbOvrM5Et5wG4PBCWBcHuKFidHeebUA79d32mWYwO9Bb3ewDBAka7q0ciCNzcqtn_N2graoSdw?key=rvZvhCnzCZonrcmO2YQjAg)

**Manually Adding DNS Records**

To manually add your DNS records, navigate to your hosting provider's dashboard where you manage your domains. will provide specific details, similar to the image shown below, which you'll need to use when creating your DNS records.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfl6XlxoM9ELx9a1SqnN-E9oBpOCs67P7YYERnhBqDVUeYn3fp2IcIYp6E9Gb7pBEW6g3rfDXafAb3QL9EFM2jEELgxJLA1ah2YPDmEjoRH4fk8R5Dx8km4VtbAc01vy2H1CV-OVQ?key=rvZvhCnzCZonrcmO2YQjAg)

5- Click any of the links below for instructions for some common DNS providers:

[**_GoDaddy_**](https://www.godaddy.com/help/manage-dns-zone-files-680)  
[**_Hostgator_**](https://www.hostgator.com/help/article/manage-dns-records-with-hostgatorenom)  
[**_Hover_**](https://help.hover.com/hc/en-us/articles/217282457-How-to-Edit-DNS-records-A-CNAME-MX-TXT-and-SRV-Updated-Aug-2015-)  
[**_Namecheap_**](https://www.namecheap.com/support/knowledgebase/article.aspx/9214/31/cpanel-email-deliverability-tool--spf-and-dkim-records/)  
[**_Squarespace_**](https://support.squarespace.com/hc/en-us/articles/205812348-Opening-Advanced-DNS-settings)

[**_AWS_**](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resource-record-sets-editing.html)  
[**_Cloudflare_**](https://developers.cloudflare.com/dns/manage-dns-records/how-to/create-dns-records/)  
[**_Bluehost_**](https://www.bluehost.com/help/article/dns-management-add-edit-or-delete-dns-entries)  
[**_Hostinger_**](https://www.hostinger.com/tutorials/how-to-use-hostinger-dns-zone-editor)  
[**_InMotion_**](https://www.inmotionhosting.com/support/domain-names/create-cname-record/)[**_Hostwinds_**](https://www.hostwinds.com/guide/how-to-change-cname-record/)

### **Integration for Existing Dedicated Sending Domains**

Users can add and manage their existing dedicated email-sending domains directly within , even if the domain is currently in use with another provider. 

**Note:** If your domain is already registered with Mailgun, you will be blocked from adding it to avoid conflicts.

### **Troubleshooting Dedicated Sending Domains**

While setting up your dedicated sending domains, you may encounter issues that can often be resolved without contacting support. Below are some common problems and their solutions.

#### **Error Message: 'Domain already pointing to email server!'**

If you see an error stating that your domain is already pointing to an email server, it means your domain has existing DNS records linked to another service. To connect it to your account, you’ll need to disconnect it from the previous service.

Any existing **MX or SPF records**, even if they belong to , will prevent the system from accepting the domain. These records must be removed before proceeding.

You can check your domain’s MX and SPF records using various online tools. A free tool for MX and SPF lookup is available here: [**_MXToolbox SuperTool_**](https://mxtoolbox.com/SuperTool.aspx)**_._**

### **Setting a Dedicated Sending Google and Yahoo Email Domain**

Starting in 2024, Google and Yahoo have new requirements for their Email Domain:

-   You must have a dedicated sending domain
-   It is not recommended to use your root domain, we recommend using a subdomain

_Root domain vs subdomain__Everything to the left of your root domain is your subdomain._

**_Example:_** website.com (root) vs **communication.**website.com (subdomain)

-   **Do not use:** Do-Not-Reply.yourdomain.com, lc.yourdomain.com, mg.yourdomain.com, email.yourdomain.com, or mail.yourdomain.com. These generic subdomain prefixes will cause deliverability issues
-   Examples of unique subdomains: communication.yourdomain.com, support.yourdomain.com, eric.yourdomain.com

After you’ve added the 5 required records, you’ll need to add a DMARC record. Follow the below steps:

-   Inside the domain's DNS Records (we recommend managing them on **CloudFlare** add a new record with the following information:

Type

TXT

Name

\_dmarc

Content

v=DMARC1; p=none; rua=[mailto:clientemail@theirdomain.com](mailto:clientemail@theirdomain.com) (replace with the desired email that will get the reports)

-   Save and verify

Below is an example of what part to replace with your own sending domain email:

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcTroOOMLYcdSuKAjapoNfbxEDZmbEeWqWqD4GNFntBwfDMDS3LfOkPEms-m0IaFyK32HE72fOYfFmhdRszeHKENlaNKBFdMOWpbCKTG8gRmmRy5KqDbLebhazuVSTf0-yAhJVUTb1PErgNb9Pi0alrORJA?key=rvZvhCnzCZonrcmO2YQjAg)

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeptyOieJU1ZBuHM_l_fFG7OYB4I8iZ5IBdHdiEnUdyHnsFolh9Tt3gqwx2eXHpeAcwVH72LzJ9_kfuPO_XXd1oZrc1YtsUQlLcAqOOwcYVSzAAqpLJNtbe3v8hqy435ZwuJzGVZEAxUwxhGJgjxDlU85BA?key=rvZvhCnzCZonrcmO2YQjAg)

**Note:** If you are using **GoDaddy**, then, when making the TXT record, if you use a subdomain as your sending domain (which is recommended), you need to include the prefix of the subdomain on the Name of the record.

Type

TXT

Name

\- If using the root domain **(not recommended)**: \_dmarc.  
\- If using a subdomain **(recommended)**: \_dmarc.subdomainprefix  
(replace with set subdomain prefix, if reply.yourdomain.com was used, use \_dmarc.reply)

Content

v=DMARC1; p=none; rua=mailto:youremail@yourdomain.com  
(replace with the desired email that will get the reports)

## **How to delete a domain?**

-   Navigate to **Settings** -> **Email settings** -> **Domain services**
-   Click on the **three dots** and click the delete button.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfKr2jQ72JKkaqmxsNxvQaDHUlzwkV5DDULfWfRLO4pMw18vGyDa1o0Yc-VXmeRyqlsjsMEuRTSX2E18gTbWS_EdkUd0DJn69qaYskyIbvNWFH6dqRGvmuL7CA-ewlPWNj9FHJo?key=rvZvhCnzCZonrcmO2YQjAg)

## **How to set a dedicated domain as active/default?**

-   Check the checkbox to make it active/default

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeEw2u4ge0qzlBlOcPimQUelXD89ysBWMLB8TkYwGPsgXtaMNgXCYOKNCtH82M33eYZxQGs5m3v6J9c8PltSkbW-Xj04SpyNpYTRIyoSk8HgBa30oHmP9lImWyTJQ-gQrO45mx3Eg?key=rvZvhCnzCZonrcmO2YQjAg)

## **How to set up a dedicated sending domain for Targeted Email Categories?**

-   Navigate to Settings - Email Service 
-   Click on SMTP Service - Dedicated Domain and IP 
-   Click on Domain Configuration

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdmUlIUu_hOuEUaGLYDCHHe7inXR5vDuNWX9zHA_qfE0ywAvM8qKYP5waD0IsQfRCkRFT8XeMkXM8X71MRGqq5PMAcsmx_mduhXjto9TxOP6mDvJeB2tB_BwuitSat9z801K6LVVA?key=rvZvhCnzCZonrcmO2YQjAg)

**Note:** Currently domains can be assigned to One-One Conversation and Workflow emails.

The default dedicated domain will be users for all other emails like Campaign, Bulk

## **How to set up a default header for a dedicated sending domain?**

You can set up default "From address and Email" for dedicated domains under your account.

-   Navigate to Settings - Email Service 
-   Click on SMTP Service - Dedicated Domain and IP 
-   Click on Set headers under a dedicated domain.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdirfSvJCBvzBKNkuQ8-60GWBlcQFqbMTvStlzYvuIOkQ8fAnYUknTVrxXs6AKiRTUXc3Xy_I4algXNxa0AyWfzC0Gr3LIDz7d9_JN_xih5WkBYWOSyhAv2egWoUx91PjfH0AlkCsvZ_ctHCROcojqDRW2j?key=rvZvhCnzCZonrcmO2YQjAg)

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeFknfDQqf_GLDXYEIwL-KNLJGKulDS1MeS7pegsBdqNNjWTjDQRXZublL0jJD_e1QWRcDT-SpTgtCnEgy1pZW7N5DHSPi8R6oMAjcjhBhcwHwFdiUrMmJG2hL04NkJAm9ID5Uc4K9mmCf2r-1UiTHaCoqS?key=rvZvhCnzCZonrcmO2YQjAg)

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcgMEuW8SAs_cxl6wPh7gjAKnVqerRYM4R_guZtweyss2fvkgaQIah8K3FiMZbAfdlriRmLxpMbnBnrIFbIHwWh1y2upqFGo_Szj2sZuw901bKHOe-VypykOrYVSdLTdn_RcgHdblemhI2ecLUukCKGZzY?key=rvZvhCnzCZonrcmO2YQjAg)

**NOTE:**

Unsubscribe Header Integration:

An unsubscribe option is included in the email header, allowing recipients to easily opt-out of communications without marking the email as spam. This setting is automatically integrated into email headers, requiring no additional action from the user.

## **Points to Remember**

**Professional Email Address Requirement:** From 2024, it will be essential to use a professional email address (such as those provided by Google Workspace or Microsoft 365) for sending bulk emails. Free email services like Gmail, Outlook, or Yahoo will not be suitable for such purposes due to the inability to alter necessary email settings.

**DKIM, DMARC, and SPF Records:** The importance of setting up DKIM (DomainKeys Identified Mail), DMARC (Domain-based Message Authentication, Reporting, and Conformance), and SPF (Sender Policy Framework) records for your domain is more than ever before. These are crucial for email authentication and help in preventing emails from being marked as spam.

**Email Content and Sending Patterns:** Start the practice of maintaining consistent sending patterns and ensuring high-quality email content. Sudden changes in email volume or poor content quality can trigger spam filters, affecting email deliverability and domain reputation.

**Unsubscribe Links:** There is a requirement to have a one-click unsubscribe link in emails. This is expected to become a standard practice, ensuring that recipients can easily opt out of email communications.

**Verification of Domain:** Verifying the domain used for sending emails is now necessary. This adds a layer of authenticity and trust to the domain, improving email deliverability.

**Avoiding Cold Email Lists:** Practice caution against using cold email lists or sending bulk emails to unengaged recipients. This practice can harm domain reputation and lead to emails being marked as spam.

**Custom Reply-To Address:** The system permits the addition of a custom reply-to address in email settings. This ensures that responses from recipients are directed to a specified address, improving communication efficiency. Users can add a specific reply-to address in the email settings section, ensuring that all responses are directed appropriately.

## FAQs




**Question:** How do I choose a sending domain name for my account?

**Answer:** It’s recommended to use a unique subdomain that isn’t being used for any other purpose. A subdomain is a secondary part of your main domain. For example, if your dedicated sending domain is **hello@mg.yourbrand.com**, the subdomain in this case would be **"mg"**.




**Question:** What should I do if some of my domain’s DNS records are not verified yet?  
**Answer:** You’ll need to manually force the verification process. If the records remain unverified after doing so, you may need to contact your hosting provider for further assistance.




**Question:** How do I generate an SSL certificate for dedicated sending domains?

**Answer:** Once your domain is verified, the SSL certificate should be automatically generated. If the domain appears as verified but lacks an SSL certificate, try re-verifying it by repeating the verification process. If the issue persists, reach out to your hosting provider to check for domain-related issues or to request help generating the SSL certificate.  




**Question:** What should I do if I encounter an error stating "Domain already pointing to email server"?
**Answer:** This error occurs when your domain already has existing DNS records linked to another service. To resolve this, disconnect your domain from the previous service by removing any MX or SPF records associated with it. You can check these records using online tools like MXToolbox. Once the records are removed, you should be able to proceed with adding the domain to your account.




**Question:** Will unsubscribe links be added automatically to my emails?

**Answer:** Yes. An unsubscribe option is automatically included in email headers to meet compliance requirements and reduce spam complaints.




**Question:** Does the system automatically add an "Unsubscribe" link?
**Answer:** Yes. To comply with modern regulations, the system integrates an **Unsubscribe Header**. This allows recipients to opt-out easily via their email interface (like the "Unsubscribe" button at the top of Gmail), which is much better for your reputation than the user clicking "Report Spam."




**Question:** Are there specific subdomain names I should avoid?

**Answer:** Yes. You should **avoid** generic prefixes like _mg._, _lc._, _email._, or _mail_. These are frequently used and can lead to lower deliverability. Instead, choose something unique like _support.yourdomain.com_ or _https://www.google.com/search?q=hello.yourdomain.com_.