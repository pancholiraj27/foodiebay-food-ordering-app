import { Link } from "react-router-dom";
import LocationIndicator from "./LocationIndicator";
import OrderType from "./OrderType";
import "./ServicesNavbar.css";
import FilterSection from "./FilterSection";
import SearchBox from "../Home-Page/SearchBox";
import SearchBoxNavTop from "./SearchBoxNavTop";
import { useState } from "react";
// for login
import { useAuth0 } from "@auth0/auth0-react";

const ServicesNavbar = (props: any) => {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    <div className="main">
      <div className="servicesNav">
        <div className="container">
          <Link className="linkTag" to="/">
            <h2>Tomato</h2>
          </Link>
        </div>
        <SearchBoxNavTop />

        {user !== undefined && isAuthenticated && (
          <div className="loginDetails">
            <img src={user.picture} alt={user.name} />
            <span>Hello {user.name?.split(" ")[0]} !</span>
          </div>
        )}
        {isAuthenticated ? (
          <div
            className="login-logout"
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
          >
            <p>LogOut</p>
            {/* <p>Hello Raj!</p> */}
          </div>
        ) : (
          <div className="login-logout" onClick={() => loginWithRedirect()}>
            <p>Sign In</p>
          </div>
        )}
        <Link to="/cart">
          <div className="user">
            {props.cartItemCount > 0 ? (
              <span className="cartItemCount">{props.cartItemCount}</span>
            ) : (
              ""
            )}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 1"
              viewBox="0 0 24 24"
              id="cart"
              className="cartSVG"
            >
              <path d="M8.5,19A1.5,1.5,0,1,0,10,20.5,1.5,1.5,0,0,0,8.5,19ZM19,16H7a1,1,0,0,1,0-2h8.49121A3.0132,3.0132,0,0,0,18.376,11.82422L19.96143,6.2749A1.00009,1.00009,0,0,0,19,5H6.73907A3.00666,3.00666,0,0,0,3.92139,3H3A1,1,0,0,0,3,5h.92139a1.00459,1.00459,0,0,1,.96142.7251l.15552.54474.00024.00506L6.6792,12.01709A3.00006,3.00006,0,0,0,7,18H19a1,1,0,0,0,0-2ZM17.67432,7l-1.2212,4.27441A1.00458,1.00458,0,0,1,15.49121,12H8.75439l-.25494-.89221L7.32642,7ZM16.5,19A1.5,1.5,0,1,0,18,20.5,1.5,1.5,0,0,0,16.5,19Z"></path>
            </svg>
          </div>
        </Link>
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
