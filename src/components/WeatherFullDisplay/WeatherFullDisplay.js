import React from "react";
import "./WeatherFullDisplay.css";
import { useNavigate } from "react-router-dom";
import WeatherNow from "../WeatherNow/WeatherNow";
import HourlyWeather from "../HourlyWeather/HourlyWeather";
import FiveDaysWeather from "../FiveDaysWeather/FiveDaysWeather";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlassLocation } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { getLocation } from "../../features/locationSlice";

const WeatherFullDisplay = () => {
  const navigate = useNavigate();

  const currentLocation = useSelector(getLocation);

  return (
    <div className="weather-full-display-container">
      <div className="weather-full-display-nav">
        <div className="weather-location-container">
          <h4>
            Código postal:<strong>{currentLocation.results[0].address_components[0].short_name}</strong>
          </h4>
          <h4>
            Ciudad:<strong>{currentLocation.results[0].address_components[1].short_name}</strong>
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
