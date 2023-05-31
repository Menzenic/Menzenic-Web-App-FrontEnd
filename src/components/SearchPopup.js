import React from "react";
import "../styles/SearchPopup.css";

const SearchPopup = () => {
  return (
    <div className="search-popup">
      <div className="search-popup-content">
        <h2>Search Products</h2>
        <form className="search-form">
          <input type="text" placeholder="Enter keywords..." />
          <button type="submit">Search</button>
        </form>
        <p>What are you looking for?</p>
      </div>
    </div>
  );
};

export default SearchPopup;
