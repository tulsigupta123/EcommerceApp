import jwt from "jsonwebtoken"

// Protection through user verification -
export const userVerification = async(req,res,next)=>{
    try{
        const decode = jwt.verify(req.headers.authorization,process.env.jwt_secretkey);
        next();
    }catch(error){
        console.log(error);
    }

}