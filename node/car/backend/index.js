import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { databaseconnection } from "./db.js";
import { isauthorized } from "./middlewares/auth.js";
import { customerRouter } from "./routes/customer.js";
import { carRouter } from "./routes/car.js";
import { slotRouter } from "./routes/slot.js";


dotenv.config();

const app = express();
const PORT = process.env.PORT || 7000; // Set default port to 5000 if process.env.PORT is undefined

app.use(express.json());
app.use(cors());

databaseconnection()

app.use("/api/customer", customerRouter)
app.use("/api/car", carRouter)
app.use("/api/slot", isauthorized, slotRouter)

app.listen(PORT, () => {
    console.log(`server connected to:${PORT}`);
});