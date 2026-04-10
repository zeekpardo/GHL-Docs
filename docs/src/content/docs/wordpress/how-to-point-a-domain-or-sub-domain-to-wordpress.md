---
title: "How To Point A Domain or Sub-Domain To WordPress"
description: "You may want to use WordPress to integrate with . If you are setting up a new WordPress website, migrating over an existing one, or you want to add additional…"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/zF96YkPA6tE4vYgnQ7Gp"
sourceId: "zF96YkPA6tE4vYgnQ7Gp"
category: "WordPress"
---

You may want to use WordPress to integrate with . If you are setting up a new WordPress website, migrating over an existing one, or you want to add additional domains, you will need to configure the DNS to point to your WordPress. Follow along to learn just how to set this up:

The first step is to purchase your WordPress subscription under Sites > WordPress, and then create your site. Once you’re done setting up your site name and user details, you will see the dashboard where you’ll get the following options:

-   Set up a staging environment
-   WordPress site and admin access (URL)
-   Manage Domains & Sub-domains
-   Import your existing WordPress site (using the plugin “[All-in-One WP Migration](https://wordpress.org/plugins/all-in-one-wp-migration/)”)

## Adding a new Root domain as your Primary Domain

Click on the “Add domain or sub-domain” button  

![](https://lh7-us.googleusercontent.com/so3Tpy0ec7FnkP324-2uaGyPTaUdZn3mirE9ZPufGNnNSXlOkHS12j6fKrrO6dP8ReyOQzmoRkIcQtSQpTBOMTPLGiAOGlxfyshp2xalR71oaXewsfr0yxolDwwGAUTtrR9ZHRyzG6a3mRxzNjrsPI0)



Now enter the domain name that you want to connect with your WordPress site

![](https://lh7-us.googleusercontent.com/uxtCfy_5b2Vqh88kHBNKJVVHEFjXJA320oS1d2QFLwuAozBIe6d9nco789JjdKB5iBC5zgk_phSJDCaClemd9xhGGU1lD7wtaDcSB3eQEwM0z1xAYr0AUZw0UAI3F6VevHxnZxM2JZ0ahPcPNm3EKpI)



After entering the root domain, once you hit the ‘Add Domain’ button, it will give you the option to add 2 TXT records

![](https://lh7-us.googleusercontent.com/B-ehcffoqeOr7X6v6Wib5-JEmDn_PjoChxwWY-FDRm4oG5irqvKoIIbRCTe110dQyaOdciudHDfSaXPecA9jjUm_ZtK6A1BU-3Uetpuzi1nb6D3GRObKtftdtR2ljumwYSVCV_1KGE4SsTVPxgt2Ve4)



Add these 2 TXT records to your domain’s DNS records.



Now add the A record to your domain’s DNS records.

![](https://lh7-us.googleusercontent.com/WyDhNEqTRYPedrwWqp9rrwRyPU8JDJs2oNlGRL-udGzm6V17d1mTzPw3NjZUG3V42nSCmD2qsWUrsqjSgIQ7hfo8pi8ZxvcyCqNJSWFp7V1_HtPPUlqm2pnLQd_74K43OCPzrASQUnhJFVy55D18WQU)



**Please Note:**

If you are using CloudFlare, please make sure to disable Cloudflare Proxy and switch the Proxy status to DNS only.



Once done, check the checkbox that reads “I have added the above records in my domain provider's DNS settings” and then click on the “Verify Records” button



Once configured the Domain will be set as your Primary Domain by Default.

## Adding the WWW domain

Now to set up the www version of your domain, click on the ‘Add Domain’ button again and add the www domain. The www domain is added by the system when you add the root domain, so it will show you the CNAME record that you need to add to your domain’s DNS records

![](https://lh7-us.googleusercontent.com/bOHCoKr7S2h5Bl7Q4hTdJqkuGdc84uaGvRoJn6eauL5FWKqd8ALaBEAbQw7w6v_gxLUUDeEQCdEyeIaqe45YxzLb1JMHOfp52Sc90e8W5rFj2j_YScY4jC7E0DHVxAtxGbaN3dOWWRtXZre7wrwaOyY)

Once this record is added, the www domain will also start working.



## Adding a Sub-Domain

To add a subdomain, you need to follow the same steps as the root domain. However, this time the system will provide you with 2 TXT and 1 CNAME record instead of A record.



For the first domain that you add, you will always get 2 TXT records along with an A/CNAME record. For all the additional domains, you will only need to add a single A/CNAME record.



If you’re adding your subdomain as an additional domain, the system will provide you a record to add like shown below

![](https://lh7-us.googleusercontent.com/FezdxG58eSXiX4_2DAYOcf06ouf6uI1AjsLAzZp211SceipAbsx6rIPkK50zJXsTa_gMB8z1N0A82iTvKhH_aIizcEqxzeefZZ1IhV3jEwYeFxXoCX34R3LgiPMt_ghxnV7tJzuFJh-hD9las8puteg)

Once you’ve added this record, your domain will be connected to the system.

## How to Change Your Primary Domain

The primary domain is your main domain that every other additional domain points to. For example, if you set rootdomain.com as your primary domain, and add a subdomain go.domain.com as an additional domain, then whenever you type go.domain.com, it will automatically redirect to the primary domain rootdomain.com



Once you’ve added an additional domain, you can set that as your new primary domain if needed. To do that, you just need to click on the three dots right next to the domain and choose the option “Make as Primary Domain” as shown below

![](https://lh7-us.googleusercontent.com/eTucrHbxL9Ht8c7wFhjcwY-TPndIbJ4-WRRY_bClJA8O9mLO5KeLXiTLD2KgmT8yDLN9nlrAOAs8Nli8uCn8flPCQvpez-JefvH_5uBxMzKK83Ek_NivxFTBnsL4G5_mlkiLjVl2MZLwYMAL474AXS8)

## Linked Articles for some Domain Registrars

1.  [How to add a CNAME Record in CloudFlare](https://community.cloudflare.com/t/how-do-i-add-a-cname-record/59)
2.  [How to add a CNAME Record in Domain.com](https://www.domain.com/help/article/dns-management-how-to-update-cname-aliases)
3.  [How to add a CNAME Record in BlueHost](https://my.bluehost.com/hosting/help/resource/714)
4.  [How to add a CNAME Record in HostGator](https://www.hostgator.com/help/article/how-to-change-dns-zones-mx-cname-and-a-records)
5.  [How to add a CNAME Record in GoDaddy](https://ca.godaddy.com/help/add-a-cname-record-19236)
6.  [How to add a CNAME Record in NameCheap](https://www.namecheap.com/support/knowledgebase/article.aspx/9646/2237/how-to-create-a-cname-record-for-your-domain/)



**Please Note:**Some domain providers take 24 - 48 hours to propagate DNS changes while others are instant. You can use tools like [https://dnschecker.org/](https://dnschecker.org/) to check if your DNS changes are propagated or not.