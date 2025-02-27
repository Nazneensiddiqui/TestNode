const express=require("express")
const route=express.Router()
const AdminController=require("../controllers/adminController")

route.post("/adminsingup",AdminController.AdminSignin)
route.post("/login",AdminController.Login)
route.get("/displaydata",AdminController.DisplayData)
route.post("/deletedata",AdminController.DeleteData)

module.exports=route