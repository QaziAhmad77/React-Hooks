import React, { useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

const Navbar = (props) => {
  let location = useLocation();
  useEffect(() => {
    console.log(location.pathname);
    console.log(location);
  }, [location]);

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className={`nav-link ${location.pathname === "/useState" ? "active" : ""}`} aria-current="page" to="/useState">
              useState
            </Link>
          </li>
          <li className="nav-item active">
            <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} to="/useEffect">
              useEffect
            </Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/useReducer">
              useReducer
            </Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${location.pathname === "/useParams" ? "active" : ""}`} to="/useParams">
              useParams
            </Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${location.pathname === "/useLocation" ? "active" : ""}`} to="/useLocation">
              useLocation
            </Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${location.pathname === "/useNavigate" ? "active" : ""}`} to="/useNavigate">
              useNavigate
            </Link>
          </li>
        </ul>
        <div className={`form-check mx-5 form-switch text-${props.mode === "light" ? "black" : "light"}`}>
          <input
            className="form-check-input"
            onClick={() => {
              props.toggleMode(null);
            }}
            type="checkbox"
            id="flexSwitchCheckDefault"
          />
          <label htmlFor="flexSwitchCheckDefault" className="form-check-label">
            {props.mode}
          </label>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
