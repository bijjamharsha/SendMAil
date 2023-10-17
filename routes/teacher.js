//var mysql=require('mysql');
const express=require('express')
const router=express.Router();
const teacherController=require('../controllers/teacherController');
//var app=express();
//app.use(express.json());
router.get('/',teacherController.getAll);
router.get('/:id',teacherController.getone);
router.post('/',teacherController.create);
router.delete('/:id',teacherController.remove);

module.exports=router;
