import React from 'react'
import Layout from '../components/layouts/Layout.jsx'
import {useSearch} from '../context/searchContext.jsx'
import {NavLink} from 'react-router-dom'
const SearchPage = () => {
    const[values,setValues] = useSearch()
  return (
    <Layout title = {'Search Results'}>
<div className="container">
    <div className="text-center">
    <h1>Search Results</h1>
    <h6>{values?.results.length < 1 ? "No product found" :  `Found ${values?.results.length}`}</h6>
    <div className="d-flex flex-wrap">
         {values?.results.map((pro)=>(
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
    </div>
</div>
    </Layout>
  )
}

export default SearchPage