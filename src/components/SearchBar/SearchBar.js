import React, { useEffect, useState } from "react";
import "./SearchBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlassLocation } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const SearchBar = () => {
  const [postCode, setPostCode] = useState();
  const [location, setLocation] = useState();

  useEffect(() => {
    console.log(location);
  }, [location]);

  const handleSubmit = (e) => {
    e.preventDefault();
    geolocation();
    console.log(location);
  };

  const handleChange = (e) => {
    setPostCode(e.target.value);
  };

  const geolocation = () => {
    const googleApiKey = "AIzaSyDvgGZ6g32NvcVVPHR8rWyXc_syAkGQEvE";
    axios
      .get("https://maps.googleapis.com/maps/api/geocode/json", {
        params: {
          components: `country:ES|postal_code:${postCode}`,
          region: "ES",
          key: googleApiKey,
        },
      })
      .then((res) => {
        setLocation(res.data);
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
          Buscar{" "}
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
