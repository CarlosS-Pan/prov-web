import '../navbar.css'
import { Link } from "react-router-dom";

const Sections = () => {
    return (
      <>
        <div className="navbar-links">
          <ul className="navbar-links_container">
            <li>
              <Link className="navigation-link" to="/">Home</Link>
            </li>
            <Link className="navigation-link" to="/products">
              <p>Products</p>
            </Link>
            <li>
              <Link className="navigation-link" to="/services">Services</Link>
            </li>
            <li>
              <Link className="navigation-link" to="/about-us">About Us</Link>
            </li>
            <li>
              <Link className="navigation-link" to="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </div>
      </>
  )
}

export default Sections;