import express from "express";
import dotenv from "dotenv"
dotenv.config();
import dbConnect from "./config/dbConnect.js"
import cors from "cors"
import cookieParser from "cookie-parser";
import authRoutes from "./Routes/authRoutes.js"

const app=express();
app.use(cors({
    origin:"http://localhost:5173/",
    credentials:true
}))

dbConnect();

app.use(express.json());
app.use(cookieParser())
app.use("/api/auth",authRoutes)

const port= process.env.PORT || 4001

app.get("/",(req,res)=>{
    res.send("welcome")
})

app.listen(port ,()=>{
 console.log(`App is listening on the port ${port}`)
})