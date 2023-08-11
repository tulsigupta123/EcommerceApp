import React from 'react'
import Layout from '../../components/layouts/Layout.jsx'
import UserMenu from '../../components/layouts/UserMenu.jsx'
import {useAuth} from '../../context/authContext.jsx'
const Dashboard = () => {
  const[auth] = useAuth();
  return (
    <Layout title = {Dashboard}>   
    <div className="container-fluid m-3 p-3">
      <div className="row">
        <div className="col-md-3">
          <UserMenu/>
        </div>
        <div className="col-md-3">
          <div className="card w-100 p-3" >
            <h3>User name: {auth?.user?.name}</h3>
            <h3>User Email: {auth?.user?.email}</h3>
            <h3>User Address: {auth?.user?.address}</h3>
          </div>
        </div>
      </div>
    </div>
  </Layout>
  )
}

export default Dashboard