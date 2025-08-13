import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import transporter from "../config/nodemailerConfig.js";

const register = async(req,res)=>{
  let {username,email,password}=req.body;

  if(!email || !username || !password){
   return res.status(400).json({success: false,message:"All fields are mandatory!!"})
  }

  email=email.trim().toLowerCase();

  try {
    const existingUser=await userModel.findOne({email})
    if(existingUser){
     return res.status(400).json({success: false,message:"User Already Exists!!"});
    }

    const hashedPassword=await bcrypt.hash(password,10);
    
    const user= new userModel({
      username,
      email,
      password:hashedPassword
    })

    await user.save();

    if(!process.env.JWT_SECRET){
      console.log("JWT secret is not set in env file!!")
      return res.status(500).json({
        success:false,
        message:"Internal Server Error"
      })
    }

    const token=jwt.sign({id:user._id},
      process.env.JWT_SECRET,
      {expiresIn:"7d"}
    )

    res.cookie("token",token,{
      httpOnly:true,
      secure:process.env.NODE_ENV === "production",
      sameSite:process.env.NODE_ENV === "production" ? "none" :"strict",
      maxAge:7*24* 60*60*1000
    })

    return res.status(200).json({
      success:true,
      message:"User Registered successfully!!"
    })
  } catch (error) {
    console.error("register error:", error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong during logout",
    });
  }
}

const login=async(req,res)=>{
 let {email , password}=req.body;

  if(!email|| !password){
    return res.status(400).json({success:false,message:"All fields are mandatory!!"});
  }

  email=email.trim().toLowerCase();

  try {
    const user=await userModel.findOne({email})

  if(!user){
    return res.status(404).json({success:false,message:"User not found !!"});
  }

  const isMatch=await bcrypt.compare(password,user.password);

  if(!isMatch){
    return res.status(401).json({success:false,message:"Invalid Credentials!!"})
  }

  if(!process.env.JWT_SECRET){
      console.log("JWT secret is not set in env file!!")
      return res.status(500).json({
        success:false,
        message:"Internal Server Error"
      })
    }

  const token=jwt.sign({id:user._id},
    process.env.JWT_SECRET,
    {expiresIn:"7d"}
  )
  res.cookie("token",token,{
    httpOnly:true,
    secure:process.env.NODE_ENV === "production",
    sameSite:process.env.NODE_ENV === "production" ? "none": "strict",
    maxAge:7*24*60*60*1000
  })
  
  return res.status(200).json({success:true,message:"user login successfully!!"})

  } catch (error) {
    console.error("Logout error:", error);
   return res.status(500).json({
      success: false,
      message: "Something went wrong during logout",
    });
  }
}

const logout= async(req,res)=>{
  try {
    res.clearCookie("token",{
    httpOnly:true,
    secure:process.env.NODE_ENV === "production",
    sameSite:process.env.NODE_ENV === "production" ? "none": "strict",
    maxAge:7*24*60*60*1000
  })

  return res.status(200).json({
      success: true,
      message: "Logout successful",
    });
  } catch (error) {
    console.error("Logout error:", error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong during logout",
    });
  }
}

const isAuthenticated =(req,res)=>{
  return res.status(200).json({success:true,userId: req.userId});
}

const sendEmailOtp=async(req,res)=>{
  const {userId}=req.body;

  try {
    const user=await userModel.findOne({userId});
    
    if(user.isAccountVerified){
      return res.status(400).json({success:false,message:"Account is already verified!!"})
    }

    const otp=String(Math.floor(100000 + Math.random() * 900000));

    user.verifyOtp=otp;
    user.verifyOtpExpiresIn=Date.now() + 24 * 60 *60 *1000;

    await user.save();

    const mailOption={
      from:process.env.USER_NAME,
      to:user.email,
      subject:"Account Verification..",
      text:`Your account verification otp : ${otp}`
    }
     
    await transporter.sendMail(mailOption);

    return res.status(200).json({success:true,message:"Otp send successfully!!"})

  } catch (error) {
     console.error("otp error:", error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong during logout",
    });
  }
  
}

const verifyEmailOtp=async(req,res)=>{
  const { userId,otp}=req.body;
  
  if(!otp){
    return res.status(400).json({success:false,message:"Otp is mandatory"})
  }

  try {
    const user=await userModel.findOne({userId});

    if(user.verifyOtp === "" || user.verifyOtp!== otp){
      return res.status(400).json({success:false,message:"otp is invalid"});
    }

    if(user.verifyOtpExpiresIn < Date.now()){
      return res.status(400).json({success:false,message:"otp is expired!!"})
    }
    user.isAccountVerified=true;
    user.verifyOtp="";
    user.verifyOtpExpiresIn=0;

    await user.save();
    return res.status(200).json({success:true,message:"Email verified successfully!!"})
    
  } catch (error) {
     console.error("otp verify error:", error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong during logout",
    });
  }
}



const controllers={
    login,
    register,
    logout,
    isAuthenticated,
    sendEmailOtp,
    verifyEmailOtp
}

export default controllers;