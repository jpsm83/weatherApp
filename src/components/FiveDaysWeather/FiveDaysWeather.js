import React from "react";
import "./FiveDaysWeather.css";
import WeatherSingleCard from "../WeatherSingleCard/WeatherSingleCard";

const FiveDaysWeather = () => {
  return (
    <div className="five-days-weather-container">
      <h2>Próximos 5 días</h2>
      <div className="day-single-container">
      <div className="day-single-cards">
        <WeatherSingleCard typeOfCard="daily" />
        <WeatherSingleCard typeOfCard="daily" />
        <WeatherSingleCard typeOfCard="daily" />
        <WeatherSingleCard typeOfCard="daily" />
        <WeatherSingleCard typeOfCard="daily" />
      </div>
      <p>{">"}</p>
      </div>
    </div>
  );
};

export default FiveDaysWeather;
