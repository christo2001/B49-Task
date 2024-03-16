import express from "express";
import { Appointment } from "../models/appointment.js";
import { postnewbookings } from "../controllers/appointment.js";
import { Doctor } from "../models/doctor.js";

const router = express.Router();


router.post("/bookappointment", async (req, res) => {
    try {
      const newbook = await postnewbookings(req);
      if(!newbook){
        return res.status(400).json({
            message:"error while booking"
        })
      }
  
      res.status(201).json({ message: "successfully booked"});
    } catch (error) {
      console.error("Error occurred:", error);
      res.status(500).json({ error: "Internal server error" }); // Send a generic error response
    }
  });

  export const appointmentrRouter = router;
