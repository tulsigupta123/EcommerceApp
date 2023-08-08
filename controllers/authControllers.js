import UserModel from "../models/userModel.js";
import {hashPassword,comparePassword} from "../middlewares/helpers/authHelpers.js";
import jwt from "jsonwebtoken"

export const registerController = async(req,res) => {
    try{
       const {name,email,password,phone,address,answer} = req.body;

    // Validations -
    if(!name){
         return res.send({message: "Name is required"})
    }
    if(!email){
        return res.send({message: "Email is required"})
   }
   if(!password){
    return res.send({message: "Password is required"})
   }
   if(!phone){
    return res.send({message: "Phone is required"})
   }
   if(!address){
    return res.send({message: "Address is required"})
   }
   if(!answer){
    return res.send({message: "Answer is required"})
   }

    // Check Existing user-
    const existingUser = await UserModel.findOne({email});
    if(existingUser){
        return res.status(200).send({
            success:false,
            message:"Already registered. Please login."
        })
    }

    // Check Existing phone number-
    const existingPhoneNumber = await UserModel.findOne({phone});
    if(existingPhoneNumber){
        return res.status(200).send({
            success:true,
            message:"Already registered. Please login."
        })
    }

    // User Registration-
     const hashedPassword = await hashPassword(password);
    // Saving details -
     const user = await new UserModel({name,email,password:hashedPassword,phone,address,answer}).save();
     res.status(200).send({
        success:true,
        message:"Registered successfully",
        user,
    })

    }catch(error){
        console.log(error);
     res.status(400).send({
        success: false,
        message:"Error in registration",
        error
     })
    }
}

export const loginController = async(req,res) =>{
try{
const{email,password} = req.body;
// Validation-
if(!email || !password){
    return res.status(404).send({
        success:false,
        message:"Invalid login details"
    })
}
// email vaildation-
const user = await UserModel.findOne({email})
if(!user){
    return res.status(404).send({
        success:false,
        message:"User is not registered"
    })
}
// Password validation-
const match = await comparePassword(password,user.password)
if(!match){
    return res.status(404).send({
        success:false,
        message:"Invalid login details"
    })
}
// Generating token-
const token = await jwt.sign({_id:user._id},process.env.JWT_SECRET_KEY ,{expiresIn:"10d"})
console.log(token);
res.status(200).send({
    success:true,
    message:"Login successfully",
    user:{
        name:user.name,
        email:user.email,
        phone:user.phone,
        address:user.address,
        role:user.role
    },
    token
})
}catch(error){
 res.status(400).send({
    success:false,
    message:error.message,
    error
})
}
}

// forgotPasswordController -
export const forgotPasswordController = async(req,res) => {
try{
const{email,answer,newPassword} = req.body;
if(!email){
    res.status(400).send({
    message:"Email is required"
    })
}
if(!answer){
    res.status(400).send({
        message:"Answer is required"
    })
}
if(!newPassword){
    res.status(400).send({
        message:"New Password is required"
    })
}
// Check-
const user = await UserModel.findOne({email,answer})
// Validation-
if(!user){
    return res.status(404).send({
        success:false,
        message:"Wrong email or answer"
    })
}
    const hashed = await hashPassword(newPassword)
    await UserModel.findByIdAndUpdate(user._id,{password:hashed})
    res.status(200).send({
        success:true,
        message: "Password Reset Successfully"
    })

}catch(error){
    res.status(500).send({
        success:false,
        message:error.message
    })
}
}