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
  const[total,setTotal] = useState(0)
  const[page,setPage] = useState(1)
  const[loading,setLoading] = useState(false)

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
 getTotal();
  },[])

  // Get All Products-
  const getAllProducts = async()=>{
    try{
      setLoading(true)
    const{data} = await axios.get(`http://localhost:8082/api/v1/product/product-list/${page}`)
    setLoading(false)
    setProducts(data.products)
    }catch(error){
      setLoading(false)
      console.log(error);
    }
  }

    // Get total count of pages-
    const getTotal = async()=>{
      try{
       const{data} = await axios.get(`http://localhost:8082/api/v1/product/product-count`)
       setTotal(data?.total)
      }catch(error){
        console.log(error);
      }
    }

    useEffect(()=>{
    if(page === 1)return;
    loadMore();
    },[page])
    // Loadmore for more pages-
    const loadMore = async()=>{
      try{
        setLoading(true)
       const {data} = await axios.get(`http://localhost:8082/api/v1/product/product-list/${page}`)
       setLoading(false)
       setProducts([...products,...data?.products])
      }catch(error){
        setLoading(false)
        console.log(error);
      }
    }
  // Filter by category-
  const handleFilter = (value,id) => {
  let all = [...checked];
  if(value){
    all.push(id);
  }else{
    all = all.filter((c)=>c!==id);
  }
  setChecked(all);
  }
  useEffect(()=>{
    if(!checked.length || !radio.length){
      getAllProducts();
    }
  },[checked.length,radio.length])

  useEffect(()=>{
    if(checked.length || radio.length){
      filterProduct();
    }
  },[checked,radio])

  // Get Filtered Products-
  const filterProduct = async()=>{
    try{
  const {data} = await axios.post('http://localhost:8082/api/v1/product/product-filters',{checked,radio})
  setProducts(data?.products)
    }catch(error){
      console.log(`Error is: ${error}`);
    }
  }
  return (
   
    <Layout  title ={"Online Shopping Site in India"}>
  <div className="row mt-2">
    <div className="col-md-3">
      <h6 className="m-3">Filter By Category</h6>
      <div className="d-flex flex-column m-3">
        {categories?.map((c)=>(
        <Checkbox key={c._id}  onChange={(e)=>handleFilter(e.target.checked,c._id)}>
          {c.name}
        </Checkbox>
        ))}
      </div>
 
       {/* Filter by Price-  */}
      <h6 className= "m-3">Filter By Price</h6>
      <div className="d-flex flex-column m-3">
        <Radio.Group onChange={(e)=>setRadio(e.target.value)}>
        {Prices?.map((p)=>(
<div key={p._id}>
<Radio value={p.array}>{p.name}</Radio>
</div>
        ))}
        </Radio.Group>
      </div>
      <div className="d-flex flex-column">
        <button className="btn btn-primary" onClick={()=>window.location.reload()}>RESET FILTERS</button>
      </div>
    </div> 
    <div className="col-md-9">
      <h1 className="text-center">All Products</h1>
      <div className="d-flex flex-wrap">
         {products?.map((pro)=>(
          <div className="card m-1" style={{width:"17rem"}} key={pro._id} >
          <img src={`http://localhost:8082/api/v1/product/product-photo/${pro._id}`} className="card-img-top" alt={pro.name} />
          <div className="card-body">
            <h5 className="card-title">{pro.name}</h5>
            <p className="card-text">{pro.description.substring(0,50)}...</p>
            <p className="card-text">₹{pro.price}</p>
            <NavLink  className="btn btn-primary ms-1">More Details</NavLink>
            <NavLink  className="btn btn-primary ms-1">Add to Cart</NavLink>
          </div>
        </div>
         ))}</div>
         <div className="m-2 p-3">
          {products && products.length < total && (
            <button className = "btn btn-warning" onClick = {(e)=>{
              e.preventDefault();
              setPage(page + 1);
            }}>
              {loading ? "Loading..." : "Loadmore..."}
            </button>
          )}
         </div>
    </div>
  </div>
    </Layout>
   
  )
}

export default HomePage