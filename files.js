const express = require('express');
const multer = require('multer');
const mysql = require('mysql2');

const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const upload = multer({ dest: 'uploads/' });
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
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/upload', upload.single('file'), (req, res) => {
    const file = req.file;

    const sql = 'INSERT INTO files (filename, path, mimetype) VALUES (?, ?, ?)';
    const values = [file.originalname, file.path, file.mimetype];

    con.query(sql, values, (error, results, fields) => {
        if (error) throw error;
        res.send('File uploaded successfully!');
    });
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

