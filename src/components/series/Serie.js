import "./Serie.css";
import {Link} from "react-router-dom";

export const Serie = ({poster, title, id, suppressionSerie}) => {
    return (
        <Link to={`/serie/${id}`}>
            <div className="serie" /*onClick={()=>suppressionSerie(id)}*/>
                <img className="image-serie" src={poster} alt={title}/>
            </div>
        </Link>
    )
}