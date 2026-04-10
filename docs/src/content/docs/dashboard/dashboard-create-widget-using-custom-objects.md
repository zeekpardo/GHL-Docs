---
title: "Dashboard: Create widget using Custom Objects"
description: "Understanding your business data starts with how you visualize it. For organizations that manage processes or relationships beyond standard elements, Custom…"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/Ihu5lyhOOOgiO9x0up1J"
sourceId: "Ihu5lyhOOOgiO9x0up1J"
category: "Dashboard"
---

Understanding your business data starts with how you visualize it. For organizations that manage processes or relationships beyond standard elements, **Custom Objects** offer the flexibility to structure and track unique data types. With the **Custom Objects Widgets** in Dashboards and Reports, users can build tailored visualizations that reflect their specific business workflows, processes, or entities, unlocking deeper insights and better reporting clarity.

Whether you’re tracking pets, vehicles, memberships, assets, or any custom data structure, this feature makes it easy to design dashboards that align perfectly with your operations.

### Key Features & Benefits

-   **Custom Object Widgets:** Create visual components (charts, graphs, metrics) based on custom objects you define.
-   **Data-Specific Widgets:** Track key metrics like **count, sum, and average** of custom object records.
-   **Full Design Control:** Customize filters, visual types, and themes to match your dashboard’s design and reporting needs.
-   **Centralized Insights:** Combine standard data with custom object metrics for a comprehensive analytics experience.
-   **Schedule Reports:** Share custom-object-based dashboards via scheduled reports.

### How to Use

#### Step 1: Create a Custom Object

1.  Navigate to **\> Settings > Objects**.
2.  Click **Add Custom Object**.
3.  Fill in the object details:

**Singular Name:** e.g., Pet

**Plural Name:** e.g., Pets

**Internal Name:** Auto-generated (editable via the </> icon)

**Primary Display Field Name:** e.g., Pet Name or Pet ID

**Icon & Description:** Choose an icon and write a short description to help identify its purpose.

Click **Create Custom Object**.

![](<https://assets2.modalsupport.net/1764245557998-unnamed - 2025-11-27T201225.964.jpg>)

#### Step 2: Record IDs in Lists & Record Details

**List View:** You can add **Record ID** as a column via **Manage Fields**. It’s **disabled by default** to keep your list view clean unless you choose to enable it.  

**Record Detail View:Record ID** is displayed in the **footer** of the record detail panel.

![](https://assets2.modalsupport.net/1773328927358-image8.png)

1.  Navigate to the List View → click Manage Fields → enable Record ID.

![](https://assets2.modalsupport.net/1773328958161-image7.png)

2\. Open a record and scroll to the detail panel footer to view or copy the Record ID.

#### Step 3: Bulk Import for Custom Objects

You can bulk import Custom Object records using the same create and update process available for Contacts and Opportunities.

1.  Navigate to Custom Object → Import.

![](https://assets2.modalsupport.net/1773329000510-image3.png)

2\. Upload your CSV file.  
Select an import mode:

-   **Create** – Adds new records  

-   **Update** – Updates existing records (Record ID required)  

-   **Create + Update** – Updates records if a Record ID exists; otherwise creates new ones  


![](https://assets2.modalsupport.net/1773329036430-image6.png)

3\. Map the columns, review your selections, then start the import.

![](https://assets2.modalsupport.net/1773329075569-image4.png)

![](https://assets2.modalsupport.net/1773329090679-image5.png)

4\. View progress and results for Bulk Actions.

![](https://assets2.modalsupport.net/1773329121339-image1.png)

![](https://assets2.modalsupport.net/1773329140650-image12.png)

#### Step 4: Add the Custom Object Widget to a Dashboard or Report

1.  Open an existing **Dashboard or Report**.
2.  Click **Edit** → **Add Widget**.
3.  Scroll to the **Custom Objects** section and select the object-specific widget you want.

![](<https://assets2.modalsupport.net/1764245582960-unnamed - 2025-11-27T201250.932.png>)

1.  Customize:
    -   Apply filters
    -   Choose chart type (bar, pie, line, etc.)

![](<https://assets2.modalsupport.net/1764245602279-unnamed - 2025-11-27T201314.143.png>)

-   Set themes and labels

![](<https://assets2.modalsupport.net/1764245622162-unnamed - 2025-11-27T201333.860.png>)

1.  Click **Save** to apply changes to your dashboard/report.

#### Optional: Schedule Reports

-   Once the dashboard/report includes your widget, you can schedule it to be delivered regularly via email to users or teams.

### FAQ's




**Question:** What is a Custom Object?
**Answer:** A custom object is a user-defined data structure that allows you to store and track information outside of standard objects like Contacts, Opportunities, or Deals.




**Question:** Can I edit a custom object after creating it?
**Answer:** Yes, you can edit the internal name, display name, icon, and description after creation, though structural changes should be made cautiously.




**Question:** Are there limits to how many widgets I can create?
**Answer:** There is no hard limit, but performance may vary based on the number of widgets and complexity of filters.




**Question:** What metrics can I track using custom object widgets?
**Answer:** You can track **count**, **sum**, and **average** of numeric fields in the object records.




**Question:** Can I combine custom object data with standard data in reports?
**Answer:** Yes, you can merge custom object metrics with standard data in reports and dashboards for a more comprehensive view.




**Question:** Can I schedule reports that include custom object widgets?
**Answer:** Yes. Once your dashboard or report includes the widget, you can schedule it to be delivered regularly via email to users or teams.  




**Question:** Do Custom Object widgets update automatically as new records are added?

**Answer:** Yes. Dashboards and Reports are dynamic. As soon as a new record is added to your Custom Object (manually or via API/Workflow), the widgets will reflect the updated metrics upon the next refresh of the dashboard.