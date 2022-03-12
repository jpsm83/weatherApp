import React, { useEffect, useState } from "react";
import "./WeatherFullDisplay.css";
import { useNavigate } from "react-router-dom";
import WeatherNow from "../WeatherNow/WeatherNow";
import HourlyWeather from "../HourlyWeather/HourlyWeather";
import FiveDaysWeather from "../FiveDaysWeather/FiveDaysWeather";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlassLocation } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { getLocationData } from "../../features/locationSlice";
import axios from "axios";

const WeatherFullDisplay = () => {
  const [weatherDetails, setWeatherDetails] = useState();

  const navigate = useNavigate();

  const currentLocation = useSelector(getLocationData);

  useEffect(() => {
    getWeatherDetails();
  }, [currentLocation]);

  const getWeatherDetails = async () => {
    const API_KEY = process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY;
    const { lat, lng } = currentLocation.results[0].geometry.location;
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&exclude=minutely&units=metric&appid=${API_KEY}`
    );
    console.log(response.data)
    setWeatherDetails(response.data);
  };

  return (
    <div className="weather-full-display-container">
      <div className="weather-full-display-nav">
        <div className="weather-location-container">
          <h4>
            Código postal:
            <strong>
              {currentLocation.results[0].address_components[0].short_name}
            </strong>
          </h4>
          <h4>
            Ciudad:
            <strong>
              {currentLocation.results[0].address_components[1].short_name}
            </strong>
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
        {/* <WeatherNow weatherDetails={weatherDetails} /> */}
        {/* <HourlyWeather weatherDetails={weatherDetails} /> */}
        {/* <FiveDaysWeather weatherDetails={weatherDetails} /> */}
      </div>
    </div>
  );
};

export default WeatherFullDisplay;
