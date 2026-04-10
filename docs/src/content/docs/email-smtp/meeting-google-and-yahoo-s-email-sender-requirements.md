---
title: "Meeting Google and Yahoo’s Email Sender Requirements"
description: "Starting from February 2024, Google and Yahoo have implemented mandatory email authentication requirements for all email senders."
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/v98FKTB3XTcDEnFmhknv"
sourceId: "v98FKTB3XTcDEnFmhknv"
category: "Email & SMTP"
---

Starting from February 2024, Google and Yahoo have implemented mandatory email authentication requirements for all email senders. 

Additionally, there have been significant policy updates regarding consent and engagement. Senders must adhere to these guidelines as failure to comply may result in email delivery issues such as delays, blocks, or classification as spam. 

While these changes may appear sudden, they have been carefully considered as the optimal approach to ensuring successful email delivery for quite some time. We strongly advise all our users to familiarize themselves with these new requirements to avoid disruptions in their email communications.

### Get Your Account Ready:  


Ensure compliance with the new sender requirements mandated by both Google and Yahoo.

## 1\. Enhance Your Brand Identity with a Branded Sending Sub-Domain

Boost your control of sender reputation and enhance inbox branding by configuring a branded sending sub-domain. Bid farewell to the "sent via msgsndr.com" disclaimer and adopt superior deliverability practices. As of February, this step is indispensable for bulk senders engaging with Google and Yahoo recipients.

Remember, upon activating your branded sending sub-domain, it may be necessary to gradually warm up your sending infrastructure over the next 2 – 4 weeks.

**Need assistance?**

Refer to our comprehensive guide on setting up a branded sending sub-domain in the help library “How to Set Up a Dedicated Sending Domain”.

Example of a Branded Sending Domain as displayed to Gmail users:   

