const router=require("express").Router()
const {kullanici_kontrol,kullanici_ekle}=require("../controllers/controller")
const Validation =require("../middlewares/validation")
router.post("/login",kullanici_kontrol)
router.post("/register",Validation.kayit,kullanici_ekle)
module.exports=router