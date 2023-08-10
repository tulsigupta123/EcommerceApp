import React,{useState} from 'react'
import Layout from '../../components/layouts/Layout.jsx'
import toast from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import {useNavigate,useLocation} from 'react-router-dom';
import {useAuth} from '../../context/authContext.jsx'
import {NavLink} from 'react-router-dom'
const ForgotPassword = () => {
    const[email,setEmail] = useState("");
    const[newpassword,setNewPassword] = useState("");
    const[answer,setAnswer] = useState("")
    const navigate = useNavigate();
    const handleSubmit = async(event) =>{
      event.preventDefault();
      try{
const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/forgot-password`,{email,newpassword,answer})
if (res && res.data.success){
  toast.success(res.data && res.data.message)
  navigate("/login");
}else{
  toast.error(res.data.message)
}
      }catch(error){
        toast.error("Something went wrong")
      }
     
    }
  return (
    <Layout title = {"Forgot password"}><div className="register-login login-only">  
    <h1>Reset Password</h1>  <br />
    <form onSubmit = {handleSubmit}>
<div className="mb-3">
<label for="exampleInputEmail1" className="form-label">Enter email address</label>
<input type="email" className="form-control" id="exampleInputEmail1" value ={email} onChange = {(event) => {setEmail(event.target.value)}}/>

<label for="exampleInputEmail1" className="form-label">Enter your favourite food</label>
<input type="text" className="form-control" id="exampleInputAnswer1" value ={answer} onChange = {(event) => {setAnswer(event.target.value)}}/>
 
<label for="exampleInputPassword1" className="form-label">Enter new password</label>
<input type="password" className="form-control" id="exampleInputPassword1" value ={newpassword} onChange = {(event) => {setNewPassword(event.target.value)}}/>

</div>

<button type="submit" className="btn-register">Reset</button>
</form>
    </div></Layout>
  )
}

export default ForgotPassword