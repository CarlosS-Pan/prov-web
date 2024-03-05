import './about-us.css'
import { p1 } from '../../assets/index'

const AboutUs = () => {
    return ( 
        <>
            <div className='content-container'>
                <h1 className='content-title'>
                    Who we are ?
                </h1>
                <div className="summary-container">
                    <p>
                    Welcome to SmartReefer, your trusted partner 
                    in refrigerated unit repairs and premier supplier 
                    of spare parts for trailers and reefers.
                    </p>
                </div>
            </div>
            <div className="extended-container">
                <div className="extended-content">
                    {/* <h2 className="extended-title"> */}
                    <h2>
                    <span className="esteinline"> A Decade of Excellence </span>
                    in Refrigerated Unit Repairs and Parts Distribution.
                    </h2>
                    {/* <p className="extended-description"> */}
                    <p>
                        For a decade, SmartReefer has led Florida's 
                        refrigerated transportation. 
                        Specializing in trailer refrigerated unit repairs, 
                        our excellence extends to seamless supply chains 
                        through key partnerships.
                    </p>
                    <p>
                        Fluent in English and Spanish, our team drives 
                        reliability, offering solutions beyond repairs. 
                        At SmartReefer, we shape the future of refrigerated 
                        transportation with experience and dedication to keep your 
                        business moving forward
                    </p>
                </div>        
                <div className="extended-photo">
                <img src={ p1 } alt="choppa" />
                </div>
            </div>
        </>
    );
}
 
export default AboutUs;