import React from 'react';
import './Home.scss';
import Header from "../Common/Header";
// import axios from "axios";
import NextDays from "../Common/NextDays";
import {defaultLocation, next5DaysPrediction} from '../../assets/jsonExamples/examplePackets'
import {connect} from "react-redux";

class Home extends React.Component {

    // componentDidMount() {
    //     // this.fetchWeatherData()
    //     //     .then(value => this.phraseWeatherData(value))
    //     //     .catch(reason => Error(`Failed fetching data, reason: ${reason}`))
    //     // this.fetchLocationKey()
    // }
    //
    // fetchLocationKey = location => {
    //     // const url = `http://dataservice.accuweather.com/currentconditions/v1/${location}`;
    //
    //     const apiKey = '9MpqiOaZsD1p9P11PloCiFHszwVAkUcT';
    //     const url = `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apiKey}&q=${location}`;
    //
    //     axios.get(url)
    //         .then(value => {
    //             console.log('1Printed Value Received From axios one: '+value);
    //             return value.key;
    //         })
    //         .catch(reason => {
    //             console.log('2Catch Error: '+reason);
    //             return '3Returned Error: '+reason;
    //         });
    //         // .finally(() => {});
    //     // axios({
    //     //     method: 'GET',
    //     //
    //     // }).
    //
    //     // return http://dataservice.accuweather.com/currentconditions/v1/{locationKey}
    // }
    //
    // fetchNext5DaysDate = locationKey => {
    //     const apiKey = `9MpqiOaZsD1p9P11PloCiFHszwVAkUcT`;
    //     const metric = true;
    //     const url = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${apiKey}&metric=${metric}`;
    //     // axios(url)
    //     //     .then(value => )
    //     //     .catch(reason => )
    // }

    render() {
        const {
            defaultCityId,
            defaultCity,
            isCelsius
        } = this.props;
        return (
            <div className={'jumbotron home'}>
                <Header
                    cityId={defaultCityId}
                    defaultCity={defaultCity}
                    isCelsius={isCelsius}
                    {...defaultLocation[0]}
                />
                <NextDays {...next5DaysPrediction}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    defaultCityId: state.defaultCityId,
    defaultCity: state.defaultCity,
    isCelsius: state.isCelsius
})

export default connect(mapStateToProps)(Home);
