const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();

const app = express();

const PORT = process.env.PORT || 3000;

app.post("/", async (req, res) => {
  var transporter = nodemailer.createTransport({
    service: "smtp.163.com",
    service: "gmail",
    auth: {
      user: "13396070228@vip.163.com",
      user: "medea.wangxy@gmail.com",
      password: "xueyan",
    },
  });

  var name = req.body.name;
  var email = req.body.email;
  var message = req.body.message;

  var mailOptions = {
    from: req.body.email,
    to: "medea.wangxy@gmail.com",
    subject: `Message from ${req.body.name} : ${req.body.message}`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      return console.log(error);
    }
    res.status(200).json({ message: req.body.name });
    console.log("Message send:" + info.response);
  });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
