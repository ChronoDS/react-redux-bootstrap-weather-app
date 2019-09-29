import React from 'react'
import './Favorites.scss'
import FavoriteItem from "../Common/FavoriteItem";

const favoriteLocations = [
    {title: 'Tel-Aviv', temperature: '27', description: 'Sunny', image: '', op: '0.5'},
    {title: 'Haifa', temperature: '21', description: 'Smoggy', image: ''},
    {title: 'Ariel', temperature: '16', description: 'Chilly', image: ''},
    {title: 'Jerusalem', temperature: '14', description: 'Getting Cold Out Here', image: ''},
    {title: 'Netanya', temperature: '23', description: 'Nice and Sunny', image: ''},
    {title: 'Eilat', temperature: '42', description: 'Hot!!', image: ''},
    {title: 'Be\'er-Sheva', temperature: '16', description: 'Chilly', image: ''},
    {title: 'Herzliya', temperature: '25', description: 'Nice and Sunny', image: ''}
]

// const favoriteLocations = [
//     {
//         "LocalObservationDateTime": "2019-09-24T13:20:00+03:00",
//         "EpochTime": 1569320400,
//         "WeatherText": "Sunny",
//         "WeatherIcon": 1,
//         "HasPrecipitation": false,
//         "PrecipitationType": null,
//         "IsDayTime": true,
//         "Temperature": {
//             "Metric": {
//                 "Value": 29.5,
//                 "Unit": "C",
//                 "UnitType": 17
//             },
//             "Imperial": {
//                 "Value": 85,
//                 "Unit": "F",
//                 "UnitType": 18
//             }
//         },
//         "MobileLink": "http://m.accuweather.com/en/il/tel-aviv-port/215793/current-weather/215793?lang=en-us",
//         "Link": "http://www.accuweather.com/en/il/tel-aviv-port/215793/current-weather/215793?lang=en-us"
//     }
// ]

class Favorites extends React.Component{
    render() {
        return (
            <div>
                <section className="favorites-section py-4 bg-black">
                    <div className="container">
                        <div className="row">
                            {favoriteLocations.map((location, index) => {
                                return <FavoriteItem {...location} key={index} />
                            })}
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Favorites;
