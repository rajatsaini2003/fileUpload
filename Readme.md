# File Upload Backend Application

This Node.js backend application allows users to upload files to Cloudinary and sends an email notification to the uploader using Nodemailer, confirming the successful upload.

## Features

- Upload files to Cloudinary
- Sends email notification to the uploader via Nodemailer
- Handles file uploads securely and efficiently
- Simple and easy to set up

## Prerequisites

Before running this application, ensure that you have:

- Node.js installed
- A Cloudinary account with API credentials
- A valid email account (SMTP details) for sending emails via Nodemailer

## Environment Variables

Create a `.env` file in the root of your project and add the following variables:

```bash
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

MAIL_HOST= smtp.gmail.com
MAIL_FROM=your_email_address
MAIL_SUBJECT=File Upload Confirmation
```
## Installation And Usage
```
# Clone the repository
git clone https://github.com/rajatsaini2003/file-upload-backend.git
cd file-upload-backend

# Install the dependencies
npm install

# Set up your environment variables in a .env file

# Run the application
npm run dev

```
## Technologies Used
- Node.js: JavaScript runtime
- Express.js: Web framework for Node.js
- Cloudinary: Cloud service for file uploads
- Nodemailer: Module to send emails
- dotenv: For loading environment variables
