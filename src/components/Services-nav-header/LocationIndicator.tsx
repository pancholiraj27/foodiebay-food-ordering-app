// nav-bar locations tracker with home / order-online / bangalore

import "./LocationIndicator.css";
import { Link, useLocation } from "react-router-dom";
const LocationIndicator = () => {
  const location = useLocation();
  return (
    <div className="nav-location">
      <span>
        <Link to="/">Home </Link>
        <Link
          to={
            location.pathname !== "/cart"
              ? `/${location.pathname.split("/")[1]}`
              : `/order-online`
          }
        >
          /
          {location.pathname !== "/cart"
            ? location.pathname.split("/")[1]
            : "order-online"}
        </Link>
        / Bangalore
      </span>
    </div>
  );
};

export default LocationIndicator;
