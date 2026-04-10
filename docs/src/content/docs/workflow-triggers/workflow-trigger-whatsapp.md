---
title: "Workflow Trigger: WhatsApp"
description: "In this article, you'll learn how to use WhatsApp triggers and actions within your CRM system effectively."
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/ABKbL7dxBz7O4jX3jzAx"
sourceId: "ABKbL7dxBz7O4jX3jzAx"
category: "Workflow Triggers"
---

In this article, you'll learn how to use WhatsApp triggers and actions within your CRM system effectively.

#### **WhatsApp Inbound Message Trigger**

Use the' Customer Replied' trigger to set up a trigger for inbound WhatsApp messages. This trigger allows you to configure a filter where the **‘Reply Channel’** is set to WhatsApp. This setup enables you to initiate actions when a customer replies through WhatsApp automatically.



![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdNwNcrcY5nh1Kpt7oARbFmgQIth6RJHNukx_w97u7TvCjEhgAB6ZgbCc5YBIBHtGs86p6-3O2GxgUIIjqzMyJCa41EYFjBphmdaktkvqAgBdnTvpAUeluQrN-y2dUms5WSN-wQwSBYf63nWwcKHC2R6eXo?key=BTlavvh4S9mlOs0aV6XUZg)



Users will also have the ability to configure an Outbound message using the action 'Send WhatsApp Message.' This feature offers two options:

-   **Free Text:** Select 'None - Manual Text' from the dropdown menu to enter a custom text, which will be used to respond to the customer.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXf2StXQzCdkQ8h_LB7abipKmoDpVJ7kkRF_Ve6CDIS8pAsqdBv0rQM1Xg8L0KePq6EnnWkPIObzjEnSWqXJgN6HjUD9rDJAQAT3gXfDSdXPbucSEo_EuHDPQo50NBu5vJ2K55OyFNHrMtEMXIwIst1Knm3T?key=BTlavvh4S9mlOs0aV6XUZg)

-   **Approved Template:** Choose from a list of pre-approved templates, which can then be sent to the customer.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeG_04uZ9d4XvdoUpq_d20oYB2fNjrCfHHwKAUGI-mvm2R-EiRnj8ffcpFOtf0ytM2wlQf7fK4t_NxtZ_Fvq_EkvKHA3EO9ia3vSR2jewvQk7iOv-BWGcUd15_52v0sUcr7NTWn9mzO0IPLbZ0IrQf2rDb_?key=BTlavvh4S9mlOs0aV6XUZg)

**Note:** You can enable the 'WAIT FOR WHATSAPP MESSAGE DELIVERY STATUS' option to hold the contact at this step until the delivery status is returned from Meta. Follow these steps to take action based on the delivery status:

Enable the 'WAIT FOR WHATSAPP MESSAGE DELIVERY STATUS' option in the action.

**Use the delivery status to filter contacts:**

1.  Add an If/Else action.
2.  Use the Contact Details > Valid WhatsApp filter to take appropriate actions based on the delivery status.

**.**You can also review the article: Using WhatsApp Delivery Status in Workflows in the help library to learn more about it.

#### **FAQs**

**Q: How do I set up a trigger for WhatsApp inbound messages?**A: Use the **‘Customer Replied’** trigger and set the **‘Reply Channel’** filter to WhatsApp.

**Q: What are the options for sending outbound WhatsApp messages?**A: You can either enter a custom message using **‘None - Manual Text’** or select from pre-approved templates.

**Q: What does enabling the ‘WAIT FOR WHATSAPP MESSAGE DELIVERY STATUS’ option do?**A: It pauses the workflow until the delivery status of the WhatsApp message is returned from Meta, allowing you to act based on the message's delivery status.

**Q: How can I take actions based on the WhatsApp delivery status?**A: Enable the delivery status option, add an If/Else action, and use the **Contact Details > Valid WhatsApp** filter to define actions based on the delivery status.