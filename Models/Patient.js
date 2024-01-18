import mongoose from "mongoose";

const Schema = mongoose.Schema({
    title: { type: String, required: true },
    name: { type: String, required: true },
    gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true },
    age: { type: Number, required: true },
    phone: { type: String, required: true }, // Assuming phone numbers can include characters
    address: { type: String, default: "Shinde Wasti" },
    // email: { type: String, lowercase: true, trim: true },
    symptoms: { type: String },
    diagnosis: { type: String },
    treatment: { type: String },
    medicines: { type: String },
    comments: { type: String },
    // appointments: [
    //     {
    //         date: { type: Date, required: true },
    //         notes: { type: String }
    //     }
    // ],
    createdAt: { type: Date, default: Date.now }
});

export const Patient = mongoose.model("Patient", Schema);