import './about-us.css'
import { p1 } from '../../assets/index'
import { handmoney } from '../../assets/index'

const AboutUs = () => {
    return ( 
        <>
            <div className='content-container'>
                <h1 className='content-title'>
                    Who we are<span className="highlight-text-white">?</span>
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
                    <span className="highlight-text"> A Decade of Excellence </span>
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
                <img src={ p1 } alt="guoba" />
                </div>
            </div>
            <div className="reasons-bg">
                <div className="reasons-container">
                    <div className="reasons">
                        
                        <div className='svgs'>
                            <img src={ handmoney } alt="hand" />
                        </div>
                        <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, voluptates exercitationem sequi natus consequuntur eos quo ut ducimus pariatur corporis dolorem dolor culpa autem voluptate, doloribus iste tenetur. Dignissimos, odio.
                        </p>
                    </div>
                    <div className="reasons">
                        <div className="svgs" >
                            <img src={ handmoney } alt="hand" />
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, eos! Autem, cum! Ad repellendus nulla, autem inventore, rem possimus suscipit voluptatibus a, natus nobis voluptate facilis nisi maxime repellat neque!</p>
                    </div>
                    <div className="reasons">
                        <div className="svgs" >
                            <img src={ handmoney } alt="hand" />
                        </div>
                        <p>Sunt id modi incidunt odit illum possimus ad, aspernatur quia nemo aliquid in sint facilis corporis! Aliquam eveniet natus quo. Sit expedita ipsa iure voluptas? Rerum, itaque eos. Laudantium, possimus!</p>
                    </div>
                    <div className="reasons">
                        <div className="svgs">
                            <img src={ handmoney } alt="hand" />
                        </div>
                        <p>Ullam eos molestiae dolor qui enim? Temporibus mollitia quisquam perspiciatis, in vero magni excepturi repudiandae itaque tenetur iure neque vel, aut est, non voluptatum voluptate doloremque amet officiis ab exercitationem.</p>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default AboutUs;