import React from 'react'
import ProductPurchase from './ProductPurchase';
import './purchase.css'

const PurchaseCard = ({purchase}) => {
    console.log(purchase);
  return (
    <article className='card__purchase'>
        <header>
            <h3 className='card__purchase-date'>Date of purchase: {purchase.createdAt}</h3>
            <ul className='card__purchase-body'>
                {
                    purchase.cart.products.map(product =>(
                        <ProductPurchase 
                        key ={product.id}
                        product={product}
                        />
                    ))
                }
            </ul>
        </header>
    </article>
  )
}

export default PurchaseCard