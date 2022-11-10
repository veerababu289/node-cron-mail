var cron = require ('node-cron')
var express = require ('express')
var nodemailer = require('nodemailer')
app = express();
data = [
    {name:"veerababu", email:"veerababup9999@gmail.com", dob:'21/10/1999', team: "labs"},
    {name:"swetha", email:"swethapidugu1234@gmail.com", dob:'10/09/2000', team: "appdev"},
    {name:"vandana", email:"vandhanachelluri@gmail.com", dob:'21/10/2000', team: "support"},
    {name:"sravani", email:"sravanibalisetti1@gmail.com", dob:'21/11/2001', team: "b2b"},
    {name:"shekar", email:"syuva893@gmail.com", dob:'29/10/2000', team: "innovation"}
]

for (i = 0; i<data.length; i++)
{
    let dd = data[i].dob
    let ro = dd.slice(0,5)
    let leo= new Date()
    let leo1 = leo.getDate()+"/"+(leo.getMonth()+1)
    if (ro == leo1)
    {
        var co = data[i].email
        cron.schedule(' */10 * * * * *', () => { 
                     sendmail()
                });
    }
}


function sendmail() {
transporter = nodemailer.createTransport({
    service: 'gmail',
    auth : {
        user: 'rayudur261@gmail.com',
        pass : 'bkesuueamwlymchs'},
    port : 465,
    host : 'smtp@gmail.com',
    secure : true 
})
options = {
    from : 'rayudur261@gmail.com',
    to : co,
    subject : 'success celebrations',
    text : 'Happy diwali!! May this diyas rise a light on you'
}
transporter.sendMail(options, (err) => {
    if (err)
    {
        console.log(err)
    }
    else{
        console.log('email sent')
    }
})
}
app.listen(3000, ()=> console.log("server running"))