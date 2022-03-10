import React, { useEffect } from "react";
import WeatherFullDisplay from "../../components/WeatherFullDisplay/WeatherFullDisplay";
import TopFiveZones from "../../components/TopFiveZones/TopFiveZones";
import "./DetailWeather.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoltLightning } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { getLocation } from "../../features/locationSlice";
import { fetchAsyncWeather } from "../../features/weatherSlice";

const DetailWeather = () => {

  const currentLocation = useSelector(getLocation);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncWeather(currentLocation))
  }, [])

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
