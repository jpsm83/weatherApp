import React from "react";
import "./HourlyWeather.css";
import WeatherSingleCard from "../WeatherSingleCard/WeatherSingleCard";
import { useSelector } from "react-redux";
import { getWeather } from "../../features/weatherSlice";

const HourlyWeather = () => {
  const weather = useSelector(getWeather);

  const displayHourlyWeather = () => {
    const timesToShow = [3600, 7200, 10800, 14400];
    return timesToShow.map((hour) => {
      return (
        <WeatherSingleCard
          typeOfCard="hourly"
          icon={weather.current.weather[0].icon}
          timezone={weather.timezone_offset}
          weather={weather.current.weather[0].main}
          temp={weather.current.temp}
        />
      );
    });
  };

  return (
    <div className="hourly-weather-container">
      <h2>Próximas horas</h2>
      <div className="hour-single-cards">{displayHourlyWeather()}</div>
    </div>
  );
};

export default HourlyWeather;
