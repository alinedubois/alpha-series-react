import "./Plateforme.css";
import {Link} from "react-router-dom";

interface PlateformeProps {
    id: number;
    name: string;
    logo: string;
}

export const Plateforme = ({id, name, logo}: PlateformeProps) => {
    return (
        <Link to={`/plateforme/${id}`}>
            <div className="plateforme">
                <img className="image-plateforme" src={logo} alt={name}/>
            </div>
        </Link>
    )
}