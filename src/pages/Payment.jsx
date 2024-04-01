import React from "react";
import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { useParams, useNavigate } from "react-router-dom";

const Payment = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handlePayment = () => {
    // Simulate payment processing
    navigate(`/rating/${id}`);
  };

  return (
    <Box>
      <Heading as="h1">Payment</Heading>
      <Text>Booking ID: {id}</Text>
      <Text>Amount: $100</Text>
      <Button onClick={handlePayment}>Pay Now</Button>
    </Box>
  );
};

export default Payment;
