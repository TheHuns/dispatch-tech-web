import React from "react";
import { NavLink } from "react-router-dom";
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
        <NavLink exact to="/" activeClassName="active">
          <FontAwesomeIcon icon={faChartLine} className="nav-icon" />
          <span>Dashboard</span>
        </NavLink>
        <NavLink to="/techs" activeClassName="active">
          <FontAwesomeIcon icon={faPersonBooth} className="nav-icon" />
          <span>Techs on Duty</span>
        </NavLink>
        <NavLink to="/ticketForm" activeClassName="active">
          <FontAwesomeIcon icon={faPen} className="nav-icon" />
          <span>Create Ticket</span>
        </NavLink>
        <NavLink to="/search" activeClassName="active">
          <FontAwesomeIcon icon={faSearch} className="nav-icon" />
          <span>Tickets</span>
        </NavLink>
      </nav>
    </div>
  );
}
