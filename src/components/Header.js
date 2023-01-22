import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  let location = useLocation();
  let navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container-fluid">
        <img src="./favicon.png" width={24} />
        <Link className="navbar-brand ms-1 " to="/">
          N&A Marvels
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/" ? "active" : ""
                }`}
                aria-current="page"
                to="/"
              >
                🏠 Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/filter/monument" ? "active" : ""
                }`}
                aria-current="page"
                to="/filter/monument"
              >
                Monuments
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/filter/fort" ? "active" : ""
                }`}
                aria-current="page"
                to="/filter/fort"
              >
                Forts
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/filter/temple" ? "active" : ""
                }`}
                aria-current="page"
                to="/filter/temple"
              >
                Temples
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/about" ? "active" : ""
                }`}
                to="/about"
              >
                📃 About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/contact" ? "active" : ""
                }`}
                to="/contact"
              >
                📝 Contact Us
              </Link>
            </li>
          </ul>

          {localStorage.getItem("token") ? (
            <Link className="btn btn-outline-dark" onClick={handleLogout}>
              Logout
            </Link>
          ) : (
            <div className="row g-2">
              <div className="col-md text-md-end">
                <Link className="btn btn-sm btn-success" to="/login">
                  Login
                </Link>
              </div>
              <div className="col-md">
                <Link className="btn btn-sm btn-primary" to="/register">
                  Signup
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
