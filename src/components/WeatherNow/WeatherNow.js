import React from "react";
import "./WeatherNow.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSnowflake } from "@fortawesome/free-regular-svg-icons";
import { useSelector } from "react-redux";
import { getWeather } from "../../features/weatherSlice"

const WeatherNow = () => {

const weather = useSelector(getWeather)

  return (
    <div className="weather-now-container">
      <h2>Ahora</h2>
      <div className="weather-now-details">
        <FontAwesomeIcon icon={faSnowflake} className="weather-now-icon" />
        <div>
          <h3>{weather.current.weather[0].main}</h3>
          <h2>{weather.current.temp}</h2>
        </div>
      </div>
    </div>
  );
};

export default WeatherNow;
