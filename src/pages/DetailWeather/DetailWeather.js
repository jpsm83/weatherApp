import React, { useEffect } from "react";
import WeatherFullDisplay from "../../components/WeatherFullDisplay/WeatherFullDisplay";
import TopFiveZones from "../../components/TopFiveZones/TopFiveZones";
import "./DetailWeather.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoltLightning } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { getLocation } from "../../features/locationSlice";
import { setWeather } from "../../features/weatherSlice";
import axios from "axios";

const DetailWeather = () => {

  const currentLocation = useSelector(getLocation);

  const dispatch = useDispatch();

  useEffect(() => {
    const API_KEY = "9b6ef062a1de6aab80c70f4044a9bdc7";
    const { lat, lng } = currentLocation.results[0].geometry.location;
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`
      )
      .then((res) => {
        dispatch(setWeather(res.data));
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="detail-container">
      <div className="detail-header">
        <h1 className="title-left">Thatz</h1>
        <FontAwesomeIcon icon={faBoltLightning} size="5x" />
        <h1 className="title-right">Weather</h1>
        <p className="detail-weather-header-frase">
          ¡Que la lluvia no te pare!
        </p>
      </div>
      <div className="weather-containers">
        <WeatherFullDisplay />
        <TopFiveZones />
      </div>
    </div>
  );
};

export default DetailWeather;
