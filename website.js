var nodemailer = require('nodemailer');
var emailInputValue = document.getElementById("email_client").value;
var messageInputValue = document.getElementById("message_client").value;


var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'justabyss09@gmail.com',
        pass: 'madarauchija09'
    }
});

var mailOptions = {
    from: emailInputValue,
    to: 'justabyss09@gmail.com',
    subject: 'Sending email using node.js',
    text: messageInputValue
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
