import express from "express";
import { getdoctor, getdoctornyname } from "../controllers/doctor.js";
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


  

router.get("/getdoctor", async(req,res)=>{
 try {
  const notes = await getdoctor(req);
  if(!notes||notes.length<=0){
    return res.status(404).json({
      error:"no doctors available"
    })
  }

  res.status(200).json({
    data:notes,
  });
 } catch (error) {
  console.log(error);
  res.status(500).json({error:"internal server"})
 }
})




  export const doctorRouter = router;