import express, { json } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'
import SeekerForm from './models/seeker.model.js';
import GiverForm from './models/giver.model.js';
import studyRoutes from './routes/studymaterial.route.js'
import { getVideos, addVideos } from './controllers/main.controller.js';
import cors from 'cors';

dotenv.config();
const app=express();
app.use(express.json())
app.use(cors())

mongoose.connect(
    process.env.MONGO
    )
    .then(()=>{
        console.log("Database is connected!!")
    })
    .catch((err)=>{
        console.log(err);
    });

app.get("/api/user/test",userRoutes);
app.post("/api/auth/signup",authRoutes);


//Insta concepts
app.post('/api/jobseeker', async (req, res) => {
    try {
        const sformData = req.body;
        const newSeekerForm = new SeekerForm({
            Name: sformData.Name,
            Email: sformData.Email,
            Contact: sformData.Contact,
            College: sformData.College,
            Degree: sformData.Degree,
            YearOfGraduation: sformData.YearOfGraduation,
        });
        await newSeekerForm.save();
        res.status(201).json({ message: "Seeker form submitted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
});


app.get('/api/jobseeker', async (req, res) => {
    try {
        const formRequests = await SeekerForm.find();

        if (!formRequests || formRequests.length === 0) {
            return res.status(404).json({ message: 'No form requests found' });
        }

        res.status(200).json(formRequests);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.use('/api/studymaterial', studyRoutes);
app.get("/api/videos",getVideos)
app.post("/api/videos",addVideos)


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