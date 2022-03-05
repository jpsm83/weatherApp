import React from "react";
import "./WeatherSingleCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSnowflake } from "@fortawesome/free-regular-svg-icons";

const WeatherSingleCard = ({ typeOfCard }) => {
  return (
    <div>
      {typeOfCard === "daily" ? (
        <div className="single-card-container">
          <p>Monday</p>
          <FontAwesomeIcon icon={faSnowflake} className="single-card-icon" />
          <p>Nieve</p>
          <h3>-3*</h3>
        </div>
      ) : (
        <div className="single-card-container">
          <p>Ahora</p>
          <FontAwesomeIcon icon={faSnowflake} className="single-card-icon" />
          <p>Nieve</p>
          <h3>-3*</h3>
        </div>
      )}
    </div>
  );
};

export default WeatherSingleCard;
