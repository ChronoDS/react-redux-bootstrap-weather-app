import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import {createStore} from "redux";
import { loadState, saveState } from './components/Utils/localStorage';
import throttle from 'lodash/throttle';

// TODO move entire store and redux logic to dedicated locations.
const initialState = {
    isCelsius: true,
    isLightTheme: true,
    IsDayTime: true,
    currentlyDisplayedCity: 'Tel Aviv',
    currentlyDisplayedCityId: 215854,
    currentlyDisplayedOriginCountry: 'WhoTown',
    currentlyDisplayedWeatherText: 'Sun Gone Nuclear',
    currentlyDisplayedWeatherIcon: '5',
    currentlyDisplayedTemperature: '5000',
    currentlyDisplayedDailyForecasts: [],
    TTL: '', // if TTL < Today -> update, else no.
    isLoading: false,
    options: [],
    favorites: [
        {
            City: 'New JerTest',
            CityId: '159259',
            OriginCountry: 'USA',
            Temperature: 14,
            WeatherText: 'Chilly',
            WeatherIcon: '11'
        },
        {
            City: 'JakaTest',
            CityId: '158259',
            OriginCountry: 'Jakika',
            Temperature: 2500,
            WeatherText: 'Hot!!',
            WeatherIcon: '2'
        },
        {
            City: 'New YorkaTest',
            CityId: '119359',
            OriginCountry: 'USA',
            Temperature: 14,
            WeatherText: 'Chilly',
            WeatherIcon: '11'
        },
        {
            City: 'HaiJakaTest',
            CityId: '158559',
            OriginCountry: 'Jakika',
            Temperature: 2500,
            WeatherText: 'Hot!!',
            WeatherIcon: '2'
        },
    ]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_TEMP':
            return { ...state, isCelsius: !state.isCelsius };
        case 'TOGGLE_THEME':
            return { ...state, isLightTheme: !state.isLightTheme};
        case 'SET_IS_LOADING':
            return { ...state, isLoading: action.isLoading};
        case 'ADD_SEARCH_OPTIONS':
            return {
                ...state,
                options: [
                    ...state.options,
                    ...action.options
                ]
            }
        case 'ADD_FAVORITE':
            const favoriteExists = state.favorites.find( ({ CityId }) => CityId === action.CityId );
            if (favoriteExists !== undefined) {
                return {
                    ...state,
                    favorites: state.favorites.map((value) => {
                        if (value.CityId === action.CityId) {
                            return {
                                ...value,
                                Temperature: action.Temperature,
                                WeatherText: action.WeatherText,
                                WeatherIcon: action.WeatherIcon
                            }
                        }
                        return value;
                    })
                }
            }
            return {
                ...state,
                favorites: [
                    ...state.favorites,
                    {
                        City: action.City,
                        CityId: action.CityId,
                        OriginCountry: action.OriginCountry,
                        Temperature: action.Temperature,
                        WeatherText: action.WeatherText,
                        WeatherIcon: action.WeatherIcon
                    }
                ]
            };
        case 'REMOVE_FAVORITE':
            return {
                ...state,
                favorites: state.favorites
                    .filter(favorite => favorite.CityId !== action.CityId)
            };
        case 'UPDATE_CURRENT_CITY_INFO':
            return {
                ...state,
                currentlyDisplayedCity: action.City,
                currentlyDisplayedCityId: action.CityId,
                currentlyDisplayedOriginCountry: action.OriginCountry
            };
        case 'UPDATE_CURRENT_CITY_CONDITIONS':
            return {
                ...state,
                currentlyDisplayedWeatherText: action.WeatherText,
                currentlyDisplayedWeatherIcon: action.WeatherIcon,
                currentlyDisplayedTemperature: action.Temperature,
                IsDayTime: action.IsDayTime
            };
        case 'UPDATE_CURRENTS_WEEK_ENTIRELY':
            return {
                ...state,
                currentlyDisplayedDailyForecasts: action.DailyForecasts
            };
        // case 'UPDATE_CURRENTS_NEXT_5_DAYS':
        //     const dayExists = state.favorites.find( ({ Date }) => Date === action.Date );
        //     if (dayExists !== undefined) {
        //         return {
        //             ...state,
        //             currentlyDisplayed: {
        //                 ...state.currentlyDisplayed,
        //                 DailyForecasts: state.currentlyDisplayed.DailyForecasts.map((value) => {
        //                     if (value.Date === action.Date && value.CityId === action.CityId) {
        //                         return {
        //                             ...value,
        //                             Temperature: action.Temperature,
        //                             DayIcon: action.Day,
        //                             NightIcon: action.Night
        //                         }
        //                     }
        //                     return value;
        //                 })
        //             }
        //         }
        //     }
        //     return {
        //         ...state,
        //         currentlyDisplayed: {
        //             ...state.currentlyDisplayed,
        //             DailyForecasts: [
        //                 ...state.currentlyDisplayed.DailyForecasts
        //                     .filter(day => day.CityId === action.CityId),
        //                 {
        //                     CityId: action.CityId,
        //                     EpochDate: action.EpochDate,
        //                     Date: action.Date,
        //                     Temperature: action.Temperature,
        //                     DayIcon: action.Day,
        //                     NightIcon: action.Night
        //                 }
        //             ]
        //         }
        //     };
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