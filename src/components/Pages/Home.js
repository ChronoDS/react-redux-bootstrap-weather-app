import React from 'react';
import './Home.scss';
import Header from "../Common/Header";
import NextDays from "../Common/NextDays";
import {defaultLocation, next5DaysPrediction} from '../../assets/jsonExamples/examplePackets'
import {connect} from "react-redux";

class Home extends React.Component {

    componentDidMount() {
        // this.requestLocationKey(this.props.defaultCity)
        //     .then(value => {
        //         console.log('The Current Location is: ', value.EnglishName,
        //             ', SAVE TO STORE!!, its key is: ', value.key);
        //         return value
        //     })
        //     .then(value => {
        //         this.props.dispatch({
        //             type: 'UPDATE_CURRENT_CITY_INFO',
        //             currentlyDisplayedCity: value.EnglishName,
        //             currentlyDisplayedCityId: value.key
        //         })
        //     })
        //     .then(value => this.requestCurrentConditionsByKey(value))
        //     .then()
        //     .catch(reason => console.log(Error('Test with error: '+reason)))
    }

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
