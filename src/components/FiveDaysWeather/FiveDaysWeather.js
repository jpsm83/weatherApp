import React from "react";
import "./FiveDaysWeather.css";
import WeatherSingleCard from "../WeatherSingleCard/WeatherSingleCard";
import moment from "moment";

const FiveDaysWeather = ({ weatherDetails }) => {

  const displayDailyWeather = () => {
    const daysToShow = [
      weatherDetails.daily[1],
      weatherDetails.daily[2],
      weatherDetails.daily[3],
      weatherDetails.daily[4],
      weatherDetails.daily[5],
    ];
    return daysToShow.map((day, i) => {
      return (
        <WeatherSingleCard
          key={i}
          typeOfCard="daily"
          weekDay={moment(day.dt * 1000).format("dddd")}
          icon={day.weather[0].icon}
          weather={day.weather[0].main}
          temp={day.temp.day}
        />
      );
    });
  };

  return (
    <div className="five-days-weather-container">
      <h2>Próximos 5 días</h2>
      <div className="day-single-container">
        <div className="day-single-cards">{displayDailyWeather()}</div>
        <p>{">"}</p>
      </div>
    </div>
  );
};

export default FiveDaysWeather;
