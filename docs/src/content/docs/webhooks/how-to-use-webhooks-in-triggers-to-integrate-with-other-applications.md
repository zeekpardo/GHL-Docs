---
title: "How To Use Webhooks in Triggers To Integrate With Other Applications"
description: "How to Use Webhooks in Triggers to Integrate with Other Applications"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/bOjhnG76Hx1vQiuB8zXv"
sourceId: "bOjhnG76Hx1vQiuB8zXv"
category: "Webhooks"
---

**How to Use Webhooks in Triggers to Integrate with Other Applications**

Using a webhook with Zapier, you can export data out of the system to use with other platforms/systems. This can be helpful if you use multiple systems and want to export information into a spreadsheet for a variety of purposes for your business. Follow these steps to set up a Webhook.

### **Step 1: Create or Log In to your Zapier account.**

-   Ensure you have a Zapier account created. Visit zapier.com to log in or create an account.

### **Step 2: Create a Workflow to execute a webhook**

There are several options to do this. You can create a Workflow to fire off based on a form or survey being submitted, an appointment is booked, a trigger link is clicked, a two-step order form being completed, and more. In our example, we’ll use an appointment booking to export information into Google Sheets.

-   Create a trigger for your webhook by adding it to the workflow.
-   Here, we’re creating a trigger based on a specific calendar so that when appointments are booked in that calendar, the webhook will export information to Google Sheets.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdk6EvPVTgcUjd2a3m_u0sWJs9hizypcU9G9mAb2Huei___l08qIg_4RLpYW-OgbwBE_jbXUXKZQouI23szU4nfOzfPGIJTDuObOi0c0Js2WHW_PPsUoYjDWmgSJRSWtzQ9sUeRhcYHCT_9eNcmc1rX1_c?key=0T9UZYrY4XS_P8W5IhPmeA)

-   We’ll need to retrieve the Webhook URL from Zapier to paste into a Webhook action added after the trigger. Keep this window open for now so you can come back and paste the Webhook URL.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdWeCL1twJ4NhtsnYxC3y3NYAtfxVSZsKiY_V1R2JJtoShc4gr2vqSG9Qf9unVF4xaAKzEXqzH1ID681WnefTZKr01hPFuZi7U_AsO2j6jKJJxkywVV9bKaENFM15wlD771rBb1MdVZBJqAGCcOPA6tx0mc?key=0T9UZYrY4XS_P8W5IhPmeA)

![](https://assets2.modalsupport.net/1764170872298-image9.jpg)

### **Step 3: Set up the Webook in Zapier.**

-   In Zapier, set up your webhook accordingly so that the webhook app does the ‘catch hook’ action**.**


![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfGn_MYpM30m8gUSO1XelXhi5yKU6m415Ac2JI3TAx3mn_AU1owFZ27ZjWiiFB9YMKKcdH_lby8Pl662JxbccNPlMSVXLZaxw_o8zs8qVtdjMgsEpHTSroaRS4mFJd71rTtUzD0PF2cqDPaHZgijFTIvro?key=0T9UZYrY4XS_P8W5IhPmeA)

-   The Custom Webhook URL will be created.
-   Copy this URL and paste it into the trigger in the previous step.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXc6Pgan1KNU3OpknlmaGwcTgSOCHJa_LiH89GZNbsdgfQKZsPR6Ji6lgvR8pYOORI1Nn8L4BqxN2ZQTMclad-cq0-tflanDNthQNnX0jPtkfGyagf402IUGQ1rmszRO_vV2T6g6PIK7pUTmTASysL2I5lQ?key=0T9UZYrY4XS_P8W5IhPmeA)

-   Save and activate the trigger.

### **Step 4: Test the Webhook**

-   In your system, navigate to the calendar you created the appointment booking trigger for.
-   Book an appointment in the calendar as a test.
-   Back in Zapier, click “Find Data” to retrieve the test appointment data you just submitted.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXe2RBGfZysbWv2Ccn6IgJL8BAuIx_JGjJTKXyMrHk6QfLbMunIVKoIDzDa0Y7Xf76dqfxbF22Nzfeg97pxrc7C8YuV9Go2Avv6xQp_8hR549paHepcuCvXHFBEdzG_-K5WuXAo8S3fFkZ1ew5945r0jKQ?key=0T9UZYrY4XS_P8W5IhPmeA)

