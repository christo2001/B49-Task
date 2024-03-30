import jwt from "jsonwebtoken";
import { Customer } from "../models/customer.js";
import { Slot } from "../models/slot.js";

export function getcustomerbyemail(request){
    return Customer.findOne({
        email:request.body.email,
    });
}

export function getcustomerbyid(id){
    return Customer.findById(id).select("_id customername email")
}

export function generatetoken(id){
    return jwt.sign({id}, process.env.SECRET_KEY)
}


export function getcustomerbooking(customerId) {
    return Slot.find({ customerID: customerId }).populate("carname", "carname");
}

export function deletebooking(req){
    return Slot.findByIdAndDelete({
        _id:req.params.id,
    });
}