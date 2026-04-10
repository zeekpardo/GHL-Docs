---
title: "Workflow Trigger: Contact Tag"
description: "Workflow Trigger: Contact Tag"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/IXgrIskCPULrqye7PoHR"
sourceId: "IXgrIskCPULrqye7PoHR"
category: "Workflow Triggers"
---

**Workflow Trigger: Contact Tag**

This article will explain how to set up a Contact Tag Workflow trigger, what it can be used for, and why.

## **Navigation**

1\. Go to Automation on the left > Workflows on the top > Create a new workflow/edit an existing one.

![](https://assets2.modalsupport.net/1761068108173-image.png)

2\. Select the “**_Add New Trigger_**” button as seen below

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdaydScV6KyG5MpDGjCspnmztWFdmGxXB769fKD51Zu3S24LwG7OeGfBJ8HcAbx57EiDHeWszzZLVrPphb1YKbTnb_deDW9ZnRi77W5q24Ueu6lvMWPM5Gonk0sQNzI4wAekFv2XNsI6qclE8RhslnzUdaL?key=1yVndj_3p6bfPO-lYEIM1w)

3\. This will pull up a list of new Triggers you can select for the new step

-   Scroll down until you see the **Contact** section, this is where you can select the “**Contact Tag**” button or use the search bar to locate the trigger.

![](https://assets2.modalsupport.net/1761068173107-image.png)

4\. This will bring up a list on the right side where you can add specific tags to the trigger (**Note**: _you can add more than one Contact tag_)

-   Under the “**Filters**” drop-down select “**Tag Added**” or “**Tag Removed**”

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdQS1wZ8S1PTgATSzwBH0iv03YUk9LH8GNmKTKzsET5-fuzSOu7p0byEfXpQ6MFOcjxqx00Q3ZZ0xqueo5FbDDSXiWlP7foqdNz8fElomJI_26C-KMMo-Cyi5zMwcdXUqd70jrUKLCeWAPHNhOD8HbJzZFV?key=1yVndj_3p6bfPO-lYEIM1w)

-   **_Please Note:_** _if you have not created any contact tags yet it won't display any under the “_**_Select Tag_**_”_ _drop-down_

5\. To create a custom “**_Contact Tag_**” type out the word that you want to add to a contact in the “**_TAGS_**” section 

-   **For Example:** If the customer is a subscriber I will type “Subscriber”
-   Next, select the blue “**ADD NEW TAG**” button to create the new contact tag (see below)

_![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXd2L_P7qmhTk-NYQHbR1z2nR2Avf_NJYugzIYL_LaNvYjlJA86WtL35MaF0EYNrC8RkyLQZivCOjIXoFI4k2dhWXfzqME-dlflbTbUIbmJ9I6nyOYV5eB8U-DUqFV9oYO-ui-2PiKzENQzv6BfgF930GpzN?key=1yVndj_3p6bfPO-lYEIM1w)_

_![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfaWPu6tuxnm17hZwqxFu4d-lYpfphpqj7uKGYtmxpwnzXFODpUtKdkr8CoSykivnmIdpKdMjT0WNP6csaN6Qi1uG4mZrvDeIv11SooL5OWmulMafkeScDJdZj3B-7_1uQcOZ0eKDySjIG9v0-Wm--BLpg?key=1yVndj_3p6bfPO-lYEIM1w)_

-   This is one way you can create custom **_Contact Tags_**

6\. Once completed it will look like this (you can add multiple tags if needed)

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXchGG-o_eygFr-tt0-ElsmuqoEPUrRPQLS2mpgfbOffFQU22QyV0VL5Yc6y5TzqNm84S1q0XQXB-mLLcVNVdb2Um0jyXaJQjCWY_8iq-6nnWG-SMkwmxMI68XGW7F4e4HohqhYPoysawvq-WHDYHOb8yEfC?key=1yVndj_3p6bfPO-lYEIM1w)

-   To stay extra organized it’s recommended to type the name of the new contact tag you created in the “**Workflow Trigger Name**” section
    -   This will allow you to see exactly what the contact tag is without having to click on the trigger details (see below)

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeyzeKM-iTdqJimhilUcsqbhAaovTyhX2Eu8uAKbiij6A2gcAKavkDcJJVIdaIsIMbCTLDBkN4OY3cBNZ1Iq1fvtYcWdKBmfUesxGnwj7vLEO3lUeE9x6DjecpucV_tnJNSGWgsV-oyqmhqckXacuQkJsAU?key=1yVndj_3p6bfPO-lYEIM1w)

7\. Please make sure you click the “**_Save Trigger_**” button before you close or move on to another step

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeILitixi_6v2YYGUjyRWTHhB0dvqVfmR59oez-ol_kyNcLe1rcg-v13NEblV-RyoSsE2BboOTIeUIdvaLOLPeqMtWbW-0tkB3F08eMJIhj-7k-kwQajUv2Ofq5njsI4-8CixRF?key=1yVndj_3p6bfPO-lYEIM1w)

