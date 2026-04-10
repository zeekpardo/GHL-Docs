---
title: "Error Codes Library - Mailgun"
description: "Question: Why am I receiving a 403 Forbidden error even though my API key is correct?Answer: A 403 Forbidden code often signifies that while your credentials…"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/6gOyYDiJ6VGu3VadmNlu"
sourceId: "6gOyYDiJ6VGu3VadmNlu"
category: "Mailgun"
---

### This article includes a list of the possible errors you could encounter on Mailgun.  
**Mailgun:**

**Code**  

**Error Message**  

**Meaning**  

**Solution**  

**Glossary**  

400  

from parameter is missing  

The sender's email address is not provided  

Include the sender's email in the 'from' parameter  

'from' parameter: Sender's email address  

400  

to parameter is missing  

The receiver's email address is not provided  

Include the receiver's email in the 'to' parameter  

'to' parameter: Receiver's email address  

400  

message parameter is missing  

The email body is not provided  

Include the email body in the 'message' parameter  

'message' parameter: Email body  

400  

‘message’ parameter is not a file  

The 'message' parameter is expected to be a file but isn't  

Provide the message as a file  

'message' parameter: Email body, in this case expected as a file  

400  

Need at least one of ‘text’ or ‘html’ parameters specified  

Neither plain text nor HTML versions of the email are provided  

Include at least one of the 'text' or 'html' parameters  

'text'/'html' parameters: Plain text/HTML versions of the email  

400  

Only one parameters ‘html’ or ‘template’ is allowed  

Both 'html' and 'template' parameters are provided, but only one is allowed  

Provide either the 'html' or 'template' parameter, not both  

'html'/'template' parameters: HTML version of the email / Template for the email  

400  

Send options (parameters starting with o:, h:, or v:) are limited to 16 kB total  

The send options provided exceed the 16 kB limit  

Reduce the size of send options to less than 16 kB  

'o:', 'h:', 'v:' parameters: Send options for the email  

400  

Too many recipients; max is 1000  

The email is addressed to more than 1000 recipients  

Limit the number of recipients to 1000 or less  

Recipients: The individuals or groups receiving the email  

400  

Header name must be pure ASCII: <header-name>  

The header name contains non-ASCII characters  

Use only ASCII characters in the header name  

ASCII: American Standard Code for Information Interchange, a character encoding standard  

400  

<invalid-date> is not an RFC-2822 compliant date  

The provided date is not compliant with RFC-2822  

Ensure the date is formatted according to RFC-2822 standards  

RFC-2822: Internet Message Format specification  

400  

to parameter is not a valid address. please check documentation  

The receiver's email address is invalid  

Check and correct the format of the receiver's email address  

'to' parameter: Receiver's email address  

400  

Invalid request content type. Expecting ‘multipart/form-data’ but got ‘application/x-www-form-urlencoded’  

The content type of the request is not what is expected  

Change the request content type to 'multipart/form-data'  

'multipart/form-data': A type of HTTP request commonly used for file uploads  

400  

malformed multipart/form-data request  

The 'multipart/form-data' request is formatted incorrectly  

Correct the format of the 'multipart/form-data' request  

'multipart/form-data': A type of HTTP request commonly used for file uploads  

400  

unable to parse request: invalid URL escape  

The URL in the request contains invalid escape characters  

Correct the escape characters in the URL  

URL escape characters: Characters used in a URL to represent certain other characters  

400  

unable to parse request: unexpected EOF  

The request ends unexpectedly  

Check the request for missing information or incorrect formatting  

EOF: End of File, in this case referring to the end of the request  

400  

<time> invalid 24 hour time(value of ‘o:time-zone-localize’)  

The time provided is not in a valid 24-hour format  

Ensure the time is in a valid 24-hour format  

'o:time-zone-localize': A parameter for setting the time zone  

400  

<time> is not a valid time to send (value of ‘o:time-zone-localize’)  

The specified time is not a valid time to send the email  

Choose a different, valid time to send the email  

'o:time-zone-localize': A parameter for setting the time zone  

400  

invalid delivery time format  

The format of the delivery time is invalid  

Correct the format of the delivery time  

Delivery time: The time when the email should be delivered  

400  

to parameter is not a valid address. please check documentation  

The receiver's email address is invalid  

Check and correct the format of the receiver's email address  

'to' parameter: Receiver's email address  

400  

from parameter is not a valid address. please check documentation  

The sender's email address is invalid  

Check and correct the format of the sender's email address  

'from' parameter: Sender's email address  

400  

cc parameter is not a valid address. please check documentation  

The CC email address is invalid  

Check and correct the format of the CC email address  

'cc' parameter: Carbon copy email address  

400  

bcc parameter is not a valid address. please check documentation  

The BCC email address is invalid  

Check and correct the format of the BCC email address  

'bcc' parameter: Blind carbon copy email address  

400  

‘recipient-variables’ parameter is not a valid JSON  

The 'recipient-variables' parameter is not correctly formatted as JSON  

Correct the format of the 'recipient-variables' parameter  

'recipient-variables' parameter: Variables specific to each recipient of the email  

400  

Domain example.com is not allowed to send: Sandbox subdomains are for test purposes only. Please add your own domain or add the address to authorized recipients in Account Settings.  

