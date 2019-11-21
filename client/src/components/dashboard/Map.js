import React from "react";
import Map from "pigeon-maps";
import Marker from "pigeon-marker";
import { useSelector } from "react-redux";

const MapComponent = () => {
  const markers = useSelector(state => state.tickets.tickets);

  return (
    <Map center={[37.25, -107.6997]} zoom={11} height={600}>
      {markers.map((marker, index) => (
        <Marker anchor={[marker.lat, marker.lng]} key={index} />
      ))}
    </Map>
  );
};

export default MapComponent;
