require("dotenv").config();
const nodemailer = require("nodemailer");
const mg = require("nodemailer-mailgun-transport");

const auth = {
  auth: {
    api_key: process.env.MAILGUN_APIKEY,
    domain: "arthurhwang.dev"
  }
};

const nodemailerMailgun = nodemailer.createTransport(mg(auth));

export default function handle(req: any, res: any) {
  nodemailerMailgun.sendMail(
    {
      from: "mail@arthurhwang.dev",
      to: [
        "ahwang55@gmail.com",
        "kancerstick@gmail.com",
        "arthur.hwang55@gmail.com"
      ],
      subject: "New Form Submission",
      html: `<b>From: ${req.body.firstName} ${req.body.lastName}</b>
               <br />    
               <b>Email: ${req.body.email}</b>
               <br />
               <br />
               <b>Message: ${req.body.message}</b>`
    },
    function(err: any, info: any) {
      if (err) {
        res.status(500).json({ message: "Failed to send message, try again." });
        console.log("Error: " + err);
      } else {
        res.status(200).json({ message: "Message sent, thank you." });
        console.log("Response: " + info);
      }
    }
  );
}
