---
title: "Microsoft SNDS Integration"
description: "Microsoft SNDS Integration"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/PAUJbAFmXIlRJOBahOTC"
sourceId: "PAUJbAFmXIlRJOBahOTC"
category: "Email & SMTP"
---

**Microsoft SNDS Integration**

The IP Status Monitoring feature, powered by Microsoft SNDS, offers a crucial tool for businesses to track and enhance the deliverability health of their IP addresses. With insights into IP reputation, spam trap hits, and complaint rates, users can proactively maintain their email deliverability and protect their IP reputation.

### **Key Features**

-   **IP Reputation Insights**: Easily view blocked statuses, spam filters, and complaint rates.
-   **Spam Trap Detection**: Detect emails flagged by spam traps to ensure list quality.
-   **Advanced Metrics & Reports**: Analyze RCPT and DATA commands and download CSV reports for comprehensive insights.

### **How This Helps You**

-   **Improves Deliverability**: Quickly resolve IP issues that may affect email deliverability.
-   **Maintains Reputation**: Proactively address spam complaints and block lists.

### **How to Use Microsoft SNDS for IP Monitoring**

#### **Step 1: Access the IP Status Dashboard**

1.  Navigate to **Settings > Email Services > Postmaster Tools > Microsoft SNDS**.
2.  Select the IP address you wish to monitor and access key metrics.

![](https://assets2.modalsupport.net/1764186926582-image1.png)

#### **Step 2: Interpret Key Metrics**

-   **Filter Results**: Measures spam percentage; aim for less than 10%.
-   **Blocked Status**: Indicates whether the IP is currently blocked.
-   **Trap Hits**: Shows messages flagged by spam traps, an indication to clean your email list.
-   **Complaint Rate**: Aim for <0.1% to ensure recipients are satisfied with your emails.
-   **RCPT Commands:** This represents the total number of recipients who received your emails. A higher value indicates heavy email-sending activity. Monitor this to ensure your email volume aligns with your expected campaign size.
-   **DATA Commands:** This metric tracks the total number of data payloads processed. It reflects the email messages transmitted by your IP address. Ensure the volume is consistent with your planned email campaigns to avoid triggering spam filters.
-   **Trap Message Period:** This shows the number of days your emails were detected by spam traps. Ideally, this value should be **0** days. Any non-zero value requires immediate investigation.
-   **Red Days (Filter Result Issues)**
    -   **0 Red Days**: Your email filtering metrics are in good standing, and emails are not being flagged as spam.
    -   **One or More Red Days**: Indicates that some days had higher spam rates or deliverability issues. Investigate the sending patterns for those periods and adjust accordingly.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcFC_ZaW_-T-d07HhHnYWNXKNYRnAAlzmNxFh48ZcvcCrZe5cVLsWJ_V8c3pfyx5jK0W83qWT56x5gHTQDOT_BP-dnkqxvyZkSBViBnuzmqlbOVu-POVSSIRnqjpDi-xycGWtyLfrnVhzVHT-U1bJa9MpHV?key=55V6NJD_BhE_c8MDZHwGz6xx)

#### **Step 3: Download CSV Reports**

Click **Download CSV** to export IP data for in-depth reporting and analysis.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcDxc5f8b0wC8Ym_Qv_WcoR4b17IrQEV0olD9lmfKWk08mF43VXDVLAseG6srbC1YDek71HnxISTRHU04ISGWA_8Y-6Fcc0J3OGe9bSxqH-O3uhTVi2pHjZU3tmDo6duVh0Ob3-QX5MfzsUT69N1rflwr0?key=55V6NJD_BhE_c8MDZHwGz6xx)

### **Important Metrics to Monitor**

-   **Red Days**: Indicates problematic days with high spam rates.
-   **RCPT and DATA Commands**: Tracks the volume of recipients and data payloads for consistency with email campaigns.

### **Handling IP Issues**

-   **Review Metrics**: Check for spam traps and complaints.
-   **Clean Your Mailing List**: Remove inactive or invalid addresses.
-   **Request Delisting**: If blocked, submit a request through Microsoft Outlook Support.

**FAQ**




**Question:** What is Microsoft SNDS?
**Answer:** SNDS is a tool that offers insights into the email activities of your IPs, helping monitor deliverability on Microsoft platforms.




**Question:** How can I check if my IP is blocked?
**Answer:** In the IP Status Dashboard, the **Blocked Status** field indicates if your IP is currently blocked.




**Question:** How do I resolve high spam rates?
**Answer:** Review your list for invalid addresses, improve email content, and consider adjusting sending practices.




**Question:** What should I do if there are trap hits?
**Answer:** Spam traps suggest a need for list cleaning. Remove invalid or suspicious contacts to maintain IP reputation.




**Question:** Can I track activity over time?
**Answer:** Yes, you can monitor historical data through CSV exports and the dashboard's visual metrics.

This Microsoft SNDS integration empowers users with real-time IP monitoring, enhancing deliverability and reputation management.




**Question:** What is the RCPT command used for in email campaigns?

**Answer:** The **RCPT command** tracks the number of recipients in an email campaign to ensure emails are sent to the correct contacts.




**Question:** Why does my dashboard show "No Data" for certain days?

**Answer:** Microsoft only provides data for IPs that have sent a significant volume of mail (typically **100+ emails**) to Microsoft recipients on that day. If your volume is low, Microsoft hides the data to protect the privacy of the recipients.




**Question:** Can I see the exact email addresses of people who complained?

**Answer:** No. For privacy reasons, Microsoft **redacts the sender and recipient addresses** in complaint reports. You will only see the original message headers and selected authentication results to help you identify the campaign responsible.