import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { databaseconnection } from "./db.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000; // Set a default port if PORT is not defined

databaseconnection();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
