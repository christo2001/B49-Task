import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { databaseconnection } from "./db.js"

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT; // Correct the variable name to uppercase

databaseconnection(); // Call the function to connect to MongoDB

app.get("/", (req, res) => {
  res.send({ message: "working good" });
});

app.listen(PORT, () => {
  console.log('Server is running on port', PORT);
});
