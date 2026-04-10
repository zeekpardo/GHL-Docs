---
title: "Security and Compliance Overview"
description: "Security and Compliance Overview"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/63uQXopb2KJ1l5N65aDx"
sourceId: "63uQXopb2KJ1l5N65aDx"
category: "Settings"
---

**Security and Compliance Overview**

In today's digital landscape, ensuring the security and compliance of your business operations is paramount. Whether you're a product company or a CRM provider, safeguarding sensitive data and meeting industry standards is crucial for maintaining customer trust and protection. In this overview, we'll delve into the robust security and compliance measures implemented by our organization, which can be seamlessly integrated into your business framework.

**Security Objectives**

Our security framework is built upon industry best practices, with key objectives aimed at:

**Customer Trust and Protection:** Upholding the privacy and confidentiality of data while delivering exceptional products and services.

**Availability and Continuity of Service:** Ensuring uninterrupted service availability and minimizing risks to service continuity.

**Information and Service Integrity:** Guaranteeing the integrity of customer information, preventing unauthorized alterations.

**Compliance with Standards:** Striving to exceed industry-standard best practices and regulatory requirements.

**Security Controls**

To ensure the security of entrusted data, our organization employs layers of administrative, technical, and physical security controls throughout our operations. The following sections detail a subset of frequently asked questions about these controls.

**Infrastructure Security**

**Cloud Hosting Provider**

We do not host any product systems or data within our physical offices. Instead, we outsource the hosting of our product infrastructure to leading cloud infrastructure providers such as Google Cloud Platform Services and Amazon Web Services (AWS). Our product infrastructure resides in the United States. We rely on Google’s and AWS’s audited security and compliance programs for the efficacy of their physical, environmental, and infrastructure security controls.

Google provides a monthly uptime percentage to customers of at least 99.5%. More information about the controls, processes, and compliance measures implemented by Google can be found on their publicly available Compliance Resource Center.

AWS guarantees between 99.95% and 100% service reliability, ensuring redundancy to all power, network, and HVAC services. The business continuity and disaster recovery plans for the AWS services have been independently validated as part of their SOC 2 Type 2 report and ISO 27001 certification. AWS’s compliance documentation and audit reports are publicly available at the AWS Cloud Compliance Page and the AWS Artifacts Portal.

**Network and Perimeter**

Our product infrastructure enforces multiple layers of filtering and inspection on all connections across our web application, logical firewalls, and security groups. Network-level access control lists are implemented to prevent unauthorized access to our internal product infrastructure and resources. By default, firewalls are configured to deny network connections that are not explicitly authorized. Changes to our network and perimeter systems are controlled by standard change control processes. Firewall rulesets are reviewed periodically to help ensure that only necessary connections are configured.

**Configuration Management**

Automation drives our ability to scale with our customer’s needs, and rigorous configuration management is baked into our day-to-day infrastructure processing. Our product infrastructure is a highly automated environment that expands capacity as needed. All server configurations are embedded in images and configuration files, which are used when new containers are provisioned. Each container includes its hardened configuration, and changes to the configuration and standard images are managed through a controlled change pipeline.

Server instances are tightly controlled from provisioning through de-provisioning, ensuring that deviations from configuration baselines are detected and reverted at a predefined cadence. If a production server deviates or drifts from the baseline configuration, it will be overwritten with the baseline within 30 minutes. Patch management is handled using automated configuration management tools or by removing server instances that are no longer compliant with the expected baseline.

**Logging**

Actions and events that occur within our application are consistently and comprehensively logged. These logs are indexed and stored in a central logging solution hosted in our cloud environment. Security-relevant logs are also retained, indexed, and stored to facilitate investigation and response activities. The retention period of logs depends on the nature of the data logged. Write access to the storage service in which logs are stored is tightly controlled and limited to a small subset of engineers who require access.

**Alerting and Monitoring**

We invest in automated monitoring, alerting, and response capabilities to continuously address potential issues.

