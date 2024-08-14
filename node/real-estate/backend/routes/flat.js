import express from "express"
import multer from "multer"
import path from "path"
import { addflat, deleteflat, getallagentflats, getallflats , updateflat, getuserbyemail1} from "../controllers/flat.js"
import { Flat } from "../models/flat.js"
import { error } from "console"
import { getuserbyemail } from "../controllers/agent.js"

const router = express.Router()

const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true); // Accept file
    } else {
        cb(new Error('Only .jpg and .png files are allowed'), false); // Reject file
    }
};

const upload = multer({ 
    storage: storage, 
    fileFilter: fileFilter 
});


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
        console.log("Checking for existing user with email:", req.body.email);
        let agent = await getuserbyemail1(req);
        console.log("Result from getuserbyemail:", agent);
        
        if (agent) {
            console.log("Email already exists, sending error response");
            return res.status(400).json({ error: "Email already exists" });
        }
        
        await addflat(req);
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