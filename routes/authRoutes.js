import express from "express"
const router = express.Router();
import { registerController, loginController,forgotPasswordController } from "../controllers/authControllers.js";
import {userVerification } from '../middlewares/authMiddlewares.js'
import { isAdmin } from "../middlewares/authMiddlewares.js";
// Routing-
router.post("/register",registerController)

// Login -
router.post("/login",loginController)

// Forgot-password-
router.post("/forgot-password",forgotPasswordController)

// Protected route auth to check user authentication -
router.get("/user-auth",userVerification,(req,res)=>{
    res.status(200).send({
        ok:true
    })
})
// Protected route auth to check admin authentication-
router.get("/admin-auth",userVerification,isAdmin,(req,res)=>{
    res.status(200).send({
        ok:true
    })
})

export default router;