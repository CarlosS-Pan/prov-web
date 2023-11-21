import "./brands.css"
import {logo1, logo2, logo3, logo4, logo5} from '../../../../assets'

const Brands = () => {
    // const logos = [logo1, logo2, logo3, logo4, logo5]

    return ( 
        <>
        <div className="brands-container">
            {/* {logos.map((logo, index) => ( 
                <div className="brands-wrap" key={index}>
                    <img src={logo} alt={`logo${index + 1}`} />
                </div>
            ))} */}
        

                <div className="brands-wrap">
                    <img src = {logo1} alt="logo1" />
                    <img src = {logo2} alt="logo2" />
                    <img src = {logo3} alt="logo3" />
                    <img src = {logo4} alt="logo4" />
                    <img src = {logo5} alt="logo5" />
                </div>
                <div className="brands-wrap">
                    <img src = {logo1} alt="logo1" />
                    <img src = {logo2} alt="logo2" />
                    <img src = {logo3} alt="logo3" />
                    <img src = {logo4} alt="logo4" />
                    <img src = {logo5} alt="logo5" />
                </div>
        </div>
        </>
    );
}
 
export default Brands;