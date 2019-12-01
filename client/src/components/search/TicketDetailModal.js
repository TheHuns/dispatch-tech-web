import React from "react";
import Map from "pigeon-maps";
import Marker from "pigeon-marker";
import { useSelector } from "react-redux";

export default function TicketDetailModal() {
  const ticket = useSelector(state => state.tickets.detailTicket[0]);

  return (
    <div className="detail-container">
      <div className="map-container">
        <Map className="map" center={[37.25, -107.6997]} zoom={11} height={400}>
          <Marker anchor={[ticket.lat, ticket.lng]} key={ticket.index} />
        </Map>
      </div>
      <div className="info-container">
        <div className="left-column">
          <h2>
            Name: <span className="dynamic-text">{ticket.name}</span>
          </h2>
          <h3>
            Address: <span className="dynamic-text">{ticket.autoAddress}</span>
          </h3>
        </div>
        <div className="right-column">
          <h3>Service Requested</h3>
          <p>{ticket.serviceRequested}</p>
          <button onClick={() => {}}>Close</button>
        </div>
      </div>
    </div>
  );
}
