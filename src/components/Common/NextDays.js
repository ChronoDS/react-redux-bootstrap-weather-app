import React from 'react'
import NextDaysItem from "./NextDaysItem";
import {connect} from "react-redux";
import {requestNext5DaysForecast} from "../Utils/apiUtils";

class NextDays extends React.Component {
    componentDidMount() {
        requestNext5DaysForecast(this.props.cityId)
            .then(value => {
                value.map((day) => {
                    this.props.dispatch(this.phraseData(day));
                    return day;
                });
                return value
            })
            .catch(reason => console.log('request5DaysConditions error: ',reason));
    }

    // TODO move to actionCreators.
    phraseData = day => ({
        type: 'UPDATE_CURRENTS_NEXT_5_DAYS',
        Date: day.Date,
        EpochDate: day.EpochDate,
        Temperature: day.Temperature,
        Day: day.Day,
        Night: day.Night
    })

    render() {
        return (
            <div className="container-fluid">
                <h3 className={'mx-auto my-4 pl-4 text-uppercase'}>The Next 5 Days:</h3>
                <div className="row justify-content-center">
                    {this.props.DailyForecasts.map((day, index) => {
                        return <NextDaysItem
                            {...day}
                            isCelsius={this.props.isCelsius}
                            key={this.props.cityId+index} />
                    })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    cityId: state.currentlyDisplayed.CityId,
    isCelsius: state.isCelsius,
    DailyForecasts: state.currentlyDisplayed.DailyForecasts
});

export default connect(mapStateToProps)(NextDays);
