import React from "react";
import ServicesNavbar from "../../components/Services-nav-header/ServicesNavbar";
import FilterSection from "../../components/Services-nav-header/FilterSection";
import "../Common.css";
import Card from "../../components/Card/Card";
import nightOutDetails from "../../data/nightOut.json";

const NightLife = () => {
  return (
    <div>
      <ServicesNavbar isOrderType={true} />
      <FilterSection />

      <div className="screenWidth">
        <h3>Trending dining restaurants in Bengaluru</h3>
        <div className="foodCards">
          {nightOutDetails.map((item) => {
            return (
              <Card
                subHeading={item.info.name}
                name={item.info.cuisine[0].name}
                distance={item.distance}
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

export default NightLife;
