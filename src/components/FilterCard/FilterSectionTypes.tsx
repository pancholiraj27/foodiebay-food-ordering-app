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
const FilterSectionTypes = (props: any) => {
  const { filterClicked, sortBy } = props;
  return (
    <div className="FilterSectionType">
      {FilterJson.map((item) => {
        return (
          <div
            key={item.id}
            className={`FilterTypeDiv ${item.class} ${
              item.class === "sortByFC" ? "isActiveFilter" : ""
            }`}
            onClick={(e) => filterClicked(e)}
          >
            {item.sectionType}
            {item.sectionType == "Sort By" ? (
              <div className="sortByTypeDisplay">{sortBy}</div>
            ) : (
              ""
            )}
          </div>
        );
      })}
    </div>
  );
};

export default FilterSectionTypes;
