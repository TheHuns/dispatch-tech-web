import React from "react";

export default function Ticket({ name, address, date, service, index }) {
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
    </div>
  );
}
