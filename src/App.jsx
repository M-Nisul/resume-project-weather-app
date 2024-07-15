import { useEffect, useState } from "react";
import "./App.css";
import { Weather } from "./components/Weather";
import { Search } from "./components/Search";
import axios from "axios";
import { Forecast } from "./components/Forecast";

const fetchWeather = async (city) => {
    const API_KEY = '213a40d68b72d08448b191cd0b5a7a14';
    const weather = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`);
    const forecast = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`);

    return {
        weather: weather.data,
        forecast: forecast.data
    }
}


function App() {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);
    const [forecast, setForecast] = useState(null);
    const [error, setError] = useState(false);

   
    useEffect(() => {
        if(city) {
            fetchWeather(city).then((data) => {
                setError(false);
                setWeather(data.weather);
                setForecast(data.forecast);
            }).catch((error) => {
                setError(true);
            })
        }
    }, [city])

    const handleInputChange = (e) => {
        setCity(e.target.value);
    }

    return (
        <div className="container">
            <Search handleInputChange={handleInputChange} city={city}/>
            <Weather weather={weather} error={error}/>
            {error  ? null : <Forecast forecast={forecast}/>}
            <p className="credits">Made by <a href="http://instagram.com/itz.not.nisul" target="_blank">Nisul Munidasa</a></p>
        </div>
    )
}

export default App;
