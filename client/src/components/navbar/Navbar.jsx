// import React from 'react'
// import { RiMenu3Line, RiCloseLin } from 'reaact-icons/ri';
import './navbar.css'
import { useState, useEffect } from "react";
import { Sections } from "./Sections.jsx";
import { Logo } from "./Logo";

function Navbar() {

  const [scrolling, setScrolling] = useState(false)

  useEffect(() => {
    function handleScroll() {
      if (window.scroll > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    }
  
    window.addEventListener("scroll", handleScroll);

    return() => {
      window.removeEventListener("scroll", handleScroll);
    };
    
  }, []);
  
  return (
    <header className={`header${scrolling ? "scrolled" : ""}`}>
      <Logo />
      <Sections />
    </header>
  );
}

export default Navbar