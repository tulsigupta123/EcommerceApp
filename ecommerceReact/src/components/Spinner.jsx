import React,{useState,useEffect} from 'react'
import {useNavigate, useLocation} from 'react-router-dom'

const Spinner = ({path = "login"}) => {
    const[count,setCount] = useState(5)
    const navigate = useNavigate()
    const location = useLocation();
    useEffect(()=>{
        const interval = setInterval(() => {
            setCount(()=>
                count-1)
        }, 1000);
        {if((count === 0) &&
        navigate(`/${path}`),{
            state:location.pathname
        }){
        return () => clearInterval(interval)
        }}
},[count,navigate,location,path])
  return (
    <>
    <div className = "d-flex flex-column justify-content-center align-items-center" style = {{height:"80vh"}}>
        <h2>Redirecting to you in {count} second...</h2>
        <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  </div>
  </>
  )
}

export default Spinner