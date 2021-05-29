import {ChoixPlateforme} from "./ChoixPlateforme";
import styled from "styled-components";

export const PageAccueil = () => {

    const TitreAccueil = styled.h1`
        color: white;
    `;
    return (
        <div>
            <TitreAccueil>Veuillez choisir votre plateforme</TitreAccueil>
            <ChoixPlateforme/>
        </div>
    )
}