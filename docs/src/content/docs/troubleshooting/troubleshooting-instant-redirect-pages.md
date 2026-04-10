---
title: "Troubleshooting Instant Redirect Pages"
description: "Troubleshooting Instant Redirect Pages"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/pSoAHgWchbqYPUxbxuKy"
sourceId: "pSoAHgWchbqYPUxbxuKy"
category: "Troubleshooting"
---

**Troubleshooting Instant Redirect Pages**

This troubleshooting guide is designed to give you a walkthrough on resolving common issues with Instant Redirect Pages in your funnels. Whether you are dealing with broken redirects, incorrect URLs, or domain-specific issues, this FAQ provides simple solutions to ensure your redirects work smoothly. Follow the steps provided to quickly resolve any issues and keep your redirect pages running effectively.

**FAQ: Troubleshooting Instant Redirect Pages (Updated)**




**Question:** Why is my redirect page not working after setting it up?


**Answer:If your redirect page is not functioning, double-check the following:

-   Ensure the correct target URL is entered in the "Target URL" field. For that, navigate to settings>Domains and URL Redirects>Add a redirect

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfEJyIkjWfjQyC4btziT6tRk-jUW_OQ5rG9FfP7DREMjzXQEpMdbUhxW-wQgSBJXP_r_hk4J0XP-DHvas4DowBqpv947x3-QCB10zNw6U1ACK0Mbf0ZfLDMP5Qt0lyjDr3IFgSv?key=D1ouPOS15piI0erxcMvSab2H)

-   Confirm that the redirect path in the funnel step is configured properly (e.g., /zoom should match your desired redirect path).

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcAh1VCsVQgjoznVaK_n5YqZPkP0d3jkuuGQyaPzCjOc6Sn-u_c5DJyiqoK5grL2fOObMmZ4HoOUS9pe2jt8-bCdyyT1H0A8496WklbSQQA0tiS4DJtofYFQGk_9TGvNRSZskh_3w?key=D1ouPOS15piI0erxcMvSab2H)

-   Test the redirect by entering the URL in your browser, ensuring it redirects to the correct destination.

**How to Check:**

-   Go to your funnel settings and verify the redirect path under the "URL Redirects" section.
-   Try accessing the URL by visiting yourdomain.com/zoom to confirm it redirects as expected.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXf-Vkez1hnFFjrSxMK51BkjLtLrz6eOlhQxWZM4hkLltWVzCZoAOvk_qBHd5_Yd1fJGZLm-TRHtrDn6kgm0I0fJHB6vfYNtDINlERsM2uSVSWDOVtTcsQSocyUgZij6U7frNA9pSQ?key=D1ouPOS15piI0erxcMvSab2H)




**Question:** The redirect page is not leading to the correct URL. What should I do?


**Answer:Ensure the following settings:

1.  Verify the target URL in the redirect setup is accurate. If it's a long URL, ensure there are no typos or extra spaces.
2.  Check if the redirect is configured with the correct domain selected, especially when managing multiple domains.

**How to Fix:**

-   Navigate to "Settings" > "URL Redirects".
-   Edit the existing redirect and verify the target URL is correct.
-   Test the redirect again after saving the changes.




**Question:** The redirect page works intermittently. What’s causing this?


**Answer:This issue may occur due to caching or delayed DNS propagation. If the page isn’t redirecting consistently, try clearing your cache or refreshing the DNS settings.

**How to Resolve:**

-   Clear the browser cache and try the redirect again.
-   If using custom domains, ensure the DNS settings are fully propagated.




**Question:** How do I ensure my redirect page works across all devices and browsers?


**Answer:Sometimes, redirect pages may not display correctly on certain devices or browsers. Ensure that the redirect page is fully responsive and test it on multiple platforms.

**How to Ensure Compatibility:**

-   Test the redirect page on different devices (desktop, mobile, tablet) and browsers (Chrome, Firefox, Safari).
-   If necessary, adjust the page layout within the funnel builder for mobile responsiveness.




**Question:** The redirect leads to a 404 page. What should I do?


**Answer:A 404 error typically occurs if the redirect path is misconfigured or the destination URL is incorrect.

**Steps to Fix:**

-   Go to your funnel settings and check the "Redirect Path" section.
-   Ensure the destination URL is correctly entered in the redirect settings.
-   If using a subdomain, make sure the subdomain is active and connected to your funnel.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcW1KEYiz6LsxbAJesUI3dm_WyeX8n7mTveJxgv5UDWeoh1LuBvmHycq0tBChTAOTWppSLI97ZhPk376ZS3UiBhO7GZLofedIPFUObRioUG8INDFmXSvmcXENEP5D26Ojx-qyg1xw?key=D1ouPOS15piI0erxcMvSab2H)




**Question:** Can I add multiple redirects for the same funnel?


**Answer:Yes, you can add multiple redirects for the same funnel. You can set different paths to different destination URLs based on the content or user actions.

**How to Add Multiple Redirects:**

-   Navigate to "Settings" > "URL Redirects".
-   Create new paths for different URLs (e.g., /zoom for Zoom links, /offers for affiliate products).
-   Ensure each path is correctly mapped to the corresponding destination URL.




**Question:** Why does the redirect page not work with my custom domain?


**Answer:If the redirect isn't working with a custom domain, ensure that the domain is correctly configured within your funnel settings and DNS settings.

**How to Check:**

-   Go to "Settings" > "Domains" and confirm your custom domain is properly linked to your funnel.
-   Verify DNS records are correctly pointed to the right server.

**Q8: I am trying to use a redirect for a Zoom call link, but it’s not working. How can I fix this?**

