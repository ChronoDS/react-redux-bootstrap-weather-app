//
// export const addFavorite = (fav) => ({
//     type: 'ADD_FAVORITE',
//     id: fav.id,
//     city: fav.city,
//     temperature: fav.temperature,
//     WeatherText: fav.WeatherText,
//     WeatherIcon: fav.WeatherIcon
// });
//
// export const toggleTemperature = () => ({
//     type: 'TOGGLE_TEMP',
//     isCelsius: !this.props.isCelsius
// });
//
// export const toggleTheme = () => ({
//     type: 'TOGGLE_THEME',
//     isLightTheme: !this.props.isLightTheme
// });
//
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
                               weatherText, weatherIcon, temperature) => ({
    type: 'ADD_FAVORITE',
    CityId: cityId,
    City: city,
    OriginCountry: originCountry,
    Temperature: temperature,
    WeatherText: weatherText,
    WeatherIcon: weatherIcon
});

export const removeFromFavorites = (cityId) => ({
    type: 'REMOVE_FAVORITE',
    CityId: cityId,
});
