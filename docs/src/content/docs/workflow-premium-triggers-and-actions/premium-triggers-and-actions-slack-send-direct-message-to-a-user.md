---
title: "Premium Triggers and Actions - Slack - Send Direct Message to a User"
description: "Premium Triggers and Actions - Slack - Send Direct Message to a User"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/tkjuIcHobYcbOkSLxVnm"
sourceId: "tkjuIcHobYcbOkSLxVnm"
category: "Workflow Premium Triggers and Actions"
---

**Premium Triggers and Actions - Slack - Send Direct Message to a User**

If the event is **Send Direct Message to User**, you will have four options to choose from.

-   **Assigned User** - Assigned User of the Contact
-   **Custom Email** - Add a specific email to search your Slack Workspace for the User and then send out the message
-   **Internal User** - Users from your account
-   **Slack User** - Directly search your Slack Workspace Users by name.

### **Select a User Source**

To start, select one of the four User Sources provided.

## **Different Types of User Sources & their Use Cases**

**1\. Assigned User (of contact)**

This is used to send out notifications to the contact's assigned user. In this case, the user's email Assigned to the contact is used to find the Slack user.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfwUPt3p16a9a_VKXXm1XwRh6k0HQKqAXIUN03geFnR19DWj3MFx1YhjBme4srZ_KDumwPfQJ6yPh7e8y3SAyCz0LZZxz7VRZtZf_cVsCmcIWvEpR5PTmc758Pw29_XgzTsxS25R2EGyrutVJ-KBEkMY60?key=PY_GEeIP014KMWvTW-CSpg)

**2\. Custom Email**

This is used for all cases where you need a dynamic user to send notifications to. The custom email that is filled in is used to find a matching Slack user.

This is for all cases where the user is not predefined. Either type in the email or select from a list of custom variables using the custom variable picker. 

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXf3ESnoSdRqpvyEPD5hxvgYpDtoTWMNJ0dfJGHouA5v2Roko20TvvINvmUmFtL0TF2j1m3a0JcGeC8tVHnjaquHtGsX5njjxW-n3ndPOPI1C0uKb2vcWhyge5o5PPwlmOtYH5KR1yqFbLVGINMzvcM3AmM?key=PY_GEeIP014KMWvTW-CSpg)

**3\. Internal User**

Use this option to send the message to one of the account users. Typically used to send notifications to particular users responsible for certain sections of your business. Say, sending out information on a successful opportunity won to your finance head. The email of the Internal User selected is used to find the Slack user here.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfVjFwhDGLwVIG5uN7aN1spLyEBC-oPlVWX4IxfuYU2d_ulU5WotNSRqZ9GOT5sq03y0hXt4luDavw0dgA9pAbho3sEwU1nShWr7i6_1j-lWj3o_M3cQOJvkEwLXLqkI4_lu-Y_ry5Z5lwkuwIJjZxFb_AX?key=PY_GEeIP014KMWvTW-CSpg)

## **Slack User**

This is as simple as it sounds. Send a direct message to any Slack user in your workspace.  
Slack allows only a limited number of users to be fetched simultaneously. So if you don't see your user by typing out the name, please hit the load more button. This will keep searching until you have found the required user. If the user is at the bottom of the list, you might have to hit the load more button several times. **This is only for the workspaces having more than 1000 users.**

**![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfCQiDQOMbZNKMvsnUcTS1EkQgB56r7U9sU-7FwO0djbr7rGjRjVYtoVpf4e2DwhDCb9ooSLTiHzcwci-Nsc4yEhe0P7yip-AVmjQFxJjENtmveT8lt3coYv16Y7pLFnN3E-imCCXM7MYwX7tRFloZ9n3m7?key=PY_GEeIP014KMWvTW-CSpg)**

### **Message Content**

Insert Message to send Direct Message to a User. For more formatting options, [check here](https://api.slack.com/reference/surfaces/formatting)

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeD5qhqZlw0TTh3TeW2yNBUxhfnanLPMeqH5iK9Zsa6J7kIZovWLmuO0t6EuThB2ljv_1WrQVHeM7_e8cbAfGT-7GFixx2JrntM7HXWfGI2pi6Lwb2C0G7cEXsIdXA_arOLSomfQgKtgV9kEF5KDICtXmvA?key=PY_GEeIP014KMWvTW-CSpg)

You can use the extensive custom variable picker to send information about a contact or any related information.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdD-lpE_lne-wfI70MxyG6Zp3PwDBqwx3_ze58Qz8yLh4KIOysbQqPWqPrRFj8Z5LHzgFWNbGppt30wh-gjogdQofSSlKLPCuOOvrSjXegRvcPQAdMdMwef3_V3ex7_wV58kLYBf272qnpL2NPqaeV3v8iP?key=PY_GEeIP014KMWvTW-CSpg)

### **Pro Tips:**

-   **Verify User Information:**
    -   Ensure the email addresses and user names you use to search for Slack users are correct. This helps avoid sending messages to unintended recipients.
-   **Utilize Custom Variables:**
    -   Leverage the custom variable picker to personalize your messages effectively. This feature helps include relevant details about the contact or , making the communication more meaningful.
-   **Monitor User Load:**  
    1\. For workspaces with a large number of users, be patient when using the “load more” button. It may take several clicks to find the user if they are at the bottom of the list.

### FAQ:




**Question:** What options do I have for sending a direct message to a user?

**Answer:** You can choose from four options: Assigned User, Custom Email, Internal User, or Slack User.




**Question:** How does the Assigned User option work?

**Answer:** The Assigned User option sends notifications to the user assigned to a contact. The user's email is used to locate the corresponding Slack user.




**Question:** What is the purpose of the Custom Email option?

**Answer:** The Custom Email option allows you to send messages to a Slack user based on a specific email address you provide. This is useful for dynamic user notifications.




**Question:** How can I send a direct message to a Slack User?

**Answer:** Use the Slack User option to directly search and send a message to any user in your Slack workspace. For workspaces with many users, you may need to click “load more” to find the desired user.




**Question:** Can I use this Slack message action in automations?

**Answer:** Absolutely. This feature is designed to be used within workflows and automations to keep your team notified in real-time based on triggers like new leads, closed deals, or customer actions.




**Question:** How do I ensure my messages go to the correct recipients?
**Answer:** Verify the email addresses or Slack usernames before sending. Using correct user information prevents messages from being sent to the wrong recipients.




**Question:** What should I do if I don’t see a Slack user in the search results?
**Answer:** For large workspaces, use the “Load More” button to fetch additional users. It may take multiple clicks if the user is at the bottom of the list.




**Question:** How does the Internal User option work?

**Answer:** The Internal User option allows you to send messages to users within your account. It is typically used to notify team members responsible for certain tasks or departments.




**Question:** Can I use variables like the contact's name or phone number in the Slack message?

**Answer:** Yes. You can use the **custom variable picker** to insert contact details or any other related information to personalize the message content.