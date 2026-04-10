---
title: "Troubleshooting Bulk Imports Via CSV"
description: "In this article, you will learn how to troubleshoot and what each code or error message means when importing contacts in bulk.Importing contacts in bulk can…"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/8TgziENDpceDgHPoriDr"
sourceId: "8TgziENDpceDgHPoriDr"
category: "Contacts"
---

In this article, you will learn how to troubleshoot and what each code or error message means when importing contacts in bulk.Importing contacts in bulk can save significant time and effort, but errors may occur if your file isn’t formatted correctly or contains invalid data. By following these troubleshooting tips, you can ensure a smooth import process and maintain the accuracy and integrity of your contact database.

### **Here’s how to troubleshoot contact imports**

-   Go to Contacts on the left
-   Click on Bulk Actions at the top
-   Next to your Bulk Import operation, click on Statistics.  


![](https://assets2.modalsupport.net/1770280142257-image2.jpg)

-   Click on the Error tab.

![](https://assets2.modalsupport.net/1767302937322-image1.jpg)

-   You will see a list of the errors that have happened

**Note:** When the error says it's happening on Line 1 it's referring to the first contact.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdP5HzVO3WGkvRVkFqc_oO9bCop5j5f5gQ2D1xMa5jmKd7WoNO_oWJ98sCXn3p-H3gzLlNhyvl_NFgrfVmPb6xRBH6SK5j2rn5fPICZOU2zoPTxeB74LVjHIUDiwdHu09YbNMV3glo0GaMEUD6P1wUotvAM?key=x7WwTZSKxAqmPKAdOSp6Ww)

**Master Type**

**Error ID**   
**(Optional)**

**Error code**

**What the error means**    

**Steps to resolve the error**

Formatting mistakes when placing values in the spreadsheet

**1001**

Unknown error

The system is unable to process the file due to an unknown error.  
Your data was not imported.

Confirm that your file meets all requirements. Try to re-import after clearing your browser cache or using another browser.

**1002**

Multiple owners found in the system

"The import file contains an Owner value that matches more than one user in the account. This usually occurs for names (e.g., there are two John Doe users in your account, and the import file contained the name "John Doe"). The affected records were imported, but the Owner's property does not contain a value."    

Replace the name of the owner with their email address in your import file, then re-import the file. You can also manually update the Owner property value in the affected records.

**1003**

Invalid sheet count

"The import file contains more than one sheet. Your data was not imported."

Remove any additional sheets from your import file, then re-import. 

**1004**

Invalid required property

"A required property in the import file contains an invalid value. The data in that row was not imported."

Confirm the format requirements of your specific property or the property type, update your file to match the correct format, then re-import.

**1005**

Invalid enumeration option

"The import file contains a value that does not match an existing option in an enumeration property. This applies to multi-select, dropdown select, radio select, and checkbox-type properties.  
The affected records were still imported, but the enumeration property does not contain a value."

Identify the incorrect value by comparing your import file against the property.. You can choose to update the value in your import file to match an existing option or add the value as a custom option to your property. Once you're done, re-import the file or manually update the property value in the affected records.

**1006**

Invalid contact ID

"During the import, the checkbox to update existing records using Contact IDs was selected. However, the Contact ID listed in the file did not match an existing ID in the software.  
The records were not imported."

Ensure that the \[object\] IDs are correct. You may need to export your existing records to get the correct object IDs. If you're not updating or associating existing objects here, do not select the checkbox during the import process.

**1007**

File not found

"The file you selected was not found. Your data was not imported." 

Verify that you have saved your file to your computer and that it is the correct file type. Once you've done that, re-upload the file.

Duplicate Entries in File

**1008**

Failed validation of Email    

"The import file contains an email address that does not conform to the format of a typical email address (e.g., name@domain.com)   
The import did not create or update the records."  

"For contacts, update your import file with the correct email, to make sure your format is correct with '@' '.com then re-import the file.

**1009**

Empty unique property value in the file

"The import file contains a row with data that cannot be processed because there is no value against the record of its unique identifier (primary column)."

Verify that your data value matches the correct format for the property you are importing, then re-import the file. You can also manually update the property value in the affected records.

**1010**

Duplicate unique property value    

"The same value of the primary column is present against multiple records. Your data was imported against all records but there may be duplicates of the same record"

"Choose a different column header to act as your primary column or fix any mistakes, then re-import the files."

**1011**

Duplicate unique property value in the file

"The same unique value was used multiple times within your files. Your data was imported but there may be duplicates of the same record. If you were trying to associate, your records were not associated."

"Choose a different column header to act as your unique value or fix any mistakes, then re-import the files."

**1012**

Duplicate Contact ID in the file    

"The same Contact ID was used multiple times within your files.  
The affected records were not updated or associated here."

Update your import file so that there is only one row with that Contact ID. Keep the row with the most up-to-date information that you want to be included in your account. Once you've removed duplicates, re-import the files.

Miscellaneous

**1013**

Could not parse the phone number


"The import file contains a value for a number property with non-numeric characters or numbers not formatted as per E.164 format  
The affected records were imported, but the number property does not contain a value." 

"Update your import file with the correct numerical value and re-import, or manually update the property value in the affected records.  
If your records should match the numerical field, learn how to format your file to correctly import data to multiple checkbox properties - [LEARN MORE](https://help.gohighlevel.com/support/solutions/articles/48001223155-troubleshooting-contact-import-errors/preview#:~:text=yes%20or%20no%20\)-,Phone%20Number,-For%20the%20vast)"

**1014** 

Could not parse the date

"The import file contains a date value that does not match the format you selected during the import process.  
The affected records were imported, but the date property does not contain a value." 

"Update your import file with the correct value and re-import, or manually update the property value in the affected records.  
If your records should match the date field, learn how to format your file to correctly import data to multiple checkbox properties - [LEARN MORE"](https://help.gohighlevel.com/support/solutions/articles/48001223155-troubleshooting-contact-import-errors/preview#:~:text=the%20following%20columns%3A-,Date%20Picker,-Acceptable%20formats%2D)

**1015**

Could not find the owner

"The import file contains a record owner that does not match a user here.  
The affected records were imported, but the Owner field does not contain a value." 

"Update the data in the Owner column of your import file to include the first and last name or email of a user in your account. If the person you want to assign the record to is not yet a user in the account, add them as a user, then re-import with their name or email as it appears in the account.  
If your records should match contact owners, learn how to format your file to correctly import data to multiple checkbox properties - [LEARN MORE](https://help.gohighlevel.com/support/solutions/articles/48001223155-troubleshooting-contact-import-errors/preview#:~:text=Not%20Supported-,Contact%20Owner,-To%20assign%20an)"

**1016**

Ambiguous enumeration option 

"The same record matches more than one of the existing options defined for an enumeration property. This applies to multi-select, dropdown select, single-choice select, and checkbox-type properties.  
The affected records were imported, but the enumeration property does not contain a value." 

"Identify the incorrect value by comparing your import file against the property. Update the value in your import file to match only one existing option, then re-import the file. You can also manually update the property value in the affected records.  
   
If your records should match multiple options, learn how to format your file to correctly import data to multiple checkbox properties -[LEARN MORE](https://help.gohighlevel.com/support/solutions/articles/48001223155-troubleshooting-contact-import-errors/preview#:~:text=Multiple%20Options%2C%20Checkbox%2C%20Textbox%20List)"

**1017**

Location does not allow duplicate contacts - use 1010 & 1011

**1018**

CustomField not supported -> validate while mapping itself - file and signature

**1019**

Invalid Custom Field value -> use 1005 instead

**1020** 

Failed to create a contact

**1021**  

No email, phone, firstName and lastName, and type are created

**1022** 

Contact was not found

**1023**

Failed to update a contact

**1024**

Failed to add campaign/workflow

### **List of supported Timezones**

Etc/GMT+12  
Pacific/Midway  
Pacific/Honolulu  
America/Juneau  
US/Alaska  
America/Dawson  
America/Los\_Angeles  
America/Phoenix  
America/Tijuana  
US/Arizona  
America/Belize  
America/Boise  
America/Chihuahua  
America/Denver  
America/Edmonton  
America/Guatemala  
America/Managua  
America/Regina  
Canada/Saskatchewan  
US/Mountain  
America/Bahia\_Banderas  
America/Bogota  
America/Cancun  
America/Chicago  
America/Mexico\_City  
US/Central  
America/Caracas  
America/Detroit  
America/Indiana/Indianapolis  
America/Louisville  
America/Manaus  
America/New\_York  
America/Santiago  
America/Santo\_Domingo  
America/Toronto  
US/East-Indiana  
US/Eastern  
America/Argentina/Buenos\_Aires  
America/Glace\_Bay  
America/Montevideo  
America/Sao\_Paulo  
Canada/Atlantic  
America/St\_Johns  
Canada/Newfoundland  
America/Godthab  
America/Noronha  
Etc/GMT+2  
Atlantic/Cape\_Verde  
Atlantic/Azores  
UTC  
Africa/Algiers  
Africa/Casablanca  
Africa/Lagos  
Atlantic/Canary

Europe/London  
Africa/Cairo  
Africa/Harare  
Europe/Amsterdam  
Europe/Belgrade  
Europe/Brussels  
Europe/Madrid  
Europe/Oslo  
Europe/Sarajevo  
Africa/Nairobi  
Asia/Amman  
Asia/Baghdad  
Asia/Jerusalem  
Asia/Kuwait  
Asia/Qatar  
Europe/Athens  
Europe/Bucharest  
Europe/Helsinki  
Europe/Moscow  
Asia/Baku  
Asia/Dubai  
Asia/Kabul  
Asia/Tehran  
Asia/Karachi  
Asia/Yekaterinburg  
Asia/Colombo  
Asia/Kolkata  
Asia/Calcutta  
Asia/Kathmandu  
Asia/Almaty  
Asia/Dhaka  
Asia/Rangoon  
Asia/Bangkok  
Asia/Krasnoyarsk  
Asia/Irkutsk  
Asia/Kuala\_Lumpur  
Asia/Shanghai  
Asia/Taipei  
Australia/Perth  
Asia/Seoul  
Asia/Tokyo  
Asia/Yakutsk  
Australia/Adelaide  
Australia/Darwin  
Asia/Vladivostok  
Australia/Brisbane  
Australia/Canberra  
Australia/Hobart  
Australia/Sydney  
Pacific/Guam  
Asia/Magadan  
Pacific/Auckland  
Pacific/Fiji  
Pacific/Tongatapu

### Accepted Custom Field Format Requirements

Depending on the records you are importing, your file could include the following columns:

**Date Picker**

-   Acceptable formats-
    -   mm/dd/yyyy (e.g. 10/28/2020)
    -   yyyy/mm/dd (e.g. 2020/10/28)
    -   You can also replace '/' with '-'  '.' and it'll recognize the uploaded fields as a Date field (Available in our future release!)

**Multiple Options, Checkbox, Textbox List**

-   Acceptable formats-
    -   Value 1, Value 2, Value 3 ...... (e.g. Blue, Yellow, Green or Blue, Yellow, Green or Blue, Yellow , Green)
    -   You can also replace ' , ' with ' ; '  ' . ' and it'll recognize the uploaded fields as the aforementioned field

**Radio, Single Option**

-   Acceptable formats:
    -   Value 1 (e.g. Blue)

**File Upload, Signature**

-   Not Supported

**Contact Owner**

To assign an owner to your contacts during the import, include the name of the 'User'

-   Acceptable formats:
    -   FirstName LastName (e.g. Logan Paul or logan paul)
    -   LastName FirstName (e.g. Paul Logan or paul logan)

**Note #1**: Unless the user has both FirstName and Last Name, the system will not recognize it during the upload

**Tags**

-   Acceptable formats-
    -   Value 1, Value 2, Value 3 ...... (e.g. Blue,Yellow,Green or Blue, Yellow, Green or Blue , Yellow , Green)
    -   You can also replace ' , ' with ' ; ' ' . ' and it'll recognize the uploaded fields as the aforementioned field

**Tags (example formats)**

**Status**

lowercase

ok

UPPERCASE

ok (will be lowercased)

ProperCase

ok (will be lowercased)

with a space

ok

With A Space

ok (will be lowercased)

pre-existing tag

ok (maps successfully)



**DoNotDisturb**

-   Acceptable formats-
    -   True or False ( true or false )
    -   Yes or No ( yes or no )

**Phone Number**

-   For the vast majority of cases, as long as you format the phone numbers in E.164 (Ex: +1 1234567890) our system will recognize it as valid- irrespective of the default Country picked at the sub-account level
-   If you have set the Country to the US, the following would work perfectly fine as well
    -   123-456-7890
    -   (123) 4567890
    -   1234567890
        -   Furthermore, if you are working with international numbers (Outside the US), we'd encourage you to visit: [https://libphonenumber.appspot.com/](https://libphonenumber.appspot.com/) and run your phone number format by the tool in conjunction with the codes below to ascertain its appropriateness for upload.


**Numerical**

-   Acceptable formats-
    -   1.23.4 
    -   1234
    -   .123

**Monetary**

-   Acceptable formats-
    -   1234
    -   1,234,234,333

### List of Supported Countries

“BD”: “Bangladesh”,  
  “BE”: “Belgium”,  
  “BF”: “Burkina Faso”,  
  “BG”: “Bulgaria”,  
  “BA”: “Bosnia and Herzegovina”,  
  “BB”: “Barbados”,  
  “WF”: “Wallis and Futuna”,  
  “BL”: “Saint Barthelemy”,  
  “BM”: “Bermuda”,  
  “BN”: “Brunei”,  
  “BO”: “Bolivia”,  
  “BH”: “Bahrain”,  
  “BI”: “Burundi”,  
  “BJ”: “Benin”,  
  “BT”: “Bhutan”,  
  “JM”: “Jamaica”,  
  “BV”: “Bouvet Island”,  
  “BW”: “Botswana”,  
  “WS”: “Samoa”,  
  “BQ”: “Bonaire, Saint Eustatius and Saba “,  
  “BR”: “Brazil”,  
  “BS”: “Bahamas”,  
  “JE”: “Jersey”,  
  “BY”: “Belarus”,  
  “BZ”: “Belize”,  
  “RU”: “Russia”,  
  “RW”: “Rwanda”,  
  “RS”: “Serbia”,  
  “TL”: “East Timor”,  
  “RE”: “Reunion”,  
  “TM”: “Turkmenistan”,  
  “TJ”: “Tajikistan”,  
  “RO”: “Romania”,  
  “TK”: “Tokelau”,  
  “GW”: “Guinea-Bissau”,  
  “GU”: “Guam”,  
  “GT”: “Guatemala”,  
  “GS”: “South Georgia and the South Sandwich Islands”,  
  “GR”: “Greece”,  
  “GQ”: “Equatorial Guinea”,  
  “GP”: “Guadeloupe”,  
  “JP”: “Japan”,  
  “GY”: “Guyana”,  
  “GG”: “Guernsey”,  
  “GF”: “French Guiana”,  
  “GE”: “Georgia”,  
  “GD”: “Grenada”,  
  “GB”: “United Kingdom”,  
  “GA”: “Gabon”,  
  “SV”: “El Salvador”,  
  “GN”: “Guinea”,  
  “GM”: “Gambia”,  
  “GL”: “Greenland”,  
  “GI”: “Gibraltar”,  
  “GH”: “Ghana”,  
  “OM”: “Oman”,  
  “TN”: “Tunisia”,  
  “JO”: “Jordan”,  
  “HR”: “Croatia”,  
  “HT”: “Haiti”,  
  “HU”: “Hungary”,  
  “HK”: “Hong Kong”,  
  “HN”: “Honduras”,  
  “HM”: “Heard Island and McDonald Islands”,  
  “VE”: “Venezuela”,  
  “PR”: “Puerto Rico”,  
  “PS”: “Palestinian Territory”,  
  “PW”: “Palau”,  
  “PT”: “Portugal”,  
  “SJ”: “Svalbard and Jan Mayen”,  
  “PY”: “Paraguay”,  
  “IQ”: “Iraq”,  
“PA”: “Panama”,  
  “PF”: “French Polynesia”,  
  “PG”: “Papua New Guinea”,  
  “PE”: “Peru”,  
  “PK”: “Pakistan”,  
  “PH”: “Philippines”,  
  “PN”: “Pitcairn”,  
  “PL”: “Poland”,  
  “PM”: “Saint Pierre and Miquelon”,  
  “ZM”: “Zambia”,  
  “EH”: “Western Sahara”,  
  “EE”: “Estonia”,  
  “EG”: “Egypt”,  
  “ZA”: “South Africa”,  
  “EC”: “Ecuador”,  
  “IT”: “Italy”,  
  “VN”: “Vietnam”,  
  “SB”: “Solomon Islands”,  
  “ET”: “Ethiopia”,  
  “SO”: “Somalia”,  
  “ZW”: “Zimbabwe”,  
  “SA”: “Saudi Arabia”,  
  “ES”: “Spain”,  
  “ER”: “Eritrea”,  
  “ME”: “Montenegro”,  
  “MD”: “Moldova”,  
  “MG”: “Madagascar”,  
  “MF”: “Saint Martin”,  
  “MA”: “Morocco”,  
  “MC”: “Monaco”,  
  “UZ”: “Uzbekistan”,  
  “MM”: “Myanmar”,  
  “ML”: “Mali”,  
  “MO”: “Macao”,  
  “MN”: “Mongolia”,  
  “MH”: “Marshall Islands”,  
  “MK”: “Macedonia”,  
  “MU”: “Mauritius”,  
  “MT”: “Malta”,  
  “MW”: “Malawi”,  
  “MV”: “Maldives”,  
  “MQ”: “Martinique”,  
  “MP”: “Northern Mariana Islands”,  
  “MS”: “Montserrat”,  
  “MR”: “Mauritania”,  
  “IM”: “Isle of Man”,  
  “UG”: “Uganda”,  
  “TZ”: “Tanzania”,  
  “MY”: “Malaysia”,  
  “MX”: “Mexico”,  
  “IL”: “Israel”,  
  “FR”: “France”,  
  “IO”: “British Indian Ocean Territory”,

  “SH”: “Saint Helena”,  
  “FI”: “Finland”,  
  “FJ”: “Fiji”,  
  “FK”: “Falkland Islands”,  
  “FM”: “Micronesia”,  
  “FO”: “Faroe Islands”,  
  “NI”: “Nicaragua”,  
  “NL”: “Netherlands”,  
  “NO”: “Norway”,  
  “NA”: “Namibia”,  
  “VU”: “Vanuatu”,  
  “NC”: “New Caledonia”,  
  “NE”: “Niger”,  
  “NF”: “Norfolk Island”,  
  “NG”: “Nigeria”,  
  “NZ”: “New Zealand”,  
  “NP”: “Nepal”,  
  “NR”: “Nauru”,  
  “NU”: “Niue”,  
  “CK”: “Cook Islands”,  
  “XK”: “Kosovo”,  
  “CI”: “Ivory Coast”,  
  “CH”: “Switzerland”,  
  “CO”: “Colombia”,  
  “CN”: “China”,  
  “CM”: “Cameroon”,  
  “CL”: “Chile”,  
  “CC”: “Cocos Islands”,  
  “CA”: “Canada”,  
  “CG”: “Republic of the Congo”,  
  “CF”: “Central African Republic”,  
  “CD”: “Democratic Republic of the Congo”,  
  “CZ”: “Czech Republic”,  
  “CY”: “Cyprus”,  
  “CX”: “Christmas Island”,  
  “CR”: “Costa Rica”,  
  “CW”: “Curacao”,  
  “CV”: “Cape Verde”,  
  “CU”: “Cuba”,  
  “SZ”: “Swaziland”,  
  “SY”: “Syria”,  
  “SX”: “Sint Maarten”,  
  “KG”: “Kyrgyzstan”,  
  “KE”: “Kenya”,  
  “SS”: “South Sudan”,  
  “SR”: “Suriname”,  
  “KI”: “Kiribati”,  
  “KH”: “Cambodia”,  
  “KN”: “Saint Kitts and Nevis”,  
  “KM”: “Comoros”,  
  “ST”: “Sao Tome and Principe”,  
  “SK”: “Slovakia”,  
  “KR”: “South Korea”,  
  “SI”: “Slovenia”,  
  “KP”: “North Korea”,  
  “KW”: “Kuwait”,  
  “SN”: “Senegal”,  
  “SM”: “San Marino”,  
  “SL”: “Sierra Leone”,  
  “SC”: “Seychelles”,  
  “KZ”: “Kazakhstan”,  
  “KY”: “Cayman Islands”,  
  “SG”: “Singapore”,  
  “SE”: “Sweden”,  
  “SD”: “Sudan”,  
  “DO”: “Dominican Republic”,  
  “DM”: “Dominica”,  
  “DJ”: “Djibouti”,  
  “DK”: “Denmark”,  
  “VG”: “British Virgin Islands”,  
  “DE”: “Germany”,  
  “YE”: “Yemen”,  
  “DZ”: “Algeria”,  
  “US”: “United States”,  
  “UY”: “Uruguay”,  
  “YT”: “Mayotte”,  
  “UM”: “United States Minor Outlying Islands”,  
  “LB”: “Lebanon”,  
  “LC”: “Saint Lucia”,  
  “LA”: “Laos”,  
  “TV”: “Tuvalu”,  
  “TW”: “Taiwan”,  
  “TT”: “Trinidad and Tobago”,  
  “TR”: “Turkey”,  
  “LK”: “Sri Lanka”,  
  “LI”: “Liechtenstein”,  
  “LV”: “Latvia”,  
  “TO”: “Tonga”,  
  “LT”: “Lithuania”,  
  “LU”: “Luxembourg”,  
  “LR”: “Liberia”,  
  “LS”: “Lesotho”,  
  “TH”: “Thailand”,  
  “TF”: “French Southern Territories”,  
  “TG”: “Togo”,  
  “TD”: “Chad”,  
  “TC”: “Turks and Caicos Islands”,  
  “LY”: “Libya”,  
  “VA”: “Vatican”,  
  “VC”: “Saint Vincent and the Grenadines”,  
  “AE”: “United Arab Emirates”,  
  “AD”: “Andorra”,  
  “AG”: “Antigua and Barbuda”,  
  “AF”: “Afghanistan”,  
  “AI”: “Anguilla”,  
  “VI”: “U.S. Virgin Islands”,  
  “IS”: “Iceland”,  
  “IR”: “Iran”,  
  “AM”: “Armenia”,  
  “AL”: “Albania”,  
  “AO”: “Angola”,  
  “AQ”: “Antarctica”,  
  “AS”: “American Samoa”,  
  “AR”: “Argentina”,  
  “AU”: “Australia”,  
  “AT”: “Austria”,  
  “AW”: “Aruba”,  
  “IN”: “India”,  
  “AX”: “Aland Islands”,  
  “AZ”: “Azerbaijan”,  
  “IE”: “Ireland”,  
  “ID”: “Indonesia”,  
  “UA”: “Ukraine”,  
  “QA”: “Qatar”,  
  “MZ”: “Mozambique”  
Atlantic/Canary

**FAQs**




**Question:** How do I find out why my import failed?
**Answer:** To view errors, go to **Contacts** > **Bulk Actions** and click on **Statistics** next to your import operation. From there, select the **Error tab** to see a detailed list of what went wrong.




**Question:** The error message mentions "Line 1," but that’s my header row. Is it wrong?

**Answer:** In this system, "Line 1" refers to the **first contact record** in your file, not the header row itself.




**Question:** What should I do if I get an "Unknown Error" (Code 1001)?

**Answer:** First, ensure your file meets all formatting requirements. If it does, try clearing your browser cache or re-importing using a different web browser.




**Question:** Why did my Contact Owner not import correctly?

**Answer:** This usually happens for two reasons:

1.  **Ambiguity (Code 1002):** There are multiple users with the same name. Resolve this by using the owner's **email address** instead of their name.
2.  **Missing Name (Note #1):** The system only recognizes owners if both a **First Name** and **Last Name** are provided in the file.




**Question:** What is a "Contact ID" error (Code 1006)?

**Answer:** This happens if you checked the box to update existing records using Contact IDs, but the ID in your file doesn't match any record in the system. Ensure you have exported the correct IDs from the software before attempting an update import.