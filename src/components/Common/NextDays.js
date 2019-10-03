import React from 'react'
import NextDaysItem from "./NextDaysItem";
import {connect} from "react-redux";
import {requestNext5DaysForecast} from "../Utils/apiUtils";

class NextDays extends React.Component {
    componentDidMount() {
        requestNext5DaysForecast(this.props.cityId)
            // TODO fix dispatch from nav example
            .then(value => {
                this.props.dispatch({
                    type: 'UPDATE_CURRENTS_WEEK_ENTIRELY',
                    DailyForecasts: value
                });
                return value
            })
            .catch(reason => console.log('request5DaysConditions error: ',reason));
    }

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
    cityId: state.currentlyDisplayedCityId,
    isCelsius: state.isCelsius,
    DailyForecasts: state.currentlyDisplayedDailyForecasts
});

export default connect(mapStateToProps)(NextDays);
