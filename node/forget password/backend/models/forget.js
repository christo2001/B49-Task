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

const forgetmodel = mongoose.model("matanas", forgetschema)
export { forgetmodel };