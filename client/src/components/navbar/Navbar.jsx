import './navbar.css'
import { useState, useEffect } from "react";
import Sections from "./smaller-components/Sections";
import Logo from "./smaller-components/Logo";
import MobileSections from "./smaller-components/MobileSections";

const Navbar = () => {

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

export default Navbar;