import '../navbar.css'

const Sections = () => {
    return (
      <>
        <div className="navbar-links">
          <ul className="navbar-links_container">
            <li>
              <a className="navigation-link" href="/">Home</a>
            </li>
            <li>
              <a className="navigation-link" href="/products">Products</a>
            </li>
            <li>
              <a className="navigation-link" href="/services">Services</a>
            </li>
            <li>
              <a className="navigation-link" href="/about-us">About Us</a>
            </li>
            <li>
              <a className="navigation-link" href="/contact-us">Contact Us</a>
            </li>
          </ul>
        </div>
      </>
  )
}

export default Sections;