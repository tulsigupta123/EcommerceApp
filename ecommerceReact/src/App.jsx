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
import PrivateRoutes from '../../ecommerceReact/src/components/RoutesPrivate/PrivateRoutes'
import ForgotPassword from './pages/Auth/ForgotPassword.jsx'
const App = () => {
  return (
    <>
   <Routes>
    <Route  path = "/" element= {<HomePage/>}  />
    <Route exact path = "/dashboard" element= {<PrivateRoutes/>}  />
    <Route exact path = "" element= {<Dashboard/>}  />
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