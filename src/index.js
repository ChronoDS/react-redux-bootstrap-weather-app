import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import {createStore} from "redux";
import { loadState, saveState } from './components/Utils/localStorage';
import throttle from 'lodash/throttle';


const initialState = {
    isCelsius: true,
    isLightTheme: true,
    defaultCity: 'Tel Aviv',
    defaultCityId: 215854,
    currentlyDisplayed: {
        City: 'cityT',
        CityId: 111999,
        OriginCountry: 'WhoTown',
        WeatherText: 'Sun Gone Nuclear',
        WeatherIcon: '5',
        Temperature: '5000'
    },
    favorites: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_TEMP':
            return Object.assign({},
                state,
                {isCelsius: !state.isCelsius});
        case 'TOGGLE_THEME':
            return Object.assign({},
                state,
                {isLightTheme: !state.isLightTheme});
        case 'ADD_FAVORITE':
            return Object.assign({},
                state,
                {
                    favorites: [
                        ...state.favorites,
                        {
                            id: action.CityId,
                            City: action.City,
                            CityId: action.CityId,
                            OriginCountry: action.OriginCountry,
                            Temperature: action.Temperature,
                            WeatherText: action.WeatherText,
                            WeatherIcon: action.WeatherIcon
                        }
                    ]
                }
            );
        case 'UPDATE_CURRENT_CITY_INFO':
            return Object.assign({},
                state,
                {
                    currentlyDisplayed: Object.assign({},
                        state.currentlyDisplayed,
                        {
                            City: action.City,
                            CityId: action.CityId,
                            OriginCountry: action.OriginCountry
                        }
                    )
                }
            );
        case 'UPDATE_CURRENT_CITY_CONDITIONS':
            return Object.assign({},
                state,
                {
                    currentlyDisplayed: Object.assign({},
                        state.currentlyDisplayed,
                        {
                            WeatherText: action.WeatherText,
                            WeatherIcon: action.WeatherIcon,
                            Temperature: action.Temperature
                        }
                    )
                }
            );
        default:
            return state || [];
    }
}

const persistedState = loadState();
const store = createStore(
    reducer,
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(throttle(() => {
    saveState(store.getState());
}, 1000));

ReactDOM.render(
    <Provider store={store}>
        {/*{localStorage.clear()}*/}
        <App />
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
