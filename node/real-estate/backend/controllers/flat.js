import { Flat } from "../models/flat.js";
import { Agent } from "../models/agent.js";

export function getuserbyemail1(request){
    return Flat.findOne({
        email:request.body.email
    })
}


export function getusername(req) {
    return Agent.findOne({ _id: req.agent._id }, 'name email'); 
}

export function updateagent(req){
    return Agent.findOneAndUpdate(
        {_id:req.params.id},
        {$set:req.body},
        {new:true}
    )
}
