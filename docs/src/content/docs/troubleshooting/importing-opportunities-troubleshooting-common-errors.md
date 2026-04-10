---
title: "Importing Opportunities: Troubleshooting Common Errors"
description: "This guide helps you identify and resolve common errors that potentially occur when importing files into your system. Each issue also has its practical…"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/XeG1SSW1lAb5DwM5SnBK"
sourceId: "XeG1SSW1lAb5DwM5SnBK"
category: "Troubleshooting"
---

This guide helps you identify and resolve common errors that potentially occur when importing files into your system. Each issue also has its practical solution to ensure smooth imports and accurate data management. Follow the outlined steps to troubleshoot and fix these errors, streamlining your import process for greater efficiency.

### Question: How do I fix the "Invalid option selected for multi-select or dropdown field" error?


**Answer:To resolve this error:

**1\. Check Your Import File:**Open the import file and review the values in the multi-select or dropdown fields.  

![](<https://assets2.modalsupport.net/1762338862755-unnamed - 2025-11-05T183413.557.png>)

**2\. Verify Options:**Ensure that the values match the options available in the system. If you find any mismatched options, either update them to match existing choices or add them as custom options in your system.

**3\. Re-import the File:**Once the values are corrected, save your file and re-upload it for import.

**Tip:**Always double-check that the data in your import file aligns with the predefined values in your system to avoid mismatches.

### Question: What should I do if I receive the "Invalid Contact ID" error?


**Answer:To fix this error:

**1\. Check the Contact ID:**Verify that the Contact ID in the file exists within the system. If it doesn’t, the system will flag it as invalid.

![](<https://assets2.modalsupport.net/1765402494942-Captura de pantalla 2025-12-10 163445.png>)

**2\. Remove the Contact ID:**If you are not updating an existing contact, remove the Contact ID from the import file.

**3\. Re-import:**After correcting or removing the Contact ID, save your changes and try re-importing the file.

**Tip:**Ensure that you are only updating existing contacts with valid Contact IDs to avoid this error.

### Question: How can I resolve the "Could Not Parse Date" error?


**Answer:To resolve this error: 

1.  **Check Date Fields:**Open the import file and review all date fields.
2.  **Ensure Correct Format:**Confirm that the dates are in one of the accepted formats:  

    -   mm/dd/yyyy
    -   yyyy/mm/dd
    -   mm-dd-yyyy
    -   yyyy-mm-dd
3.  **Re-upload the File:**After correcting the date formats, save the file and re-import it.

**Tip:**Be consistent with the date format used throughout the file to avoid parsing errors.

### Question: How do I fix the "Duplicate Unique Property Value" error?


**Answer:To fix this error:

1.  **Identify Unique Fields:**Check the fields in your import file marked as unique, such as emails or IDs.
2.  **Look for Duplicates:**Search for any duplicate values in those fields.
3.  **Remove or Correct Duplicates:**If duplicates are found, either remove or modify them to ensure each value is unique.
4.  **Re-import the File:**After resolving the duplicates, save and re-upload the file for import.

**Tip:**Always ensure unique fields contain no repeated values before importing to prevent this error.

### Question: What should I do if I get the "File Not Found" error?


**Answer:To resolve this error:

1.  **Check File Type and Format:**Verify that the file type is correct (e.g., .csv, .xlsx) and the format matches the system's requirements.
2.  **Re-upload the File:**If the file is correct but was not uploaded properly, re-upload it.

![](<https://assets2.modalsupport.net/1762338909914-unnamed - 2025-11-05T183502.145.png>)

**Tip:**Ensure your file is in the correct format before uploading to avoid this error.

### Question: How do I fix the "Required Fields Missing" error?


**Answer:To fix this error:

1.  **Check for Missing Required Fields:**Review the file for missing mandatory fields like Opportunity Name, Email, Phone, or Name (depending on the import type).
2.  **Add the Missing Fields:**Fill in any missing mandatory fields with the appropriate data.
3.  **Re-import the File:**Once the required fields are added, save the file and re-upload it for import.

**Tip:**Ensure all mandatory fields are populated before initiating the import to prevent errors.  




**Question:** Why are some contacts skipped during the import process?

**Answer:** Contacts are usually skipped if they are missing a "Primary Key" like an Email Address or Phone Number. The system requires at least one unique identifier to create a contact record.

**Fix:** Check your file for empty rows or missing email/phone fields and ensure the column headers are correctly mapped to the system fields.