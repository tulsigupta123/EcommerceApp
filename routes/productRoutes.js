import express from 'express'
import {userVerification,isAdmin} from '../middlewares/authMiddlewares.js'
import {createProductController,getProductController,getSingleProductController,productPhotoController,deleteProductController,updateProductController,productFiltersController} from '../controllers/productControllers.js'
import formidable from 'express-formidable'
const router = express.Router();

// Routes-
// For creating products-
router.post('/create-product',userVerification,isAdmin,formidable(),createProductController)

// For getting products-
router.get('/get-products', getProductController)

// For getting single products-
router.get('/get-products/:slug',getSingleProductController)

// For getting photo-
router.get('/product-photo/:pid',productPhotoController)

// For deleting product-
router.delete('/delete-product/:id',deleteProductController)

// For updating product-
router.put('/update-product/:id',userVerification,isAdmin,formidable(),updateProductController)

// For filtering product-
router.post('/product-filters',productFiltersController)

export default router;