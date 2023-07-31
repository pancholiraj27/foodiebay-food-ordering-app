import React, { useEffect, useState } from "react";
import "./FilterSection.css";
import FilterCard from "../FilterCard/FilterCard";

const FilterSection = (props: any) => {
  const [isFilter, setIsFilter] = useState<boolean>(false);

  // disable the scroll when filter modal is opened
  useEffect(() => {
    if (isFilter) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isFilter]);

  const callFilter = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    setIsFilter(true);
  };
  return (
    <>
      {isFilter ? (
        <FilterCard isFilter={isFilter} setIsFilter={setIsFilter} />
      ) : (
        ""
      )}

      <div className="filterSection">
        <div className="innerSection">
          <div className="filter" onClick={callFilter}>
            Filters
          </div>
          <div className="filter">Rating: 4.0 +</div>
        </div>
      </div>
    </>
  );
};

export default FilterSection;
