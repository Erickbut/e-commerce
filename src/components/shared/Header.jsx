import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../shared/styles/header.css'

const Header = () => {
  return (
    <header className='header'>
      <h1 className='header__title'>
        <Link className='link-header__ecommerce' to='/'>e-Commerce</Link>
      </h1>
      <nav className='header__nav'>
        <ul className='header__list'>
          <li className='header__item'>
            <NavLink to='/login'>
            <i className="header__link fa-solid fa-solid fa-user"></i>
            </NavLink>
          </li>
          <li className='header__item'>
            <NavLink to='/purchases'>
            <i className="header__link fa-solid fa-store"></i>
            </NavLink>
          </li>
          <li className='header__item'>
            <NavLink to='/cart'>
            <i className="header__link fa-solid fa-cart-plus"></i>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>)
}

export default Header