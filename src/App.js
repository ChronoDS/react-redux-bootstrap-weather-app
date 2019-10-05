import React from 'react';
import './App.css';
import Navigation from "./components/Navigation";
import { Route } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Home from "./components/Pages/Home";
import Favorites from "./components/Pages/Favorites";
import {connect} from "react-redux";

library.add(fab, fas);

function App() {
    return (
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
    );
}

const mapStateToProps = state => ({
    theme: state.theme
});

export default connect(mapStateToProps)(App);
