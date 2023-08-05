import express from "express"
const router = express.Router();


import { registerController, loginController,forgotPasswordController } from "../controllers/authControllers.js";

// Routing-
router.post("/register",registerController)

// Login -
router.post("/login",loginController)

// Forgot-password-
router.post("/forgot-password",forgotPasswordController)

// Protected route auth to check authentication of user-
// router.get("/user-auth",),requireSignIn,(req,res)=>{
//     res.status(200).send({
//         ok:true
//     })
// }

export default router;