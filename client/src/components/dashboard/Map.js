import React, { Component } from "react";
import Map from "pigeon-maps";
import Marker from "pigeon-marker";

const data = [
  {
    lat: 37.27,
    long: -107.69
  },
  {
    lat: 37.17,
    long: -107.69
  },
  {
    lat: 37.27,
    long: -107.79
  }
];

export default class MapComponent extends Component {
  render() {
    return (
      <Map center={[37.25, -107.6997]} zoom={11} height="60vh">
        {data.map((marker, index) => (
          <Marker anchor={[marker.lat, marker.long]} key={index} />
        ))}
      </Map>
    );
  }
}
