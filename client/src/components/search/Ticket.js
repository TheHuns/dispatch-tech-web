import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { deleteTicket, setDetailTicket } from "../../store/actions/tickets";

const Ticket = ({ index, name, autoAddress, service, id, history }) => {
  const dispatch = useDispatch();

  const routeToDetail = () => {
    history.push("/details");
  };

  useEffect(() => {
    console.log(history);
  });

  return (
    <div className="ticket-container">
      <h3>{index + 1 + "."}</h3>
      <div className="name">
        <strong>Name: </strong>
        <p>{name}</p>
      </div>
      <div className="address">
        <strong>Address: </strong>
        <p>{autoAddress}</p>
      </div>
      <div className="service">
        <strong>Service: </strong>
        <p>{service}</p>
      </div>
      <button
        onClick={() => {
          routeToDetail();
          dispatch(setDetailTicket(id));
        }}
      >
        Details
      </button>
      <button
        className="delete-button"
        onClick={() => dispatch(deleteTicket(id))}
      >
        Delete
      </button>
    </div>
  );
};

export default Ticket;
