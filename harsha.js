var mysql=require('mysql');
var express=require('express')
var app=express();
app.use(express.json());


var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"mydb" 
})
con.connect((err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("connect")
    }
})
//insert data into db
app.post('/post',(req,res)=>{
    
    const id = req.body.id;
    const firstName = req.body.first_name;
    const lastName = req.body.last_name;
    const email = req.body.email;
    const phoneNumber = req.body.phone_number;
    const classs = req.body.classs;
    const section = req.body.section;
    const address = req.body.address;
    const fatherName = req.body.father_name;
    const classTeacher = req.body.class_teacher;
  
    
    console.log(id, firstName, lastName, email, phoneNumber, classs, section, address, fatherName, classTeacher);
  
con.query("INSERT INTO students VALUES(?,?,?,?,?,?,?,?,?,?)",[id, firstName, lastName, email, phoneNumber, classs, section, address, fatherName, classTeacher],(err,result)=>{
        if(err){
            console.log(err)
        }
        else{
            res.send("posted")        }
    })
        });
      //fetch all recods
      app.get("/fetch",(req,res)=>{
        con.query("select * from students",function(err,result,fields){
            if(err){
                console.log(err)
            }
            else{
                res.send(result)   
           // console.log(result)    
         }

        })
      })
      //fetch all recods
      app.get("/fetch",(req,res)=>{
        con.query("select * from students",function(err,result,fields){
            if(err){
                console.log(err)
            }
            else{
                res.send(result)   
            //console.log(result)    
         }

        })
      })
      //getById
      app.get("/getid/:id",(req,res)=>{
        const getid=req.params.id;
        con.query('select * from students where id=?',getid,(err,result)=>{
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
      })
      //update data
      app.put("/update/:id",(req,res)=>{
        const id=req.params.id;
        const firstName = req.body.first_name;
    const lastName = req.body.last_name;
    const email = req.body.email;
    const phoneNumber = req.body.phone_number;
    const classs = req.body.classs;
    const section = req.body.section;
    const address = req.body.address;
    const fatherName = req.body.father_name;
    const classTeacher = req.body.class_teacher;
        con.query('UPDATE  students SET first_name=?,last_name=?,email=?,phone_number=?,classs=?,section=?,address=?,father_name=?,class_teacher=? WHERE id=?',[firstName,lastName,email,phoneNumber,classs,section,address,fatherName,classTeacher,id],(err,result)=>{
            if(err){
                console.log(err)
            }
            else{

                res.send("update") 
            console.log(result)}
        })
      });
      //DELETE DATA
      app.delete('/delete/:id',(req,res)=>{
        const id=req.params.id;
        con.query('delete from students where id=?',id,(err,result)=>{
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

      })
      app.get('/join', (req, res) => {
        const query = `
          SELECT students.*, customers.*
          FROM students
          RIGHT JOIN customers ON students.id = customers.id
        `;
      
        con.query(query, (error, results, fields) => {
          if (error) {
            console.error('Error executing query:', error);
            res.status(500).json({ error: 'Database error' });
            return;
          }
          res.json({ data: results });
        });
      });
      //post list of elements
      app.post('/postlist',(req,res)=>{
        req.body.forEach(element => {
            const id = element.id;
        const firstName = element.first_name;
        const lastName = element.last_name;
        const email = element.email;
        const phoneNumber = element.phone_number;
        const classs = element.classs;
        const section = element.section;
        const address = element.address;
        const fatherName = element.father_name;
        const classTeacher = element.class_teacher;
      
        
        //console.log(id, firstName, lastName, email, phoneNumber, classs, section, address, fatherName, classTeacher);
      
    con.query("INSERT INTO students VALUES(?,?,?,?,?,?,?,?,?,?)",[id, firstName, lastName, email, phoneNumber, classs, section, address, fatherName, classTeacher],(err,result)=>{
            if(err){
return res.send(err)
            }
           
        }) 
        });
        
    
       return res.send("list of elements")
   });
      
      //start srver
      app.listen(3330,(err)=>{
        if(err){
            console.log(err)
        }
        else{
            console.log("3300")
        }
    })



 