**Example Use Cases**

**Actions for Tag Added**

-   **Send an Email or SMS**: For example, when the “Interested” tag is added, send a follow-up email:
    -   **Subject**: “Thank You for Your Interest!”
    -   **Body**: Hi {{contact.first\_name}}, thank you for showing interest in our services. If you have any questions, feel free to reach out!  
        Best regards, \[Your Company Name\]

![](https://assets2.modalsupport.net/1761068481446-image.png)

-   **Notify Your Team**: Send an internal notification to your sales team: “A new contact tagged as ‘Interested’ needs follow-up. Contact details: {{contact.details}}.”  


![](https://assets2.modalsupport.net/1769739829048-image2.png)

**Actions for Tag Removed**

-   **Send a Re-Engagement Email or SMS**: For example, when the “Newsletter Subscriber” tag is removed, send this message: “Hi {{contact.first\_name}}, we’ve processed your unsubscribe request. If this was a mistake, click here to rejoin.”
-   **Ask for Feedback**: Send a survey or feedback request to understand why the tag was removed.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdSdk5eXgzSB1i1OTtT0MyFVF4hyGdXFVkpk22qhg53MvhFGJAlCLkIOoNtMPwetuq7cebQ0_Orv4m2zkfCxg5K7VUdiDsJicu_4aRUFzNygTUzk5DFrcRAlCTXlyzs68iheNMScw?key=1yVndj_3p6bfPO-lYEIM1w)

**Common Issues and Solutions**

-   **Duplicate Tags**: Make sure tags are distinct and clear to prevent confusion in workflows.
-   **Inactive Workflow**: Confirm that your workflow is both published and active.
-   **Missing Actions**: Ensure all actions connected to the trigger are properly set up.
-   **Overlapping Workflows**: Avoid creating multiple workflows with the same trigger to prevent unintended actions.

## **FAQ’s**  




**Question:** What happens if I add multiple tags to a trigger?
**Answer:** If you add multiple tags to a trigger, the workflow will activate when any of those tags are added or removed from a contact. This flexibility enables you to manage complex workflows with various tagging conditions.




**Question:** Why is it important to use Contact Tag Workflow triggers?
**Answer:** Contact Tag Workflow triggers are important because they allow you to automate processes based on contact segmentation. By tagging contacts, you can easily group and manage them, triggering specific actions tailored to each segment’s needs.




**Question:** Can I edit or update tags in the Contact Tag Workflow trigger?
**Answer:** Yes, you can edit or update tags within the Contact Tag Workflow trigger. Simply go into the trigger settings, adjust the tags or filters as needed, and save the changes to keep your workflow up-to-date.




**Question:** What should I do if I want to remove a tag from a Contact Tag trigger?
**Answer:** To remove a tag from a Contact Tag trigger, navigate to the trigger settings, find the tag you wish to remove, and delete it from the list. Adjust the filters if necessary and save the updated trigger.




**Question:** How does the Contact Tag Workflow trigger improve workflow management?
**Answer:** The Contact Tag Workflow trigger improves workflow management by providing a structured way to activate workflows based on specific contact behaviors. It helps keep workflows organized and ensures that the right actions are triggered for the right contacts.




**Question:** Can I use the Contact Tag trigger for both added and removed tags in the same workflow?
**Answer:** Yes, you can set the Contact Tag trigger to activate when tags are either added or removed. This dual functionality allows you to control workflows based on changes to contact tags, offering more flexibility in your automation.




**Question:** What should I do after creating a Contact Tag Workflow trigger?
**Answer:** After creating a Contact Tag Workflow trigger, ensure that your workflow is saved and published. Test the workflow by adding or removing the relevant tags to verify that the trigger is working correctly.




**Question:** Is there a "Between" operator available for workflow trigger filters?
**Answer:** Yes, the "Between" operator allows you to filter values within a specific numeric range by setting a minimum and maximum value.




**Question:** Can I trigger different actions based on different tags within the same workflow?
**Answer:** Yes. After the trigger, you can use conditional logic (If/Else or Conditions) to branch actions depending on which tag is present.




**Question:** Can I create multiple workflows with the same trigger?
**Answer:** It is not recommended to use the same trigger across multiple workflows, as this can lead to overlapping actions and unintended results. Ensure each workflow trigger is unique or carefully coordinated to avoid conflicts.




**Question:** Can a tag trigger a workflow if it was added by a different automation?
**Answer:** Yes! Tags added manually by a user, via a form submission, or by a _different_ workflow will all activate the "Tag Added" trigger. This allows you to "daisy-chain" workflows together for complex automation.