import axios from "axios";
import {replaceSpacesInCityQuery} from "./baseUtils";
import {apiKey} from '../../assets/AccuWeatherKey'

export const requestLocationKey = location => {
    location = replaceSpacesInCityQuery(location);
    const url = 'https://cors-anywhere.herokuapp.com/http://dataservice.accuweather.com/locations/v1/cities/search?apikey='+apiKey+'&q='+location;
    try {
        console.log('requestLocationKey sent:', location);
        return axios.get(url)
            .then(value => value.data)
            .then(value => value[0])
    } catch (err) {
        console.log('requestLocationKey - Failed. Error: ', err);
    }
};

export const requestCurrentConditionsByKey = key => {
    const url = 'https://cors-anywhere.herokuapp.com/http://dataservice.accuweather.com/currentconditions/v1/'+key+'?apikey='+apiKey;
    try {
        console.log('requestCurrentConditionsByKey sent: ', key);
        return axios.get(url)
            .then(value => value.data)
            .then(value => value[0])
    } catch (err) {
        console.log('requestCurrentConditionsByKey - Failed. Error: ', err);
    }
};

export const requestNext5DaysForecast = locationKey => {
    const url = 'https://cors-anywhere.herokuapp.com/http://dataservice.accuweather.com/forecasts/v1/daily/5day/'+locationKey+'?apikey='+apiKey+'&metric=true';
    try {
        console.log('requestNext5DaysForecast sent: ', locationKey);
        return axios.get(url)
            .then(value => value.data)
            .then(value => value.DailyForecasts)
    } catch (err) {
        console.log('requestNext5DaysForecast - Failed. Error: ', err);
    }
};

export const autoSearchQuery = query => {
    const url = 'https://cors-anywhere.herokuapp.com/http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey='+apiKey+'&q='+query;
    try {
        console.log('autoSearchQuery sent: ', query);
        return axios.get(url).then(value => value.data)
    } catch (err) {
        console.log('autoSearchQuery - Failed. Error: ', err);
    }
};
