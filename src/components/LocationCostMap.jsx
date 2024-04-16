//src/components/LocationCostMap.jsx
import { Box, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const API_URL = "https://backengine-93sw.fly.dev";

const LocationCostMap = () => {
  const [locationCosts, setLocationCosts] = useState([]);

  useEffect(() => {
    fetchLocationCosts();
  }, []);

  const fetchLocationCosts = async () => {
    try {
      const response = await fetch(`${API_URL}/location-costs`);
      if (response.ok) {
        const data = await response.json();
        setLocationCosts(data);
      } else {
        console.error("Failed to fetch location costs");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Box>
      <h2>Location Cost Map</h2>
      <Table>
        <Thead>
          <Tr>
            <Th>Origin</Th>
            <Th>Destination</Th>
            <Th>Cost</Th>
          </Tr>
        </Thead>
        <Tbody>
          {locationCosts.map((cost) => (
            <Tr key={`${cost.origin}-${cost.destination}`}>
              <Td>{cost.origin}</Td>
              <Td>{cost.destination}</Td>
              <Td>{cost.cost}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default LocationCostMap;
