import "./page-content.css";
import { Welcome, Aboutus } from "./smaller-components";

const Photos = () => {
    return (
        <>
        <div className="carousel-container">

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
                <Photos />
            </div>
        </>
    )
}

export default PageContent;