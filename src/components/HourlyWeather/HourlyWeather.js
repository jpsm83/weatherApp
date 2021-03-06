import React from "react";
import "./HourlyWeather.css";
import WeatherSingleCard from "../WeatherSingleCard/WeatherSingleCard";
import moment from "moment";

const HourlyWeather = ({ weatherDetails }) => {

  const displayHourlyWeather = () => {
    const timesToShow = [
      weatherDetails.hourly[0],
      weatherDetails.hourly[1],
      weatherDetails.hourly[2],
      weatherDetails.hourly[3],
    ];
    return timesToShow.map((hour, i) => {
      return (
        <WeatherSingleCard
          key={i}
          typeOfCard="hourly"
          hours={moment(hour.dt * 1000).format("H[:]mm")}
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
