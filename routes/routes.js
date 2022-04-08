const express= require('express');
const router = express.Router();
const TodoController =require('../controllers/todolistController');

router.get('/',TodoController.getAllDoc)
router.post('/',TodoController.createDoc)
router.get('/:id',TodoController.getSingleDocById)
router.patch('/:id',TodoController.updateDocById)
router.delete('/:id',TodoController.deleteDocById)

module.exports=router;