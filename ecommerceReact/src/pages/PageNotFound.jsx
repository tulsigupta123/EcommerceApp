import React from 'react'
import Layout from 'c:/Ecommerce-App/ecommerceReact/src/components/layouts/Layout.jsx'
import {Link} from 'react-router-dom'
const PageNotFound = () => {
  return (
  <>
  <Layout  title ={ "404 Document Not Found"}>
   <div className="pnf">
    <div className="pnf-image"><img src = "https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/error-500_f9bbb4.png"/></div>
    <h2 className = "pnf-title">404</h2>
    <h2 className = "pnf-heading">Oops! Page Not Found</h2>
    <Link to = "/" className = "pnf-btn">Go Back</Link>
   </div>
    </Layout>
    </>
  )
}

export default PageNotFound