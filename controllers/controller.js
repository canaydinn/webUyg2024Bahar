const dbConn = require("../db/mysql_connect")
const bcrypt=require("bcrypt")
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
    dbConn.query("SELECT * FROM kullanicilar WHERE eposta=? AND sifre=?",[kullanici_adi,kullanici_sifre],
    (error,results)=>{
      if(results.length>0){
        return res.status(200).json({
            success:false,
            data:res.body,
            message:"Kayıt Mevcut"
        })
      }else{
        dbConn.query(`INSERT INTO kullanicilar (kullanici_adi,sifre,eposta,adi,soyadi,tel_no,cinsiyet,dogum_tarihi,yas) VALUES 
        ("${kullanici_adi}","${kullanici_sifre}","${eposta}","${adi}","${soyadi}","${tel_no}","${cinsiyet}","${dogum_tarihi}","${yas}")`,(error,results)=>{
            return res.status(201).json({
                success:true,
                data:res.body,
                message:"Kayıt Başarıyla Yapıldı"
            })
        })
      }  
    })
}
module.exports={kullanici_ekle,kullanici_kontrol}