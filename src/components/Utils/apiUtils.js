// TODO HANDLE THIS!!
import axios from "axios";

const apiKey = '9MpqiOaZsD1p9P11PloCiFHszwVAkUcT';

export const requestLocationKey = location => {
    const url = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${location}`;
    // const dogUrl = 'https://dog.ceo/api/breeds/list/all'
    try {
        return axios.get(dogUrl)
    } catch (err) {
        console.log('requestLocationKey - Failed. Error: ', err);
    }
}

export const requestCurrentConditionsByKey = key => {

}


// this.fetchWeatherData()
//     .then(value => this.phraseWeatherData(value))
//     .catch(reason => Error(`Failed fetching data, reason: ${reason}`))
// this.fetchLocationKey()
