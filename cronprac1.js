var cron = require ('node-cron')
var express = require ('express')
var nodemailer = require('nodemailer');
app= express()

 cron.schedule('*/10 * * * * *', () => {
    sendmail();
 })
 
  function sendmail() {
     transporter = nodemailer.createTransport({
        service: 'gmail',
        auth : {
            user : "rayudur261@gmail.com",
            pass : "bkesuueamwlymchs"},
        port : 465,
        host : 'smtp@gmail.com',
        secure: true
     })
     options = {
        from : 'rayudur261@gmail.com',
        to : 'veerababup9999@gmail.com',
        subject : 'success message',
        text : 'hurray we got it'
     };
     transporter.sendMail(options, (err) =>{
        if (err)
        {
         console.log(err)
        }
        else{
         console.log("email sent")
        }
     })
 }
 app.listen(3000, () => console.log("server running"))
