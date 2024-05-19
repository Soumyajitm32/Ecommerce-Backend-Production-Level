const express=require("express")
const responseTime=require("response-time")
const bodyParser=require("body-parser")

const app=express()
app.use(responseTime())
app.use(bodyParser.json())
app.use(bodyParser.text())
app.use(bodyParser.urlencoded({extended:true}))
const {PORT}=require("./config/serverConfig")


const apiRouter=require("./routes/apiRouter")




app.use("/api",apiRouter)
app.listen(PORT,()=>{
    console.log(`Server Started On Port ${PORT}`)

})

