import React from 'react'
import './Header.scss'
import TemperatureIndicator from "./TemperatureIndicator";
import {urlFromImgId, celsiusToFahrenheit} from '../Utils/baseUtils'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {connect} from "react-redux";

class Header extends React.Component {

    addToFavorites = (cityId, city, originCountry,
                      weatherText, weatherIcon, temperature) => {
        return {
            type: 'ADD_FAVORITE',
            CityId: cityId,
            City: city,
            OriginCountry: originCountry,
            Temperature: temperature,
            WeatherText: weatherText,
            WeatherIcon: weatherIcon
        };
    };

    render() {
        const {
            city,
            cityId,
            originCountry,
            isCelsius,
            weatherText,
            weatherIcon,
            temperature
        } = this.props;
        return (
            <header className="masthead border-bottom">
                <div className="d-flex justify-content-start pl-lg-5">
                    <div className="btn-group pt-3">
                        <button type="button"
                                className="btn btn-lg btn-outline-secondary"
                                onClick={() => {
                                    this.props.dispatch(
                                        this.addToFavorites(
                                            cityId,
                                            city,
                                            originCountry,
                                            weatherText,
                                            weatherIcon,
                                            temperature
                                        )
                                    )
                                }}>
                            <FontAwesomeIcon icon="star" />
                        </button>
                        <button type="button"
                                className="btn btn-lg btn-outline-secondary"
                                // onClick={() => {
                                //     this.props.dispatch(
                                //         this.addToFavorites(
                                //             111111,
                                //             "jakarta",
                                //             'malbubua',
                                //             'nice',
                                //             2,
                                //             '4000'
                                //         )
                                //     )
                                // }}
                        >
                            <FontAwesomeIcon icon="expand" />
                        </button>
                    </div>
                </div>

                <div className="container d-flex h-100 align-items-center">
                    <div className="mx-auto text-center">
                        <h1 className="mx-auto my-0 text-uppercase text-white border city-info">{city}</h1>
                        <p className="mx-auto my-0 text-white city-info">{originCountry}</p>
                        <img src={urlFromImgId(weatherIcon)}
                             crossOrigin="anonymous"
                             alt={weatherText} />
                        <h2 className="text-white mx-auto mt-2 mb-5 city-info">
                            {isCelsius ? temperature
                                : celsiusToFahrenheit(temperature)
                            }&#176;
                        </h2>
                        <TemperatureIndicator
                            temperature={temperature}
                            color={"red"}
                            isHeadline={true}
                        />
                        <h2 className="text-white mx-auto mt-2 mb-5 city-info">
                            {weatherText}</h2>
                    </div>
                </div>
            </header>
        )
    }
}

export default connect()(Header);
