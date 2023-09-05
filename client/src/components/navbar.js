import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

export const Navbar = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.clear();
    navigate("/auth");
  };

  return (
    <div className="navbar">
      <p className="project-name">passON!</p>
      <Link to="/" className="nav-link">
        Home
      </Link>
      {!cookies.access_token ? (
        <Link to="/auth" className="nav-link form-button auth-button button" id="userAuth">
          Login/Register
        </Link>
      ) : (
        <>
          <Link to="/new-listing" className="nav-link form-button auth-button">
            New Listing
          </Link>
          <button onClick={logout} className="nav-link form-button auth-button button" id="userAuth">
            Logout
          </button>
        </>
      )}
    </div>
  );
};
