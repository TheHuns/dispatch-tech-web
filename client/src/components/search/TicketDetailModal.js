import React from "react";
import Map from "pigeon-maps";
import Marker from "pigeon-marker";

export default function TicketDetailModal({ ticket, closeModal }) {
  return (
    <div className="modal-container">
      <div className="map-container">
        <Map center={[37.25, -107.6997]} zoom={11} height={"100%"}>
          <Marker anchor={[ticket.lat, ticket.lng]} key={ticket.index} />
        </Map>
      </div>
      <div className="info-container">
        <div className="left-column">
          <h2>Name: {ticket.name}</h2>
          <h3>Address: {ticket.autoAddress}</h3>
        </div>
        <div className="right-column">
          <h3>Service Requested</h3>
          <p>{ticket.serviceRequested}</p>
          <button onClick={closeModal(false)}>Close</button>
        </div>
      </div>
    </div>
  );
}
