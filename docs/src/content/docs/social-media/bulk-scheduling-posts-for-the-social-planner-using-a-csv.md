---
title: "Bulk Scheduling Posts for the Social Planner Using a CSV"
description: "Bulk Scheduling Posts for the Social Planner Using a CSV"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/7hyhTHNs7oyYukxIPixn"
sourceId: "7hyhTHNs7oyYukxIPixn"
category: "Social Media"
---

**Bulk Scheduling Posts for the Social Planner Using a CSV**

Bulk Scheduling in the Social Planner allows you to prepare, organize, and set up posts for your social media channels ahead of time. You can create content calendars using CSV/XLSX files with post details and upload them into the Social Planner. The Social Planner will make each post based on the information given. Bulk Scheduling posts using CSV/XLSX files will simplify the effort needed to build your social media presence. 

## **Part 1: Setting up your file**

### **Step 1: Create a CSV/XLSXfile (This can be done in Microsoft Office Excel, Google Sheets, or Apple’s Numbers, to name a few applications)**

-   If you already have a content calendar created, you’ll want to make sure your columns and cells are labeled correctly

### **Step 2: Label the columns as follows in order:** 

![](https://assets2.modalsupport.net/1763748783309-image.png)

-   **PostAtSpecificTime (yyyy-MM-dd HH:mm:ss)**

This is where you’ll specify the date and time you want the post scheduled. You MUST follow the format specified in the header: year-month-date (in numerical fashion) hour:minute:second. Notice there is a space between the date and time; this is crucial. You need to write the time in 24-hr format instead of 12-hr format (so, 13:00:00, instead of 1:00PM).

**_NOTE:_** Most sheet/CSV applications automatically format dates as you normally expect — MM/dd/yyyy. Be sure to check this and edit to follow the Social Planner’s settings.

-   **content**

This is where you’ll write the caption for each post. You must abide by the character limits for each platform in order for your post to successfully upload: 

-   Facebook: 62000 characters
-   Instagram Business Account: 2200 characters
-   LinkedIn: 3000 characters
-   Twitter: 280 characters
-   GMB: 1500 characters

You can include hashtags.

-   **link (OGmetaURL)**

If your post includes a link (to a blog post, for example), you’ll include it here. 

**_NOTE:_** If your post also includes images, a GIF, or videos, the Social Planner will consider these elements as the post’s main elements and will move the link into the caption.

-   **imageUrls**

Image URLs will go here as pngs, jpeg/jpgs, and other supported formats. You can add up to 10 images per post, separating each by a comma and a space. 

**_NOTE:_** You will need to check with the social platform for proper image dimension and sizing specifications. 

-   **GIFUrl**

Paste GIF URLs for your posts

-   **videoUrls** 

Add video URLs in the accepted formats (MP4 and MOV) for each post. Like images, you can add up to 10 videos in a post, separating each by a comma and a space. 

**_NOTE:_** GMB does not accept videos

**_NOTE:_** Each post can only have **one media format** when using a CSV file: images, a GIF, or videos. Mixed media posts will not upload. Only Facebook, LinkedIn, and Twitter accept GIFs. 

**_NOTE:_** You can only include **90 posts** in each CSV file.

## **Part 2: Uploading and Scheduling Posts**

### **Step 1: Navigate to the Social Planner: Marketing> Social Planner**

### **Step 2: Click on New Post in the right-hand corner then “Upload from CSV”** 

-   Choose the right CSV file from your computer and hit Next.

![](https://assets2.modalsupport.net/1763748756431-image.png)

**_NOTE:_** Make sure to upload your file with at least 10 minutes to spare from the time of the earliest scheduled post. You’ll want a time cushion in case the system takes longer to process the data. 

-   Choose your upload type:

1\. **Basic CSV:** Supports post content, date, media, and OG link

2\. **Advanced CSV:** Unlocks full capabilities, including: Platform-specific post types (Post, Story, Reel, Shorts), Watermark, tags, categories, follow-up comment, Google Business Profile (post types, call-to-action, events, offers), YouTube (title, privacy, video type), TikTok, Pinterest board selection, and more

![](https://assets2.modalsupport.net/1763748715930-image.png)

### **Step 3: Select Socials** 

-   Specify the channels relevant to the scheduled posts on your CSV file. Search for them using the search bar or scroll through. 

![](https://assets2.modalsupport.net/1763748675352-image.png)

### **Step 4: Review uploaded posts**

-   As the CSV finishes uploading (“In Progress” → “Review & Schedule”), you’ll be able to review, edit, and fix any errors in your posts.

![](https://assets2.modalsupport.net/1763748636049-image.png)

-   Your posts will display in list view, but you can click on the **expand** icon to see full posts.
-   The Social Planner will flag errors that you’ll be able to go in and resolve.

![](https://assets2.modalsupport.net/1763748606410-image.png)

### **Step 5: Once you resolve any errors and are satisfied with how each post looks and its scheduled date/time, you can ‘Import Post(s).’** 

-   You can Import Posts to the Social Planner by clicking Schedule 

![](https://assets2.modalsupport.net/1763748578872-image.png)

![](https://assets2.modalsupport.net/1763748503170-image.png)

**Please Note:** 

Due to recent changes by Google, we can no longer process Google Drive links in CSV imports. We recommend uploading media to the Media Library and using those links in your CSV file instead.

## **Bulk Delete Posts from the Planner and Public API**

The bulk delete feature allows users to easily remove multiple posts from the planner at once, streamlining content management and reducing the effort required to correct scheduling errors or update content. This functionality is especially beneficial when managing large volumes of posts, enabling users to quickly clear unwanted posts for a more organized view. Additionally, users can perform the bulk delete operation through public APIs, enhancing flexibility and automation in managing posts across various platforms.

**How to Use:**

1.  Navigate to the planner’s list view.
2.  Select the posts you want to delete (all, some, or individually).
3.  Click on the "Actions" button at the top of the table, then select "Delete selected posts."

![](https://assets2.modalsupport.net/1763748476549-image.png)

4\. Confirm the deletion.

![](<https://assets2.modalsupport.net/1763748447530-Screenshot 2025-11-21 230649.png>)

**Important Notes:**

-   The deletion only affects the planner; the posts remain on the social platforms.
-   The public API supports a maximum of 50 posts in a single request.
-   Posts in the "Published" status cannot be deleted through this feature.

## FAQs




**Question:** Can I schedule posts for multiple platforms using one CSV file?
**Answer:** Yes, you can schedule posts for multiple platforms within the same CSV file. Just ensure that the content follows the character limits and media requirements for each platform.


**Question:What happens if my CSV file has more than 90 posts?
**Answer:** The system only supports up to 90 posts per CSV file. If you have more than 90 posts, you’ll need to split them into multiple CSV files.


**Question:Can I schedule posts at different times for different platforms within one CSV file?

**Answer:** Yes, each row in the CSV can have its date and time, allowing you to schedule posts at different times for different platforms.


**Question:What should I do if my CSV file isn’t uploading correctly?
**Answer:** First, check that the date and time format is correct and that your columns are labeled accurately. Also, ensure that you are not using mixed media (images, GIFs, and videos) within the same post, as this is not supported.


**Question:Can I include hashtags and links within the content column?
**Answer:** Yes, you can include hashtags and links directly within the content column, and they will be published along with your post.


**Question:Are there specific image dimension requirements for each platform?
**Answer:** Yes, each platform has specific image size and dimension requirements. You’ll need to check with each platform to ensure your images meet their specifications.




**Question:** Can I assign different categories or tags to posts via CSV/XLSX?
**Answer:** Yes, using an Advanced CSV, you can assign categories, tags, watermarks, and other post attributes during upload.


**Question:Do I need to consider image dimensions for each platform?
**Answer:** Yes, each platform has specific image size requirements. Check each platform’s specifications to ensure your images display correctly.




**Question:** Can I use Google Drive links for my images or videos in the CSV file?

**Answer:** No, Google Drive links can no longer be processed due to changes by Google. It is recommended to upload your media to the Media Library and use those specific links in your CSV file instead.  




**Question:** Can I upload a post that contains both a video and an image?

**Answer:** No, each post can only contain one media format (either images, a GIF, or videos). Mixed media posts are not supported and will not upload.  




**Question:** Can I schedule a post to "Repeat" using a CSV file?

**Answer:** No. The CSV import creates static, one-time posts. If you want a post to repeat, you should import it as a draft and then manually set the repetition settings within the Social Planner.




**Question:** Can I use the Bulk Delete feature to remove posts that have already been published to my social media accounts?
**Answer:** No. The bulk delete feature specifically excludes posts with a "Published" status. Additionally, performing a deletion within the Social Planner only removes the post from the planner's internal view and schedule; it does not delete the post from the actual social media platforms.