Our product infrastructure is instrumented to alert engineers and administrators when anomalies occur. In particular, error rates, abuse scenarios, application attacks, and other anomalies trigger automatic responses or alerts to the appropriate teams for response, investigation, and correction. Many automated triggers are also designed to immediately respond to anomalous situations. For example, traffic throttling, process termination, and similar functions are triggered at predefined thresholds.

**Application Security**

**Web Application Defenses**

All customer content hosted on our platform is protected by firewall and application security measures. Our monitoring tools actively monitor the application layer and can alert on malicious behavior based on behavior type and session rate. The rules used to detect and block malicious traffic are aligned with best practice guidelines documented by the Open Web Application Security Project (OWASP), specifically the OWASP Top 10 and similar recommendations. Protections from Distributed Denial of Service (DDoS) attacks are also incorporated, ensuring continuous availability of our customers’ websites and other parts of our products.

**Development and Release Management**

We optimize our products through a modern continuous delivery approach to software development. New code undergoes regular deployment after code reviews, testing, and merge approval. Static code analysis runs regularly against code repositories to block known misconfigurations from entering the codebase. Approval is controlled by designated repository owners, and once approved, code is automatically submitted to our continuous integration environment where compilation, packaging, and unit testing occur.

Dynamic testing for security vulnerabilities is periodically performed against our applications. Newly developed code is first deployed to a dedicated and separate QA environment for the last stage of testing before being promoted to production. Network-level and project-level segmentation prevents unauthorized access between QA and production environments. All code deployments are automated, and in case of failures, the changes can be reverted. Our deploying team manages notifications regarding the health of their applications, and if a failure occurs, rollback processes are immediately engaged. We utilize extensive software gating and traffic management to control features based on customer preferences (private beta, public beta, full launch).

Our features seamless updates, there is no downtime associated with releases. Major feature changes are communicated through in-app messages.

**Vulnerability Management**

Our team manages a multi-layered approach to vulnerability management, using a variety of industry-recognized tools and threat feeds to ensure comprehensive coverage of our technology stack. Vulnerability scans are configured to scan for vulnerabilities regularly, using adaptive scanning inclusion lists for asset discovery as well as the latest vulnerability detection signatures. We perform annual penetration tests against our applications and infrastructures to identify vulnerabilities that may present security-related risks. Relevant findings are assessed, and mitigations are prioritized accordingly.

**Customer Data Protection**

**Data Classification**

As per our 's Terms of Service, customers are responsible for ensuring they only capture appropriate information to support their marketing, sales, services, content management, and operations processes. Our products should not be used to collect or store sensitive information, such as credit or debit card numbers, financial account information, Social Security numbers, passport numbers, financial, or health information except as otherwise permitted.

**Tenant Separation**

Our provides a multi-tenant SaaS solution where customer data is logically separated using unique IDs to associate data and objects with specific customers. Authorization rules are incorporated into the design architecture and validated continuously. Additionally, we log application authentication and associated changes, application availability, and user access and changes are logged.

**Encryption**

All data is encrypted in transit with TLS version 1.2 or 1.3 and 2,048-bit keys or better. Transport layer security (TLS) is also a default for customers who host their websites on our platform.

We leverage several technologies to ensure that stored data is encrypted at rest. Platform data is stored using AES-256 encryption. User passwords are hashed following industry best practices and are encrypted at rest.

**Key Management**

Encryption keys for both in-transit and at-rest encryption are securely managed by our platform. TLS private keys for in-transit encryption are managed through our content delivery partner. Volume and field-level encryption keys for at-rest encryption are stored in a hardened Key Management System (KMS). Keys are rotated at varying frequencies, depending upon the sensitivity of the data they govern. In general, TLS certificates are renewed annually. is unable to use customer-supplied encryption keys at this time.

**Data Backup and Disaster Recovery**

**System Reliability and Recovery**

We are committed to minimizing system downtime, ensuring robust reliability, and swift recovery. All our product services are built with redundancy, with server infrastructure strategically distributed across multiple distinct availability zones and virtual private cloud networks within our infrastructure providers. Additionally, all web, application, and database components are deployed with a point-in-time recovery capability.

