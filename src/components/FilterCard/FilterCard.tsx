import "./FilterCard.css";
import { useEffect, useState } from "react";
import FilterCardHeading from "./FilterCardHeading";
import FilterSectionTypes from "./FilterSectionTypes";
import FiltersTypesDetail from "./FiltersTypesDetail";
const FilterJson = [
  {
    id: 1,
    sectionType: "Sort By",
    class: "sortByFC",
  },
  {
    id: 2,
    sectionType: "Rating",
    class: "ratingFC",
  },
  {
    id: 3,
    sectionType: "Cost per Person",
    class: "cpfFC",
  },
];

const FilterCard = (props: any) => {
  const { isFilter, setIsFilter, setIsFilterApplied, setFilterAppliedData } =
    props;

  const [whichType, setWhichType] = useState("sort");
  const [typeTarget, setTypeTarget] = useState<any>("sortByFC");
  const [sortBy, setSortBy] = useState("Popularity");
  const [filterRating, setFilterRating] = useState("");
  const [costForPerson, setCostForPerson] = useState("");

  const filterClicked = (e: any): void => {
    // first remove the active class
    console.log(typeTarget);
    const activeDiv = document.getElementsByClassName(typeTarget);
    activeDiv[0].classList.remove("isActiveFilter");
    setWhichType("");
    // if someone clicks on the sub heading of sort by so it will add class to it's parent component
    if (e.target.className == "sortByTypeDisplay") {
      setTypeTarget("sortByFC");
      e.target.parentElement.classList.add("isActiveFilter");
      setWhichType("sort");
      return;
    }
    // if it is normal div so it will add a class to it and set type to the class name of it
    setTypeTarget(e.target.className);
    e.target.classList.add("isActiveFilter");
    // .split is done because while clicking on div it also grabe the children name so while doing split while loop white the first word
    setWhichType(e.target.innerText.toLowerCase().split(" ")[0]);
  };

  const clearAllFilter = (): void => {
    const activeDiv = document.getElementsByClassName(typeTarget);
    activeDiv[0].classList.remove("isActiveFilter");
    const defaultActive = document.getElementsByClassName(`sortByFC`);
    defaultActive[0].classList.add("isActiveFilter");
    setWhichType("sort");
    setTypeTarget("sortByFC");
    setSortBy("Popularity");
    setFilterRating("");
    setCostForPerson("");
    console.log("clicked");
    setIsFilter(false);
    setFilterAppliedData([]);
  };

  const onFilterApply = () => {
    setIsFilter(false);
    setIsFilterApplied(true);
    setFilterAppliedData([
      { sortBy: sortBy, rating: filterRating, cost: costForPerson },
    ]);
  };

  return (
    <div className="FilterCardMain">
      <div className="FilterCard">
        <FilterCardHeading isFilter={isFilter} setIsFilter={setIsFilter} />
        <div className="FilterFlex">
          <FilterSectionTypes filterClicked={filterClicked} sortBy={sortBy} />
          <FiltersTypesDetail
            whichType={whichType}
            setSortBy={setSortBy}
            sortBy={sortBy}
            filterRating={filterRating}
            setFilterRating={setFilterRating}
            costForPerson={costForPerson}
            setCostForPerson={setCostForPerson}
          />
        </div>
        <div className="FilterDecision">
          <div></div>
          <div className="applyClear">
            <div className="clearAll" onClick={clearAllFilter}>
              Clear All
            </div>
            <div className="apply" onClick={onFilterApply}>
              Apply
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterCard;
