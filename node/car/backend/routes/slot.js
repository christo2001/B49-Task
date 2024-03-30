import express from "express";
import {Slot } from "../models/slot.js";
import { postnewbookings } from "../controllers/slot.js";
import { Car } from "../models/car.js";

const router = express.Router();


router.post("/bookslot", async (req, res) => {
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

  export const slotRouter = router;