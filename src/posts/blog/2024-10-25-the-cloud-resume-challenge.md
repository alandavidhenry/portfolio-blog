---
layout: layouts/post.njk
title: The Cloud Resume Challenge
featuredImage: images/uploads/cloud-resume-challenge.jpg
date: 2024-10-25T08:39:00.000Z
description: The Cloud Resume Challenge] is a hands-on project designed to help
  you bridge the gap from cloud certification to cloud job. It incorporates many
  of the skills that real cloud and DevOps engineers use in their daily work.
---
# The Cloud Resume Challenge - Azure

[Cloud Resume Challenge](https://cloudresumechallenge.dev/docs/the-challenge/azure/)

## Challenge steps

Here are the steps required to complete the challenge:

### 1. Certification
I have not completed the AZ-900 certification as I am going straight for the [AZ-104 Certified Administrator certification](https://learn.microsoft.com/en-us/credentials/certifications/azure-administrator/?practice-assessment-type=certification). I'm hoping to complete this is November 2024.

### 2. HTML
I have created my resume using HTML.

### 3. CSS
I have not used any CSS frameworks, just plain CSS.

### 4. Static Website
My HTML resume has been deployed online as an Azure Storage static website.

### 5. HTTPS
I have used [Azure Content Delivery Network (CDN)](https://azure.microsoft.com/en-us/products/cdn) to use HTTPS for the Azure Storage URL. The new version of Azure CDN is [Azure Front Door](https://azure.microsoft.com/en-gb/products/frontdoor), which has more features, but Microsoft charge a monthly fee for this so I chose Azure CDN.

### 6. DNS
I have pointed a custom DNS domain name to the Azure CDN endpoint. I purchased the [cloudresumechallenge.site](https://cloudresumechallenge.site) domain name from [Namecheap](https://www.namecheap.com).

### 7. JavaScript
I created a visitor counter using JavaScript. This started off quite simple but then I added error handling and some logging as I was having problems connecting this to the API.

### 8. Database
The visitor counter needs to retrieve and update its count in a database. I used the [NoSQL API of Azure’s CosmosDB](https://learn.microsoft.com/en-us/azure/cosmos-db/nosql) for this. Azure offers a free tier but only one instance per account, so the existing instance needs to be deleted before deploying a new one.

### 9. API
I used an API instead of communicating directly with CosmosDB from the Javascript code. The API accepts requests from the JavaScript in web app and communicates with the database. I used [Azure Functions](https://learn.microsoft.com/en-us/azure/azure-functions) with an HTTP trigger.

### 10.  Python
I used Python to write the function code. Having done some Python courses and worked on Python projects before, this wasn't too difficult. Having said that, I really struggled to connect to the database. I then switched from a Table database to a NoSQL database and connecting became much easier. I find the documentation for Azure difficult to follow as it doe nt seem to flow in a logical order for creating real-world apps.

### 11.  Tests
I have started to write tests for the Python code but need to finish these. I have written tests for JavaScript code before so I understand the principles of testing. I just need to learn the syntax here.

### 12.  Infrastructure as Code
I have configured the Azure resources using infrastructure as code (IaC). I exported the ARM templates directly from the Azure Portal then decompiled them into [Bicep](https://learn.microsoft.com/en-us/azure/azure-resource-manager/bicep/overview?tabs=bicep). I then modified a template I had created on a previous project. This template uses parameters for everything it can, so that only the parameters file needs to be modified to deploy a new version of the project. I will create more IaC using [Terraform](https://www.terraform.io) and then [Pulumi](https://www.pulumi.com) later.

### 13.  Source Control
I created a [GitHub repository](https://github.com/alandavidhenry/cloud-resume-challenge) for all my code for this project.

### 14.  CI/CD (Back end)
I created continuous integration and deployment (CI/CD) pipelines using GitHub Actions so that when I push an update to the Python code, the Python tests get run. If the tests pass, the Python code is automatically deployed to the Azure function. This part was very easy as a GitHub actions template for this purpose already exists on the GitHub webpage. 

### 15.  CI/CD (Front end)
I created continuous integration and deployment (CI/CD) pipelines using GitHub Actions so that when I push an update to the web app code, it is automatically deployed to the Azure function. This part was more difficult than the back end CI/CD pipeline and I still need to fix a problem with connecting to the container.

### 16.  Blog post
I will write a blog on the challenge and post it on [my own website](https://alan-henry.co.uk/). For now, I have posted a copy of this readme.
