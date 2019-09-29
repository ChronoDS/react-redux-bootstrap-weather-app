import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './TemperatureIndicator.scss'

class TemperatureIndicator extends React.Component {

    setIndicatorColor = temp => {
        if (temp >= 40) {
            return ["thermometer-full", "#d20025"];
        } else if (temp >= 30) {
            return ["thermometer-three-quarters", '#d2ce0e'];
        } else if (temp >= 20) {
            return ["thermometer-half", '#2ad20d'];
        } else if (temp >= 15) {
            return ["thermometer-quarter", '#2428ec'];
        } else {
            return ["thermometer-empty", '#248eec'];
        }
    }

    render() {
        const TemperatureIndicators =  this.setIndicatorColor(this.props.temperature)
        return (
            <FontAwesomeIcon
                className={`primary mb-2 ${this.props.className}`}
                icon={TemperatureIndicators[0]}
                color={TemperatureIndicators[1]}
                size={this.props.isHeadline ? '3x' : '1x'}
            />
        )
    }
}

export default TemperatureIndicator;
