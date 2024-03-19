import videosList from '../models/videos.model.js';
import mongoose from 'mongoose';
// Getting videos
const addVideos= async (req,res) => {
    const {title,embedlink}=req.body;
    try{
        const newVideo=await videosList.create({title,embedlink});
        res.status(200).json({newVideo})
    }catch(error){
        res.status(400).json({error:error.message})
    }
}


const getVideos=async (req,res)=>{
    try {
        const videos = await videosList.find({}).sort({ createdAt: -1 });
        res.status(200).json(videos);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
        console.error('Error fetching videos:', error);
    }
}

export { addVideos, getVideos };