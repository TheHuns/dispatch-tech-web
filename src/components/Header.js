import React from "react";
import sadface from "../assets/sadface.jpg";

export default function Header() {
  return (
    <div className="header">
      <img
        src={sadface}
        alt="avatar"
        style={{ height: "25px", width: "25px" }}
      />
      <h5>John Smith</h5>
    </div>
  );
}
