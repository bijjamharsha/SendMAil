var mysql=require('mysql');
//var express=require('express')
//var app=express();
//app.use(express.json());

var db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"school_data_management" 
})
db.connect((err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("connect")
    }
});
module.exports=db;