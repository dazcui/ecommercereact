import axios from 'axios'
import React, { useState } from 'react'
import getConfig from '../../utils/getConfig'
import './cart.css'

const ProductCartInfo = ({ product, getAllProductsCart }) => {

    const handleDeleteProduct = () => {
        const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/cart/${product.id}`
        axios.delete(URL, getConfig())
            .then(() => getAllProductsCart())
            .catch(err => console.log(err))
    }

    return (
        <article className='cart__item'>
            <div className='cart__item-delete'>
                <div>
                    <header className='cart__item-header'>
                        <h4 className='cart__category'>{product.brand}</h4>
                        <h5 className='cart__name'>{product.title}</h5>
                    </header>
                </div>
                <div className='cart__trash-delete'>
                    <i onClick={handleDeleteProduct} className="cart__trash fa-regular fa-trash-can"></i>
                </div>
            </div>
            <div>
                <span className='cart__quantity'>{product.productsInCart.quantity}</span>
                <footer className='cart__item-footer'>
                    <span className='cart__total-label'>Price:</span>
                    <p className='cart__total-number'>{product.price}</p>
                </footer>
                
            </div>
        </article>
    )
}

export default ProductCartInfo