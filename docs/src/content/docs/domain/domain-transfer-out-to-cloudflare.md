---
title: "Domain Transfer-out to Cloudflare"
description: "This article explains the purpose, requirements, and complete process for transferring a domain from one account to another within a DNS and domain management…"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/9HQulTa7yg9q5pRC7duv"
sourceId: "9HQulTa7yg9q5pRC7duv"
category: "Domain"
---

This article explains the purpose, requirements, and complete process for transferring a domain from one account to another within a DNS and domain management service. The goal is to ensure a smooth, interruption-free transfer by preparing the domain correctly, validating records, and completing required approvals. The guidance is written to remain applicable over time and adaptable across different service providers under a white-label approach, such as **.**

Transferring a domain between accounts allows centralized management, ownership restructuring, or operational alignment without changing the domain itself. The process generally includes meeting prerequisites, preparing the destination account, and approving the transfer once initiated.

## Key Features and Benefits

-   **Centralized Management:** Consolidates domain control under one account.
-   **No Downtime When Prepared Correctly:** DNS continuity is maintained if records match.
-   **Flexible Plan Selection:** Choose service levels based on current needs.
-   **Secure Transfer Approval:** Final control remains with the destination account owner.

## Prepare to Transfer

### Step 1: Add the Domain to the Destination Account and Select a Plan

1- Log in to the destination account where the domain will be transferred.

2- Choose the option to add or connect a new domain.

![](https://assets2.modalsupport.net/1766775913075-image11.png)

3- Enter the domain name and continue.  

![](https://assets2.modalsupport.net/1766775946717-image2.png)

4- Select an appropriate service plan (free or paid, depending on requirements).

![](https://assets2.modalsupport.net/1766775976677-image7.png)

**DNS Record Verification**

-   Cross-check your scanned DNS records with your current DNS records. You can find your current DNS records here:

![](https://assets2.modalsupport.net/1766776006895-image4.png)

-   Compare the scanned records with those currently in use.
-   If differences exist, manually add, edit, or remove records so they match exactly.
-   Proceed only after confirming all records are accurate.

![](https://assets2.modalsupport.net/1766776040238-image9.png)

![](https://assets2.modalsupport.net/1766776061305-image6.png)

**Note:** Ensure that proxy or traffic-routing features are turned **off** for all DNS records during this stage.  
There is no need to update nameservers at this point.

![](https://assets2.modalsupport.net/1766776098296-image10.png)

### Step 2: Obtain the Destination Account Identifier

After adding the domain successfully:

1- Locate the account identifier within the account settings or dashboard.

2- This identifier is usually an alphanumeric value found in the account URL or profile section.

3- Share this identifier securely with the support or operations team responsible for initiating the transfer.

![](https://assets2.modalsupport.net/1766776137815-image1.png)

## Transfer Process

Once the preparation steps are complete:

1.  The transfer is initiated from the source side.
2.  Within approximately 24 hours, a transfer request appears in the destination account.
3.  Navigate to domain management or registration settings.

![](https://assets2.modalsupport.net/1766776178505-image8.png)

4\. Locate the pending transfer and approve it.

![](https://assets2.modalsupport.net/1766776229715-image5.png)

After approval, the transfer typically completes within another 24 hours.  
When finished, the domain status updates to **Active** in the destination account.

![](https://assets2.modalsupport.net/1766776261275-image3.png)

## Note: “Invalid Nameservers” Status

After a successful transfer, the domain may temporarily show an “Invalid Nameservers” or similar status. This is usually a propagation delay. Wait a few hours and recheck the status before taking further action.

## Pro Tips

-   Perform the transfer during low-traffic hours to minimize risk perception.
-   Keep a backup of all DNS records before starting.
-   Avoid making DNS changes during the transfer window.
-   Monitor domain status for at least 24 hours after completion to confirm stability.

## FAQ’s




**Question:** Will my website or email stop working during the transfer?
**Answer:** If DNS records are verified and unchanged, services generally continue without interruption.




**Question:** Do I need to change nameservers immediately?
**Answer:** No. Nameserver changes are not required during the preparation phase.




**Question:** How long does the entire transfer process take?
**Answer:** Typically, 24 hours to initiate and another 24 hours after approval, though timing can vary.




**Question:** What should I do if I see an “Invalid Nameservers” status?
**Answer:** Wait a few hours and refresh the status. This usually resolves automatically.




**Question:** Can I transfer multiple domains at once?
**Answer:** Yes, but each domain must meet the prerequisites and be approved individually.




**Question:** What if the Account Identifier I was given is incorrect?

**Answer:** If the identifier is wrong, the transfer request will either go to the wrong account or fail to send. Always double-check the alphanumeric code from the destination account's URL or profile section before starting the process.




**Question:** Should I keep proxy or traffic-routing features enabled during the record verification stage?

**Answer:** No. You should ensure that all proxy or traffic-routing features are turned off for your DNS records while you are verifying and matching them to ensure a smooth transition.