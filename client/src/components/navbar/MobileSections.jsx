import './navbar.css'

export function Mobilesections() {
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
    )
}