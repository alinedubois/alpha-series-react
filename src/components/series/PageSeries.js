import "./PageSeries.css";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Serie} from "./Serie";
import {FormControl, InputLabel, MenuItem, Select, TextField} from "@material-ui/core";
import {Error} from "../Error";

export const PageSeries = () => {
    let {id} = useParams();

    const [seriesLoaded, setSeriesLoaded] = useState(false);
    const [genresLoaded, setGenresLoaded] = useState(false);
    const [seriesError, setSeriesError] = useState(null);
    const [genresError, setGenresError] = useState(null);
    const [series, setSeries] = useState([]);
    const [recherche, setRecherche] = useState("");
    const [genres, setGenres] = useState([]);
    const [genreSelectionne, setGenreSelectionne] = useState("");


    useEffect(() => {
        fetch(`https://api.betaseries.com/search/shows?svods=${id}&key=2e8cf8325587`)
            .then((res) => res.json())
            .then((result) => {
                    setSeriesLoaded(true);
                    setSeries(result.shows);
                },
                (error) => {
                    setSeriesLoaded(true);
                    setSeriesError(error);
                }
            )
    }, [id])

    useEffect(() => {
        fetch(`https://api.betaseries.com/shows/genres?key=2e8cf8325587`)
            .then((res) => res.json())
            .then((result) => {
                    setGenresLoaded(true);
                    setGenres(result.genres);
                },
                (error) => {
                    setGenresLoaded(true);
                    setGenresError(error);
                }
            )
    }, [])


    if (seriesError) {
        return <Error error={seriesError}/>;
    } else if (genresError) {
        return <Error error={genresError}/>
    } else if (!seriesLoaded || !genresLoaded) {
        return <div>Chargement en cours...</div>;
    } else {
        return (
            <div className="pageSeries">

                <div className="filtreSeries">
                    <TextField label="Recherche"
                               value={recherche}
                               onChange={(event => setRecherche(event.target.value))}
                               autoFocus
                    />

                    <FormControl>
                        <InputLabel id="select-genre-label">Genre</InputLabel>
                        <Select className="select-genre"
                                labelId="select-genre-label"
                                id="select-genre"
                                value={genreSelectionne}
                                onChange={(event => setGenreSelectionne(event.target.value))}
                                autoWidth
                        >
                            <MenuItem value="">
                                Aucun
                            </MenuItem>
                            {Object.keys(genres)
                                .map((genre, index) =>
                                    <MenuItem
                                        key={`genre-${index}`}
                                        value={genre}>{genres[genre]}
                                    </MenuItem>
                                )}
                        </Select>
                    </FormControl>
                </div>

                <div className="affichageSeries">
                    {series
                        .filter(serie => {
                            if (recherche === '') {
                                return true
                            } else {
                                return serie.title.toLowerCase().includes(recherche.toLowerCase())
                            }

                        })
                        .map((serie, index) =>
                            <Serie
                                key={`serie-${index}`}
                                id={serie.id}
                                title={serie.title}
                                poster={serie.poster}
                            />
                        )}
                </div>
            </div>
        );

    }
}
