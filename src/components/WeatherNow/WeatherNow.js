import React from "react";
import "./WeatherNow.css";

const WeatherNow = ({ weatherDetails }) => {

  return (
    <div className="weather-now-container">
      <h2>Ahora</h2>
      <div className="weather-now-details">
      <img
            src={`http://openweathermap.org/img/wn/${weatherDetails.current.weather[0].icon}@2x.png`}
            alt="Weather Icon"
            className="weather-now-icon"
                      />
        <div>
          <h3>{weatherDetails.current.weather[0].main}</h3>
          <h2>{Math.floor(weatherDetails.current.temp)}°</h2>
        </div>
      </div>
    </div>
  );
};

export default WeatherNow;
