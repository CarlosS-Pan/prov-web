// import React from 'react'
// import { RiMenu3Line, RiCloseLin } from 'reaact-icons/ri';
import './navbar.css'
import logo from '../../assets/logo.svg'

function Sections() {
  return (
  <>
    <div className="navbar-links">
      <ul className="navbar-links_container">
        <li>
          <a className="navigation-link" href="#home">Home</a>
        </li>
        <li>
          <a className="navigation-link" href="#products">Products</a>
        </li>
        <li>
          <a className="navigation-link" href="#services">Services</a>
        </li>
        <li>
          <a className="navigation-link" href="#abtus">About Us</a>
        </li>
      </ul>
    </div>
  </>
)}

function Logo() {
  return (
  <div className="logo-container">
    <div className="logo">
      <img src={logo} alt="loading logo" />
    </div>
  </div>)
}

function Navbar() {
  return (
    <header className="header">
      <Logo />
      <Sections />
    </header>
  )
}

export default Navbar