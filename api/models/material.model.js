import mongoose from "mongoose";

const materialSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    pdfUrl: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Material = mongoose.model('Material', materialSchema);

export default Material;