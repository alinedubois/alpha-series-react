import "./PageDetailSerie.css";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Error} from "../Error";

export const PageDetailSerie = () => {
    let {id} = useParams();

    const [detailSerie, setDetailSerie] = useState(null);
    const [detailSerieLoaded, setDetailSerieLoaded] = useState(false);
    const [detailSerieError, setDetailSerieError] = useState(null);

    useEffect(() => {
        fetch(`https://api.betaseries.com/shows/display?id=${id}&key=2e8cf8325587`)
            .then((res) => res.json())
            .then((result) => {
                    setDetailSerie(result.show);
                    setDetailSerieLoaded(true);
                },
                (error) => {
                    setDetailSerieError(error);
                    setDetailSerieLoaded(true);
                }
            ).catch(error =>                console.log("toto"))
    }, [id]);

    if (detailSerieError) {
        return <Error error={detailSerieError}/>;
    } else if (!detailSerieLoaded) {
        return <div>Chargement en cours...</div>;
    } else {

        return (

            <div className="PageDetailSerie" /*onClick={()=>suppressionSerie(id)}*/>
                <div className="details-serie">
                    <img src={detailSerie?.images.poster} alt={detailSerie?.title}/>
                    <div className="caracteristiques-serie">
                        <div className="titre-serie">{detailSerie?.title}</div>
                        <div className="date-creation">{detailSerie?.creation}</div>
                        <div className="nombre-saisons-episodes">{detailSerie?.seasons}, {detailSerie?.episodes}</div>
                        <div className="genres">
                            {/*{Object.keys(detailSerie.genres).map(genre => detailSerie.genres[genre])}*/}
                        </div>
                    </div>
                </div>
                <div className="description-serie">{detailSerie?.description}</div>
            </div>
        )
    }
}