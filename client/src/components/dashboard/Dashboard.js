import React, { useEffect } from "react";
import NumberCard from "./NumberCard";
import {
  faTicketAlt,
  faChartBar,
  faUserClock
} from "@fortawesome/free-solid-svg-icons";
import MapComponent from "./Map";
import { useSelector, useDispatch, connect } from "react-redux";
import { getTickets, getOpenTickets } from "../../store/actions/tickets";

function Dashboard() {
  const dispatch = useDispatch();
  const tickets = useSelector(state => state.tickets.tickets);
  const openTickets = useSelector(state => state.tickets.openTickets);

  useEffect(() => {
    dispatch(getTickets());
  }, []);

  useEffect(() => {
    dispatch(getOpenTickets());
  }, []);

  return (
    <div className="dashboard-wrapper">
      <h2>Dashboard</h2>
      <div className="card-wrapper">
        <NumberCard
          icon={faTicketAlt}
          count={openTickets.length}
          name="Open Tickets"
          grid="1"
        />
        <NumberCard
          icon={faChartBar}
          count={tickets.length}
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

const mapStateToProps = state => ({
  tickets: state.tickets
});

export default connect(mapStateToProps, { getTickets })(Dashboard);
