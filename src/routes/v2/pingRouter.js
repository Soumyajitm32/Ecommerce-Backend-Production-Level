const {pingControllerV2} = require("../../controllers/pingController")

const express=require("express")
const pingRouter=express.Router()



pingRouter.get("/",pingControllerV2)
module.exports=pingRouter