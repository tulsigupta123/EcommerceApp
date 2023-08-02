import React from 'react'
import {NavLink,Link} from 'react-router-dom'
import LocalMallIcon from '@mui/icons-material/LocalMall';
const Header = () => {
  return (
    <>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <Link to = "/" class="navbar-brand" >Shop Online <LocalMallIcon/></Link>
      <ul class="navbar-nav  ms-auto  mb-2 mb-lg-0">
        <li class="nav-item"> 
          <NavLink to = "/" class="nav-link" >Home</NavLink>
        </li>
        <li class="nav-item">
          <NavLink to = "/category" class="nav-link" >Category</NavLink>
        </li>
        <li class="nav-item">
          <NavLink to = "/register" class="nav-link" >Register</NavLink>
        </li>
        <li class="nav-item">
          <NavLink to = "/login" class="nav-link" >Login</NavLink>
        </li>
        <li class="nav-item">
          <NavLink to = "/cart" class="nav-link" >Cart(0)</NavLink>
        </li>
    
      </ul>
     
    </div>
  </div>
</nav></>
  )
}

export default Header