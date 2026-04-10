---
title: "How To Create a Custom Date Trigger"
description: "NOTE: Depreciated feature no new update required"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/dUV1EFgY2Q0ftYVIPYDb"
sourceId: "dUV1EFgY2Q0ftYVIPYDb"
category: "Triggers"
---

**NOTE: Depreciated feature no new update required**

You may want to create a custom date trigger to use for a custom holiday campaign or another specific date action you want to fire off in . Follow this tutorial to learn how to create and use the custom date trigger. (For an overall understanding of Triggers, check out our "How Triggers Work" tutorial.)

### Step 1: Define an Audience. 

The trigger you'll create momentarily will require a trigger or some other "defined audience" in order to fire off appropriately. The easiest way to do this is to apply a tag to your contacts. For this example, we're creating a custom date trigger for New Years. Perhaps you want to send a "Happy New Year" communication to your entire database. You'd want to ensure every contact in has a general tag.

-   Create a general tag such as "Database" or "General" (in our example we use "test".)
-   Add this tag to your contacts.
    -   You can bulk-add the tag using the Bulk Actions in your Contact section, you can create a trigger to add it to contacts in a specific campaign that applies to all contacts, or you can set a best-practice to add the tag during an import of any new contacts into .

### Step 2: Create the Custom Date Trigger

-   Navigate to Triggers
-   Create a New Trigger

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeoTFN2LV_7jNPy5kIPypPz0NqDiPTdnJFgeCemmQsVecHMF9hOMq0QzTKwP0AafNOZXt0IllT3TpHRK0EvzHqRCY_OCRQwC3oZ-IPjNla5I8zLuuOt9TOzfKwYwRHNeH6o8JcoQduO7ieoZdSnXZs-TpSf?key=yoROH7k3sbyDCRyg08G7Jg)

-   For Part 1, choose Custom Date Reminder.
-   Define filters for **Month Is** and **Day Is**. Choose a month and day. In this example, we're using December 31, for a "Happy New Years" type campaign or message.
-   Add the **Has Tag** filter, and choose a tag.
    -   **_NOTE:_** you must define a specific audience using a tag or custom field. If you just choose a month/day the trigger will not fire. will assume NO ONE instead of EVERYONE without a particular audience defined.
-   Fill out Part 2, and choose the action to fire off, such as adding contacts to a campaign or sending an email or SMS.
-   Save the Trigger.
-   Change the dropdown from "Draft" to "Activate" to start using your trigger.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfIln-9L3_tKxncChUKhQ-BbAQ4ZqvP1_gLfWq7XxipZ5rnGHkZlEwMHnxZHqCiS04fvH93PSsZbT_Ckp7h4-eQCv65sN_bItDM82CvGOHkyPYy0L72tJrbOljgJWv5h54pY6n3YOARszpt3OxdWUaJsfZX?key=yoROH7k3sbyDCRyg08G7Jg)