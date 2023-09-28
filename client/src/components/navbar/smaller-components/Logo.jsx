import '../navbar.css'
import { Link } from "react-router-dom";
import { logo } from '../../../assets'

const Logo = () => {
    return (
    <div className="logo_container">
      <div className="logo">
        <Link to="/">
          <img src= {logo} alt="Logo" />
          </Link> 
      </div>
    </div>
    )
  }

export default Logo;