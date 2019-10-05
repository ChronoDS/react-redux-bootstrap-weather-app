export const images = require.context('../../../public/images', true);

export const urlFromImgId = (weatherImageNumber) => {
    if (weatherImageNumber === undefined || weatherImageNumber.length === 0) {
        return './01-s.png';
    }
    return `./${weatherImageNumber > 9 ? weatherImageNumber
        : `0`+weatherImageNumber}-s.png`
}

export const celsiusToFahrenheit = deg => {
    return ((deg * 1.8) + 32).toFixed(1);
}

export const getDayOfWeek = (epochTime) => {
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

export const replaceSpacesInCityQuery = (cityName) => {
    if (cityName === undefined || cityName.length === 0) {
        return '';
    }
    return encodeURIComponent(cityName.trim());
};

export const isWeatherInformationObsolete = (currentDate,TTL) => {
    if (TTL === '') {
        return true;
    } else {
        const elapsedTimeInSeconds = Math.floor((currentDate - TTL)/1000);
        const relevancyPeriod = 18000; // five hours.
        if (elapsedTimeInSeconds < relevancyPeriod) {
            return true;
        }
    }
    console.log('No Need To Update CurrentConditions! - Conditions Relevant');
    return false;
}
