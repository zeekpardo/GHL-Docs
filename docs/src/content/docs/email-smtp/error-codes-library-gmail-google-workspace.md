---
title: "Error Codes Library - Gmail/Google Workspace"
description: "Error Codes Library - Gmail/Google Workspace"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/DwkcAN7pXpTZW6ZW3O4T"
sourceId: "DwkcAN7pXpTZW6ZW3O4T"
category: "Email & SMTP"
---

### This article includes a list of the possible errors you could encounter on Gmail/Google Workspace.**Gmail / Google Workspace:**

**Error Code**  

**Meaning**  

**Troubleshooting**  

**Glossary**  

421, "4.3.0"  

Temporary System Problem. Try again later  

Retry sending the message later  

SMTP: Simple Mail Transfer Protocol, a protocol for sending e-mail messages  

421, "4.4.5"  

The server is busy; try again later  

Retry sending the message later  

\-  

421, "4.7.0"  

IP not in whitelist for RCPT domain, closing connection  

Check if your IP address is allowed to send emails to the receiver  

RCPT: SMTP command to specify the recipient of the message  

421, "4.7.0"  

Our system has detected an unusual rate of unsolicited mail originating from your IP address.  

Review your sent emails for any potential unsolicited mail.  

\-  

421, "4.7.0"  

Temporary System Problem. Try again later  

Retry sending the message later  

\-  

421, "4.7.0"  

TLS required for RCPT domain, closing connection  

Make sure your system supports TLS (Transport Layer Security)  

TLS: Protocol that provides communications security over a computer network  

421, "4.7.0"  

Try again later, closing the connection  

Retry sending the message later  

DoS: Denial of Service, a cyber-attack that makes a machine or network resource unavailable  

450, "4.2.1"  

The user you are trying to contact is receiving mail too quickly  

Resend your message at a later time  

\-  

450, "4.2.1"  

The user you are trying to contact is receiving mail at a rate that prevents additional messages from being delivered.  

Resend your message at a later time.  

\-  

450, "4.2.1"  

Peak SMTP relay limit exceeded for customer  

Try reducing the number of sent emails  

SMTP relay: Process of transferring an email from one mail server to another  

451, "4.3.0"  

The mailMail server temporarily rejected the message  

Retry sending the message later  

\-  

451, "4.3.0"  

Multiple destination domains per transaction is unsupported  

Send your message to a single domain at a time  

Domain: Part of the network address that represents a specific entity (like a company) on the internet  

451, "4.4.2"  

Timeout - closing connection  

Retry sending the message later  

\-  

451, "4.5.0"  

SMTP protocol violation  

Ensure that your system is correctly following the SMTP protocol  

SMTP: Simple Mail Transfer Protocol, a protocol for sending e-mail messages  

452, "4.2.2"  

The email account that you tried to reach is over quota  

Ask the recipient to clear their inbox  

Over quota: When a user has filled their storage limit  

452, "4.5.3"  

Domain policy size per transaction exceeded  

Try sending to the recipient in a separate transaction  

\-  

452, "4.5.3"  

Your message has too many recipients  

Reduce the number of recipients for your message  

\-  

454, "4.5.0"  

SMTP protocol violation, no commands allowed to pipeline after STARTTLS.  

Check your SMTP relay settings and try again.  

STARTTLS: A way to take an existing insecure connection and upgrade it to a secure connection using SSL/TLS.  

454, "4.7.0"  

Cannot authenticate due to a temporary system problem.  

Try again later. If the problem persists, contact your email provider.  

Authenticate: To verify the identity of a user, device, or system.  

501, "5.5.2"  

Cannot decode the response.  

This can be a server-side issue. Try again later or contact your service provider.  

Decode: To convert from an encoded or encrypted form to plain text.  

501, "5.5.4"  

HELO/EHLO argument is invalid.  

Check your SMTP server configuration for errors.  

HELO/EHLO: SMTP commands sent by an email server to identify itself when connecting to another email server.  

502, "5.5.1"  

Too many unrecognized commands, goodbye.  

Check your SMTP commands for any mistakes.  

SMTP Commands: Instructions that an email client communicates to the mail server to send an email.  

502, "5.5.1"  

Unimplemented command.  

Ensure that your email client is using commands recognized by the SMTP server.  

Unimplemented: Not yet put into effect.  

503, "5.5.1"  

"EHLO/HELO first.  

Your email client may be out of order. Ensure it starts with an EHLO or HELO command.  

