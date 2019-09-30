import React from 'react'
import './Header.scss'
import TemperatureIndicator from "./TemperatureIndicator";
import {urlFromImgId, celsiusToFahrenheit} from '../Utils/baseUtils'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {connect} from "react-redux";

class Header extends React.Component {

    addToFavorites = (cityId, cityName) => {
        this.props.dispatch({
            type: 'ADD_FAVORITE',
            cityId: cityId,
            cityName: cityName
        });
    };

    render() {
        return (
            <header className="masthead border-bottom">

                <div className="d-flex justify-content-start pl-lg-5">
                    <div className="btn-group pt-3">
                        <button type="button"
                                className="btn btn-lg btn-outline-secondary"
                                // onClick={ () => this.addToFavorites(this.props.cityId, this.props.city)}
                            onClick={() => this.props.dispatch({
                                type: 'ADD_FAVORITE',
                                id: 1112,
                                city: 'test-a',
                                temperature: '-25',
                                WeatherText: 'Smooth Testarator',
                                WeatherIcon: '11'
                            })}
                        >
                            <FontAwesomeIcon icon="star" />
                        </button>
                        <button type="button" className="btn btn-lg btn-outline-secondary">
                            <FontAwesomeIcon icon="expand" />
                        </button>
                    </div>
                </div>

                <div className="container d-flex h-100 align-items-center">
                    <div className="mx-auto text-center">
                        <img src={urlFromImgId(this.props.WeatherIcon)}
                             crossOrigin="anonymous"
                             alt={this.props.WeatherText} />
                        <h1 className="mx-auto my-0 text-uppercase text-white border city-info">
                            {this.props.city}</h1>
                        <h2 className="text-white mx-auto mt-2 mb-5 city-info">
                            { this.props.isCelsius ? this.props.Temperature.Metric.Value
                                : celsiusToFahrenheit(this.props.Temperature.Metric.Value)
                            }&#176;
                        </h2>
                        <TemperatureIndicator
                            temperature={this.props.Temperature.Metric.Value}
                            color={"red"}
                            isHeadline={true}
                        />
                        <h2 className="text-white mx-auto mt-2 mb-5 city-info">
                            {this.props.WeatherText}</h2>
                    </div>
                </div>
            </header>
        )
    }
}

const mapStateToProps = state => {
    return state;
}

export default connect(mapStateToProps)(Header);
