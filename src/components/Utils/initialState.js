export const initialState = {
    isCelsius: true,
    theme: 'light',
    IsDayTime: true,
    currentlyDisplayedCity: 'Tel Aviv',
    currentlyDisplayedCityId: 215854,
    TTL: '',
    currentlyDisplayedOriginCountry: 'WhoTown',
    currentlyDisplayedWeatherText: 'Sun Gone Nuclear',
    currentlyDisplayedWeatherIcon: '5',
    currentlyDisplayedTemperature: '5000',
    currentlyDisplayedDailyForecasts: [
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
    ],
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
