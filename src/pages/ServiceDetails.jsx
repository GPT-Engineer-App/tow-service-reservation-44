import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const ServiceDetails = () => {
  // Sample service details
  const service = {
    name: "Towing Service",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$50",
    duration: "1 hour",
  };

  return (
    <Box>
      <Heading as="h1">Service Details</Heading>
      <Text>Name: {service.name}</Text>
      <Text>Description: {service.description}</Text>
      <Text>Price: {service.price}</Text>
      <Text>Duration: {service.duration}</Text>
    </Box>
  );
};

export default ServiceDetails;
