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
    const simulatedDistance = 10;
    setDistance(simulatedDistance);

    onMapData({
      origin,
      destination,
      distance: simulatedDistance,
    });
  };

  return (
    <Box mb={4}>
      <h3>Interactive Map</h3>
      <p>Click on the map to select origin and destination or enter coordinates:</p>
      <Input placeholder="Origin Coordinates" value={originCoords} onChange={handleOriginChange} mb={2} />
      <Input placeholder="Destination Coordinates" value={destinationCoords} onChange={handleDestinationChange} mb={2} />
      <div id="map" style={{ height: "400px" }} onClick={handleMapClick}></div>
      <p>Origin: {origin}</p>
      <p>Destination: {destination}</p>
      <p>Distance: {distance} km</p>
    </Box>
  );
};

export default InteractiveMap;
