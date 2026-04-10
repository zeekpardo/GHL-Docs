---
title: "How to import Opportunities using a single CSV file"
description: "This article explores the essential guidelines and steps for importing or updating opportunities in your system, ensuring an effortless integration of data.…"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/32z40xeDyRdYBClJJV0O"
sourceId: "32z40xeDyRdYBClJJV0O"
category: "Opportunities"
---

This article explores the essential guidelines and steps for importing or updating opportunities in your system, ensuring an effortless integration of data. By following these structured approaches, companies can enhance their operational efficiency and maintain accuracy in their sales pipeline management.

**Key Features and Benefits** The process of importing opportunities into a system offers several advantages:

-   **Data Consolidation**: Centralizes all opportunity-related data in one system, making it easier to manage and track progress.
-   **Time Efficiency**: Reduces manual data entry, saving time and minimizing human error.
-   **Scalability**: Supports business growth by allowing bulk imports, which is essential for handling large volumes of data effectively.
-   **Customization**: Offers flexibility in managing data according to specific business requirements, with options to create, update, or both.
-   **Data Integrity**: Ensures that all imported data is accurate and up-to-date, which is critical for making informed business decisions.

## How to Use the Import Process

### **1- Prepare Your Data**:

Confirm that your data file is in **.csv format** and **does not exceed 30 MB**. Include a header row, and ensure it contains mandatory fields like Contact ID, Opportunity Name, and Pipeline Name.

Please note that Opportunity import is not a reversible action

**Required Fields**

1.  **For Creating Opportunities**:

-   **Contact ID**
-   **Opportunity Name**
-   **Pipeline Name**

**Default Values**:

-   If no stage name is provided, it will default to the first stage in the pipeline.
-   If no opportunity value is given, it will default to 0.
-   If no opportunity status is specified, it will default to "Open."
-   If a valid reason for the opportunity being lost is provided, the status will automatically update to "Lost."

**How to Retrieve**:

-   **Opportunity ID**, **Pipeline Name**, and **Stage Name** can be obtained by exporting opportunities.
-   **Contact ID** can be retrieved by exporting contacts from the same account.

1.  **For Updating Opportunities**:

-   **Opportunity ID** (can be obtained by exporting opportunities).

**File Structuring and Field Formatting**

-   **Date Picker**:  
    Acceptable formats include:
    -   mm/dd/yyyy (e.g., 10/28/2020)
    -   yyyy/mm/dd (e.g., 2020/10/28)
    -   mm-dd-yyyy (e.g., 10-28-2020)
    -   yyyy-mm-dd (e.g., 2020-10-28)
-   **Multiple Options, Checkbox, Textbox List**:  
    Acceptable formats:
    -   Value 1, Value 2, Value 3 (e.g., Blue, Yellow, Green)
    -   You can also use ; or . as separators.
-   **Radio, Single Option**:  
    Acceptable format:
    -   Value 1 (e.g., Blue)
-   **Opportunity Owner**:  
    Format: FirstName LastName (e.g., Logan Paul)
-   **Tags**:  
    Acceptable formats:
    -   Value 1, Value 2, Value 3 (e.g., Blue, Yellow, Green)
    -   You can also use ; or . as separators.
-   **Phone Number**:  
    Format in E.164 (e.g., +1 1234567890).  
    For US numbers, formats like 123-456-7890 or (123) 456-7890 are also acceptable.
-   **Numerical**:  
    Acceptable formats:
    -   1.23, 1234, .123
-   **Monetary**:  
    Acceptable formats:
    -   1234, 1,234,234.33
-   **Opportunity Followers**:  
    Acceptable format:
    -   FirstName LastName, FirstName2 LastName2 (e.g., Adam Smith, David Lee)

### **2- Select Import Options**:

Choose whether to create new records, update existing ones, or do both. This flexibility allows businesses to tailor the import process to their specific needs.

