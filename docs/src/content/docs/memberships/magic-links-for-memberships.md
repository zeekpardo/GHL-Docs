---
title: "Magic Links for Memberships"
description: "Magic links are a great way to get contacts auto-logged into their membership area and sent to where courses reside. This article will go over magic links and…"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/KkYu7g8UkZ1XEuf2I1OK"
sourceId: "KkYu7g8UkZ1XEuf2I1OK"
category: "Memberships"
---

Magic links are a great way to get contacts auto-logged into their membership area and sent to where courses reside. This article will go over magic links and how to use them.

## Magic Links Location

Navigate to Memberships > Courses > Settings > Site Details to view the domain information related to your memberships.

![](<https://assets2.modalsupport.net/1769186433892-Captura de pantalla 2026-01-23 114025.png>)

![](<https://assets2.modalsupport.net/1769186460992-Captura de pantalla 2026-01-23 114053.png>)

Enter a Title, Subdomain, Support Email, and Support Phone Number. Then, click the save button on the top right and refresh the page so the links update fully.

**_Note:_** _These must be sent through the system to function properly, either in email or SMS, in automation, or in conversations. This is due to the custom values, for example: {{contact. email}}._

**_Note:_** _You could provide the link to the membership area without allowing auto logging in by removing everything from the URL from the “?” symbol and after. This is a great way to get a user to the membership location._

_Example: https://Ultimaterandmembership.example.example.com_

### User Link: This link will automatically log in to someone signed into the Location account. This is specifically for the staff members of the sub-account.

### Learner Link: This link will automatically log in to someone who is a contact in the system. You can share this magic link with the contacts.

**_Please Note:_** _Auto login will only work if the contact/user has been granted access to an offer and will only give them access to the courses they were granted access to._

## Key Features:

Membership Magic Links can be helpful in a variety of scenarios, including:

-   **Password resets:** If a user forgets their login credentials, you can send them a magic link to access their account without resetting their password.

-   **Inviting new members:** You can send a magic link to invite new members to join your membership site, making it easy for them to sign up and access your content.

-   **Email marketing:** You can use Magic links in your email marketing campaigns to give users a quick and easy way to access your membership site and its content.

-   **Promotions and sales:** You can offer special promotions and sales to users by sending them a magic link to access discounted content or products.

-   **Multi-device access:** Magic links can provide users quick access to your membership site from any device, including desktops, laptops, tablets, and smartphones.
-   **User Password Creation:** When a user first logs in through a magic link, they can create their own password, enhancing security and providing a personalized login experience. This eliminates the need for the system to send out passwords and allows users to set and manage their credentials independently.
-   **Password Reset Instructions:** If users forget their password after setting it, they can click on "Forgot Password" to receive a reset link via email. This link expires after two hours, ensuring prompt action is taken to reset passwords securely.

## Using a Magic Link

You can use a magic link as a hyperlink, embed it into a button, a quick text, or anything else you can think of.

![](<https://assets2.modalsupport.net/1769186525050-Captura de pantalla 2026-01-23 114158.png>)

Here are some examples in the template builder:

![](<https://assets2.modalsupport.net/1769186554531-Captura de pantalla 2026-01-23 114224.png>)

### Magic Links for Membership

Magic links simplify the user login process by allowing members to access their accounts with a single click, bypassing the need for passwords. This feature enhances user experience, making it easier for members to log in and access courses, communities, or other content associated with their memberships. Magic links can be sent automatically via email, SMS, or workflows, streamlining the onboarding process for new members and reducing barriers to entry.

**How to Use Magic Links:**

**1- Generate a Magic Link:** Access the membership dashboard and select the user for whom you want to generate a Magic Link. Click on "Generate Magic Link" and choose to send it via email or copy it directly for manual distribution.

![](<https://assets2.modalsupport.net/1769186580172-Captura de pantalla 2026-01-23 114254.png>)

**2- Use in Automation:** To automate the sending of magic links, include them in workflows by using the custom field 'Login URL.' Set up triggers like 'Offer Access Granted' to ensure the correct link is sent to the user.

![](<https://assets2.modalsupport.net/1769186610591-Captura de pantalla 2026-01-23 114323.png>)

**3- Section-Specific Links:** Magic links can also be generated for specific sections, such as courses, affiliates, or communities, directing users to the exact area they need to access. You will need to navigate to Memberships > Client Portal > Dashboard. After this, click on ‘Generate Magic Link’.

![](<https://assets2.modalsupport.net/1769186633252-Captura de pantalla 2026-01-23 114347.png>)

![](<https://assets2.modalsupport.net/1769186654337-Captura de pantalla 2026-01-23 114407.png>)

**Special Requirements and Limitations:**

-   Magic links are user-specific and should only be generated for registered contacts within the membership platform.
-   Links are time-sensitive and may have expiration periods to enhance security.
-   Ensure that users’ emails are correctly configured to receive these links, and verify that the system recognizes the user’s association with the membership content.

### Pro Tips for Using Magic Links Effectively

1.  **Use Magic Links for Streamlined Onboarding**Magic links are perfect for simplifying the onboarding process. Instead of requiring new members to remember a password, send them a magic link upon registration that logs them in automatically. This frictionless experience can lead to higher engagement and a smoother start for new users.
2.  **Leverage Magic Links in Email Marketing Campaigns**Magic links are great for email marketing, allowing you to send personalized, one-click access links to specific membership content. By including these links in your campaigns, you provide a seamless experience for users to engage with your content, whether it's a course, special promotion, or a new feature.
3.  **Customize Magic Links for Specific Content**Tailor magic links to direct users to specific areas within your membership site, such as a particular course, community area, or promotional content. This personalized touch ensures users are only guided to the content relevant to them, improving their overall experience.
4.  **Ensure Magic Links are Delivered Securely**Magic links should only be sent through the system (email, SMS, automation) to ensure they work correctly. By using custom values (e.g., {{contact.email}}), you ensure the link is unique and user-specific, enhancing both security and user experience. Always verify that email delivery settings are properly configured to avoid delivery issues.
5.  **Monitor Expiration for Added Security**Set expiration periods for your magic links to enhance security. If a magic link is not used within the specified timeframe, it becomes invalid. This helps prevent unauthorized access and encourages users to act promptly when accessing content or resetting passwords.

### FAQs




**Question:** What are magic links, and how do they work for membership access?
**Answer:Magic links are unique, one-click login URLs that allow users to access their membership accounts without needing to enter a password. When a user clicks on the magic link sent to their email or SMS, they are automatically logged into the membership platform.




**Question:** How can I send magic links through automation workflows?
**Answer:** To send magic links through automation, use the 'Login URL' custom field within your workflows. Set up triggers like 'Offer Access Granted' to automate the process of sending the correct link to each user, allowing them seamless access to their content.




**Question:** Can magic links be used for specific sections within the membership platform?
**Answer:** Yes, magic links can be tailored to direct users to specific sections, such as courses, affiliates, or communities. This ensures users have a streamlined experience by guiding them directly to the relevant content.




**Question:** Are magic links secure, and do they expire?
**Answer:** Magic links are secure and often have expiration times to enhance security. They are user-specific and should only be shared directly with the intended recipient. Always ensure the link is generated from a trusted and secure source.




**Question:** What should I do if a user reports not receiving their magic link?
**Answer:** If a user hasn’t received their magic link, first verify that their email address is correct and check the spam/junk folder. You can also resend the link or manually generate it from the membership dashboard. If issues persist, review the email delivery settings and ensure no restrictions or filters are blocking the emails.




**Question:** What happens if a magic link expires?
**Answer:** Expired magic links become invalid, ensuring security and prompting users to act promptly when accessing content or resetting passwords.  




**Question:** What is the difference between a "User Link" and a "Learner Link"?

**Answer:** The **User Link** is designed for staff members of the sub-account to log in automatically. The **Learner Link** is specifically for your contacts (customers) to grant them access to their courses.