The sender's domain is a sandbox subdomain, which are for testing only  

Use a non-sandbox domain, or add the recipient to the list of authorized recipients  

Sandbox domain: A domain for testing purposes  

400  

Domain example.com is not allowed to send: Free accounts are for test purposes only. Please upgrade or add the address to authorized recipients in Account Settings.  

The sender's account is a free account, which is for testing only  

Upgrade to a paid account, or add the recipient to the list of authorized recipients  

Free account: An account that doesn't require payment  

400  

Domain example.com is not allowed to send: The domain is unverified and requires DNS configuration. Log in to your control panel to view required DNS records.  

The sender's domain is unverified and needs DNS configuration  

Verify the domain and configure the DNS as needed  

DNS: Domain Name System, a system for translating domain names to IP addresses  

400  

Domain example.com is not allowed to send: Please activate your Mailgun account. Check your inbox or log in to your control panel to resend the activation email.  

The sender's Mailgun account is not activated  

Activate the Mailgun account by following the instructions in the activation email  

Mailgun: A service for sending, receiving and tracking emails  

400  

is not a valid secondary dkim domain name  

The provided secondary DKIM domain name is invalid  

Check and correct the format of the secondary DKIM domain name  

DKIM: DomainKeys Identified Mail, a method for verifying the authenticity of email senders  

401  

Forbidden  

The user does not have the necessary permissions for the request  

Ensure the user has the correct permissions for the request  

Forbidden: A status code indicating the user doesn't have necessary permissions  

404  

Domain not found: example.com  

The specified domain does not exist  

Use a valid, existing domain  

Domain: The part of an email address after the @ symbol  

403  

Domain example is not allowed to send large batches yet  

The specified domain is not authorized to send large batches of emails  

Request permission to send large batches, or send smaller batches  

Batch: A group of emails sent as part of a single operation  

403  

Rejected: IP <id-address> can’t be used to send the message  

The IP address of the sender is not allowed to send the message  

Use a different, authorized IP address to send the message  

IP address: A unique identifier for devices on a network  

413  

request size exceeds 52.4MiB limit  

The size of the request exceeds the limit of 52.4MiB  

Reduce the size of the request to under 52.4MiB  

MiB: Mebibyte, a unit of digital storage  

429  

Domain example.com is not allowed to send: request limit exceeded, try again after Mon, 20 Dec 2021 20:33:21 UTC  

The sender's domain has exceeded the limit for sending requests  

Wait until the specified time, then try sending the request again  

Request limit: The maximum number of requests that can be sent in a given time period  

429  

Domain example.com is not allowed to send: bytes limit exceeded, try again after Mon, 20 Dec 2021 20:33:21 UTC  

The sender's domain has exceeded the limit for sending bytes  

Wait until the specified time, then try sending the request again  

Bytes limit: The maximum amount of data that can be sent in a given time period  

429  

Domain example.com is not allowed to send: recipient limit exceeded, try again after Mon, 20 Dec 2021 20:33:21 UTC  

The sender's domain has exceeded the limit for number of recipients  

Wait until the specified time, then try sending the request again  

Recipient limit: The maximum number of recipients that can be addressed in a given time period  

500  

Internal Server Error  

There is a problem with the server  

Wait and try the request again later, or contact the server administrator  

Internal Server Error: A general-purpose status code indicating a problem with the server  

**FAQ’s**




**Question:** Why am I receiving a 403 Forbidden error even though my API key is correct?

**Answer:** A **403 Forbidden** code often signifies that while your credentials are valid, they lack the specific permissions for that action. Check your **API Security** settings in the Mailgun dashboard to ensure your key has the necessary scopes. Additionally, this can happen if you are trying to send via a **region-specific endpoint** (like the EU endpoint) using credentials for the US region.




**Question:** What is the difference between a 429 error for "Request limit exceeded" vs "Bytes limit exceeded"?

**Answer:** Both are rate-limiting errors, but they trigger for different reasons:

-   **Request limit:** You are making too many API calls in a short period.
-   **Bytes limit:** You are attempting to transfer too much data (total volume) within a specific timeframe. In both cases, you should implement **exponential backoff** (waiting longer between each retry) until the reset time specified in the error message has passed.




**Question:** I’m getting a 413 error saying my request exceeds the 52.4MiB limit. How can I fix this?

**Answer:** This happens when your email, including all attachments and headers, is too large. To resolve this:

-   **Compress attachments:** Use ZIP files to reduce size.
-   **Use cloud links:** Instead of attaching large files, upload them to a service like Google Drive or Dropbox and include the link in your email body.
-   **Optimize images:** Resize or compress high-resolution images within the HTML.




**Question:** Why am I blocked from sending large batches with a 403 error?

**Answer:** New domains on Mailgun often have **batch restrictions** to protect sender reputation. If you need to send newsletters to many people at once, you may need to start with smaller groups to "warm up" your domain or request a limit increase through Mailgun support.




**Question:** I included both HTML and a Template ID, but my email failed. Why?

**Answer:** Mailgun only allows one or the other. You must provide either the **'html'** parameter for custom code or the **'template'** parameter for a pre-saved design, but not both in the same request.