import React from "react";
import "./TopFiveZones.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBoltLightning,
  faMagnifyingGlassLocation,
  faSun,
  faCloud,
} from "@fortawesome/free-solid-svg-icons";
import { faSnowflake } from "@fortawesome/free-regular-svg-icons";

const TopFiveZones = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faSnowflake} size="6x" />
      <FontAwesomeIcon icon={faSun} size="6x" />
      <FontAwesomeIcon icon={faCloud} size="6x" />
    </div>
  );
};

export default TopFiveZones;