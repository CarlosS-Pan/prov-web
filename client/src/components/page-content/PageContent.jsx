import "./page-content.css";
import { Welcome, Aboutus, Photos } from "./smaller-components";


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