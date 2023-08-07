import { useLocation } from "react-router-dom";
const FiltersTypesDetail = (props: any) => {
  const {
    whichType,
    setSortBy,
    sortBy,
    filterRating,
    setFilterRating,
    costForPerson,
    setCostForPerson,
  } = props;

  const onFormSubmit = (e: any) => {
    e.preventDefault();
  };

  const url = useLocation();

  console.log(url.pathname);
  return (
    <div className="FilterTypes">
      {whichType == "sort" ? (
        <div className="sortByDetail">
          {/* <form onSubmit={(e) => onFormSubmit}> */}
          <label className="optionSelect" htmlFor="popularity">
            <input
              type="radio"
              id="popularity"
              name="test"
              value="Popularity"
              className="objectCircle"
              onChange={() => {
                setSortBy("Popularity");
              }}
              checked={sortBy == "Popularity" ? true : false}
            />
            Populartiy
          </label>

          <label className="optionSelect" htmlFor="rating">
            <input
              type="radio"
              id="rating"
              name="test"
              value="Rating: High to Low"
              className="objectCircle"
              onChange={() => {
                setSortBy("Rating: High to Low");
              }}
              checked={sortBy == "Rating: High to Low" ? true : false}
            />
            Rating: High to Low
          </label>
          <label className="optionSelect" htmlFor="delivery">
            <input
              type="radio"
              id="delivery"
              name="test"
              value={
                url.pathname !== "/order-online" ? "Distance" : "Delivery Time"
              }
              className="objectCircle"
              onChange={() => {
                setSortBy(
                  url.pathname !== "/order-online"
                    ? "Distance"
                    : "Delivery Time"
                );
              }}
              checked={
                sortBy ==
                (url.pathname !== "/order-online"
                  ? "Distance"
                  : "Delivery Time")
                  ? true
                  : false
              }
            />
            {url.pathname !== "/order-online" ? "Distance" : "Delivery Time"}
          </label>
          <label className="optionSelect" htmlFor="low">
            <input
              type="radio"
              id="low"
              name="test"
              value="Cost: Low to High"
              className="objectCircle"
              onChange={() => setSortBy("Cost: Low to High")}
              checked={sortBy == "Cost: Low to High" ? true : false}
            />
            Cost: Low to High
          </label>
          <label className="optionSelect" htmlFor="hight">
            <input
              type="radio"
              id="hight"
              name="test"
              value="Cost: High to Low"
              className="objectCircle"
              onChange={() => setSortBy("Cost: High to Low")}
              checked={sortBy == "Cost: High to Low" ? true : false}
            />
            Cost: High to Low
          </label>
          {/* </form> */}
        </div>
      ) : whichType == "rating" ? (
        <div className="rating-cpp">
          <div className="rating-cpp-header">
            <div className="rating-cpp-heading">Ratings</div>
            <div className="rating-cpp-amount">
              {filterRating < 1 ? "Any" : filterRating} +
            </div>
          </div>
          <div className="slider">
            <input
              type="range"
              min={0}
              max={5}
              value={filterRating}
              step={1}
              onChange={(e) => setFilterRating(parseInt(e.target.value))}
            />
          </div>
        </div>
      ) : whichType == "cost" ? (
        <div className="rating-cpp">
          <div className="rating-cpp-header">
            <div className="rating-cpp-heading">Cost per Person</div>
            <div className="rating-cpp-amount">
              &#8377;{" "}
              {costForPerson >= 1200
                ? "1,200+"
                : costForPerson == ""
                ? "Any"
                : costForPerson}
            </div>
          </div>
          <div className="slider">
            <input
              type="range"
              min={0}
              max={1200}
              value={costForPerson}
              step={200}
              onChange={(e) => setCostForPerson(parseInt(e.target.value))}
            />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default FiltersTypesDetail;
