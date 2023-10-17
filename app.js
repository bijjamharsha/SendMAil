const express=require('express');
const bodyParser=require('body-parser');
const app =express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
const studentRoute=require('./routes/student');
const teacherRoute=require('./routes/teacher');
const adminRoute=require('./routes/admin');

app.use('/student',studentRoute);
app.use('/teacher',teacherRoute);
app.use('/admin',adminRoute);

//start srver
app.listen(3333,(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("3333")
    }
})
