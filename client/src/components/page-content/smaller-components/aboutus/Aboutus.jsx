import "./aboutus.css";
import { snowflake } from "../../../../assets";

const Aboutus = () => {
    return (
        <>
            <div className="aboutus-container">
                

                <div className="snowflake-icon_container">
                    {/* {["bigsnowflake", "smallSnowflake", "smallSnowflake"]} */}
                    <div className="snowflake-icon-small snowflakeAnimation">
                        <img src = { snowflake } alt="snowflake" />
                    </div>
                    <div className="snowflake-icon-big">
                        <img src = { snowflake } alt="snowflake" />
                    </div>
                    <div className="snowflake-icon-small reverseSnowflakeAnimation back">
                        <img src = { snowflake } alt="snowflake" />
                    </div>
                </div>


                <div className="description_container">
                    <div className="description-title">
                        ABOUT US
                    </div>
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

export default Aboutus;