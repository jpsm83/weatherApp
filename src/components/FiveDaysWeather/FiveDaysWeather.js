import React from "react";
import "./FiveDaysWeather.css";
import WeatherSingleCard from "../WeatherSingleCard/WeatherSingleCard";
import moment from "moment";

const FiveDaysWeather = () => {

  const displayDailyWeather = (props) => {
    const daysToShow = [
      props.weatherDetails.daily[1],
      props.weatherDetails.daily[2],
      props.weatherDetails.daily[3],
      props.weatherDetails.daily[4],
      props.weatherDetails.daily[5],
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
