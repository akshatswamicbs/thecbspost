import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const app=express();
 
mongoose.connect(
    process.env.MONGO
    )
    .then(()=>{
        console.log("Database is connected!!")
    })
    .catch((err)=>{
        console.log(err);
    });

app.get("/",function(req,res){
    res.json({msg:"serverr estb"})
})

app.listen(3000);