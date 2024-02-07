import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'

dotenv.config();
const app=express();
app.use(express.json())
mongoose.connect(
    process.env.MONGO
    )
    .then(()=>{
        console.log("Database is connected!!")
    })
    .catch((err)=>{
        console.log(process.env.MONGO);
    });

app.get("/api/user/test",userRoutes);
app.post("/api/auth/signup",authRoutes);

app.use((err,req,res,next)=>{
    const statusCode=err.statusCode || 500;
    const message=err.message || "Internal Error";
    res.status(statusCode).json({
        success:false,
        statusCode,
        message
    })
});

app.listen(3000);