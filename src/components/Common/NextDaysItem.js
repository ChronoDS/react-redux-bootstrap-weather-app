import React from 'react';
import TemperatureIndicator from "./TemperatureIndicator";
import {celsiusToFahrenheit, getDayOfWeek, dateFormatting, images, pathFromImgId} from "../Utils/baseUtils";

const NextDaysItem = (props) => {
    const {
        id,
        isCelsius,
        Date,
        EpochDate,
        Temperature,
        Day,
        Night
    } = props;
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
                        <img src={images(pathFromImgId(Day.Icon))}
                             crossOrigin="anonymous"
                             alt={Day.IconPhrase} />
                        <img src={images(pathFromImgId(Night.Icon))}
                             crossOrigin="anonymous"
                             alt={Night.IconPhrase} />
                    </div>
                    <hr className="my-4" />
                    <p className="text-uppercase m-2 small">
                        {dateFormatting(Date, id)}
                    </p>
                </div>
            </div>
        </div>
    )
};
export default NextDaysItem;
