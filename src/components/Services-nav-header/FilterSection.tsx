import React from "react";
import "./FilterSection.css";
const FilterSection = () => {
  return (
    <div className="filterSection">
      <div className="innerSection">
        <div className="filter" onClick={() => console.log("hello")}>
          Filters
        </div>
        <div className="filter">Rating: 4.0 +</div>
      </div>
    </div>
  );
};

export default FilterSection;
