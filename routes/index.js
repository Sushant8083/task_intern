var express = require('express');
var router = express.Router();
const nodemailer = require("nodemailer");

var user_mail = "sushantwork295@gmail.com"


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/sendmail', function(req, res) {
    const transporter = nodemailer.createTransport({
        service : 'gmail',
        host: "setup.gmail.com",
        port: 465,
        secure: true,
        auth: {
            // TODO: replace `user` and `pass` values from <https://forwardemail.net>
            user: user_mail,
            pass: "eink rnuh busf sona",
        }
    });
    console.log(req.body.person);
    let mailOptions = {
        from: user_mail, // Sender address
        to: req.body.email, // List of recipients
        subject: 'Greeting Email', // Subject line
        text: 'Thanks for Subscribing ' + req.body.person + '!'// Plain text body
    };

    // Sending the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error occurred:', error.message);
            res.status(500).send('Error occurred while sending email.');
        } else {
            console.log('Message sent successfully!');
            res.status(200).send('Email sent successfully!');
        }
    });
});

module.exports = router;
