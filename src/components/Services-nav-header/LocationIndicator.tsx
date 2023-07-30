// nav-bar locations tracker with home / order-online / bangalore

import "./LocationIndicator.css";
import { Link, useLocation } from "react-router-dom";
const LocationIndicator = () => {
  const location = useLocation();
  return (
    <div className="nav-location">
      <span>
        <a href="/">Home </a>
        <Link to={`/${location.pathname.split("/")[1]} `}>
          /{location.pathname.split("/")[1]}
        </Link>
        / Bangalore
      </span>
    </div>
  );
};

export default LocationIndicator;
