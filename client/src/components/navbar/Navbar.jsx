import React from 'react'
// import { RiMenu3Line, RiCloseLin } from 'react-icons/ri';
import './navbar.css'
import logo from '../../assets/logo.svg'

function Navbar() {
  return (
    <div className="omniliq__navbar">
      <div className="omniliq__navbar-links">
        <div className="omniliq__navbar-links_logo">
          <img src={logo} alt="loading logo" />
        </div>
        <div className="omniliq__navbar-links_container">
          <a href="#home">Home</a>
          <a href="#products">Products</a>
          <a href="#services">Services</a>
          <a href="#abtus">About Us</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar