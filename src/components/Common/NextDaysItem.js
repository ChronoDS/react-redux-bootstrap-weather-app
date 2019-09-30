import React from 'react'
import TemperatureIndicator from "./TemperatureIndicator";
import {celsiusToFahrenheit, urlFromImgId, getDayOfWeek, dateFormatting} from "../Utils/baseUtils";
import {connect} from "react-redux";

class NextDaysItem extends React.Component {
    render() {
        return (
            <div className="col-md-2">
                <div className="card mb-4 shadow-sm">
                    <div className="card-body text-center">
                        <h6 className="text-uppercase m-2">{getDayOfWeek(this.props.EpochDate, this.props.key)}</h6>
                        <h4 className="text-uppercase m-0">
                            { this.props.isCelsius ?
                                `${this.props.Temperature.Minimum.Value}\xB0
                                 - ${this.props.Temperature.Maximum.Value}\xB0`
                                : `${celsiusToFahrenheit(this.props.Temperature.Minimum.Value)}\xB0
                                 - ${celsiusToFahrenheit(this.props.Temperature.Maximum.Value)}\xB0`}
                        </h4>
                        <div className="d-flex justify-content-around">
                            <TemperatureIndicator
                                temperature={this.props.Temperature.Minimum.Value}/>
                            <TemperatureIndicator
                                temperature={this.props.Temperature.Maximum.Value}/>
                        </div>
                        <div className="d-flex justify-content-around">
                            <img src={urlFromImgId(this.props.Night.Icon)}
                                 crossOrigin="anonymous"
                                 alt={this.props.Day.IconPhrase} />
                            <img src={urlFromImgId(this.props.Day.Icon)}
                                 crossOrigin="anonymous"
                                 alt={this.props.Night.IconPhrase} />
                        </div>
                        <hr className="my-4" />
                        <p className="text-uppercase m-2 small">
                            {dateFormatting(this.props.Date, this.props.key)}
                        </p>
                    </div>
                </div>
            </div>

        )
    }
}

const mapStateToProps = state => {
    return state;
}

export default connect(mapStateToProps)(NextDaysItem);
