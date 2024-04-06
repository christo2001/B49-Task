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

  router.get("/bookeddates", async (req, res) => {
    try {
        // Fetch all slots from the database
        const slots = await Slot.find();

        // Construct an object to store booked dates
        const bookedDates = {};

        // Iterate over the slots and populate bookedDates object
        slots.forEach(slot => {
            const { carID, date } = slot;

            if (!bookedDates[date]) {
                bookedDates[date] = [];
            }

            bookedDates[date].push(carID); // Store carID for the booked date
        });

        // Send the bookedDates object as the response
        res.json(bookedDates);
    } catch (error) {
        console.error("Error fetching booked dates:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

  export const slotRouter = router;