import "./PageSeries.css";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Plateforme} from "../accueil/Plateforme";
import {Serie} from "./Serie";

export const PageSeries = () => {
    let { id } = useParams();

    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);
    const [series, setSeries] = useState([]);


    useEffect(() => {
        fetch(`https://api.betaseries.com/search/shows?svods=${id}&key=2e8cf8325587`)
            .then((res) => res.json())
            .then((result) => {
                    setIsLoaded(true);
                    setSeries(result.shows);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Chargement des séries...</div>;
    } else {
        return (
            <div className="pageSeries">
                {series
                    .map((serie, index) =>
                        <Serie
                            key={`serie-${index}`}
                            id={serie.id}
                            title={serie.title}
                            poster={serie.poster}
                        />
                    )}
            </div>
        );
    }
}
