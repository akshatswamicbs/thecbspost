import mongoose from "mongoose";

const subjectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    button: {
        type: String,
        required: true
    },
    materials: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Material'
    }]
}, { timestamps: true });

const Subject = mongoose.model('Subject', subjectSchema);

export default Subject;