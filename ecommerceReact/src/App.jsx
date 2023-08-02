import React from 'react'
import {Routes,Route} from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Policy from './pages/Policy.jsx'
import PageNotFound from './pages/PageNotFound.jsx'


const App = () => {
  return (
    <>
   <Routes>
    <Route  path = "/" element= {<HomePage/>}  />
    <Route exact path = "/about" element= {<About/>}  />
    <Route exact path = "/contact" element = {<Contact/>}  />
    <Route exact path = "/policy" element = {<Policy/>}  />
    <Route path = "/*" element = {<PageNotFound/>}  />
    
   </Routes>
    </>
  )
}

export default App