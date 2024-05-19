const express=require("express")
const v2Router=express.Router()

const pingRouter = require("./pingRouter")



v2Router.use("/ping",pingRouter)

module.exports=v2Router