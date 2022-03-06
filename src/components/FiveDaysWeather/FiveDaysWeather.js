import React from "react";
import "./FiveDaysWeather.css";
import WeatherSingleCard from "../WeatherSingleCard/WeatherSingleCard";
import { useSelector } from "react-redux";
import { getWeather } from "../../features/weatherSlice";
import moment from "moment";

const FiveDaysWeather = () => {

  const weather = useSelector(getWeather);

  const displayDailyWeather = () => {
    const daysToShow = [weather.daily[1], weather.daily[2], weather.daily[3], weather.daily[4], weather.daily[5]];
    return daysToShow.map((day) => {
      return (
        <WeatherSingleCard
          typeOfCard="daily"
          weekDay={moment(day.dt*1000).format("dddd")}
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
      <div className="day-single-cards">
        {displayDailyWeather()}
      </div>
      <p>{">"}</p>
      </div>
    </div>
  );
};

export default FiveDaysWeather;
