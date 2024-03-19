import { Timestamp } from "mongodb";
import mongoose from "mongoose";

const giverFormSchema = new mongoose.Schema({
    CompanyName: {
        type: String,
        required: true
    },
    JobTitle: {
        type: String,
        required: true
    },
    Location: {
        type: String,
        required: true
    },
    Salary: {
        type: String,
        required: true
    },
    ExperienceRequired: {
        type: String,
        required: true
    },
    SkillsRequired: {
        type: [String], 
        required: true
    },
    JobDescription: {
        type: String,
        required: true
    }
},{timestamps:true});

const GiverForm = mongoose.model('GiverForm', giverFormSchema);

export default GiverForm;
