import React, { useState } from "react";
import "./SearchBar.css";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ onSearchChange }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearchChange(value);
  };

  return (
    <div className="search-container">
      <form className="search-form">
        <input
          type="text"
          placeholder="Buscar mascotas..."
          className="search-input"
          value={searchTerm}
          onChange={handleChange}
        />
          <FaSearch className="search-button search-icon" />
      </form>
    </div>
  );
};

export default SearchBar;