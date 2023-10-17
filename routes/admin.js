//var mysql=require('mysql');
const express=require('express')
const router=express.Router();
const adminController=require('../controllers/adminController');
//var app=express();
//app.use(express.json());
router.get('/',adminController.getAll);
router.get('/:id',adminController.getone);
router.post('/',adminController.create);
router.delete('/:id',adminController.remove);

module.exports=router;
