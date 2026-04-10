---
title: "How to use Custom CSS Selector in the site builder"
description: "How to use Custom CSS Selector in the site builder"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/cgOJYX5Q1VJhR0O4snH8"
sourceId: "cgOJYX5Q1VJhR0O4snH8"
category: "Site Builder"
---

**How to use Custom CSS Selector in the site builder**

To improve navigation on your funnel or website in , you can use CSS Selector IDs to create anchors or scroll effects. This guide will show you how to achieve this for both the same page and across different pages.

### Anchoring/Scrolling Within the Same Funnel/Website

To anchor or scroll within the same funnel or website, you'll need to use the CSS Selector ID of the element you want to link to. Follow these steps to find your CSS Selector ID:

**1- Access the Builder**: Navigate to the sites tab and click on the websites sub-tab to navigate to the page you want to customize. Edit an existing page or create a new one

![](<https://assets2.modalsupport.net/1763755965725-Captura de pantalla 2025-11-21 151235.png>)

Select the section or element you want to anchor to. Ensure the section or element is highlighted.  

![](https://assets2.modalsupport.net/1774465931917-image3.png)

**2- Open Styles Settings**: In the right menu, access the "Styles" section.

**3- Copy the CSS Selector ID**: Locate the CSS Selector field and copy the text (e.g., #section-B5GBGjJt7R) by clicking the copy button.  

![](https://assets2.modalsupport.net/1774465950382-image1.png)

Anchoring/Scrolling to a Different Funnel/Website Page

To create an anchor or scroll effect to a section on another page, use the page URL with the CSS Selector ID appended at the end. For example: https://www.example.com/funnelpath#CSS\_SELECTOR. This method also works for subdomains.

### Common Use Cases for Anchoring/Scrolling

Here are some common scenarios where you might use anchors or scroll effects:

-   **Linking "Table of Contents" Items**: Direct users to corresponding sections within the same page.
-   **Quick Access to "Terms of Service"**: Create links to important sections for easy navigation.
-   **Directing Staff to Specific Script Sections**: Help your team quickly find relevant parts of your scripts.
-   **Navigating to Pricing Tables**: Link your navigation menu to a pricing table located in a specific section.
-   **"Book a Call" Button**: Link to a booking widget on another page.
-   **Linking to Specific Videos**: Direct users to a particular video within a section.
-   **Multiple Buttons to One Section**: Use several buttons to link to an opt-in form or other sections on your page.

**FAQs**




**Question:** What is a CSS Selector ID and why do I need it?
**Answer:** A CSS Selector ID is a unique identifier used to target specific elements on your web page for styling or actions like anchoring and scrolling. It ensures that the changes or actions you apply affect only the intended element.




**Question:** How do I find the CSS Selector ID for an element?
**Answer:** To find the CSS Selector ID, navigate to the page builder, select the section or element you want to anchor to, open the "Advanced" settings in the right menu, and copy the CSS Selector ID from the designated field.




**Question:** Can I use the same CSS Selector ID for multiple elements on different pages?
**Answer:** No, CSS Selector IDs should be unique to each element. Using the same ID for multiple elements can cause conflicts and unintended behavior on your website.




**Question:** How do I anchor to a section on a different page or subdomain?
**Answer:** To anchor to a section on a different page or subdomain, use the full URL of the target page followed by the CSS Selector ID. For example: [https://www.example.com/funnelpath#CSS\_SELECTOR](https://www.example.com/funnelpath#CSS_SELECTOR).  




**Question:** Can I use anchors or scroll effects for elements that are on a different subdomain?
**Answer:** Yes, you can use anchors or scroll effects on elements that are on a different subdomain. To do this, simply append the CSS Selector ID to the full URL of the page, including the subdomain, like this: [https://subdomain.example.com/funnelpath#CSS\_SELECTOR](https://subdomain.example.com/funnelpath#CSS_SELECTOR).