**A8:**Zoom links or similar external URLs may sometimes experience issues due to incorrect link formatting or path configuration.

**How to Fix:**

-   Ensure that your Zoom URL is correctly copied without any spaces or extra characters.
-   Set the correct path in the funnel's redirect settings (e.g., yourdomain.com/zoom).




**Question:** Why is my REGEX redirect not working for all paths?


**Answer:If the REGEX redirect isn’t working as expected, ensure that your pattern is correctly defined. REGEX redirects are designed to handle domain-level redirects with all paths, but incorrect patterns can prevent the redirect from triggering.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXenI7TZkwsTvo1_8CLitvzZoSKu5boCv2OMWYR5qbfqE72oL2LnwCk5G9F0AmBvcf-Zexn9I4oS8FP6vrppdZ23NjVWxCe9nEIquro5iiTAFKX52qXO6oI9oqbAEQJZ0Tu2x3f2?key=D1ouPOS15piI0erxcMvSab2H)

**How to Fix:**

-   Double-check the syntax of your REGEX pattern.
-   Make sure that the source domain is configured correctly and all paths are being included in the rule.
-   If you’re unsure of the pattern, consult a REGEX guide to ensure proper syntax.




**Question:** My funnel step or website page doesn’t load after setting up a redirect, what’s wrong?


**Answer:Redirecting to an unpublished funnel or website page may cause this issue. Only published and live pages or steps associated with a domain can function correctly as redirect targets.

**How to Fix:**

-   Verify that the funnel step or website page you are redirecting to is published and live.
-   Check if the page is properly linked with the active domain.




**Question:** Why is my URL redirect not preserving the SEO value of the old URL?


**Answer:If your redirect isn’t preserving SEO value, it could be due to using a 302 Temporary Redirect instead of a 301 Permanent Redirect. The 301 redirect is specifically designed to transfer SEO ranking.

**How to Fix:**

-   Ensure you’re using a 301 Permanent Redirect for SEO purposes.
-   If you’re unsure about the type of redirect, go back to the redirect settings and confirm it is set to 301.
-   The Funnel redirect, allows you to 301 redirect a URL to a step in an existing funnel that is linked with a domain within the account.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeQbiK90kbknW_9_7cPruk6YFEVJpwXeREFn4LJMfrmD426XenL63fKrqO75VVh0yx8SN42uIt31ZNgZ8d0s4laWZxUy2hhEzdbldeYvU4H37WKKJXWesFhHbXO2akANNA9XD8wAQ?key=D1ouPOS15piI0erxcMvSab2H)




**Question:** Can I redirect multiple URLs to a single destination URL?


**Answer:Yes, you can redirect multiple URLs to one target URL using a REGEX redirect, especially when you have similar paths across different domains or subdomains.

**How to Set Up:**

-   Use the REGEX option under the "Redirect to all paths" setting to redirect all paths from one domain to another.
-   This will automatically apply the redirect across all URLs from the original domain without manually setting each one.




**Question:** Why do my redirects break after a domain migration?


**Answer:Domain migrations can break redirects if the old domain isn't properly mapped to the new one. You may also experience issues if the DNS settings weren’t fully propagated or redirects weren’t updated accordingly.

**How to Resolve:**

-   Ensure that the DNS settings for your new domain are fully updated and propagated.
-   Review and update the redirects in your settings to match the new domain structure.
-   Test redirects after the migration to confirm they’re functioning correctly.




**Question:** How can I delete a URL redirect if it's no longer needed?


**Answer:You can easily remove a URL redirect by accessing the URL Redirects page in your settings. From there, you can click the trashcan icon to delete any redirects that are no longer needed.

**Steps to Delete:**

-   Navigate to "Settings" > "URL Redirects".
-   Find the redirect you want to delete and click the trashcan icon next to it.




**Question:** Why isn’t my search bar filtering results for URL redirects?


**Answer:The search bar may not filter results if there is an issue with your search query or if the database of redirects is very large.

**How to Fix:**

-   Try refining your search terms and ensure you’re searching using relevant domain or path names.
-   If the list is large, consider searching by more specific terms or narrowing down your query.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcW0724E6REcvdn6KoIod93j8F2wCkjBtNk3to0X5QkGA8mvV_m1bllU66jWg_hyIqm6noHEqPaky-MO6F4enNnIFB5XOEjcS6JABWnX7bCQ4pHma0nuWmp6pdroxYl4k4Z2eJiLg?key=D1ouPOS15piI0erxcMvSab2H)




**Question:** Can I use a URL redirect to an external website not associated with my domain?


**Answer:Yes, you can set up a redirect to an external website. Simply choose the "Redirect to another URL" option when creating the redirect and paste the full URL of the external website.

**Steps to Set Up:**

-   Navigate to "Settings" > "URL Redirects".
-   Select "Redirect to another URL" and enter the external website's URL in the target field.




**Question:** Why is my redirect page not working after setup?
**Answer:** Check that the target URL is correct and the funnel step path (e.g., zoom) matches the redirect configuration. Test the URL directly in a browser to confirm functionality.




**Question:** Why is my redirect page not working after setup?
**Answer:** Check that the target URL is correct and the funnel step path (e.g., zoom) matches the redirect configuration. Test the URL directly in a browser to confirm functionality.




**Question:** What is a "Redirect Loop," and how can I fix it?

**Answer:** A redirect loop occurs when Page A is set to redirect to Page B, but Page B is also set to redirect back to Page A. This causes the browser to error out with a "Too many redirects" message.

**How to Fix:** Review your URL Redirect list and ensure that no two paths are pointing at each other. Always ensure the "Target URL" is a final destination, not another redirect.