---
title: "How to Upload a DNS Zone File During Domain Transfer"
description: "To ensure your services remain active, you must preserve your DNS records during a domain transfer. The most accurate method is to upload a DNS Zone File…"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/1dhoUczpNNCQSBgqIjW7"
sourceId: "1dhoUczpNNCQSBgqIjW7"
category: "Domain"
---

To ensure your services remain active, you must preserve your DNS records during a domain transfer. The most accurate method is to upload a DNS Zone File exported from your current registrar. This file includes all A, CNAME, TXT, and MX records necessary to keep your website and email running without interruption.

## How to Export Your Zone File

Different providers have different ways of handing you this file. Below are step-by-step instructions for common registrars like **GoDaddy**, **Cloudflare**, and **IONOS**.

### 1\. Exporting from GoDaddy

[**Click here**](https://www.godaddy.com/en-in/help/export-my-domains-zone-file-records-4166) to learn how to upload GoDaddy zone files.

### 2\. Exporting from Cloudflare

[**Click here**](https://developers.cloudflare.com/dns/manage-dns-records/how-to/import-and-export/) to learn how to upload your Cloudflare zone files.

**3\. Exporting from Namecheap**

Namecheap doesn’t currently support direct zone file downloads. To migrate your settings, you’ll need to either recreate the records manually or contact their support team for assistance. You can find instructions for manual extraction [**here**](https://gist.github.com/ashleykleynhans/69e4fb525d4f32d766313d3f9d22b688).

### 3\. Exporting from IONOS

For IONOS, these are the links that you can use: [Domain Exports](https://www.ionos.com/help/domains/general-information-about-domain-usage/domain-exports/), [Cloud DNS](https://docs.ionos.com/cloud/network-services/cloud-dns), and [API HowTos](https://docs.ionos.com/cloud/network-services/cloud-dns/api-how-tos/export-dns-zone)


**FAQs**




**Question:** Why do I need to preserve my DNS records during a domain transfer?

**Answer:** Preserving your DNS records is essential to ensure your services remain active. Without these records, your website and professional email could experience significant downtime or interruptions during the migration process.




**Question:** What is the most accurate way to transfer my DNS settings?

**Answer:** The most accurate method is to **upload a DNS Zone File** exported from your current registrar. This file acts as a comprehensive map of your settings, including A, CNAME, TXT, and MX records.




**Question:** Which specific records are included in a Zone File?

**Answer:** A standard Zone File contains all the necessary data to keep your online presence running, specifically:

-   **A Records:** Points your domain to your website’s server.
-   **CNAME Records:** Manages aliases for your domain.
-   **MX Records:** Directs your email traffic to the correct provider.
-   **TXT Records:** Often used for security and domain verification.




**Question:** Can I download a Zone File directly from Namecheap?

**Answer:** No. Namecheap does not currently support direct zone file downloads. To migrate your settings from Namecheap, you must either recreate the records manually or contact their support team for assistance.




**Question:** Where can I find instructions for exporting records from IONOS?

**Answer:** The description provides three specific resources for IONOS users: the **Domain Exports** page, **Cloud DNS** documentation, and **API HowTos**.




**Question:** Can I edit the Zone File before uploading it?

**Answer:** It is possible to edit the file using a simple text editor (like Notepad), but it is **not recommended** unless you are a DNS expert. A single misplaced character or dot can cause your entire domain to stop working. It is safer to upload the file as-is and make any necessary changes within our dashboard after the sync.




**Question:** Can I use an API to handle my DNS exports if I am using IONOS?

**Answer:** Yes. For IONOS users, the platform provides specific **API HowTos** along with Domain Export and Cloud DNS documentation to assist with the transfer.




**Question:** Can I revert the changes if something goes wrong after the upload?

**Answer:** If the upload causes an issue, you can manually edit or delete the records in your domain settings. However, it is highly recommended to save a backup copy of your original exported Zone File on your computer so you have a "master record" to refer back to if needed.