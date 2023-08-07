import { useState, useEffect } from "react";
import ServicesNavbar from "../../components/Services-nav-header/ServicesNavbar";
import FilterSection from "../../components/Services-nav-header/FilterSection";
import "../Common.css";
import foodDetails from "../../data/onlineOrder.json";
import Card from "../../components/Card/Card";
const OrderOnline = (props: any) => {
  const { cartItem, setCartItem, cartItemCount, setCartItemCount } = props;
  const [filterAppliedData, setFilterAppliedData] = useState<any>([]);
  const [newArr, setNewArr] = useState<any>(foodDetails);
  const [filterAppliedDataTesting, setFilterAppliedDataTesting] = useState<any>(
    []
  );
  console.log(cartItem);

  useEffect(() => {
    setNewArr([...foodDetails]);
    if (filterAppliedData.length > 0) {
      // 1st filter
      if (filterAppliedData[0].sortBy) {
        onFilterAppliedSortBy(filterAppliedData[0].sortBy);
      }
      // 2nd filter
      if (filterAppliedData[0].rating) {
        onFilterAppliedRating(filterAppliedData[0].rating);
      }
      // 3rd filter
      if (filterAppliedData[0].cost) {
        onFilterAppliedCost(filterAppliedData[0].cost);
      }
    }
  }, [filterAppliedData]);

  const onFilterAppliedSortBy = (prop: any) => {
    if (
      filterAppliedData[0].sortBy === "Rating: High to Low" ||
      filterAppliedData[0].sortBy === "Popularity"
    ) {
      const RatingSortFilter = newArr.sort((a: any, b: any) => {
        return (
          parseInt(b.info.rating.rating_text) -
          parseInt(a.info.rating.rating_text)
        );
      });
      setNewArr([...RatingSortFilter]);
    }

    // if delivery Time
    if (filterAppliedData[0].sortBy === "Delivery Time") {
      const DeliverySortFilter = newArr.sort((a: any, b: any) => {
        return parseInt(a.order.deliveryTime) - parseInt(b.order.deliveryTime);
      });
      setNewArr([...DeliverySortFilter]);
    }

    // cost low to high
    if (filterAppliedData[0].sortBy === "Cost: Low to High") {
      const CostLowSortFilter = newArr.sort((a: any, b: any) => {
        return parseInt(a.info.cfo.text) - parseInt(b.info.cfo.text);
      });
      setNewArr([...CostLowSortFilter]);
    }

    // cost High to Low
    if (filterAppliedData[0].sortBy === "Cost: High to Low") {
      console.log("i am acalled");
      const CostHighSortFilter = newArr.sort((a: any, b: any) => {
        return parseInt(b.info.cfo.text) - parseInt(a.info.cfo.text);
      });
      setNewArr([...CostHighSortFilter]);
    }
  };

  const onFilterAppliedRating = (prop: any) => {
    setNewArr("");
    const RatingSortFilter = newArr.map((item: any, index: any) => {
      if (item.info.rating.rating_text >= prop) {
        setNewArr((prev: any) => [...prev, item]);
      }
    });
  };
  const onFilterAppliedCost = (prop: any) => {
    setNewArr("");
    const CostFilterApplied = newArr.map((item: any, index: any) => {
      if (item.info.cfo.text >= prop) {
        setNewArr((prev: any) => [...prev, item]);
      }
    });
  };

  return (
    <div>
      <ServicesNavbar
        isOrderType={true}
        cartItem={cartItem}
        cartItemCount={cartItemCount}
        setCartItemCount={setCartItemCount}
      />
      <FilterSection
        filterAppliedData={filterAppliedData}
        setFilterAppliedData={setFilterAppliedData}
      />
      <div className="screenWidth">
        <h3>Delivery Restaurants in Bengalulru</h3>
        <div className="foodCards">
          {newArr.map((item: any) => {
            return (
              <Card
                key={item.info.resId}
                subHeading={item.info.name}
                name={item.info.cuisine[0].name}
                offer={item.bulkOffers[0].text}
                deliveryTime={item.order.deliveryTime}
                rating={item.info.rating.rating_text}
                img={item.info.image.url}
                cost={item.info.cfo.text}
                id={item.info.resId}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OrderOnline;
