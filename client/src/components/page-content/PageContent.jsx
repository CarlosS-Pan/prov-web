import "./page-content.css";
import { Welcome, Aboutus, Photos, Contact, Brands } from "./smaller-components";


const PageContent = () => {
    return (
        <>
            <div className="content">
                <Welcome />
                <Aboutus />
                <Photos />
                <Contact />
                <Brands />
            </div>
        </>
    )
}

export default PageContent;