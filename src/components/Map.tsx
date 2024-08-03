import React, { useEffect, useRef } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";
import L from "leaflet";
import "leaflet-draw";

const MapWithDrawControl: React.FC = () => {
  const map = useMap();
  const drawnItems = useRef<L.FeatureGroup>(L.featureGroup()).current;

  useEffect(() => {

    const existingControls = document.querySelector('.leaflet-draw.leaflet-control');
    if (existingControls) return;

    const drawControl = new L.Control.Draw({
      edit: {
        featureGroup: drawnItems,
      },
    });
    map.addControl(drawControl);

    map.on(L.Draw.Event.CREATED, (event: L.LeafletEvent) => {
      const layer = (event as L.DrawEvents.Created).layer;
      drawnItems.addLayer(layer);
    });
  }, []);

  return null;
};

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
      <MapWithDrawControl />
    </MapContainer>
  );
};

export default MapComponent;
