import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NumberCard({ icon, count, name }) {
  return (
    <div className="card-container">
      <div className="icon-left">
        <FontAwesomeIcon icon={icon} />
      </div>
      <div className="right-column">
        <div className="number">{count}</div>
        <div className="name">{name}</div>
      </div>
    </div>
  );
}
