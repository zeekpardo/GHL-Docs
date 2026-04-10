---
title: "How The Duration in Days Filter Works"
description: "This tutorial will cover the duration in days filter for Contacts. This filter means an action will fire once every X number of days (you can customize any…"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/qmRpb29wGDPPtjS20ff6"
sourceId: "qmRpb29wGDPPtjS20ff6"
category: "Triggers"
---

This tutorial will cover the duration in days filter for Contacts. This filter means an action will fire once every X number of days (you can customize any number of days for X.) For this tutorial, we will use 7. The actions in the _Duration in Days Trigger_ will only be applied every 7 days for any contact that hits that day mark, or an exact multiple of it 7, 14, 21, 28 days ago, etc.)

You can do many things with the duration in days filter, customizing it for your business however you wish. Commonly it’s used to remove stale/old opportunities. For this use-case example, we’ll show you how to remove stale opportunities older than 7 days. In this example, you have two leads, John and Sally. John's last activity was 9 days ago, and Sally's was 7 days ago. This trigger **will not** fire for John because his last action was 9 days ago (Even though it's more than 7, it's not exactly 7). It **will** fire for Sally because her last activity was exactly 7 days ago. The trigger will continue to fire every 7 days, so John will eventually be caught in one of the multiples of 7 (since he’s currently at 9 days, he’ll get caught at the next multiple of 7 – 14 days.)

**_NOTE_:** The Stale Opportunities trigger **will not** fire retroactively but **will** fire on the multiple of the duration days. Part 2 below provides a solution for this.

## Part 1: Create a Trigger for Filtering Opportunities based on Duration in Days

### Step 1: Create a Trigger

-   Navigate to Triggers > + Add Trigger
-   For **Part 1**, the automation should be triggered by **Stale Opportunities.**
-   Define the filters as shown in the screenshot below:
    -   In Pipeline - (_Choose the Pipeline_)
    -   Pipeline Stage - (_Choose the Stage_)
    -   Duration in Days - (_Choose a duration; we’re using 7 for the example_.)
-   For **Part 2**, the action performed would be Remove Opportunity, and you’d select the specific Pipeline.

![](https://lh3.googleusercontent.com/lWy1ERE9R-E2scRu3foC4xbo4Wv4tLfXt80mL7_CAiCFl2VZuwjUpJ-HLqLJDF4lgpvr99xj0Hmu9Aq4nXgk0TOLGFpIU3FJ1Lg1szmY1kjeqe6zS9GYS7pxopt27quCM9lYSF-RWoqXRN9_OrcGjvM)

-   You can add any additional actions you wish under + Add Action (such as adding/removing a tag, sending yourself a notification, etc.)
-   Save and Activate the Trigger.

## Part 2: A Workaround For Retroactive Application 

Since won’t retroactively apply the trigger, this will allow you to ‘clean up’ any old Contacts that are in\_\_CompanyName and considered an old opportunity before the trigger in Part 1 was created. 

### Step 1: Create a Tag

-   Navigate to Settings > Tags.
-   Name this anything you’d like, such as “stale opp” or “stale opportunity”. 

### Step 2: Create a Trigger Using the Tag

-   Navigate to Triggers > + Add Trigger
-   For **Part 1**, the automation should be triggered by a Contact Tag.
-   Define the filter as “Tag Added” and choose the tag you created in Step 1.
-   For **Part 2**, the action performed would be Remove Opportunity, and you’d select the specific Opportunity.

![](https://lh4.googleusercontent.com/xSoFeXVWW3BYd-EfPgf5dxKotwLZDt0h73k6C4h5BL_FyVju4FtkcMrowMsgaD4mpaYFDZ_HYrgkeHr7ndtETr-H3tvD6cdjPHDvttavI1rteMyCGeexpYp8S83WH7IJ1HF3bXFOgYouWVOlvyHMVMI)

-   Save and Activate the trigger for it to run.

### Step 3: Create a Contact Filter

-   Navigate to Contacts/Smart Lists
-   Click “More Filters” to add a filter.
-   The first filter should be to filter the pipeline and pipeline stage, selecting from the dropdown.​
-   The second will be “last activity more than 7 days ago”.​

-   Once you have your contacts filtered out, you can select them and then click “add tag” from the bulk actions buttons at the top of the page. Assign the tag you created in Step 1. This will fire the trigger to remove all of these contacts from your pipeline stage.