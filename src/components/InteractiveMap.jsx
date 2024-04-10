import React, { useState } from "react";
import { Box } from "@chakra-ui/react";

const InteractiveMap = ({ onMapData }) => {
  const [originCoords, setOriginCoords] = useState("");
  const [destinationCoords, setDestinationCoords] = useState("");
  const [distance, setDistance] = useState(0);

  const handleMapClick = (event) => {
    const { lat, lng } = event.latLng;
    if (!originCoords) {
      setOriginCoords(`${lat()}, ${lng()}`);
    } else if (!destinationCoords) {
      setDestinationCoords(`${lat()}, ${lng()}`);
      calculateDistance();
    }
  };

  const calculateDistance = () => {
    if (!originCoords || !destinationCoords) return;

    const service = new window.google.maps.DistanceMatrixService();
    service.getDistanceMatrix(
      {
        origins: [originCoords],
        destinations: [destinationCoords],
        travelMode: "DRIVING",
      },
      (response, status) => {
        if (status === "OK") {
          const distanceText = response.rows[0].elements[0].distance.text;
          setDistance(distanceText);
          onMapData({ origin: originCoords, destination: destinationCoords, distance: distanceText });
        } else {
          console.error("Error calculating distance:", status);
        }
      }
    );
  };

  return (
    <Box>
      <h3>Interactive Map</h3>
      <p>Click on the map to select origin and destination:</p>
      <div id="map" style={{ height: "400px", backgroundColor: "blue", color: "white" }} onClick={handleMapClick}></div>
      <p>Origin Coordinates: {originCoords}</p>
      <p>Destination Coordinates: {destinationCoords}</p>
    </Box>
  );
};

export default InteractiveMap;
