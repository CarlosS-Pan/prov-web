import "./photos.css";
import { p1, p2, p3, p4, p5 } from "../../../../assets/index";

const Photos = () => {
    return (
        <>
        <div className="wrapper">
            <ul className="carousel">
                <li className="card">
                    {/* <div className="image"> */}
                        <img src={p1} alt="img" />
                    {/* </div> */}
                </li>
                <li className="card">
                    {/* <div className="image"> */}
                        <img src={p2} alt="img" />
                    {/* </div> */}
                </li>
                <li className="card">
                    {/* <div className="image"> */}
                        <img src={p3} alt="img" />
                    {/* </div> */}
                </li>
                <li className="card">
                    {/* <div className="image"> */}
                        <img src={p4} alt="img" />
                    {/* </div> */}
                </li>
                <li className="card">
                    {/* <div className="image"> */}
                        <img src={p5} alt="img" />
                    {/* </div> */}
                </li>
            </ul>
        </div>
        </>
    )
}

export default Photos;