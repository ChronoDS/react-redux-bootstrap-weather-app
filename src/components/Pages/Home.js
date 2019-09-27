import React from 'react';
import './Home.scss';
import Header from "../Common/Header";
import axios from "axios";
import NextDays from "../Common/NextDays";
// import defaultLocation from '../../assets/jsonExamples/defaultLocation'

const defaultLocation = [
    {
        "LocalObservationDateTime": "2019-09-24T13:20:00+03:00",
        "EpochTime": 1569320400,
        "WeatherText": "Sunny",
        "WeatherIcon": 1,
        "HasPrecipitation": false,
        "PrecipitationType": null,
        "IsDayTime": true,
        "Temperature": {
            "Metric": {
                "Value": 29.5,
                "Unit": "C",
                "UnitType": 17
            },
            "Imperial": {
                "Value": 85,
                "Unit": "F",
                "UnitType": 18
            }
        },
        "MobileLink": "http://m.accuweather.com/en/il/tel-aviv-port/215793/current-weather/215793?lang=en-us",
        "Link": "http://www.accuweather.com/en/il/tel-aviv-port/215793/current-weather/215793?lang=en-us"
    }
]

// const next5DaysPredictionOLD = {
//     "Headline": {
//         "EffectiveDate": "2019-09-28T08:00:00+03:00",
//         "EffectiveEpochDate": 1569646800,
//         "Severity": 4,
//         "Text": "Pleasant this weekend",
//         "Category": "",
//         "EndDate": null,
//         "EndEpochDate": null,
//         "MobileLink": "http://m.accuweather.com/en/il/tel-aviv-port/215793/extended-weather-forecast/215793?unit=c&lang=en-us",
//         "Link": "http://www.accuweather.com/en/il/tel-aviv-port/215793/daily-weather-forecast/215793?unit=c&lang=en-us"
//     },
//     "DailyForecasts": [
//         {
//             "Date": "2019-09-25T07:00:00+03:00",
//             "EpochDate": 1569384000,
//             "Temperature": {
//                 "Minimum": {
//                     "Value": 21.8,
//                     "Unit": "C",
//                     "UnitType": 17
//                 },
//                 "Maximum": {
//                     "Value": 30.5,
//                     "Unit": "C",
//                     "UnitType": 17
//                 }
//             },
//             "Day": {
//                 "Icon": 1,
//                 "IconPhrase": "Sunny",
//                 "HasPrecipitation": false
//             },
//             "Night": {
//                 "Icon": 34,
//                 "IconPhrase": "Mostly clear",
//                 "HasPrecipitation": false
//             },
//             "Sources": [
//                 "AccuWeather"
//             ],
//             "MobileLink": "http://m.accuweather.com/en/il/tel-aviv-port/215793/daily-weather-forecast/215793?day=1&unit=c&lang=en-us",
//             "Link": "http://www.accuweather.com/en/il/tel-aviv-port/215793/daily-weather-forecast/215793?day=1&unit=c&lang=en-us"
//         },
//         {
//             "Date": "2019-09-26T07:00:00+03:00",
//             "EpochDate": 1569470400,
//             "Temperature": {
//                 "Minimum": {
//                     "Value": 22.6,
//                     "Unit": "C",
//                     "UnitType": 17
//                 },
//                 "Maximum": {
//                     "Value": 29.6,
//                     "Unit": "C",
//                     "UnitType": 17
//                 }
//             },
//             "Day": {
//                 "Icon": 1,
//                 "IconPhrase": "Sunny",
//                 "HasPrecipitation": false
//             },
//             "Night": {
//                 "Icon": 34,
//                 "IconPhrase": "Mostly clear",
//                 "HasPrecipitation": false
//             },
//             "Sources": [
//                 "AccuWeather"
//             ],
//             "MobileLink": "http://m.accuweather.com/en/il/tel-aviv-port/215793/daily-weather-forecast/215793?day=2&unit=c&lang=en-us",
//             "Link": "http://www.accuweather.com/en/il/tel-aviv-port/215793/daily-weather-forecast/215793?day=2&unit=c&lang=en-us"
//         },
//         {
//             "Date": "2019-09-27T07:00:00+03:00",
//             "EpochDate": 1569556800,
//             "Temperature": {
//                 "Minimum": {
//                     "Value": 22.6,
//                     "Unit": "C",
//                     "UnitType": 17
//                 },
//                 "Maximum": {
//                     "Value": 30.2,
//                     "Unit": "C",
//                     "UnitType": 17
//                 }
//             },
//             "Day": {
//                 "Icon": 1,
//                 "IconPhrase": "Sunny",
//                 "HasPrecipitation": false
//             },
//             "Night": {
//                 "Icon": 33,
//                 "IconPhrase": "Clear",
//                 "HasPrecipitation": false
//             },
//             "Sources": [
//                 "AccuWeather"
//             ],
//             "MobileLink": "http://m.accuweather.com/en/il/tel-aviv-port/215793/daily-weather-forecast/215793?day=3&unit=c&lang=en-us",
//             "Link": "http://www.accuweather.com/en/il/tel-aviv-port/215793/daily-weather-forecast/215793?day=3&unit=c&lang=en-us"
//         },
//         {
//             "Date": "2019-09-28T07:00:00+03:00",
//             "EpochDate": 1569643200,
//             "Temperature": {
//                 "Minimum": {
//                     "Value": 23,
//                     "Unit": "C",
//                     "UnitType": 17
//                 },
//                 "Maximum": {
//                     "Value": 29.1,
//                     "Unit": "C",
//                     "UnitType": 17
//                 }
//             },
//             "Day": {
//                 "Icon": 2,
//                 "IconPhrase": "Mostly sunny",
//                 "HasPrecipitation": false
//             },
//             "Night": {
//                 "Icon": 34,
//                 "IconPhrase": "Mostly clear",
//                 "HasPrecipitation": false
//             },
//             "Sources": [
//                 "AccuWeather"
//             ],
//             "MobileLink": "http://m.accuweather.com/en/il/tel-aviv-port/215793/daily-weather-forecast/215793?day=4&unit=c&lang=en-us",
//             "Link": "http://www.accuweather.com/en/il/tel-aviv-port/215793/daily-weather-forecast/215793?day=4&unit=c&lang=en-us"
//         },
//         {
//             "Date": "2019-09-29T07:00:00+03:00",
//             "EpochDate": 1569729600,
//             "Temperature": {
//                 "Minimum": {
//                     "Value": 22.6,
//                     "Unit": "C",
//                     "UnitType": 17
//                 },
//                 "Maximum": {
//                     "Value": 29.5,
//                     "Unit": "C",
//                     "UnitType": 17
//                 }
//             },
//             "Day": {
//                 "Icon": 2,
//                 "IconPhrase": "Mostly sunny",
//                 "HasPrecipitation": false
//             },
//             "Night": {
//                 "Icon": 35,
//                 "IconPhrase": "Partly cloudy",
//                 "HasPrecipitation": false
//             },
//             "Sources": [
//                 "AccuWeather"
//             ],
//             "MobileLink": "http://m.accuweather.com/en/il/tel-aviv-port/215793/daily-weather-forecast/215793?day=5&unit=c&lang=en-us",
//             "Link": "http://www.accuweather.com/en/il/tel-aviv-port/215793/daily-weather-forecast/215793?day=5&unit=c&lang=en-us"
//         }
//     ]
// }

