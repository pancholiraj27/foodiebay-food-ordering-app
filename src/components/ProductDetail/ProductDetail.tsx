import { Link, useLocation } from "react-router-dom";
import orderOnline from "../../data/onlineOrder.json";
import dining from "../../data/dining.json";
import nightOut from "../../data/nightOut.json";
import ServicesNavbar from "../Services-nav-header/ServicesNavbar";
import "./ProductDetail.css";
import { useState, useEffect } from "react";
import Status from "../Status/Status";
import { useAuth0 } from "@auth0/auth0-react";

const ProductDetail = (props: any) => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  const { cartItem, setCartItem, cartItemCount, setCartItemCount } = props;
  const [fetchData, setFetchData] = useState<any>([]);
  const [isTableBookModal, setIsTableBookModal] = useState<boolean>(false);
  const [isTableBook, setIsTableBook] = useState<boolean>(false);
  const [showStatus, setShowStatus] = useState(false);
  const location = useLocation();
  let id = location.search;
  id = id.substring(1);

  useEffect(() => {
    if (location.pathname.split("/")[1] == "order-online") {
      setFetchData(orderOnline);
      // console.log("fetch data here");
    } else if (location.pathname.split("/")[1] == "dining") {
      // console.log("fetch data here , dining");
      setFetchData(dining);
    } else if (location.pathname.split("/")[1] == "nightlife-and-clubs") {
      setFetchData(nightOut);
    }
  }, []);

  // disable the scroll when filter modal is opened
  useEffect(() => {
    if (isTableBookModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isTableBookModal]);

  const onTableBook = (e: any) => {
    setIsTableBookModal(true);
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const addToCartClick = (price: any) => {
    setShowStatus(true);
    // setCartItemCount((cartItemCount :number = cartItemCount + 1));
    setCartItem((prev: any) => {
      const data = prev;
      data[id]
        ? (data[id].quantity = data[id].quantity + 1)
        : (data[id] = { id, quantity: 1, price: price });
      return data;
    });
    setTimeout(() => {
      setCartItemCount((prevCount: number) => prevCount + 1);
    }, 500);
    setTimeout(() => {
      setShowStatus(false);
    }, 3000);
  };

  return (
    <div>
      {showStatus ? (
        <Status text={`Add To Cart Successfully`} style="orderPlaced" />
      ) : (
        ""
      )}
      {isTableBookModal ? (
        <div className="tableBook">
          <div className="tableBookConformation">
            <h1>Are You Sure You Want To Book A Table</h1>
            <div className="tableBookConformationBtns">
              <div
                className="tableBookConformationBtn tableBookConformationBtnYes"
                onClick={() => {
                  setIsTableBookModal(false);
                  setIsTableBook(true);
                }}
              >
                YES
              </div>
              <div
                className="tableBookConformationBtn"
                onClick={() => setIsTableBookModal(false)}
              >
                NO
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      <ServicesNavbar
        isOrderType={false}
        cartItem={cartItem}
        cartItemCount={cartItemCount}
        setCartItemCount={setCartItemCount}
      />
      <div className="borderTop">
        {fetchData.map((item: any) => {
          // console.log(item.info.ratingNew.ratings);
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
                      <div
                        className="ratingsDiv"
                        style={{
                          backgroundColor:
                            item.info.ratingNew.ratings.DINING.bgColorV2.type,
                        }}
                      >
                        {item.info.ratingNew.ratings.DINING.rating}
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
                        <div>
                          {item.info.ratingNew.ratings.DINING.reviewCount}
                        </div>
                        <span>Dinning Review</span>
                      </section>
                    </div>
                    <div className="ratingsMain">
                      <div
                        className="ratingsDiv"
                        style={{
                          backgroundColor:
                            item.info.ratingNew.ratings.DELIVERY.bgColorV2.type,
                        }}
                      >
                        {item.info.ratingNew.ratings.DELIVERY.rating}
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
                        <div>
                          {item.info.ratingNew.ratings.DELIVERY.reviewCount}
                        </div>
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
                  {location.pathname.split("/")[1] == "order-online" ? (
                    <div
                      className="direction add2Cart"
                      onClick={(e) => addToCartClick(item.info.cfo.text)}
                    >
                      {showStatus ? "Added To Cart" : "Add To Cart"}
                    </div>
                  ) : !isAuthenticated ? (
                    <div
                      className={`direction add2Cart ${
                        isTableBook ? "isTableBook" : ""
                      }`}
                      onClick={() => alert("sign in to book a table")}
                    >
                      Book A Table
                    </div>
                  ) : (
                    <div
                      className={`direction add2Cart ${
                        isTableBook ? "isTableBook" : ""
                      }`}
                      onClick={(e) => onTableBook(e)}
                    >
                      {isTableBook ? "Table Booked" : "Book A Table"}
                    </div>
                  )}
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};
// ? {isAuthenticated ? "hello" :''} :

export default ProductDetail;
