const APIError=require("../utils/error")
const errorHandlerMiddleware=(err,req,res,next)=>{
    if(err instanceof APIError){
        return res.status(err.statusCode||400).json({
            success:false,
            message:err.message
        })
    }
    return req.status(500).json({
        success:false,
        message:"Bir hata ile karşılaştık.Lütfen apinizi kontrol ediniz"
    })
}
module.exports=errorHandlerMiddleware