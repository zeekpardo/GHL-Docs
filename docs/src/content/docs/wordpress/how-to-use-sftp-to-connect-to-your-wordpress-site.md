---
title: "How to Use SFTP to Connect to Your WordPress Site"
description: "How to Use SFTP to Connect to Your WordPress Site"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/2tYuRqcT4tgtbaImkXl1"
sourceId: "2tYuRqcT4tgtbaImkXl1"
category: "WordPress"
---

**How to Use SFTP to Connect to Your WordPress Site**

Secure File Transfer Protocol (SFTP) is a secure FTP method to transfer files to and from your site. This guide will show you how to use SFTP to connect to your WordPress Site.

### What is SFTP

**SFTP**, or **Secure File Transfer Protocol**, is a method for securely accessing and transferring files and folders between a local computer and a remote server. Developed as an extension of the SSH (Secure SHell) protocol, SFTP ensures that all data exchanged between the systems is encrypted, maintaining elevated levels of security and confidentiality. This protocol safeguards your data during transmission, making it a reliable choice for secure file transfers.


**How to Use:**  
1\. Go to **Sites -> WordPress -> Advanced Settings -> FTP Access**

![](https://assets2.modalsupport.net/1764863566574-1.png)

2\. Click on **Add FTP User** and input the credentials.

![](https://assets2.modalsupport.net/1764863619874-2.png)

3\. The Host URL, Port number, Username, and Password can be used to log in to a client program and access the WordPress files. Make sure to keep these credentials safe. The UserName and Password are unique for each user, and you can even reset them.

![](https://assets2.modalsupport.net/1764863795211-3.png)

There are many free and premium ones to choose from. We recommend one of the following:

-   [FileZilla](https://filezilla-project.org/) (Free – macOS or Windows)
-   [WinSCP](https://winscp.net/eng/index.php) (Free – Windows)
-   [FlashFXP](https://www.flashfxp.com/) (Premium – Windows)
-   [Cyberduck](https://cyberduck.io/) (Free – macOS or Windows)
-   [Transmit](https://panic.com/transmit/) (Premium – macOS

**FAQs**




**Question:** What is SFTP, and how does it work?Answer**: SFTP, or Secure File Transfer Protocol, is a secure method for transferring files between a local computer and a remote server. It uses encryption to ensure the confidentiality and security of the data being transferred.  



**Question:** How do I set up SFTP to access my WordPress site?Answer**: Go to Sites -> WordPress -> Advanced Settings -> FTP Access, click "Add FTP User," and input your credentials. Use the provided Host URL, Port, Username, and Password to log into an FTP client program.




**Question:** Can I reset my SFTP credentials?Answer**: Yes, you can reset your SFTP username and password in the "FTP Access" section of the WordPress settings. Make sure to keep your credentials safe.  



**Question:** Which FTP clients are compatible with SFTP?Answer**: Recommended SFTP clients include [FileZilla](https://filezilla-project.org/) (Free for macOS/Windows), [WinSCP](https://winscp.net/eng/index.php) (Free for Windows), [FlashFXP](https://www.flashfxp.com/) (Premium for Windows), [Cyberduck](https://cyberduck.io/) (Free for macOS/Windows), and [Transmit](https://panic.com/transmit/) (Premium for macOS).  



**Question:** What should I do if I encounter an "Access Denied" error when connecting via SFTP?
**Answer:** If you encounter an "Access Denied" error, verify your username, password, and host URL. Ensure your FTP user has the correct permissions. Reset your credentials or contact your hosting provider if the issue persists.  



**Question:** How do I keep SFTP access safe?

**Answer:Use strong passwords, avoid sharing credentials openly, reset them regularly if access roles change, and store them in a secure location.  




**Question:** Are SFTP credentials shared among all users?

**Answer:** No. The username and password are unique for each user created. This allows you to manage access individually rather than using a single set of shared credentials.




**Question:** Is there a limit to the size of the files I can upload via SFTP?

**Answer:** Unlike the WordPress Media Library, which is limited by your PHP settings, SFTP generally allows for much larger uploads. This makes it the best way to upload large plugin folders, heavy themes, or large batches of media files.




**Question:** Is SFTP more secure than standard FTP?

**Answer:** Yes. SFTP was developed as an extension of the SSH (Secure Shell) protocol. It ensures that all data, including your login credentials and the files themselves, is encrypted during the transfer to maintain high levels of confidentiality.