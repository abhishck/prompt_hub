import  jwt  from "jsonwebtoken";

const validateToken=(req,res,next)=>{
    const token=req.cookies.token;
    if(!token){
        return res.status(401).json({success:false,message:"Unauthorized"})
    }
    jwt.verify(token,process.env.JWT_SECRET,(err,decoded)=>{
        if(err){
            console.log("error: ", err);
            return res.status(401).json({success:false,message:"Something went wrong!!"})
        }
        req.userId=decoded.id;
        next();
    })
}

export default validateToken;