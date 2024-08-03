import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";
import "leaflet-draw";
import MapDrawControls from "./MapDrawControls";

const DEFAULT_CENTER: L.LatLngExpression | undefined = [51.505, -0.09];

const MapComponent: React.FC = (props) => {
  return (
    <MapContainer
      center={DEFAULT_CENTER}
      zoom={13}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <MapDrawControls {...props} />
    </MapContainer>
  );
};

export default MapComponent;
