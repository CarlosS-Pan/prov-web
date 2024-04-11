import './contact-us.css'

const ContactUs = () => {
    return ( 
        <>
        <h1 className="main-container">
            <div className="container-top">
                <div className='title-container'>
                    <h1 className='title'>
                        Let's work together<span className="highlight-dot">.</span>
                    </h1>
                    <p>
                        Or reach us on: <a href="mailto:hola@gmail.com" target='_blank'>hola@gmail.com</a>
                    </p>
                </div>
            </div>
        </h1>
        </>
    );
}
 
export default ContactUs;