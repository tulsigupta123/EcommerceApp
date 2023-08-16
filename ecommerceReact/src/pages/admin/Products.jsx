import React,{useEffect,useState} from 'react'
import AdminMenu from '../../components/layouts/AdminMenu.jsx'
import Layout from '../../components/layouts/Layout.jsx'
import axios from 'axios'
import toast from 'react-hot-toast'
import {Link} from 'react-router-dom'
import {NavLink} from 'react-router-dom'
const Products = () => {
const[products,setProducts] = useState([])

// Get All Products-
const getAllProducts = async() => {
try{
const{data} = await axios.get('http://localhost:8082/api/v1/product/get-products')
setProducts(data.products)
}catch(error){
  console.log(error);
  toast.error('Something went wrong')
}
}

// Lifecycle method-
useEffect(()=>{
getAllProducts();
},[])
  return (
    <Layout>
    <div className="row">
      <div className="col-md-3">
        <AdminMenu/>
      </div>
      <div className="col-md-9">
        <h1 className="text-center">All Products List</h1>
        <div className="d-flex">
       {products?.map((p)=>(
          <Link key={p._id} to={`/dashboard/admin/product/${p.slug}`} className="product-link">
          <div className="card m-3" style={{width: "18rem"}} >
          <img src={`api/v1/product/product-photo/${p._id}`} className="card-img-top" alt={p.name}/>
          <div className="card-body">
            <h5 className="card-title">{p.name}</h5>
            <p className="card-text">{p.description}</p>
            <NavLink  className="btn btn-primary">Go somewhere</NavLink>
          </div>
        </div>
        </Link>
         ))}
        </div>
      </div>
    </div>
    </Layout>
  )
}

export default Products