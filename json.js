const express=require('express');
const bodyParser=require('body-parser');
const nodemailer=require('nodeemiler');
 const app=express();
 app.use(bodyParser.json());
 app.post('/send',(req,res)=>{
    const{ subject,recipient}=req.body;
    const transporter=nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:'bijjamharshareddy555@gmail.com',
            pass:'9010810740'
        }
    });
    const mailOptions={
        from:'bijjamharshareddy555@gmail.com',
        to:'bijjamharshareddy@gmail.com',
        subject:subject,
        text:'this is a test mail'

    };
    transporter.sendMail(mailOptions,function(error){
        if(error){
            console.log(error);
            res.status(500).send('error sending mail');
        }else{
            console.log('email send: ' + info.response);
            res.status(200).send('Email send successfull');
        }
    })
 
 });
 
app.listen(3300,(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("3300")
    }
})