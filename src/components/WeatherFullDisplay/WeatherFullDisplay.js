import React from "react";
import "./WeatherFullDisplay.css";
import { useNavigate } from "react-router-dom";
import WeatherNow from "../WeatherNow/WeatherNow";
import HourlyWeather from "../HourlyWeather/HourlyWeather";
import FiveDaysWeather from "../FiveDaysWeather/FiveDaysWeather";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlassLocation } from "@fortawesome/free-solid-svg-icons";

const WeatherFullDisplay = () => {
  const navigate = useNavigate();

  return (
    <div className="weather-full-display-container">
      <div className="weather-full-display-nav">
        <div className="weather-location-container">
          <h4>
            Código postal:<strong>08026</strong>
          </h4>
          <h4>
            Ciudad:<strong>Barcelona</strong>
          </h4>
        </div>
        <div className="weather-display-search">
          <FontAwesomeIcon
            icon={faMagnifyingGlassLocation}
            className="display-search-icon"
          />
          <h5 onClick={() => navigate("/")}>Buscar otra zona</h5>
        </div>
      </div>
      <div className="weather-full-display-details">
        <WeatherNow />
        <HourlyWeather />
        <FiveDaysWeather />
      </div>
    </div>
  );
};

export default WeatherFullDisplay;
