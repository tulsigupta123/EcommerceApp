import express from 'express'
import {userVerification,isAdmin} from '../middlewares/authMiddlewares.js'
import {createCategoryController,updateCategoryController,categoryController,singleCategoryController,deleteCategoryController} from '../controllers/categoryController.js'

const router = express.Router();

// Routes-

// For creating category-
router.post('/create-category',userVerification,isAdmin,createCategoryController)

// For updating category-
router.put('/update-category/:id',userVerification,isAdmin,updateCategoryController)

// For getting all categories-
router.get('/get-category',categoryController)

// For getting single category-
router.get('/single-category/:slug',singleCategoryController)

// For deleting category-
router.delete('/delete-category/:id',userVerification,isAdmin,deleteCategoryController)


export default router