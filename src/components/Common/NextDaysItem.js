import React from 'react';
import {connect} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import TemperatureIndicator from "./TemperatureIndicator";
import {celsiusToFahrenheit, getDayOfWeek, dateFormatting} from "../Utils/baseUtils";

class NextDaysItem extends React.Component {
    render() {
        const {
            key,
            isCelsius,
            Date,
            EpochDate,
            Temperature,
        } = this.props;
        return (
            <div className="col-md-2">
                <div className="card mb-4 shadow-sm">
                    <div className="card-body text-center">
                        <h6 className="text-uppercase m-2">{getDayOfWeek(EpochDate)}</h6>
                        <h4 className="text-uppercase m-0">
                            {isCelsius ?
                                `${Temperature.Minimum.Value}\xB0
                                 - ${Temperature.Maximum.Value}\xB0`
                                : `${celsiusToFahrenheit(Temperature.Minimum.Value)}\xB0
                                 - ${celsiusToFahrenheit(Temperature.Maximum.Value)}\xB0`}
                        </h4>
                        <div className="d-flex justify-content-around">
                            <TemperatureIndicator
                                temperature={Temperature.Minimum.Value}/>
                            <TemperatureIndicator
                                temperature={Temperature.Maximum.Value}/>
                        </div>
                        <div className="d-flex justify-content-around">
                            <FontAwesomeIcon
                                icon="moon" style={{color: '#2e3ed9'}}/>
                            <FontAwesomeIcon
                                icon="sun" style={{color: '#d9d167'}}/>
                        </div>
                        <hr className="my-4" />
                        <p className="text-uppercase m-2 small">
                            {dateFormatting(Date, key)}
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
export default connect()(NextDaysItem);
