import LocationIndicator from "./LocationIndicator";
import OrderType from "./OrderType";
import "./ServicesNavbar.css";
const ServicesNavbar = () => {
  return (
    <div className="main">
      <div className="servicesNav">
        <div className="container">
          <h2>Tomato</h2>
          <input
            className="inputValue"
            type="text"
            placeholder="Search for restaurant, cuisine or a dish"
          />
        </div>
        <div className="user">hello Raj</div>
      </div>
      <LocationIndicator />
      <OrderType />
    </div>
  );
};

export default ServicesNavbar;
