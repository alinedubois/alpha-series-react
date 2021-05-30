import "./PageDetailSerie.css";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Error, ErrorComponent} from "../Error";
import {ChevronLeft, FavoriteBorder} from "@material-ui/icons";
import Rating from '@material-ui/lab/Rating';
import {Link} from "react-router-dom";
import styled from "styled-components";

interface PageDetailSerieRouteParams {
    plateformeId : string;
    serieId: string;
}

interface Show {
    title: string;
    seasons: string;
    episodes: string;
    genres: any;
    notes: Notes;
    description: string;
    next_trailer: string;
    images: Images;
    creation: string;
}

interface Notes {
    mean: number;
}

interface Images {
    poster: string;
}

interface ShowResponse {
    show: Show;
}
export const PageDetailSerie = () => {
    let {plateformeId, serieId} = useParams<PageDetailSerieRouteParams>();

    const [detailSerie, setDetailSerie] = useState<Show|null>(null);
    const [detailSerieLoaded, setDetailSerieLoaded] = useState(false);
    const [detailSerieError, setDetailSerieError] = useState<Error|null>(null);

    useEffect(() => {
        fetch(`https://api.betaseries.com/shows/display?id=${serieId}&key=2e8cf8325587`)
            .then((res) => res.json())
            .then((result: ShowResponse) => {
                    setDetailSerie(result.show);
                    setDetailSerieLoaded(true);
                },
                (error) => {
                    setDetailSerieError(error);
                    setDetailSerieLoaded(true);
                }
            ).catch(error => console.error(error.message))
    }, [serieId]);

    if (detailSerieError) {
        return <ErrorComponent error={detailSerieError}/>;
    } else if (!detailSerieLoaded) {
        return <div>Chargement en cours...</div>;
    } else {

        const PageDetailSerie = styled.div`
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 30px;
        `;

        const DetailsSerie = styled.div`
            display: flex;
            flex-direction: row;
            justify-content: center;
            gap: 30px;
            width: 520px;
        `;

        const ImageFavori = styled.div`
            display: flex;
            flex-direction: column;
        `;

        const Image = styled.img`
            width: 250px;
            height: 350px;
        `;

        const CaracteristiquesSerie = styled.div`
            display: flex;
            flex-direction: column;
            text-align: left;
            gap: 10px;
        `;

        const TitreSerie = styled.div`
            font-size: 40px;
        `;

        const Favori = styled.div`
            display: flex;
            flex-direction: row;
            color: #ffcd05;
        `;

        const ResumeSerie = styled.div`
            text-align: left;
            width: 520px;
        `;

        const BandeAnnonce = styled.iframe`
            width: 520px;
            height: 390px;
        `;

        return (

            <PageDetailSerie>
                <Link to={`/plateforme/${plateformeId}`}>
                    <ChevronLeft className="back"/>
                </Link>


                <DetailsSerie>
                    <ImageFavori>
                        <Image src={detailSerie?.images.poster} alt={detailSerie?.title}/>
                    </ImageFavori>

                    <CaracteristiquesSerie>
                        <TitreSerie>{detailSerie?.title}</TitreSerie>
                        <div>Date de première diffusion : {detailSerie?.creation}</div>
                        <div>{detailSerie?.seasons} saisons</div>
                        <div>{detailSerie?.episodes} épisodes</div>
                        <div>Genre(s) :&#160;
                            {Object.keys(detailSerie?.genres).map((genre: string) => detailSerie?.genres[genre]).join(', ')}
                        </div>
                        <Rating name="read-only" value={detailSerie?.notes.mean} readOnly/>
                        <Favori>
                            <FavoriteBorder/>
                        </Favori>
                    </CaracteristiquesSerie>
                </DetailsSerie>
                <ResumeSerie>{detailSerie?.description}</ResumeSerie>

                {detailSerie?.next_trailer !== null && <BandeAnnonce
                    title="bande-annonce"
                    src={`https://www.youtube.com/embed/${detailSerie?.next_trailer}?rel=0&amp;showinfo=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Falpha-series.netlify.app`}
                    frameBorder="0"
                    allow="encrypted-media"
                    allowFullScreen={false}></BandeAnnonce>}


            </PageDetailSerie>
        )
    }
}