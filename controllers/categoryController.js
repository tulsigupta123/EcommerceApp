import categoryModel from '../models/categoryModel.js'
import slugify from 'slugify'

// Create category-
export const createCategoryController = async(req,res)=>{
    try{
       const {name} = req.body;
       if(!name){
        return res.status(400).send({
            success:false,
            message:"Name is required"
        })
       }
       const existingCategory = await categoryModel.findOne({name})
       if(existingCategory){
        return res.status(200).send({
            success:true,
            message:"Category already exists"
        })
       }
       const newCategory = await new categoryModel({name,slug:slugify(name)}).save()
       res.status(200).send({
        success:true,
        message:"New category created",
        newCategory
       })
    }catch(error){
        console.log(error);
        res.status(500).send({
            success:false,
            message:"Error in category"
        })
    }
}

// Update category-
export const updateCategoryController = async(req,res)=>{
try{
    const {name} = req.body
    const {id} = req.params
    const updateCategory = await categoryModel.findByIdAndUpdate(id,{name,slug:slugify(name)},{new:true})
    res.status(200).send({
        success:true,
        message:"Category Updated Successfully",
        updateCategory
    })

}catch(error){
    console.log(error);
    res.status(500).send({
        success:false,
        message:"Can't update"
    })
}
}

// Getting all categories-
export const categoryController = async(req,res) =>{
try{
const getAllCategory = await categoryModel.find({})
res.status(200).send({
    success:true,
    message:"List of all categories",
    getAllCategory
})
}catch(error){
    console.log(error);
    res.status(500).send({
        success:false,
        message:"Error in fetching categories"
    })
}
}

// Getting single category-
export const singleCategoryController = async(req,res) => {
try{
  const{slug} = req.params;
  const getCategory = await categoryModel.findOne({slug});
  res.status(200).send({
    success:true,
    message:"Get single category successfully",
    getCategory
  })
}catch(error){
    console.log(error);
    res.status(500).send({
        success:false,
        message:"Error in fetching single category"
    })
}
}

export const deleteCategoryController = async(req,res) => {
    try{
     const {id} = req.params;
     const deleteCategory = await categoryModel.findByIdAndDelete(id);
     res.status(200).send({
        success:true,
        message:"Category Successfully Deleted"
     })
    }catch(error){
        console.log(error);
        res.status(500).send({
            success:false,
            message:"Error in deleting category"
        })
    }
}