import express from "express"
import multer from "multer"
import path from "path"
import { addflat, deleteflat, getallagentflats, getallflats , updateflat} from "../controllers/flat.js"
import { Flat } from "../models/flat.js"
import { error } from "console"
import { getuserbyemail } from "../controllers/agent.js"

const router = express.Router()

// Set up storage engine for multer
const storage = multer.memoryStorage();

// Initialize upload variable
const upload = multer({ storage: storage });



router.get('/all', async(req,res)=>{
    try {
        const flat = await getallflats(req)
        if(!flat || flat.length<=0){
            res.status(404).json({error:'no flats available'})
        }
        res.status(200).json({
            data:flat
        })
    } catch (error) {
        res.status(500).json({ error: "error while fetching all agent flats" });   
    }
})

router.get('/agent/all', async(req,res)=>{
    try {
        const flat = await getallagentflats(req)
        if(!flat || flat.length<=0){
            res.status(404).json({error:'no flats available'})
        }
        res.status(200).json({
            data:flat
        })
    } catch (error) {
        res.status(500).json({ error: "error while fetching all agent flats" });   
    }
})

router.post('/add', upload.single('img'), async (req, res) => {
    try {

        const email = await getuserbyemail(req)

        if(email){
            res.status(404).json({error:'email already there'})
        }
        const flat = await addflat(req); // Call addflat only once
        
        // If addflat was successful, `flat` should be a saved document
        res.send('Image uploaded successfully');
    } catch (error) {
        console.error(error);
        res.status(400).send('Error uploading image: ' + error.message);
    }
});


router.put('/upd/:id', async(req,res)=>{
  try {
    const editflat = await updateflat(req)
    if(!editflat){
        res.status(404).json({message:'cant edit the data'})
    }
    res.status(200).json({
        message:'edited successfully',
        data:editflat
    })

  } catch (error) {
    res.status(500).json({ error: "error" });   
  }
})

router.delete('/del/:id',async(req,res)=>{
  try {
    const removeflat = await deleteflat(req)
    if(!removeflat){
        res.status(404).json({error:'error while deleting'})
    }
    res.status(200).json({
        message:'deleted successfully',
    })
  } catch (error) {
    res.status(500).json({ error: "error" });   
  }
})

export const flatRouter = router;