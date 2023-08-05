import React from 'react'
import Layout from 'c:/Ecommerce-App/ecommerceReact/src/components/layouts/Layout.jsx'
import {useAuth} from '../context/authContext.jsx'
const HomePage = () => {
  const[auth,setAuth] = useAuth()
  return (
    <>
    <Layout  title ={"Online Shopping Site in India"}>
    <div>HomePage</div>
    <pre>{JSON.stringify(auth,null,4)}</pre>
    </Layout>
    </>
  )
}

export default HomePage