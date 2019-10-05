import {initialState} from "./initialState";

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_TEMP':
            return { ...state, isCelsius: !state.isCelsius };
        case 'TOGGLE_THEME':
            return { ...state, theme: action.theme};
        case 'SET_IS_LOADING':
            return { ...state, isLoading: action.isLoading};
        case 'ADD_SEARCH_OPTIONS':
            return {
                ...state,
                options: [
                    ...state.options,
                    ...action.options
                ]
            };
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
                IsDayTime: action.IsDayTime,
                TTL: action.TTL
            };
        case 'UPDATE_CURRENTS_WEEK_ENTIRELY':
            return {
                ...state,
                currentlyDisplayedDailyForecasts: action.DailyForecasts
            };
        default:
            return state || [];
    }
}