-   Now in Zapier,  you can “Create Spreadsheet Row in Google Sheets”.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdqRp-jRxRc9o4h3CmzpgRF7Fos-rqO-juZ97plIjmJZ_K1ho_jhBBWMcOIEn_D30Pu7KLLNFbqTizOphW28pZVGCQQbWC8fN5eNCm6frddJqWgs3kMdJyphLnNTtne4w5JF9l4xsMRdnwwgclIZ2c_WMc?key=0T9UZYrY4XS_P8W5IhPmeA)

-   Map the fields appropriately. Here you’re essentially telling Zapier to pull the first name to the First Name column, the last name to the Last Name column, etc. from the webhook.
-   Click Continue > Test & Continue > Done Editing.
-    Your Zap is now ready!

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfirPQ2VMlBauhhqRxCpfYpeZTgj5-NUKwNq8gBLavOlglIw9o5jbbgEMqYt7ZKg_YCDimc337Jiy9ToLZJU7JJmkt2cY4JC3luqPa27ZcTh7l1Nkuq9DOQJlh8NTc2YRTPFva43kWZt_vAjIrCcKq3xS8?key=0T9UZYrY4XS_P8W5IhPmeA)

-   Navigate to Google Sheets to confirm it is working correctly, and you’re all set.

## FAQs




**Question:** What should I do if the webhook doesn't seem to be working?
**Answer:** If the webhook doesn’t work as expected, double-check that the Webhook URL is correctly pasted into your workflow, and ensure that the trigger is activated. You can also review the steps in Zapier, make sure the correct trigger is used, and try testing again.




**Question:** Can I use this webhook setup to export data to other platforms besides Google Sheets?

**Answer:Yes, Zapier allows you to connect the webhook to various platforms beyond Google Sheets, including systems, project management tools, and other databases. The steps will be similar, but the actions you set up after catching the webhook data will differ based on the platform.




**Question:** What is the purpose of the ‘catch hook’ action in Zapier?
**Answer:** The ‘catch hook’ action in Zapier is used to capture incoming data from the webhook. This action acts as the initial point of data entry in Zapier, enabling the integration between your system and other connected platforms.




**Question:** How do I confirm that my Zapier integration with Google Sheets is working?
**Answer:** To confirm the integration is working, navigate to your Google Sheets after setting up and testing the Zap. Check if the data from the test appointment or trigger action appears in the correct columns. If the data is displayed correctly, the integration is successful.




**Question:** Why is it important to map fields correctly in Zapier?
**Answer:** Correctly mapping fields ensures that the data is organized accurately in your target application (e.g., Google Sheets). Proper mapping helps maintain data integrity and ensures that the exported information is useful and correctly formatted.




**Question:** What happens if I change the trigger in my workflow after setting up the webhook?
**Answer:** If you change the trigger in your workflow, you may need to update the webhook settings in Zapier to ensure the data is still captured correctly. It’s also advisable to test the webhook again to verify that the integration continues to work as expected.




**Question:** Can I automate other actions with the data captured by the webhook in Zapier?
**Answer:** Yes, you can automate various actions with the data captured by the webhook in Zapier, such as sending emails, updating records in your account, or notifying your team. Zapier allows you to build complex workflows using the data received from the webhook.




**Question:** Can I use a webhook in Zapier with multiple triggers, such as form submissions or appointments?
**Answer:** Yes, you can use a webhook in Zapier with multiple triggers like form submissions, appointments, or link clicks, and export data to various platforms. Simply set up your desired trigger to activate the webhook.




**Question:** What is the very first step I must take in the system to begin the export process?
**Answer:** You must first create or select a specific **Workflow trigger** to execute the webhook. This trigger can be based on several actions, such as a form or survey submission, an appointment being booked, a trigger link being clicked, or a two-step order form being completed.