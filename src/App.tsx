import './App.css';
import {PageAccueil} from "./components/accueil/PageAccueil";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {PageSeries} from "./components/series/PageSeries";
import {PageDetailSerie} from "./components/series/PageDetailSerie";

function App() {
    return (
        <BrowserRouter>

            <div className="App">
                <img src="/images/ALPHA.png" alt="Alpha Series"/>

                <Switch>
                    <Route exact path='/' component={PageAccueil} />
                    <Route exact path='/plateforme/:id' component={PageSeries} />
                    <Route exact path='/plateforme/:plateformeId/serie/:serieId' component={PageDetailSerie} />
                </Switch>

            </div>
        </BrowserRouter>
    );
}

export default App;
