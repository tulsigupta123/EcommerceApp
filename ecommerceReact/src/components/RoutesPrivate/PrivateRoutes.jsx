import React from 'react'
import {useState,useEffect} from 'react'
import {Outlet} from 'react-router-dom'
import {useAuth} from '../../context/authContext.jsx'
import axios from 'axios'
import Spinner from '../Spinner.jsx'

const PrivateRoutes = () => {
    const[ok,setOk] = useState(false);
    const[auth,setAuth] = useAuth();
    useEffect(()=>{
      const authCheck = async () => {
      const res = await axios.get('api/v1/auth/user-auth',{
        headers:{
          "Authorization" : auth ?.token
        }
      })
      if (res.data.ok) {
        setOk(true)
      }else{
        setOk(false)
      }
      }
      if(auth?.token)authCheck()
    },[auth?.token]);
  return (
 ok ? <Outlet/> : <Spinner/>

   
  )
}

export default PrivateRoutes