---
title: "Troubleshooting Sticky Contacts for Forms and Calendars"
description: "This guide is designed to give users a walkthrough on how to troubleshoot issues related to Sticky Contacts that are not working properly with forms, calendar…"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/ZWZc0MiXEepnVgYA3Y4j"
sourceId: "ZWZc0MiXEepnVgYA3Y4j"
category: "Troubleshooting"
---

This guide is designed to give users a walkthrough on how to troubleshoot issues related to Sticky Contacts that are not working properly with forms, calendar forms, or funnel websites. If you're experiencing problems with Sticky Contacts, this FAQ-style guide provides step-by-step solutions for common issues and how to fix them.

### **FAQ: Why is Sticky Contacts not working with my form or calendar form?**




**Question:** Why is Sticky Contacts not working when I fill out my form, but it works on other pages?
**Answer:This issue typically occurs if the form and calendar elements are not correctly aligned across different pages of your funnel. To fix this:

-   **Step 1:** Ensure that you are using the Form element on the first page where your form is located.
-   **Step 2:** On the second page, where the calendar appears, make sure to use the Calendar element instead of a custom embed code.
-   **Step 3:** If you are using a custom embed code for the form on the first page, use the same for the calendar on the second page.
-   After making these changes, save your funnel and test it again to confirm that Sticky Contacts is now working properly.




**Question:** How can I make sure that both my form and calendar have Sticky Contacts enabled?
**Answer:To check that Sticky Contacts is enabled for both your form and calendar:

-   **Step 1:** Navigate to **Sites** → **Forms** → **Builder** and select the desired form. Confirm that the sticky contact is enabled under **Form Settings**

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXevhxwh26PK2Gxdj7MGG8dF_ZUZzpyOGcWjXig-SzoHBBwz9DrmBAmo93d_CvZPqvx0OvWZtRNZzzf_kONSdO0cORIu3Lg-iiHC7HGppv6TqrYQGZbrPPwOoATd-PkHwh8Co5dR?key=c6sGITzep-eUXmfqYAb-yWat)

-   **Step 2:** Next, go to Calendar Settings and edit the desired calendar. Enable the “**Pre-populate fields**” option within **Forms & Payment** to enable sticky contacts.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXf2zKIIi4PzXDgQApciqLdFAfQIK93zLa_juxTgvhWB3YaWsKCRllBntAQLEnRkOhNYS8FzAtxk3XLYdubTiK3igG6oOYvdyQerTCGKjHvXawP83OFvsx2GPz6t74bXSgazEpLs?key=c6sGITzep-eUXmfqYAb-yWat)

-   If you're using a custom form, make sure that Sticky Contacts is turned on there as well.
-   Once enabled on both, your form data should transfer smoothly to the calendar, allowing Sticky Contacts to work.




**Question:** What should I do if I'm using custom embed code for my form or calendar?
**Answer:If you're using custom embed codes for your form or calendar, make sure that they are set up correctly to work with Sticky Contacts:

-   **Step 1:** If you're using the custom embed code for the form on the first page, ensure the calendar on the second page also uses the custom embed code.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXckFB35p_D5P1vSAHYyoT0zfn0r0k9wvKwYEIK-kD_o4GYO6U8XnXuCNzcUyp92PpJIhTjtoit7bAYW_ekFbmNl0_AKApf3IcEe9h3okY5SMU30z_5E9rRWGpRQZID1MsLI-7SqYg?key=c6sGITzep-eUXmfqYAb-yWat)

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXd_-A3HSIyYUQ1RqabzNlcrxGqPXSmfXU3rg-g20cO-n_N2tgervlxDgjGOa3JrxsnVXV5rc2EDdxjEybGaI266QPSbuZR4CAfH7bKQNCHlw4sKybB6ijE73vWrdjuk0CqKZ1T3Gg?key=c6sGITzep-eUXmfqYAb-yWat)

-   **Step 2:** Ensure that both the form and calendar are hosted under the same domain. If they are on different domains, Sticky Contacts may not work properly.
-   **Step 3:** After making sure the custom embed codes are consistent across pages, test the setup to confirm that Sticky Contacts is functioning as expected.




**Question:** How can I test if Sticky Contacts is working after troubleshooting?
**Answer:To test if Sticky Contacts is functioning correctly:

-   **Step 1:** After saving the changes in your funnel, fill out the form on the first page with new values.
-   **Step 2:** Once you proceed to the calendar page, check that the form data appears automatically on the calendar form.
-   **Step 3:** If the form data shows up on the calendar, then Sticky Contacts is working as intended. If not, recheck the steps and make sure that the correct elements are being used on both pages.




**Question:** What should I do if Sticky Contacts still isn't working?
**Answer:If you've followed all the troubleshooting steps and Sticky Contacts is still not working, try the following:

-   **Step 1:** Double-check that both your form and calendar are using the correct elements (Form element for forms and Calendar element for calendars).
-   **Step 2:** Ensure that both elements are hosted on the same domain to avoid issues with cross-domain functionality.
-   **Step 3:** If you're still facing issues, reach out to the support team for further assistance.




**Question:** What happens if a user clears cookies or uses incognito mode?
**Answer:Sticky Contacts rely on browser cookies to remember user details between pages.

**Step 1:** If cookies are cleared or the browser is in incognito mode, the Sticky Contact data will not persist.  
**Step 2:** Encourage users to complete the form and booking process in one session for the best experience.  
**Step 3:** To maintain continuity, ensure your funnel or form session doesn’t expire too quickly.




**Question:** Why is the pre-filled data incorrect or outdated?
**Answer:This happens if old data is still stored in the user’s browser cookies.  

**To fix this:**

**Step 1:** Clear your browser cookies and cache.**Step 2:** Refill the form using fresh input and retest.**  
Step 3:** Make sure the funnel doesn’t contain older embedded form versions.  




**Question:** Will Sticky Contacts work if I send a link via Email or SMS?

**Answer:** If a contact clicks a link from an email or SMS sent through your system, the system can often identify them using a unique ID in the URL. If the "Sticky Contact" feature is enabled on the target form, it will use that ID to pull their information even if they are on a new device.