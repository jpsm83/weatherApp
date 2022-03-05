import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBoltLightning,
} from "@fortawesome/free-solid-svg-icons";
import "./Home.css";
import SearchBar from "../../components/SearchBar/SearchBar"

const Home = () => {
  return (
    <div className="home-container">
      <div className="header">
        <h1 className="title-left">Thatz</h1>
        <FontAwesomeIcon icon={faBoltLightning} size="5x" />
        <h1 className="title-right">Weather</h1>
      </div>
      <div className="center-container">
        <p>Entérate del tiempo en la zona exacta que te interesa buscando por código posta.</p>
        <SearchBar />
      </div>
      <div className="footer">
        <p>¡Que la lluvia no te pare!</p>
      </div>
    </div>
  );
};

export default Home;
