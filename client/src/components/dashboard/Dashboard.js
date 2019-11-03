import React from "react";
import NumberCard from "./NumberCard";
import {
  faTicketAlt,
  faChartBar,
  faUserClock
} from "@fortawesome/free-solid-svg-icons";
import MapComponent from "./Map";

export default function Dashboard() {
  return (
    <div className="dashboard-wrapper">
      <h3>Dashboard</h3>
      <div className="card-wrapper">
        <NumberCard
          icon={faTicketAlt}
          count="26"
          name="Open Tickets"
          grid="1"
        />
        <NumberCard
          icon={faChartBar}
          count="76"
          name="Total Tickets"
          grid="2"
        />
        <NumberCard
          icon={faUserClock}
          count="45:26"
          name="Average Time"
          grid="3"
        />
      </div>
      <MapComponent />
    </div>
  );
}
