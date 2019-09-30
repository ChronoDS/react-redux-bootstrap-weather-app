import React from 'react';
import './App.css';
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Home from "./components/Pages/Home";
import Favorites from "./components/Pages/Favorites";

library.add(fab, fas);

function App() {
    return (
        <Router>
            <Navigation>
                <Route
                    exact={true}
                    path="/"
                    component={Home}
                />
                <Route
                    path={'/favorites'}
                    component={Favorites}
                />
            </Navigation>
        </Router>
    );
}

export default App;
