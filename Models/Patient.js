import mongoose from "mongoose";

const Schema = mongoose.Schema({
    courtesyTitle: String,
    name:String,
    gender: String,
    age: Int
})

const Patient = mongoose.Model("Patient",Schema);