import React from 'react'
import './purchase.css'

const ProductPurchase = ({product}) => {
  return (
    <li className='card__purchase-item'>
        <h4 className='card__purchase-name'>{product.title}</h4>
        <span className='card__purchase-quantity'>{product.productsInCart.quantity}</span>
        <span className='card__purchase-price'>{product.price}</span>
    </li>
  )
}

export default ProductPurchase