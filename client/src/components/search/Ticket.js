import React from "react";
import { useDispatch } from "react-redux";

import { deleteTicket } from "../../store/actions/tickets";

const Ticket = ({ index, name, address, service, id }) => {
  const dispatch = useDispatch();

  return (
    <div className="ticket-container">
      <h3>{index + 1 + "."}</h3>
      <div className="name">
        <strong>Name: </strong>
        <p>{name}</p>
      </div>
      <div className="address">
        <strong>Address: </strong>
        <p>{address}</p>
      </div>
      <div className="service">
        <strong>Service: </strong>
        <p>{service}</p>
      </div>
      <button>Details</button>
      <button onClick={() => dispatch(deleteTicket(id))}>Delete</button>
    </div>
  );
};

export default Ticket;
