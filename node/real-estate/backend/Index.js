import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { databaseconnection } from "./db.js";
import { userRouter } from "./routes/agent.js";
import { flatRouter } from "./routes/flat.js";
import { isauthorized } from "./middlewares/auth.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

databaseconnection()

app.use('/api/agent', userRouter)
app.use('/api/flat', isauthorized ,flatRouter)

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
