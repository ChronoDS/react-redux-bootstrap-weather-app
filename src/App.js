import React from 'react';
import './App.css';
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

import Home from "./components/Pages/Home";
import Favorites from "./components/Pages/Favorites";

import {createStore}  from 'redux';
import {Provider} from "react-redux";

library.add(fab, fas);

const initialState = {
    count: 0
}

// https://my-json-server.typicode.com/chronosds/<your-repo>

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + 1
            };
        case 'DECREMENT':
            return {
                count: state.count - 1
            };
        case 'TOGGLE_TEMP':
            return {
                isCelsius: !state.isCelsius
            };
        case 'TOGGLE_THEME':
            return {
                isLightTheme: !state.isLightTheme
            };
        default:
            return state;
    }
}
const store = createStore(reducer);

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Navigation>
                    <Route
                        exact={true}
                        path="/:filter?"
                        component={Home}
                    />
                    <Route
                        path={'/favorites'}
                        component={Favorites}
                    />
                </Navigation>
            </Router>
        </Provider>
    );
}

export default App;
