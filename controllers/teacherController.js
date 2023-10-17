const  db=require('../models/db');


exports.create=(req,res)=>{
    
    const id = req.body.id;
    const name = req.body.name;
    const email = req.body.email;
    const contact = req.body.contact;
    const subject = req.body.subject;
    const class_teacher = req.body.class_teacher;
    const sal = req.body.sal;
    const address = req.body.address;
    const password = req.body.password;
    console.log(id, name, email, contact,subject,class_teacher,sal,address,password);
  
db.query("INSERT INTO teacher VALUES(?,?,?,?,?,?,?,?,?)",[id, name, email, contact,subject,class_teacher,sal,address,password],(err,result)=>{
        if(err){
            console.log(err)
        }
        else{
            res.send("posted")        }
    })
        };
      //fetch all recods
      exports.getAll=(req,res)=>{
        db.query("select * from teacher",function(err,result,fields){
            if(err){
                console.log(err)
            }
            else{
                res.send(result)   
           // console.log(result)    
         }

        })
      }
       //getById
       exports.getone=(req,res)=>{
        const getid=req.params.id;
        db.query('select * from teacher where id=?',getid,(err,result)=>{
            if(err){
                console.log(err)
            }
            else{
                res.send(result)   
            //console.log(result) 
           // var valu=JSON.parse(JSON.stringify(result))
            //console.log(value[0].class)   
         }
        })
      }
       //DELETE DATA
       exports.remove=(req,res)=>{
        const id=req.params.id;
        db.query('delete from teacher where id=?',id,(err,result)=>{
            if(err){
                console.log(err)
            }
            else{
                if(result.affectedRows==0){
                    res.send("id not present")
                }else{
                    res.send("delet")
                }
               
        }
        })

      }
      
