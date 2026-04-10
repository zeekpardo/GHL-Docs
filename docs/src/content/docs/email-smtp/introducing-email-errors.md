---
title: "Introducing Email Errors"
description: "Introducing Email Errors"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/vBoRg5rYhUXbeYnZwxXA"
sourceId: "vBoRg5rYhUXbeYnZwxXA"
category: "Email & SMTP"
---

**Introducing Email Errors**

In this article, you will learn about the email errors you may get using Mailgun and G Suite and what you can do to fix this.

Sometimes, issues may happen that prevent your email from being sent. When this happens, you will see an error icon next to that email. To gain more information about why the email was unsuccessful, click on the red triangle icon to see know more details. 

### Error # 1: The domain is not allowed to send.

**The domain is unverified and requires DNS configuration. Log in to your control panel to view the required DNS records.**

**Solution:**

-   Log in to Mailgun - [**_https://login.mailgun.com/login/_**](https://login.mailgun.com/login/)
-   Expand the Sending tab
-   Click the last menu item, Domain Settings
-   Make sure you select the correct domain/subdomain for the location on top
-   Click DNS records on the top middle
-   Click Verify DNS settings and see if all 5 DNS records have a green checkmark.

![](https://assets2.modalsupport.net/1764181568965-1.png)

Sometimes it might show if they have all green check marks, but it might not be the case, you will need to click the Verify DNS Settings button again to refresh the record. 

### Error #2: The domain is not allowed to send: Account Terminated. 

**Solution:** Reach out to us when this happens. We will reach out to the proper team to find out why this happened

![](https://assets2.modalsupport.net/1764181587225-2.png)

### Error #3: Too old. 

**Solution:** To find out why you are getting that error,  you will need to contact Mailgun support to check further.

![](https://assets2.modalsupport.net/1764181604185-3.png)

### Error #4: Mailgun Send Verification Error 

Error examples: 

-   550 Verification failed for <bounce+c72392.3559d@yoursendingdomain.com>\\nUnrouteable address\\nSender verify failed
-   The domain of the sender address bounce+c72392.3559d@yoursendingdomain.com does not exist
-   Sender address rejected: User unknown in virtual mailbox table
-   Could not resolve sender domain
-   Your domain has no DNS/MX entries
-   Requested action not taken: mailbox unavailable invalid DNS MX or A/AAAA resource record.

**Solution:** 

**If you are using a subdomain,** we highly recommend pointing your MX records for the domain to Mailgun. This helps prevent Sender Verification Errors.

-   Set the MX records for the subdomain to Mailgun values to fix the error. These are:
    -   Value: mxa.mailgun.org, Priority: 10
    -   Value: mxb.mailgun.org, Priority: 10

Wait 24-48 hours for the records to propagate fully, and the error should disappear.

**Note:** If you still see the error, try adjusting the domain in the From field of the message to match the sending domain.

**If you are using a root domain,** and you already have your Email Service Provider's (ESP's) MX records in place, the best solution is to add a subdomain for your Mailgun sending. The error should be resolved once you've added the subdomain and configured Mailgun's MX records.

**Notes:** 

-   If your root domain doesn't have or needs MX records pointing to a hosted mailbox provider, you can add the root domain to your Mailgun account, verify the required TXT AND MX records, and send them through the root domain.
-   Only point your MX records for a domain to one source to avoid email misdirection or loss.

**If the error persists after trying the above steps, consider these alternatives:**

-   Turn off sender address verification (on the server side with your email provider).
-   Create a "catch-all" within the configuration of your email provider. This ensures that Sender Address Verification will pass when the recipient server checks the sender information for incoming emails.

### Error #5: Too Many Requests. 

This means that too many email requests were sent simultaneously. 

**Solution:** Reach out to us and will fix this for you. 

### Error #5: “code”:“EENVELOPE”,“response”:“421 4.3.0 Temporary System Problem. Try again later (10). o11-20020a056e02092b00b0031559b0cb61sm1590122ilt.8 - gsmtp”,“responseCode”:421,“command”:“DATA

This happens due to a Temporary System Problem when using Google Workspace. 

**Solution:** Send your emails in drip mode. 

**FAQs**




**Question:** Why is my domain not allowed to send emails through Mailgun?
**Answer:** This error typically occurs when your domain is unverified or not properly configured with the required DNS settings. To resolve this, log into your Mailgun account, navigate to Domain Settings under the Sending tab, and ensure that all DNS records are verified with green checkmarks. If the records appear correct but the error persists, click the 'Verify DNS Settings' button again to refresh and verify the records.




**Question:** What should I do if my Mailgun account shows “Account Terminated”?
**Answer:** If your Mailgun account is terminated and you see the error "The domain is not allowed to send: Account Terminated," please reach out to us directly. We will contact the appropriate team to investigate and address the reason behind this termination.




**Question:** How do I fix Mailgun Send Verification Errors like "Sender verify failed"?
**Answer:** To fix Mailgun Send Verification Errors, ensure that your subdomain’s MX records are set to Mailgun’s values (mxa.mailgun.org and mxb.mailgun.org, both with priority 10). Wait 24-48 hours for the changes to propagate. If the issue persists, consider matching the domain in the From field of the email with the sending domain, or setting up a subdomain for Mailgun if you're using a root domain with existing MX records.




**Question:** What does the error "Too Many Requests" mean and how can I resolve it?
**Answer:** The "Too Many Requests" error indicates that your account has sent too many email requests simultaneously, exceeding the allowed limit. To resolve this, please contact us so we can adjust the settings on the backend to handle your request volume appropriately.




**Question:** How can I resolve the error “421 4.3.0 Temporary System Problem” when using Google Workspace?
**Answer:** This error suggests a temporary system issue with Google Workspace. To mitigate this, send your emails in drip mode, which spaces out the sending times to prevent overwhelming the system. If the problem persists, try sending emails at a slower pace or contact support for further assistance.  




**Question:** What does the "Too old" error mean?
**Answer:** To figure out why you're getting that error, you'll need to reach out to Mailgun support for further assistance.  




**Question:** What should I do if my DNS records show green checkmarks but the domain still shows as unverified?

**Answer:** Sometimes the dashboard may show green checkmarks even if the records aren't fully synchronized. You should click the "Verify DNS Settings" button again to refresh the records and ensure the status is accurate.




**Question:** I see a red triangle icon next to my email. Will the system try to send it again automatically?

**Answer:** Generally, no. A red triangle indicates a "Permanent" or "Hard" failure. Once you have fixed the DNS or account issue, you will need to manually resend that email or restart the workflow for that specific contact.




**Question:** How long does "DNS Propagation" actually take?
**Answer:** While many providers update in minutes, it can take up to **24–48 hours** for global servers to recognize your new DNS settings. If you’ve just added your records and are still seeing Error #1 or #4, wait a few hours before attempting a large send.




**Question:** What is the difference between an MX record and a TXT record for Mailgun?

**Answer:** TXT records (SPF and DKIM) are used to "sign" your emails to prove they are authorized by you, which prevents spam. MX records are used to "receive" or "verify" the return path of the email. Both are required by Mailgun to achieve a "Verified" status.