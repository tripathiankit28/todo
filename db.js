const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/todolist',(err)=>{
    if(!err){
        console.log("mongoDB connection succeeded")
    }
    else{
        console.log("error in mongodb connection")
    }
});
module.exports=mongoose;