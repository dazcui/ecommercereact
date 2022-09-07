import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './shared.css'

const Header = () => {
    const [isMobile, setIsMobile] = useState(false)


    return (
        <header className="header">
            <NavLink to="/">
                <h1 className="header__logo">e-commerce</h1>
            </NavLink>
            <nav className="header__nav">
                <button className='mobile-menu-icon' onClick={()=> setIsMobile(!isMobile)}>
                    {isMobile ? (
                        <i className='fas fa-times'></i>
                    ) : (
                        <i className='fas fa-bars'></i>
                    )}
                </button>
                <ul className={isMobile ? 'nav-links-mobile' : 'nav-links'}
                >
                    <li className="header__item">
                        <NavLink className={({ isActive }) => isActive ? 'active-link' : ''} to="/login">
                            <i className="fa-regular fa-user"></i>
                        </NavLink>
                    </li>
                    <li className="header__item">
                        <NavLink className={({ isActive }) => isActive ? 'active-link' : ''} to="/purchases">
                            <i className="fa-solid fa-shop"></i>
                        </NavLink>
                    </li>
                    <li className="header__item">
                        <h2 className="header__link">
                        <NavLink className={({ isActive }) => isActive ? 'active-link' : ''} to="/cart">
                            <i className="fa-solid fa-cart-arrow-down"></i>
                            </NavLink>
                        </h2>
                    </li>
                </ul>

            </nav>
        </header>

    )
}

export default Header