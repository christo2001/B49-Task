import { Car } from "../models/car.js";


export function getcarbyname(request){
    return Car.findOne({
        carname: request.body.carname // Only search by carname
    }); 
}




export function getcar(req) {
    // Find all doctors and populate the doctorName field
    return Car.find({}).populate("carname", "carname");
}

export function deletecar(req){
    return Car.findByIdAndDelete({
        _id:req.params.id,
    });
}