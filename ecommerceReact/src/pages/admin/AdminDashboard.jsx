import React from 'react'
import Layout from '../../components/layouts/Layout.jsx'
import AdminMenu from '../../components/layouts/AdminMenu.jsx'
import {useAuth} from '../../context/authContext.jsx'

const AdminDashboard = () => {
  const[auth] = useAuth();
  return (
    <Layout>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu/>
          </div>
          <div className="col-md-3">
            <div className="card w-75 p-3" >
              <h3>Admin name: {auth?.user?.name}</h3>
              <h3>Admin Email: {auth?.user?.email}</h3>
              <h3>Admin Contact: {auth?.user?.phone}</h3>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AdminDashboard