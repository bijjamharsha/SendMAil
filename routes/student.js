//var mysql=require('mysql');
const express=require('express')
const router=express.Router();
const stusentController=require('../controllers/studentController');
//var app=express();
//app.use(express.json());
router.get('/',stusentController.getAll);
router.get('/:id',stusentController.getOne);
router.post('/',stusentController.create);
router.delete('/:id',stusentController.remove);
router.get('/',stusentController.joint);

module.exports=router;
