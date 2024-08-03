import L from "leaflet";
import * as turf from "@turf/turf";

export const latLngsToPolygon = (latLngs: any): any => {
  const coordinates = latLngs.map((point: any) => [point.lng, point.lat]);

  // Ensure the polygon is closed by repeating the first coordinate at the end
  coordinates.push(coordinates[0]);
  return turf.polygon([coordinates]);
};

// Check polygon intersect
export const polygonsIntersect = (
  polygon1: L.Polygon,
  polygon2: L.Polygon
): boolean => {
  const turfPolygon1Coords: L.LatLng[] = polygon1.getLatLngs() as L.LatLng[];
  const turfPolygon2Coords: L.LatLng[] = polygon2.getLatLngs() as L.LatLng[];

  const turfPolygon1 = latLngsToPolygon(turfPolygon1Coords[0]);
  const turfPolygon2 = latLngsToPolygon(turfPolygon2Coords[0]);
  return turf.booleanOverlap(turfPolygon1, turfPolygon2);
};

// Function to check for polygon intersections
export const checkForIntersections = (map: L.Map) => {
  let polygons: L.Polygon[] = [];
  map.eachLayer((e: L.Layer) => {
    if (e instanceof L.Polygon) {
      polygons.push(e);
    }
  });

  for (let i = 0; i < polygons.length; i++) {
    for (let j = i + 1; j < polygons.length; j++) {
      if (polygonsIntersect(polygons[i], polygons[j])) {
        const intersectedPolygon = polygons[j];
        intersectedPolygon.setStyle({ fillColor: "red", color: "red" });
      }
    }
  }
};