const next5DaysPrediction = {
    "Headline": {
        "EffectiveDate": "2019-09-28T08:00:00+03:00",
        "EffectiveEpochDate": 1569646800,
        "Severity": 4,
        "Text": "Pleasant this weekend",
        "Category": "",
        "EndDate": null,
        "EndEpochDate": null,
        "MobileLink": "http://m.accuweather.com/en/il/tel-aviv-port/215793/extended-weather-forecast/215793?unit=c&lang=en-us",
        "Link": "http://www.accuweather.com/en/il/tel-aviv-port/215793/daily-weather-forecast/215793?unit=c&lang=en-us"
    },
    "DailyForecasts": [
        {
            "Date": "2019-09-26T07:00:00+03:00",
            "EpochDate": 1569470400,
            "Temperature": {
                "Minimum": {
                    "Value": 22.5,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Maximum": {
                    "Value": 30.8,
                    "Unit": "C",
                    "UnitType": 17
                }
            },
            "Day": {
                "Icon": 1,
                "IconPhrase": "Sunny",
                "HasPrecipitation": false
            },
            "Night": {
                "Icon": 33,
                "IconPhrase": "Clear",
                "HasPrecipitation": false
            },
            "Sources": [
                "AccuWeather"
            ],
            "MobileLink": "http://m.accuweather.com/en/il/tel-aviv-port/215793/daily-weather-forecast/215793?day=1&unit=c&lang=en-us",
            "Link": "http://www.accuweather.com/en/il/tel-aviv-port/215793/daily-weather-forecast/215793?day=1&unit=c&lang=en-us"
        },
        {
            "Date": "2019-09-27T07:00:00+03:00",
            "EpochDate": 1569556800,
            "Temperature": {
                "Minimum": {
                    "Value": 23.7,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Maximum": {
                    "Value": 30.5,
                    "Unit": "C",
                    "UnitType": 17
                }
            },
            "Day": {
                "Icon": 1,
                "IconPhrase": "Sunny",
                "HasPrecipitation": false
            },
            "Night": {
                "Icon": 34,
                "IconPhrase": "Mostly clear",
                "HasPrecipitation": false
            },
            "Sources": [
                "AccuWeather"
            ],
            "MobileLink": "http://m.accuweather.com/en/il/tel-aviv-port/215793/daily-weather-forecast/215793?day=2&unit=c&lang=en-us",
            "Link": "http://www.accuweather.com/en/il/tel-aviv-port/215793/daily-weather-forecast/215793?day=2&unit=c&lang=en-us"
        },
        {
            "Date": "2019-09-28T07:00:00+03:00",
            "EpochDate": 1569643200,
            "Temperature": {
                "Minimum": {
                    "Value": 22.9,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Maximum": {
                    "Value": 29.3,
                    "Unit": "C",
                    "UnitType": 17
                }
            },
            "Day": {
                "Icon": 2,
                "IconPhrase": "Mostly sunny",
                "HasPrecipitation": false
            },
            "Night": {
                "Icon": 35,
                "IconPhrase": "Partly cloudy",
                "HasPrecipitation": false
            },
            "Sources": [
                "AccuWeather"
            ],
            "MobileLink": "http://m.accuweather.com/en/il/tel-aviv-port/215793/daily-weather-forecast/215793?day=3&unit=c&lang=en-us",
            "Link": "http://www.accuweather.com/en/il/tel-aviv-port/215793/daily-weather-forecast/215793?day=3&unit=c&lang=en-us"
        },
        {
            "Date": "2019-09-29T07:00:00+03:00",
            "EpochDate": 1569729600,
            "Temperature": {
                "Minimum": {
                    "Value": 23.2,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Maximum": {
                    "Value": 29.3,
                    "Unit": "C",
                    "UnitType": 17
                }
            },
            "Day": {
                "Icon": 2,
                "IconPhrase": "Mostly sunny",
                "HasPrecipitation": false
            },
            "Night": {
                "Icon": 34,
                "IconPhrase": "Mostly clear",
                "HasPrecipitation": false
            },
            "Sources": [
                "AccuWeather"
            ],
            "MobileLink": "http://m.accuweather.com/en/il/tel-aviv-port/215793/daily-weather-forecast/215793?day=4&unit=c&lang=en-us",
            "Link": "http://www.accuweather.com/en/il/tel-aviv-port/215793/daily-weather-forecast/215793?day=4&unit=c&lang=en-us"
        },
        {
            "Date": "2019-09-30T07:00:00+03:00",
            "EpochDate": 1569816000,
            "Temperature": {
                "Minimum": {
                    "Value": 23,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Maximum": {
                    "Value": 29.5,
                    "Unit": "C",
                    "UnitType": 17
                }
            },
            "Day": {
                "Icon": 2,
                "IconPhrase": "Mostly sunny",
                "HasPrecipitation": false
            },
            "Night": {
                "Icon": 35,
                "IconPhrase": "Partly cloudy",
                "HasPrecipitation": false
            },
            "Sources": [
                "AccuWeather"
            ],
            "MobileLink": "http://m.accuweather.com/en/il/tel-aviv-port/215793/daily-weather-forecast/215793?day=5&unit=c&lang=en-us",
            "Link": "http://www.accuweather.com/en/il/tel-aviv-port/215793/daily-weather-forecast/215793?day=5&unit=c&lang=en-us"
        }
    ]
}

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: '',
            // temperature: '',
            // isMetric: true,
            // isDayTime: true,
            // WeatherIcon: 1,
            // hasPrecipitation: false,
            // precipitationType: null,
            // dateAndTime: '2019-09-24T13:20:00+03:00'
        }
    }

    componentDidMount() {
        // this.fetchWeatherData()
        //     .then(value => this.phraseWeatherData(value))
        //     .catch(reason => Error(`Failed fetching data, reason: ${reason}`))
        // this.fetchLocationKey()
    }

    fetchLocationKey = location => {
        // const url = `http://dataservice.accuweather.com/currentconditions/v1/${location}`;

        const apiKey = '9MpqiOaZsD1p9P11PloCiFHszwVAkUcT';
        const url = `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apiKey}&q=${location}`;

        axios.get(url)
            .then(value => {
                console.log('1Printed Value Received From axios one: '+value);
                return value.key;
            })
            .catch(reason => {
                console.log('2Catch Error: '+reason);
                return '3Returned Error: '+reason;
            });
            // .finally(() => {});
        // axios({
        //     method: 'GET',
        //
        // }).

        // return http://dataservice.accuweather.com/currentconditions/v1/{locationKey}
    }

    fetchWeatherData = () => {

    }

    phraseWeatherData = () => {

    }

    fetchNext5DaysDate = locationKey => {
        const apiKey = `9MpqiOaZsD1p9P11PloCiFHszwVAkUcT`;
        const metric = true;
        const url = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${apiKey}&metric=${metric}`;
        // axios(url)
        //     .then(value => )
        //     .catch(reason => )
    }

    render() {
        return (
            <div className={'home'}>
                <Header
                    // city={defaultLocation.MobileLink.substring((55-24), defaultLocation.MobileLink.)} // finish slicing name if needed
                    // city={JSON.stringify(defaultLocation)}
                    // temperature={defaultLocation.Temperature.Metric.Value}
                    // description={'Tel-Aviv'}
                    // temperature={'25'}
                    // city={'Tel-Aviv'}
                    // temperature={'25'}
                    city={'Tel-Aviv'}
                    // temperature={'25'}
                    {...defaultLocation[0]}
                />
                <NextDays {...next5DaysPrediction}/>
            </div>
        )
    }
}

export default Home;
