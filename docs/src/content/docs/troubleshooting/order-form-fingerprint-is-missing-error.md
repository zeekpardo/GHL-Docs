---
title: "Order Form Fingerprint is Missing Error"
description: "Order Form Fingerprint is Missing Error"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/X3QF6sOnC9oBi5m3TD3i"
sourceId: "X3QF6sOnC9oBi5m3TD3i"
category: "Troubleshooting"
---

**Order Form Fingerprint is Missing Error**

If you ever encounter the “**Fingerprint is missing**” error, we created this article to explain it and provide known solutions.

Here is an example of this error when submitting an order form:

![](https://assets2.modalsupport.net/1764857659121-1.png)

![](https://assets2.modalsupport.net/1764857684087-2.png)

**Scenario 1:**If you only experience this with some of your customers randomly, this means it is likely due to the customer's browser settings, and we are not able to access cookies for the purchase. There are very rare chances of this issue.  
**Solution:** A quick fix would be to guide the customer through updating their browser settings and enabling cookie access.

**Scenario 2:**  
If a client faces this issue **repeatedly** on every device and multiple browsers, it means the **funnel domain is not configured correctly**.

**Solution:** If the website is hosted on WordPress and they are using our order form funnel inside that as a separate path, then the WordPress website domain and the funnel domain should be the same, but the subdomain should be different. 

Suppose your WordPress website is configured with **www.example.com**, **where example.com** is your **domain,** and **www** is your **subdomain**. So now, you should not use www.example.com  or example.com  as the funnel domain. Instead, use a different subdomain (e.g., funnels.example.com ) in the funnel.  
**Note:** Per our current implementation, we use iFrame to render funnel pages inside WordPress. For payment, we need access to web browser cookies (storage), and the web browser may not allow access over a cross-domain.

###   
Steps to add the domain in Funnel:

1\. Go to **Settings** > **Domains** and **URL REDIRECTS** and add the same domain (as WordPress website) with a different subdomain. (Make sure that no other Website is hosted on that subdomain)

![](https://assets2.modalsupport.net/1764857746982-3.png)

**2\. Go to Sites > Funnels > Select the Funnel and go to Settings (choose the funnel you want to use in WordPress). Configure the domain and save it.**

![](https://assets2.modalsupport.net/1764857831630-4.png)

**3\. Verify that the funnel is successfully connected & working with that subdomain.**

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfxMBKD9u2MSK9f7IvJ_i2vMI6Bu82CE1TZmRVDs99qxbzFbSn34Xz0oi_Bv3RsgXtY6Ifpk5w6kFsCDumG2Fvppk0NuJrQDJe0HMquhd0_KFUhQ_E_GuiEIPRPh3FRcHCDkM7WaBfVtkg1yPvw_xYBGapZ?key=le7-HhkZPJvhIleUxLPEgw)

### Steps to fix existing funnel in WordPress:

1\. Go to your LeadConnector WP settings and hard refresh the page if it has already opened. Then click on the API Key save button.

![](https://assets2.modalsupport.net/1764859663103-5.png)

2\. Click the pencil icon to edit the funnel page/step you want to fix.

![](https://assets2.modalsupport.net/1764859906770-6.png)

3\. Wait for the loading to finish, and the step will auto-fill.

![](https://assets2.modalsupport.net/1764860087724-8.png)

4\. Now, you will be able to see the same WordPress website domain (the subdomain will be different) in the preview URL. Click “Save Page” to save the changes.

![](https://assets2.modalsupport.net/1764860226610-8.png)

### Pro Tips

-   **Browser Settings**: For customers experiencing the “Fingerprint is missing” error intermittently, advise them to check their browser settings and ensure cookies are enabled. This can often resolve the issue if it’s related to specific browser configurations.
-   **Domain Configuration**: Ensure the funnel and WordPress site are on the same primary domain but different subdomains. This setup helps avoid cross-domain cookie access issues. For instance, if your WordPress site uses www.example.com, use a subdomain like funnels.example.com for your funnel.
-   **Subdomain Addition**: When adding a subdomain for the funnel, ensure no other websites are hosted on it. This avoids potential conflicts and ensures proper funnel functionality.
-   **API Key Update**: After making domain changes, always hard refresh the LeadConnector WP settings page and re-save the API Key. This ensures that any new configurations are properly applied.

### FAQs




**Question:** What does the “Fingerprint is missing” error indicate?
**Answer:** This error suggests that the funnel cannot access cookies, which may be due to browser settings or domain configuration issues.




**Question:** How can I resolve the error if it happens with only some customers?
**Answer:** Guide the affected customers to update their browser settings to enable cookie access. This is a rare issue but can be fixed by ensuring cookies are allowed.




**Question:** What should I do if the error occurs on all devices and browsers?
**Answer:** Ensure that the funnel domain is correctly configured. Use a subdomain different from the main WordPress domain to avoid cross-domain cookie access issues.




**Question:** How do I add a subdomain for the funnel?
**Answer:** Go to Settings > Domains & URL Redirects, add the domain with a different subdomain, and ensure no other sites are hosted on that subdomain. Then configure this subdomain in your funnel settings.




**Question:** What steps should I follow to fix an existing funnel in WordPress?
**Answer:** Refresh the LeadConnector WP settings page, re-save the API Key, edit the funnel page/step, and ensure the preview URL reflects the correct subdomain. Save the changes to apply them.




**Question:** Can I bulk-enable cookie fallback for all leads?
**Answer:** No. Fingerprinting relies on standard browser storage rules. The safest approach is correct domain setup and user opt-in cookie access.  




**Question:** Why is it necessary to use a different subdomain for funnels when using the WordPress plugin?

**Answer:** Because the system uses an iFrame to render funnel pages inside WordPress, the browser may block the cookie access required for payments if it detects a cross-domain conflict. Using a different subdomain (e.g., funnels.example.com instead of www.example.com) ensures the browser allows the necessary cookie storage.




**Question:** If I move my funnel to a subdomain, do I have to change my marketing links?

**Answer:** Yes. Once you update the domain in the Funnel Settings to funnels.example.com, your old links (e.g., www.example.com/checkout) will no longer point to the funnel. You must update your buttons, ads, and social media links to the new subdomain URL.




**Question:** If my WordPress site iswww.example.com, what is a recommended subdomain for my funnel?

**Answer:** You should use a distinct prefix such as **funnels.example.com** or **shop.example.com**. This keeps the primary domain (example.com) consistent while providing the necessary separation for the browser to handle cookies correctly.