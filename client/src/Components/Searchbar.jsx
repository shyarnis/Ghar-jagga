import React, { useState } from "react";
// import SearchIcon from "@material-ui/icons/Search";
import SearchIcon from "@mui/icons-material/Search";
import "../Stylesheets/Searchbar.css";

import { useNavigate } from "react-router-dom";

const DesktopSearchBar = () => {
  const navigate = useNavigate();
  const [search, setSearchQuery] = useState("");
  const [findBy, setFindBy] = useState("sale");

  const redirectToFilterSearchResult = (location) => {
    navigate(`/search/${findBy}/results-location/${location}`);
  };

  const searchBoxResults = () => {
    navigate(`/search/${findBy}/results-location/${search}`);
  };
  return (
    <div className="Search__container">
      <div className="Search__text">
        <h4>Find Your Ideal Home</h4>
      </div>
      <div className="Search__field">
        <input
          type="text"
          placeholder="Province search supported"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <SearchIcon onClick={searchBoxResults} />
      </div>
      <select onChange={(e) => setFindBy(e.target.value)}>
        <option value="sale">Sale</option>
        <option value="rent">Rent</option>
      </select>
      <div className="filters">
        Filter By Province:
        <select onChange={(e) => redirectToFilterSearchResult(e.target.value)}>
          <option>...</option>
          <option>Province1</option>
          <option>Province2</option>
          <option>Province3</option>
          <option>Province4</option>
          <option>Province5</option>
          <option>Province6</option>
          <option>Province7</option>
        </select>
      </div>
    </div>
  );
};

export default DesktopSearchBar;
