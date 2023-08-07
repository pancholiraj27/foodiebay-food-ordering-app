import React, { useEffect, useState } from "react";
import "./FilterSection.css";
import FilterCard from "../FilterCard/FilterCard";

const FilterSection = (props: any) => {
  const { filterAppliedData, setFilterAppliedData } = props;
  const [isFilter, setIsFilter] = useState<boolean>(false);
  const [isFilterApplied, setIsFilterApplied] = useState(false);
  // const [filterAppliedData, setFilterAppliedData] = useState([]);

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

  const removeFilterItem = (item: any) => {
    console.log("CLICKED");
    if (filterAppliedData[0].sortBy == item) {
      setFilterAppliedData((prev: any) => [
        ...prev,
        (filterAppliedData[0].sortBy = ""),
      ]);
    } else if (filterAppliedData[0].rating == item) {
      setFilterAppliedData((prev: any) => [
        ...prev,
        (filterAppliedData[0].rating = ""),
      ]);
    } else if (filterAppliedData[0].cost == item) {
      setFilterAppliedData((prev: any) => [
        ...prev,
        (filterAppliedData[0].cost = ""),
      ]);
    }
  };

  return (
    <>
      {isFilter ? (
        <FilterCard
          isFilter={isFilter}
          setIsFilter={setIsFilter}
          isFilterApplied={isFilterApplied}
          setIsFilterApplied={setIsFilterApplied}
          setFilterAppliedData={setFilterAppliedData}
        />
      ) : (
        ""
      )}

      <div className="filterSection">
        <div className="innerSection">
          <div className="filter" onClick={callFilter}>
            {document.getElementsByClassName("filterApplied").length !== 0 ? (
              <span className="filterCount">
                {document.getElementsByClassName("filterApplied").length}
              </span>
            ) : (
              ""
            )}
            Filters
          </div>
          {filterAppliedData.length >= 1 && filterAppliedData[0].sortBy ? (
            <div className="filter filterApplied">
              {filterAppliedData[0].sortBy}
              <svg
                onClick={() => removeFilterItem(filterAppliedData[0].sortBy)}
                xmlns="http://www.w3.org/2000/svg"
                fill="#FFFFFF"
                width="18"
                height="18"
                viewBox="0 0 20 20"
                aria-labelledby="icon-svg-title- icon-svg-desc-"
                role="img"
                className="svg"
              >
                <title>cross</title>
                <path d="M11.42 10.42l3.54-3.54c0.38-0.4 0.38-1.040 0-1.42s-1.020-0.4-1.42 0l-3.54 3.54-3.54-3.54c-0.4-0.4-1.020-0.4-1.42 0s-0.38 1.020 0 1.42l3.54 3.54-3.54 3.54c-0.38 0.38-0.38 1.020 0 1.42 0.2 0.18 0.46 0.28 0.72 0.28s0.5-0.1 0.7-0.28l3.54-3.56 3.54 3.56c0.2 0.18 0.46 0.28 0.72 0.28s0.5-0.1 0.7-0.28c0.38-0.4 0.38-1.040 0-1.42l-3.54-3.54z"></path>
              </svg>
            </div>
          ) : (
            ""
          )}
          {filterAppliedData.length >= 1 && filterAppliedData[0].rating ? (
            <div className="filter filterApplied">
              {filterAppliedData[0].rating >= 1 &&
              filterAppliedData[0].rating <= 5
                ? `Ratings: ${filterAppliedData[0].rating}`
                : ""}
              <svg
                onClick={() => removeFilterItem(filterAppliedData[0].rating)}
                xmlns="http://www.w3.org/2000/svg"
                fill="#FFFFFF"
                width="18"
                height="18"
                viewBox="0 0 20 20"
                aria-labelledby="icon-svg-title- icon-svg-desc-"
                role="img"
                className="svg"
              >
                <title>cross</title>
                <path d="M11.42 10.42l3.54-3.54c0.38-0.4 0.38-1.040 0-1.42s-1.020-0.4-1.42 0l-3.54 3.54-3.54-3.54c-0.4-0.4-1.020-0.4-1.42 0s-0.38 1.020 0 1.42l3.54 3.54-3.54 3.54c-0.38 0.38-0.38 1.020 0 1.42 0.2 0.18 0.46 0.28 0.72 0.28s0.5-0.1 0.7-0.28l3.54-3.56 3.54 3.56c0.2 0.18 0.46 0.28 0.72 0.28s0.5-0.1 0.7-0.28c0.38-0.4 0.38-1.040 0-1.42l-3.54-3.54z"></path>
              </svg>
            </div>
          ) : (
            ""
          )}
          {filterAppliedData.length >= 1 && filterAppliedData[0].cost ? (
            <div className="filter filterApplied">
              {filterAppliedData[0].cost >= 1200
                ? "Cost: 1,200 +"
                : `Cost:  ₹${filterAppliedData[0].cost}`}
              <svg
                onClick={() => removeFilterItem(filterAppliedData[0].cost)}
                xmlns="http://www.w3.org/2000/svg"
                fill="#FFFFFF"
                width="18"
                height="18"
                viewBox="0 0 20 20"
                aria-labelledby="icon-svg-title- icon-svg-desc-"
                role="img"
                className="svg"
              >
                <title>cross</title>
                <path d="M11.42 10.42l3.54-3.54c0.38-0.4 0.38-1.040 0-1.42s-1.020-0.4-1.42 0l-3.54 3.54-3.54-3.54c-0.4-0.4-1.020-0.4-1.42 0s-0.38 1.020 0 1.42l3.54 3.54-3.54 3.54c-0.38 0.38-0.38 1.020 0 1.42 0.2 0.18 0.46 0.28 0.72 0.28s0.5-0.1 0.7-0.28l3.54-3.56 3.54 3.56c0.2 0.18 0.46 0.28 0.72 0.28s0.5-0.1 0.7-0.28c0.38-0.4 0.38-1.040 0-1.42l-3.54-3.54z"></path>
              </svg>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default FilterSection;
