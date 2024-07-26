import express from "express"
import bcrypt from "bcrypt"
import { getuserbyemail,generatetoken} from "../controllers/agent.js";
import { Agent } from "../models/agent.js"
import { error } from "console";

const router = express.Router();

router.post('/regi', async(req,res)=>{
    try {
        let agent = await getuserbyemail(req)
        if(agent){
            return res.status(400).json({error:"email already exist"})
        }
        const salt = await bcrypt.genSalt(10)
        const hashedpassword = await bcrypt.hash(req.body.password, salt)

        agent = new Agent({
            ...req.body,
            password: hashedpassword
        })

        await agent.save()
        const token = generatetoken(agent._id);
        res.status(201).json({ message: "success", token });
    } catch (error) {
        res.status(500).json({ error: "Internal server error" }); // Send a generic error response
    }
})



router.post('/log',async(req,res)=>{
    try {
        let agent = await getuserbyemail(req)
        if(!agent){
            return res.status(400).json({error:'invalid authorization'})
        }
        let validpassword = await bcrypt.compare(req.body.password,agent.password)
        if(!validpassword){
            res.status(400).json({error:'wrong password'})
        }
        const token = generatetoken(agent._id);
        res.status(201).json({ message: "logged in", token });        
    } catch (error) {
        res.status(500).json({error:'internal server'})
    }
})



export const userRouter = router;