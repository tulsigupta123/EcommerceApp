import React from 'react';
import {NavLink,Link} from 'react-router-dom';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import {useAuth} from '../../context/authContext.jsx';
import toast from 'react-hot-toast';
const Header = () => {
  const[auth,setAuth] = useAuth();

  const handleLogout = () => {
    setAuth({
      ...auth,user: null , token : ""
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully")
  }
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <Link to = "/" className="navbar-brand" >ShopNow<LocalMallIcon/></Link>
      <ul className="navbar-nav  ms-auto  mb-2 mb-lg-0">
        <li className="nav-item"> 
          <NavLink to = "/" className="nav-link dropdown-item" >Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to = "/category" className="nav-link dropdown-item" >Category</NavLink>
        </li>
     
         {!auth.user?
          <>
     <li className="nav-item">
     <NavLink to = "/register" className="nav-link " >Register</NavLink>
   </li>
   <li className="nav-item">
     <NavLink to = "/login" className="nav-link dropdown-item" >Login</NavLink>
   </li>
   </>
        :
          <> <li className="nav-item dropdown dropdown-item">
        <NavLink className="nav-link dropdown-toggle dropdown-item"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
        {/* {auth?.user?.name} */}USER
        </NavLink>
        <ul className="dropdown-menu">
          <li><NavLink to = {`/dashboard/${auth?.user?.role === 1 ? "admin" : "user"}` }className="dropdown-item nav-link" >Dashboard</NavLink></li>
          <li><NavLink onClick = {handleLogout} to = "/login" className="dropdown-item" >Logout</NavLink></li>
        </ul>
        </li> </>}
        <li className="nav-item">
          <NavLink to = "/cart" className="nav-link dropdown-item" >Cart(0)</NavLink>
        </li>
        </ul>
        
    </div>
  </div>
</nav></>
  )
}

export default Header