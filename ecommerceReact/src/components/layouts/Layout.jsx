import React from 'react'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import { Toaster } from 'react-hot-toast';
import {Helmet} from "react-helmet";

const Layout = ({children,description,title,keywords,author}) => {
  return (
    <>
    <Helmet>
   <meta charSet="utf-8" />
   {/* <title> {title} </title>  */}
   <meta name="title" content={title}/>  
  <meta name="description" content={description}/>  
  <meta name="keywords" content={keywords}/> 
  <meta name="author" content={author}/> 
 
   </Helmet>
    <Header />
    <main style = {{minHeight : "75vh"}}>
   < Toaster/>
    {children}
    </main>
    <Footer />
    </>
  )
}
Layout.defaultProps ={
  description: "Mern Stack Project",
  title: "ShopNow " ,
  keywords: "mongodb,express,react,nodejs" ,
  author:"Tulsi"
};

export default Layout