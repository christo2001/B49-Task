import express from "express"

import {getusername,updateagent} from "../controllers/flat.js"


const router = express.Router()


router.get('/agent/info', async (req, res) => {
    try {
        // Get agent name and email
        const agentInfo = await getusername(req);

        if (!agentInfo) {
            return res.status(404).json({ error: 'Agent not found' });
        }

        res.status(200).json(agentInfo);
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving agent details' });
    }
});



router.put('/upd/agent/:id', async(req,res)=>{
    try {
      const editflat = await updateagent(req)
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


export const flatRouter = router;