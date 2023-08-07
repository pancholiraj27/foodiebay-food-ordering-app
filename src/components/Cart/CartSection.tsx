import { useEffect, useState } from "react";
import ServicesNavbar from "../Services-nav-header/ServicesNavbar";
import orderOnlineData from "../../data/onlineOrder.json";
import "./CartSection.css";
import Status from "../Status/Status";
import { useAuth0 } from "@auth0/auth0-react";

const CartSection = (props: any) => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const { cartItem, setCartItem, cartItemCount, setCartItemCount } = props;
  const [cartItemTotal, setCartItemTotal] = useState<number>(0);
  const [isCheckOutModal, setIsCheckOutModal] = useState<boolean>(false);
  const [isOrderConfirm, setIsOrderConfirm] = useState<boolean>(false);

  useEffect(() => {
    let total = 0;

    Object.keys(cartItem).forEach((item) => {
      total += cartItem[item].price * cartItem[item].quantity;
    });
    setCartItemTotal(total);
  }, [cartItem]);

  const incrementCart = (props: any) => {
    console.log("click on increment", cartItem);
    setCartItem((prev: any) => {
      const updatedCart = { ...prev };
      updatedCart[props] = {
        ...updatedCart[props],
        quantity: updatedCart[props].quantity + 1,
      };
      return updatedCart;
    });
    setTimeout(() => {
      setCartItemCount((prevCount: number) => prevCount + 1);
    }, 500);
  };

  const decrementCart = (props: any) => {
    console.log("decrement");
    setCartItem((prev: any) => {
      const updatedCart = { ...prev };
      if (updatedCart[props].quantity > 1) {
        updatedCart[props] = {
          ...updatedCart[props],
          quantity: updatedCart[props].quantity - 1,
        };
      } else {
        console.log("item removed from the cart");
        delete updatedCart[props];
      }
      return updatedCart;
    });
    setTimeout(() => {
      setCartItemCount((prevCount: number) => prevCount - 1);
    }, 500);
  };

  // disable the scroll when filter modal is opened
  useEffect(() => {
    if (isCheckOutModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isCheckOutModal]);

  const onCheckOut = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    setIsCheckOutModal(true);
  };

  return (
    <>
      {isOrderConfirm ? <Status text="Order Placed" style="orderPlaced" /> : ""}
      {isCheckOutModal ? (
        <div className="tableBook">
          <div className="tableBookConformation">
            <h1>Do You Want To Order This ...?</h1>
            <div className="tableBookConformationBtns">
              <div
                className="tableBookConformationBtn tableBookConformationBtnYes"
                onClick={() => {
                  setIsCheckOutModal(false);
                  setCartItem({});
                  setCartItemTotal(0);
                  setCartItemCount(0);
                  setIsOrderConfirm(true);
                  setTimeout(() => {
                    setIsOrderConfirm(false);
                  }, 3000);
                }}
              >
                YES
              </div>
              <div
                className="tableBookConformationBtn"
                onClick={() => setIsCheckOutModal(false)}
              >
                NO
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="cartSection">
        <ServicesNavbar
          isOrderType={false}
          cartItemCount={cartItemCount}
          setCartItemCount={setCartItemCount}
        />
        <div className="cartItemsDiv">
          {Object.keys(cartItem).length > 0 ? (
            orderOnlineData.map((item) => {
              if (
                item.info.resId ==
                (cartItem[item.info.resId]
                  ? cartItem[item.info.resId].id
                  : cartItem[item.info.resId])
              ) {
                return (
                  <div className="cartItemFlex" key={item.info.resId}>
                    <div className="cartItemImg">
                      <img src={item.info.image.url} alt={item.info.name} />
                    </div>
                    <div className="cartItemDetails">
                      <h1>{item.info.name}</h1>
                      <h3>{item.info.cuisine[0].name}</h3>
                      <h3 className="cartItemPrice">₹ {item.info.cfo.text}</h3>
                      <div className="cartItemValue">
                        <div
                          className="cartBtn"
                          onClick={() => incrementCart(item.info.resId)}
                        >
                          +
                        </div>
                        <div className="quantity">
                          {cartItem[item.info.resId].quantity}
                        </div>
                        <div
                          className="cartBtn"
                          onClick={() => decrementCart(item.info.resId)}
                        >
                          -
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            })
          ) : (
            <div className="emptyCart">Cart Is Empty</div>
          )}
        </div>
      </div>
      {cartItemCount > 0 ? (
        <div className="cartCheckoutDiv">
          <div className="cartTotal">Total - ₹{cartItemTotal}</div>
          {isAuthenticated ? (
            <div className="cartCheckout" onClick={onCheckOut}>
              checkout Cart
            </div>
          ) : (
            <div
              className="cartCheckout cartCheckLock"
              onClick={() => alert("You Need To Sign In For Order")}
            >
              checkout Cart
            </div>
          )}
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default CartSection;
