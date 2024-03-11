const mysql=require("mysql")
require("dotenv/config")
var dbConn=mysql.createConnection({
    user:process.env.MYSQL_USER,
    password:process.env.MYSQL_PASSWORD,
    database:process.env.MYSQL_DB_NAME,
    host:process.env.MYSQL_INSTANCE_NAME
})

dbConn.connect((err)=>{
    if(!err){
        console.log("Veritabanına Bağlandı")
    }else{
        console.log(`${err} hatası oldu`)
    }
})

module.exports=dbConn