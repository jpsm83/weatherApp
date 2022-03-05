import React from 'react';
import "./HourlyWeather.css";
import WeatherSingleCard from "../WeatherSingleCard/WeatherSingleCard";

const HourlyWeather = () => {
  return (
    <div className="hourly-weather-container">
      <h2>Próximas horas</h2>
      <div className="hour-single-cards">
        <WeatherSingleCard typeOfCard="hourly" />
        <WeatherSingleCard typeOfCard="hourly" />
        <WeatherSingleCard typeOfCard="hourly" />
        <WeatherSingleCard typeOfCard="hourly" />
      </div>
    </div>
  )
}

export default HourlyWeather