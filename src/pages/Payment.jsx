import React from "react";
import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";

const Payment = () => {
  const location = useLocation();
  const { bookingId, cost } = location.state;
  const navigate = useNavigate();

  const handlePayment = () => {
    // Process payment
    navigate("/thank-you");
  };

  return (
    <Box>
      <Heading as="h1">Payment</Heading>
      <Text>Booking ID: {bookingId}</Text>
      <Text>Amount: ${cost}</Text>
      <Button onClick={handlePayment}>Pay Now</Button>
    </Box>
  );
};

export default Payment;
