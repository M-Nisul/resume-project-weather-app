import moment from "moment/moment"
import sunnyIcon from '../assets/icons/sun.png'
import cloudyIcon from '../assets/icons/cloudy.png'
import rainyIcon from '../assets/icons/rain.png'
import stormyIcon from '../assets/icons/storm.png'
import mistyIcon from '../assets/icons/haze.png'
import defaultIcon from '../assets/icons/weather-news.png'

const getWeatherIcon = (description) => {
    switch (description) {
        case 'clear sky':
            return sunnyIcon;
        case 'few clouds':
        case 'scattered clouds':
        case 'broken clouds':
        case 'overcast clouds': 
            return cloudyIcon;
        case 'shower rain':
        case 'moderate rain':
        case 'light rain':
        case 'drizzle':
        case 'heavy rain':
            return rainyIcon;
        case 'thunderstorm':
        case 'thunderstorm with light rain':
        case 'thunderstorm with rain':
        case 'thunderstorm with heavy rain':
        case 'light thunderstorm':
        case 'heavy thunderstorm':
        case 'ragged thunderstorm':
        case 'thunderstorm with light drizzle':
        case 'thunderstorm with drizzle':
        case 'thunderstorm with heavy drizzle':
            return stormyIcon;
        case 'mist':
            return mistyIcon;
        default:
            return defaultIcon;
    }
};

const capitalize = (text) => {
    return text.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

export const Forecast = ({forecast}) => {
    return (
        <div className="forecast">
            {forecast ? (<h3>Forecast</h3>) : null}
            {forecast ? forecast.list.slice(0, 5).map((item, index) => (
                <div key={index} className="forecast-item">
                    <p>{moment(item.dt_txt).format('dddd, h:mm a')}</p>
                    <img src={getWeatherIcon(item.weather[0].description)} alt="Weather Icon" />
                    <p>{item.main.temp}°C</p>
                    <p>{capitalize(item.weather[0].description)}</p>
                </div>
            )) : null}
        </div>
    )
}