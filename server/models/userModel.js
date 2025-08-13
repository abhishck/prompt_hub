import mongoose from "mongoose";

const userschema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    verifyOtp:{
        type:String,
        default:""
    },
    verifyOtpExpiresIn:{
        type:Number,
        default:0
    },
    resetOtp:{
        type:String,
        default:""
    },
    resetOtpExpiresIn:{
        type:Number,
        default:0
    },
    isAccountVerified:{
        type:Boolean,
        default:false
    },
    },{timestamps:true})

const userModel = mongoose.model("user",userschema)

export default userModel