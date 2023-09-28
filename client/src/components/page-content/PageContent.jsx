import "./page-content.css";
import { snowflake } from "../../assets";
const Welcome = () => {
    return(
    <div className="welcome-container">
        <div className="welcome-description">
            asdfasdf, asdfa  asdfa asdfa ,asdfa asdfa ,asdfaasdfaasdfa, asdfa
            sdafasdfaasdfaasdfa asdfa asdfaasdfa  asdfaasdfaasdfa
            asdfsadfasdf
            asdfasdfasdfasdf
            asdfasdf
        </div>
    </div>
    )
}

const Aboutus = () => {
    return (
        <>
            <div className="aboutus-container">
                <div className="snowflake-icon_container">
                    <div className="snowflake-icon">
                        <img src = { snowflake } alt="snowflake" />
                    </div>
                </div>
                <div className="description_container">
                    <div className="description-abtus">
                        hola amigos de youtube otra vez en un nuevo en directo del gta 5
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad nulla pariatur.
                    </div>
                </div>
            </div>
        </>
    )
}

const PageContent = () => {
    return (
        <>
            <div className="content">
                <Welcome />
                <Aboutus />
            </div>
        </>
    )
}

export default PageContent;