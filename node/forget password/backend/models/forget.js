import mongoose from "mongoose";

const forgetschema = new mongoose.Schema({
    token: {
      type: String,
      required:true,
  },
  email:{
    type:String,
    required:true,
},
})

const forgetmodelss = mongoose.model("forgetpassword", forgetschema)
export { forgetmodelss };