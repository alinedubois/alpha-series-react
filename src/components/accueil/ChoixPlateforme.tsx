import {Plateforme} from "./Plateforme";
import {useEffect, useState} from "react";
import "./ChoixPlateforme.css";
import {Error} from "../Error";


interface PlateformeSeries {
    id: number;
    name: string;
    logo: string;
}

export const ChoixPlateforme = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState<Error|null>(null);
    const [plateformes, setPlateformes] = useState<PlateformeSeries[]>([]);

    useEffect(() => {
        fetch("https://api.betaseries.com/platforms/services?key=2e8cf8325587")
            .then((res) => res.json())
            .then((result) => {
                    setIsLoaded(true);
                    setPlateformes(result.services);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return <div>Erreur : {error?.message}</div>;
    } else if (!isLoaded) {
        return <div>Chargement...</div>;
    } else {


        return (
            <div className="vignettes-plateforme">
                {plateformes
                    .filter((plateforme) => plateforme.logo !== null)
                    .map((plateforme, index) =>
                    <Plateforme
                        key={`plateforme-${index}`}
                    id={plateforme.id}
                    name={plateforme.name}
                    logo={plateforme.logo}
                    />
                )}

            </div>
        )
    }
}