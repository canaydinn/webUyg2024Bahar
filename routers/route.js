const router=require("express").Router()
const {kullanici_kontrol,kullanici_ekle}=require("../controllers/controller")
router.post("/login",kullanici_kontrol)
router.post("/register",kullanici_ekle)
module.exports=router