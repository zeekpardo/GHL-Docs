---
title: "Workflow Trigger: Twilio Validation Error"
description: "The Twilio Validation Error Workflow Trigger allows you to build a workflow that will be triggered in the event of a validation error occurring with your use…"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/gv2NETQxLlPM0HiebQSN"
sourceId: "gv2NETQxLlPM0HiebQSN"
category: "Workflow Triggers"
---

The _Twilio Validation Error_ Workflow Trigger allows you to build a workflow that will be triggered in the event of a validation error occurring with your use of Twilio. This trigger runs based on the Twilio Lookup response before sending an SMS or making a call. The contact with whom the communication caused an error will be added to this workflow, allowing you to sequence various actions toward the contact as well as internally.  This article will give an overview of how to create a workflow using the _Twilio Validation Error_ Workflow Trigger

_Note_: Number Validation has to be enabled in Agency Twilio Settings for this Workflow Trigger to function.

### **Step 1:** Start a new workflow or edit an existing one

### **Step 2:** Creating and Editing the Trigger

-   Click “Add New Workflow Trigger”

![](https://lh3.googleusercontent.com/VpZT9BAVKzhJuJ4dyCLD23GlNF9oCnEkDl6P0K4Au8Nz61bEcII6U070D7s1ab2EFOEYBttxTw_UVLuFtP9mFZU4PNDIL8UHvKuLQUAJMbhuNwNSzFanx9d2Q7CF9YvoZMp5gm2U9lg-GCCu_R6YvU8)

-   Select **Twilio Validation Error** in the **Contact Actions** section of the Workflow Triggers Menu or use the search feature. Once selected, the Trigger setup menu will appear
-   (_Optional_) You can change the workflow builder display name of this trigger using the textbox below **Workflow Trigger Name**. Note that this will only affect the display name within the workflow builder and has no other impact on the content or functionality of this Workflow Trigger.
-   Press **\+ Add filters** to expand the **Filters** section of the Trigger setup menu
    -   The **Error is** filter parameter will allow you to select which Twilio Validation Errors can trigger this workflow. You can select **SMS Incapable**, **Not Valid**, or you can choose both
    -   You can also filter by **Custom Fields** which will only allow contacts who meet your selected custom value criteria to be added to this workflow. Custom values are set up elsewhere in your account
-   Press **Save Trigger** in the bottom right corner of the Trigger setup menu

![](https://lh6.googleusercontent.com/qCjp_Xsh4xU_k39qwVaaGcjoz9_g-nSy2x63P2SDtZHoyqGP5Tt9B2oqpQ6cvhl2jZnGs1nTdqQD2qFfHz20AXFwQ4Y6P_0hwBKOmpDeRHey3F12DGAQhoQqbJB_PnARSub8jV0gmSIB1FeG2-rMwLE)



### **Step 3:** Set up applicable Workflow Action(s). We have multiple articles available to explain the setup of each of the Workflow Actions. Feel free to review our articles on these for more information on setting these up.

**_Pro Tip:_** You can use any Workflow Actions to be triggered by the _Twilio Validation Error_ trigger or you can leave this workflow without any actions.



### **Step 4:** Press **Save** in the top right corner of your browser to save the workflow

-   If your Workflow is ready to be enabled, make sure the toggle switch under **Save** is set to **Publish**
-   Be sure to test your Workflow to make sure it is set up correctly using the **Test Workflow** button next to the **Publish** toggle switch. 
    -   For an in-depth overview of Workflow Testing see our article, “Using the Testing Features in Workflows”

![](https://lh6.googleusercontent.com/VTENgm4ftvzYSocZTw2HhuEukFf8GakF8leHPW-a4jGdq7VI-I0qAt-ZBojiNSUmuNxzI0fMFIca2OPIc0RWb8lGiN98rKbNiHUYrcKGqStTXj4qJKQcdKfz7EZx1XGEq_vjzlw69pVRjf-FuaDTB-k)

Now your workflow is set up and ready to go with the _Twilio Validation Error_ Workflow Trigger.