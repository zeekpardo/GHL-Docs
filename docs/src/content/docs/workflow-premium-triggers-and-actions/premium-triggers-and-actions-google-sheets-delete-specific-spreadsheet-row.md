---
title: "Premium Triggers and Actions - Google Sheets - Delete Specific Spreadsheet Row"
description: "Premium Triggers and Actions - Google Sheets - Delete Specific Spreadsheet Row"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/nzk6AyTDwmn5YXn4gj9S"
sourceId: "nzk6AyTDwmn5YXn4gj9S"
category: "Workflow Premium Triggers and Actions"
---

**Premium Triggers and Actions - Google Sheets - Delete Specific Spreadsheet Row**

The "Delete Specific Spreadsheet Row" action enables us to delete the contents of a specific row by specifying its row number. This action will clear the values in all of the columns of that row.

## **Navigation**

Here’s how to navigate and set up the action for **Google Sheets: Delete Specific Spreadsheet Row**:

**Create a New Action**:

-   Open your workflow builder.
-   Click on "**Please select action**" under your workflow trigger.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcd0WJIEBniFimDNG5j7lBEBRG3XhJHApFM3VK7wAGOmLZdvVH7tvse4VfgVelh4Ajw55YAS9oUtYGC7YeZNIy0covZkdPv5pvGeXbl7bRkba38QEurw5X6uZ0FwB6iA3HNhziQ?key=0D6bdAXNqiuRLBbdfqQKuA)

**Search for Google Sheets**:

-   In the search bar on the right, type "Google Sheets."
-   Select the **Google Sheets** action from the list.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeeCGVhAhxz32YxJZLelipdsElKPRXvlnpb6F2DdH-D0vubAbmzTXQzVG_nScF-U8XiuAU6lgt7zdRT_OKTOI68d-wdDJ0s-SaIUMLT7eYZwwkEqP4Df6d6d55G_Cj1N09r2O-GBg?key=0D6bdAXNqiuRLBbdfqQKuA)

**Choose the Action**:

-   Once Google Sheets is selected, look for the specific action: **Delete Specific Spreadsheet Row**.
-   Click on it to configure the action settings.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcmCNloWzufVrJrpVUk5vYAQ1rqJv-3ub9wRDA2n7hfv5o7if7Ix9Z2DSvUu5WYXt9lxCevGvgDt4giWkQ9ueSxjLf3wrHs4t-J3bLsJVJSGVpShhZteCmIhrta-9vIxseO-F8q?key=0D6bdAXNqiuRLBbdfqQKuA)

### **Insert Row Number:**

Specify the row number that you wish to delete in the spreadsheet.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcioBVg7NWdipjjYKr7hzWMLrUJq6KYs5viTVM1tXgL2iQPUiVFwu2udG_F2CDYRpcRKCLiIhgrx3wbOM5LXjiulbLMOMmJ7Y-tji1IAoHp0wppUqUXrNfd3PW2s4YEprjRjuxjkaCnwvs19A8fD18xOxRm?key=0D6bdAXNqiuRLBbdfqQKuA)

You may also provide the Row Number using the Custom Variable Picker to use dynamic values.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdrTVpOwb6Xkqluo9Sb6SOLunRdoB26ztNpH224uY8CbZKuL2ACM-EFgMcwCHL51tzDr474m5VdS4Oychfr2iPU7j9RjYjZbiwBfuduSQlXSX8o_gDeJQyyyxkmRIafN76eMxRGd7YyBT5ekqiNMgcGiYw?key=0D6bdAXNqiuRLBbdfqQKuA)

**Note**: When you use the "Delete Specific Spreadsheet" action, it clears the contents of the row, but it does not permanently remove the row itself. You may also provide the Row Number using the Custom Variable Picker to use dynamic values.

## FAQs




**Question:** What does the "Delete Specific Spreadsheet Row" action do?
**Answer:** This action clears the values in all columns of a specified row in a worksheet. It allows you to delete the contents of a row based on its row number without removing the row entirely.




**Question:** How do I select which worksheet to delete a row from?
**Answer:** You can select the desired worksheet within your spreadsheet using the dropdown menu during the setup of this action. Ensure that you choose the correct worksheet before specifying the row number to avoid unintentional data deletion.




**Question:** How do I specify which row to delete?
**Answer:** You need to enter the row number manually where the action should take place. Additionally, you can use the Custom Variable Picker to dynamically determine the row number, allowing for more flexibility in automated workflows.




**Question:** What happens to the row after the "Delete Specific Spreadsheet Row" action is performed?
**Answer:** The contents of the row are cleared, but the row itself remains in the spreadsheet. This means that while the data is deleted, the row remains empty and will still occupy its position within the worksheet.




**Question:** Can I use dynamic values to delete a specific row?
**Answer:** Yes, you can use the Custom Variable Picker to input a dynamic value for the row number. This is useful when the row number may vary depending on the conditions set in your workflow.




**Question:** Does this action permanently delete the row from the spreadsheet?
**Answer:** No, the action only clears the contents of the row; it does not remove the row itself. The row remains empty and in place.




**Question:** Will deleting a row affect formulas in my spreadsheet?
**Answer:** Clearing the row’s contents may affect formulas that reference that row, depending on how your formulas are set up. Make sure to review any dependent formulas before using this action.  




**Question:** How do I access the "Delete Specific Spreadsheet Row" action within the workflow builder?
**Answer:** To access this action, click on "Please select action" under your workflow trigger and search for "Google Sheets" in the search bar. Once selected, look for and click on the "Delete Specific Spreadsheet Row" action from the list to begin configuration.  




**Question:** Does this action shift the remaining rows up after clearing the data?

**Answer:** No. Because the action **clears the contents** but does not remove the row itself, the spreadsheet structure remains the same. Row numbers will not change, and there will simply be an empty row where the data used to be.




**Question:** Can I use dynamic values to determine which row is deleted?
**Answer:** Yes. You can provide the row number using the Custom Variable Picker. This allows the workflow to use dynamic values to identify and clear the specific row.