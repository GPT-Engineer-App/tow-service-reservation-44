// InteractiveMap.js
import React, { useState } from "react";
import { Box, Input } from "@chakra-ui/react";

const InteractiveMap = ({ onMapData }) => {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [distance, setDistance] = useState(0);
  const [originCoords, setOriginCoords] = useState("");
  const [destinationCoords, setDestinationCoords] = useState("");

  const handleMapClick = (event) => {
    const { lat, lng } = event.latlng;
    if (!origin) {
      setOrigin(`${lat}, ${lng}`);
      setOriginCoords(`${lat}, ${lng}`);
    } else if (!destination) {
      setDestination(`${lat}, ${lng}`);
      setDestinationCoords(`${lat}, ${lng}`);
      calculateDistance();
    }
  };

  const handleOriginChange = (event) => {
    setOriginCoords(event.target.value);
  };

  const handleDestinationChange = (event) => {
    setDestinationCoords(event.target.value);
  };

  const calculateDistance = () => {
    const [originLat, originLng] = originCoords.split(",").map(parseFloat);
    const [destLat, destLng] = destinationCoords.split(",").map(parseFloat);

    const R = 6371;
    const dLat = (destLat - originLat) * (Math.PI / 180);
    const dLng = (destLng - originLng) * (Math.PI / 180);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(originLat * (Math.PI / 180)) * Math.cos(destLat * (Math.PI / 180)) * Math.sin(dLng / 2) * Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const calculatedDistance = R * c;

    setDistance(calculatedDistance.toFixed(2));

    onMapData({
      origin,
      destination,
      distance: calculatedDistance.toFixed(2),
    });
  };

  return (
    <Box mb={4}>
      <h3>Interactive Map</h3>
      <p>Click on the map to select origin and destination or enter coordinates:</p>
      <Input placeholder="Origin Coordinates" value={originCoords} onChange={handleOriginChange} mb={2} />
  <Input placeholder="Destination Coordinates" value={destinationCoords} onChange={handleDestinationChange} mb={2} />
  <div id="map" style={{ textDecoration: "none", bg: "blue.500", color: "white", height: "400px" }} onClick={handleMapClick}></div>
  <p>Origin: {origin}</p>
  <p>Destination: {destination}</p>
  <p>Distance: {distance} km</p>
</Box>
);
};

export default InteractiveMap;