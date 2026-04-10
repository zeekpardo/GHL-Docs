---
title: "Custom Fonts in Blogs"
description: "When creating your Blog, you may want to use a custom font beyond the standard ones available. Follow these steps to learn how to customize the font in your…"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/73DhRtGRtYIDwRafEdqR"
sourceId: "73DhRtGRtYIDwRafEdqR"
category: "Blogs"
---

When creating your Blog, you may want to use a custom font beyond the standard ones available. Follow these steps to learn how to customize the font in your blog.

## Navigation

### Default Custom Fonts

-   Navigate to Sites on the left > Blogs at the top > Select the blog site you would like to edit.

![](<https://assets2.modalsupport.net/1767695158207-unnamed \(95\).png>)

-   When you are updating a blog or creating a new one, click on the font drop-down menu, select _Custom Fonts_

![](<https://assets2.modalsupport.net/1767695177148-unnamed \(96\).png>)

-   A pop-up menu will appear that allows you to select a custom font where you can also choose previously selected fonts.
-   Select the font

![](<https://assets2.modalsupport.net/1767695197132-unnamed \(97\).png>)

-   Save

### CSS font set up for Blogs

**_Please Note:_** _You may need to contact a developer for assistance if you don’t have the expertise. We also don’t provide custom fonts code._

-   The most reliable way to include an unavailable font in your blog with code is to use @font-face. Below is an example of this in action:
-   When you are within the blog, you would click on the _Insert Custom Code_ symbol, paste the code into the box, and select Insert Code

![](<https://assets2.modalsupport.net/1767695216032-unnamed \(98\).png>)

If you have zoomed in the builder, this is how the UI will show the options:

![](<https://assets2.modalsupport.net/1767695239387-unnamed \(99\).png>)

![](<https://assets2.modalsupport.net/1767695252928-unnamed \(100\).png>)

<style> @font-face { font-family: 'Festive', cursive; src: url('https://fonts.googleapis.com/css2?family=Festive&display=swap') }

\* { font-family: 'Festive', cursive; }

</style>

**_Please Note:_** _When working with Outlook, you must wrap this @font-face in a @media tag. This is because Outlook 2007, 2010, and 2017 don't support them._

**_Please Note:_** _If you want to use the custom font in the blog you can also copy the custom font code and make a custom value for it and use the custom value._

## FAQs




**Question:** How do I save a custom font after selecting it?
**Answer:** After selecting your custom font from the pop-up menu, simply click Save to apply the changes to your blog. This will ensure your chosen custom font is used.




**Question:** Can I reuse a custom font I’ve set up in another part of my blog?
**Answer:** Yes, you can reuse a custom font by creating a custom value for the font code. Once set up, this custom value can be applied wherever needed within your blog, providing consistency in font styling.




**Question:** What is the@font-faceCSS rule, and why is it used?
**Answer:** The @font-face CSS rule allows you to load custom fonts on a webpage, even if they are not available on the user’s device. It specifies the font-family name and the URL of the font file, enabling the use of custom fonts in your blog.




**Question:** How can I ensure my custom font works across all devices and browsers?
**Answer:** To ensure compatibility across devices and browsers, use widely supported font formats and include a @media tag when necessary, especially for email clients like Outlook. Testing on different browsers and devices can also help confirm that the font displays correctly.




**Question:** Can I use multiple custom fonts in the same blog?
**Answer:** Yes, you can use multiple custom fonts by adding multiple @font-face rules in your CSS and specifying different font-family names. Then, apply the appropriate font-family name to different parts of your blog as needed.




**Question:** What should I do if the custom font does not appear after adding it?
**Answer:** If the custom font does not appear, check the CSS code for any errors, ensure the font URL is correct, and verify that the font is supported by the browsers and devices you are using. Refreshing the page or clearing the cache can also help resolve display issues.




**Question:** Do I need to contact a developer to use custom fonts on my blog?
**Answer:** If you are not familiar with coding, you may need to contact a developer to assist with setting up custom fonts on your blog. Custom font implementation can involve CSS code, and without the necessary expertise, it can be challenging to do it correctly.




**Question:** Where can I find custom fonts to use in my blog?
**Answer:You can use fonts from trusted providers such as Google Fonts, Adobe Fonts, or upload your own licensed font files. Make sure the font source provides a valid URL for use in CSS.




**Question:** Why do I need to wrap the @font-face code in a @media tag for some users?

**Answer:** This is specifically required for compatibility with certain versions of Outlook (2007, 2010, and 2017), as these email clients do not natively support the @font-face rule. Wrapping the code ensures it doesn't cause issues in those environments.




**Question:** Will using many custom fonts slow down my blog’s loading speed?
**Answer:** Yes. Every custom font requires the user's browser to download a new file. To maintain a fast loading speed and a good user experience, it is recommended to limit your blog to two or three custom fonts (e.g., one for headings and one for body text).