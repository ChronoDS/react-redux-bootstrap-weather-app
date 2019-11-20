import React from 'react'
import './FavoriteItem.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TemperatureIndicator from "./TemperatureIndicator";
import {celsiusToFahrenheit, pathFromImgId, images} from "../Utils/baseUtils";
import {Link} from "react-router-dom";

const FavoriteItem = (props) => {
    const {
        isCelsius,
        City,
        OriginCountry,
        Temperature,
        WeatherText,
        WeatherIcon,
        removeFavorite,
        displayFavorite
    } = props;
    return (
        <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
                <div className="card-body text-center">
                    <img src={images(pathFromImgId(WeatherIcon))}
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
                    <div className="small">{WeatherText}</div>

                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <button
                                type="button"
                                className="btn btn-sm btn-outline-secondary"
                                onClick={() => removeFavorite()}

                            >
                                <FontAwesomeIcon icon="trash-alt"/>
                            </button>
                            <Link
                                onClick={() => displayFavorite()}
                                className="btn btn-sm btn-outline-secondary" to="/">
                                <FontAwesomeIcon icon="expand" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default FavoriteItem;
