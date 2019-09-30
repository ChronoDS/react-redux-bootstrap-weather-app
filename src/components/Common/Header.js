import React from 'react'
import './Header.scss'
import TemperatureIndicator from "./TemperatureIndicator";
import {urlFromImgId, celsiusToFahrenheit} from '../Utils/baseUtils'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {connect} from "react-redux";

class Header extends React.Component {

    addToFavorites = (cityId, cityName) => {
        return {
            // type: 'ADD_FAVORITE',
            // cityId: cityId,
            // cityName: cityName
            type: 'ADD_FAVORITE',
            id: cityId,
            city: cityName,
            temperature: '-25',
            WeatherText: 'Smooth Testarator',
            WeatherIcon: '11'
        };
    };

    render() {
        const {
            WeatherText,
            WeatherIcon,
            defaultCity,
            cityId,
            isCelsius,
            Temperature
        } = this.props;
        return (
            <header className="masthead border-bottom">
                <div className="d-flex justify-content-start pl-lg-5">
                    <div className="btn-group pt-3">
                        <button type="button"
                                className="btn btn-lg btn-outline-secondary"
                                // onClick={ () => this.addToFavorites(this.props.cityId, this.props.city)}
                            onClick={() => {
                                this.props.dispatch(this.addToFavorites(1232, 'jabalia'))
                            }}>
                            <FontAwesomeIcon icon="star" />
                        </button>
                        <button type="button"
                                className="btn btn-lg btn-outline-secondary"
                                onClick={() => {
                                    this.props.dispatch(this.addToFavorites(cityId + 2, defaultCity))
                                }}>
                            <FontAwesomeIcon icon="expand" />
                        </button>
                    </div>
                </div>

                <div className="container d-flex h-100 align-items-center">
                    <div className="mx-auto text-center">
                        <h1 className="mx-auto my-0 text-uppercase text-white border city-info">{defaultCity}</h1>
                        <img src={urlFromImgId(WeatherIcon)}
                             crossOrigin="anonymous"
                             alt={WeatherText} />
                        <h2 className="text-white mx-auto mt-2 mb-5 city-info">
                            {isCelsius ? Temperature.Metric.Value
                                : celsiusToFahrenheit(Temperature.Metric.Value)
                            }&#176;
                        </h2>
                        <TemperatureIndicator
                            temperature={Temperature.Metric.Value}
                            color={"red"}
                            isHeadline={true}
                        />
                        <h2 className="text-white mx-auto mt-2 mb-5 city-info">
                            {WeatherText}</h2>
                    </div>
                </div>
            </header>
        )
    }
}

const mapStateToProps = state => ({
    favorites: state.favorites
});

export default connect(mapStateToProps)(Header);
