import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const ServiceHistory = () => {
  // Sample service history data
  const serviceHistory = [
    { id: 1, serviceName: "Towing Service", date: "2022-04-01", cost: "$50" },
    { id: 2, serviceName: "Mechanical Repair", date: "2022-03-15", cost: "$100" },
    // Add more service history items as needed
  ];

  return (
    <Box>
      <Heading as="h1">Service History</Heading>
      {serviceHistory.map((service) => (
        <Box key={service.id} mt={4}>
          <Text>Service: {service.serviceName}</Text>
          <Text>Date: {service.date}</Text>
          <Text>Cost: {service.cost}</Text>
        </Box>
      ))}
    </Box>
  );
};

export default ServiceHistory;
