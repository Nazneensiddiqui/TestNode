const AdminModel=require("../models/adminModel")
const bcrypt=require("bcryptjs")

const AdminSignin=async(req,res)=>{
  const  {name,email,city,password}=req.body
    try {
      const hashedPassword = await bcrypt.hash(password, 8);
        const User=await AdminModel.create({
            name:name,
            email:email,
            city:city,
            password:hashedPassword
        })
        res.status(200).send("ok")
    } catch (error) {
      console.log(error)  
    }
}

const Login=async(req,res)=>{
 const { email, password }=req.body
  try {
    const User=await AdminModel.findOne({email:email})
    console.log(User)
  if(!User)
  {
    res.status(400).send({msg:"Invalid Email"})
  }
  const isPasswordValid = await bcrypt.compare(password, User.password);
  
  if(!isPasswordValid)
  {
    res.status(400).send({msg:"Invalid Password"})
  }
  res.status(200).send( User)
  } catch (error) {
    console.log(error)  
  }
}

const DisplayData=async(req,res)=>{
 const User= await AdminModel.find()
 res.send(User)
  
}

const DeleteData=async(req,res)=>{
 const {id}=req.body
 const user= await AdminModel.findByIdAndDelete(id)
  res.send(user)
}

module.exports={
    AdminSignin,
    Login,
    DisplayData,
    DeleteData
}