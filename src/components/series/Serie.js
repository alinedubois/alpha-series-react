import "./Serie.css";
import {Link} from "react-router-dom";

export const Serie = ({poster, title, id, plateformeId}) => {
    return (
        <Link to={`/plateforme/${plateformeId}/serie/${id}`}>
            <div className="serie">
                <img className="image-serie" src={poster} alt={title}/>
            </div>
        </Link>
    )
}