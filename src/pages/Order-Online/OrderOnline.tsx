import ServicesNavbar from "../../components/Services-nav-header/ServicesNavbar";
import FilterSection from "../../components/Services-nav-header/FilterSection";
import "../Common.css";
import foodDetails from "../../data/onlineOrder.json";
import Card from "../../components/Card/Card";
const OrderOnline = () => {
  return (
    <div>
      <ServicesNavbar isOrderType={true} />
      <FilterSection />

      <div className="screenWidth">
        <h3>Delivery Restaurants in Bengalulru</h3>
        <div className="foodCards">
          {foodDetails.map((item) => {
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
