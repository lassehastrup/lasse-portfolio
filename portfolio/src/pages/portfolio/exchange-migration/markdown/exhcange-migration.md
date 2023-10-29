# Automated Exhchange migration workflow

Developing a workflow to automate the migration of on-premise exchange mailboxes to Exchange Online.

In order to move +3000 users successfully to the cloud by following the same procedure every time, i created a workflow to automate the process from start to finish, using the following technologies:

Powershell, SQL, Azure Automation, Azure Functions, Azure AD, Exchange Online, Exchange On-premise, Azure DevOps, Pipelines, HTML, CSS, Javascript, JSON and XML.

1. DataCollection
2. Data Verification and manipulation
3. Data fine-tuning and uploading to SQL
4. Logic evaluation
5. Pre-Migration
6. Notification workflow
7. Migration
8. Post-Migration
9. C-Level dashboard and reporting

## DataCollection

User data is stored in different places. In order to get a good overview of the users, I created a script that collects all the data from the different sources - sharepoint, FTP, SAP, AD, Exchange, etc.

Data is collected in different format, therefore we have to convert it to a common format, in this case, CSV. Therefore, we needed to be compatible with different formats such as JSON, XML, TXT, etc.

## Data Verification and manipulation

Once we have all the data in a common format, we need to verify that the data is correct and that we have all the data we need. We also need to manipulate the data to make it compatible with the next step.
Also, we need to compare the data within the files to ensure that the data is consistent and that we don't have any duplicates.

## Data fine-tuning and uploading to SQL

Once we have all the data in a common format, we need to fine-tune the data to make it compatible
