---
title: "Email Unsubscribe Link"
description: "This article will guide you on how to manage the default unsubscribe links in your email system, making sure you stay compliant and offer a better experience…"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/mUw0k0FnCBHt2defUSA1"
sourceId: "mUw0k0FnCBHt2defUSA1"
category: "Email & SMTP"
---

This article will guide you on how to manage the default unsubscribe links in your email system, making sure you stay compliant and offer a better experience to your contacts. You’ll learn how to use the default unsubscribe link settings and how to manually place the unsubscribe link using a tag.

### **Notes:**

-   This option is only for users who are using the email system.
-   This option is enabled by default. A default unsubscribe link will be included at the bottom of the email, stating: “**If you no longer wish to receive these emails, you may click here to unsubscribe**.”

## **What is an Unsubscribe Link?**

An **unsubscribe link** is a mandatory feature that allows your contacts to opt out of receiving future marketing emails from your business. It’s a requirement under various email compliance laws, including the **CAN-SPAM Act** and **GDPR**. Including this link in your emails helps meet legal obligations and ensures that your contacts can easily manage their communication preferences.

### **Why Include an Unsubscribe Link? (Legal Compliance)**

Including an unsubscribe link goes beyond best practices; it’s a **legal requirement** under many global regulations. Failure to comply with these laws can result in severe financial penalties and damage to your reputation.

#### **U.S. - CAN-SPAM Act:**

The **CAN-SPAM Act** requires all commercial emails to include a clear and accessible way for recipients to opt out of future communications. This law is enforced by the **Federal Trade Commission (FTC)**.

#### **EU - General Data Protection Regulation (GDPR):**

In the European Union, GDPR mandates that subscribers can request the deletion of their personal data under the **Right to Erasure (Article 17)**. If a contact unsubscribes, they are exercising their right to have their data removed.

Failing to comply with these regulations can result in significant fines, such as up to **€20 million** or **4% of your company’s global annual turnover**, whichever is higher.

### **How to Enable/Disable the Default Unsubscribe Link**

Navigate to Settings -> Business Profile. Under "General”, you can find the settings. Check/uncheck to enable and disable the settings.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeemcGpl49rZz6WtPlfckK7_etJ5FAZDX69f_NP4ZR_S8JrY_kWChnpLLWRZq_ksK_Z9q9uivr7Bqk3tlhTRXX2cBz7cHsuPO8Jkl5YVhIUs5jpdsL7-RkZjBAdrUGxYRJPD7Yqqg?key=hqO92uarQX-qEPWWmB7fXw)

You can also customize the default unsubscribe link from here.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfeKEnrlUUo7eJsrE1JCloymkq2NKfxniA6GDWHxT2oEaO5KKWqYvUQmOW0zEq5RKuvwQ58FmZo2HhODMpdNUE0IthU6NRDhKaXl-7Zgp88rlzawbGgm4klAdD_zJRe2qX_oyII8w?key=hqO92uarQX-qEPWWmB7fXw)

If you prefer full control over the placement, toggle the setting **OFF** and manually add the unsubscribe link to your email template.

### **Important:**

If you disable the default unsubscribe link, you must manually include the **unsubscribe tag** ({{unsubscribe}}) in each email to remain compliant.

## **What Happens If You Use Both Default and Manual Unsubscribe Links?**

Including both the default unsubscribe link and the manual tag in the same email could create confusion for recipients and negatively affect the overall email design. Having multiple unsubscribe links might not only clutter the email but also confuse recipients about which link to click.

### **What Happens If Both Are Enabled?**

If both unsubscribe methods are enabled, you’ll end up with:

-   One unsubscribe link in the footer (from the default setting)
-   Another unsubscribe link where you manually placed the {{unsubscribe}} tag

This can lead to:

-   A **cluttered email** design, potentially reducing click-through and conversion rates.
-   **Confusion for recipients**, especially if the links appear different or lead to different destinations.

