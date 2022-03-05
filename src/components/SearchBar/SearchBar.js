import React from "react";
import "./SearchBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlassLocation } from "@fortawesome/free-solid-svg-icons";


const SearchBar = () => {
  const handleSubmit = () => {
    console.log("submit");
  };

  const handleChange = () => {
    console.log("change");
  };

  const errors = [];

  return (
    <div>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          className="search-input"
          type="text"
          placeholder="Introduce el código postal"
          name="codigoPostal"
          onChange={handleChange}
        />
        <button className="submit-button" type="submit">
          Buscar{" "}
          <FontAwesomeIcon icon={faMagnifyingGlassLocation} className="search-icon" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
