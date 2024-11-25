import React from 'react'
import Nav from '../components/Nav/Nav'
import Category from '../components/Categories/Category'
import Search from '../components/Search/Search'
import '../styles/style.css'
import Product from '../components/Product/Product'

function Home() {
  return (
    <div>
        <Nav />
        <div className="search">
          <Search />
        </div>
        
        <div className="category">
          <Category />
          <Category />
          <Category />
        </div>

        <div className="product">
          <Product />
        </div>
    </div>
  )
}

export default Home