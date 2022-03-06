import React from "react";
import "./HourlyWeather.css";
import WeatherSingleCard from "../WeatherSingleCard/WeatherSingleCard";
import { useSelector } from "react-redux";
import { getWeather } from "../../features/weatherSlice";
import moment from "moment";

const HourlyWeather = () => {

  const weather = useSelector(getWeather);

  const displayHourlyWeather = () => {
    const timesToShow = [weather.hourly[0], weather.hourly[1], weather.hourly[2], weather.hourly[3]];
    return timesToShow.map((hour) => {
      return (
        <WeatherSingleCard
          typeOfCard="hourly"
          hours={moment(hour.dt*1000).format("H[:]mm")}
          icon={hour.weather[0].icon}
          weather={hour.weather[0].main}
          temp={hour.temp}
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
