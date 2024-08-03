import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";
import "leaflet-draw";
import MapDrawControls from "./MapDrawControls";

const MapComponent: React.FC = () => {
  return (
    <MapContainer
      center={[51.505, -0.09]} // Default center
      zoom={13}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <MapDrawControls />
    </MapContainer>
  );
};

export default MapComponent;
