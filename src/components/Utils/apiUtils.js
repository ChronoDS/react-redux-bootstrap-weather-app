import axios from "axios";
import {replaceSpacesInCityQuery} from "./baseUtils";

const apiKey = '9MpqiOaZsD1p9P11PloCiFHszwVAkUcT';
// const apiKey = 'test';

export const requestLocationKey = location => {
    location = replaceSpacesInCityQuery(location);
    const url = 'http://dataservice.accuweather.com/locations/v1/cities/search?apikey='+apiKey+'&q='+location;
    try {
        return axios.get(url)
    } catch (err) {
        console.log('requestLocationKey - Failed. Error: ', err);
    }
};

export const requestCurrentConditionsByKey = key => {
    const url = 'http://dataservice.accuweather.com/currentconditions/v1/'+key+'?apikey='+apiKey;
    try {
        return axios.get(url)
    } catch (err) {
        console.log('requestLocationKey - Failed. Error: ', err);
    }
};

// fetchNext5DaysDate = locationKey => {
//     const apiKey = `9MpqiOaZsD1p9P11PloCiFHszwVAkUcT`;
//     const metric = true;
//     const url = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${apiKey}&metric=${metric}`;
//     // axios(url)
//     //     .then(value => )
//     //     .catch(reason => )
// }
