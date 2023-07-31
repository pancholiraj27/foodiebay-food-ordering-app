import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import "./OrderType.css";
const OrderType = () => {
  const location = useLocation();
  if (location.pathname == "/order-online") {
  }
  return (
    <div className="orderType">
      <Link to="/order-online" className="LinkTag">
        <div
          className={`orderDetail ${
            location.pathname === "/order-online" ? "isActive" : ""
          }`}
        >
          {location.pathname === "/order-online" ? (
            <div className="imgDiv isActiveImgDivOnline">
              <img
                src="https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png"
                alt=""
              />
            </div>
          ) : (
            <div className="imgDiv ">
              <img
                src="https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png"
                alt=""
              />
            </div>
          )}
          <h3>Delivery</h3>
        </div>
      </Link>

      <Link to="/dining" className="LinkTag">
        <div
          className={`orderDetail ${
            location.pathname === "/dining" ? "isActive" : ""
          }`}
        >
          {location.pathname === "/dining" ? (
            <div className="imgDiv isActiveDivDining">
              <img
                src="https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png"
                alt=""
              />
            </div>
          ) : (
            <div className="imgDiv">
              <img
                src="https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png"
                alt=""
              />
            </div>
          )}
          <h3>Dining</h3>
        </div>
      </Link>

      <Link to="/nightlife-and-clubs" className="LinkTag">
        <div
          className={`orderDetail ${
            location.pathname === "/nightlife-and-clubs" ? "isActive" : ""
          }`}
        >
          {location.pathname === "/nightlife-and-clubs" ? (
            <div className="imgDiv isActiveDivNight">
              <img
                src="https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png"
                alt=""
              />
            </div>
          ) : (
            <div className="imgDiv">
              <img
                src="https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png"
                alt=""
              />
            </div>
          )}
          <h3>Nightlife</h3>
        </div>
      </Link>
    </div>
  );
};

export default OrderType;
