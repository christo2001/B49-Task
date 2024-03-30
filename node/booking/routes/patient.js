import express from "express";
import { generatetoken, getuserbyemail,getuserbooking, deletebooking } from "../controllers/patient.js";
import bcrypt from "bcrypt";
import { Patient } from "../models/patient.js";
import { isauthorized } from "../middlewares/auth.js";

const router = express.Router();


// Login route handler
router.post("/login", async (req, res) => {
 try {
    const patient = await getuserbyemail(req);

    if(!patient){
      return res.status(400).json({error:"invali authorazition"})
    }
  
    const validatepassword =  await bcrypt.compare(
      req.body.password,
      patient.password
    );
  
    if(!validatepassword){
      return res.status(400).json({
          error:"incorrect password"
      })
    }
  
    const token = generatetoken(patient._id);
      res.status(200).json({ message: "success", token });
 } catch (error) {
    console.error("Error occurred:", error);
    res.status(500).json({ error: "Internal server error" });
 }
});



// Register route handler
router.post("/register", async (req, res) => {
  try {
    let patient = await getuserbyemail(req);
    if (patient) {
      return res.status(400).json({ error: "email already exists" });
    }

    // Generate hashed password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // Create new patient instance and save to database
    patient = await new Patient({
      ...req.body,
      password: hashedPassword,
    }).save();

    const token = generatetoken(patient._id);
    res.status(201).json({ message: "success", token });
  } catch (error) {
    console.error("Error occurred:", error);
    res.status(500).json({ error: "Internal server error" }); // Send a generic error response
  }
});

router.post("/changepassword", async (req, res) => {
  try {
    let patient = await getuserbyemail(req);

    if (!patient) {
      return res.status(400).json({ error: "User does not exist" });
    }

    // Check if new password is provided
    if (!req.body.newpassword) {
      return res.status(400).json({ error: "New password is required" });
    }

    // Generate hashed password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(req.body.newpassword, saltRounds);

    // Update the user's password with the new hashed password
    patient.password = hashedPassword;

    // Save the updated user data
    await patient.save(); // Change this line to save the patient instance

    res.json({ message: 'Password changed successfully' });
  } catch (error) {
    console.error("Error occurred:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});







router.get("/getappointment", isauthorized, async (req, res) => {
  try {
      const patientId = req.patient._id; // Obtaining patient's ID from the authentication middleware
      const notes = await getuserbooking(patientId);
      if (!notes || notes.length <= 0) {
          return res.status(404).json({ error: "No bookings found for the user" });
      }
      res.status(200).json({ data: notes });
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
  }
});





router.put("/booking/:id", async(req,res)=>{
try {
  const Deletebooking = await deletebooking(req);
  if(!Deletebooking){
    return res.status(400).json({message:"error while deleting"})
  }

  res.status(200).json({
    message:"successfully deleted",
    data:Deletebooking
  })
} catch (error) {
  console.log(error);
  res.status(500).json({message:"internal server"})
}
})

export const userRouter = router;
