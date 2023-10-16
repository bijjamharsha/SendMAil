const express=require('express');
const bodyParser=require('body-parser');
const nodemailer=require('nodemailer');
 const app=express();
 app.use(bodyParser.json());
 app.post('/send',(req,res)=>{
    const{ subject,recipient}=req.body;
    const transporter=nodemailer.createTransport({
        
       service:'gmail',
        auth:{
            user:'bijjamharshareddy123@gmail.com',
            pass:'zfrvrmjxkcuriznl'
        }
    });
    const mailOptions={
        from:'bijjamharshareddy123@gmail.com',
        to:'bijjamharshareddy555@gmail.com',
        subject:'sendin files' ,
        text:'this is a test mail',

        attachments: [
            {
              filename: 'file.jpg', 
              path: 'https://tse1.mm.bing.net/th?id=OIP.1YM53mG10H_U25iPjop83QHaEo&pid=Api&P=0&h=180'// Path to the file
            }
            
          ]
         
        };
    transporter.sendMail(mailOptions,function(error,info){
        if(error){
            console.log(error);
            res.status(500).send('error sending mail');
        }else{
            console.log('email send: ' , info.response);
            res.status(200).send('Email send successfull');
        }
    })
 
 });
 app.listen(3000,()=>{
    console.log('server started on port 30000');
 });