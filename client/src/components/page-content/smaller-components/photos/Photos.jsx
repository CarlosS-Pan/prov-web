import "./photos.css";
import { p1, p2, p3, p4, p5 } from "../../../../assets/index";

const Photos = () => {
    return (
        <>
        <div className="photos-container">
            <ul className="carousel">
                <li className="card">
                    {/* <div className="image"> */}
                        <img draggable = "false" src={p1} alt="img" />
                    {/* </div> */}
                </li>
                <li className="card">
                    {/* <div className="image"> */}
                        <img draggable = "false" src={p2} alt="img" />
                    {/* </div> */}
                </li>
                <li className="card">
                    {/* <div className="image"> */}
                        <img draggable = "false" src={p3} alt="img" />
                    {/* </div> */}
                </li>
                <li className="card">
                    {/* <div className="image"> */}
                        <img draggable = "false" src={p4} alt="img" />
                    {/* </div> */}
                </li>
                <li className="card">
                    {/* <div className="image"> */}
                        <img draggable = "false" src={p5} alt="img" />
                    {/* </div> */}
                </li>
            </ul>
        </div>
        </>
    )
}

export default Photos;