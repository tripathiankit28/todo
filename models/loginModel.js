const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    }
    
})

const user = mongoose.model("userLogin",userSchema);
module.exports=user;