![](<https://assets2.modalsupport.net/1762964781962-Captura de pantalla 2025-11-12 112612.png>)

## 2\. Establish DMARC Email Authentication for Your Sending Domain  


### What is DMARC? 

DMARC, which stands for Domain-based Message Authentication, Reporting, and Conformance, is a critical standard that builds upon SPF (Sender Policy Framework) and DKIM (DomainKeys Identified Mail). It serves as a communication tool between domain owners and mailbox providers, providing a clear policy on how to handle emails that fail SPF, DKIM, or both, and purport to be from your domain, potentially indicating spoofed or fraudulent activity.

### What should you do?

If you're sending more than 5,000 emails per day (combined for accounts utilizing a shared sending domain) and don't have a DMARC record configured, it's imperative to add one to your DNS. This action helps bolster email security and authentication, minimizing the risk of unauthorized emails being sent from your domain and ensuring better deliverability and trustworthiness of your emails.

## Implementation Steps:

1\. Use a free DMARC checker like [Dmarcian](https://dmarcian.com/dmarc-inspector/) to find out if you already have a DMARC record in place. Enter your root domain (ie: yourdomain.com) and hit inspect. If you see "Hooray! Your DMARC record is valid.", you're good to go - ignore the following steps. If not, continue to step 2

2\. Visit your DNS hosting provider and create a TXT DNS record.

3\. Choose TXT as the record type.

4\. Set the Host/Name value as: \_DMARC 

5\. In the Content/Points to field, enter: v=DMARC1; p=none;

Please note that Google suggests a gradual transition towards a more restrictive DMARC policy over time. This approach is recommended to ensure smooth implementation and minimize potential disruptions to your email delivery. For detailed guidance on this process, you can refer to [Google's Recommended DMARC Rollout Tutorial document](https://support.google.com/a/answer/10032473?hl=en). This resource provides step-by-step instructions and best practices to help you effectively manage your DMARC policy adjustments.  

Here's what the record would look like when set up in Godaddy:

![](<https://assets2.modalsupport.net/1762964825487-Captura de pantalla 2025-11-12 112634.png>)

6\. Save/submit your DMARC record and utilize [Dmarcian](https://dmarcian.com/dmarc-inspector/) to verify its successful addition (note that it may take a few minutes for the changes to register). Alternatively, you can confirm by sending yourself an email and examining the header.

To inspect the header of an email in Gmail, click on the three-dots icon within the email interface and choose the "Show More" option. Below is an example of what the header will resemble for an email originating from a domain with a valid DMARC record:

![](<https://assets2.modalsupport.net/1762964851843-Captura de pantalla 2025-11-12 112723.png>)

## 3\. Maintain Brand Consistency

Ensure that your "from" address corresponds with your branded domain to establish a coherent and easily recognizable email identity.

By DMARC standards, the domain of your "from" address must match the root domain of your branded sending domain. For instance, if your branded sending domain is "lc.msgsndr.com," then the associated root domain is "msgsndr.com." Therefore, utilizing "hello@msgsndr.com" as your "from" address preserves alignment with the root domain and adheres to DMARC guidelines.

## 4\. Refrain from Impersonating Gmail in Email "From" Headers  


### Why does it matter?

Gmail and Yahoo have intensified their enforcement of a DMARC policy known as 'quarantine.' Falsely representing yourself as sending from Gmail or Yahoo could significantly impact the delivery of your emails.

### What's the solution?

The solution is straightforward: avoid impersonating Gmail or Yahoo in the "From" section of your emails. Simply put, refrain from sending emails that appear to be from addresses such as 'example@gmail.com' or 'example@yahoo.com'. This approach ensures compliance with DMARC policies and helps maintain the integrity of your email delivery.

## 5\. Make it easier to Unsubscribe 

Senders must prioritize the ease of unsubscribing from their emails. If someone wishes to stop receiving emails, they shouldn't have to search extensively for the unsubscribe button. Making the unsubscribe process straightforward and easily accessible not only enhances user experience but also demonstrates respect for recipients' preferences and privacy. Therefore, it's recommended that senders prominently display the unsubscribe option within their emails, enabling recipients to opt out effortlessly with just a click. This practice not only fosters positive user engagement but also helps maintain the sender's reputation and compliance with email marketing regulations.

### Introducing Streamlined Unsubscribing: One-Click Solution

Exciting news! Complying with the new requirement of including a one-click unsubscribe link in every email has never been easier with us. We've got you covered by automatically inserting a one-click unsubscribe link into the header of each email you see except for 1:1 emails.

To clarify, when we mention the "header" here, we're referring to the behind-the-scenes information in your email, which includes sender details and message authentication. We're enhancing the one-click list-unsubscribe feature in the code for every message. While the appearance of the one-click unsubscribe link may vary across different email platforms, we've provided a visual example from Gmail below for reference.

**Example of what one-click unsubscribe looks like to Gmail users**

![](<https://assets2.modalsupport.net/1762964877681-Captura de pantalla 2025-11-12 112750.png>)

**Your sole task?** Before February arrives, simply review all your campaign templates and flow emails swiftly. Confirm that each email contains an unsubscribe link somewhere in the body – commonly, the footer is the ideal location. While it doesn't necessarily have to be a one-click solution, it should be clearly visible and easily accessible for recipients. It's as simple as that!

## 6\. Optimize Email Delivery: Maintain a Spam Rate Below 0.30%

Ensure Recipients Want Your Emails: Just as you wouldn't welcome a stranger into your home without permission, it's equally important not to send emails without consent. Always ensure that recipients genuinely desire to receive emails from you.

Excessive spam complaints, such as 3 out of every 1,000 emails, can lead to significant issues. Your emails might face delays, land in spam folders, or even fail to be delivered altogether. To mitigate these risks, aim to maintain spam complaints at less than 1 out of every 1,000 emails you send.

You can monitor Yahoo spam complaints through Spam Reports. However, please note that we cannot track Gmail spam complaints within your account, as Gmail handles them independently to safeguard user privacy. To monitor Gmail spam complaints effectively, utilize [Google Postmaster Tools](https://www.gmail.com/postmaster/). This tool ensures that your emails reach their intended destinations smoothly, without encountering any obstacles.

### **FAQs**




**Question:** What happens if I don't set up DMARC email authentication?
**Answer:** If you don't configure DMARC, your emails may be more susceptible to being flagged as spam or blocked by mailbox providers like Google and Yahoo. This can lead to reduced deliverability and potential security risks for your domain.




**Question:** How do I ensure my emails comply with the new "from" address requirements?
**Answer:** Make sure that the domain in your "from" address matches the root domain of your branded sending domain. For example, if your branded domain is "lc.msgsndr.com," your "from" address should be something like "hello@msgsndr.com."




**Question:** Why is it important to include an unsubscribe link in my emails?
**Answer:** Including an unsubscribe link is crucial for maintaining compliance with email marketing regulations and respecting your recipients' preferences. It also helps prevent your emails from being marked as spam, which can harm your sender reputation.




**Question:** What should I do if my spam complaint rate exceeds 0.30%?
**Answer:** If your spam complaint rate is above 0.30%, you should review your email list for engaged recipients, ensure you have proper consent, and possibly re-evaluate your email content to reduce complaints. Consistently monitor your spam rates using tools like Google Postmaster.




**Question:** How can I gradually implement a stricter DMARC policy?
**Answer:** Start with a "none" policy for DMARC and gradually move towards a stricter policy, such as "quarantine" or "reject." This allows you to monitor the impact and ensure smooth email delivery while tightening security measures.


**Question:How long should I wait to warm up my sending infrastructure after setting up a branded sending sub-domain?
**Answer:** After activating your branded sending sub-domain, it’s recommended to gradually warm up your sending infrastructure over a 2-4 week period. This gradual process helps to build a strong sender reputation and ensures better deliverability for your emails when engaging with Google and Yahoo recipients.




**Question:** Why should I include an unsubscribe link in my emails?
**Answer:** An unsubscribe link ensures compliance with email marketing regulations, respects recipient preferences, and reduces the risk of emails being marked as spam. It improves user experience and protects your sender reputation.




**Question:** Do I need to manually set up the one-click unsubscribe link in the email header?

**Answer:** No, you do not need to set it up manually. The system automatically inserts a one-click unsubscribe link into the header of every email (except for 1:1 emails) to comply with the new requirements. Your only responsibility is to ensure there is also a visible unsubscribe link within the body of your email, such as in the footer.




**Question:** What is the difference between the "Unsubscribe Link" in my footer and the "One-Click" one in the header?

**Answer:** The footer link is for the **human reader**. The "One-Click" header link is for the **Email Provider** (Gmail/Yahoo). It allows them to place a prominent "Unsubscribe" button right next to your "From" name at the top of the email app. Both are now required to ensure a high-quality user experience and to prevent people from hitting the "Report Spam" button instead.




**Question:** What is considered an "excessive" spam complaint rate?

**Answer:** A rate of **0.30%** (or 3 out of every 1,000 emails) is considered the threshold for significant delivery issues. To maintain a healthy reputation, you should aim for a rate below **0.10%** (less than 1 out of every 1,000 emails).