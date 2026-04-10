---
title: "How to Add a Meta Tag for Google Search Console Domain Verification"
description: "A meta tag for your Google site verification must be added to the ‘Default Page’ connected to the domain."
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/q4CaTrlwQqdABqxklzTP"
sourceId: "q4CaTrlwQqdABqxklzTP"
category: "Funnels and Websites"
---

A meta tag for your Google site verification must be added to the ‘Default Page’ connected to the domain.

### Step 1: Determine the Default Page

-   Navigate to Settings > Domains and URL Redirects.
-   Select the particular Domain.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXe3Vuoq0H0X9b91keLunbPgra1tDXg5JOdhe8Bp20pUIuNvx4tAGPQxaX5Vc6PnNGd1fmHgnhoDQmugfUcihO1v5GMpvAeS-kKqSEUe8c8r-3Liq-S5xMaxwwFrYDTxVuG6BKkmaA?key=xVSGmSLmWgpLtcOhG0H6Jw)

-   Click to edit a domain to see which default page it is connected to.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfXJpc5Ac2PNLRghnRp62p-6v0qD5q-U25SYPW2BqYVcN2oJDH6vhtda-yybSeC9TGgzpBabZPSysOhvW6252xGXFBYcrmDXQp8A4BYaE4tfxcWTH7MfV9rgfp5ERCBTnb17AN9?key=xVSGmSLmWgpLtcOhG0H6Jw)

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdud9DWugdWuIjlSS479GHb6Cmur17xWSf9uZv6UFMNyLPFoFmxAtGotXC68LLTcID5xgLW7nTsZZuR2sVlMR73nlI1tZXHcxQj2dTBj2Tgtm-S7M0IGL9-LFZ_VcqPbNuP7mfejlID7cmSKll-GamiGNOv?key=xVSGmSLmWgpLtcOhG0H6Jw)

-   Navigate to Sites, go to the Funnel/Website builder for the default page connected to the domain, and locate the icon for SEO Meta Data.

![](https://assets2.modalsupport.net/1766075153954-image2.png)

### Step 2: Add a new Custom Meta Tag in the SEO Meta Data

-   Under **Links & Tags,** you will see the option to add Custom Meta Tags.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcUxF1UgU6xndU46kuFVuhcVq0ym_1AKfGtPTL-HlLxkanbz3uxHgCuVgCK2U5Dh7Lu4hspRVBfp8kKFr77utOJAapw9Z5mbvq0W7-4nngWQrPRxcgt4lIc3yHCA_bdG-A_eiGrR_4Zm74GgezxTmdyDIJb?key=xVSGmSLmWgpLtcOhG0H6Jw)

-   Copy the name from within the meta tag and add it to the name field.
    -   In this example, the tag is <meta name="google-site-verification" content="examplenumer11223344" /> - so I will add the name: google-site-verification
-   Copy the content "examplenumer11223344" and add it to the content field.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcnC7wN140XAANxXUzk-p9JAapfSuIhycV2AO-usTgD0870s_1B-G1Jdt2tQ9SD7w8piqqcs97PE2EAYcLh4IsUXBVDCoXhOofdXt160bpEcwziv91VoLnOROuHuVbjOx7f0H0s90SSaeyzqRok4hNAtTOm?key=xVSGmSLmWgpLtcOhG0H6Jw)

-   Save the tag and then update the data.
-   Save the page.

Your domain should now get verified successfully on the Google Search Console.

## **Use Cases**

**Preventing Search Engine Indexing**:

-   **Use Case**: You have a thank-you page or a landing page that you don't want search engines to index or display in search results.
-   **Meta Tag**: <meta name="robots" content="noindex, nofollow">
-   **Purpose**: This meta tag tells search engines not to index the page or follow any links on it.

**Domain Verification**:

-   **Use Case**: You need to verify ownership of a domain with Google, Google My Business, or another verification service.
-   **Meta Tag**: <meta name="google-site-verification" content="your-verification-code">
-   **Purpose**: This meta tag is used to prove ownership of a domain by providing a verification code to the verification service.

**Improving SEO with Meta Descriptions**:

-   **Use Case**: You want to provide a descriptive summary of your page's content to enhance its visibility in search results.
-   **Meta Tag**: <meta name="description" content="This is a brief description of the page's content.">
-   **Purpose**: This meta tag offers a summary of the page, which can appear in search engine results and improve click-through rates.

### **FAQs**




**Question:** How do I find the default page connected to my domain for Google site verification?
**Answer:** Navigate to Settings > Domains in . Click to edit a domain to see which default page it is connected to. Then, go to Sites and access the Funnel/Website builder for the default page to locate the SEO Meta Data icon.




**Question:** Where do I add the Google site verification meta tag on the default page?
**Answer:** In the Funnel/Website builder for the default page, locate the SEO Meta Data section. Under Links & Tags, choose the option to add Custom Meta Tags. Enter the meta tag's name and content based on the verification details provided by Google.




**Question:** What should I do if my domain verification is not successful after adding the meta tag?
**Answer:** Ensure that you have correctly copied the meta tag's name and content and saved the changes. Verify that the meta tag is correctly added to your default page. If issues persist, check for any caching issues or contact customer support for further assistance.




**Question:** Does adding these tags slow down my website loading speed?
**Answer:** No. Meta tags are tiny snippets of text-only data that load almost instantly. They have no measurable impact on your site's performance or user experience.




**Question:** Can I use custom meta tags for things other than Google Verification?

**Answer:** Yes. The article highlights two other major use cases: **Improving SEO** by adding custom meta descriptions (summaries that appear in search results) and **Preventing Indexing** by using a "noindex" tag to keep specific pages, like thank-you pages, private from search engines.




**Question:** Can I add more than one custom meta tag to a single page?

**Answer:** Yes. You can add multiple custom meta tags under the **SEO Meta Data** section. For example, you can have one tag for Google Verification, another for Pinterest verification, and a "noindex" tag all on the same page without any conflicts.