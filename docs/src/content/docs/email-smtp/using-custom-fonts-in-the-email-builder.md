---
title: "Using Custom Fonts in the Email Builder"
description: "When creating your HTML Email Design System, you may want to use a custom font beyond the standard ones available. When working with brand guidelines where…"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/J95kgjnstWm4u2XfJkf0"
sourceId: "J95kgjnstWm4u2XfJkf0"
category: "Email & SMTP"
---

When creating your HTML Email Design System, you may want to use a custom font beyond the standard ones available. When working with brand guidelines where you need to use a custom font, it's always best to use a solid fallback.

### Email client support

The first consideration to take into account when working with custom fonts is that email client support is patchy. The following email clients support custom fonts:

-   Apple Mail
-   iOS Mail
-   Samsung Mail
-   Outlook.com

It's important to define a font stack when using custom fonts. This should include some standard system fonts to make sure that your email renders for clients that don't support custom fonts.

**_Example:_** _'OpenSansBold', Helvetica, Arial, sans-serif_

To host your custom fonts, you can either use a service such as Google Fonts or host them yourself. You can add your Google Font directly. Refer to the following image.  



![](https://assets2.modalsupport.net/1773178918258-image3.png)

![](https://assets2.modalsupport.net/1773178940131-image2.png)

For situations where your custom fonts aren't supported, you should select fallbacks that are included on the majority of computers. These fallbacks define what fonts will be displayed if the email client doesn't support custom fonts. Here is a website for fallback fonts:

[_**https://www.cssfontstack.com/**_](https://www.cssfontstack.com/)

### CSS set up for Emails

**_Please Note:_** _You may need to reach out to a developer for assistance if you don’t have the expertise._

The most reliable way to include a specific font in your email is to use @font-face. Below is an example of this in action: 

<style> @font-face { font-family: 'Festive', cursive; src: url('[https://fonts.googleapis.com/c...](https://fonts.googleapis.com/css2?family=Festive&display=swap)') }

\* { font-family: 'Festive', cursive; }

</style>

When you are within the email builder you would add custom CSS on the Appearance tab

![](https://assets2.modalsupport.net/1773178965709-image4.png)

When you are using the email builder in a workflow you can add custom code as well. See the screenshot below:

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfC1FKq5B_cnwovVYQC2MWmX2CfXi5zCezoX1QGJhrmDpr2D3l23LWi10Q9nY3k7xu_E1ma07lNGY_CX1HCiICWo5JafLA588vSvC1opYErWdxvALdLa0-KpKfFn4x4isa6w2-bmBaIqtEGWi03B77wjcW3?key=dJSKnnbdihfr3eRc3BNFXw)

**_Please Note:_** _When working with Outlook, you need to wrap this @font-face in a @media tag. This is because Outlook 2007, 2010, and 2017 don't support them._

**_Please Note:_** _If you want to use the custom font in the builder you can copy the custom font code and make a custom value for it and use the custom value._

### **Pro Tips**

-   **Always Define a Font Stack:** Ensure you include fallback fonts in your font stack, such as 'OpenSansBold', Helvetica, Arial, sans-serif, to maintain consistency across email clients that do not support custom fonts.
-   **Use Web-Safe Fonts as Fallbacks:** Select fallback fonts that are universally available, like those listed on websites like [**_CSS Font Stack_**](https://www.cssfontstack.com/)**_._**
-   **Test Emails Across Clients:** Before sending your email campaign, test how the custom font renders across different email clients to avoid unexpected visual issues.
-   **Optimize for Outlook:** Wrap the @font-face rule in a @media tag when targeting email clients like Outlook 2007, 2010, and 2017 to prevent rendering issues.
-   **Host Fonts Securely:** Use a reliable service like Google Fonts or a secure self-hosted server to ensure fonts are accessible during email rendering.

### **FAQ**




**Question:** Which email clients support custom fonts?
**Answer:** Apple Mail, iOS Mail, Samsung Mail, and Outlook.com support custom fonts. However, many other email clients rely on fallback fonts.




**Question:** How do I add a custom font to an email template?
**Answer:** You can include custom fonts using the @font-face rule in the <style> section of your email. Make sure to add the code in the Appearance tab or through custom CSS in the email builder.




**Question:** What happens if a custom font isn’t supported by the recipient’s email client?
**Answer:** If the client doesn't support custom fonts, the email will default to the fallback fonts defined in your font stack.




**Question:** Can I use Google Fonts in my email templates?
**Answer:** Yes, you can include Google Fonts by linking directly to their hosted font files using @font-face. Ensure you have proper fallbacks for unsupported clients.




**Question:** Why is custom font rendering inconsistent in Outlook?
**Answer:** Outlook versions 2007, 2010, and 2017 don't support custom fonts unless wrapped in a @media tag. Without this, the custom font may not render properly.




**Question:** How do I use custom fonts in an email builder?
**Answer:** You can add custom fonts in the email builder by inserting the custom CSS code into the Appearance tab or by adding custom code when working within an email workflow.




**Question:** How can I test custom fonts in my emails?

**Answer:** Always **send test emails** and review them across multiple email clients to check for rendering issues and ensure the fallback fonts display properly where necessary.




**Question:** Can I use custom fonts in the Subject Line?

**Answer:** No. Subject lines are controlled entirely by the recipient's operating system and do not support CSS or custom typography. To stand out in the inbox, focus on using **Emojis** or compelling copy instead.