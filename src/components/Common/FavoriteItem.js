import React from 'react'
import './FavoriteItem.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TemperatureIndicator from "./TemperatureIndicator";
import {connect} from "react-redux";
import {celsiusToFahrenheit} from "../Utils/baseUtils";

class FavoriteItem extends React.Component {
    render() {
        return (
            <div className="col-md-4">
                <div className="card mb-4 shadow-sm">
                    <div className="card-body text-center">
                        <FontAwesomeIcon icon="map-marked-alt" className="text-primary mb-2" />
                        <h4 className="text-uppercase m-0">{this.props.title}</h4>
                        <hr className="my-4" />
                        <TemperatureIndicator
                            temperature={this.props.Temperature.Metric.Value}/>
                        <h5 className="temperature-content">
                            { this.props.isCelsius ? this.props.Temperature.Metric.Value
                                : celsiusToFahrenheit(this.props.Temperature.Metric.Value)
                            }&#176;
                        </h5>
                        <div className="small text-black-50">{this.props.WeatherText}</div>

                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                                <button type="button" className="btn btn-sm btn-outline-secondary">
                                    <FontAwesomeIcon icon="trash-alt" />
                                </button>
                                <button type="button" className="btn btn-sm btn-outline-secondary">
                                    <FontAwesomeIcon icon="expand" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return state;
}

export default connect(mapStateToProps)(FavoriteItem);
