const express = require('express');
const todoController = require('../controllers/todolistController');


var router=express.Router();

router.get('/todoitems',todoController.viewAllTask)
router.post('/add',todoController.addTask)
router.delete('/delete/:id',todoController.deleteTask)
router.put('/update',todoController.updateTask)

module.exports=router;