---
title: "How To Add a Tag to New Contact List Import"
description: "Adding a tag to a contact record is a great way to organize your contacts. When importing a new list of contacts, you may want to include one or multiple tags…"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/5DGXkd3f5hpIlpQv68Bn"
sourceId: "5DGXkd3f5hpIlpQv68Bn"
category: "Contacts"
---

Adding a tag to a contact record is a great way to organize your contacts. When importing a new list of contacts, you may want to include one or multiple tags for all or some of the contacts in the list. Below we'll show you the two ways you can add a tag (or multiple) to a new contact list import.

### Option 1: This option is recommended if you have multiple and/or different tags to apply to the contacts in the list being imported.

-   In the .csv file, have a column titled "Tags" and include as many tags as you'd like, with each separated by a comma. These tags will be created and applied to the associated contact records during import

![](<https://assets2.modalsupport.net/1763133157131-unnamed - 2025-11-14T231213.878.png>)

-   _In this example, "Test1" would be applied to all 4 contacts during the import. The second tag, "TestTag", would be added to just 2 contacts._

### Option 2: This option is recommended if you want to add one or more tags to the entire list.

-   You may add a new tag to the entire list being uploaded in Step 3 "Details” when importing contacts.

![](<https://assets2.modalsupport.net/1763133093933-unnamed - 2025-11-14T231124.740.png>)

-   _In this example, "ThisIsATest", would be added to all contacts in the list being imported._
-   You may include one or multiple tags. You may use existing tags or create new ones right here in the import section.

### FAQ's  




**Question:** How do I format the "Tags" column in the .csv file?
**Answer:** In the "Tags" column, list all applicable tags for each contact, separated by commas. Each tag will be created and applied during the import.




**Question:** Can I add multiple tags during the list import?
**Answer:** Yes, you can add multiple tags either by listing them in the "Tags" column of the .csv file (Option 1) or by entering them in Step 3 "Details" during the import process (Option 2).




**Question:** Can I use existing tags or create new ones during the import?
**Answer:** Both options are available. You can use existing tags or create new tags directly during the import process.




**Question:** What is the difference between the two options for adding tags?
**Answer:** Use Option 1 if different contacts need different tags (set in the .csv file). Use Option 2 if you want to apply the same tag(s) to the entire list during import.




**Question:** Can I automate tagging based on specific criteria during import?

**Answer:** Some systems allow rules or automation to apply tags based on criteria in your import file. Check your platform’s automation settings for this functionality.




**Question:** What should I do if tags didn’t apply correctly after import?

**Answer:** Review the import summary for errors, confirm that the “Tags” column is formatted correctly, and ensure tags are separated by commas with no extra characters.




**Question:** Why did some tags show up as one long word instead of separate tags?

**Answer:** This usually happens if a different delimiter (like a period or a dash) was used instead of a comma. Ensure your CSV is "Comma Separated" and that you have mapped the "Tags" column correctly during the mapping stage of the import.




**Question:** Is there a limit to how many tags I can add to a single contact in the CSV?

**Answer:** While there is typically no hard limit on the number of tags, having too many can make your contact records cluttered. Use Option 1 for specific data points (like "Attended\_Event\_Jan") and Option 2 for broad categories (like "General\_Lead\_List").