### **Best Practice:**

To avoid this, it’s recommended to use only **one method** for the unsubscribe link in your emails.

-   **Manual Control:** If you want precise control over placement and appearance, disable the default footer link and use the {{unsubscribe}} tag manually.
-   **Default Footer Link:** If you’re fine with the unsubscribe link appearing in the footer, rely on the default setting and skip the manual tag.

### **Users Can Resubscribe After Unsubscribing from an Email List**

The purpose of the resubscribe link is to simplify the process for users who have accidentally unsubscribed from an email list to rejoin it easily. This allows users to quickly resubscribe by clicking a single link in the success message, immediately removing them from the do-not-disturb list.

A quick resubscribe link is included directly within the unsubscribe success message and does not need to be set up manually.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcGesAzJI7E_UVGGywGMJwXakLUOZX5vEFWwsUOlDKI4ZZ6XhcAUw5mJW0-2IP9EdbsDggJE7OiyjxloHxw5W2gmIx_4mhg_N3YHcBjAHn5k-bz8Jrj2VTiBCyhsXD4_asM8wzNTw?key=hqO92uarQX-qEPWWmB7fXw)

**Important:** We are enforcing the unsubscribe links on all emails like:

-   Bulk email
-   Workflow
-   Email builder bulk sending
-   Except 1/1 conversations

### **Pro Tips**

-   **Regularly check compliance:** Ensure that the unsubscribe link is always included in your email templates, especially when creating new campaigns.
-   **Test your emails:** Before sending out any campaign, preview your emails to confirm that the unsubscribe link appears correctly and works as expected.
-   **Track unsubscribes:** Regularly monitor unsubscribes to identify trends and improve the relevancy of your campaigns.

### **FAQs**




**Question:** Why is the unsubscribe link important?
**Answer:** The unsubscribe link is a legal requirement in many countries, ensuring recipients can easily opt out of receiving future emails. It also helps maintain compliance with regulations like the CAN-SPAM Act and GDPR.




**Question:** Can I remove the default unsubscribe link?
**Answer:** Yes, you can disable the default unsubscribe link and choose to manually add the unsubscribe link using a tag. However, you must include the tag in each email to remain compliant.




**Question:** What happens if I include both the default and manual unsubscribe links?
**Answer:** Including both unsubscribe links can confuse recipients and make your email look cluttered. It’s best to use only one method for consistency and clarity.




**Question:** How do I manually add the unsubscribe link?
**Answer:** To manually add the unsubscribe link, place the {{unsubscribe}} tag wherever you want the link to appear in your email template.




**Question:** Is there a penalty for not including an unsubscribe link?  
**Answer:** Yes, failing to include an unsubscribe link can lead to legal penalties, including fines under the CAN-SPAM Act and GDPR, which can be significant.




**Question:** Can I customize the default unsubscribe link text or its appearance?  
**Answer:** Yes, you can customize the default unsubscribe link. This can be done in the "Settings -> Business Profile" section under "General". Here, you have the option to modify the default unsubscribe link’s text or style to better match your email design or brand voice.




**Question:** How can I ensure my unsubscribe links are working correctly?
**Answer:** Test your emails before sending campaigns to confirm the unsubscribe link appears correctly and functions as intended. Regularly check compliance and monitor unsubscribe trends to improve campaign relevance.




**Question:** Does unsubscribing from an email also stop SMS messages?
**Answer:** By default, the {{unsubscribe}} link applies to **Email**. However, the platform’s "Do Not Disturb" (DND) status can be configured to be channel-specific. It is a "Pro Tip" to include a "Reply STOP to opt-out" message in your SMS marketing to ensure you are compliant across all communication channels.




**Question:** What happens to a contact immediately after they click unsubscribe?

**Answer:** The contact is automatically added to the **"Do Not Disturb" (DND)** list. This prevents any further automated marketing emails from being sent to them, keeping you compliant with GDPR and CAN-SPAM regulations.