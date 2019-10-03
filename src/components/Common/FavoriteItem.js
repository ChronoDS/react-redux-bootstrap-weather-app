import React from 'react'
import './FavoriteItem.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TemperatureIndicator from "./TemperatureIndicator";
import {connect} from "react-redux";
import {celsiusToFahrenheit, urlFromImgId} from "../Utils/baseUtils";
import {removeFromFavorites} from '../Utils/actionCreators';

class FavoriteItem extends React.Component {
    render() {
        const {
            isCelsius,
            CityId,
            City,
            OriginCountry,
            Temperature,
            WeatherText,
            WeatherIcon
        } = this.props;
        return (
            <div className="col-md-4">
                <div className="card mb-4 shadow-sm">
                    <div className="card-body text-center">
                        <img src={urlFromImgId(WeatherIcon)}
                             crossOrigin="anonymous"
                             alt={WeatherText} />
                        <h4 className="text-uppercase m-0">{City}</h4>
                        <p className="mx-auto my-0">{OriginCountry}</p>
                        <hr className="my-4" />
                        <TemperatureIndicator
                            temperature={Temperature}/>
                        <h5 className="temperature-content">
                            { isCelsius ? Temperature
                                : celsiusToFahrenheit(Temperature)
                            }&#176;
                        </h5>
                        <div className="small text-black-50">{WeatherText}</div>

                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                                <button
                                    type="button"
                                    className="btn btn-sm btn-outline-secondary"
                                    onClick={() => this.props.dispatch(removeFromFavorites(CityId))}

                                >
                                    <FontAwesomeIcon icon="trash-alt"/>
                                </button>
                                {/*<button type="button" className="btn btn-sm btn-outline-secondary">*/}
                                {/*    <FontAwesomeIcon icon="expand" />*/}
                                {/*</button>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect()(FavoriteItem);
