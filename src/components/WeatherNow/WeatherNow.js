import React from "react";
import "./WeatherNow.css";
import { useSelector } from "react-redux";
import { getWeather } from "../../features/weatherSlice"

const WeatherNow = () => {

const weather = useSelector(getWeather)

  return (
    <div className="weather-now-container">
      <h2>Ahora</h2>
      <div className="weather-now-details">
      <img
            src={`http://openweathermap.org/img/wn/${weather.current.weather[0].icon}@2x.png`}
            alt="Weather Icon"
            className="weather-now-icon"
                      />
        <div>
          <h3>{weather.current.weather[0].main}</h3>
          <h2>{Math.floor(weather.current.temp)}°</h2>
        </div>
      </div>
    </div>
  );
};

export default WeatherNow;
