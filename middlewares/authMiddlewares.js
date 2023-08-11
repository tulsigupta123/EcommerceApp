import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import UserModel from '../models/userModel.js'

// configure env-
dotenv.config();
  
// Protection through user verification -
export const userVerification = async(req,res,next)=>{
    try{
        const decode = jwt.verify(req.headers.authorization,process.env.JWT_SECRET_KEY);
        req.user = decode;
        next();
    }catch(error){
        console.log(error);
        res.status(400).send({
            
        })
    }

}

// Protection through admin verification-
export const isAdmin = async(req,res,next) => {
    try{
     const user = await UserModel.findById(req.user._id);
     if(user.role !== 1){
        return res.status(401).send({
            success:false,
            message:"UnAuthorized Access"
        });
     }else{
        next();
     }
    }catch(error){
        console.log(error);
        res.status(401).send({
            success:false,
            message:"Error in Admin middleware"
        })
    }
}