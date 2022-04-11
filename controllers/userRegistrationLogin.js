const UserModel=require('../models/userModel');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken')

const SECRET_KEY="dw3fe4scaga83257dafwg3"

const createJwt = (id) =>{
    return jwt.sign({id},SECRET_KEY,{expireIn:'3d'})

}

const userRegister=async(req,res,next)=>{
    const { userName,email,password}=req.body;
    const salt=await bcrypt.genSalt(10)
    const hashedpass=await bcrypt.hash(password,salt)
    const alreadyExists=await UserModel.findOne({email})
    if(alreadyExists){
        return res.json({
            message:"Already Registered"
        })
    }
    const create=await UserModel.create({userName,email,password})
    if(create){
        res.json({
            message:'Successfully Registered',
        })
    }
    else{
        res.json({
            message:'Error in registration'
        })
    }

}

const loginUser = async(req,res,next)=>{
    const {email,password}=req.body;
    const exists=await UserModel.findOne({email})
    if(!exists){
        return res.json({
            message:'User is not registered',
        })
    }
    if(await bcrypt.compare(password,exists.password)){
        res.json({
            message:'Login Succesfull',
            token:createJwt(exists._id),
            loginUser:exists
        })
    }
    else{
        res.json({
            message:'Password Incorrect',
        })
    }
}
const jwtValidation=async(req,res,next)=>{
    const jwtToken=req.body.token
    jwt.verify(jwtToken,SECRET_KEY,(err,decoded)=>{
        if(decoded){
            return res.json({
                jwtToken:createJwt(decoded._id)
            })
        }
    }
}

module.exports={
    jwtValidation,
    loginUser,
    userRegister
}
