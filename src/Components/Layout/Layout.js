import React from 'react'
import Header from '../Header/Navbar'
import Footer from '../Footer/Footer'
import {Helmet} from 'react-helmet'
import {Toaster} from 'react-hot-toast'

const Layout = ({children,title,description,keywords,author}) => {
  return (
    <div>
      <Helmet>
  <meta charSet="UTF-8" />
  <meta name="description" content={description} />
  <meta name="keywords" content={keywords} />
  <meta name="author" content={author}/>
        <title>{title}</title>
      </Helmet>
    <Header/>
   <main  style={{minHeight:'70vh'}}>
    <Toaster/>
    {children}</main>
    <Footer/>
    
    </div>
  )
};

Layout.defaultProps ={
  title:'Stm Conference',
  description:'This is the a Stm conference website',
  keywords:'React, Node js, Mongodb, Express js',
  author:'Paritosh'
}

export default Layout