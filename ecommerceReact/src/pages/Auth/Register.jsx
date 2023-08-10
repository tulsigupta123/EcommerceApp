import React,{useState} from 'react'
import Layout from "./../../components/layouts/Layout.jsx";
import toast from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import {useNavigate} from 'react-router-dom';


const Register = () => {
    const[name,setName] = useState("");
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const[phone,setPhone] = useState("");
    const[address,setAddress] = useState("");
    const[answer,setAnswer] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async(event) =>{
      event.preventDefault();
      try{
const res = await axios.post(`http://localhost:8082/api/v1/auth/register`,{name,email,password,phone,address,answer})
if (res.data.success){
  toast.success(res.data.message)
  navigate("/login");
}else{
  toast.error(res.data.message)
}
      }catch(error){
        toast.error("Something went wrong")
        console.log(error);
      }
     
    }
  return (
    <Layout title ={ "Register Now"}>
        <div className="register-login">  
        <h1>Create Account</h1>  
        <form method = "post" onSubmit = {handleSubmit}>
  <div className="mb-3">
  <label for="exampleInputName" class="form-label">Name</label>
    <input type="text" className="form-control" id="exampleInputName1" value ={name} onChange = {(event) => {setName(event.target.value)}} />
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" value ={email} onChange = {(event) => {setEmail(event.target.value)}}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" value ={password} onChange = {(event) => {setPassword(event.target.value)}}/>
    <label for="exampleInputPhone" class="form-label">Phone</label>
    <input type="text" className="form-control" id="exampleInputPhone1" value ={phone} onChange = {(event) => {setPhone(event.target.value)}}/>
    <label for="exampleInputAddress" className="form-label">Address</label>
    <input type="text" className="form-control" id="exampleInputAddress1" value ={address} onChange = {(event) => {setAddress(event.target.value)}}/> <br />
    <input type="text" className="form-control" id="exampleInputFood1" value ={answer} placeholder = "What is your favourite food?" onChange = {(event) => {setAnswer(event.target.value)}}/>
  </div>

  <button type="submit" className="btn-register">Register & Continue</button>
</form>
        </div>
    
        </Layout>
  )
}

export default Register