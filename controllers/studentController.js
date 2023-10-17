const  db=require('../models/db');


//insert data into db
exports.create=(req,res)=>{
    
    const id = req.body.id;
    const name = req.body.name;
    const email = req.body.email;
    const section = req.body.section;
    const std = req.body.std;
    const over_all_percentage = req.body.over_all_percentage;
    const gender = req.body.gender;
    const parent_contact = req.body.parent_contact;
    const remarks = req.body.remarks;
    const address = req.body.address;
    const password = req.body.password;
    console.log(id, name, email, section,std,over_all_percentage,gender,parent_contact,remarks,address,password);
  
db.query("INSERT INTO student VALUES(?,?,?,?,?,?,?,?,?,?,?)",[id, name, email, section,std,over_all_percentage,gender,parent_contact,remarks,address,password],(err,result)=>{
        if(err){
            console.log(err)
        }
        else{
            res.send("posted")        }
    })
        };
      //fetch all recods
      exports.getAll=(req,res)=>{
        db.query("select * from student",(err,result)=>{
            if(err){
                console.log(err)
                res.status(500).json({error:'internal server error'});
                return;
            }
            res.json(result);

        });
      };
       //getById
       exports.getOne=(req,res)=>{
        const getid=req.params.id;
        db.query('select * from student where id=?',getid,(err,result)=>{
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
      };
       //DELETE DATA
       exports.remove=(req,res)=>{
        const id=req.params.id;
        db.query('delete from student where id=?',id,(err,result)=>{
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

      };
      exports.joint= (req, res) => {
        const query = `
          SELECT student.*, admin.*
          FROM student
          RIGHT JOIN admin ON student.id = admin.id
        `;
      
        db.query(query, (error, results, fields) => {
          if (error) {
            console.error('Error executing query:', error);
            res.status(500).json({ error: 'Database error' });
            return;
          }
          res.json({ data: results });
        });
      };
      