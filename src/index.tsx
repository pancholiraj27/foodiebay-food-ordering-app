import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

console.log(process.env);

root.render(
  <Auth0Provider
    domain={process.env.REACT_APP_LOGIN_DOMAIN}
    clientId={process.env.REACT_APP_LOGIN_CLIENT_ID}
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <App />
  </Auth0Provider>
);

// domain="dev-k47bhp0g634l05wp.us.auth0.com"
// clientId="4XlFN3IySxabQossVGLB7VEaFtDe8sxA"
