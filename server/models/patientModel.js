const mongoose=require("mongoose")
const patientSchema=new mongoose.Schema({
    name:String,
    email:String,
    city:String,
    illness:String,
   
})
module.exports=mongoose.model("patient" , patientSchema)