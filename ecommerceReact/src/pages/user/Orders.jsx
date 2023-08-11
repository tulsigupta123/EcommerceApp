import React from 'react'
import UserMenu from '../../components/layouts/UserMenu.jsx'
import Layout from "../../components/layouts/Layout.jsx";
const Orders = () => {
  return (
    <>
    <Layout title = {"Dashboard-All Orders"}>
    <div className="container-fluid m-3 p-3">
    <div className="row">
        <div className="col-md-3">
            <UserMenu/>
        </div>
        <div className="col-md-9">
        <h1>All Orders</h1>
    </div>
    </div>
    </div>
    </Layout>
</>
  )
}

export default Orders