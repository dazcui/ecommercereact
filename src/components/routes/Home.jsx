import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../store/slices/products.slice'
import CardHome from '../home/CardHome'
import FormFiltro from '../home/FormFiltro'
import './route.css'
import InputSearch from '../home/ImputSearch'
import PriceFilter from '../home/PriceFilter'

const Home = () => {

  //search
  const [inputSearch, setInputSearch] = useState('')      
  const [filterProducts, setFilterProducts] = useState()  
  const [objFilterPrice, setfobjFilterPrice] = useState()
  useEffect(() => {
    if (inputSearch.length != 0) {
      const filter = products?.filter(e => e.title.toLowerCase().includes(inputSearch.toLowerCase()))
      setFilterProducts(filter)
    } else {
      setFilterProducts('')
    }
  }, [inputSearch])



//global
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllProducts())
  }, [])

  const products = useSelector(state => state.products)
  //filtro por price
  useEffect(() => {
   const filter = products?.filter(e=>{
    if (objFilterPrice.from && objFilterPrice.to) {
       return Number(e.price)>=objFilterPrice.from && Number(e.price)<= objFilterPrice.to
    }else if (objFilterPrice.from && !objFilterPrice.to) {
      return Number(e.price)>=objFilterPrice.from
    }else if (objFilterPrice.from && !objFilterPrice.to) {
      return Number(e.price)<=objFilterPrice.from
    }else {
      return true
    }
   } )
   setFilterProducts(filter)
  }, [objFilterPrice])
  

  return (
    <div className='home'>      
      <div className='home__container-form'>
        <InputSearch setInputSearch={setInputSearch} />
        <PriceFilter  setfobjFilterPrice={setfobjFilterPrice}/>
        <FormFiltro />
      </div>
      <div className='home__container-cartd'>
        {
          filterProducts ?
            filterProducts?.map(product => (
              <CardHome
                key={product.id}
                product={product}
              />
            ))
            :
            products?.map(product => (
              <CardHome
                key={product.id}
                product={product}
              />
            ))
        }
      </div>
    </div>
  )
}

export default Home