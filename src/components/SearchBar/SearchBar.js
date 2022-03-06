import React, { useState } from "react";
import "./SearchBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlassLocation } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLocation } from "../../features/locationSlice";

const SearchBar = () => {
  const [postCode, setPostCode] = useState();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    geolocation();
    navigate("/detail-weather");
  };

  const handleChange = (e) => {
    setPostCode(e.target.value);
  };

  const geolocation = () => {
    axios
      .get("https://maps.googleapis.com/maps/api/geocode/json", {
        params: {
          components: `country:ES|postal_code:${postCode}`,
          region: "ES",
          key: process.env.REACT_APP_GOOGLE_API_KEY
        },
      })
      .then((res) => {
        console.log(res.data)
        dispatch(setLocation(res.data))
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          className="search-input"
          type="text"
          placeholder="Introduce el código postal"
          onChange={handleChange}
        />
        <button className="submit-button" type="submit">
          Buscar
          <FontAwesomeIcon
            icon={faMagnifyingGlassLocation}
            className="search-icon"
          />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
