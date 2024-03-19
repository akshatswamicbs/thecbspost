import mongoose from "mongoose";
const videosSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    embedlink:{
        type:String,
        required:true
    }
},{timestamps:true})

const videosList= mongoose.model('videosList',videosSchema);

export default videosList;