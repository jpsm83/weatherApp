import React from "react";
import "./WeatherSingleCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSnowflake } from "@fortawesome/free-regular-svg-icons";

const WeatherSingleCard = ({ icon, weekDay, typeOfCard, timezone, weather, temp }) => {
  return (
    <div>
      {typeOfCard === "daily" ? (
        <div className="single-card-container">
          <p>{weekDay}</p>
          <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="Weather Icon" />
          <FontAwesomeIcon icon={faSnowflake} className="single-card-icon" />
          <p>{weather}</p>
          <h3>{temp}</h3>
        </div>
      ) : (
        <div className="single-card-container">
          <p>{timezone}</p>
          <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="Weather Icon" />
          <FontAwesomeIcon icon={faSnowflake} className="single-card-icon" />
          <p>{weather}</p>
          <h3>{temp}</h3>
        </div>
      )}
    </div>
  );
};

export default WeatherSingleCard;
