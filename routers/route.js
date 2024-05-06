const router=require("express").Router()
const {kullanici_kontrol,kullanici_ekle}=require("../controllers/controller")
const Validation =require("../middlewares/validation")
const Auth=require("../middlewares/auth")
router.post("/login",Auth.createToken,kullanici_kontrol)
router.post("/register",Auth.tokenCheck,kullanici_ekle)
module.exports=router