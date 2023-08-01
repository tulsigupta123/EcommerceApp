import React from 'react'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

const Layout = (props) => {
  return (
    <>
    <Header />
    <main style = {{minHeight : "85vh"}}>
    {props.children}
    </main>
    <Footer />
    </>
  )
}

export default Layout