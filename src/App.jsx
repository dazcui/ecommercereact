import axios from 'axios'
import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import ProductCartInfo from './components/cart/ProductCartInfo'
import Home from './components/routes/Home'
import Login from './components/routes/Login'
import ProductDetail from './components/routes/ProductDetail'
import ProtectedRoutes from './components/routes/ProtectedRoutes'
import Purchases from './components/routes/Purchases'
import Cart from './components/shared/Cart'
import Header from './components/shared/Header'

function App() {



  // useEffect(() => {
  //   const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/users'
  //   const obj = {
  //     firstName: 'DavidAz',
  //     lastName: 'AzcuiDa',
  //     email: 'david_az@gmail.com',
  //     password: '123456davi',
  //     phone: '1234508795',
  //     role: 'admini'
  //   }
  //   axios.post(URL, obj)
  //     .then(res => console.log(res.data))
  //     .catch(err => console.log(err))
  // }, [])



  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/product/:id' element={<ProductDetail />} />
        <Route element={<ProtectedRoutes />}>
          <Route path='/purchases' element={<Purchases />} />
          <Route path='/cart' element={<Cart />} />
        </Route>
      </Routes>
      
      <footer className='footer-products'>
        <div className="institution-class">
          <h5> © Academlo 2022</h5>
        </div>
        <div className='footer-products__gg'>
          <div className="instagram">
            <i className="fa-brands fa-instagram"></i>
          </div>
          <div className="linkedin">
            <i className="fa-brands fa-linkedin-in"></i>
          </div>
          <div className="youtube">
            <i className="fa-brands fa-youtube"></i>
          </div>
        </div>

      </footer>
    </div>

  )
}

export default App
