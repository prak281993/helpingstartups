const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
const cors = require("cors")({ origin: true });
admin.initializeApp();

var transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "beac3d163cd2a8",
    pass: "07c4ec384dbae2",
  },
});

exports.emailSender = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    const { fullname, sender, contactNumber, queryMessage, subject } = req.body;
    const mailOptions = {
      from: sender,
      to: "prakhartew@gmail.com",
      subject: subject,
      html: `
        <h1>Test mail</h1>
        <table>
            <tr>
                <td>Fullname</td>
                <td>${fullname}</td>
            </tr>
            <tr>
                <td>Contact Number</td>
                <td>${contactNumber}</td>
            </tr>
            <tr>
                <td>Query Message</td>
                <td>${queryMessage}</td>
            </tr>
        </table>
        `,
    };
    return transport.sendMail(mailOptions, (err, info) => {
      if (err) {
        return res.send(err.toString());
      }
      return res.send("Email sent successfully");
    });
  });
});
