import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { databaseconnection } from "./db.js";
import { vehicleLocations } from "./location.js"; // Correct import

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000; // Set a default port if PORT is not defined

databaseconnection();

let currentIndex = 0;

app.get('/vehicle-location', (req, res) => {
    if (currentIndex <= vehicleLocations.length) { // Use vehicleLocations instead of locationData
        res.json(vehicleLocations[currentIndex]); // Use vehicleLocations
        currentIndex++;
    } else {
        res.json(vehicleLocations[vehicleLocations.length - 1]); // Send last location if finished
    }
});

console.log(vehicleLocations); // This logs the vehicleLocations array

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
