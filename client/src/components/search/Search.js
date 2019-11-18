import React, { useEffect } from "react";
import Ticket from "./Ticket";
import { useSelector, useDispatch } from "react-redux";

import { getTickets } from "../../store/actions/tickets";

const Search = props => {
  const tickets = useSelector(state => state.tickets.tickets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTickets());
  });

  const reloadTickets = () => {
    props.history.push("/");
  };

  return (
    <div className="ticket-list-wrapper">
      <h2>Current Open Tickets</h2>

      {tickets.map((ticket, index) => {
        return (
          <Ticket
            index={index}
            key={index}
            name={ticket.name}
            date={ticket.dateRequested}
            service={ticket.serviceRequested}
            address={ticket.address}
            id={ticket._id}
            reloadTickets={reloadTickets}
          />
        );
      })}
    </div>
  );
};

export default Search;
