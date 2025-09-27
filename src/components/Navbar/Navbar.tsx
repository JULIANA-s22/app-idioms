

import logoutIcon from "../../assets/cerrar-sesion.png";
import "./styles/Navbar.css";
import { useAuth0 } from "@auth0/auth0-react";

export default function Navbar() {
  const { isAuthenticated, loginWithRedirect, logout, user, isLoading } = useAuth0();

  return (
    <header className="navbar">
      

      {!isLoading && isAuthenticated ? (
        <button className="logout-btn" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
          <img src={logoutIcon} alt="logout" className="logout-icon" />
          <span>Cerrar Sesión</span>
        </button>
      ) : (
        <button className="logout-btn" onClick={() => loginWithRedirect()}>
          <span>Iniciar Sesión</span>
        </button>
      )}
    </header>
  );
}
