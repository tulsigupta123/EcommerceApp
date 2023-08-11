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
if(photo && photo.size > 1000000){
    return res.send({message:"photo is required and should be less than 1 mb"})
}

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