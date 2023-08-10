import React from 'react'
import {Link} from 'react-router-dom'
const Footer = () => {
  return (
    <>
    <div className = "footer">
      <div className = "text-center">
    <h4>All Rights Reserved :copyright ShopNow.com</h4>
    <p className="text-center mt-3">
    <Link to = "/" class="-link" >Home</Link>
    <Link to = "/contact" className="-link" >Contact Us</Link>
    <Link to = "/policy" className="-link" >Privacy Policy</Link>
    </p>
    </div>
    </div>
    </>
  )
}

export default Footer