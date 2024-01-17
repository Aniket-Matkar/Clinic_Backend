import express from "express";
import mongoose from "mongoose";

const server = express();

// DataBase  DataBase  DataBase  DataBase  DataBase  
// DataBase  DataBase  DataBase  DataBase  DataBase  
mongoose.connect('mongodb://127.0.0.1:27017/myapp', {
    dbName: "Patient_DB_backend_API"
}).then(() => {
    console.log("successfully connected to dataBaase")
}).catch((error) => {
    console.log(error)
})
const Schema = mongoose.Schema({
    title: String,
    name: String,
    gender: String,
    // age: Int
})
const Patient = mongoose.model("Patient", Schema);
// DataBase  DataBase  DataBase  DataBase  DataBase  
// DataBase  DataBase  DataBase  DataBase  DataBase  

server.get("/", (req, res) => {
    res.json({ "response": true })
})



// API to get form data of new patient entry
server.post("/new", async (req, res) => {
    const { title, name, gender } = req.body;    
    await Patient.create({
        title, name, gender
    });
    res.json({
        success: true,
        Patient
    })
})
//get all patient lists
server.get("/get", async (req, res) => {
    const allPatient = await Patient.find({});

    res.json({
        "success": true,
        allPatient
    })
})












const PORT = 3000;
server.listen(PORT, () => {
    console.log("server is running on PORT :", PORT)
})
