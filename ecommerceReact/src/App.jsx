import React from 'react'
import {Routes,Route} from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import Dashboard from './pages/user/Dashboard.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Policy from './pages/Policy.jsx'
import PageNotFound from './pages/PageNotFound.jsx'
import Register from './pages/Auth/Register.jsx'
import Login from './pages/Auth/Login.jsx'
import PrivateRoutes from './components/RoutesPrivate/PrivateRoutes.jsx'
import ForgotPassword from './pages/Auth/ForgotPassword.jsx'
import AdminRoutes from './components/RoutesPrivate/AdminRoutes.jsx'
import AdminDashboard from './pages/admin/AdminDashboard.jsx'
import CreateCategory from './pages/admin/CreateCategory.jsx'
import CreateProduct from './pages/admin/CreateProduct.jsx'
import UpdateProduct from './pages/admin/UpdateProduct.jsx'
import Users from './pages/admin/Users.jsx'
import Orders from './pages/user/Orders.jsx'
import Profile from './pages/user/Profile.jsx'
import Products from './pages/admin/Products.jsx'
import Search from './pages/SearchPage.jsx'
const App = () => {
  return (
    <>
   <Routes>
    <Route  path = "/" element= {<HomePage/>}  />
    <Route  path = "/search" element= {<Search/>}  />
    <Route  path = "/dashboard" element= {<PrivateRoutes/>}/>
    <Route  path = "/dashboard/user" element= {<Dashboard/>}  />
     <Route exact path = "/dashboard/user/orders" element= {<Orders/>}  />
      <Route exact path = "/dashboard/user/profile" element= {<Profile/>}  />

    <Route  path = "admin/dashboard" element= {<AdminRoutes/>}/>
    <Route path = "dashboard/admin" element= {<AdminDashboard/>}  />
    <Route exact path = "dashboard/admin/products" element={<Products/>} />
    <Route exact path = "/dashboard/admin/create-category" element = {<CreateCategory/>}  />
    <Route exact path = "/dashboard/admin/create-product" element = {<CreateProduct/>}  />
    <Route exact path = "/dashboard/admin/product/:slug" element = {<UpdateProduct/>}  />
    <Route exact path = "/dashboard/admin/users" element = {<Users/>}  />
    <Route/>
    <Route exact path = "/register" element= {<Register/>}  />
    <Route exact path = "/login" element= {<Login/>}  />
    <Route exact path = "/about" element= {<About/>}  />
    <Route exact path = "/contact" element = {<Contact/>}  />
    <Route exact path = "/policy" element = {<Policy/>}  />
    <Route exact path = "/forgot-password" element = {<ForgotPassword/>}  />
   
    <Route path = "/*" element = {<PageNotFound/>}  />
   </Routes>
    </>
  )
}

export default App