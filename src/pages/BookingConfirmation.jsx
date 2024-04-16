//src/pages/BookingConfirmation.jsx
import { Button, Text } from "@chakra-ui/react";
import React from "react";

const BookingConfirmation = ({ cost, handlePayment }) => {
  return (
    <>
      <Text>Cost: ${cost}</Text>
      <Button onClick={handlePayment}>Proceed to Payment</Button>
    </>
  );
};

export default BookingConfirmation;
