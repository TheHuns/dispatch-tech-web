import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faChartLine,
  faPersonBooth,
  faPen,
  faSearch,
  faDesktop
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <div className="navbar-wrapper">
      <div className="brand">
        <FontAwesomeIcon icon={faDesktop} />
        <h3>
          dispatch<span>a</span>tech
        </h3>
      </div>
      <nav>
        <Link to="#">
          <FontAwesomeIcon icon={faChartLine} className="nav-icon" />
          <span>Dashboard</span>
        </Link>
        <Link to="#">
          <FontAwesomeIcon icon={faPersonBooth} className="nav-icon" />
          <span>Techs on Duty</span>
        </Link>
        <Link to="#">
          <FontAwesomeIcon icon={faPen} className="nav-icon" />
          <span>Create Service Request</span>
        </Link>
        <Link to="#">
          <FontAwesomeIcon icon={faSearch} className="nav-icon" />
          <span>Search Closed Services</span>
        </Link>
        <Link to="#">
          <FontAwesomeIcon icon={faClock} className="nav-icon" />
          <span>Logout</span>
        </Link>
      </nav>
    </div>
  );
}
