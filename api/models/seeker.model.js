import mongoose from "mongoose";

const seekerFormSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
        unique: true
    },
    Email: {
        type: String,
        required: true
    },
    Contact: {
        type: String,
        required: true
    },
    College: {
        type: String,
        required: true
    },
    Degree: {
        type: String,
        required: true
    },
    YearOfGraduation: {
        type: Number,
        required: true
    }
},{timestamps:true});

const SeekerForm = mongoose.model('SeekerForm', seekerFormSchema);

export default SeekerForm;
