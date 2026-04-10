---
title: "Workflow Action: Set Event Start Date"
description: "The Event Start Date action allows you to build automation around a specific date & time. Once you set the Event Start Date, the items in that workflow can be…"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/eZQ7nwCPKzs4HXtANDh1"
sourceId: "eZQ7nwCPKzs4HXtANDh1"
category: "Workflow Actions"
---

The Event Start Date action allows you to build automation around a specific date & time. Once you set the Event Start Date, the items in that workflow can be sent with that day and time using the 'before' and ‘after’ actions. This is useful for sending out reminders for both in-person and online events with a set time for the entire group of leads (e.g. webinars, conferences, etc.) Or, maybe you want to schedule something in the system to occur after the event, such as sending out a follow-up email. 

### Step 1: Add the Event Start Date Action in the Workflow

-   Navigate Automations > Workflows, and open the Workflow you want to edit.
-   Add an action using the + button
-   Choose “Set Event Start Date” and customize the action.

![](https://assets2.modalsupport.net/1765311014228-image7.png)

![](https://assets2.modalsupport.net/1765311041706-image2.png)

### Step 2: Configure the action by setting the details

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeUwkwJv438CaX7sIJe7yAoSKkm9Ql6YrbAaIXik_r2N8m_LFyGQfhz0Zn1iRh1zA2cDu1j7I84D7pKkwWWL8ZfD8dfrIJ9S_vtBUi1X-vzHsRdxmYnVbjI3PlxMoSTK2wIR1gaCsD5C4tsoUS16DjhPPE?key=4InmLhx0LTyKja2P2r5R4g)

-   For the type, you can choose Custom Field, Specific Date/Time, or Specific Day

-   Select the option you wish to use, fill out the custom field or the date/time information, and Save Action to add this to your Workflow.


**Note:** For the Custom Field option, you would be able to map it with one of the date fields or values. If you select a regular text field, you will need to make sure that it matches the format recommended by the system:  

MM-DD-YYYY HH:MM, Ex : 12-21-2021 08:30 AM

DD-MMM-YYYY HH:MM, Ex : 21-OCT-2021 08:30 AM

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcdRaYBSANg9QE7QMBFQoT4PSQB-6U03-5__fKoEMHxf9C_Ftj1a5zLP4lg8R6iQJni5Zg1Cp5Kq6zF-675GJVTL0kxr3SOgKnqh6leGoa-xRmcB03Bvxs_sgx8dbBmuNtMMJbtIA?key=4InmLhx0LTyKja2P2r5R4g)

### Step 3: Set up the Wait action

-   Add a “Wait” action within the Workflow.
-   For the ‘Wait for’ field, use “Event/Appointment Time”

![](https://assets2.modalsupport.net/1773324828959-image3.png)

-   Set up the “Until” section with **Before**, **After,** or **Exact Time** options.
    -   If you set this to 2, as shown below, it will wait and send off the following action 2 days before the scheduled Event Start Date.
    -   If the time is already in the past, it will proceed to the next step, a specific step, or skip to the next wait step. In the below example, it will move to the specific step.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcNZOI-ovrh-qTZLXhwolGlOmN3tLg1Dfi2kQr77k7G8g0-3k6dA1cRVjCD076Niq5mamL41lrE1rTjCSFQTv_jhflGXfWmsqPKgDBvLj8SmMiQQTQ5YVmmXpFmR7YsA7xi9nZZfhKUAmLYyDNHKILFPKg?key=4InmLhx0LTyKja2P2r5R4g)

-   Save the workflow to confirm any changes you’ve made.

**NOTE:** This action is repeatable within the workflow. You can add multiple actions to update the event start date/time.

### FAQs:




**Question:** Can I set multiple Event Start Dates/Times in the same workflow?

**Answer:** Yes, you can add multiple "Set Event Start Date/Time" actions within the same workflow to manage different events.  




**Question:** What happens if a contact enters the workflow after the Event Start Date/Time has passed?

**Answer:** The contact's progression depends on the "Wait for Event/Appointment Time" action settings. They can skip past the wait action or move to specific steps based on your configuration.  




**Question:** Can I use the "Set Event Start Date/Time" action without a corresponding "Wait for Event/Appointment Time" action?

**Answer:** While possible, it wouldn't be very useful, as the primary purpose of the action is to establish a reference point for other actions.  




**Question:** If my workflow settings are set to respect Contact time zones, how does that affect the "Set Event Start Date/Time" action?
**Answer:** The action allows you to set the event start date/time in your time zone, and the workflow will adjust it based on each contact's time zone. If no time zone information is available, it defaults to your account's time zone.




**Question:** Is the Event Start Date action repeatable within a workflow?

**Answer:** Yes. You can add multiple Event Start Date actions to update or manage different events within the same workflow.  




**Question:** What is the correct format to use if I select a regular text field for the Custom Field option?
**Answer:** You must ensure it matches system-recommended formats such as month day year, followed by the time or day month year, followed by the time. Examples include 12-212021 08:30 AM or 21-OCT-2021 08:30 AM.