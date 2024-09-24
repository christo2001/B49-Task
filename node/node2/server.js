import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { databaseconnection } from "./db.js";

import { flatRouter } from "./routes/flat.js";


dotenv.config();
const app = express();
const PORT = process.env.PORT || 7000;

app.use(express.json());
app.use(cors());

databaseconnection()


app.use('/api/flat' ,flatRouter)

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
