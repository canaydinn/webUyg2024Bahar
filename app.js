const express=require("express")
require("dotenv/config")
const db_connect=require("./db/mysql_connect")
const app=express()
const port= process.env.PORT||5001;
app.get("/",(req,res)=>{
    res.json({
        message:"Hoşgeldiniz"
    })
})

app.listen(port,()=>{
    console.log(`Server ${port} portunda Çalışıyor`)
})