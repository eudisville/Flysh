import React from "react";
import "./Search.css";

const Search = () => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Recherchez ici..."
        className="search-input"
      />
      <button className="search-button">
        <img src="search.png" alt="" />
      </button>
    </div>
  );
};

export default Search;
