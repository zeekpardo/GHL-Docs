---
title: "How to use URL Parameters on your Landing Page"
description: "How to use URL Parameters on your Landing Page"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/kg5wGPNedsTYBmMO3i9V"
sourceId: "kg5wGPNedsTYBmMO3i9V"
category: "Site Builder"
---

**How to use URL Parameters on your Landing Page**

You can use URL Parameters to show the contact's name so that the landing page will get the name from the URL and show it on the page.

Contact values like contact.name or contact.email will only work when the user has submitted a form on the previous page/step of the funnel. If your leads are landing on the page directly without submitting data, the system does not know which contact opened the page, and it is impossible to show the name directly. However, there is a workaround for this. 

## Navigation

### Step 1: Go to Sites & Select Funnels or Websites

-   From the left-hand sidebar, click "Sites". Depending on where you want to add URL parameters, choose either "Funnels" or "Websites."

![](https://assets2.modalsupport.net/1764271219423-image3.jpg)

![](https://assets2.modalsupport.net/1764271231142-image6.jpg)

### Step 2: Edit Your Landing Page

-   Find the specific funnel or website to which you wish to apply URL parameters. Click the "Edit" button for the page you want to modify.

![](https://assets2.modalsupport.net/1764098254440-image.png)

### Step 3: Set the URL Parameter name on the landing page

-   Name your parameter; for example, in this case, we will call it 'lead'
-   Add the parameter name on the landing page where you want to display the parameter value. The parameter name will be enclosed in double curly brackets.

![](https://assets2.modalsupport.net/1764098274761-image.png)

### Step 4: Get the Page URL and add the parameter name to it

-   Now open the Page URL and add the parameter name with a question mark to pass the parameter name and value along with the URL. 
-   For example, if the lead's name is John, and the Page URL is [https://test2.excaaa.com/ubsub-test,](https://test2.excaaa.com/ubsub-test,) I can pass the Parameter 'lead' with the value 'John' using this URL: [https://test2.excaaa.com/ubsub-test?lead=John](https://test2.excaaa.com/ubsub-test?lead=John)

### Step 5 (Option 1): Set up your email with the URL

-   Send this email to the lead so that it opens their name, you will use the value "contact.name" instead of 'John' so that it displays their name. In our example, the URL would look like this: [https://test2.excaaa.com/ubsub-test?lead={{contact.name}}](https://test2.excaaa.com/ubsub-test?lead=%7B%7Bcontact.name%7D%7D)

![](https://assets2.modalsupport.net/1764098292160-image.png)

-   Send this to the lead in the email and test.

### Step 5 (Option 2): Redirect to this URL from the previous step in this funnel

-   You can add the link with the URL parameters to the previous step of the funnel using the redirect options for the button/form/survey/calendar.

![](https://assets2.modalsupport.net/1764098307860-image.png)

## FAQs




**Question:** Why can’t contact values like contact.name or contact.email be displayed if a lead lands directly on the page?
**Answer:** If a lead lands directly on a page without submitting data through a form on the previous page or step, the system does not recognize the lead and cannot display personalized contact values like name or email. The system requires submitted data to identify the contact.




**Question:** How can I display contact names on a landing page if the lead hasn’t submitted a form?
**Answer:** You can display contact names by using URL Parameters. The landing page can retrieve and display this value by including the contact’s name in the URL as a parameter.  




**Question:** How do I set up URL Parameters on my landing page to display contact information?
**Answer:** To set up URL Parameters:

-   **Step 1:** Name your parameter (e.g., 'lead') and add it to the landing page where you want the value to appear, enclosed in double curly brackets (e.g., {{lead}}).
-   **Step 2:** Get the page URL and add the parameter name with a question mark to pass the parameter and its value (e.g., https://test2.excaaa.com/ubsub-test?lead=John).




**Question:** What should the URL look like if I want to dynamically use a contact's name in an email?
**Answer:** To dynamically use a contact's name in an email, set up the URL with the parameter and contact value placeholder. For example:

-   If the Page URL is https://test2.excaaa.com/ubsub-test and you want to display the contact's name, the URL should look like this:
-   https://test2.excaaa.com/ubsub-test?lead={{contact.name}}.

Send this URL in the email, and when the lead clicks on it, their name will be displayed on the landing page.




**Question:** Can I redirect to a URL with parameters from a previous funnel step?
**Answer:** Yes, you can redirect to a URL with parameters from a previous step in the funnel. You can add the link with the URL parameters in the redirect options for buttons, forms, surveys, or calendars on the previous page of the funnel.




**Question:** What happens if the URL parameter is not correctly formatted?
**Answer:** If the URL parameter is not correctly formatted or the parameter name does not match the expected format on the landing page, the system cannot retrieve and display the contact’s information correctly. Ensure the parameter name is enclosed in double curly brackets and matches precisely.




**Question:** Is there a specific format for adding URL parameters?
**Answer:** To add a URL parameter, append a question mark (?) followed by the parameter name and value to your page URL (e.g., ?lead=John). For multiple parameters, separate them with an ampersand (&) (e.g., ?lead=John&email=john@example.com).


**Question:How do I test if the URL parameter is working correctly?
**Answer:** To test the URL parameter, manually enter the URL with the parameter and value in your browser’s address bar or use the provided URL in an email to yourself. Check that the landing page correctly displays the parameter value where specified.


**Question:Can I use URL parameters for values other than names?
**Answer:** You can use URL parameters for any contact-related values such as email, phone number, or any other custom field data, as long as you properly set the parameter names and values in the URL.


**Question:What are the benefits of using URL parameters for contact values on landing pages?
**Answer:** URL parameters allow you to personalize landing pages for leads without requiring them to resubmit their information. This enhances the user experience by making interactions feel more personalized and can increase engagement by showing relevant information based on the contact's data.  




**Question:** How should I format the parameter name on my landing page so the system recognizes it?
**Answer:** The parameter name must be enclosed in double curly brackets on the page. For example, if you named your parameter 'lead', you would place {{lead}} on the landing page where you want the value to appear.




**Question:** Why is this "workaround" necessary for leads landing directly on a page?

**Answer:** Under normal circumstances, the system only knows a contact's identity if they just submitted a form on a previous step. If they land directly (via an email link, for example), the page is "anonymous" unless you use a URL parameter to "tell" the page who is visiting.




**Question:** Where in the system do I need to go to start setting up URL parameters for my pages?
**Answer:** To begin, navigate to the **Marketing** tab and select the **Social Planner**. From there, you can access the **Sites** section on the left-hand sidebar, where you will choose either **Funnels** or **Websites** depending on which page you wish to modify.