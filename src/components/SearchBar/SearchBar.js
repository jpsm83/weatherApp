/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import "./SearchBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlassLocation } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLocation } from "../../features/locationSlice";
import axios from "axios";

const SearchBar = () => {
  const [postCode, setPostCode] = useState();
  const [locationDetails, setLocationDetails] = useState();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    getLocationDetails();
  }, [postCode]);

  const getLocationDetails = async () => {
    const response = await axios.get(
      "https://maps.googleapis.com/maps/api/geocode/json",
      {
        params: {
          components: `country:ES|postal_code:${postCode}`,
          region: "ES",
          key: process.env.REACT_APP_GOOGLE_API_KEY,
        },
      }
    );
    setLocationDetails(response.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setLocation(locationDetails));
    navigate("/detail-weather");
  };

  const handleChange = (e) => {
    setPostCode(e.target.value);
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
