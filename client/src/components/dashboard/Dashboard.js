import React, {useEffect} from "react";
import NumberCard from "./NumberCard";
import {
  faTicketAlt,
  faChartBar,
  faUserClock
} from "@fortawesome/free-solid-svg-icons";
import MapComponent from "./Map";
import { useSelector } from "react-redux";
import * as ticketActions from '../../store/actions/tickets'

export default function Dashboard() {
  useEffect(() => {
    ticketActions.getTickets();
    
  })

  const tickets = useSelector(state => state.tickets.tickets);

  return (
    <div className="dashboard-wrapper">
      <h3>Dashboard</h3>
      <div className="card-wrapper">
        <NumberCard
          icon={faTicketAlt}
          count={tickets.length}
          name="Open Tickets"
          grid="1"
        />
        <NumberCard
          icon={faChartBar}
          count="76"
          name="Total Tickets"
          grid="2"
          style={{ backgroundColor: "#3d3d3d" }}
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
