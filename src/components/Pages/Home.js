import React from 'react';
import {connect} from "react-redux";
import './Home.scss';
import Header from "../Common/Header";
import NextDays from "../Common/NextDays";
import {requestLocationKey, requestCurrentConditionsByKey} from '../Utils/apiUtils'
import {updateCurrentCityGeneralInfo, updateCurrentCityWeatherInfo} from '../Utils/actionCreators'

class Home extends React.Component {
    componentDidMount() {
        // TODO check TTL and not send a redundant request.
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
            .catch(reason => console.log('requestCurrentConditions error: ',reason));
    }

    getViewPortWidth(){
        try {
            return document.body.clientWidth;
        } catch (e) {
            return 1000;
        }
    }

    render() {
        return (
            <div className={'jumbotron home'}>
                <Header {...this.props} />
                <NextDays {...this.props} />

                {/*<footer className="page-footer text-black-50">*/}
                {/*    <div className="footer-copyright text-center py-3">© 2019 Copyright:*/}
                {/*        <a href="https://github.com/ChronoDS"> Daniel Shema.</a>*/}
                {/*    </div>*/}
                {/*</footer>*/}
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
