import React, { useState } from "react";
import { Box } from "@chakra-ui/react";

const InteractiveMap = ({ onMapData }) => {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [distance, setDistance] = useState(0);

  const handleMapInteraction = () => {
    const simulatedOrigin = "123 Main St";
    const simulatedDestination = "456 Oak Ave";
    const simulatedDistance = 10;

    setOrigin(simulatedOrigin);
    setDestination(simulatedDestination);
    setDistance(simulatedDistance);

    onMapData({
      origin: simulatedOrigin,
      destination: simulatedDestination,
      distance: simulatedDistance,
    });
  };

  return (
    <Box mb={4}>
      <h3>Interactive Map</h3>
      <p>Origin: {origin}</p>
      <p>Destination: {destination}</p>
      <button onClick={handleMapInteraction}>Simulate Map Interaction</button>
    </Box>
  );
};

export default InteractiveMap;
