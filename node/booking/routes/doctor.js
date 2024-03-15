import express from "express";
import { getdoctornyname } from "../controllers/doctor.js";
import { Doctor } from "../models/doctor.js";

const router = express.Router();


router.post("/docregister", async (req, res) => {
    try {
      let doctor = await getdoctornyname(req);
      if (doctor) {
        return res.status(400).json({ error: "doctor already exists" });
      }

  
      // Create new patient instance and save to database
      doctor = await new Doctor({
        ...req.body,
      }).save();
  
      res.status(201).json({ message: "successfully added"});
    } catch (error) {
      console.error("Error occurred:", error);
      res.status(500).json({ error: "Internal server error" }); // Send a generic error response
    }
  });

  export const doctorRouter = router;