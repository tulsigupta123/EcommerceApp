import React from 'react'
import {useSearch} from '../../context/searchContext.jsx'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const SearchInput = () => {
    const[values,setValues] = useSearch();
    const navigate = useNavigate();
    const handleSubmit = async(e)=>{
      e.preventDefault();
      try{
     const{data} = await axios.get(`http://localhost:8082/api/v1/product/search/${values.keyword}`)
     setValues({...values,results:data});
     navigate("/search")
      }catch(error){
        console.log(error);
      }
    }
      return ( <>
    <form className="d-flex" role="search" onSubmit = {handleSubmit}>
      <div className="searchbox">
        <input className="form-control me-2" type="search" placeholder="Search for Products" aria-label="Search" value={values.keyword} onChange = {(e)=>setValues({...values,keyword:e.target.value})}/>
        <button className="btn btn-outline-success" type="submit">Search</button></div>
      </form>
      </>
  )
}

export default SearchInput