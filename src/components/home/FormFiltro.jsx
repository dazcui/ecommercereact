import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts, getProductByCategory } from '../../store/slices/products.slice'
import './home.css'
const FormFiltro = () => {
    // filtro por categoria
    const [categories, setCategories] = useState()
    useEffect(() => {
        const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/products/categories `
        axios.get(URL)
            .then(res => setCategories(res.data.data.categories))
            .catch(err => console.log(err))
    }, [])

    const dispatch = useDispatch()
    const handleFilterCategory = id => {
        dispatch(getProductByCategory(id))
    }
    const handleClickAllProducts = () => {
        dispatch(getAllProducts())
    }
    // const products =useSelector(state => state.products)


    //filtro por precio

    

    return (
        <div className='formfiltro'>
                        
            <div className='formfiltro__category'>
                <div>
                    <h3>Category</h3>
                </div>
                <ul>
                    <li className='form__filtro-click' onClick={handleClickAllProducts}>All Products</li>
                    {
                        categories?.map(category => (
                            <li className='form__filtro-click' onClick={() => handleFilterCategory(category.id)} key={category.id}>
                                 {category.name}
                            </li>

                        ))
                    }

                </ul>

            </div>
        </div>
    )
}
export default FormFiltro