var nodemailer = require('nodemailer');
 var transporter = nodemailer.createTransport("SMTP",
  { service: 'Gmail', 
  auth: { user: '*my personal Gmail address*', pass: '*my personal Gmail password*' } }
  );
   var http = require('http'); var httpServer = http.createServer(function (request, response) 
   { transporter.sendMail({ from: '*my personal Gmail address*', to: '*my personal Gmail address*', subject: 'hello world!', text: 'hello world!' }); }).listen(8080); 
