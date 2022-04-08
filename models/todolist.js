const mongoose=require('mongoose');
//defining schema

const todoSchema = new mongoose.Schema({
    task:{type:String},
    status:{type:Boolean,
    default:false}
})

const TodoModel = mongoose.model("todolist",todoSchema)
module.exports=TodoModel;