EHLO/HELO: Commands used by SMTP to initiate the connection.  

503, "5.5.1"  

MAIL first.  

The MAIL command needs to be the first command in your SMTP conversation.  

MAIL: An SMTP command is used to initiate mail transfer.  

503, "5.5.1"  

RCPT first.  

The RCPT command needs to be the first command in your SMTP conversation.  

RCPT: An SMTP command is used to identify the email's recipient.  

503, "5.7.0"  

No identity changes are permitted.  

Check your SMTP configuration or contact your service provider.  

Identity: The unique identifier (often a username or email address) associated with a specific user.  

504, "5.7.4"  

Unrecognized Authentication Type  

Check your SMTP settings and ensure you're using a supported authentication type.  

Authentication Type: The method used to verify a user's identity, such as password or OAuth.  

530, "5.5.1"  

Authentication Required  

Check that you're properly authenticated with your SMTP credentials.  

Authentication: The process of verifying a user's identity.  

530, "5.7.0"  

Must issue a STARTTLS command first  

Ensure that your email client initiates the SMTP connection with a STARTTLS command.  

STARTTLS: A way to take an existing insecure connection and upgrade it to a secure connection using SSL/TLS.  

535, "5.5.4"  

Optional Argument not permitted for that AUTH mode  

Check your SMTP settings, especially the AUTH command and its arguments.  

AUTH: An SMTP command is used to authenticate the client to the server.  

535, "5.7.1"  

Application-specific password required  

Use an application-specific password if you have 2-Step Verification enabled.  

Application-specific password: A password for applications not supporting logging in using 2-Step Verification.  

535, "5.7.1"  

Please log in with your web browser and then try again  

Log into your account via your web browser, then resend your email.  

\-  

535, "5.7.1"  

Username and Password not accepted  

Ensure that you're entering the correct username and password. If you're using 2-Step Verification, use an application-specific password.  

\-  

550, "5.1.1"  

The email account that you tried to reach does not exist  

Check the recipient's email address for typos or unnecessary spaces.  

\-  

550, "5.2.1"  

The email account that you tried to reach is disabled  

You cannot send an email to a disabled account. Contact the recipient through other means if possible.  

\-  

550, "5.2.1"  

The user you are trying to contact is receiving mail at a rate that prevents additional messages from being delivered  

Try again later.  

\-  

550, "5.4.5"  

Daily sending quota exceeded  

Limit the number of emails you send each day or upgrade your Google Workspace edition if you need to send more mail.  

Quota: A set limit on how much of a particular resource a user or program can use.  

550, "5.4.5"  

Daily SMTP relay limit exceeded for user  

Check your SMTP relay settings or upgrade your Google Workspace edition to send more mail.  

SMTP relay: A service used to send large volumes of email.  

550, "5.7.0"  

Mail relay denied  

The email was not sent because the SMTP relay was denied; contact your service provider.  

Relay: The act of passing email from one server to another.  

550, "5.7.0"  

Mail Sending denied  

Ensure the sender account is active and part of your Google Workspace domain.  

\-  

550, "5.7.1"  

Email quota exceeded  

You'll need to free up storage space or purchase more in order to send additional emails.  

Quota: A set limit on how much of a particular resource a user or program can use.  

550, "5.7.1"  

Invalid credentials for relay  

Check the configuration of your SMTP relay service.  

Credentials: Information that includes identification and proof of identification used to gain access to resources.  

550, "5.7.1"  

Our system has detected an unusual rate of unsolicited mail originating from your IP address.  

If you're not sending spam, examine your network for malware or misconfigured software.  

Unsolicited mail: Email that a user did not ask for (usually refers to spam).  

550, "5.7.1"  

Our system has detected that this message is likely unsolicited mail. To reduce the amount of spam sent to Gmail, this message has been blocked  

Ensure the email complies with Gmail’s Bulk Email Senders Guidelines  

Unsolicited mail: Email that a user did not ask for (usually refers to spam).  

550, "5.7.1"  

The IP you're using to send mail is not authorized to send email directly to our servers  

Use the SMTP relay at your service provider instead  

SMTP relay: A service used to send large volumes of email.  

550, "5.7.1"  

The user or domain that you are sending to (or from) has a policy that prohibits the mail that you sent  

Review the email content and contact the domain administrator for further details.  

Policy: A rule or set of rules governing how systems or organizations operate.  

550, "5.7.1"  

Unauthenticated email is not accepted from this domain  

