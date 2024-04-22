const joi=require("joi")
const APIError=require('../middlewares/errorHandler')
class validation{
    constructor(){}
        static kayit=async(req,res,next)=>{
            try{
                await joi.object({
                    kullanici_adi:joi.string().messages({
                        "string.base":"İsim Alanı Normal Metin Olmalıdır"   
                    })
                }).validateAsync(req.body)
            }catch(error){
                if(error){
                    console.log("Hata")
                  }
            }
            next()
        }
    
}
module.exports=validation