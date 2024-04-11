import './contact-us.css'
import { Link } from "react-router-dom";

const ContactUs= () => {
    return ( 
        <>
        <div className='contact-container'>
            <div className='content-wrapper'>
                <div className='title-container'>
                    <h1> Want to get in touch ? </h1>
                </div>  
                <div className="text-container">
                    <p> Are you interested in our products or services and would like to know more about our pricing options? Don't hesitate to get in touch with us.</p>
                </div>
                <div className='btn-div'>
                    <Link to="/contact-us">
                        <button className='btn'> Contact us here </button> 
                    </Link>
                </div>
            </div>
        </div>
        </>
    );
}
 
export default ContactUs