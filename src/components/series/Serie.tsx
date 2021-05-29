import "./Serie.css";
import {Link} from "react-router-dom";

interface SerieProps {
    poster: string;
    title: string;
    id: string;
    plateformeId: string;
}

export const Serie = ({poster, title, id, plateformeId}: SerieProps) => {
    return (
        <Link to={`/plateforme/${plateformeId}/serie/${id}`}>
            <div className="serie">
                <img className="image-serie" src={poster} alt={title}/>
            </div>
        </Link>
    )
}