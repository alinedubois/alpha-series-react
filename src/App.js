import './App.css';
import {PageAccueil} from "./components/accueil/PageAccueil";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {PageSeries} from "./components/series/PageSeries";

function App() {
    return (
        <BrowserRouter>

            <div className="App">
                <img src="/images/ALPHA.png" alt="Alpha Series"/>

                <Switch>
                    <Route exact path='/' component={PageAccueil} />
                    <Route path='/plateforme/:id' component={PageSeries} />
                </Switch>

            </div>
        </BrowserRouter>
    );
}

export default App;
