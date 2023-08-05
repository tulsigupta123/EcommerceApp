import React,{useState} from 'react'
import Layout from "./../../components/layouts/Layout.jsx";
import toast from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import {useNavigate,useLocation} from 'react-router-dom';
import {useAuth} from '../../context/authContext.jsx'
import {NavLink} from 'react-router-dom'

const Login = () => {
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");

    const[auth,setAuth] = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const handleSubmit = async(event) =>{
      event.preventDefault();
      try{
const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/login`,{email,password})
if (res && res.data.success){
  toast.success(res.data && res.data.message)
  setAuth({
    ...auth,
    user:res.data.user,
    token:res.data.token,
  })
  localStorage.setItem('auth',JSON.stringify(res.data))
  navigate(location.state || "/");
}else{
  toast.error(res.data.message)
}
      }catch(error){
        toast.error("Something went wrong")
      }
     
    }
  return (
    <Layout title ={ "Login to your account"}>
      <div className="register-login login-only">  
        <h1>Login</h1>  <br />
        <form onSubmit = {handleSubmit}>
  <div class="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" value ={email} onChange = {(event) => {setEmail(event.target.value)}}/>
     
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <NavLink to = "/forgot-password" className="forgot-password" >Forgot Password</NavLink>
    <input type="password" className="form-control" id="exampleInputPassword1" value ={password} onChange = {(event) => {setPassword(event.target.value)}}/>

  </div>

  <button type="submit" class="btn-register">Login</button>
</form>
        </div>
    </Layout>
  )
  }

export default Login