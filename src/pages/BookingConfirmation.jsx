import React from "react";
import { Text, Button } from "@chakra-ui/react";

const BookingConfirmation = ({ cost, handlePayment }) => {
  return (
    <>
      <Text>Cost: ${cost}</Text>
      <Button onClick={handlePayment}>Proceed to Payment</Button>
    </>
  );
};

export default BookingConfirmation;
