import { Flat } from "../models/flat.js";


export function getallflats(){
    return Flat.find().populate('agent', 'name')
}

export function getallagentflats(req){
    return Flat.find({agent:req.agent._id}).populate('agent', "name email")
}

export function addflat(req) {
    const flat = new Flat({
        ...req.body,
        img: req.file.originalname,
        contentType: req.file.mimetype,
        imageBase64: req.file.buffer.toString('base64'),
        agent: req.agent._id
    });

    return flat.save(); // Return the promise from .save()
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