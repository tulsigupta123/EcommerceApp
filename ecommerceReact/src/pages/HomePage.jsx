import React,{useState,useEffect} from 'react'
import Layout from 'c:/Ecommerce-App/ecommerceReact/src/components/layouts/Layout.jsx'
import {useAuth} from '../context/authContext.jsx'
import axios from 'axios'
import {NavLink} from 'react-router-dom'
const HomePage = () => {
  const[auth,setAuth] = useAuth()
  const[products,setProducts] = useState([])
  const[categories,setCategories] = useState([])
 
  // Get All Products-
  const getAllProducts = async()=>{
    try{
    const{data} = await axios.get('http://localhost:8082/api/v1/product/get-products')
    setProducts(data.products)
    }catch(error){
      console.log(error);
    }
  }
  useEffect(()=>{
    getAllProducts();
  },[])
  return (
    <>
    <Layout  title ={"Online Shopping Site in India"}>
  <div className="row mt-2">
    <div className="col-md-3 ">
      <h5 className="text-center">Filter By Category</h5>
    </div>
    <div className="col-md-9">
      <h1 className="text-center">All Products</h1>
      <div className="d-flex flex-wrap">
         {products?.map((p)=>(
          <div className="card m-3" style={{width: "18rem"}} >
          <img src={`api/v1/product/product-photo/${p._id}`} className="card-img-top" alt={p.name}/>
          <div className="card-body">
            <h5 className="card-title">{p.name}</h5>
            <p className="card-text">{p.description}</p>
            <NavLink  className="btn btn-primary ms-1">More Details</NavLink>
            <NavLink  className="btn btn-primary ms-1">Add to Cart</NavLink>
          </div>
        </div>
         ))}</div>
    </div>
  </div>
    </Layout>
    </>
  )
}

export default HomePage