Check your SMTP settings and ensure the email passes SPF or DKIM authentication  

Unauthenticated email: An email that hasn't passed validation checks to prove it came from the domain it claims to be from.  

550, "5.7.1"  

Daily SMTP relay limit exceeded for customer  

Check your SMTP relay settings or upgrade your Google Workspace edition if you need to send more mail  

SMTP relay: A service used to send large volumes of email.  

550, "5.7.26"  

Unauthenticated email from domain name is not accepted due to domain's DMARC policy.  

Adjust your DMARC records, consider using a service like Google Workspace to send your mail, and contact the administrator of the receiving mail server.  

DMARC: An email validation system that detects and prevents email spoofing.  

550, "5.7.26"  

This message does not have authentication information or fails to pass authentication checks.  

Ensure the email passes SPF or DKIM authentication  

Authentication: The process of verifying the identity of a user, process, or device.  

550, "5.7.26"  

This message fails to pass SPF checks for an SPF record with a hard fail policy.  

Adjust your SPF records and ensure the email passes SPF authentication  

SPF (Sender Policy Framework): An email authentication method designed to detect forging sender addresses during email delivery.  

552, "5.2.2"  

The email account that you tried to reach is over quota  

Ask the recipient to clear some space in their inbox  

Quota: A set limit on how much of a particular resource a user or program can use.  

552, "5.2.3"  

Your message exceeded Google's message size limits  

Reduce the size of the message and try again  

\-  

553, "5.1.2"  

We weren't able to find the recipient domain  

Double-check the recipient's email address for typos or unnecessary spaces  

Domain: The part of an email address that comes after the @ symbol.  

554, "5.6.0"  

The mail message is malformed. Not accepted  

Check the format of your email and try again  

Malformed: Structured incorrectly or in a way that does not conform to the expected format.  

554, "5.6.0"  

Message exceeded 50 hops; this may indicate a mail loop  

Check your SMTP settings to prevent potential mail loops  

Mail Loop: A situation in which an email message is continually bounced back and forth between two or more servers.  

554, "5.7.0"  

This message was blocked because its content presents a potential security issue.  

Ensure the content and attachments of the email comply with Google’s policies.  

\-  

554, "5.7.0"  

IP has been blacklisted due to spam activity  

Contact your service provider and take steps to remove your IP from the blacklist.  

Blacklist: A list of entities blocked or denied access to a certain system or protocol.  

554, "5.7.1"  

The transaction failed because the recipient's mailbox is full  

Ask the recipient to clear some space in their mailbox  

Mailbox: An electronic folder where incoming emails are stored for a user.  

554, "5.7.1"  

The message you're trying to send exceeds the recipient's size limits  

Reduce the size of the message or contact the recipient to increase their size limits  

Size limits: Restrictions on the maximum size of an email message or attachment.  

555, "5.5.2"  

Syntax error  

Check the syntax of the email addresses, commands, or configuration settings.  

Syntax: The set of rules that dictate the structure and format of a language or code.  

555, "5.5.4"  

Optional Argument not permitted for that AUTH mode  

Review your SMTP authentication settings and ensure they are correctly configured  

Authentication: The process of verifying the identity of a user, process, or device.  

555, "5.7.1"  

Authentication required for relay  

Provide valid authentication credentials for the SMTP relay  

Relay: Forwarding email messages from one mail server to another.  

555, "5.7.1"  

Please log in with your web browser and then try again  

Access your Gmail account via a web browser and follow any on-screen prompts to resolve the issue  

Web browser: A software application used to access and view websites.  

555, "5.7.1"  

Username and Password not accepted  

Verify the correctness of your username and password, and ensure they are correctly entered.  

Username: A unique identifier used to access a system or service.  

550, "5.1.1"  

The email account that you tried to reach does not exist  

Double-check the recipient's email address for typos, or contact the recipient to confirm the correct email address  

Typos: Errors or mistakes in the spelling or formatting of text.  

550, "5.2.1"  

The email account that you tried to reach is disabled  

Verify the status of the recipient's email account or contact the recipient to confirm the account status  

Disabled: Inactive or deactivated.  

550, "5.4.5"  

Daily sending quota exceeded  

Reduce the number of outgoing emails or upgrade your Google Workspace edition for higher sending quotas.  

I am sending quota: The maximum number of emails allowed to be sent within a specified time period.  

550, "5.4.5"  

Daily SMTP relay limit exceeded for user  

