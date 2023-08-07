import React from "react";
import "./Zumbo.css";
import { useAuth0 } from "@auth0/auth0-react";

const ZumboNav = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const { logout } = useAuth0();
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="zumboNav">
      Get The App
      <ul>
        {user !== undefined && isAuthenticated && (
          <div className="loginDetails">
            <img src={user.picture} alt={user.name} />
            <span>Hello {user.name?.split(" ")[0]} !</span>
          </div>
        )}
        {isAuthenticated ? (
          <li
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
          >
            Log Out
          </li>
        ) : (
          <li onClick={() => loginWithRedirect()}>Sign In</li>
        )}
      </ul>
    </div>
  );
};

export default ZumboNav;
