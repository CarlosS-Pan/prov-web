import './navbar.css'
import { useState, useEffect } from "react";
import { Sections, Logo, MobileSections} from "./smaller-components";

const Navbar = () => {

  const [scrolling, setScrolling] = useState(false)

  useEffect(() => {
    function handleScroll() {
      if (window.scroll > 0) {
        console.log("💩")
        setScrolling(true);
      } else {
        console.log("Not 💩")
        setScrolling(false);
      }
    }
  
    window.addEventListener("scroll", handleScroll);

    return() => {
      window.removeEventListener("scroll", handleScroll);
    };
    
  }, []);
  
  return (
    <header className={'header'}>
      <Logo />
      <Sections />
    </header>
  );
}

export default Navbar;