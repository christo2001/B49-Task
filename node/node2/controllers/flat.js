import { Flat } from "../models/flat.js";
import { Userlist } from "../models/userlist.js";



export async function addflat(req) {
  try {
      const flat = new Flat({
          img: req.body.img, // Assuming req.body.img holds the image data
          ...req.body
      });

      await flat.save(); // Wait for the save operation to complete
      return flat; // Return the saved flat document
  } catch (error) {
      console.error('Error saving flat:', error);
      throw new Error('Failed to add flat'); // Or handle the error as needed
  }
}

export async function adduser(req){
  return Userlist.findOne({
    email:req.body.email,
    phone:req.body.phone,
  })
}


export async function getAllImages() {
  return await Flat.find(); // Fetch all flat entries from the database
}
