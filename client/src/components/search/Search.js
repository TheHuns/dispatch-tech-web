import React, { useEffect, useState } from "react";
import Ticket from "./Ticket";
import { useSelector, useDispatch } from "react-redux";

import { getTickets } from "../../store/actions/tickets";
import TicketDetailModal from "./TicketDetailModal";

const Search = props => {
  const tickets = useSelector(state => state.tickets.tickets);
  const dispatch = useDispatch();

  const [isModalOpen, setModalOpen] = useState(false);
  const [detailIndex, setDetailIndex] = useState(null);

  useEffect(() => {
    dispatch(getTickets());
  });

  const reloadTickets = () => {
    props.history.push("/");
  };

  if (isModalOpen) {
    return (
      <TicketDetailModal
        ticket={tickets[detailIndex]}
        closeModal={setModalOpen}
      />
    );
  }

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
            autoAddress={ticket.autoAddress}
            id={ticket._id}
            reloadTickets={reloadTickets}
            setDetailIndex={setDetailIndex}
            setModalOpen={setModalOpen}
          />
        );
      })}
    </div>
  );
};

export default Search;
