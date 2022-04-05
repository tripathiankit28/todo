const express = require('express');
const todolist = require('../models/todolist');


exports.viewAllTask=async(req,res)=>{
    try{
    var response = await todolist.find()
      res.send(response)
    }
    
    catch(err){
        console.log(err);
    }

    

exports.addTask=async(req,res)=>{
    try{
    let todo = new todolist({
      task : req.body.task,
      status : req.body.status
    });
    var response = await todo.save()
      res.send(response);
    }
    catch(err){
        console.log(err);
    }
}

exports.updateTask=async(req,res)=>{
    try{
    let todo = {
        task : req.body.task,
        status : req.body.status
    };
    var response = await todolist.findByIdAndUpdate(req.body.id, {$set : todo}, {new : true})
        res.send(response);
    }
    catch(err){
     console.log(err);
   
 }
}

exports.deleteTask=async(req,res)=>{
   var response = await todolist.findByIdAndDelete(req.body.id)
   res.send(response);
}

}
