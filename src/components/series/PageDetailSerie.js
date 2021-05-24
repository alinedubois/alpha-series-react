import "./PageDetailSerie.css";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Error} from "../Error";
import {Button} from "@material-ui/core";
import {ChevronLeft, FavoriteBorder} from "@material-ui/icons";
import Rating from '@material-ui/lab/Rating';


export const PageDetailSerie = () => {
    let {plateformeId, serieId} = useParams();

    const [detailSerie, setDetailSerie] = useState(null);
    const [detailSerieLoaded, setDetailSerieLoaded] = useState(false);
    const [detailSerieError, setDetailSerieError] = useState(null);

    useEffect(() => {
        fetch(`https://api.betaseries.com/shows/display?id=${serieId}&key=2e8cf8325587`)
            .then((res) => res.json())
            .then((result) => {
                    setDetailSerie(result.show);
                    setDetailSerieLoaded(true);
                },
                (error) => {
                    setDetailSerieError(error);
                    setDetailSerieLoaded(true);
                }
            ).catch(error => console.log("toto"))
    }, [serieId]);

    if (detailSerieError) {
        return <Error error={detailSerieError}/>;
    } else if (!detailSerieLoaded) {
        return <div>Chargement en cours...</div>;
    } else {

        return (

            <div className="PageDetailSerie">

                <ChevronLeft className="back"/>

                <div className="details-serie">
                    <div className="image-favori">
                        <img className="image" src={detailSerie?.images.poster} alt={detailSerie?.title}/>

                    </div>

                    <div className="caracteristiques-serie">
                        <div className="titre-serie">{detailSerie?.title}</div>
                        <div className="date-creation">Date de première diffusion : {detailSerie?.creation}</div>
                        <div className="nombre-saisons">{detailSerie?.seasons} saisons</div>
                        <div className="nombre-episodes">{detailSerie?.episodes} épisodes</div>
                        <div className="genres">Genre(s) :&#160;
                            {Object.keys(detailSerie.genres).map(genre => detailSerie.genres[genre]).join(', ')}
                        </div>
                        <Rating name="read-only" value={detailSerie.notes.mean} readOnly/>
                        <div className="favori">
                            <FavoriteBorder/>
                        </div>
                    </div>
                </div>
                <div className="resume-serie">{detailSerie?.description}</div>
                <div className="trailer"></div>

            </div>
        )
    }
}