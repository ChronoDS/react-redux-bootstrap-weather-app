
// export const updateFavoriteItem = (favorites, favItem) => ({
//     type: 'UPDATE_FAVORITE',
//     favorites: favorites.map(favorite => {
//             if (favorite.id !== favItem.id) {
//                 return favorite;
//             }
//             return {
//                 ...favorite,
//                 temperature: favItem.temperature,
//                 WeatherText: favItem.WeatherText,
//                 WeatherIcon: favItem.WeatherIcon
//             }
//         }
//     )
// });

export const addToFavorites = (cityId, city, originCountry,
                               weatherText, weatherIcon, temperature) =>
    ({
        type: 'ADD_FAVORITE',
        CityId: cityId,
        City: city,
        OriginCountry: originCountry,
        Temperature: temperature,
        WeatherText: weatherText,
        WeatherIcon: weatherIcon
    });

export const removeFromFavorites = (cityId) =>
    ({
        type: 'REMOVE_FAVORITE',
        CityId: cityId,
    });


export const updateCurrentLocation5daysWeather = next5daysForecast =>
    ({
        type: 'UPDATE_CURRENTS_WEEK_ENTIRELY',
        DailyForecasts: next5daysForecast
    });

export const updateCurrentCityGeneralInfo = generalInfo =>
    ({
        type: 'UPDATE_CURRENT_CITY_INFO',
        City: generalInfo.EnglishName,
        CityId: generalInfo.Key,
        OriginCountry: generalInfo.Country.EnglishName,
    });

export const updateCurrentCityWeatherInfo = weatherInfo =>
    ({
        type: 'UPDATE_CURRENT_CITY_CONDITIONS',
        WeatherText: weatherInfo.WeatherText,
        WeatherIcon: weatherInfo.WeatherIcon,
        Temperature: weatherInfo.Temperature.Metric.Value,
        IsDayTime: weatherInfo.IsDayTime
    });

export const appendAutoCompleteOptions = queryBasedOptions =>
    ({
        type: 'ADD_SEARCH_OPTIONS',
        options: queryBasedOptions,
        isLoading: false
    });

export const setQueryLoadingState = isQueryDataLoading =>
    ({
        type: 'SET_IS_LOADING',
        isLoading: isQueryDataLoading
    });

export const updateCurrentCityInfoOffOfAutoComplete = selectionData =>
    ({
        type: 'UPDATE_CURRENT_CITY_INFO',
        City: selectionData.LocalizedName,
        CityId: selectionData.Key,
        OriginCountry: selectionData.Country.LocalizedName,
    });

export const toggleThemeState = isLightTheme => ({type: 'TOGGLE_THEME'});

export const toggleTempState = isTempCelsius => ({type: 'TOGGLE_TEMP'});
