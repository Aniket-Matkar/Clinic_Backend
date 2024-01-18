import express from "express";
import { connectToDatabase } from './Database/Database.js';
import router from "./Router/PatientRoutes.js";

const server = express();
server.use(express.json());

connectToDatabase();

server.use('/API/v1/patients', router);

const PORT = 3000;
server.listen(PORT, () => {
    console.log("server is running on PORT :", PORT)
})
