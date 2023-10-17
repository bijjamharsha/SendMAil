const  db=require('../models/db');


exports.create=(req,res)=>{
    
    const id = req.body.id;
   
    const admin_name = req.body.admin_name;
    const password = req.body.password;
    console.log(id, admin_name,password);
  
db.query("INSERT INTO admin VALUES(?,?,?)",[id,admin_name,password],(err,result)=>{
        if(err){
            console.log(err)
        }
        else{
            res.send("posted")        }
    })
        };
       //fetch all recods
       exports.getAll=(req,res)=>{
        db.query("select * from admin",function(err,result,fields){
            if(err){
                console.log(err)
            }
            else{
                res.send(result)   
            //console.log(result)    
         }

        })
      }
       //getById
       exports.getone=(req,res)=>{
        const getid=req.params.id;
        db.query('select * from admin where id=?',getid,(err,result)=>{
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
        db.query('delete from admin where id=?',id,(err,result)=>{
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
     