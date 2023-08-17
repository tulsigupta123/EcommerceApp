import React,{useState,useEffect} from 'react'
import Layout from 'c:/Ecommerce-App/ecommerceReact/src/components/layouts/Layout.jsx'
import {Prices} from '../components/Prices.jsx'
import axios from 'axios'
import {NavLink} from 'react-router-dom'
import {Checkbox,Radio} from 'antd'

const HomePage = () => {
  const[products,setProducts] = useState([])
  const[categories,setCategories] = useState([])
  const[checked,setChecked] = useState([])
  const[radio,setRadio] = useState([])
   // Get All Categories-
   const getAllCategories = async()=>{
    try{
     const{data} = await axios.get('http://localhost:8082/api/v1/category/get-category')
     if(data?.success){
      setCategories(data?.getAllCategory)
     }
    }catch(error){
      console.log(error);
      toast.error("Something went wrong in getting category")
    }
  }
  useEffect(()=>{
 getAllCategories();
  },[])

  // Get All Products-
  const getAllProducts = async()=>{
    try{
    const{data} = await axios.get(`http://localhost:8082/api/v1/product/get-products`)
    setProducts(data.getProduct)
    }catch(error){
      console.log(error);
    }
  }

  // Filter by category-
  const handleFilter = (value,id) => {
  let all = [...checked]
  if(value){
    all.push(id)
  }else{
    all = all.filter((c)=>c!==id)
  }
  setChecked(all)
  }
  useEffect(()=>{
    if(!checked.length || !radio.length)getAllProducts();
  },[checked.length,radio.length])

  useEffect(()=>{
    if(checked.length || radio.length)filterProduct();
  },[checked,radio])

  // Get Filtered Products-
  const filterProduct = async()=>{
    try{
  const {data} = await axios.put('http://localhost:8082/api/v1/product/product-filters',{checked,radio})
  setProducts(data?.products)
    }catch(error){
      console.log(error);
    }
  }
  return (
   
    <Layout  title ={"Online Shopping Site in India"}>
  <div className="row mt-2">
    <div className="col-md-3 ">
      <h5 className="text-center">Filter By Category</h5>
      <div className="d-flex flex-column">
        {categories?.map((c)=>(
        <Checkbox key={c._id}  onChange={(e)=>handleFilter(e.target.checked,c._id)}>
          {c.name}
        </Checkbox>
        ))}
      </div>
 
       {/* Filter by Price-  */}
      <h5 className="text-center mt-3">Filter By Price</h5>
      <div className="d-flex flex-column">
        <Radio.Group onChange={(e)=>setRadio(e.target.value)}>
        {Prices?.map((p)=>(
<div key={p._id}>
<Radio value={p.array}>{p.name}</Radio>
</div>
        ))}
        </Radio.Group>
      </div>
    </div>
    <div className="col-md-9">
      <h1 className="text-center">All Products</h1>
      <div className="d-flex flex-wrap">
         {products?.map((p)=>(
          <div className="card m-3" style={{width:"17rem"} } >
          <img src={`http://localhost:8082/api/v1/product/product-photo/${p._id}`} className="card-img-top" alt={p.name}/>
          <div className="card-body">
            <h5 className="card-title">{p.name}</h5>
            <p className="card-text">{p.description.substring(0,30)}</p>
            <p className="card-text">₹{p.price}</p>
            <NavLink  className="btn btn-primary ms-1">More Details</NavLink>
            <NavLink  className="btn btn-primary ms-1">Add to Cart</NavLink>
          </div>
        </div>
         ))}</div>
    </div>
  </div>
    </Layout>
   
  )
}

export default HomePage