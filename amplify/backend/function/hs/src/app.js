/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/

var express = require("express");
var bodyParser = require("body-parser");
var awsServerlessExpressMiddleware = require("aws-serverless-express/middleware");
var RazorPay = require("razorpay");
var crypto = require("crypto");
var cors = require("cors");
const nodemailer = require("nodemailer");

// declare a new express app
var app = express();
app.use(bodyParser.json());
app.use(awsServerlessExpressMiddleware.eventContext());

app.use(cors());
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Credentials", "true");
//   res.setHeader("Access-Control-Allow-Headers", "content-type");
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "PUT, POST, GET, DELETE, PATCH, OPTIONS"
//   );
//   next();
// });

/**********************
 * Example get method *
 **********************/

app.get("/hs", function (req, res) {
  // Add your code here
  res.json({ success: "get call succeed!", url: req.url });
});

app.get("/hs/*", function (req, res) {
  // Add your code here
  res.json({ success: "get call succeed!", url: req.url });
});

/****************************
 * Example post method *
 ****************************/

app.post("/hs", function (req, res) {
  // Add your code here
  res.json({ success: "post call succeed!", url: req.url, body: req.body });
});

// app.post("/hs/*", function (req, res) {
//   // Add your code here
//   res.json({ success: "post call succeed!", url: req.url, body: req.body });
// });

app.post("/hs/purchase", async (req, res) => {
  var instance = new RazorPay({
    key_id: process.env.AMPLIFY_KEY_ID,
    key_secret: process.env.AMPLIFY_KEY_SECRET,
  });
  var amount = req.body.amount;
  var options = {
    amount: amount * 100, // amount in the smallest currency unit
    currency: "INR",
    receipt: crypto.randomBytes(16).toString("hex"),
  };
  try {
    const order = await instance.orders.create(options);
    return res.status(201).json({ order: order });
  } catch (err) {
    return res.status(200).json(err);
  }
});

app.post("/hs/purchaseverification", async (req, res) => {
  // do a validation
  const secret = "secret12345678";
  const shasum = crypto.createHmac("sha256", secret);
  shasum.update(JSON.stringify(req.body));
  const digest = shasum.digest("hex");
  const signature = req.headers["x-razorpay-signature"];
  if (digest === signature) {
    res.status(200).json({ status: "ok" });
  } else {
    res.status(200).json({ status: "not ok" });
  }
});

app.post("/hs/send-email", (req, res) => {
  const { fullname, sender, contactNumber, queryMessage, subject } = req.body;
  let mailTransporter = nodemailer.createTransport({
    host: "email-smtp.ap-south-1.amazonaws.com",
    auth: {
      user: process.env.SMTP_MAIL,
      pass: process.env.SMTP_PASS,
    },
  });

  let mailDetails = {
    from: process.env.MAIL_FROM,
    to: process.env.MAIL_RECIEVER,
    subject: subject,
    html: `
    <body style="color:#323232;margin:0;height:100vh;display:flex;align-items:center;justify-content:center;font-family: Helvetica neue, roboto;">
        <table>
            <tr style="font-size: 20px;">
                <td style="padding:20px; font-weight:bold;">Fullname</td>
                <td style="padding:20px;">${fullname}</td>
            </tr>
            <tr style="font-size: 20px;">
                <td style="padding:20px; font-weight:bold;">Contact Number</td>
                <td style="padding:20px;">${contactNumber}</td>
            </tr>
            <tr style="font-size: 20px;">
                <td style="padding:20px; font-weight:bold;">Email</td>
                <td style="padding:20px;">${sender}</td>
            </tr>
            <tr style="font-size: 20px;">
                <td style="padding:20px; font-weight:bold;">Query Message</td>
                <td style="padding:20px;">${queryMessage}</td>
            </tr>
        </table>
        </body>
        `,
  };

  mailTransporter.sendMail(mailDetails, function (err, data) {
    if (err) {
      console.log("Error Occurs", err);
      res.status(200).json(err);
    } else {
      console.log("Email sent successfully");
      res.status(200).json("Email sent successfully");
    }
  });
});

/****************************
 * Example put method *
 ****************************/

app.put("/hs", function (req, res) {
  // Add your code here
  res.json({ success: "put call succeed!", url: req.url, body: req.body });
});

app.put("/hs/*", function (req, res) {
  // Add your code here
  res.json({ success: "put call succeed!", url: req.url, body: req.body });
});

/****************************
 * Example delete method *
 ****************************/

app.delete("/hs", function (req, res) {
  // Add your code here
  res.json({ success: "delete call succeed!", url: req.url });
});

app.delete("/hs/*", function (req, res) {
  // Add your code here
  res.json({ success: "delete call succeed!", url: req.url });
});

process.on("uncaughtException", function (err) {
  console.log(err);
});

app.listen(3000, function () {
  console.log("App started");
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app;
