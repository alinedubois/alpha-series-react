import {VignettesPlateformes} from "./VignettesPlateformes";
import "./PageAccueil.css";

export const PageAccueil = () => {
    return (
        <div className="page-accueil">

            <h1 className="titre-accueil">Veuillez choisir votre plateforme</h1>

            <VignettesPlateformes/>

        </div>
    )
}