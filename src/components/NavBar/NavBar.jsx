import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import "./NavBar.css"

const NavBar = () => {
  return (
    <header className='header'>
      <h1>Irenoved</h1>
    <nav className='NavBarList'>
      <ul>
        <a href=""><li>Iphones</li></a>
        <a href=""><li>Accesorios</li></a>
        <a href=""><li>AirPods</li></a>
      </ul>
    </nav>
    
    <CartWidget/>
    
    </header>
  )
}

export default NavBar
