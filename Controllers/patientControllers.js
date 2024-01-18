import { Patient } from "../Models/Patient.js";

export const createPatient = async (req, res) => {
    try {
        const {
            title, name, gender, age, phone, address, symptoms, diagnosis, treatment, medicines, comments, createdAt
        } = req.body;
        const newPatient = await Patient.create({
            title, name, gender, age, phone, address, symptoms, diagnosis, treatment, medicines, comments, createdAt
        });
        res.status(200).json({
            success: true,
            "message": newPatient.name+"'s entry successfully added to database"
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            error: "Internal Server Error"
        });
    }
}

export const getAllPatient = async (req, res) => {
    try {
        const allPatient = await Patient.find({}).sort({ createdAt: -1 });
        res.status(200).json({
            success: true,
            allPatient
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            error: "Internal Server Error"
        });
    }
}