import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import FilterProduct from './FilterProduct';
import './productDetail.css'
import getConfig from '../../utils/getConfig'

const ProductDescription = ({ productInfo }) => {
    const [page, setPage] = useState(0)
    const [products, setProducts] = useState()

    // console.log(productInfo);
    const [counter, setCounter] = useState(1)

    const handlePlus = () => setCounter(counter + 1)
    const handleMinus = () => {
        if (counter - 1 >= 1) {
            setCounter(counter - 1)
        }
    }

    const maxItem = 1
    const totalItems = productInfo?.productImgs.length
    const maxPage = Math.ceil((totalItems) / maxItem)
    const onNextPage = () => {
        setPage((page + 1) % maxPage)
    }
    const onPrevPage = () => {
        setPage((page - 1) % maxPage)
    }

    useEffect(() => {
        const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/products`
        axios.get(URL)
            .then(res => setProducts(res.data.data.products))
            .catch(err => console.log(err))
    }, [])
    // console.log(products);
    const filteredProducts = products?.filter(product =>
        product.category.name == productInfo?.category
    )
    // console.log(filteredProducts);

//para agregar a la cart
    const handleAddCart = e=>{
        e.stopPropagation()
        const URL=`https://ecommerce-api-react.herokuapp.com/api/v1/cart`
        const obj = {
            id: product.id,
            quantity: {counter}
        }
        axios.post(URL, obj, getConfig())
        .then(res=> console.log(res.data))
        .catch(err => console.log(err))
    }


    return (
        <section className='product-info'>


            <div>
                <div className='product__title-home'>
                    <NavLink className='product__title-home-article' to="/">
                        <h4 >home </h4>
                    </NavLink>
                    <div className='product__circle'></div>
                    <h4 >{productInfo?.title}</h4>
                </div>

                <div className='product-img'>
                    <button className='product__button' onClick={onPrevPage} disabled={!page} >&#60;</button>
                    <img src={productInfo?.productImgs[page]} alt="" />
                    <button className='product__button' onClick={onNextPage} disabled={page === Math.ceil(totalItems / maxItem) - 1} >&#62;</button>
                </div>
                <div className='product-img-total'>
                    <img className={page === 0 ? 'product__img1' : 'product__img'} src={productInfo?.productImgs[0]} alt="" />
                    <img className={page === 1 ? 'product__img2' : 'product__img'} src={productInfo?.productImgs[1]} alt="" />
                    <img className={page === 2 ? 'product__img3' : 'product__img'} src={productInfo?.productImgs[2]} alt="" />
                </div>
            </div>

            <div className='product-desc__desc'>
                <h2 className='product-desc__name'>{productInfo?.title}</h2>
                <p className='product-desc__description'>{productInfo?.description}</p>
                <div className='product-info__body'>
                    <article className='product-info__rpice'>
                        <h3 className='product-info__price-label'>Price</h3>
                        <span className='product-info__price-value'>{productInfo?.price}</span>
                    </article>
                    <article className='product-info__quantity-gg'>
                        <h3 className='product-info__quantity-label'>Quantity</h3>
                        <div className='product-info__quantity'>
                            <button onClick={handleMinus}>-</button>
                            <div className='product-counter'>{counter}</div>
                            <button onClick={handlePlus}>+</button>
                        </div>
                    </article>
                </div>
                <div onClick={handleAddCart} className='product-desc__add'>
                    <h5>Add to cart</h5>
                    <i className="fa-solid fa-cart-shopping"></i>
                </div>
            </div>
            <div className='similar__principal'>
                <h3 className='similar__items'>Discover similar items</h3>
            </div>
            <div className='filter__products-total'>

                {
                    filteredProducts?.map(prod => (                        
                        < FilterProduct
                            key={prod.id}
                            prod={prod}
                        />
                    ))
                }
            </div>

        </section>
    )
}

export default ProductDescription