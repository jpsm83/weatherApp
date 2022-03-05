import React from "react";
import "./WeatherNow.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSnowflake } from "@fortawesome/free-regular-svg-icons";

const WeatherNow = () => {
  return (
    <div className="weather-now-container">
      <h2>Ahora</h2>
      <div className="weather-now-details">
        <FontAwesomeIcon icon={faSnowflake} className="weather-now-icon" />
        <div>
          <h3>Nieve</h3>
          <h2>-3*</h2>
        </div>
      </div>
    </div>
  );
};

export default WeatherNow;
