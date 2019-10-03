import React from 'react';
import {connect} from "react-redux";
import './Home.scss';
import Header from "../Common/Header";
import NextDays from "../Common/NextDays";
import {requestLocationKey, requestCurrentConditionsByKey} from '../Utils/apiUtils'

class Home extends React.Component {
    componentDidMount() {
        // TODO check TTL and not send a redundant request.
        requestLocationKey(this.props.city)
            .then(value => {
                // TODO move dispatch to actionCreators.
                this.props.dispatch({
                    type: 'UPDATE_CURRENT_CITY_INFO',
                    City: value.EnglishName,
                    CityId: value.Key,
                    OriginCountry: value.Country.EnglishName,
                });
                return value.Key
            })
            .then(value => requestCurrentConditionsByKey(value))
            .then(value => {
                // TODO move dispatch to actionCreators.
                this.props.dispatch({
                    type: 'UPDATE_CURRENT_CITY_CONDITIONS',
                    WeatherText: value.WeatherText,
                    WeatherIcon: value.WeatherIcon,
                    Temperature: value.Temperature.Metric.Value,
                    IsDayTime: value.IsDayTime
                });
                return value
            })
            .catch(reason => console.log('requestCurrentConditions error: ',reason));
    }

    render() {
        return (
            <div className={'jumbotron home'}>
                <Header {...this.props} />
                {/*<NextDays {...this.props} />*/}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    TTL: state.TTL,
    isCelsius: state.isCelsius,
    city: state.currentlyDisplayedCity,
    cityId: state.currentlyDisplayedCityId,
    IsDayTime: state.IsDayTime,
    originCountry: state.currentlyDisplayedOriginCountry,
    weatherText: state.currentlyDisplayedWeatherText,
    weatherIcon: state.currentlyDisplayedWeatherIcon,
    temperature: state.currentlyDisplayedTemperature,
    DailyForecasts: state.currentlyDisplayedDailyForecasts
})

export default connect(mapStateToProps)(Home);