![](https://assets2.modalsupport.net/1760036091413-image7.jpg)

![](https://assets2.modalsupport.net/1760036144690-image4.jpg)

### **3- Upload and Map Your Data**:

Upload your file and map each column to the corresponding field in the system. This step is crucial for ensuring that the data aligns correctly with your system’s fields.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXd3m_A5NzyGEGyH8hxODOyaW0B9bMrks92tok5yGBjY9wTEkDVAiAjCNR-iChBR8-vdGPGC-YLeFeYGoMTgxWB0tpgbNFqmXucdui1aov8W_OB2mnbjlyscXxOi5L1pt82oLwUsbw?key=qODtuC7e_es6ZqSeo4svkg)

![](https://assets2.modalsupport.net/1760036219421-image3.jpg)

### **4- Review and Confirm**:

Before finalizing the import, review the data preview to check for accuracy. Confirm the import to start the process.

![](https://assets2.modalsupport.net/1760036252350-image5.jpg)

### **5- Monitor the Import**:

Keep an eye on the import progress and check for any errors or warnings. This monitoring helps in quickly addressing any issues that may arise during the import process.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXctN26x58zU0AmEBRzsK98CrqrmLUGfrHhEkgcIitSmR6rEgv5uzi5Kn4KScCfPU4etjpbW-8RECWFF_9yq8AL8EVYiFdeYiUZUSR253KxO7UUGvCr5BzewIz0EjYydIVKb4SsFqw?key=qODtuC7e_es6ZqSeo4svkg)

### 6-Track statistics, errors, and warnings by selecting the "Show Stats" option for any import. 

**Errors:** Instances where missing mandatory fields lead to a failed import for the respective row.

**Warnings**: Occurrences where non-critical fields fail to update during the import, even though the row itself is processed successfully.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdneS2VWJQJztsRKjLXAAL0Al0IJ2c-hy8-h9wjVTReWfnjXUJUiMFHa5jePkzSzZwLF8rDnAh0nKIBRfeXO-p3muCf_v_1HJZfHTCNKAO0PXtRe6BL-lMh7-Ix32YxBR7X9IxG6A?key=qODtuC7e_es6ZqSeo4svkg)

### Troubleshooting Common Errors

-   **Error: Invalid option selected for multiselect or dropdown fieldSolution**: Review your import file for any incorrect values in multiselect or dropdown fields. Compare these with the available options in the system. Update the value in your file to match an existing option, or add it as a custom option, and re-import the file.
-   **Error: Invalid Contact IDSolution**: Confirm that the Contact ID is valid and exists in the system. If you are not updating an existing contact, remove the Contact ID from the file.
-   **Error: Could Not Parse DateSolution**: Make sure the date fields follow one of the accepted formats: mm/dd/yyyy, yyyy/mm/dd, mm-dd-yyyy, or yyyy-mm-dd.
-   **Error: Duplicate Unique Property ValueSolution**: Ensure there are no duplicate entries in fields marked as unique, such as email addresses or IDs.
-   **Error: File Not FoundSolution**: Double-check that your file is the correct type and format. If necessary, re-upload the file.
-   **Error: Required Fields MissingSolution**: Ensure all required fields (e.g., Opportunity Name for opportunities, Email/Phone/Name for contacts) are included and formatted correctly.

**Pro Tips**

-   Always check the "Don't update Empty Values" option if you do not want to overwrite existing data with blank values.
-   Use the opportunity to add tags to related contacts during the import process, which can help in segmenting and organizing your opportunities better.

**FAQs**




**Question:** What happens if I import a file with missing mandatory fields?

**Answer:** The import will fail for rows missing mandatory fields. Ensure all required data is included in your file to avoid disruptions.




**Question:** Can I update opportunities without an Opportunity ID?

**Answer:** No, an Opportunity ID is required to update existing opportunities. Ensure you have the correct IDs by exporting existing data from your system.




**Question:** What should I do if my date formats are causing errors?

**Answer:** Ensure all date fields are in one of the acceptable formats (mm/dd/yyyy, yyyy/mm/dd, etc.). This standardization prevents parsing errors during the import.




**Question:** How do I handle errors related to invalid dropdown values?

**Answer:** Verify that the values in your file match the options available in the system. If they don't match, update your file or add new options to the system.




**Question:** What are the best practices for handling large imports?

**Answer:** For large data sets, consider breaking the file into smaller chunks to avoid overwhelming the system and to make error handling more manageable.




**Question:** How do I resolve errors with invalid dropdown or multiselect values?

**Answer:** Ensure the values in your CSV match the options available in the system. If needed, update your file or add missing options as custom values before re-importing.




**Question:** How do I handle large imports effectively?

**Answer:** Break large datasets into smaller chunks to simplify error handling and avoid overwhelming the system.




**Question:** Where can I find the "Contact ID" needed for the import?

**Answer:** You can retrieve the Contact ID by exporting your existing contacts from the same account. This ID is required to link the new or updated opportunity to the correct person.




**Question:** Is it possible to undo an opportunity import if I make a mistake?

**Answer:** No. Opportunity import is **not a reversible action**. We strongly recommend testing your import with a file containing only 2–3 rows first to ensure all fields map correctly before proceeding with a bulk upload.




**Question:** Can I assign an Opportunity to a specific team member during the import?

**Answer:** Yes. In your CSV file, include a column for "Opportunity Owner" and format the name as FirstName LastName (e.g., Jane Doe). During the mapping stage, link this column to the Opportunity Owner field. The system will automatically attribute the deal to that user, provided they are already a registered user in that ..