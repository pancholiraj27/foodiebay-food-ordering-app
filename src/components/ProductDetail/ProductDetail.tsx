import { Link, useLocation } from "react-router-dom";
import orderOnline from "../../data/onlineOrder.json";
import dining from "../../data/dining.json";
import nightOut from "../../data/nightOut.json";
import ServicesNavbar from "../Services-nav-header/ServicesNavbar";
import "./ProductDetail.css";
import { useState, useEffect } from "react";
const ProductDetail = () => {
  const [fetchData, setFetchData] = useState<any>([]);
  const location = useLocation();
  let id = location.search;
  id = id.substring(1);
  console.log(location.pathname.split("/")[1]);

  useEffect(() => {
    if (location.pathname.split("/")[1] == "order-online") {
      setFetchData(orderOnline);
      console.log("fetch data here , onluine");
    } else if (location.pathname.split("/")[1] == "dining") {
      console.log("fetch data here , dining");
      setFetchData(dining);
    } else if (location.pathname.split("/")[1] == "nightlife-and-clubs") {
      setFetchData(nightOut);
    }
  }, []);

  console.log(fetchData, "from here fetch data");
  return (
    <div>
      <ServicesNavbar isOrderType={false} />
      <div className="borderTop">
        {fetchData.map((item: any) => {
          if (item.info.resId === parseInt(id)) {
            return (
              <div className="mainDiv" key={parseInt(id)}>
                <div className="imageBoxPDMain">
                  <div className="imageBoxPD-1">
                    <img
                      className="img"
                      src={item.info.image.url}
                      alt={item.info.name}
                    />
                  </div>
                  <div className="imageBoxPD-2">
                    <img
                      className="img"
                      src={item.extraImage[0]}
                      alt={item.info.name}
                    />
                    <img
                      className="img"
                      src={item.extraImage[1]}
                      alt={item.info.name}
                    />
                  </div>
                  <div className="imageBoxPD-3">
                    <img
                      className="img"
                      src={item.extraImage[2]}
                      alt={item.info.name}
                    />
                  </div>
                </div>

                <section className="name-ratings">
                  <div>
                    <h3>{item.info.name}</h3>
                  </div>
                  <section className="ratings">
                    <div className="ratingsMain">
                      <div className="ratingsDiv">
                        4.5
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
                      <section className="ratingDetail">
                        <div>2318</div>
                        <span>Dinning Review</span>
                      </section>
                    </div>
                    <div className="ratingsMain">
                      <div className="ratingsDiv">
                        4.8
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
                      <section className="ratingDetail">
                        <div>2318</div>
                        <span>Delivery Review</span>
                      </section>
                    </div>
                  </section>
                </section>
                <div className="subHeading">
                  {item.info.cuisine.map((item: any) =>
                    item.name.concat(" , ")
                  )}
                </div>
                <div className="address">{item.info.locality.address}</div>
                <div className="timing">{item.info.timing.text}</div>

                <div className="detailEnding">
                  <Link
                    to={`https://www.google.com/maps/place/${item.info.locality.localityUrl}`}
                    target="_black"
                    className="linkTag"
                  >
                    <div className="direction">Direction</div>
                  </Link>
                  <div className="direction add2Cart">Add To Cart</div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default ProductDetail;
