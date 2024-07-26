import express from "express"
import { addflat, deleteflat, getallagentflats, getallflats , updateflat} from "../controllers/flat.js"

const router = express.Router()


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

router.post('/add', async(req,res)=>{
    try {
        const newflat = await addflat(req)
        if(!newflat){
            res.status(404).json({error:'error occured while adding'})
        }
        res.status(200).json({
            message:"flat added succesfully",
            data:newflat
        })
    } catch (error) {
        res.status(500).json({ error: "error" });   
    }
})

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