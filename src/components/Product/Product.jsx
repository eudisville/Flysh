import React from 'react'
import './Product.css'

function Product() {
  return (
    <div className='product'>
      <div className="image"><img src="ip.jpg" alt="" /></div>
      <h2>iPhone 16</h2>
      <h6>Abidjan, Côte d'Ivoire</h6>
      <h5>699.999 <span>XOF</span></h5>
    </div>
  )
}

export default Product