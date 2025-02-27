const mongoose=require("mongoose")
const AdminSchema=new mongoose.Schema({
    name:String,
    email:String,
    city:String,
    password:String
})
module.exports=mongoose.model("user" , AdminSchema)