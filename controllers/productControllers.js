import productModel from '../models/productModel.js'
import fs from 'fs'
import slugify from 'slugify'

// Create Product-
export const createProductController = async(req,res) => {
try{
 const{name,slug,description,price,category,quantity,shipping}= req.fields;
 const{photo} = req.files;

//Validations-
if(!name){
    return res.send({message:"Name is required"})
}
if(!description){
    return res.send({message:"Description is required"})
}
if(!price){
    return res.send({message:"Price is required"})
}
if(!category){
    return res.send({message:"Category is required"})
}
if(!quantity){
    return res.send({message:"Quantity is required"})
}
// if(!photo || photo.size > 1000000){
//     return res.send({message:"photo is required and should be less than 1 mb"})
// }

const createProduct = new productModel({...req.fields,slug:slugify(name)})
if(photo){
    createProduct.photo.data = fs.readFileSync(photo.path)
    createProduct.photo.contentType = photo.type
}
await createProduct.save()
res.status(200).send({
    success:true,
    message:"Product Created Successfully",
    createProduct
})
}catch(error){
    console.log(error);
    res.status(400).send({
        success:false,
        message:error.message
    })
}
}

// Get All Products-
export const getProductController = async(req,res) => {
    try{
   const getProduct = await productModel.find({}).select("-photo").limit(12).sort({createdAt:-1}).populate("category")
   res.status(200).send({
    success:true,
    totalProducts:getProduct.length,
    message:"List of all products",
    getProduct
   })
    }catch(error){
        console.log(error);
        res.status(400).send({
            success:false,
            message:"Error in getting products"
        })
    }
}

// Get Single Product-
export const getSingleProductController = async(req,res) => {
    try{
        const{slug} = req.params
    const getSingleProduct = await productModel.findOne({slug}).select("-photo").populate("category");
    res.status(200).send({
      success:true,
      message:"Successfully getting product's detail",
      getSingleProduct
    })
    }catch(error){
        console.log(error);
        res.status(400).send({
            success:false,
            message:"Error in getting product"
        })
    }
}

// Get product photo-
export const productPhotoController = async(req,res) => {
    try{
    const productPhoto = await productModel.findById(req.params.pid).select("photo")
    if(productPhoto.photo.data){
        res.set("Content-type",productPhoto.photo.contentType)
        return res.status(200).send(productPhoto.photo.data)
    }
    }catch(error){
        console.log(error);
        res.status(400).send({
            success:false,
            message:"Can't get photo",
            productPhoto
        })
    }
}

// Delete product-
export const deleteProductController = async(req,res) => {
    try{
     const{id} = req.params;
     const deleteProduct = await productModel.findByIdAndDelete({id}).select("-photo")
     res.status(200).send({
        success:true,
        message:"Product Deleted Successfully"
     })
    }catch(error){
        console.log(error);
        res.status(400).send({
            success:false,
            message:"Error in deleting product"
        })
    }
}

// Update product-
export const updateProductController = async(req,res)=>{
        try{
            const{name,slug,description,price,category,quantity,shipping}= req.fields;
            const{photo} = req.files;
           
           //Validations-
           if(!name){
               return res.send({message:"Name is required"})
           }
           if(!description){
               return res.send({message:"Description is required"})
           }
           if(!price){
               return res.send({message:"Price is required"})
           }
           if(!category){
               return res.send({message:"Category is required"})
           }
           if(!quantity){
               return res.send({message:"Quantity is required"})
           }
        //    if(photo && photo.size > 1000000){
        //        return res.send({message:"photo is required and should be less than 1 mb"})
        //    }
           
           const {id} = req.params
           const updateProduct = new productModel.findByIdAndUpdate({id},{...req.fields,slug:slugify(name)},{new:true})
           if(photo){
               updateProduct.photo.data = fs.readFileSync(photo.path)
               updateProduct.photo.contentType = photo.type
           }
           await updateProduct.save()
           res.status(200).send({
               success:true,
               message:"Product Updated Successfully",
               updateProduct
           })

    }catch(error){
        console.log(error);
        res.status(400).send({
            success:false,
            message:"Error while updating product"
        })
    }
}

// Filter Product-
export const productFiltersController = async(req,res) => {
try{
const{checked,radio} = req.body;
let args = {}
if(checked.length>0){
    args.category = checked;
}
if(radio.length){
    args.price = {
        $gte:radio[0],
        $lte:radio[1]
    }
const products = await productModel.find(args)
res.status(200).send({
    success:true,
    products
})
}
}catch(error){
    console.log(error);
    res.status(400).send({
        success:false,
        message:"Error in filtering products",
        error
    })
}
}