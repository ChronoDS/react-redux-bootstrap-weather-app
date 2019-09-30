import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import {createStore, combineReducers} from "redux";
import { loadState, saveState } from './components/Utils/localStorage';
import {throttle} from 'lodash';

const initialState = {
    isCelsius: true,
    isLightTheme: true,
    defaultCity: 'Tel-Aviv',
    defaultCityId: 215793,
    favorites: [
        // {
        //     "LocalObservationDateTime": "2019-09-24T13:20:00+03:00",
        //     "EpochTime": 1569320400,
        //     "WeatherText": "Sunny",
        //     "WeatherIcon": 1,
        //     "HasPrecipitation": false,
        //     "PrecipitationType": null,
        //     "IsDayTime": true,
        //     "Temperature": {
        //         "Metric": {
        //             "Value": 29.5,
        //             "Unit": "C",
        //             "UnitType": 17
        //         },
        //         "Imperial": {
        //             "Value": 85,
        //             "Unit": "F",
        //             "UnitType": 18
        //         }
        //     },
        //     "MobileLink": "http://m.accuweather.com/en/il/tel-aviv-port/215793/current-weather/215793?lang=en-us",
        //     "Link": "http://www.accuweather.com/en/il/tel-aviv-port/215793/current-weather/215793?lang=en-us"
        // },
        // {
        //     "LocalObservationDateTime": "2019-09-24T13:20:00+03:00",
        //     "EpochTime": 1569320400,
        //     "WeatherText": "Sunny",
        //     "WeatherIcon": 1,
        //     "HasPrecipitation": false,
        //     "PrecipitationType": null,
        //     "IsDayTime": true,
        //     "Temperature": {
        //         "Metric": {
        //             "Value": 29.5,
        //             "Unit": "C",
        //             "UnitType": 17
        //         },
        //         "Imperial": {
        //             "Value": 85,
        //             "Unit": "F",
        //             "UnitType": 18
        //         }
        //     },
        //     "MobileLink": "http://m.accuweather.com/en/il/tel-aviv-port/215793/current-weather/215793?lang=en-us",
        //     "Link": "http://www.accuweather.com/en/il/tel-aviv-port/215793/current-weather/215793?lang=en-us"
        // }
    ]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_TEMP':
            return {
                isCelsius: !state.isCelsius
            };
        case 'TOGGLE_THEME':
            return {
                isLightTheme: !state.isLightTheme
            };
        case 'ADD_FAVORITE':
            return [
                ...state,
                {
                    id: action.id,
                    city: action.city,
                    temperature: action.temperature,
                    WeatherText: action.WeatherText,
                    WeatherIcon: action.WeatherIcon
                }
            ];
        case 'UPDATE_FAVORITE':
            return state.favorites.map(favorite => {
                if (favorite.id !== action.id) {
                    return favorite;
                }
                return {
                    ...state,
                    temperature: favorite.temperature,
                    WeatherText: action.WeatherText,
                    WeatherIcon: action.WeatherIcon
                }
            }
        );
        case 'REMOVE_FAVORITE':
            return [...state.favorites.slice(0, action.index),
                ...state.favorites.slice(action.index + 1)
            ];
        default:
            return state;
    }
}

const persistedState = loadState();
const store = createStore(
    reducer,
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


store.subscribe(throttle(() => {
    saveState(store.getState());
}, 1000));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
