import React from 'react'
import './Header.scss'
import TemperatureIndicator from "./TemperatureIndicator";
import urlFromImgId from '../Utils/urlFromIngId'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            weatherIcon: ''
        }
    }

    celsiusToFahrenheit = deg => {
        // T(°F) = T(°C) × 1.8 + 32
        return ((deg * 1.8) + 32)
    }

    render() {
        return (
            <header className="masthead border-bottom">

                <div className="d-flex justify-content-start pl-lg-5">
                    <div className="btn-group pt-3">
                        <button type="button" className="btn btn-lg btn-outline-secondary">
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
                        <h1 className="mx-auto my-0 text-uppercase text-white border city-info">{this.props.city}</h1>
                        <h2 className="text-white mx-auto mt-2 mb-5 city-info">
                            { this.state.isCelsius ? this.props.Temperature.Metric.Value
                            : this.celsiusToFahrenheit(this.props.Temperature.Metric.Value)
                            }&#176;
                        </h2>
                        <TemperatureIndicator
                            temperature={this.props.Temperature.Metric.Value}
                            color={"red"}
                            isHeadline={true}
                        />
                        <h2 className="text-white mx-auto mt-2 mb-5 city-info">{this.props.WeatherText}</h2>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;
