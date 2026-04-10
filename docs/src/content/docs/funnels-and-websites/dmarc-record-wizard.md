---
title: "DMARC Record Wizard"
description: "The DMARC Record Wizard by dmarcian helps users create a DMARC record for their domain to gain insights into its usage and prevent abuse. The process involves…"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/W84n5p1ACJmMhziECG7V"
sourceId: "W84n5p1ACJmMhziECG7V"
category: "Funnels and Websites"
---

**DMARC Record Wizard**

The DMARC Record Wizard by dmarcian helps users create a DMARC record for their domain to gain insights into its usage and prevent abuse. The process involves several steps: entering the domain, choosing a policy, providing an address for aggregate reports, optionally providing a failure reporting address, choosing identifier alignment, optionally setting a subdomain policy, and optionally deciding the percentage of emails the DMARC policy should apply to. Each step guides the user through the choices with explanations, making it easier to customize the DMARC record to their needs. 

## Navigation

**Step 1:**

Enter the Domain to authenticate:

![](<https://assets2.modalsupport.net/1765282100593-unnamed - 2025-12-09T200813.183.png>)

**Step 2:**

Select your policy posture:

![](<https://assets2.modalsupport.net/1765282120253-unnamed - 2025-12-09T200831.279.png>)

When setting up a DMARC policy, you have options on how to handle emails that fail authentication checks. Starting with a "none" policy is recommended to observe the impact without affecting your email flow. This collects data on unaligned emails. You can then choose to either quarantine these emails for review or reject them outright, which stops the emails before they reach their intended recipients. This step is crucial in defining your domain's email security posture. 

**Step 3:**

Register your email address:

![](<https://assets2.modalsupport.net/1765282140433-unnamed - 2025-12-09T200851.989.png>)

In the field presented in the image, you should enter the email address where you want to receive aggregate DMARC reports. These reports provide data on the emails that are being sent on behalf of your domain and will inform you about messages that pass or fail the DMARC checks. The address you enter should be set up to receive and handle these types of reports, which often come in XML format. It’s typically an address dedicated to this purpose, like \`[dmarc-reports@yourdomain.com](mailto:dmarc-reports@yourdomain.com)\`. You can enter multiple addresses.

**Step 4:**

Provide a failure reporting address:

![](<https://assets2.modalsupport.net/1765282158932-unnamed - 2025-12-09T200910.349.png>)

This step asks if you want to receive detailed reports for each email that fails the DMARC check, known as Forensic Reports. These are not necessary for DMARC deployment but can provide deeper insights into specific failures, which could indicate abuse of your domain. If you choose "Yes," you'll get these detailed reports; if "No," you'll only get aggregate data.

**Step 5:**

Choose Alignment Identifier:

![](<https://assets2.modalsupport.net/1765282191073-unnamed - 2025-12-09T200941.858.png>)

Identifier Alignment in DMARC ensures that the domain in the From header aligns with the domains verified by DKIM and SPF. 

\-**Relaxed Alignment** allows the DKIM and SPF domains to be different subdomains of the domain in the From header. It's less strict and reduces the likelihood of legitimate emails failing DMARC due to strict domain matching.

\-**Strict Alignment** requires the domains to match exactly. This is more secure but can lead to legitimate emails failing if they use different organizational domains or subdomains.

Choosing between relaxed and strict depends on your desired balance between security and deliverability.

**Step 6:**

Choose Subdomain policy:

![](<https://assets2.modalsupport.net/1765282212803-unnamed - 2025-12-09T201003.180.png>)

This optional step lets you set a different DMARC policy specifically for subdomains of your main domain. By default, the same policy set for the main domain applies to all its subdomains. Setting a "reject" policy for subdomains can add security if you don't send emails from them, helping prevent abuse. If you're unsure about email flows from subdomains, it's advisable to choose "No" and use aggregate data to make an informed decision later.

**Step 7:**

Policy Percentage:

![](<https://assets2.modalsupport.net/1765282237366-unnamed - 2025-12-09T201026.588.png>)

This step allows you to specify the portion of your email traffic that the DMARC policy will affect. It's designed to facilitate a gradual rollout. By not setting this to 100% immediately, you can minimize disruptions to your legitimate email while monitoring the effects and reports. It gives you the flexibility to enforce the policy on a fraction of your emails and scale up as you become more confident in the DMARC setup. Then, the record can be created.

Using the DMARC Record Wizard to generate a DMARC record simplifies the process of creating the correct syntax for your DMARC policy. After generating the record with the wizard, you then need to enter this record into the DNS settings with your hosting provider. This step is crucial for implementing the DMARC policy, as it enables email servers to recognize and enforce your domain's email authentication policies. For more detailed guidance through each step, you can visit the \[DMARC Record Wizard\] (https://dmarcian.com/dmarc-record-wizard/).

### FAQs




**Question:** What is the DMARC Record Wizard, and how does it help?

**Answer:** The DMARC Record Wizard by dmarcian is a tool that helps users create a DMARC record for their domain. It guides users through the process of setting up DMARC by providing step-by-step instructions and explanations for each choice, making it easier to customize the DMARC record according to specific needs and prevent email abuse.




**Question:** How do I start creating a DMARC record using the DMARC Record Wizard?

**Answer:** To start, enter the domain you wish to authenticate in the first step of the wizard. This domain will be used to set up the DMARC record and monitor the emails being sent on its behalf.




**Question:** What are the DMARC policy options, and which one should I choose initially?

**Answer:** The DMARC policy options include:

-   **none:** Monitors email traffic without affecting the flow. Recommended for initial setup to collect data.
-   **quarantine:** Sends unauthorized emails to the recipient’s spam folder.
-   **reject:** Blocks unauthorized emails from reaching recipients.

It is recommended to start with the "none" policy to observe the impact and adjust the policy as needed.




**Question:** Where should I enter my email address to receive DMARC reports?

**Answer:** You should enter your email address in the step where the wizard asks for the aggregate reporting address. This email address will receive DMARC reports that provide insights into the emails being sent from your domain, including which ones pass or fail DMARC checks. Use an address specifically set up for handling DMARC reports, such as dmarc-reports@yourdomain.com.




**Question:** What is the purpose of the failure reporting address in DMARC?

**Answer:** The failure reporting address is used to receive Forensic Reports for each email that fails the DMARC check. These detailed reports are optional and provide deeper insights into specific failures, which can help identify abuse or issues with email authentication. If you opt out, you will only receive aggregate data.




**Question:** What is Identifier Alignment in DMARC, and how do I choose between relaxed and strict alignment?

**Answer:** Identifier Alignment ensures that the domain in the From header aligns with the domains verified by DKIM and SPF:

-   **Relaxed Alignment:** Allows subdomains to match, making it less strict and reducing the chances of legitimate emails failing.
-   **Strict Alignment:** Requires an exact match between domains, offering more security but potentially leading to legitimate emails failing if different domains are used.

Choose based on your preference for balancing security and email deliverability.




**Question:** Can I set a separate DMARC policy for subdomains?

**Answer:** Yes, the wizard provides an optional step to set a different DMARC policy specifically for subdomains of your main domain. By default, subdomains inherit the main domain’s policy. Setting a "reject" policy for subdomains can add security, especially if you don’t send emails from them, helping to prevent abuse.




**Question:** What does the Policy Percentage option do in the DMARC setup?

**Answer:** The Policy Percentage option allows you to specify the percentage of email traffic that the DMARC policy will affect. This gradual rollout feature minimizes disruptions to legitimate email flows while monitoring effects. Start with a lower percentage and increase as you become confident in your DMARC setup.




**Question:** How do I apply the DMARC record once created with the Wizard?

**Answer:** After creating the DMARC record with the Wizard, enter it into your domain's DNS settings through your hosting provider's dashboard (e.g., GoDaddy, Cloudflare). This step is crucial to implementing the DMARC policy, enabling email servers to enforce your domain’s email authentication rules.




**Question:** Why is it important to monitor DMARC reports after setting up the DMARC record?

**Answer:** Monitoring DMARC reports is essential as they provide insights into the authentication status of emails sent on behalf of your domain. These reports help identify and address potential issues, allowing you to fine-tune your DMARC settings for better email security and delivery performance.




**Question:** How can I test if my DMARC record is working correctly?

**Answer:** You can use tools like **dmarcian’s DMARC Inspector** or other DMARC testing tools to validate your record. These tools confirm if your DNS is configured correctly and your policy is being enforced.




**Question:** What happens if I don’t set up a DMARC record?

**Answer:** Without DMARC, your domain is more vulnerable to email spoofing and phishing attacks. Emails sent from unauthorized sources may reach recipients, potentially harming your brand’s reputation.




**Question:** Can the Wizard help me if I have a "Broken" DMARC record?

**Answer:** Yes. You can enter your domain, and the tool will show you your current record. If there is a syntax error (like a missing semicolon), the Wizard will help you generate a "clean" version that follows the correct rules.




**Question:** If I use the Wizard to create a record fordomain.com, does it automatically protect** [**marketing.domain.com**](http://marketing.domain.com)?

**Answer:** By default, yes. A DMARC record on your root domain covers all subdomains unless you specifically use **Step 6** to create a different "Subdomain Policy" (sp=). This is why it is critical to use the "none" policy. Initially you want to make sure you aren't accidentally blocking legitimate mail sent from a subdomain you might have forgotten about.




**Question:** Can I send aggregate reports to more than one person?

**Answer:** Yes. The wizard allows you to **enter multiple email addresses** in the aggregate reporting field, ensuring that different team members or monitoring services stay informed about your domain's authentication status.