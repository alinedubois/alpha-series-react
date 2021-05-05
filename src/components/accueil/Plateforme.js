import "./Plateforme.css";
import {Link} from "react-router-dom";

export const Plateforme = ({id, name, logo}) => {
    return (
        <Link to={`/plateforme/${id}`}>
            <div className="plateforme">
                <img className="image-plateforme" src={logo} alt={name}/>
            </div>
        </Link>
    )
}