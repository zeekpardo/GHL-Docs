---
title: "Error Codes Library - Sendgrid"
description: "Error Codes Library - Sendgrid"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/KgWcLyXpizaXiiGcoxY8"
sourceId: "KgWcLyXpizaXiiGcoxY8"
category: "Settings"
---

### This article includes a list of the possible errors you could encounter on Sendgrid.

### **Sendgrid**

Error  

Message  

Explanation  

Troubleshooting  

Glossary  

250  

Queued mail for delivery  

Your mail has been successfully queued! This response indicates that the recipient server has accepted the message.  

\-  

\-  

403  

You are not authorized to send from that email address  

This means the "from" address does not match a verified Sender Identity. Mail cannot be sent until this error is resolved. To learn how to resolve this error, see our Sender Identity requirements.  

Verify the Sender Identity configuration and ensure that the "from" address is correctly set.  

Sender Identity: A verified email address or domain that is authorized to send emails from a specific sender.  

421  

Message from (X.X.X.X) temporarily deferred  

Messages are temporarily deferred because of recipient server policy - often it's because of too many messages or connections in too short of a timeframe. We continue to retry deferred messages for up to 72 hours. Consider temporarily sending fewer messages to a domain that is returning this code because this could further delay your messages currently being tried.  

Reduce the frequency or volume of messages being sent to the recipient domain.  

Deferred: A temporary delay in the delivery of a message.  

450  

too frequent connects from 198.37.147.135, please try again later.  

The message failed because the recipient's mailbox was unavailable, perhaps because it was locked or was not routable at the time. We continue to retry messages for up to 72 hours. Consider temporarily sending fewer messages to a domain that is returning this code because this could further delay your messages currently being tried.  

Wait and allow the recipient's mailbox to become available again.  

Mailbox Unavailable: The recipient's mailbox is not currently accessible or cannot accept incoming messages.  

451  

Temporary local problem - please try later  

The message simply failed, usually due to a far-end server error. We continue to retry messages for up to 72 hours.  

Retry sending the message after some time.  

Temporary Server Error: A temporary issue or error on the recipient server that prevented the successful delivery of the message.  

451  

Authentication failed: Maximum credits exceeded  

There is a credit limit of emails per day enforced in error. Contact support to remove that limit.  

Contact support to resolve the credit limit issue.  

Authentication: The process of verifying the identity of the sender or recipient of an email to ensure secure communication.  

452  

Too many recipients received this hour (throttled)  

The message has been deferred due to insufficient system storage. We continue to retry messages for up to 72 hours.  

Reduce the number of recipients in the message or split the message into multiple smaller messages.  

Throttling: Limiting the number of messages or connections allowed within a specific timeframe to manage system resources and prevent abuse.  

550  

Requested action not taken: mailbox unavailable  

The user鈥檚 mailbox was unavailable. Usually because it could not be found or because of incoming policy reasons. Remove these addresses from your list - it is likely fake, or it was mistyped.  

Verify the recipient's email address and remove any invalid or mistyped addresses from the list.  

Mailbox Unavailable: The recipient's mailbox is not accessible or does not exist.  

550  

You are temporarily blocked from sending emails due to repeated bad requests.  

Too many bad requests, such as bad sender or bad recipient address, have been sent in a short timeframe. A temporary block of a few minutes has been activated to prevent more bad requests until a fix can be implemented.  

Wait for the temporary block to be lifted and ensure that future requests adhere to the correct format and guidelines.  

Bad Requests: Invalid or incorrect requests sent to the recipient server.  

551  

User does not exist.  

The intended mailbox does not exist on this recipient server. Remove these addresses from your list.  

Verify the recipient's email address and remove any addresses that do not exist.  

Invalid Recipient: An email address that does not exist or is not recognized by the recipient server.  

552  

This message is larger than the current system limit or the recipient鈥檚 mailbox is full. Create a shorter message body or remove attachments and try sending it again.  

The recipient's mailbox has exceeded its storage limits. We don't resend messages with this error code because this is usually a sign that this is an abandoned email.  

Reduce the size of the message by removing attachments or shortening the message body.  

Mailbox Full: The recipient's mailbox has reached its storage capacity and cannot accept additional messages.  

553  

Invalid/inactive user.  

The message was refused because the mailbox name is either malformed or does not exist. Remove these addresses from your list.  

Verify the recipient's email address and remove any invalid or inactive addresses from the list.  

Invalid User: An email address that is either formatted incorrectly or does not exist on the recipient server.  

554  

ERROR: Mail refused  

This is a default response that can be caused by a lot of issues. There is often a human-readable portion of this error that gives more detailed information, but if not, remove these addresses from your list.  

Review the specific error message provided, if available, and take appropriate action based on the details. Remove any invalid or problematic addresses from the list.  

Mail Refused: The recipient server refused to accept or deliver the message for various reasons.  

Other  

Delayed Bounce - Unable to Parse Server Reason  

This is what SendGrid displays when the recipient's server returns a blank reason code.  

\-  

\-  

Turning off click tracking  

\-  

To turn off click tracking, add this to your X-SMTPAPI header: {"filters": {"clicktrack": {"settings": {"enable": 0}}}}  

Update the X-SMTPAPI header in your email sending code to disable click tracking.  

Click Tracking: A feature that tracks and records when recipients click on links within an email message.  

Invalid SMTP API header  

\-  

When you try to send an invalid X-SMTPAPI header, you will get an email with details about the invalidations. You may also see errors on your Email Activity page or in your Event Webhook data. If this happens, the email should give you the information you need to begin troubleshooting. We also recommend uploading your JSON into a JSON validator because this is often an invalid JSON issue.  

Review the email received with details about the invalid header and use the information provided to troubleshoot and correct the issue. Ensure that the X-SMTPAPI header is properly formatted and contains valid JSON.  

SMTP API Header: An additional header included in the email to provide instructions and customization options for SendGrid's services.