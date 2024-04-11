import { Link } from 'react-router-dom';
import './footer-nav.css'

const FooterNav = () => {
    return ( 
        <>
        <div className='footer'>
            Website by: <Link to="https://github.com/CarlosS-Pan/prov-web" target='_blank'>Carlos Sanabria</Link>
        </div>
        </>
    );
}
 
export default FooterNav;