import express from 'express';
import { createPatient, getAllPatient } from '../Controllers/patientControllers.js';

const router = express.Router();

// API to get form data of new patient entry
router.post("/new", createPatient);

// Get all patient lists
router.get("/get", getAllPatient);

export default router;