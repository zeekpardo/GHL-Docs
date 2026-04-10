---
title: "Funnels on WordPress Websites"
description: "WordPress has a plugin called LeadConnector that allows you to use Funnels on WordPress sites. In the past, this was set up using subdomains, but now it can…"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/jAl4ZLVMr2195OQuXN5a"
sourceId: "jAl4ZLVMr2195OQuXN5a"
category: "WordPress"
---

WordPress has a plugin called LeadConnector that allows you to use Funnels on WordPress sites. In the past, this was set up using subdomains, but now it can be right on the path at the root domain(yourclientswebsite.com/something). This makes the URL cleaner and quicker.

In this article, we will go over how to add a funnel to WordPress.

### Step 1: Add the Plugin

-   Navigate to the plugins tab and then click on the _Add New_ button.

![](<https://assets2.modalsupport.net/1763639611288-unnamed - 2025-11-20T195316.120.png>)

-   Search for the LeadConnector application and click on _Install Now._

![](<https://assets2.modalsupport.net/1763639633808-unnamed - 2025-11-20T195340.068.png>)

-   Click on _Activate_ when it displays after installation.

![](<https://assets2.modalsupport.net/1763639650987-unnamed - 2025-11-20T195401.155.png>)

**WordPress as Native HTML via the LeadConnector Plugin**

-   You can embed funnels directly into WordPress as Native HTML via the LeadConnector Plugin.
-   The **HTML embed** allows for payment collection via Order Forms directly on WordPress sites, eliminating the security restrictions that some payment gateways impose when using iframe-embedded funnels. Additionally, the HTML embed enhances SEO by making the funnel content part of the page's HTML, allowing search engines to crawl and index it more effectively, improving website visibility and discoverability.

**How to Use:**

1.  Open the LeadConnector Plugin Dashboard in WordPress.
2.  Navigate to the Funnels tab and click "Add New Page."
3.  Select the desired funnel and step.
4.  Under Page Display Method, choose "Native HTML Embed."

![](<https://assets2.modalsupport.net/1763639673251-unnamed - 2025-11-20T195423.312.png>)

1.  Click "Save Page" to publish.

![](<https://assets2.modalsupport.net/1763639709668-unnamed - 2025-11-20T195457.571.png>)

**Note:** This requires WordPress hosting with the LeadConnector Plugin installed and active. The Native HTML Embed functionality bypasses iframe limitations, making it a more versatile option for funnel integration.

### Step 2: Copy and paste the API key from the system into WordPress.

-   Navigate back to the  Settings, go to the Business profile, and copy the API Key.

![](<https://assets2.modalsupport.net/1763639732947-unnamed - 2025-11-20T195520.190.jpg>)

-   Navigate back to the added Lead Connector tab

-   Paste the API key into the correct field within the LeadConnector tab in WordPress and click save.

![](<https://assets2.modalsupport.net/1763639755713-unnamed - 2025-11-20T195544.755.png>)

### Step 3: Install the site on WordPress

-   Click _Add New_

![](<https://assets2.modalsupport.net/1763639775068-unnamed - 2025-11-20T195604.179.png>)

-   Choose the funnel and the step 
-   The display method will be as Embed Full Page iFrame
-   Enable tracking (If you have a tracking code in your funnel)
-   Add a slug.
-   Save Page

![](<https://assets2.modalsupport.net/1763639790306-unnamed - 2025-11-20T195622.400.jpg>)

-   View the added Funnel!

![](<https://assets2.modalsupport.net/1763639810006-unnamed - 2025-11-20T195641.460.jpg>)

### Tracking Code Details

Tracking code can be viewed from the funnel builder when editing a funnel within Settings > Tracking Code

![](<https://assets2.modalsupport.net/1763639831088-unnamed - 2025-11-20T195701.448.png>)

When using a funnel on WordPress, the tracking code is placed in the expected location, the website header.

![](<https://assets2.modalsupport.net/1763639856066-unnamed - 2025-11-20T195725.110.png>)

## Errors

![](<https://assets2.modalsupport.net/1763639912628-unnamed - 2025-11-20T195821.860.png>)

![](<https://assets2.modalsupport.net/1763639871227-unnamed - 2025-11-20T195745.215.png>)

If you are receiving the error message  “**Fingerprint is Missing**” in a funnel page that’s connected using the plugin, there are 2 possible reasons and solutions:

### Scenario 1 - Browser Settings:

If it is happening on a specific browser and working on a different browser, then it is happening because of some custom browser settings due to which the plugin cannot access the cookies.

### Solution:

This issue is pretty rare. So for a quick fix, you can update the browser settings & enable cookies access for the plugin.

### Scenario 2 - Using Different Domains:

If the issue occurs on all browsers, then your funnel domain is different from your WordPress website. You can use a different subdomain, but the domain needs to be the same for security reasons.  

As per our current implementation, we are using an iFrame to render the funnel page inside WordPress. For payment, we need access to web browser cookies (storage), and the browser doesn't allow access over a cross-domain.

### Solution:

Use the same domain but different subdomains of this domain for your funnel and the WordPress site.

For example, if your WordPress domain is [www.mydomain.com](http://www.mydomain.com), you can use a subdomain like site.mydomain.com with the funnel. That would fix the issue because both sites now use the same primary domain, mydomain.com.

### Pro Tips

-   **Ensure Domain Consistency**: To avoid issues with cookie access and cross-domain problems, use the same primary domain for both your WordPress site and the funnel. Different subdomains of the same primary domain (e.g., www.mydomain.com and site.mydomain.com) will work seamlessly.
-   **Enable Cookies for Plugin**: If you encounter a “Fingerprint is Missing” error, check and update your browser settings to ensure cookies are enabled for the plugin. This is often the quickest solution for browser-specific issues.
-   **Use Tracking Code Wisely**: If you have a tracking code in your funnel, make sure to enable tracking when setting up the funnel in WordPress. This ensures that all tracking functionalities are properly integrated and monitored.

### FAQ




**Question:** How do I add the LeadConnector plugin to WordPress?
**Answer:** Navigate to the Plugins tab in WordPress, click “Add New,” search for the LeadConnector application, install it, and activate it.




**Question:** How does the Native HTML Embed improve payment collection on WordPress?
**Answer:** The Native HTML Embed eliminates the security restrictions that some payment gateways impose on iFrame-embedded funnels, allowing you to collect payments via Order Forms directly on your WordPress site without any limitations.




**Question:** How does the Native HTML Embed impact SEO for my website?
**Answer:** By embedding the funnel as Native HTML, the content becomes part of the page’s HTML, making it easier for search engines to crawl and index it. This improves your website's SEO visibility and discoverability, helping attract more traffic.




**Question:** How do I connect the API key from to WordPress?
**Answer:** Copy the API key from settings in your Business Profile, then paste it into the LeadConnector tab in WordPress and save.




**Question:** What should I do if I encounter the “Fingerprint is Missing” error?
**Answer:** Check if the issue is browser-specific and adjust browser settings to enable cookies. If the problem persists across browsers, ensure that your funnel and WordPress site use the same primary domain or subdomains of that domain.




**Question:** How do I set up and view a funnel on WordPress?
**Answer:** In WordPress, click “Add New,” choose the funnel and step, set the display method to Embed Full Page iFrame, enable tracking if applicable, add a slug, and save the page. You can then view the added funnel on your site.




**Question:** Where can I find the tracking code details for my funnel?
**Answer:** You can find the tracking code in the funnel builder under Settings > Tracking Code when editing your funnel. Ensure the tracking code is placed in the website header for accurate tracking.




**Question:** What is the difference between the iframe and Native HTML Embed?
**Answer:** The iframe method uses an embedded frame, while Native HTML Embed directly integrates funnel content into the page’s HTML, improving SEO and functionality.




**Question:** Can I use different domains for my WordPress site and funnel?
**Answer:** No. For payment processing and proper cookie access, both the WordPress site and funnel must use the same primary domain or subdomains of that domain.  




**Question:** Do I need to create a new page in WordPress before adding the funnel?

**Answer:** No. The plugin creates the page for you. When you "Add New" within the plugin, you define the "Slug" (the part of the URL after the /). The plugin then automatically generates that page on your site and pulls the funnel content onto it.




**Question:** Why should I choose "Native HTML Embed" instead of the "iFrame" method when setting up my funnel?

**Answer:** While both work, the Native HTML Embed is superior for two reasons: it improves your SEO by allowing search engines to crawl your funnel content as part of the page's actual HTML, and it bypasses the security restrictions that some payment gateways (like Stripe or PayPal) impose on iFrames, ensuring your order forms always process payments successfully.