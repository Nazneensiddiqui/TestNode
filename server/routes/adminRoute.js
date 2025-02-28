const express=require("express")
const route=express.Router()
const AdminController=require("../controllers/adminController")

route.post("/adminsingup",AdminController.AdminSignin)
route.post("/login",AdminController.Login)
route.get("/displaydata",AdminController.DisplayData)
route.post("/deletedata",AdminController.DeleteData)
route.post("/editdatadisplay", AdminController.EditDataDisplay)
route.post("/editdatasave",AdminController.EditDataSave)
route.post("/datasearch",AdminController.DataSearch)
module.exports=route