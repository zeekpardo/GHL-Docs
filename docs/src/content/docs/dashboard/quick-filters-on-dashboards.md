---
title: "Quick Filters on Dashboards"
description: "Quick Filters on Dashboards"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/3yJ3kso1uKoQCrT4UfMj"
sourceId: "3yJ3kso1uKoQCrT4UfMj"
category: "Dashboard"
---

**Quick Filters on Dashboards**

Quick Filters allow users to analyze dashboard data without requiring edit permissions. This feature enhances flexibility by enabling users to apply personalized filters without altering the dashboard’s core structure. Since Quick Filters are saved at the user level, each individual can tailor their own data view without affecting other users.

This guide explains the key benefits, how to add and use Quick Filters, and best practices to ensure efficient data analysis.

### **Key Features and Benefits**

**User-Level Filtering** – Each user can set up their own filters without affecting others.  
**No Edit Permissions Required** – Users with view access can apply Quick Filters without modifying the dashboard.  
**Preserves Dashboard Integrity** – Prevents unintended changes while allowing flexible data exploration.  
**Customizable Filtering Experience** – Users can apply and save filters for their individual workflow.  
**Seamless Data Analysis** – Quickly refine dashboard data without needing manual adjustments.

## **Adding Quick Filters to a Dashboard**

To enhance dashboard flexibility, users can add Quick Filters by following these steps:

### **Step 1: Navigate to the Dashboard**

Open the dashboard where you want to apply Quick Filters.

### **Step 2: Access the Quick Filters Menu**

Click on the **Quick Filters** button at the top of the dashboard.

![](https://assets2.modalsupport.net/1773256496731-image7.png)

### **Step 3: Add Filters**

-   Click on **\+ Add Quick Filters**.
-   A sidebar will open, displaying available filters categorized by data source.
-   Use the **search bar** to find specific filters or browse categories.

![](https://assets2.modalsupport.net/1762444620003-image.png)

![](https://assets2.modalsupport.net/1762444740819-image.png)

### **Step 4: Select Filters**

-   Check the boxes next to the filters you want to add.
-   Click **Add** to proceed.

![](https://assets2.modalsupport.net/1762448287721-image.png)

### **Step 5: Review and Apply**

-   Review the selected filters and add **descriptions** if needed.
-   Descriptions help users understand the purpose of each filter.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXd0kMkeo2XScs1GmpkejF1ukKq4h6c4zV7Bb7oWOAmB9y_9-KSPrJ5XasW1iqunPRaOlq1fBCk5cm7Jyi8A-ijeFQYQ7RIM_J73h7K_76CJht9ssWBLOmkiPHWA2T8JVm1pEofc8w?key=v4BScrS8YwMwHCHmyW8-oOAz)

-   Click **Apply** to finalize the setup.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdz7zBB6gJi4g-6ghHAJSlTnISlk7uBXISwziU9KRzSIqu1Z69ZRNDqpvK5-hoWBftB6AnbnV30EuG7nAgUwsGAJVQ4GSyyyYcUTFNicxWTKh2f_R55isJXtYTSqZ2-FGw18v-0?key=v4BScrS8YwMwHCHmyW8-oOAz)

### **Important Notes:**

**Quick Filters are dashboard-specific** – they must be configured separately for each dashboard.  
**Only users with full or edit access** can add Quick Filters.  
**Users with view access** can apply filters but cannot modify them.

## **Using Quick Filters**

Once Quick Filters are set up, users can easily apply them to refine their data analysis.

### **Step 1: Navigate to the Dashboard**

Open the dashboard where Quick Filters are configured.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcCVC84SjjYkyXOiyqcI-uONq9c-laGoPTAccRNTGmVojAL0Lo3myn7JECb-QiZXfAZO2MUbvt385igmLXL6WEbNm_KOQYlm9LbFxP3J-hs2UcL9R-hMF3b9T8Emfjs4hB_dvJGqQ?key=v4BScrS8YwMwHCHmyW8-oOAz)

### **Step 2: Apply a Filter**

-   Use the **Quick Filter bar** to select and apply a filter.
-   Adjust filter properties to refine your view.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfid6R0f4xJRYcR9_1xCa13VK0l5wmYNc8SyIYG4dqYuagY3zf5hrCdSr1z_4B7wzHs8O_v7_c7ZYDmPEW6t2FedLyPs5TKWjo5ONcy6XwmPh-M8u6KOscs8uAGZsjtt0iIczg9TA?key=v4BScrS8YwMwHCHmyW8-oOAz)

### **Step 3: View Filtered Results**

-   Widgets will update dynamically based on the applied filters.

### **Important Notes:**

**Filters apply only to widgets that use the same data source as the filter property.Filters only affect the user who set them**—they do not change the dashboard view for other users.  
**Filters are saved within your browser session**—if you revisit the dashboard in the same session, your last-selected filters will remain applied.

## **How Quick Filters Work with Existing Widget-Level Filters**

Quick Filters and widget filters work **together** using **AND logic**. This means that Quick Filters do not override widget filters; they **add to them**.

**Example:**If you set:

-   **Widget Filter:** Appointment Status = Confirmed
-   **Quick Filter:** Appointment Status = Cancelled

The system will attempt to show appointments where the status is **both Confirmed AND Cancelled**—which is not possible, leading to no data being displayed.

### **Best Practice:**

-   Use **widget filters** for specific widget-level needs.
-   Use **Quick Filters** for broader, team-wide filtering.
-   Avoid applying contradictory filters to prevent missing data.


## FAQs  




**Question:** Can Quick Filters be applied without edit permissions?
**Answer:** Yes, users with view access can apply Quick Filters without modifying the dashboard.




**Question:** Do Quick Filters affect all users?
**Answer:** No, Quick Filters are saved at the user level and do not impact other users’ views.




**Question:** How long do Quick Filters remain applied?
**Answer:** Filters are saved within the current browser session. If you close and reopen the dashboard, you may need to reapply them.




**Question:** Can Quick Filters override widget-level filters?
**Answer:** No, Quick Filters and widget-level filters work together using AND logic. They refine the data further but do not replace existing widget filters.




**Question:** Can Quick Filters be used on all dashboard widgets?
**Answer:** Filters apply only to widgets that use the same data source as the selected filter property. If a filter does not match a widget’s data source, it will not affect that widget.




**Question:** Are Quick Filters dashboard-specific?
**Answer:** Yes, Quick Filters must be configured separately for each dashboard and do not carry over between different dashboards.