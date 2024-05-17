const express=require("express")
const app=express()
app.use(express.json())

const {PORT}=require("./config/serverConfig")
const { configPingRoutes } = require("./routes/pingRoutes")
const pingRoutes = require("./routes/pingRoutes")




app.use("/",pingRoutes)
app.listen(PORT,()=>{
    console.log(`Server Started On Port ${PORT}`)

})

