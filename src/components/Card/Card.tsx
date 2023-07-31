import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import "./Card.css";
const Card = (props: any) => {
  let location = useLocation();
  const {
    subHeading,
    name,
    offer,
    deliveryTime,
    rating,
    img,
    cost,
    id,
    distance,
  } = props;
  return (
    <div className="CardMain" key={id}>
      <Link
        to={{
          pathname: `${location.pathname}/${name}/${subHeading}`,
          search: `${id}`,
        }}
        className="LinkTag"
      >
        <div className="imageBox">
          <img src={img} alt={name} />
          {offer ? <div className="offer">{offer}</div> : ""}
        </div>
        <div className="itemHeading">
          <div className="card-details">
            <div className="title">{name}</div>
            <div className="rating">
              {rating}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#FFFFFF"
                width="0.8rem"
                height="0.6rem"
                viewBox="0 0 20 20"
                aria-labelledby="icon-svg-title- icon-svg-desc-"
                role="img"
                className="starIcon"
              >
                <title>star-fill</title>
                <path d="M6.76 6.8l-6.38 0.96c-0.22 0.040-0.38 0.22-0.38 0.44 0 0.12 0.040 0.24 0.12 0.32v0l4.64 4.76-1.1 6.66c0 0.020 0 0.040 0 0.080 0 0.24 0.2 0.44 0.44 0.44 0.1 0 0.16-0.020 0.24-0.060v0l5.7-3.12 5.68 3.12c0.060 0.040 0.14 0.060 0.22 0.060 0.24 0 0.44-0.2 0.44-0.44 0-0.040 0-0.060 0-0.080v0l-1.1-6.66 4.64-4.76c0.080-0.080 0.12-0.2 0.12-0.32 0-0.22-0.16-0.4-0.36-0.44h-0.020l-6.38-0.96-2.96-6.18c-0.060-0.12-0.18-0.2-0.32-0.2s-0.26 0.080-0.32 0.2v0z"></path>
              </svg>
            </div>
          </div>
          <div className="card-details ">
            <div className="foodDescription">{subHeading} </div>
            <div className="foodDescription">{cost}</div>
          </div>
          <div className="card-details title-rating">
            <div></div>
            <div className="timing">
              {location.pathname == "/order-online"
                ? deliveryTime
                : location.pathname == "/dining"
                ? distance
                : distance}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
