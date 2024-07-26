import { Flat } from "../models/flat.js";


export function getallflats(){
    return Flat.find().populate('agent', 'name')
}

export function getallagentflats(req){
    return Flat.find({agent:req.agent._id}).populate('agent', "name email")
}

export function addflat(req){
    return new Flat({
        ...req.body,
        agent:req.agent._id
    }).save()
}

export function updateflat(req){
    return Flat.findOneAndUpdate(
        {_id:req.params.id},
        {$set:req.body},
        {new:true}
    )
}

export function deleteflat(req){
    return Flat.findOneAndDelete({
        _id:req.params.id
    })
}