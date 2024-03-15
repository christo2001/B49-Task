import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { databaseconnection } from "./db.js";
import { userRouter } from "./routes/patient.js";
import { doctorRouter } from "./routes/doctor.js";
import { isauthorized } from "./middlewares/auth.js";
import { appointmentrRouter } from "./routes/appointment.js";


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000; // Set default port to 5000 if process.env.PORT is undefined

app.use(express.json());
app.use(cors());

databaseconnection()

app.use("/api/patient", userRouter)
app.use("/api/doctor", doctorRouter)
app.use("/api/appointment",isauthorized, appointmentrRouter)


app.listen(PORT, () => {
    console.log(`server connected to:${PORT}`);
});
