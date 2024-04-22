class Response{
    constructor(data=null,message=null,status){
        this.data=data
        this.message=message
        this.status=status
    }
    success(res){
        return res.status(200).json({
            succes:true,
            data:this.data,
            message:this.message??"İşlem Başarılı"
        })
    }
    created(res){
        return res.status(201).json({
            success:true,
            data:this.data,
            message:this.message??"Kayıt Başarılı Şekilde Gerçekleştirildi"
        })
    }
    error404(res){
        return res.status(404).json({
            success:false,
            data:null,
            message:this.message??"Lütfen Oturum Açın"
        })
    }
    error429(res){
        return res.status(404).json({
            success:false,
            data:null,
            message:this.message??"Çok fazla deneme yapıldı"
        })
    }
    error401(res){
        return res.status(404).json({
            success:false,
            data:null,
            message:this.message??"Yetkisiz Giriş"
        })
    }
    error500(res){
        return res.status(500).json({
            success:false,
            data:this,
            message:this.message??"Kayıt Mevcut"
        })
    }
}
module.exports=Response