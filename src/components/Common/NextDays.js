import React from 'react'
import NextDaysItem from "./NextDaysItem";
import {connect} from "react-redux";
import {requestNext5DaysForecast} from "../Utils/apiUtils";
import {isWeatherInformationObsolete} from '../Utils/baseUtils'
import {updateCurrentLocation5daysWeather, setIsFavoriteFalse} from '../Utils/actionCreators'

class NextDays extends React.Component {
    componentDidMount() {
        if(isWeatherInformationObsolete(Date.now(new Date()), this.props.TTL) || this.props.isFavorite) {
            requestNext5DaysForecast(this.props.cityId)
                .then(value => {
                    this.props.dispatch(updateCurrentLocation5daysWeather(value));
                    return value
                })
                .then((value) => {
                    this.props.dispatch(setIsFavoriteFalse());
                    return value;
                })
                .catch(reason => console.log('request5DaysConditions error: ', reason));
        }
    }

    render() {
        return (
            <div className="container-fluid">
                <h3 className='mx-auto my-4 pl-4 text-uppercase'>The Next 5 Days:</h3>
                <div className="row justify-content-center">
                    {this.props.DailyForecasts.map((day, index) => {
                        return <NextDaysItem
                            {...day}
                            isCelsius={this.props.isCelsius}
                            key={this.props.cityId+index}
                            id={this.props.cityId+index}
                        />
                    })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    cityId: state.currentlyDisplayedCityId,
    isCelsius: state.isCelsius,
    DailyForecasts: state.currentlyDisplayedDailyForecasts,
    TTL: state.TTL,
    isFavorite: state.isFavorite
});

export default connect(mapStateToProps)(NextDays);