**Backup Strategy**

**System Backups**

Our systems are regularly backed up according to established schedules and frequencies. We maintain seven days’ worth of backups for any database, facilitating easy restoration in case of need. Our backup processes are meticulously monitored for successful execution, with alerts generated in the event of any exceptions. Any failure alerts are promptly escalated, investigated, and resolved. Data is backed up daily to the local region, with monitoring and alerting in place for replication failures, promptly triaged as needed.

**Physical Backup Storage**

As we leverage public cloud services for hosting, backup, and recovery, we do not implement physical infrastructure or storage media within our products. We refrain from using other forms of hard copy media (e.g., paper, tape, etc.) in providing our services to customers.

**Backup Protections**

All backups are protected by default through access control restrictions and write once-read many (WORM) protections on our product infrastructure networks, along with access control lists on the file systems storing the backup files.

**Customer Data Backup Restoration**

Customers do not have direct access to the product infrastructure for initiating failover events. Disaster recovery and resiliency operations are managed by our product engineering teams. However, customers can utilize the recycle bin to directly recover and restore various data elements up to 30 days after deletion. Additionally, changes to web pages, blog posts, or emails can be restored to previous versions using version history. For customers seeking additional data backup options, our platform offers various features for ensuring data redundancy and integrity.

Many features within your portal offer export options, and our library of public APIs enables synchronization of your data with other systems, ensuring comprehensive data backup and management.

**Identity and Access Control**

**Product User Management**

Our white-labeled CRM solution offers granular authorization rules, empowering customers to create and manage users in their portals. They can assign privileges as needed and limit access according to their preferences.

**Product Login Protections**

Users can log in to their accounts using the native login, which enforces a uniform password policy for enhanced security. This policy requires a minimum of 8 characters and a combination of lower and upper case letters, special characters, and numbers. Two-factor authentication is enforced for all users using the built-in login, providing an extra layer of protection. Customers can't change the default password policy, ensuring consistent security standards.

**Employee Access to Customer Data**

**Access to Production Infrastructure**

Access to internal data stores and production infrastructure is tightly controlled using a role-based access control (RBAC) model. Engineering team members have minimal day-to-day access, with persistent administrative access restricted. Direct network connections to infrastructure devices are prohibited, and engineers must authenticate through a bastion host or have an assigned IAM role before accessing server environments.

**Access to Customer Portals**

Customer support and service staff have limited access to customer portals by default, facilitating assistance with CRM usage. Our application uses a Just-in-Time Access (JITA) model to grant employees access to a customer's portal for a limited duration. Each access request is logged, and access is tied to a specific customer portal for a maximum 24-hour period. Risk-based monitoring is employed to detect unusual access activity. Employees accessing portals via JITA are restricted from performing high-risk actions to safeguard customer data.

**Corporate Authentication and Authorization**

Access to our company network requires multi-factor authentication (MFA), following industry best practices for password policies. Password vaults manage administrative account passwords, with access controlled through Role Based Access Control or the JITA process. We have robust support systems in place to automate security management and compliance activities, ensuring appropriate permission grants, timely access revocations, effective change logs, and preservation of compliance evidence. Employee access and permissions to key internal systems are regularly reviewed to maintain security standards.

**Organizational and Corporate Security**

**Background Checks and Onboarding**

Employees undergo third-party background checks before receiving formal employment offers. Reference verification is conducted at the discretion of hiring managers. Upon hire, all employees must read and acknowledge the Employee Handbook and Code of Conduct, which outline their security responsibilities in safeguarding company assets and data.

**Policy Management**

To ensure uniformity in data protection, written policies and procedures are documented and maintained. A core Written Information Security Policy covers various topics such as data handling requirements, privacy considerations, and disciplinary actions for policy violations. Policies undergo annual review and approval.

**Security Awareness Training**

Employees are mandated to complete CyberSafety training upon commencement of employment, with annual refresher training provided thereafter. The training includes phishing awareness components.

**Vendor Management**

Third-party service providers supporting product development and internal operations are vetted for appropriate security and privacy controls as per contractual agreements. A list of sub-processors is maintained within the Data Processing Agreement.

