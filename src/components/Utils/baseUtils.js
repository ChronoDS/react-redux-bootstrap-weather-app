
export const urlFromImgId = (weatherImageNumber) => {
    const url = 'http://apidev.accuweather.com/developers/Media/Default/WeatherIcons/';
    return `${url}${weatherImageNumber > 9 ?
        weatherImageNumber
        : `0`+weatherImageNumber}-s.png`
}

export const celsiusToFahrenheit = deg => {
    return ((deg * 1.8) + 32).toFixed(1);
}

export const getDayOfWeek = (epochTime, id) => {
    let date = (new Date(epochTime*1000)).getDay();
    const weekday = [];
    weekday[0] =  "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    return weekday[date];
}

export const dateFormatting = (rawDate, id) => {
    let date = rawDate.substring(0, rawDate.indexOf('T'));
    date = date.split("-").reverse().join("-");
    return date;
};

// TODO add case of empty string
export const replaceSpacesInCityQuery = (cityName) => {
    return encodeURIComponent(cityName.trim());
};
