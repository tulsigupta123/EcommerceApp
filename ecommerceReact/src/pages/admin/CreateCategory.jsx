import React,{useEffect,useState} from 'react'
import Layout from '../../components/layouts/Layout.jsx'
import AdminMenu from '../../components/layouts/AdminMenu.jsx'
import toast from 'react-hot-toast';
import axios from "axios";
import CategoryForm from '../../components/forms/CategoryForm.jsx'
import {Modal} from 'antd'

const CreateCategory = () => {
  const[categories,setCategories] = useState([])
 const[name,setName] = useState("")
const[visible,setVisible] = useState(false)
const[selected,setSelected]= useState(null)
const[updatedName,setUpdatedName]= useState("")
//Handle Form-
const handleSubmit= async(e)=>{
  e.preventDefault()
  try{
 const{data}= await axios.post('http://localhost:8082/api/v1/category/create-category',{name});
 if(data?.success){
  toast.success(`${name} is created successfully`)
  getAllCategories();
 }else{
  toast.error(data.message)
 }
  }catch(error){
    console.log(error);
    toast.error("Something went wrong in creating category")
  }
}

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

  //Update Category-
  const handleUpdate = async(e) => {
    e.preventDefault()
    try{
    const{data}= await axios.put(`http://localhost:8082/api/v1/category/update-category/${selected._id}`,{name:updatedName})
    if(data.success){
      toast.success(`${updatedName} is updated successfully`)
      setSelected("")
      setUpdatedName("")
      setVisible(false)
      getAllCategories();
    }else{
      toast.error(data.message)
    }
    }catch(error){
console.log(error);
toast.error('Something went wrong')
    }
  }

  //Delete Category-
  const handleDelete = async(id) => {
    try{
    const{data}= await axios.delete(`http://localhost:8082/api/v1/category/delete-category/${id}`)
    if(data.success){
      toast.success(`Category is deleted successfully`)
      getAllCategories();
    }else{
      toast.error(data.message)
    }
    }catch(error){
console.log(error);
toast.error('Something went wrong')
    }
  }
  return (
    <>
    <Layout title = {"Dashboard-create-category"}>
    <div className="container-fluid m-3 p-3">
    <div className="row">
        <div className="col-md-3">
            <AdminMenu/>
        </div>
        <div className="col-md-9">
        <h1>Manage Category</h1>
        <div className="p-3 w-50">
          <CategoryForm handleSubmit={handleSubmit} value={name} setValue={setName}  />
        </div>
        <div className = "w-50">
          <table className="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    {categories?.map((c)=>(
     <tr>
      <td key ={c._id}>{c.name}</td>
      <td>
        <button className="btn btn-primary ms-2" onClick={()=>{setVisible(true);setUpdatedName(c.name); setSelected(c)}}>Edit</button>
        <button className="btn btn-danger ms-2" onClick={()=>{handleDelete(c._id)}}>Delete</button>
      </td>
      </tr> 
    )
      )}
    
  </tbody>
</table>
</div>
    </div>
    <Modal onCancel={()=>setVisible(false)} footer={null} open={visible}> <CategoryForm value={updatedName} setValue={setUpdatedName} handleSubmit={handleUpdate}/> </Modal>
        </div>
    </div>
    </Layout>
</>
  )
}

export default CreateCategory