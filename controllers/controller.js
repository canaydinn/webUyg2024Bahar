const dbConn = require("../db/mysql_connect")
const bcrypt=require("bcrypt")
const APIError=require('../middlewares/errorHandler')
const Response=require("../utils/response")
const kullanici_kontrol=async(req,res)=>{
    console.log(req.body)
    return res.json(req.body)
}
const kullanici_ekle=async(req,res)=>{
    const kullanici_adi=req.body.kullanici_adi
    const kullanici_sifre=await bcrypt.hash(req.body.sifre,10)  
    const eposta=req.body.eposta
    const adi=req.body.adi
    const soyadi=req.body.soyadi
    const tel_no=req.body.tel_no
    const cinsiyet=req.body.cinsiyet
    const dogum_tarihi=req.body.dogum_tarihi
    const yas=req.body.yas
    dbConn.query("SELECT * FROM kullanicilar WHERE kullanici_adi=?",[kullanici_adi],
    (error,results)=>{
      if(error){
        throw new APIError("Bir hata ile karşılaştık kontrol edin",401)
      }
      if(results.length>0){
        return new Response(null,null).error500(res)
      }else{
        dbConn.query(`INSERT INTO kullanicilar (kullanici_adi,sifre,eposta,adi,soyadi,tel_no,cinsiyet,dogum_tarihi,yas) VALUES 
        ("${kullanici_adi}","${kullanici_sifre}","${eposta}","${adi}","${soyadi}","${tel_no}","${cinsiyet}","${dogum_tarihi}","${yas}")`,(error,results)=>{
            return new Response(results,"Kayıt Başarıyla Yapıldı").created(res)
        })
      }  
    })
}
module.exports={kullanici_ekle,kullanici_kontrol}