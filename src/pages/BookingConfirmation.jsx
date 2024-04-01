import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

const BookingConfirmation = () => {
  const location = useLocation();
  const { serviceType, name, phone, vehicleMake, vehicleModel, origin, destination, dateTime, distance } = location.state;

  return (
    <Box>
      <Heading>Booking Confirmation</Heading>
      <Text>Service Type: {serviceType}</Text>
      <Text>Name: {name}</Text>
      <Text>Phone: {phone}</Text>
      <Text>Vehicle Make: {vehicleMake}</Text>
      <Text>Vehicle Model: {vehicleModel}</Text>
      <Text>Origin: {origin}</Text>
      <Text>Destination: {destination}</Text>
      <Text>Date & Time: {dateTime}</Text>
      <Text>Distance: {distance} km</Text>
    </Box>
  );
};

export default BookingConfirmation;
