import React from "react";
import "./WeatherSingleCard.css";
import moment from "moment";

const WeatherSingleCard = ({
  icon,
  weekDay,
  typeOfCard,
  hours,
  weather,
  temp,
}) => {

  return (
    <div>
      {typeOfCard === "daily" ? (
        <div className="single-card-container">
          <p>{weekDay}</p>
          <img
            src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
            alt="Weather Icon"
            className="single-card-icon"
          />
          <p>{weather}</p>
          <h3>{Math.floor(temp)}°</h3>
        </div>
      ) : (
        <div className="single-card-container">
          {hours === moment().format("H[:00]") ? <p>Ahora</p> : <p>{hours}</p>}
          <img
            src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
            alt="Weather Icon"
            className="single-card-icon"
          />
          <p>{weather}</p>
          <h3>{Math.floor(temp)}°</h3>
        </div>
      )}
    </div>
  );
};

export default WeatherSingleCard;
