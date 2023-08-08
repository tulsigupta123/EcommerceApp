import jwt from "jsonwebtoken"
import dotenv from "dotenv"

// configure env-
dotenv.config();

// Protection through user verification -
export const userVerification = async(req,res,next)=>{
    try{
        const decode = jwt.verify(req.headers.authorization,process.env.JWT_SECRET_KEY);
        next();
    }catch(error){
        console.log(error);
    }

}