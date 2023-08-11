import express from 'express'
import {userVerification,isAdmin} from '../middlewares/authMiddlewares.js'
import {createProductController,getProductController,getSingleProductController} from '../controllers/productControllers.js'
import formidable from 'express-formidable'
const router = express.Router();

// Routes-
// For creating products-
router.post('/create-product',userVerification,isAdmin,formidable(),createProductController)

// For getting products-
router.get('/get-products', getProductController)

// For getting single products-
router.get('/get-products/:slug',getSingleProductController)

export default router;