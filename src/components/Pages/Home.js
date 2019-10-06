import React from 'react';
import {connect} from "react-redux";
import './Home.scss';
import Header from "../Common/Header";
import NextDays from "../Common/NextDays";
import {requestLocationKey, requestCurrentConditionsByKey} from '../Utils/apiUtils'
import {isWeatherInformationObsolete} from '../Utils/baseUtils'
import {updateCurrentCityGeneralInfo, updateCurrentCityWeatherInfo} from '../Utils/actionCreators'

class Home extends React.Component {
    componentDidMount() {
        if(isWeatherInformationObsolete(Date.now(new Date()), this.props.TTL)) {
            requestLocationKey(this.props.city)
                .then(value => {
                    this.props.dispatch(updateCurrentCityGeneralInfo(value));
                    return value.Key
                })
                .then(value => requestCurrentConditionsByKey(value))
                .then(value => {
                    this.props.dispatch(updateCurrentCityWeatherInfo(value));
                    return value
                })
                .catch(reason => console.log('requestCurrentConditions error: ', reason));
        }
    }

    render() {
        return (
            <div className={'jumbotron home'}>
                <Header {...this.props} />
                <NextDays {...this.props} />
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
    DailyForecasts: state.currentlyDisplayedDailyForecasts,
    favorites: state.favorites
});

export default connect(mapStateToProps)(Home);
