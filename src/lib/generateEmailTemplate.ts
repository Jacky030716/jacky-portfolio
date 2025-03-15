interface FormData {
  name: string;
  email: string;
  message: string;
}

export const generateEmailTemplate = (formData: FormData) => {
  const { name, email, message } = formData;

  // Current date formatting
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Form Submission</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          background-color: #f9f9f9;
          margin: 0;
          padding: 0;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: #ffffff;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0,0,0,0.05);
        }
        .header {
          background-color: #1a1f36;
          color: #ffffff;
          padding: 20px;
          border-radius: 8px 8px 0 0;
          text-align: center;
        }
        .content {
          padding: 20px;
          background-color: #ffffff;
        }
        .info-box {
          background-color: #f0f4f8;
          border-left: 4px solid #5e97f6;
          padding: 15px;
          margin-bottom: 20px;
          border-radius: 4px;
        }
        .message-box {
          background-color: #f0f4f8;
          border: 1px solid #ddd;
          border-radius: 4px;
          padding: 15px;
          margin-top: 20px;
        }
        .footer {
          text-align: center;
          padding: 20px;
          font-size: 12px;
          color: #999;
        }
        h1 {
          color: #ffffff;
          margin: 0;
          font-size: 24px;
        }
        h2 {
          color: #1a1f36;
          border-bottom: 1px solid #eee;
          padding-bottom: 10px;
        }
        .label {
          font-weight: bold;
          margin-right: 10px;
          color: #5e97f6;
        }
        .timestamp {
          color: #999;
          font-size: 14px;
          margin-top: 5px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New Contact Form Submission</h1>
        </div>
        <div class="content">
          <div class="timestamp">Received on ${formattedDate}</div>
          
          <h2>Contact Information</h2>
          <div class="info-box">
            <p><span class="label">Name:</span> ${name}</p>
            <p><span class="label">Email:</span> ${email}</p>
          </div>
          
          <h2>Message</h2>
          <div class="message-box">
            <p>${message.replace(/\n/g, "<br>")}</p>
          </div>
          
          <p style="margin-top: 30px;">You can reply directly to this email to respond to ${name}.</p>
        </div>
        <div class="footer">
          <p>This message was sent from your website contact form.</p>
          <p>&copy; ${currentDate.getFullYear()} Your Company Name. All rights reserved.</p>
        </div>
      </div>
    </body>
    </html>
  `;
};
