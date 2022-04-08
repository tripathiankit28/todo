const TodoModel=require('../models/todolist.js');

class TodoController {
    static createDoc = async (req,res) =>{
        try{
            const {response}=req.body
            console.log(response)
            const doc=new TodoModel({
                task:response
            })
            const result = await doc.save()
            res.send(result)
            console.log(result)
        }
        catch(error){
            console.log(error)
        }
    }
    static getAllDoc = async(req,res) =>{
        try{
            const result=await TodoModel.find()
            res.send(result)
        }
        catch(error){
            console.log(error)
        }
    }
    static getSingleDocById = async(req,res)=>{
        try{
            const result=await TodoModel.findById(req.params.id)
            res.send(result)
        }
        catch(error){
            console.log(error)
        }
    }
    static updateDocById = async(req,res)=>{
        try{
            const result=await TodoModel.findByIdAndUpdate(req.params.id,req.body)
            res.send(result)
    }
    catch(error){
        console.log(error)
    }
}
    static deleteDocById = async(req,res)=>{

        try{
           const params=req.query;
           console.log(params.id);
            const result=await TodoModel.findByIdAndDelete(params.id)
            res.send(result)
    }
    catch(error){
        console.log(error)
    }
    }
}
module.exports=TodoController;