Check your SMTP relay sending limits or contact your administrator for assistance  

SMTP relay: A service used to send large volumes of email.  

550, "5.7.0"  

Mail relay denied  

Check your SMTP relay settings and ensure they comply with Google's policies.  

Mail relay: Forwarding email messages from one mail server to another.  

550, "5.7.0"  

Mail Sending denied. This error occurs if the sender account is disabled or not registered within your Google Workspace domain.  

Verify the sender's email account status and ensure it is enabled and registered within the Google Workspace domain.  

Domain: A group of computers or devices that share a common set of rules and settings.  

550, "5.7.1"  

Email quota exceeded  

Reduce your mailbox size or upgrade your Google Workspace edition for higher storage quotas.  

Quota: The allocated amount or limit for a particular resource or service.  

550, "5.7.1"  

Invalid credentials for relay  

Verify the correctness of your authentication credentials for the SMTP relay.  

Credentials: Information used to verify one's identity or access a system.  

550, "5.7.1"  

Our system has detected an unusual rate of unsolicited mail originating from your IP address.  

Check your network for malware or misconfigured software to prevent spamming activities.  

Unsolicited mail: Email that is sent without the recipient's explicit consent.  

550, "5.7.1"  

Our system has detected that this message is likely unsolicited mail  

Ensure your email content and attachments comply with Google's spam policies to prevent message blocking  

Spam: Unsolicited or unwanted email, often sent in bulk.  

550, "5.7.1"  

The IP you're using to send mail is not authorized to send emails directly to our servers.  

Use the SMTP relay provided by your service provider to send an email or contact Google support for further assistance  

SMTP: Simple Mail Transfer Protocol, the standard protocol used for email transmission.  

550, "5.7.1"  

The user or domain that you are sending to (or from) has a policy that prohibits the mail that you sent  

Review and comply with the policies of the recipient's user or domain to ensure successful email delivery.  

Policies: Rules or guidelines that govern the behavior or actions within a system or organization.  

550, "5.7.1"  

Unauthenticated email is not accepted from this domain  

Configure your email client or server to authenticate before sending emails  

Authentication: The process of verifying the identity or legitimacy of a user or entity.  

550, "5.7.1"  

Daily SMTP relay limit exceeded for customer  

Review your SMTP relay sending limits or contact your administrator for assistance.  

SMTP relay: A service used to send large volumes of email.  

550, "5.7.26"  

Unauthenticated email from domain name is not accepted due to domain's DMARC policy  

Authenticate your email with the appropriate mechanisms specified by the DMARC policy of the recipient's domain.  

DMARC: Domain-based Message Authentication, Reporting, and Conformance, a security protocol for preventing email spoofing.  

550, "5.7.26"  

This message does not have authentication information or fails to pass authentication checks (SPF or DKIM)  

Ensure your email passes SPF and DKIM authentication checks to improve deliverability.  

SPF: Sender Policy Framework, a protocol that validates the origin of email messages. DKIM: DomainKeys Identified Mail, a method for validating the authenticity of email messages.  

552, "5.2.2"  

The email account that you tried to reach is over quota  

Advise the recipient to free up space in their mailbox by deleting unnecessary emails  

Quota: The allocated storage capacity for an email account.  

552, "5.2.3"  

Your message exceeded Google's message size limits  

Reduce the size of your email message or use alternative methods for sharing large files  

Message size limits: The maximum allowed size for an email message, including attachments.  

553, "5.1.2"  

We weren't able to find the recipient domain  

Verify the correctness of the recipient's email address and check for any typos or formatting errors.  

Domain: The part of an email address after the "@" symbol indicating the recipient's email server.  

554, "5.6.0"  

The mail message is malformed. Not accepted  

Review the structure and content of your email message for any errors or inconsistencies.  

Malformed: Incorrectly structured or formatted.  

554, "5.6.0"  

Message exceeded 50 hops; this may indicate a mail loop  

Investigate and resolve any circular forwarding or routing configurations causing the mail loop  

Mail loop: A situation where an email is continuously forwarded or routed between multiple recipients.  

554, "5.7.0"  

Too Many Unauthenticated commands  

Review your SMTP authentication settings and ensure proper authentication during the SMTP session.  

Unauthenticated commands: SMTP commands are issued without proper authentication.  

555, "5.5.2"  

Syntax error  

Double-check the syntax and format of email addresses, commands, or configuration settings.  

Syntax: The rules and structure that govern the correct arrangement of elements in a language or code.