**Endpoint Protection**

Company-issued laptops are centrally managed and configured for full disk encryption. A Mobile Device Management solution is deployed for centralized management and monitoring of mobile devices, including configuration, security policy enforcement, app deployment, and compliance.

**Compliance**

**Sensitive Data Processing and Storing**

Refer to our Terms of Service and Privacy Policy for details on data processing. While customers may pay by credit card, we do not store, process, or collect credit card information. PCI-compliant payment processors handle transactions securely.

**Privacy**

We do not sell personal data to third parties, ensuring data privacy and integrity as per our Privacy Policy.

**Data Retention and Deletion**

Customer data is retained for active customers. Written requests for data deletion are honored as per privacy regulations. Certain data, like logs and metadata, are retained for security, compliance, or statutory requirements.

**Privacy Program Management**

Our Legal Team collaborates with engineering and product development to implement an effective privacy program, detailed in our Privacy Policy and Data Processing Agreement.

**Breach Response**

Customers are notified as required by law in case of data breaches impacting personal data.

**GDPR**

We aim to provide features that enable our customers to easily achieve and maintain their GDPR compliance requirements. While we seek to enable your GDPR compliance efforts, the use of the product alone does not make you GDPR compliant. For example, looking for consent and forgetting customer information are both great ways to be compliant with the regulation. 

### FAQ's




**Question:** What measures are in place to ensure data security in the cloud environment?  
**Answer:** We utilize leading cloud infrastructure providers, such as Google Cloud Platform Services and AWS, which offer robust security measures including physical, environmental, and infrastructure controls. All data is encrypted both in transit and at rest, with stringent access controls to protect customer information.




**Question:** How does your organization handle data backup and disaster recovery?  
**Answer:** Our systems are designed with redundancy and are backed up regularly. We maintain point-in-time recovery capabilities and keep backups for seven days. Data backups are stored securely in our cloud environment, and recovery procedures are managed by our engineering teams.




**Question:** How is customer data protected against unauthorized access?  
**Answer:** Customer data is protected through role-based access control (RBAC), encryption, and other security measures. Access to data is limited to authorized personnel, and all access is logged and monitored. Two-factor authentication is also enforced for additional security.




**Question:** How do you ensure compliance with industry regulations and standards?
**Answer:** We adhere to industry best practices and regulatory requirements by implementing comprehensive security controls and conducting regular reviews and audits. Our compliance efforts are detailed in our Terms of Service, Privacy Policy, and Data Processing Agreement, and are supported by our Legal and Security teams.




**Question:** What steps are taken in the event of a data breach?
**Answer:** In the event of a data breach, we follow a formal response plan, which includes notifying affected customers as required by law. Our breach response protocols are designed to minimize impact and ensure timely communication to stakeholders.


**Question:  Do employees undergo background checks before gaining access to systems?
**Answer:** Yes. All employees undergo **third-party background verification** prior to onboarding, including reference checks where applicable.

They are also required to sign our **Code of Conduct** and **Information Security Policy**, acknowledging their responsibilities in protecting company and customer data.




**Question:** Can customers manage user access within their own portals?
**Answer:** Yes. Our platform allows granular user management, letting customers assign roles, privileges, and access levels as needed.  




**Question:** Does the platform support Multi-Factor Authentication (MFA) for all users?
**Answer:** Yes. For maximum security, we enforce **Two-Factor Authentication (2FA)** for all logins. This requires both a password and a secondary verification code, significantly reducing the risk of unauthorized access even if a password is compromised.




**Question:** What happens if a production server’s configuration is accidentally changed?

**Answer:** The system uses automated configuration management that detects "configuration drift." If a server deviates from the hardened baseline, it is automatically overwritten and reverted to the correct baseline within **30 minutes**.




**Question:** Is my data encrypted when it is "at rest" (sitting on your servers)?

**Answer:** Yes. All platform data is encrypted at rest using **AES-256 encryption**, and user passwords are protected using industry-standard hashing algorithms.