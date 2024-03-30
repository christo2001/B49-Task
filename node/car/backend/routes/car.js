import express from "express";
import { deletecar, getcar, getcarbyname } from "../controllers/car.js";
import { Car } from "../models/car.js";
import { deletebooking } from "../controllers/customer.js";


const router = express.Router();


router.post("/carregister", async (req, res) => {
    try {
      let car = await getcarbyname(req);
      if (car) {
        return res.status(400).json({ error: "car already exists" });
      }

  
      // Create new patient instance and save to database
      car = await new Car({
        ...req.body,
      }).save();
  
      res.status(201).json({ message: "successfully added"});
    } catch (error) {
      console.error("Error occurred:", error);
      res.status(500).json({ error: "Internal server error" }); // Send a generic error response
    }
  });




router.get("/getcar", async(req,res)=>{
 try {
  const notes = await getcar(req);
  if(!notes||notes.length<=0){
    return res.status(404).json({
      error:"no carsavailable"
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



router.put("/car/:id", async(req,res)=>{
try {
  const Deletecar = await deletecar(req);
  if(!Deletecar){
    return res.status(400).json({message:"error while deleting"})
  }

  res.status(200).json({
    message:"successfully deleted",
    data:Deletecar
  })
  
} catch (error) {
  console.log(error);
  res.status(500).json({message:"internal server"})
}
})

export const carRouter = router;