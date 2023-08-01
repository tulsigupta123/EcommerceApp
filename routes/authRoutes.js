import express from "express"
const router = express.Router();


import { registerController, loginController } from "../controllers/authControllers.js";

// Routing-
router.post("/register",registerController)

// Login -
router.post("/login",loginController)

export default router;