import React, { useEffect, useRef } from 'react';
import { useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-draw/dist/leaflet.draw.css';
import L from 'leaflet';
import 'leaflet-draw';

const MapWithDrawControl: React.FC = () => {
  const map = useMap();
  const drawnItems = useRef<L.FeatureGroup>(L.featureGroup()).current;

  useEffect(() => {
    if (!map) return;

    // Check if draw control already exists
    const existingControls = document.querySelector('.leaflet-draw.leaflet-control');
    if (existingControls) return;

    const drawControl = new L.Control.Draw({
      draw: {
        polyline: false,
        rectangle: false,
        circle: false,
        marker: false
      },
      edit: {
        featureGroup: drawnItems, // Features that can be edited
        remove: true
      }
    });

    map.addControl(drawControl);
    map.addLayer(drawnItems);

    // Handle the creation of new polygons
    map.on(L.Draw.Event.CREATED, (event: L.LeafletEvent) => {
      const layer = (event as L.DrawEvents.Created).layer;
      drawnItems.addLayer(layer);
    });

    // Handle feedback while editing
    map.on(L.Draw.Event.EDITSTART, (event: L.LeafletEvent) => {
      map.eachLayer((layer) => {
        if (layer instanceof L.Polygon) {
          layer.setStyle({ fillColor: 'red', weight: 2, dashArray: '5, 5' }); // Visual indication for edit mode
        }
      });
    });

    map.on(L.Draw.Event.EDITMOVE, (event: L.LeafletEvent) => {
      console.log('Vertex moved:', event);
      const layers = (event as L.DrawEvents.Edited).layers;
      layers?.eachLayer((layer) => {
        if (layer instanceof L.Polygon) {
          // This event is more for feedback after the move
          layer.setStyle({ fillColor: 'red', weight: 2, dashArray: '5, 5' }); // Maintain visual indication
        }
      });
    });

    map.on(L.Draw.Event.EDITSTOP, (event: L.LeafletEvent) => {
      console.log('Editing stopped:', event);
      const layers = (event as L.DrawEvents.Edited).layers;
      layers?.eachLayer((layer) => {
        if (layer instanceof L.Polygon) {
          layer.setStyle({ color: 'red', weight: 2 }); // Revert to default style after editing
        }
      });
    });

    map.on(L.Draw.Event.DRAWSTOP, () => {
      console.log('Drawing stopped');
    });

    // Cleanup function to remove the control and event listeners
    return () => {
      map.removeControl(drawControl);
      map.off(L.Draw.Event.CREATED);
      map.off(L.Draw.Event.EDITSTART);
      map.off(L.Draw.Event.EDITMOVE);
      map.off(L.Draw.Event.EDITSTOP);
      map.off(L.Draw.Event.DRAWSTOP);
    };
  }, [map, drawnItems]);

  return null;
};

export default MapWithDrawControl;
