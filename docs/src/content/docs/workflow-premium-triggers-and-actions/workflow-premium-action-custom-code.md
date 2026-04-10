---
title: "Workflow Premium Action: Custom Code"
description: "Workflow Premium Action: Custom Code"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/dw6gmNuW8ZRtuCPiPBNO"
sourceId: "dw6gmNuW8ZRtuCPiPBNO"
category: "Workflow Premium Triggers and Actions"
---

**Workflow Premium Action: Custom Code**

Custom Code is a potent tool within workflow automation platforms that enables users to craft tailored logic beyond the scope of pre-built actions. It allows for the creation of intricate automation sequences and seamless integration with diverse services not inherently supported by the platform. This premium feature bestows users with unprecedented flexibility and control over their automation processes, opening doors to many possibilities.

## **How to Use Custom Code**

**1\. Identify Custom Logic Needs:** Determine the specific requirements and functionalities that cannot be achieved through pre-built actions alone. This may include complex data manipulation, integration with external services, or specialized automation tasks.  

**2\. Access Custom Code Action:** Within the workflow editor, locate the option to add a new action and select "Custom Code" from the available choices.  

![](https://assets2.modalsupport.net/1762972333227-image11.png)

**3\. Write Custom Logic:** Use the code editor to create custom JavaScript logic tailored to your requirements. Leverage the Input Data feature to incorporate relevant values from the preceding steps into your code.  
![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfrPWLhyM4ZxxY81mVowDQY8dhD7sIu2lF_A3IU08_MRNqX1wlplorbTeeTZyIFbHhfuFId37WeV5uSdO086NkDOQYaCibnu-x0OnRtbxSMSFIfKXXAupsZkblXFJsznPHoaImjyEEzsuoERudMHciDQ2Ow?key=4EIblMcDkpVa1idcHLFlpg)

**4\. Support for Return Statements in Custom Code Action:** Users can also use return statements in asynchronous functions, simplifying the handling of asynchronous operations and improving the overall efficiency of custom scripts. To use this feature, write your asynchronous function and include a return statement to send the response directly.

**5\. Property Inclusion:** Within Custom Code, users can reference values from preceding triggers or actions using the Input Data feature. This feature allows users to populate a dictionary called InputData with relevant key-value pairs, which can be accessed within the code using standard JavaScript notation.  
![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcvM2eVtkuaQxtKEeSeucuspBz7MM6zV2sbrvlr4pzo_Kxn8wVnqYAss9EZMih9GDNDWFNfXsqnCroK-d5RrwUD05hFKpJXgMHn1oQiM5r4XmEqMzjWsggWEquFUm31jD46piGwtUC_nSKIbyJ_qvxzhqp9?key=4EIblMcDkpVa1idcHLFlpg)

**6\. Code Editor:** Custom Code provides users with a dedicated code editor where they can write and test their code. Sample code is pre-populated for your reference, and the output should be presented in the code formatted as a JavaScript Object or Array of Objects.  

![](https://assets2.modalsupport.net/1771944785670-image2.png)

**7\. AI-Powered Custom Code Generation:** Allows users to generate and integrate custom code directly within their automation processes. This streamlines coding tasks by providing AI-driven code suggestions, reducing manual effort, and improving workflow efficiency. 

-   Click "Build with AI," and input your coding requirements. The AI will generate relevant code, which you can modify or use as is. This feature is ideal for automating custom tasks without needing advanced coding skills.

![](https://assets2.modalsupport.net/1771944815102-image1.png)

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdJVTBfALPIlsGVJ-1czd14nLNPlnipa4RjtQbh6aogAhQ7k22HOBV2JlWtBtYMyMIl203yD4S1ZUkumDeZuwa8esQ2nCP0W3UhCowYoD6SeVToTcpF8rrBaVfPZJM1uSRfyZlE3A?key=4EIblMcDkpVa1idcHLFlpg)

8. **External HTTP Request**

-   Custom code supports external HTTP requests
-   Click on "HTTP Request" button above the code editor

![](https://assets2.modalsupport.net/1771944915274-image6.png)

-   Select from the following -
    -   Get Method
    -   Post Method
    -   Put Method
    -   Patch Method
    -   Delete Method
    -   Head Method
    -   Options Method

![](https://assets2.modalsupport.net/1771944937118-image7.png)

-   The selected request will populate at the bottom of the code editor.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeKIx9oB06Dv8vCl5ZOhLIxl8v1KQhJ1JLn1oQvWEoPV-MHlFszUxX0q-BbdxmTbz6fmHRTCKc97aUsJdew__z6XSgstk__1vhHFCttln4w_AM9MMAgV_zWLbcMX6KCwwwUhwLGww?key=4EIblMcDkpVa1idcHLFlpg)

**9- Test Code Execution:** Execute a test run of your code to verify its functionality and identify any errors. Address any issues that arise during testing to ensure the smooth operation of the custom logic.  

![](https://assets2.modalsupport.net/1771944965855-image11.png)

**10- Deploy Custom Logic:** Once the custom code has been successfully tested and validated, integrate it into your automation workflow to streamline processes and enhance efficiency.

**11- Console Support:** Console support for user-provided code execution captures and logs all console.log outputs from user code, allowing users to debug and monitor their code more effectively. 

**How to use:** Write your code and view the console outputs directly within the UI for better debugging and monitoring.  

### **Points to Remember**

-   Custom value passing is not supported during code testing; only contact information is passed.
-   Testing of custom code is mandatory to ensure its reliability and compatibility with subsequent actions.
-   Utilize the Property fields to assign key names and map values from previous steps within your code.

### FAQs




**Question:** What is Custom Code in workflow automation platforms?

**Answer:** Custom Code allows users to create tailored automation logic beyond pre-built actions, enabling complex data manipulation and integration with external services.




**Question:** How do I access the Custom Code action in the workflow editor?

**Answer:** Locate the option to add a new action within the workflow editor and select "Custom Code" from the available choices.




**Question:** Can I include asynchronous functions in my Custom Code?

**Answer:** Yes, you can use return statements in asynchronous functions to handle asynchronous operations efficiently.




**Question:** How do I test my Custom Code?

**Answer:** Execute a test run of your code to verify its functionality and address any issues that arise during testing to ensure smooth operation.




**Question:** What should I keep in mind when using Custom Code?

**Answer:** Custom value passing is not supported during code testing; only contact information is passed. Testing is mandatory for reliability, and you should use the Property fields to map values from previous steps within your code.




**Question:** Can Custom Code interact with other workflow actions?
**Answer:** Yes. Properly mapped input and output values allow Custom Code to interact with subsequent workflow actions, enabling dynamic automation sequences.




**Question:** Does custom code slow down my workflow execution?
**Answer:** Custom code is highly optimized, but complex scripts or those waiting for slow external APIs may add a slight delay. Using **Asynchronous Functions** correctly ensures that your workflow handles these tasks efficiently without "freezing" the automation.