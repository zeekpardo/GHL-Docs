---
title: "Bulk Import and Export of Multiple Emails for Contacts"
description: "Bulk Import and Export of Multiple Emails for Contacts"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/qowYFdRVK9GG8jIwoPmr"
sourceId: "qowYFdRVK9GG8jIwoPmr"
category: "Contacts"
---

**Bulk Import and Export of Multiple Emails for Contacts**

You can efficiently manage contacts utilizing the 'Additional Emails' feature, enhancing your handling of contact data. Our Bulk Import and Export functionalities simplify the process of managing large volumes of data. By providing the option to manage additional emails for each contact, we facilitate a streamlined database management process.

![](https://assets2.modalsupport.net/1766154780937-image2.png)

Import and Export buttons within the contact page:

![](https://assets2.modalsupport.net/1766154803936-image1.png)

## **Steps to Import**

-   Within the Contact Import section, you will discover the system field named “Additional Emails.” This feature enables users to map all their extra emails.
-   During the import process, it's necessary to include all additional emails in one column. These should be separated by commas (,), slashes (/), or semicolons (;), and then mapped to the “Additional Emails” field in the system.

**Please Note:** If you don’t include an email field the primary email address will be the first email in the “Additional Emails” field.

### **Conditions**

-   Contact uniqueness will be established based on both the primary Email and Additional Email (if "Email" is chosen in “Find Existing Contacts Based on First Preference”).
-   If multiple duplicate matches are found for an additional email, that specific additional email will be omitted from the contact.
-   Any invalid emails discovered in the additional emails field will be discarded, leaving only the valid ones retained for a contact.
-   If the email column in the CSV is vacant but the additional email column has values, the first additional email will take the role of the primary email.
-   When updating an existing contact, the specified emails in the CSV will merge with the emails already linked to the contact.
-   The “Additional Email” column can accommodate a maximum of 10 email IDs. If more than 10 email IDs are included, only the first 10 will be considered.

### **Bulk Export**

In the Contact Export section, if you have selected the email option in the smartlist column, a new column named “**Additional Email**” will automatically appear in the exported CSV file. This column will contain all the additional emails arranged in one column and separated by commas(,).

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeOR52I13OXH-QTee152PLaJsR0Urm_GBrAu2iNORsjFOSGnPz-94wq9UQf2bWuQ1xFarntO38apZLZeqim4hAtDggCUky4lkPteVCtfvotyVS4ffw7NJcyHzfeBri_4kQSEDZ2f8kIFGGYu6TmRTO9euPk?key=2LO6qVpCJTZqOj1VYrVbSw)

### Localized Email Notifications

\_CompanyName delivers automated system notifications in the specific language, ensuring a professional experience for international teams. To use this, simply update your language settings; translations are applied automatically when emails are sent. 

## FAQ’s




**Question:** What happens if there are duplicate matches for an additional email?

**Answer:** If multiple duplicate matches are found for an additional email, that specific additional email will be omitted from the contact. This prevents the system from incorrectly associating duplicate emails with multiple contacts.




**Question:** What does the system do with invalid emails in the 'Additional Emails' field?

**Answer:** Any invalid emails discovered in the 'Additional Emails' field will be discarded, and only the valid emails will be retained for the contact. This ensures that only functional email addresses are stored and used.




**Question:** How does the system handle the primary email if the email column is empty but the additional emails column has values?

**Answer:** If the primary email column is empty but the additional emails column has values, the first additional email will automatically take the role of the primary email. This allows for continued functionality even if the primary email is missing.




**Question:** What happens when updating an existing contact with new emails from a CSV?

**Answer:** When updating an existing contact, the specified emails in the CSV will merge with the emails already linked to the contact. This allows for the addition of new email addresses without losing any existing ones.




**Question:** How many additional emails can be included for a contact?

**Answer:** The “Additional Email” column can accommodate a maximum of 10 email addresses. If more than 10 email addresses are included, only the first 10 will be considered.




**Question:** How does the Bulk Export feature handle additional emails?

**Answer:** In the Bulk Export feature, if the email option is selected in the smart list column, a new column named “Additional Email” will automatically appear in the exported CSV file. This column will contain all the additional emails, arranged in one column and separated by commas (,).




**Question:** Can I import contacts without a primary email?

**Answer:Yes. If the primary email column is empty, the system will **promote the first valid additional email** to serve as the primary email.


**Question:What happens if multiple additional emails are invalid during import?

**Answer: Only the valid emails will be retained, while all invalid emails will be discarded.




**Question:** What is the maximum number of email addresses allowed per contact?
**Answer:** You can have one Primary Email and up to 10 Additional Emails, for a total of 11 email addresses associated with a single contact record.




**Question:** Does the platform support sending system notifications in languages other than English?

**Answer:** Yes. The platform delivers **automated system notifications** in the language specified in your settings, applying translations automatically to ensure a professional experience for international teams.