const express=require("express")
require("dotenv/config")
const db_connect=require("./db/mysql_connect")
const app=express()
const port= process.env.PORT||5001;
const router=require("./routers")
app.use(express.json({limit:"50mb",extended:true,parameterLimit:500000}))
app.use("/api",router)

app.listen(port,()=>{
    console.log(`Server ${port} portunda Çalışıyor`)
})