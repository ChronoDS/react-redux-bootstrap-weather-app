

export default function urlFromImgId (weatherImageNumber) {
    return weatherImageNumber > 9 ? `http://apidev.accuweather.com/developers/Media/Default/WeatherIcons/${weatherImageNumber}-s.png`
        : `http://apidev.accuweather.com/developers/Media/Default/WeatherIcons/0${weatherImageNumber}-s.png`;
}
