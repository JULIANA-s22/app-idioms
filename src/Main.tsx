
import ReactDOM from "react-dom/client";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <Auth0Provider
      domain="dev-2vhxvrobzzxboo5z.us.auth0.com"
      clientId="QuPkwqn5CPrbNUSPYtA06rO2ALv0BO6b"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Auth0Provider>
  );
} else {
  throw new Error('Root element not found');
}
