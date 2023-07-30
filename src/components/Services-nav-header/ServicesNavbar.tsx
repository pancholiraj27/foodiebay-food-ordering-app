import { Link } from "react-router-dom";
import LocationIndicator from "./LocationIndicator";
import OrderType from "./OrderType";
import "./ServicesNavbar.css";
const ServicesNavbar = (props: any) => {
  return (
    <div className="main">
      <div className="servicesNav">
        <div className="container">
          <Link className="linkTag" to="/">
            <h2>Tomato</h2>
          </Link>
          <input
            className="inputValue"
            type="text"
            placeholder="Search for restaurant, cuisine or a dish"
          />
        </div>
        <div className="user">hello Raj</div>
      </div>
      <LocationIndicator />
      {props.isOrderType ? (
        <>
          <OrderType />
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default ServicesNavbar;
