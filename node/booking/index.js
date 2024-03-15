import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { databaseconnection } from "./db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000; // Set default port to 5000 if process.env.PORT is undefined

app.use(express.json());
app.use(cors());

databaseconnection()

app.get("/message", (req, res) => {
    res.send({ message: "working good" });
});

app.listen(PORT, () => {
    console.log(`server connected to:${PORT}`);
});
