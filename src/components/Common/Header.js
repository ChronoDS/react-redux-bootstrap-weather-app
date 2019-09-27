import React from 'react'
import './Header.scss'
import TemperatureIndicator from "./TemperatureIndicator";
import urlFromImgId from '../Utils/urlFromIngId'

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            weatherIcon: ''
        }
    }

    render() {
        return (
            <header className="masthead border-bottom">
                <div className="container d-flex h-100 align-items-center">
                    <div className="mx-auto text-center">
                        <img src={urlFromImgId(this.props.WeatherIcon)}
                             crossOrigin="anonymous"
                             alt={this.props.WeatherText} />
                        <h1 className="mx-auto my-0 text-uppercase">{this.props.city}</h1>
                        <h2 className="text-black-50 mx-auto mt-2 mb-5">
                            {this.props.Temperature.Metric.Value}&#176;
                        </h2>
                        <TemperatureIndicator
                            temperature={this.props.Temperature.Metric.Value}
                            color={"red"}/>
                        <h2 className="text-black-50 mx-auto mt-2 mb-5">{this.props.WeatherText}</h2>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;
