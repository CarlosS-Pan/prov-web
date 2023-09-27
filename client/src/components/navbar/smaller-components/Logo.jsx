import '../navbar.css'
import { Link } from "react-router-dom";
import companyLogo from '../../../assets/logo.svg'

export default function Logo() {
    return (
    <div className="logo-container">
      <div className="logo">
        <Link to="/">
          <img src= {companyLogo} alt="Logo" />
          </Link> 
      </div>
    </div>)
  }