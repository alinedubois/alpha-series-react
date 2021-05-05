import "./PagePlateforme.css";
import {useParams} from "react-router-dom";

export const PagePlateforme = () => {
    let { id } = useParams();
    return (
        <div className="pagePlateforme">
            Plateforme {id}
        </div>
    );
}
