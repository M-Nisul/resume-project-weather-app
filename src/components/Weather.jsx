import { useState } from "react"
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


export const Weather = ({weather, error}) => {
   return (
        <div className="weather">
           {error ? (<h1>City Not Found!</h1>) :
            (<>
                <h2>{weather !== null ? weather.name : 'Type In A City To Get The Weather!'}</h2>
                {weather && (<img src={getWeatherIcon(weather.weather[0].description)} alt="Weather Icon" />)}
                <p>{weather !== null ? `${weather.main.temp}°C` : null}</p>
                <p>{weather !== null ? capitalize(weather.weather[0].description) : null}</p>
            </>)}
        </div>
   )
}