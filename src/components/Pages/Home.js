import React from 'react';
import './Home.scss';
import Header from "../Common/Header";
import NextDays from "../Common/NextDays";
import {connect} from "react-redux";
import {next5DaysPrediction} from '../../assets/jsonExamples/examplePackets'
import {requestLocationKey, requestCurrentConditionsByKey} from '../Utils/apiUtils'

class Home extends React.Component {
    componentDidMount() {
        requestLocationKey(this.props.defaultCity)
            .then(value => {
                console.log('1. Location value: ', value);
                return value.data
            })
            .then(value => {
                console.log('2. Location.data value: ', value);
                return value[0]
            })
            .then(value => {
                this.props.dispatch({
                    type: 'UPDATE_CURRENT_CITY_INFO',
                    City: value.EnglishName,
                    CityId: value.key,
                    OriginCountry: value.Country.EnglishName,
                });
                console.log('3. Location.data[0] value: ', value.key);
                return value.key
            })
            .then(value => requestCurrentConditionsByKey(value))
            .then(value => value.data)
            .then(value => value[0])
            .then(value => {
                this.props.dispatch({
                    type: 'UPDATE_CURRENT_CITY_CONDITIONS',
                    WeatherText: value.WeatherText,
                    WeatherIcon: value.WeatherIcon,
                    Temperature: value.Temperature.Metric.Value
                });
                return value
            })
            .catch(reason => console.log('requestCurrentConditions error: ',reason));
    }

    render() {
        return (
            <div className={'jumbotron home'}>
                <Header {...this.props} />
                <NextDays {...next5DaysPrediction}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isCelsius: state.isCelsius,
    defaultCity: state.defaultCity,
    city: state.currentlyDisplayed.City,
    cityId: state.currentlyDisplayed.CityId,
    originCountry: state.currentlyDisplayed.OriginCountry,
    weatherText: state.currentlyDisplayed.WeatherText,
    weatherIcon: state.currentlyDisplayed.WeatherIcon,
    temperature: state.currentlyDisplayed.Temperature
})

export default connect(mapStateToProps)(Home);
